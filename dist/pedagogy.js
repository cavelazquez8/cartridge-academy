// Teaching design informed by the sources linked below; course completion is not a guarantee of expertise.
export const learningPrinciples = [
  {
    title: 'Retrieve before you reveal',
    description: 'Trying to recall a concept makes learning more durable than recognition alone. A wrong first answer can still be useful when you compare it with clear corrective feedback. These prompts are practice, so uncertainty is information you can use.',
    implementation: 'Predict an outcome, commit to an answer, then reveal an explanation. Revisit the idea in the review deck.',
    source: 'Carnegie Mellon · Eberly Center',
    url: 'https://www.cmu.edu/teaching/resources/instructionalstrategies/activelearningstrategies/retrievalpractice/index.html'
  },
  {
    title: 'Return after a little forgetting',
    description: 'Revisiting material across separate sessions supports long-term retention. A review can feel harder than rereading familiar notes; that feeling does not measure how well you are learning. The useful question is what you can recover and apply after a gap.',
    implementation: 'Rate recall honestly. Reviews return after a gap; missed days carry no penalty. Intervals are a simple scheduling aid, not an experimentally optimized prescription.',
    source: 'Carnegie Mellon · Spaced Practice',
    url: 'https://www.cmu.edu/teaching/resources/instructionalstrategies/activelearningstrategies/spacedopractice/index.html'
  },
  {
    title: 'Let the scaffolding fade',
    description: 'A worked example can reduce the load of relearning a skill. As understanding grows, completing missing steps and solving variations creates room for independent reasoning. Support should gradually recede; repeatedly copying a finished solution is a different task from designing your own.',
    implementation: 'Start with an explained example, change its behavior, then solve a transfer challenge and an independent capstone.',
    source: 'Koedinger, Corbett & Perfetti · Cognitive Science (2012)',
    url: 'https://pact.cs.cmu.edu/pubs/Koedinger%2C%20Corbett%2C%20Perfetti%202012-KLI.pdf'
  },
  {
    title: 'Explain the reason, not just the line',
    description: 'Self-explanation connects a new step to knowledge you already have and can expose gaps in your mental model. Put the mechanism into your own words: why does a reference change this object, or why does one button press generate repeated events?',
    implementation: 'Use the prediction and reflection journal. Explain one causal relationship and name an observation that would disprove your explanation.',
    source: 'Harvard · ABLConnect, Self-Explanation',
    url: 'https://ablconnect.harvard.edu/self-explanation-think-alouds-research'
  },
  {
    title: 'Mix skills once the basics are familiar',
    description: 'Mixed practice asks you to choose an approach as well as execute it. After an initial introduction, combine related ideas so you learn when each applies. The benefit depends on the material and your preparation; random difficulty is not the objective.',
    implementation: 'Review several topics together. Later missions combine C++ ownership, input, collision, and debugging inside the same small game.',
    source: 'Carnegie Mellon · Open Learning Initiative',
    url: 'https://oli.cmu.edu/courses/student-cognition-toolbox-open-free/'
  },
  {
    title: 'Build, inspect, and adjust',
    description: 'Mastery requires component skills, practice combining them, and knowing when to use them. Goal-directed practice becomes more informative when the result is compared with explicit criteria. A playable change, a reproducible bug, or a debugger trace gives your next decision something concrete to rest on.',
    implementation: 'Each mission ends with observable checks, a transfer task, and evidence from your project. Keep scope small enough to finish a meaningful experiment.',
    source: 'Carnegie Mellon · Research-based Learning Principles',
    url: 'https://www.cmu.edu/teaching/principles/learning.html'
  }
];

export const glossary = [
  { term: 'ROM', definition: 'The game binary loaded by the emulator or cartridge hardware. Your development machine builds it from code and converted assets.', example: 'Untitled-Project.gba is the playable build.' },
  { term: 'ELF', definition: 'An executable/object format that can retain symbols and debug information for tools such as GDB.', example: 'Load the matching game.elf for source-level debugging.' },
  { term: 'Cross-compilation', definition: 'Compiling on one platform for a different target architecture or environment.', example: 'Your Ubuntu machine builds ARM code for the GBA.' },
  { term: 'Game loop', definition: 'The repeating sequence that reads input, updates gameplay, and advances presentation.', example: 'Read the keypad, move the player, check collisions, call core::update().' },
  { term: 'Fixed-point', definition: 'A number represented by an integer with an agreed scale, retaining a limited fractional part.', example: 'bn::fixed x = 0; x += bn::fixed(0.5);' },
  { term: 'RAII', definition: 'C++ resource management that ties ownership to object lifetime. Destruction performs cleanup when the owner’s lifetime ends.', example: 'The final sprite_ptr owner going out of scope releases its sprite.' },
  { term: 'Reference', definition: 'A C++ name bound to another object. A reference parameter can access the caller’s object directly.', example: 'void heal(int& health) { ++health; }' },
  { term: 'Sprite', definition: 'A separately positioned graphical object, often used for characters, effects, or interface elements.', example: 'bn::sprite_items::player.create_sprite(0, 0)' },
  { term: 'Tile', definition: 'A small reusable block of graphics. GBA sprite and tiled background graphics are assembled from 8 × 8 pixel tiles.', example: 'A tiled floor reuses a few patterns across a map.' },
  { term: 'Palette', definition: 'A table mapping indexed pixel values to colors. Palette index zero has a transparency role in normal sprite graphics.', example: 'A 4bpp sprite indexes a palette of up to 16 colors.' },
  { term: 'AABB', definition: 'An axis-aligned bounding box. A simple collision shape whose edges stay parallel to the coordinate axes.', example: 'Two rectangles overlap only when their horizontal and vertical ranges both overlap.' },
  { term: 'State machine', definition: 'A model with a defined set of states and rules for transitioning between them.', example: 'An enemy changes from patrol to chase when the player enters its detection range.' },
  { term: 'Camera', definition: 'A viewing offset that changes how world objects appear on screen while preserving their gameplay positions.', example: 'A player at world x = 200 and camera x = 150 appears at centered screen x = 50.' },
  { term: 'Breakpoint', definition: 'A debugger instruction to stop execution at a chosen location or condition so you can inspect program state.', example: 'break update_player pauses when that function is reached.' },
  { term: 'Staging area', definition: 'Git’s prepared snapshot for the next commit, also called the index.', example: 'git add src/main.cpp updates the staged content of that file.' },
  { term: 'SRAM', definition: 'Save storage accessible through Butano’s SRAM functions. Store stable data and validate it when loading.', example: 'Save a version number, high score, and level unlock values.' },
  { term: 'Frame budget', definition: 'The time available to finish work for one displayed frame. Excess work can cause missed refreshes.', example: 'Measure a crowded scene before deciding which system needs optimization.' },
  { term: 'Transfer', definition: 'Applying a learned idea in a new situation without repeating an exact recipe.', example: 'After coding coins, design a pressure plate using the same event and collision ideas.' },
  { term: 'Sprite sheet', definition: 'One image containing several sprite frames in a regular arrangement. Export dimensions and frame order must match the importer’s expectations.', example: 'Draw four original 16 × 16 walk frames; export a 64 × 16 row and specify frame dimensions in the Butano JSON.' },
  { term: 'Onion skin', definition: 'An editor overlay showing neighboring animation frames as drawing references. It helps compare a new pose with the frames around it.', example: 'Ghost the previous and next frame while keeping your character’s feet aligned to the same ground guide.' },
  { term: 'Silhouette', definition: 'An object’s outer shape viewed as a flat filled form. A clear silhouette can make a tiny character’s identity and pose easier to read.', example: 'Fill your 16 × 16 adventurer with one dark color; separate the hat, arm, and tool enough to recognize them.' }
];

export const technicalSources = [
  { title: 'Butano core and frame measurements', url: 'https://gvaliente.github.io/butano/namespacebn_1_1core.html' },
  { title: 'Butano asset pipeline', url: 'https://gvaliente.github.io/butano/import.html' },
  { title: 'Butano sprite ownership', url: 'https://gvaliente.github.io/butano/classbn_1_1sprite__ptr.html' },
  { title: 'Butano keypad', url: 'https://gvaliente.github.io/butano/namespacebn_1_1keypad.html' },
  { title: 'Butano display dimensions', url: 'https://gvaliente.github.io/butano/namespacebn_1_1display.html' },
  { title: 'C++ working draft: references', url: 'https://eel.is/c++draft/dcl.ref' },
  { title: 'Git official manual: staging', url: 'https://git-scm.com/docs/git-add' },
  { title: 'GNU GDB manual: stepping', url: 'https://sourceware.org/gdb/current/onlinedocs/gdb.html/Continuing-and-Stepping.html' },
  { title: 'Aseprite: onion skin', url: 'https://www.aseprite.org/docs/onion-skinning/' },
  { title: 'Aseprite: sprite sheets', url: 'https://www.aseprite.org/docs/sprite-sheet/' },
  { title: 'Animation Mentor: walk poses', url: 'https://www.animationmentor.com/blog/tutorial-animating-human-walk-cycle/' },
  { title: 'Animation Mentor: anticipation', url: 'https://www.animationmentor.com/blog/anticipation-the-12-basic-principles-of-animation/' },
  { title: 'Valve: character shape and readability', url: 'https://steamcdn-a.akamaihd.net/apps/valve/2007/NPAR07_IllustrativeRenderingInTeamFortress2.pdf' },
  { title: 'Butano: map collision example', url: 'https://github.com/GValiente/butano/tree/master/examples/map_collision' },
  { title: 'mGBA: official command line manual', url: 'https://github.com/mgba-emu/mgba/blob/master/doc/mgba.6' }
];
