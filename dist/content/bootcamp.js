// Boot Camp: from zero to a sprite you control. Every `try.code` here is compiled against Butano (see scripts/compile-lessons.mjs).
// Choice shape: { q, options: [{ t, ok?, why }] }. Exactly one `ok` = a right answer. No `ok` anywhere = a judgment call.
export const bootcamp = [
  {
    id: 'boot-build',
    title: 'Boot the cartridge',
    minutes: 15,
    tags: ['Build', 'WSL'],
    hook: 'In 15 minutes you will turn source code into a real Game Boy Advance ROM and watch it run.',
    predict: {
      q: 'You run `make` in your project. Which file is the game the emulator will open?',
      options: [
        { t: 'The .gba file', ok: true, why: 'Yes. The .gba is the cartridge image. The emulator plays it.' },
        { t: 'The .elf file', why: 'Close. The .elf is the same program plus debug info. Your debugger reads it later, but the emulator plays the .gba.' },
        { t: 'The .cpp file', why: 'Source code is the recipe. The ROM is the finished dish.' }
      ]
    },
    try: {
      filename: 'WSL terminal',
      lang: 'bash',
      code: 'cd ~/Unamed-Project\nmake\nls -lt *.gba *.elf',
      notes: [
        '`make` rebuilds only what changed, then links everything into one ROM.',
        '`ls -lt` lists newest first. The top line is the file you just built.',
        'Open that ROM in mGBA. No Linux window? Run `wslpath -w "$PWD/Unamed-Project.gba"` and open that path in Windows mGBA.'
      ],
      run: 'Build finished with no errors, and I opened the new ROM in mGBA.'
    },
    breakIt: {
      intro: 'You edit `main.cpp`, run `make`, and the compiler prints a red error. You launch mGBA anyway. The game looks exactly like before.',
      q: 'Why did nothing change?',
      options: [
        { t: 'mGBA is broken', why: 'Unlikely. It played exactly what it was given.' },
        { t: 'The build failed, so the old ROM was still sitting there', ok: true, why: 'Right. A failed build leaves yesterday’s ROM in place. Always check the ROM timestamp and the last line of the build output.' },
        { t: 'C++ ignores edits until you restart the PC', why: 'No. Edits count as soon as you save and build.' }
      ]
    },
    decide: {
      q: 'The game did not change after an edit. What do you check first?',
      options: [
        { t: 'Re-read my code for mistakes', why: 'Reasonable, but you are guessing. If the build failed, the code you are reading was never run.' },
        { t: 'Check the build output and the ROM timestamp', why: 'Cheapest test first: it takes seconds and tells you whether your code even reached the emulator.' }
      ],
      insight: 'Debugging habit #1: before asking "why is my code wrong?" ask "did my code actually run?" Most mysteries die right there.'
    },
    twist: {
      task: 'Open the Makefile and set `ROMTITLE` to your own game name (12 letters max, for example `SIGNAL LOST`). Rebuild and confirm the title changed with `head -c 32 Unamed-Project.gba | strings`.',
      doneWhen: ['The build succeeds after the edit', 'The ROM header shows your title']
    },
    check: [
      {
        q: 'Which tool turns your .cpp files into one program?',
        options: [
          { t: 'The compiler and linker, driven by make', ok: true, why: 'The compiler turns each file into object code. The linker joins them. make runs both when files change.' },
          { t: 'The emulator', why: 'The emulator only plays the finished ROM.' },
          { t: 'Git', why: 'Git records history. It never builds anything.' }
        ]
      }
    ],
    next: 'Save your first checkpoint: `git add -A && git commit -m "baseline: builds and runs"`. Next lesson: make the screen change.',
    commit: 'chore: baseline builds and runs',
    deeper: ['start', 'wsl']
  },

  {
    id: 'boot-loop',
    title: 'The heartbeat',
    minutes: 15,
    tags: ['Game loop', 'C++'],
    hook: 'Every game is one idea repeated 60 times a second. You will make the whole screen pulse with it.',
    predict: {
      q: 'Read the code below. The blue value counts up from 0 to 31, then starts over. What will the backdrop do?',
      options: [
        { t: 'Stay one dark color', why: 'It would, if blue never changed. Look at what happens to `frame` each pass.' },
        { t: 'Slowly brighten, then snap back to dark and repeat', ok: true, why: 'Yes. A sawtooth: brighten, snap back, repeat. That is `% 32` at work.' },
        { t: 'Crash when blue passes 31', why: 'The `% 32` keeps it in range 0 to 31, so it never gets that far.' }
      ]
    },
    try: {
      filename: 'src/main.cpp',
      lang: 'cpp',
      code: `#include "bn_core.h"
#include "bn_color.h"
#include "bn_bg_palettes.h"

int main()
{
    bn::core::init();                  // once: wake the engine up
    int frame = 0;

    while(true)                        // forever: one pass = one frame
    {
        ++frame;
        int blue = (frame / 4) % 32;   // 0..31, steps up every 4 frames
        bn::bg_palettes::set_transparent_color(bn::color(2, 4, blue));
        bn::core::update();            // show this frame, wait for the next
    }
}`,
      notes: [
        '`init()` runs once. The `while(true)` loop never ends, because a game never ends until you turn it off.',
        '`core::update()` is the frame boundary. It draws, waits for the screen, and keeps the engine alive.',
        'Colors use 5 bits per channel, so each of red, green, and blue goes from 0 to 31.',
        'The GBA refreshes about 60 times a second. At `/ 4`, blue steps up about 15 times a second.'
      ],
      run: 'The backdrop pulses in the emulator.'
    },
    breakIt: {
      intro: 'A teammate adds a second loop inside main, before `core::update()`:',
      code: `while(true)
{
    while(true)
    {
        ++frame;          // counts forever...
    }
    bn::core::update();   // ...and never gets here
}`,
      q: 'What does the game do?',
      options: [
        { t: 'Freezes on a black or stale screen', ok: true, why: 'The inner loop never ends, so `update()` is never called. The screen never refreshes.' },
        { t: 'Runs twice as fast', why: 'No. Nothing after the inner loop ever runs.' },
        { t: 'Shows a compiler error', why: 'The code is valid C++. It is the logic that is wrong, and that is why this bug is sneaky.' }
      ]
    },
    decide: {
      q: 'Where should the line `int frame = 0;` live?',
      options: [
        { t: 'Inside the loop, so it starts fresh each frame', why: 'Then `frame` would reset to 0 every frame and `++frame` would always give 1. The backdrop would never change.' },
        { t: 'Before the loop, so it survives between frames', ok: true, why: 'Anything that must remember something across frames lives outside the loop.' }
      ],
      insight: 'Rule of thumb: variables declared before the loop are the game’s memory. Variables inside the loop are scratch paper, thrown away every frame.'
    },
    twist: {
      task: 'Make the pulse your own: change the speed, try a different color channel, or make it ping-pong smoothly instead of snapping back.',
      doneWhen: ['The effect looks different from the original', 'I can say how many frames one full cycle takes']
    },
    check: [
      {
        q: 'Why does main never `return` while the game is running?',
        options: [
          { t: 'The loop runs the game one frame at a time until power-off', ok: true, why: 'Each pass of the loop is one frame. Returning would end the program.' },
          { t: 'C++ forbids returning from main', why: 'It is allowed. A game just does not want to.' }
        ]
      },
      {
        q: 'You want a counter to survive from one frame to the next. Where do you declare it?',
        options: [
          { t: 'Before the loop', ok: true, why: 'It is created once and keeps its value while the loop repeats.' },
          { t: 'Inside the loop body', why: 'It would be recreated and reset every frame.' }
        ]
      }
    ],
    next: 'Checkpoint: `git commit -am "pulse the backdrop"`. Next: put your own character on screen.',
    commit: 'feat: pulsing backdrop proves the frame loop',
    deeper: ['core', 'faq']
  },

  {
    id: 'boot-sprite',
    title: 'Your hero appears',
    minutes: 20,
    tags: ['Sprites', 'Assets'],
    hook: 'Draw a tiny hero, ship it through the asset pipeline, and watch it spin on a real GBA screen.',
    predict: {
      q: 'The screen origin (0, 0) is the center. A sprite is created at (-60, -30). Where does it appear?',
      options: [
        { t: 'Upper left of center', ok: true, why: 'Negative x is left, negative y is up. Screen coordinates grow right and down.' },
        { t: 'Lower left of center', why: 'Careful: y grows downward on the GBA, so negative y is up.' },
        { t: 'Upper right of center', why: 'Negative x means left.' }
      ]
    },
    try: {
      filename: 'src/main.cpp',
      lang: 'cpp',
      code: `#include "bn_core.h"
#include "bn_fixed.h"
#include "bn_sprite_ptr.h"
#include "bn_sprite_items_player.h"

int main()
{
    bn::core::init();
    bn::sprite_ptr hero = bn::sprite_items::player.create_sprite(-60, -30);
    bn::fixed angle = 0;

    while(true)
    {
        angle += 2;
        if(angle >= 360)
        {
            angle = 0;
        }
        hero.set_rotation_angle(angle);
        bn::core::update();
    }
}`,
      notes: [
        'Your art lives in `graphics/player.bmp` (16×16, indexed, 16 colors, color 0 is transparent) with `graphics/player.json` next to it. The build turns them into `bn_sprite_items_player.h`.',
        '`bn::sprite_ptr` is a handle: while it exists the sprite exists. When it is destroyed, the sprite disappears.',
        '`bn::fixed` holds fractions like 1.5. Rotation takes degrees from 0 to 360.'
      ],
      run: 'My hero spins in the upper-left of the screen.'
    },
    breakIt: {
      intro: 'You tidy the code by creating the sprite inside its own block:',
      code: `{
    bn::sprite_ptr hero = bn::sprite_items::player.create_sprite(0, 0);
}   // <- hero is destroyed here

while(true)
{
    bn::core::update();
}`,
      q: 'What do you see?',
      options: [
        { t: 'No hero at all', ok: true, why: 'The handle went out of scope at the closing brace, which released the sprite. Keep the handle alive for as long as you want to see the sprite.' },
        { t: 'The hero in the center', why: 'It was created there, but destroyed before the first frame was drawn.' },
        { t: 'A crash', why: 'No crash. Releasing a sprite is normal.' }
      ]
    },
    decide: {
      q: 'Where should the sprite handle live in a small game?',
      options: [
        { t: 'In main, before the loop', ok: true, why: 'It is owned by the scene, lives for the whole game, and is easy to reason about.' },
        { t: 'A global variable', why: 'Globals are built before `core::init()` runs, which is too early for Butano. They also hide who owns what.' },
        { t: 'Create and destroy it every frame', why: 'It would work, but it is wasteful and flickers when you make a mistake. Create once, update often.' }
      ],
      insight: 'Ownership is a theme for the whole course: something owns each thing, and the thing lives exactly as long as its owner.'
    },
    twist: {
      task: 'Replace the hero art with your own drawing. Then create a second sprite from the same asset at a different position and give it a different rotation speed.',
      doneWhen: ['Both sprites appear with my art', 'They behave independently']
    },
    check: [
      {
        q: 'What keeps a sprite on screen?',
        options: [
          { t: 'A live bn::sprite_ptr that owns it', ok: true, why: 'When the last handle is destroyed, the sprite goes away.' },
          { t: 'Including the generated header', why: 'The header only describes the graphic. A handle makes an actual sprite.' }
        ]
      },
      {
        q: 'What must palette color 0 be in an indexed sprite BMP?',
        options: [
          { t: 'The transparent color', ok: true, why: 'Index 0 is treated as see-through. Draw your character with indices 1 to 15.' },
          { t: 'Black', why: 'Index 0 is transparency, not black.' }
        ]
      }
    ],
    next: 'Checkpoint your art and code. Next: give the hero controls.',
    commit: 'feat: import hero sprite',
    deeper: ['import', 'sprites']
  },

  {
    id: 'boot-input',
    title: 'You have the controls',
    minutes: 20,
    tags: ['Input'],
    hook: 'Time to play. You will move the hero with the D-pad and learn the one input idea that trips up everybody.',
    predict: {
      q: 'The hero moves 1 pixel per frame while Right is held. You hold Right for one second. About how far does it go?',
      options: [
        { t: 'About 60 pixels', ok: true, why: 'About 60 frames per second times 1 pixel per frame.' },
        { t: '1 pixel', why: 'The code runs every frame, not once per button press.' },
        { t: '240 pixels', why: 'That is the whole screen width. At 1 pixel per frame it takes about 4 seconds.' }
      ]
    },
    try: {
      filename: 'src/main.cpp',
      lang: 'cpp',
      code: `#include "bn_core.h"
#include "bn_keypad.h"
#include "bn_sprite_ptr.h"
#include "bn_sprite_items_player.h"

int main()
{
    bn::core::init();
    bn::sprite_ptr hero = bn::sprite_items::player.create_sprite(0, 0);

    while(true)
    {
        if(bn::keypad::left_held())  { hero.set_x(hero.x() - 1); }
        if(bn::keypad::right_held()) { hero.set_x(hero.x() + 1); }
        if(bn::keypad::up_held())    { hero.set_y(hero.y() - 1); }
        if(bn::keypad::down_held())  { hero.set_y(hero.y() + 1); }

        if(bn::keypad::a_pressed())
        {
            hero.set_visible(! hero.visible());
        }

        bn::core::update();
    }
}`,
      notes: [
        '`held` is true on every frame the button is down. Use it for walking.',
        '`pressed` is true for exactly one frame, the frame the button goes down. Use it for jumping, shooting, menus.',
        'In mGBA the default keys are arrows for the D-pad, X for A, Z for B, Enter for Start.'
      ],
      run: 'I can walk the hero around and A hides and shows it.'
    },
    breakIt: {
      intro: 'A friend uses `held` for the visibility toggle:',
      code: `if(bn::keypad::a_held())
{
    hero.set_visible(! hero.visible());
}`,
      q: 'You hold A for one second. What happens?',
      options: [
        { t: 'The hero flickers on and off about 60 times', ok: true, why: 'The toggle runs every frame A is down, so it flips 60 times a second. A one-time action needs `pressed`.' },
        { t: 'It hides once', why: 'That is what `pressed` gives you. `held` repeats every frame.' },
        { t: 'Nothing happens', why: 'The code runs; it just runs too often.' }
      ]
    },
    decide: {
      q: 'Hold Right and Down together and the hero moves faster along the diagonal. Fix it now, or move on?',
      options: [
        { t: 'Fix it now', why: 'Good instincts, but the fix needs fractional math (0.7 per axis). You learn that in the next world, and it is cleaner then.' },
        { t: 'Note it and move on', why: 'A fine call. Writing the bug down means you will not forget it, and you keep your momentum.' }
      ],
      insight: 'Both answers are defensible. Great developers keep a bug list and choose when to pay it down. Write it in your devlog: "diagonal speed is too fast".'
    },
    twist: {
      task: 'Stop the hero from leaving the screen. The visible area is x from -112 to 112 and y from -72 to 72 (the sprite is 16×16, so its center must stay inside).',
      doneWhen: ['The hero stops at all four edges', 'Holding two directions still behaves sensibly']
    },
    check: [
      {
        q: 'Which one do you use to make the hero jump once per button press?',
        options: [
          { t: 'a_pressed()', ok: true, why: 'It is true for one frame per press.' },
          { t: 'a_held()', why: 'It is true on every frame the button is down.' }
        ]
      },
      {
        q: 'At 60 frames per second, how long does it take to move 120 pixels at 2 pixels per frame?',
        options: [
          { t: 'One second', ok: true, why: '60 frames × 2 pixels = 120 pixels per second.' },
          { t: 'Two seconds', why: 'Careful: 2 pixels per frame × 60 frames is 120 pixels each second.' }
        ]
      }
    ],
    next: 'Checkpoint: commit. Next: refresh your C++ so the code stays tidy as the game grows.',
    commit: 'feat: d-pad movement',
    deeper: ['input']
  },

  {
    id: 'boot-cpp',
    title: 'C++ in your hands',
    minutes: 25,
    tags: ['C++', 'Functions'],
    hook: 'Your main is getting crowded. You will move logic into functions and a struct, and finally understand `&`.',
    predict: {
      q: '`void add_point(int s) { ++s; }`, then `int score = 0; add_point(score);`. What is `score` afterward?',
      options: [
        { t: '0', ok: true, why: 'The function got a copy of score. It changed the copy and threw it away.' },
        { t: '1', why: 'That would need `int& s`, which names the caller’s variable instead of copying it.' }
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

struct Hero
{
    bn::sprite_ptr sprite;
    bn::fixed speed;
};

// Reads the D-pad. Returns a direction with each axis -1, 0 or 1.
bn::fixed_point read_dpad()
{
    int x = int(bn::keypad::right_held()) - int(bn::keypad::left_held());
    int y = int(bn::keypad::down_held())  - int(bn::keypad::up_held());
    return bn::fixed_point(x, y);
}

// Hero& means "the real hero, not a copy" so the move sticks.
void move(Hero& hero)
{
    bn::fixed_point dir = read_dpad();
    hero.sprite.set_position(hero.sprite.position() + dir * hero.speed);
}

int main()
{
    bn::core::init();
    Hero hero{ bn::sprite_items::player.create_sprite(0, 0), 1 };

    while(true)
    {
        move(hero);
        bn::core::update();
    }
}`,
      notes: [
        'A `struct` groups things that belong together. `Hero` bundles a sprite with its speed.',
        '`Hero&` is a reference: another name for the same object. Without the `&`, `move` would work on a copy.',
        'Small functions with one job (`read_dpad`) are easy to test by eye and easy to reuse in any game.'
      ],
      run: 'The hero moves exactly as before, but main is tiny.'
    },
    breakIt: {
      intro: 'You write gravity as a function that takes the height by value:',
      code: `void apply_gravity(bn::fixed y)
{
    y += 1;
}
// in the loop:
apply_gravity(height);`,
      q: 'The hero never falls. Why?',
      options: [
        { t: 'The function changes a copy of height', ok: true, why: 'By-value parameters are copies. Take `bn::fixed& y`, or return the new value.' },
        { t: '`+= 1` is not allowed on fixed', why: 'It is allowed. The problem is where the change lands.' },
        { t: 'Functions cannot change variables', why: 'They can, when you give them a reference.' }
      ]
    },
    decide: {
      q: 'A function only needs to read a large struct, not change it. What parameter type fits best?',
      options: [
        { t: 'By value: `Hero hero`', why: 'It makes a copy every call. For a big struct that is wasted work, and the copy can surprise you.' },
        { t: 'By const reference: `const Hero& hero`', ok: true, why: 'No copy, and the compiler stops you from changing it by accident. Read-only needs `const&`, changing needs `&`.' },
        { t: 'By non-const reference: `Hero& hero`', why: 'It works, but promises nothing. A reader cannot tell whether the function modifies your hero.' }
      ],
      insight: 'The signature is documentation. `const T&` says "I only look", `T&` says "I will change it".'
    },
    twist: {
      task: 'Add a second function, `clamp_to_screen(Hero&)`, that keeps the hero on screen (reuse your last lesson’s limits). Call it from the loop.',
      doneWhen: ['Hero stays on screen', 'main contains no movement math, just function calls']
    },
    check: [
      {
        q: 'What does `void f(Hero& h)` promise that `void f(Hero h)` does not?',
        options: [
          { t: 'Changes to h affect the caller’s hero', ok: true, why: 'A reference names the original object. A by-value parameter is a copy.' },
          { t: 'f runs faster on every call', why: 'It can avoid a copy, but the key difference is that changes stick.' }
        ]
      },
      {
        q: 'A function should read, not change, a struct. Which signature says that?',
        options: [
          { t: 'void f(const Hero& h)', ok: true, why: 'const& means no copy and no modification.' },
          { t: 'void f(Hero& h)', why: 'This allows modification, so it does not promise read-only.' }
        ]
      }
    ],
    next: 'Boot Camp complete. Commit, then pick up Core Skills: smooth speed with fixed-point numbers.',
    commit: 'refactor: extract hero movement',
    deeper: ['cpp']
  }
];
