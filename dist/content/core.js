// Core Skills: the toolbox every genre uses.
export const core = [
  {
    id: 'core-fixed',
    title: 'Smooth speed',
    minutes: 20,
    tags: ['Fixed-point', 'Math'],
    hook: 'The GBA has no decimal hardware, yet your hero can glide at 0.75 pixels per frame. Here is the trick.',
    predict: {
      q: 'A speed of 0.5 pixels per frame. How many frames until the hero has moved 10 pixels?',
      options: [
        { t: '20 frames', ok: true, why: '10 ÷ 0.5 = 20. Fractional speeds give you control that whole pixels cannot.' },
        { t: '5 frames', why: 'That would be 2 pixels per frame.' },
        { t: '10 frames', why: 'That would be 1 pixel per frame.' }
      ]
    },
    try: {
      filename: 'src/main.cpp',
      lang: 'cpp',
      code: `#include "bn_core.h"
#include "bn_keypad.h"
#include "bn_fixed.h"
#include "bn_fixed_point.h"
#include "bn_sprite_ptr.h"
#include "bn_sprite_items_player.h"

bn::fixed_point read_dpad()
{
    int x = int(bn::keypad::right_held()) - int(bn::keypad::left_held());
    int y = int(bn::keypad::down_held())  - int(bn::keypad::up_held());
    bn::fixed_point dir(x, y);

    if(x != 0 && y != 0)
    {
        dir = dir * bn::fixed(0.7071);   // 1 / sqrt(2): same speed on a diagonal
    }
    return dir;
}

int main()
{
    bn::core::init();
    bn::sprite_ptr hero = bn::sprite_items::player.create_sprite(0, 0);
    bn::fixed_point pos(0, 0);
    bn::fixed speed = 1.5;

    while(true)
    {
        pos += read_dpad() * speed;
        hero.set_position(pos);
        bn::core::update();
    }
}`,
      notes: [
        '`bn::fixed` stores a number as an integer scaled by 4096 (12 fractional bits). Fast on the GBA, and exact for steps like 0.25 or 1.5.',
        'Why the diagonal fix? Moving right 1 and down 1 covers √2 ≈ 1.41 pixels. Scaling by 0.7071 makes every direction the same speed.',
        'Keep the true position in `pos` and copy it to the sprite. Tiny steps survive between frames, even when the sprite only shows whole pixels.'
      ],
      run: 'Diagonal speed now feels the same as straight speed.'
    },
    breakIt: {
      intro: 'You write the speed with an int:',
      code: `int speed = 0.5;     // half a pixel per frame, right?
pos += read_dpad() * speed;`,
      q: 'What happens?',
      options: [
        { t: 'speed is 0, so the hero never moves', ok: true, why: 'Converting 0.5 to int cuts off the fraction. Whole-number types cannot store halves. Use bn::fixed.' },
        { t: 'It moves at half speed', why: 'The compiler turned 0.5 into 0 before it was ever used.' },
        { t: 'Compile error', why: 'C++ allows the conversion silently, which is why it bites.' }
      ]
    },
    decide: {
      q: 'To make diagonals fair, which approach fits a GBA game?',
      options: [
        { t: 'Multiply by the constant 0.7071', ok: true, why: 'One multiply per frame. With only 8 directions, a constant is exact enough.' },
        { t: 'Compute the true length with a square root every frame', why: 'It is correct for any angle, but square roots are slow on this CPU. Save it for analog-style aiming, and even then use a lookup.' }
      ],
      insight: 'Game programming on small hardware is often "cheap and good enough". Know the exact method, then choose the cheap one on purpose.'
    },
    twist: {
      task: 'Add a "run" button: holding B doubles the speed. Then make the hero accelerate smoothly (speed ramps from 0 up to a maximum) instead of starting at full speed.',
      doneWhen: ['B makes the hero faster', 'Starting to move feels like it eases in']
    },
    check: [
      {
        q: 'Why store the hero’s position in a bn::fixed_point instead of reading it back from the sprite each frame?',
        options: [
          { t: 'It keeps full precision and one clear source of truth', ok: true, why: 'Your game state lives in your variables. The sprite is just how you show it.' },
          { t: 'Sprites cannot report their position', why: 'They can. The point is that your own variable is the one authoritative place.' }
        ]
      }
    ],
    next: 'Checkpoint, then try the run-button twist. Next: game states, so your game can have a title screen and a pause.',
    commit: 'feat: fixed-point movement with fair diagonals',
    deeper: ['fixed']
  },

  {
    id: 'core-state',
    title: 'Title, play, pause',
    minutes: 25,
    tags: ['State machines', 'Game flow'],
    hook: 'A game is a set of screens. A tiny state machine gives yours a title, a pause, and a game over.',
    predict: {
      q: 'If a game can only be in one state at a time, what do you need to keep track of?',
      options: [
        { t: 'One variable that says which state we are in', ok: true, why: 'An enum holds exactly that. Everything else follows from it.' },
        { t: 'A separate true/false for every state', why: 'That allows impossible combos like "playing and paused". One variable makes those impossible.' }
      ]
    },
    try: {
      filename: 'src/main.cpp',
      lang: 'cpp',
      code: `#include "bn_core.h"
#include "bn_keypad.h"
#include "bn_fixed.h"
#include "bn_fixed_point.h"
#include "bn_sprite_ptr.h"
#include "bn_sprite_items_player.h"

enum class Scene { title, playing, paused, game_over };

int main()
{
    bn::core::init();
    bn::sprite_ptr hero = bn::sprite_items::player.create_sprite(0, 0);
    bn::fixed_point pos(0, 0);
    Scene scene = Scene::title;

    while(true)
    {
        switch(scene)
        {
        case Scene::title:
            hero.set_scale(3);                       // big hero = title screen
            if(bn::keypad::start_pressed())
            {
                pos = bn::fixed_point(0, 0);
                hero.set_scale(1);
                scene = Scene::playing;
            }
            break;

        case Scene::playing:
        {
            int x = int(bn::keypad::right_held()) - int(bn::keypad::left_held());
            int y = int(bn::keypad::down_held())  - int(bn::keypad::up_held());
            pos += bn::fixed_point(x, y) * 1.5;
            hero.set_position(pos);

            if(bn::keypad::start_pressed())
            {
                scene = Scene::paused;
            }
            if(pos.x() < -112 || pos.x() > 112 || pos.y() < -72 || pos.y() > 72)
            {
                scene = Scene::game_over;            // touched the edge
            }
            break;
        }

        case Scene::paused:
            hero.set_scale(2);                       // swollen hero = paused
            if(bn::keypad::start_pressed())
            {
                hero.set_scale(1);
                scene = Scene::playing;
            }
            break;

        case Scene::game_over:
            hero.set_rotation_angle(180);            // upside down = game over
            if(bn::keypad::a_pressed())
            {
                hero.set_rotation_angle(0);
                pos = bn::fixed_point(0, 0);
                hero.set_position(pos);
                scene = Scene::title;
            }
            break;
        }

        bn::core::update();                          // runs in EVERY state
    }
}`,
      notes: [
        '`enum class Scene` lists every state by name. A `switch` runs only the code for the current one.',
        'A transition is one line: `scene = Scene::paused;`. Each state decides when to leave.',
        '`core::update()` stays outside the switch, so the screen still refreshes while paused. Pausing the game is not pausing the machine.'
      ],
      run: 'Start begins, Start pauses, touching an edge ends, A returns to the title.'
    },
    breakIt: {
      intro: 'The pause toggle uses `start_held()` instead of `start_pressed()`:',
      q: 'You tap Start. What do you probably see?',
      options: [
        { t: 'Pause flickers between paused and playing', ok: true, why: 'Even a quick tap lasts several frames. Each frame flips the state again, so where it lands is luck. Transitions need `pressed`.' },
        { t: 'It pauses cleanly', why: 'Only if your tap lasted exactly an odd number of frames.' },
        { t: 'Nothing', why: 'It runs every frame, so something happens.' }
      ]
    },
    decide: {
      q: 'Where should the code that decides "which state next" live?',
      options: [
        { t: 'In each state’s own case', ok: true, why: 'Each state knows when it ends. You can read one state top to bottom and understand it.' },
        { t: 'In one big block of if-statements after the switch', why: 'It works, but the rules for a single state end up scattered, and every new state touches the same tangle.' }
      ],
      insight: 'Locality wins: keep everything about a state together. When a game has 10 states, you will thank yourself.'
    },
    twist: {
      task: 'Add a new `win` state. Pick a rule (reach a corner, survive 10 seconds), give the state its own look, and let A return to the title.',
      doneWhen: ['The win state triggers', 'Every path leads back to the title without leftover state']
    },
    check: [
      {
        q: 'Why does `core::update()` sit outside the switch?',
        options: [
          { t: 'The screen must refresh in every state, including pause', ok: true, why: 'If you skipped it while paused, the screen would freeze.' },
          { t: 'switch cannot call functions', why: 'It can. The reason is to keep the engine running.' }
        ]
      },
      {
        q: 'Why use an enum instead of several bools like is_paused, is_title?',
        options: [
          { t: 'Impossible state combinations cannot exist', ok: true, why: 'With one variable, the game is in exactly one state.' },
          { t: 'Bools are slower', why: 'Speed is not the issue; correctness is.' }
        ]
      }
    ],
    next: 'Checkpoint. Your game now has structure. Next: collisions, so things can touch.',
    commit: 'feat: add scene state machine',
    deeper: ['input', 'core']
  },

  {
    id: 'core-aabb',
    title: 'Do they touch?',
    minutes: 25,
    tags: ['Collision', 'AABB'],
    hook: 'Walls, pickups, enemies, bullets: every one is the same question. Do two boxes overlap?',
    predict: {
      q: 'Box A spans x from 0 to 10. Box B spans x from 10 to 20. Do they overlap, with strict `<` and `>` comparisons?',
      options: [
        { t: 'No, they only share an edge', ok: true, why: 'Overlap needs a real gap-free intersection. Boxes that merely touch do not count, so a hero can stand flush against a wall.' },
        { t: 'Yes', why: 'With strict comparisons, 10 < 10 is false. Edges alone are not overlap.' }
      ]
    },
    try: {
      filename: 'src/main.cpp',
      lang: 'cpp',
      code: `#include "bn_core.h"
#include "bn_keypad.h"
#include "bn_fixed.h"
#include "bn_fixed_point.h"
#include "bn_sprite_ptr.h"
#include "bn_sprite_items_player.h"

struct Box { bn::fixed left, top, right, bottom; };

bool overlaps(const Box& a, const Box& b)
{
    return a.left < b.right && a.right > b.left &&
           a.top < b.bottom && a.bottom > b.top;
}

Box box_at(bn::fixed_point center, bn::fixed half)
{
    return { center.x() - half, center.y() - half, center.x() + half, center.y() + half };
}

int main()
{
    bn::core::init();
    bn::sprite_ptr hero = bn::sprite_items::player.create_sprite(-60, 0);
    bn::sprite_ptr wall = bn::sprite_items::player.create_sprite(30, 0);
    wall.set_scale(3);                                     // a 48x48 wall

    const Box wall_box = box_at(wall.position(), 24);
    bn::fixed_point pos(-60, 0);

    while(true)
    {
        int x = int(bn::keypad::right_held()) - int(bn::keypad::left_held());
        int y = int(bn::keypad::down_held())  - int(bn::keypad::up_held());

        // Move one axis at a time so the hero slides along walls.
        bn::fixed_point next = pos;
        next.set_x(pos.x() + x * 2);
        if(! overlaps(box_at(next, 6), wall_box))
        {
            pos = next;
        }
        next = pos;
        next.set_y(pos.y() + y * 2);
        if(! overlaps(box_at(next, 6), wall_box))
        {
            pos = next;
        }

        hero.set_position(pos);
        bn::core::update();
    }
}`,
      notes: [
        'AABB means axis-aligned bounding box: a rectangle with no rotation. Cheap to test and good enough for most games.',
        'The hero’s box (half-size 6) is smaller than the 16×16 sprite, so it feels fair when art corners overlap.',
        'The recipe is "try the move, undo it if it hits". Doing x and y separately lets the hero slide along walls instead of sticking.'
      ],
      run: 'The hero stops at the wall and slides along it.'
    },
    breakIt: {
      intro: 'A buggy overlap function forgets the vertical check:',
      code: `bool overlaps(const Box& a, const Box& b)
{
    return a.left < b.right && a.right > b.left;   // y never checked!
}`,
      q: 'The hero walks in a level far above the wall. What happens?',
      options: [
        { t: 'The hero is blocked when it crosses the wall’s x-range, even far above or below', ok: true, why: 'Without the y test, the wall acts like an infinitely tall column. Overlap needs both axes.' },
        { t: 'The hero walks through the wall', why: 'It does the opposite: it is blocked too often.' },
        { t: 'Nothing changes', why: 'The missing check changes the result for every position.' }
      ]
    },
    decide: {
      q: 'The hero pushes diagonally into a wall. What should happen?',
      options: [
        { t: 'Stop completely (one combined move test)', why: 'Simple, but the hero sticks to walls and feels like it is stuck in glue.' },
        { t: 'Slide along the wall (test each axis separately)', ok: true, why: 'Players expect to slide. It costs one extra test and feels much better.' }
      ],
      insight: 'Feel is a design choice that lives in small code details. Always ask "what would the player expect?" before the first implementation.'
    },
    twist: {
      task: 'Add a pickup: a small sprite that disappears (hide it with `set_visible(false)`) when the hero touches it. Count pickups; when you have three, change the hero’s scale to celebrate.',
      doneWhen: ['Pickup vanishes once, never twice', 'The celebration triggers after exactly three']
    },
    check: [
      {
        q: 'Why test the x move and y move separately?',
        options: [
          { t: 'The hero can slide along walls instead of sticking', ok: true, why: 'If one axis is blocked, the other can still move.' },
          { t: 'It is required by the GBA', why: 'It is a design choice, not a hardware rule.' }
        ]
      },
      {
        q: 'Two boxes touch only at an edge. With strict < and >, they…',
        options: [
          { t: 'do not count as overlapping', ok: true, why: 'Equal edges fail the strict test, so flush contact is allowed.' },
          { t: 'overlap', why: 'Strict comparisons exclude equality.' }
        ]
      }
    ],
    next: 'Checkpoint. Next: many things at once (bullets, enemies, stars) with a bounded vector.',
    commit: 'feat: AABB collision with axis-separated movement',
    deeper: ['sprites']
  },

  {
    id: 'core-pool',
    title: 'Many of anything',
    minutes: 25,
    tags: ['bn::vector', 'Entities'],
    hook: 'One bullet is easy. Twenty is a design question. You will build a safe, bounded shooter in one file.',
    predict: {
      q: 'A `bn::vector<Bullet, 8>` is full. You call `push_back` again. What happens?',
      options: [
        { t: 'The program stops with an assertion error', ok: true, why: 'bn::vector has a fixed capacity that is checked at runtime. You must check `full()` first.' },
        { t: 'It silently grows', why: 'That is `std::vector`, which allocates memory. The GBA has none to spare, so Butano uses fixed capacity.' },
        { t: 'The oldest bullet is deleted', why: 'You would have to write that rule yourself.' }
      ]
    },
    try: {
      filename: 'src/main.cpp',
      lang: 'cpp',
      code: `#include "bn_core.h"
#include "bn_keypad.h"
#include "bn_fixed.h"
#include "bn_vector.h"
#include "bn_sprite_ptr.h"
#include "bn_sprite_items_player.h"

struct Bullet
{
    bn::sprite_ptr sprite;
};

int main()
{
    bn::core::init();
    bn::sprite_ptr hero = bn::sprite_items::player.create_sprite(-100, 0);
    bn::vector<Bullet, 8> bullets;                       // at most 8 at once
    int cooldown = 0;

    while(true)
    {
        int y = int(bn::keypad::down_held()) - int(bn::keypad::up_held());
        hero.set_y(hero.y() + y * 2);

        if(cooldown > 0) { --cooldown; }

        if(bn::keypad::a_held() && cooldown == 0 && ! bullets.full())
        {
            bn::sprite_ptr s = bn::sprite_items::player.create_sprite(hero.x() + 8, hero.y());
            s.set_scale(0.5);
            bullets.push_back(Bullet{ s });
            cooldown = 10;                               // 6 shots per second
        }

        for(int i = 0; i < bullets.size(); )
        {
            bullets[i].sprite.set_x(bullets[i].sprite.x() + 4);
            if(bullets[i].sprite.x() > 130)
            {
                bullets.erase(bullets.begin() + i);      // do NOT advance i
            }
            else
            {
                ++i;
            }
        }

        bn::core::update();
    }
}`,
      notes: [
        'A bounded vector is a small, fixed-size pool: no surprise memory use and no slow allocations during play.',
        'Dropping a bullet from the vector destroys its sprite handle, which releases the sprite. Ownership cleans up for you.',
        'When erasing inside a loop, only advance `i` when you did not erase. Otherwise you skip the next bullet.'
      ],
      run: 'Holding A fires a stream that vanishes off-screen, never more than 8 at once.'
    },
    breakIt: {
      intro: 'You forget the capacity check:',
      code: `if(bn::keypad::a_held())
{
    bullets.push_back(Bullet{ make_bullet() });   // no full() test
}`,
      q: 'You hold A for a second. What happens?',
      options: [
        { t: 'Once 8 bullets exist, the game halts on an error', ok: true, why: 'A fixed pool needs a policy for "full". Without one, the next push_back asserts.' },
        { t: 'You get unlimited bullets', why: 'Capacity is fixed on purpose.' },
        { t: 'Nothing happens', why: 'The ninth push triggers the assertion.' }
      ]
    },
    decide: {
      q: 'The pool is full and the player shoots. What should the game do?',
      options: [
        { t: 'Ignore the shot', why: 'Simple and predictable. Many classic shooters feel exactly like this.' },
        { t: 'Replace the oldest bullet', why: 'Always responsive, but bullets can vanish mid-flight, which can feel unfair.' },
        { t: 'Make the pool bigger', why: 'Fine if the cost is small, but it only moves the problem. Every pool still needs a full-policy.' }
      ],
      insight: 'No right answer here, and that is the lesson: "what happens at the limit?" is a design decision you make deliberately, not something that happens to you.'
    },
    twist: {
      task: 'Add a target on the right side. Use your `overlaps` from last lesson so bullets that hit it are removed and the target flashes (toggle visible for a few frames).',
      doneWhen: ['Hit bullets disappear', 'Missed bullets still leave the screen', 'No crash when holding A for 10 seconds']
    },
    check: [
      {
        q: 'Why does the loop skip `++i` after an erase?',
        options: [
          { t: 'The next item slides into index i', ok: true, why: 'Erasing shifts the rest down. If you also advanced i, you would skip one.' },
          { t: 'erase resets the loop', why: 'The vector shifts items; the loop variable is yours to manage.' }
        ]
      },
      {
        q: 'Why use a fixed-capacity container on the GBA?',
        options: [
          { t: 'Memory is tiny and predictable behavior beats surprises', ok: true, why: 'You know the worst-case cost at compile time.' },
          { t: 'C++ has no dynamic containers', why: 'It has them. They are a poor fit for 256 KB of RAM.' }
        ]
      }
    ],
    next: 'Checkpoint. Next: a camera, so your world can be bigger than one screen.',
    commit: 'feat: bounded bullet pool',
    deeper: ['vector']
  },

  {
    id: 'core-camera',
    title: 'A bigger world',
    minutes: 25,
    tags: ['Camera', 'World space'],
    hook: 'The screen is 240×160. Your world does not have to be. A camera lets the hero walk through a space many screens wide.',
    predict: {
      q: 'The hero is at world x = 400 and the camera is at x = 0. Where do you see the hero?',
      options: [
        { t: 'Off-screen to the right', ok: true, why: 'The camera shows x from -120 to +120. 400 is well outside.' },
        { t: 'At the right edge', why: 'The edge is at 120. The hero is much further than that.' }
      ]
    },
    try: {
      filename: 'src/main.cpp',
      lang: 'cpp',
      code: `#include "bn_core.h"
#include "bn_keypad.h"
#include "bn_fixed.h"
#include "bn_fixed_point.h"
#include "bn_vector.h"
#include "bn_camera_ptr.h"
#include "bn_sprite_ptr.h"
#include "bn_sprite_items_player.h"

int main()
{
    bn::core::init();
    bn::camera_ptr camera = bn::camera_ptr::create(0, 0);

    // Landmarks spread across a world about 800 pixels wide.
    bn::vector<bn::sprite_ptr, 9> landmarks;
    for(int i = 0; i < 9; ++i)
    {
        bn::sprite_ptr s = bn::sprite_items::player.create_sprite(-400 + i * 100, (i % 2) * 40 - 20);
        s.set_scale(2);
        s.set_camera(camera);
        landmarks.push_back(s);
    }

    bn::sprite_ptr hero = bn::sprite_items::player.create_sprite(0, 0);
    hero.set_camera(camera);

    // A fixed HUD marker: no camera, so it stays glued to the screen.
    bn::sprite_ptr hud = bn::sprite_items::player.create_sprite(-104, -64);
    hud.set_scale(0.5);

    bn::fixed_point pos(0, 0);
    while(true)
    {
        int x = int(bn::keypad::right_held()) - int(bn::keypad::left_held());
        int y = int(bn::keypad::down_held())  - int(bn::keypad::up_held());
        pos += bn::fixed_point(x, y) * 2;
        hero.set_position(pos);

        // Smooth follow: close 10% of the gap each frame.
        camera.set_position(camera.position() + (pos - camera.position()) * 0.1);

        bn::core::update();
    }
}`,
      notes: [
        'A sprite with a camera attached is drawn at (its world position − the camera position). Move the camera and everything attached slides.',
        'Anything without a camera, like the HUD marker, stays fixed on screen. That is exactly what a health bar or score needs.',
        'The follow line moves the camera 10% of the way to the hero each frame. A smaller number gives a lazier camera.'
      ],
      run: 'I can walk across the landmarks, the view follows smoothly, and the HUD marker stays put.'
    },
    breakIt: {
      intro: 'You attach the camera to the hero and the landmarks but forget the landmarks in your loop:',
      code: `// landmarks created WITHOUT s.set_camera(camera)
camera.set_position(pos);`,
      q: 'You walk right. What do the landmarks do?',
      options: [
        { t: 'They stay fixed on screen while the hero walks away from them', ok: true, why: 'Without a camera attached, a sprite ignores camera movement. It behaves like a HUD element.' },
        { t: 'They move with the hero', why: 'Only camera-attached sprites follow the camera.' },
        { t: 'They disappear', why: 'They remain visible at their fixed screen positions.' }
      ]
    },
    decide: {
      q: 'Should the camera snap exactly to the hero every frame, or follow smoothly?',
      options: [
        { t: 'Snap: always centered', why: 'Precise and simple, but every hero jitter shakes the whole screen. It can feel harsh.' },
        { t: 'Smooth follow', why: 'Feels softer and shows a bit of where the hero is heading. It adds a small lag that can feel loose in tight puzzles.' }
      ],
      insight: 'Both are real choices in published games. Platformers often smooth; puzzle games often snap. Decide from the feel you want.'
    },
    twist: {
      task: 'Clamp the camera so it never shows beyond the world edge (x from -280 to 280 here). Then try a "look ahead" offset in the direction the hero faces.',
      doneWhen: ['Camera stops at both world edges', 'The hero can still walk to the very edge']
    },
    check: [
      {
        q: 'Which space is the hero’s `position()` in when a camera is attached?',
        options: [
          { t: 'World space', ok: true, why: 'You think and compute in the world. The camera converts to screen space for you.' },
          { t: 'Screen space', why: 'Screen position = world position − camera position.' }
        ]
      },
      {
        q: 'How do you make a score counter stay still while the camera moves?',
        options: [
          { t: 'Do not attach a camera to it', ok: true, why: 'Sprites with no camera are screen-fixed.' },
          { t: 'Move it by the camera position each frame', why: 'That works but is extra work the engine already does for you.' }
        ]
      }
    ],
    next: 'Checkpoint. You can now build a world bigger than the screen. Next: text on screen.',
    commit: 'feat: scrolling camera',
    deeper: ['camera']
  },

  {
    id: 'core-text',
    title: 'Words on screen',
    minutes: 20,
    tags: ['HUD', 'Text'],
    hook: 'Scores, hearts, dialogue. Text turns a toy into a game. Butano can draw it with sprites.',
    predict: {
      q: 'Text is drawn with sprites, one per letter. If you rebuild a score string every frame, what is the cost?',
      options: [
        { t: 'Wasted work every frame, and it can run out of sprites', ok: true, why: 'Regenerating letters 60 times a second is wasteful. Redraw text only when the value changes.' },
        { t: 'Free, because strings are tiny', why: 'Each letter is a sprite. Rebuilding creates and destroys them constantly.' }
      ]
    },
    try: {
      filename: 'src/main.cpp (also edit the Makefile, see notes)',
      lang: 'cpp',
      code: `#include "bn_core.h"
#include "bn_keypad.h"
#include "bn_string.h"
#include "bn_vector.h"
#include "bn_sprite_ptr.h"
#include "bn_sprite_text_generator.h"
#include "common_variable_8x8_sprite_font.h"

int main()
{
    bn::core::init();
    bn::sprite_text_generator text(common::variable_8x8_sprite_font);
    bn::vector<bn::sprite_ptr, 16> letters;

    int score = 0;
    bool dirty = true;                                    // does the text need redrawing?

    while(true)
    {
        if(bn::keypad::a_pressed())
        {
            ++score;
            dirty = true;
        }

        if(dirty)
        {
            letters.clear();                              // destroy old letters
            bn::string<16> line = "SCORE: ";
            line += bn::to_string<8>(score);
            text.generate(-112, -72, line, letters);      // top-left, screen-fixed
            dirty = false;
        }
        bn::core::update();
    }
}`,
      notes: [
        'Add the font to your Makefile: `INCLUDES := include ../butano/common/include` and `GRAPHICS := graphics ../butano/common/graphics`. The font asset ships with Butano.',
        'The generator turns a string into sprites. Keep them in a vector you control, so you decide when they live and die.',
        'The `dirty` flag is a pattern you will use everywhere: recompute only when something changed.'
      ],
      run: 'Pressing A increases the on-screen SCORE.'
    },
    breakIt: {
      intro: 'You generate text every frame without clearing the old letters:',
      code: `// every frame:
text.generate(-112, -72, "SCORE", letters);`,
      q: 'What eventually happens?',
      options: [
        { t: 'The vector fills up and the game stops with an error', ok: true, why: 'Each call adds more sprites to a bounded vector. Clear before regenerating, and only when needed.' },
        { t: 'Nothing, old text disappears by itself', why: 'Letters live as long as their handles do. You own them.' }
      ]
    },
    decide: {
      q: 'Text appears in several places: score, lives, a message. How do you organize the generated sprites?',
      options: [
        { t: 'One shared vector for all text', why: 'Fewer variables, but changing one value forces you to rebuild everything.' },
        { t: 'One vector per text element', ok: true, why: 'Each piece updates on its own schedule with its own dirty flag.' }
      ],
      insight: 'A small struct like `Label { vector letters; bool dirty; }` is a natural next step. Group what changes together.'
    },
    twist: {
      task: 'Show a second line with the highest score so far. Only redraw each line when its own number changes.',
      doneWhen: ['Both lines show correct numbers', 'Pressing nothing causes no redraws (add a counter to prove it)']
    },
    check: [
      {
        q: 'Why keep the letter sprites in your own vector?',
        options: [
          { t: 'You control their lifetime and can clear them', ok: true, why: 'Dropping the handles removes the text.' },
          { t: 'The font requires it', why: 'The font does not care. Ownership is the point.' }
        ]
      }
    ],
    next: 'Checkpoint. Next: saving, so the game remembers a high score.',
    commit: 'feat: on-screen score text',
    deeper: ['text', 'common']
  },

  {
    id: 'core-save',
    title: 'The game remembers',
    minutes: 25,
    tags: ['SRAM', 'Save data'],
    hook: 'Your cartridge has battery-backed memory. Let your game keep a best score between sessions.',
    predict: {
      q: 'A brand new cartridge is read before any save exists. What is in the save memory?',
      options: [
        { t: 'Unknown bytes, so you cannot trust them', ok: true, why: 'Never assume a clean slate. Always check a marker before using saved data.' },
        { t: 'Zeros', why: 'Maybe, maybe not. An emulator, a flash cart, and old data can all differ.' }
      ]
    },
    try: {
      filename: 'src/main.cpp (needs the font setup from the last lesson)',
      lang: 'cpp',
      code: `#include "bn_core.h"
#include "bn_keypad.h"
#include "bn_sram.h"
#include "bn_string.h"
#include "bn_vector.h"
#include "bn_sprite_ptr.h"
#include "bn_sprite_text_generator.h"
#include "common_variable_8x8_sprite_font.h"

struct SaveData
{
    char magic[4];       // "SIGN" means "this is my save"
    int version;
    int best;
};

SaveData load_or_default()
{
    SaveData data;
    bn::sram::read(data);
    if(data.magic[0] != 'S' || data.magic[1] != 'I' || data.magic[2] != 'G' ||
       data.magic[3] != 'N' || data.version != 1 || data.best < 0 || data.best > 999999)
    {
        data = SaveData{ {'S', 'I', 'G', 'N'}, 1, 0 };   // fresh save
        bn::sram::write(data);
    }
    return data;
}

int main()
{
    bn::core::init();
    bn::sprite_text_generator text(common::variable_8x8_sprite_font);
    bn::vector<bn::sprite_ptr, 20> letters;

    SaveData save = load_or_default();
    int score = 0;
    bool dirty = true;

    while(true)
    {
        if(bn::keypad::a_pressed())
        {
            ++score;
            if(score > save.best)
            {
                save.best = score;
                bn::sram::write(save);               // save only on change
            }
            dirty = true;
        }
        if(dirty)
        {
            letters.clear();
            bn::string<24> line = "BEST ";
            line += bn::to_string<8>(save.best);
            line += "  NOW ";
            line += bn::to_string<8>(score);
            text.generate(-112, -72, line, letters);
            dirty = false;
        }
        bn::core::update();
    }
}`,
      notes: [
        'Make a struct for your save. A magic marker and a version number let you detect garbage and upgrade old saves later.',
        'Validate everything you read. A bad value stops being a surprise when you have a fallback.',
        'Write on change, not every frame. Save memory has limited write endurance and writes take time.',
        'mGBA writes a `.sav` file next to the ROM. Delete it to test a fresh start.'
      ],
      run: 'My best score survives closing and reopening the emulator.'
    },
    breakIt: {
      intro: 'You read the save and trust it on a brand new cartridge:',
      code: `SaveData data;
bn::sram::read(data);
// use data.best directly`,
      q: 'What might `data.best` hold on first launch?',
      options: [
        { t: 'Any value, such as 3 billion', ok: true, why: 'Uninitialized save memory has no promised contents. Validate with a marker and range checks.' },
        { t: 'Always 0', why: 'You cannot count on it.' }
      ]
    },
    decide: {
      q: 'When should the game write its save?',
      options: [
        { t: 'Every frame', why: 'Unnecessarily slow, and it wears the save memory.' },
        { t: 'When a value that matters changes', ok: true, why: 'It is cheap, and a power-off cannot lose much.' },
        { t: 'Only on a clean quit', why: 'A handheld is usually turned off mid-play. You would lose progress.' }
      ],
      insight: 'Design for the player pulling the plug. Handheld players do not "quit".'
    },
    twist: {
      task: 'Add a "reset save" cheat (hold L + R + Start on the title screen). Then bump `version` to 2 and migrate old v1 saves instead of wiping them.',
      doneWhen: ['Reset works', 'A v1 save loads into the v2 layout without losing the best score']
    },
    check: [
      {
        q: 'Why store a magic marker and version in a save?',
        options: [
          { t: 'To detect missing or old data safely', ok: true, why: 'You can ignore garbage and upgrade old formats.' },
          { t: 'The hardware requires them', why: 'It is your convention, not a hardware rule.' }
        ]
      }
    ],
    next: 'Core Skills so far complete. Pick a Genre Track next to turn these tools into a full game.',
    commit: 'feat: persistent best score',
    deeper: ['save']
  }
];
