// Authored practice-first course; primary references linked per mission.
export const resources = [
  {
    "id": "start",
    "title": "Butano getting started",
    "url": "https://gvaliente.github.io/butano/getting_started.html",
    "type": "Official guide",
    "note": "Use the guide for your installed toolchain. Your setup is ready; begin with a build."
  },
  {
    "id": "core",
    "title": "Butano frame loop and measurements",
    "url": "https://gvaliente.github.io/butano/namespacebn_1_1core.html",
    "type": "API reference",
    "note": "Initialization, updates, CPU usage, and missed frames."
  },
  {
    "id": "import",
    "title": "Butano asset conversion",
    "url": "https://gvaliente.github.io/butano/import.html",
    "type": "Official guide",
    "note": "Indexed BMP, asset JSON, generated headers, backgrounds, and audio."
  },
  {
    "id": "sprites",
    "title": "Sprite ownership and transforms",
    "url": "https://gvaliente.github.io/butano/classbn_1_1sprite__ptr.html",
    "type": "API reference",
    "note": "Owning sprite handles, positions, visibility, cameras, and tile changes."
  },
  {
    "id": "fixed",
    "title": "Fixed-point arithmetic",
    "url": "https://gvaliente.github.io/butano/classbn_1_1fixed__t.html",
    "type": "API reference",
    "note": "Fractional values stored using scaled integers."
  },
  {
    "id": "input",
    "title": "Held, pressed, released",
    "url": "https://gvaliente.github.io/butano/namespacebn_1_1keypad.html",
    "type": "API reference",
    "note": "Continuous input state and one-frame input transitions."
  },
  {
    "id": "faq",
    "title": "Butano practical FAQ",
    "url": "https://gvaliente.github.io/butano/faq.html",
    "type": "Official guide",
    "note": "Memory, resource lifetimes, centered coordinates, and hardware constraints."
  },
  {
    "id": "bg",
    "title": "Regular backgrounds",
    "url": "https://gvaliente.github.io/butano/classbn_1_1regular__bg__ptr.html",
    "type": "API reference",
    "note": "A tile background has position, ownership, and camera attachment."
  },
  {
    "id": "camera",
    "title": "Camera API",
    "url": "https://gvaliente.github.io/butano/classbn_1_1camera__ptr.html",
    "type": "API reference",
    "note": "Transform attached objects into one shared view."
  },
  {
    "id": "text",
    "title": "Sprite text generator",
    "url": "https://gvaliente.github.io/butano/classbn_1_1sprite__text__generator.html",
    "type": "API reference",
    "note": "Retain generated sprite handles and choose an explicit output capacity."
  },
  {
    "id": "common",
    "title": "Butano common example assets",
    "url": "https://github.com/GValiente/butano/tree/master/common",
    "type": "Official source",
    "note": "Example fonts need explicit header, asset-path, and credit dependencies."
  },
  {
    "id": "sound",
    "title": "Sound effects",
    "url": "https://gvaliente.github.io/butano/classbn_1_1sound__item.html",
    "type": "API reference",
    "note": "Generated WAV sound items and playback options."
  },
  {
    "id": "vector",
    "title": "Bounded containers",
    "url": "https://gvaliente.github.io/butano/classbn_1_1vector.html",
    "type": "API reference",
    "note": "bn::vector has a compile-time maximum and asserts on invalid use."
  },
  {
    "id": "save",
    "title": "SRAM persistence",
    "url": "https://gvaliente.github.io/butano/namespacebn_1_1sram.html",
    "type": "API reference",
    "note": "Read and write trivially copyable data; validate your own save format."
  },
  {
    "id": "examples",
    "title": "Butano examples",
    "url": "https://github.com/GValiente/butano/tree/master/examples",
    "type": "Official source",
    "note": "Read a focused example after forming a precise API question."
  },
  {
    "id": "credits",
    "title": "Butano dependency licenses",
    "url": "https://github.com/GValiente/butano/tree/master/licenses",
    "type": "Official source",
    "note": "Inspect your installed revision and the credits for each asset you use."
  },
  {
    "id": "cpp",
    "title": "C++ Core Guidelines",
    "url": "https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines",
    "type": "Language guidance",
    "note": "Initialization, ownership, resource management, and interfaces."
  },
  {
    "id": "git",
    "title": "Pro Git: recording changes",
    "url": "https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository",
    "type": "Official book",
    "note": "Working tree, staged snapshot, commit, and review."
  },
  {
    "id": "branch",
    "title": "Pro Git: branching and merging",
    "url": "https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging",
    "type": "Official book",
    "note": "Keep a playable baseline while exploring a small feature."
  },
  {
    "id": "tags",
    "title": "Pro Git: tagging",
    "url": "https://git-scm.com/book/en/v2/Git-Basics-Tagging",
    "type": "Official book",
    "note": "Name a known source commit for a release."
  },
  {
    "id": "github",
    "title": "GitHub: add local code",
    "url": "https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github",
    "type": "Official guide",
    "note": "Create a remote repository and push using your selected authentication."
  },
  {
    "id": "release",
    "title": "GitHub: releases",
    "url": "https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository",
    "type": "Official guide",
    "note": "Attach a tested ROM and notes to its source tag."
  },
  {
    "id": "mgba",
    "title": "mGBA command-line flags",
    "url": "https://github.com/mgba-emu/mgba/blob/master/src/feature/commandline.c",
    "type": "Official source",
    "note": "-g enables the GDB stub when compiled in; the default port is 2345. Verify --help."
  },
  {
    "id": "gdb",
    "title": "GNU GDB: remote targets",
    "url": "https://www.sourceware.org/gdb/current/onlinedocs/gdb.html/Connecting.html",
    "type": "Official manual",
    "note": "Matching local ELF symbols, target remote, and continue."
  },
  {
    "id": "breaks",
    "title": "GNU GDB: breakpoints",
    "url": "https://sourceware.org/gdb/current/onlinedocs/gdb.html/Breakpoints.html",
    "type": "Official manual",
    "note": "Stop on a function or source line to test a hypothesis."
  },
  {
    "id": "debugflags",
    "title": "Butano template build configuration",
    "url": "https://github.com/GValiente/butano/blob/master/template/Makefile",
    "type": "Official source",
    "note": "The current template documents USERFLAGS := -Og or -O0 for debugging."
  },
  {
    "id": "wsl",
    "title": "Microsoft: Linux GUI applications in WSL",
    "url": "https://learn.microsoft.com/en-us/windows/wsl/tutorials/gui-apps",
    "type": "Official guide",
    "note": "Linux mGBA needs working GUI support; native Windows tools are another option."
  },
  {
    "id": "network",
    "title": "Microsoft: WSL networking",
    "url": "https://learn.microsoft.com/en-us/windows/wsl/networking",
    "type": "Official guide",
    "note": "Windows-host connectivity differs between NAT and mirrored networking."
  },
  {
    "id": "nvim",
    "title": "Neovim user manual",
    "url": "https://neovim.io/doc/user/usr_01.html",
    "type": "Official manual",
    "note": ":help, :make, and quickfix can support a small practical editing loop."
  },
  {
    "id": "aseprite",
    "title": "Aseprite: indexed color mode",
    "url": "https://www.aseprite.org/docs/color-mode/",
    "type": "Official art guide",
    "note": "Choose RGB for working art when convenient, then deliberately validate an indexed export."
  },
  {
    "id": "sheets",
    "title": "Aseprite: sprite sheets",
    "url": "https://www.aseprite.org/docs/sprite-sheet/",
    "type": "Official art guide",
    "note": "Frame order, dimensions, and layout must agree with your engine importer."
  },
  {
    "id": "libresprite",
    "title": "LibreSprite",
    "url": "https://github.com/LibreSprite/LibreSprite",
    "type": "Official project",
    "note": "A free alternative with layers, animation, and indexed palettes."
  },
  {
    "id": "usenti",
    "title": "Usenti on Coranac",
    "url": "https://www.coranac.com/projects/#usenti",
    "type": "Original developer",
    "note": "A useful Windows palette and GBA image utility; optional alongside your main editor."
  },
  {
    "id": "animate",
    "title": "Butano sprite animation API",
    "url": "https://gvaliente.github.io/butano/group__sprite.html",
    "type": "API reference",
    "note": "create_sprite_animate_action_forever retains its sprite and changes graphics indices when updated."
  },
  {
    "id": "walk-poses",
    "title": "Animation Mentor: walk-cycle poses",
    "url": "https://www.animationmentor.com/blog/tutorial-animating-human-walk-cycle/",
    "type": "Practitioner guide",
    "note": "Contact, down, passing, and up describe the changing support and weight in a walk."
  },
  {
    "id": "anticipation",
    "title": "Animation Mentor: anticipation",
    "url": "https://www.animationmentor.com/blog/anticipation-the-12-basic-principles-of-animation/",
    "type": "Practitioner guide",
    "note": "A preparatory pose helps an audience understand an upcoming action."
  },
  {
    "id": "mgba-download",
    "title": "mGBA official downloads",
    "url": "https://mgba.io/downloads.html",
    "type": "Official download",
    "note": "Use an official Windows build if a Linux GUI emulator is not already available; choose the package for your actual system."
  }
];

export const missions = [
  {
    "id": 1,
    "world": 1,
    "title": "Boot the cartridge",
    "subtitle": "Your first win is a ROM you can change.",
    "minutes": 20,
    "tags": [
      "WSL",
      "Git",
      "Build"
    ],
    "goal": "Build the existing project, run its ROM, and record a working baseline.",
    "concept": "A game project is a chain: source and assets become object files, a linker combines them into an ELF, and the build produces a cartridge image. The GBA executes the ROM; the ELF retains information useful to a debugger. Your first job is to make that chain observable. Use the project you already have and inspect its Makefile before changing configuration. A successful compilation differs from a successful launch, and an old ROM can disguise a failed build. Check timestamps and open the exact output you just produced. On WSL, Linux mGBA needs functioning GUI support such as WSLg. Windows mGBA can instead open the ROM through its Windows file picker; discover the translated path with wslpath. Keep a short developer log with the exact working commands. It turns tomorrow’s return into a small action rather than another environment investigation. End today by writing the next concrete edit you want to make. Your project was found at ~/Unamed-Project, with existing modified source and untracked player assets. Preserve those edits before your first experiment.",
    "analogy": "Prove the rocket reaches the screen before redesigning its launchpad.",
    "steps": [
      "In WSL, enter ~/Unamed-Project (the existing folder found on your machine). Inspect README, Makefile, source, git diff, and git status. Preserve your modified src/main.cpp and untracked player.bmp/player.json in a reviewed baseline before experiments.",
      "Run make. Locate the newly written .gba and .elf. Record build command and output names in devlog.md. The current ROMTITLE is longer than the GBA header field: choose your own title of at most 12 ASCII characters, for example SIGNAL LOST.",
      "Open that exact ROM in mGBA. Linux binary names vary; use command -v and --help. For Windows mGBA, use wslpath -w on the actual ROM and open it from Windows. If mGBA is not installed yet, use its official download page and select a native Windows build or your Ubuntu package; then return to this build/run loop.",
      "Review Git state. Initialize Git only if needed, ignore generated outputs, and commit your own source/assets/build configuration as a known baseline."
    ],
    "code": "cd ~/Unamed-Project\npwd\nrg --files -g 'Makefile' -g '*.cpp' -g '*.h' -g 'README*'\ngit status --short\nmake\nrg --files --hidden --no-ignore -g '*.gba' -g '*.elf'\n# Use the actual ROM name printed above:\n# wslpath -w \"$PWD/actual-output.gba\"\n# nvim devlog.md",
    "codeLanguage": "bash",
    "filename": "WSL terminal",
    "challenge": "Close the terminal and emulator, then reproduce the build and launch using only your devlog.",
    "hints": [
      "Start with the existing Makefile.",
      "Check the output timestamp: a failed build can leave yesterday’s ROM.",
      "If Linux mGBA has no display, use Windows mGBA and record the working path."
    ],
    "checks": [
      "make builds the current project.",
      "The newly generated ROM launches.",
      "devlog records the build, launch path, and next action."
    ],
    "quiz": {
      "question": "Which file supplies source-level symbols to GNU GDB?",
      "options": [
        "The matching .elf",
        "The indexed .bmp",
        "A screenshot",
        "Any old .gba"
      ],
      "correct": 0,
      "explanation": "Use the ELF from the exact build of the ROM being emulated."
    },
    "recall": "Explain the different jobs of make, compiler, linker, and emulator.",
    "transfer": "How would you distinguish a compilation failure from a ROM-launch failure?",
    "commit": "chore: record working build and launch",
    "sources": [
      "start",
      "git",
      "wsl",
      "nvim",
      "mgba-download"
    ]
  },
  {
    "id": 2,
    "world": 1,
    "title": "A heartbeat at 60 frames",
    "subtitle": "Reconnect C++ values to a visible result.",
    "minutes": 25,
    "tags": [
      "C++",
      "Game loop",
      "GBA"
    ],
    "goal": "Change the backdrop and explain the initialization/update loop.",
    "concept": "A running game repeatedly reads input, changes a model, and presents a result. Butano initializes its systems through bn::core::init(), then bn::core::update() advances the screen and subsystems. Keep one regular update call in your outer loop. This is a frame boundary, not a second operating-system thread. The GBA refreshes at approximately 59.7 Hz; “60 fps” is useful shorthand, but a 60-frame timer is not an exact wall-clock second. Begin with C++ distinctions you can see: a variable stores a value, an expression computes a value, and a function call asks for work. constexpr describes a compile-time value; const prevents modification through that name. Explicitly initialize counters and state. An uninitialized built-in integer is not reliably zero. Change one color component at a time and predict the result before compiling. Prediction makes the emulator provide feedback about a mental model instead of rewarding random edits. Keep the first experiment small enough to understand every line. You are refreshing the loop already present in your game, so preserve and return to your existing movement after this small experiment.",
    "analogy": "Each frame is a conductor’s beat: the orchestra advances together even when some instruments rest.",
    "steps": [
      "Your existing main.cpp already calls init and core::update and moves a sprite. Locate those boundaries. Save your current work in Git and use an experiment branch before temporarily trying the minimal example.",
      "Try the asset-free main below, preserving your working build settings.",
      "Predict the effect of each color component; valid component values are 0–31. Test one prediction at a time.",
      "Keep a distinctive station backdrop and restore any existing game features you need."
    ],
    "code": "#include \"bn_core.h\"\n#include \"bn_color.h\"\n#include \"bn_bg_palettes.h\"\n\nint main()\n{\n    bn::core::init();\n    const bn::color station_dark(2, 3, 7);\n    bn::bg_palettes::set_transparent_color(station_dark);\n    while(true)\n    {\n        bn::core::update();\n    }\n}",
    "codeLanguage": "cpp",
    "filename": "src/main.cpp",
    "challenge": "Explain what happens if a second endless loop appears before core::update. Fix the structure without random changes.",
    "hints": [
      "Statements after a nonterminating loop are never reached.",
      "Initialize once before repeating work.",
      "Keep game work followed by one regular engine update."
    ],
    "checks": [
      "The ROM shows your backdrop.",
      "You can identify initialization and the frame boundary.",
      "You can explain why main does not return during play."
    ],
    "quiz": {
      "question": "Why call core::update regularly?",
      "options": [
        "It creates enemy AI automatically",
        "It advances the screen and engine subsystems",
        "It recompiles C++",
        "It commits to Git"
      ],
      "correct": 1,
      "explanation": "The engine needs its update boundary. Your code supplies the game rules."
    },
    "recall": "Sketch the smallest Butano main loop from memory.",
    "transfer": "Why should pausing your simulation still leave engine updates running?",
    "commit": "feat: establish station backdrop and frame loop",
    "sources": [
      "core",
      "faq",
      "cpp"
    ]
  },
  {
    "id": 3,
    "world": 1,
    "title": "Your first astronaut",
    "subtitle": "Draw a placeholder that belongs to you.",
    "minutes": 30,
    "tags": [
      "Art",
      "Assets",
      "RAII"
    ],
    "goal": "Draw an original 16×16 placeholder, import it, and keep its sprite alive.",
    "concept": "A placeholder is a tool for thinking, not a judgment of your artistic ability. Draw a simple astronaut whose silhouette you can recognize at actual size. Use a 16×16 canvas, a transparent background, and only a few colors. Your art workshop will deepen the craft later; today the goal is a complete drawing-to-ROM loop. Save your editable source separately from the engine export. Butano needs an uncompressed indexed BMP with 16 or 256 palette entries and matching configuration JSON. Reserve palette index zero for transparency. Name the files player.bmp and player.json, with the JSON containing {\"type\":\"sprite\"}. The build generates bn_sprite_items_player.h; include it only after those assets exist. Keep the returned bn::sprite_ptr in the scope that owns the scene. It is an owning handle: the last owner going away releases the sprite. An editor on Windows and a build in WSL work together perfectly well; export into the project’s graphics folder using an accessible path. Since your project already has a player asset, treat this as a deliberate art revision and preserve the current export first.",
    "analogy": "The generated header is a catalog entry; sprite_ptr reserves an actual actor on stage.",
    "steps": [
      "Your existing project already has a 16×16 indexed player.bmp and player.json. Preserve both in your baseline. Draw or refine your own original astronaut in an editable source under art/, keeping existing exports until the replacement is ready.",
      "Export graphics/player.bmp as indexed, uncompressed BMP with a 16-color palette and index-zero transparency. Add graphics/player.json containing {\"type\":\"sprite\"}. If your editor cannot export a compatible BMP, use Usenti as a conversion/validation utility.",
      "Run make, then use the generated header in the example below. Keep player before the while loop and after init.",
      "Temporarily place sprite creation in a short inner scope, observe the lifetime, then restore scene ownership."
    ],
    "code": "#include \"bn_core.h\"\n#include \"bn_sprite_ptr.h\"\n#include \"bn_sprite_items_player.h\"\n\nint main()\n{\n    bn::core::init();\n    bn::sprite_ptr player = bn::sprite_items::player.create_sprite(0, 0);\n    while(true)\n    {\n        bn::core::update();\n    }\n}",
    "codeLanguage": "cpp",
    "filename": "src/main.cpp — after creating player assets",
    "challenge": "Place your astronaut at (-80,-40). Predict its quadrant and explain what keeps it alive.",
    "hints": [
      "The default origin is screen center.",
      "Negative x is left; negative y is up.",
      "An owning handle must survive the frame loop."
    ],
    "checks": [
      "Your own indexed player art imports.",
      "The astronaut appears at the intended position.",
      "You can explain sprite ownership and generated headers."
    ],
    "quiz": {
      "question": "Why keep player outside the loop?",
      "options": [
        "Loop variables are global",
        "Generated headers own every sprite forever",
        "Its owning handle must survive between frames",
        "Constructors cannot run on GBA"
      ],
      "correct": 2,
      "explanation": "Scene scope retains the owning handle across frames."
    },
    "recall": "Trace source art → indexed BMP/JSON → generated header → sprite item → sprite_ptr.",
    "transfer": "Explain why copying a sprite_ptr does not create a second independent astronaut.",
    "commit": "feat: import original placeholder astronaut",
    "sources": [
      "import",
      "sprites",
      "cpp",
      "usenti"
    ]
  },
  {
    "id": 4,
    "world": 1,
    "title": "C++ back in your hands",
    "subtitle": "Values, references, and fractional motion.",
    "minutes": 30,
    "tags": [
      "C++",
      "Fixed point",
      "Functions"
    ],
    "goal": "Extract movement and explain parameter semantics.",
    "concept": "A function lets you name an idea and inspect it separately. Passing an integer by value copies it; changing that parameter does not change the caller’s integer. A reference aliases an existing object, while a const reference prevents modification through that interface. Smart handles require extra precision: copying a sprite_ptr retains the same underlying sprite, so modifying that sprite through a copied handle can still affect the visible actor. A reference can express intent and avoid unnecessary handle churn. For motion use bn::fixed, which represents fractions using scaled integers. GBA hardware has no floating-point unit, so runtime floating-point arithmetic can be costly. Fixed point still has finite range and precision; it does not prevent overflow. Integer division occurs before conversion: bn::fixed(1 / 2) receives zero, while bn::fixed(0.5) represents a half. Preserve fractional state across frames and convert only when a discrete value requires it. Explain these operations aloud before pressing build.",
    "analogy": "A value is a photocopy; a reference is another pen pointing at the original form.",
    "steps": [
      "Predict what happens when a function increments an int parameter passed by value versus reference. Verify the caller’s value.",
      "Add the helper below above main and call it once per frame.",
      "Compare 1, bn::fixed(0.5), and bn::fixed(1 / 2). Record your predictions first.",
      "Add a named movement boundary and separate the clamp rule from rendering."
    ],
    "code": "#include \"bn_fixed.h\"\n#include \"bn_sprite_ptr.h\"\n\nvoid move_horizontal(bn::sprite_ptr& player, bn::fixed amount)\n{\n    player.set_x(player.x() + amount);\n}\n// In the existing loop before core::update():\n// move_horizontal(player, bn::fixed(0.5));",
    "codeLanguage": "cpp",
    "filename": "src/main.cpp — helper above main",
    "challenge": "Move left using the same function and explain why 1/2 differs from 1.0/2.0.",
    "hints": [
      "A negative displacement reverses motion.",
      "Operand types determine division before conversion.",
      "Call move_horizontal(player, bn::fixed(-0.5))."
    ],
    "checks": [
      "The helper changes the existing sprite.",
      "Fractional movement accumulates.",
      "You can diagnose integer division without guessing."
    ],
    "quiz": {
      "question": "What does the division in bn::fixed(1 / 2) produce?",
      "options": [
        "0.5",
        "1",
        "A pointer",
        "0"
      ],
      "correct": 3,
      "explanation": "Integer operands cause integer division before construction."
    },
    "recall": "Explain by value, by reference, const reference, and shared ownership.",
    "transfer": "Design a pure clamp function that returns its corrected coordinate.",
    "commit": "refactor: name movement and retain fractional state",
    "sources": [
      "fixed",
      "cpp",
      "faq"
    ]
  },
  {
    "id": 5,
    "world": 2,
    "title": "You have the controls",
    "subtitle": "Turn inputs into deliberate motion.",
    "minutes": 25,
    "tags": [
      "Input",
      "Vectors",
      "C++"
    ],
    "goal": "Move in four directions with consistent diagonal speed.",
    "concept": "Input is not a movement rule. Translate the keypad into an intent vector, apply movement constraints, then update the model and sprite. Held input fits continuous walking; pressed fits a one-time action such as pausing. Keeping them separate helps later controllers and replay tests. A diagonal request of (1,1) has length √2, so one pixel on both axes is about 41% faster than one pixel along a single axis. Scale both components by approximately 1/√2 when both are nonzero. Fixed-point rounding leaves a small error that is acceptable here. Decide what opposite directions mean: subtracting booleans produces zero for simultaneous left and right, which is an explicit policy. Test taps, sustained input, and release, rather than only walking in one direction. Predict ten frames of unblocked motion before running. Remove the previous automatic movement so the player alone controls the astronaut. The result should feel simple because the rules are clear. Your current source sets the sprite position before clamping model x/y. Fix that order so the displayed result reflects the accepted position.",
    "analogy": "The D-pad submits an order; movement code decides how to carry it out.",
    "steps": [
      "Remove the automatic movement call and add the input helper below.",
      "Apply input to model x/y, clamp the full 16×16 sprite center to x [-112,112] and y [-72,72], then call set_x/set_y. Your existing code currently updates the sprite before clamping: reverse that order. Keep one named speed (your current speed is 1.5).",
      "Compare cardinal and diagonal travel, and explain the correction.",
      "Test taps, release, and opposite directions. Keep speed in one named value."
    ],
    "code": "#include \"bn_fixed_point.h\"\n#include \"bn_keypad.h\"\n\nbn::fixed_point read_movement()\n{\n    int x = int(bn::keypad::right_held()) - int(bn::keypad::left_held());\n    int y = int(bn::keypad::down_held()) - int(bn::keypad::up_held());\n    bn::fixed scale = (x && y) ? bn::fixed(0.7071) : bn::fixed(1);\n    return bn::fixed_point(x * scale, y * scale);\n}\n// In loop: movement = read_movement() * your named speed.\n// Apply to model x/y, clamp x to [-112,112], y to [-72,72],\n// then set player position from the clamped model.\n// Only after that call core::update().",
    "codeLanguage": "cpp",
    "filename": "src/main.cpp — input helper",
    "challenge": "Add a B-held slow walk while preserving cardinal/diagonal speed consistency.",
    "hints": [
      "Calculate direction before speed.",
      "Apply one final speed to both components.",
      "Multiply the normalized displacement by 0.5 or 1 using bn::fixed."
    ],
    "checks": [
      "All D-pad directions and release work.",
      "Diagonal speed is approximately consistent.",
      "Opposite inputs follow a documented policy."
    ],
    "quiz": {
      "question": "Which fits continuous walking?",
      "options": [
        "right_held()",
        "right_pressed() for the whole walk",
        "Git commit count",
        "A blocking key wait"
      ],
      "correct": 0,
      "explanation": "Held describes current state; pressed describes the transition into it."
    },
    "recall": "Draw the up-right vector and derive the diagonal correction.",
    "transfer": "How could simulation accept a movement vector from either a test or the real keypad?",
    "commit": "feat: add normalized D-pad movement",
    "sources": [
      "input",
      "fixed"
    ]
  },
  {
    "id": 6,
    "world": 2,
    "title": "Pause the station",
    "subtitle": "Make illegal states harder to express.",
    "minutes": 25,
    "tags": [
      "State",
      "C++",
      "Architecture"
    ],
    "goal": "Pause simulation without freezing input and presentation.",
    "concept": "Loose booleans look simple until paused, won, and dead can all be true. An enum class names one mutually exclusive mode. State is data that survives frames; a transition changes that state when an event occurs. Use start_pressed for toggling, because start_held can flip the mode on every frame of one long press. Keep the engine update outside your simulation branches so input and presentation continue while movement is paused. Update order is now visible: if you handle a pause event and then independently update movement, decide whether the transition frame should move. A consistent policy is better than an accidental extra step. Sketch Playing → Paused and Paused → Playing before changing code. Later Title, Won, and Lost can extend the diagram without replacing the loop. As you add timers, classify which ones belong to simulation and should freeze during pause, and which presentation effects may continue. This small distinction prevents confusing behavior later.",
    "analogy": "An airlock has named modes; two forgotten switches should not make it “opening and sealed.”",
    "steps": [
      "Draw a two-node diagram with Start transitions.",
      "Initialize Mode before the loop and handle one pause event per frame.",
      "Run movement only when playing, with core::update outside that condition.",
      "Tap and hold Start, then verify position and simulation timers do not advance while paused."
    ],
    "code": "#include \"bn_keypad.h\"\nenum class Mode { playing, paused };\n\nvoid handle_pause(Mode& mode)\n{\n    if(!bn::keypad::start_pressed()) return;\n    if(mode == Mode::playing) mode = Mode::paused;\n    else if(mode == Mode::paused) mode = Mode::playing;\n}\n// Before loop: Mode mode = Mode::playing;\n// In loop: handle_pause(mode);\n// if(mode == Mode::playing) { /* existing movement */ }\n// bn::core::update();",
    "codeLanguage": "cpp",
    "filename": "src/main.cpp — mode helper",
    "challenge": "Add a pause indicator using a visible technique you already know.",
    "hints": [
      "Your backdrop can communicate mode before you add text.",
      "Derive the indicator from Mode.",
      "Only allow playing → paused and paused → playing. This keeps later won/lost modes stable until an intentional restart."
    ],
    "checks": [
      "Start pauses and resumes.",
      "A held button causes one toggle.",
      "Engine updates continue while simulation pauses."
    ],
    "quiz": {
      "question": "Why prefer one enum mode to several mutually exclusive booleans?",
      "options": [
        "It makes variables global",
        "It directly represents one legal mode",
        "It fixes all bugs automatically",
        "It removes input handling"
      ],
      "correct": 1,
      "explanation": "A single mode excludes contradictory combinations and makes transitions explicit."
    },
    "recall": "Draw the pause state machine and locate the frame boundary.",
    "transfer": "Name a timer that should pause and a display effect that could continue.",
    "commit": "feat: add explicit play and pause states",
    "sources": [
      "cpp",
      "input",
      "core"
    ]
  },
  {
    "id": 7,
    "world": 2,
    "title": "Walls have rules",
    "subtitle": "A collision is a geometric question.",
    "minutes": 35,
    "tags": [
      "Collision",
      "Geometry",
      "Testing"
    ],
    "goal": "Implement AABB overlap and stop at a visible obstacle.",
    "concept": "Separate a wall’s picture from the rule that blocks movement. An axis-aligned bounding box has left, top, right, and bottom edges without rotation. Two boxes overlap when their intervals overlap on both axes. Decide whether touching edges counts; the strict comparisons below treat touching as no penetration, allowing the astronaut to rest against a wall. A movement attempt is a proposal. Test a candidate position before accepting it. Resolve x and y separately so one blocked axis can still allow sliding along the other. Start with an 8×8 body hitbox inside the 16×16 art and name the dimensions in one place. This is discrete collision: a fast object can cross a thin wall between samples. Your current walk is slow enough for a small prototype, but record that assumption before adding a dash. Test exact boundaries and corners, since a successful middle-of-wall test does not prove the interesting cases.",
    "analogy": "Lay one ruler across each axis. Both footprints must overlap on both rulers.",
    "steps": [
      "Write the function below. Predict separated, overlapping, and edge-touching cases. If these definitions live in a shared header, use #pragma once and inline (or put definitions in one .cpp); the include guard alone does not solve multiple-definition linker errors.",
      "Create a visible wall placeholder from a second instance of your existing sprite at (32,0). Give it a 16×16 obstacle box.",
      "Propose x movement, accept if its candidate hitbox is legal, then test y using the accepted x.",
      "Clamp to the current screen interior, accounting for hitbox extent. Test diagonal corner approaches."
    ],
    "code": "#include \"bn_fixed.h\"\nstruct Box { bn::fixed left, top, right, bottom; };\n\ninline bool overlaps(const Box& a, const Box& b)\n{\n    return a.left < b.right && a.right > b.left &&\n           a.top < b.bottom && a.bottom > b.top;\n}\n\ninline Box player_box(bn::fixed x, bn::fixed y)\n{\n    constexpr int half_body = 4;\n    return {x - half_body, y - half_body, x + half_body, y + half_body};\n}",
    "codeLanguage": "cpp",
    "filename": "src/collision.h — add #pragma once when extracting",
    "challenge": "Demonstrate why rejecting an entire diagonal step can feel sticky, then explain axis resolution.",
    "hints": [
      "Move down-right while touching a vertical wall.",
      "The x proposal can fail while y remains legal.",
      "Test and commit each axis independently."
    ],
    "checks": [
      "Walking cannot enter the obstacle.",
      "Diagonal movement slides along walls.",
      "Edge-touch behavior is documented and tested."
    ],
    "quiz": {
      "question": "AABB rectangles overlap when…",
      "options": [
        "Either axis overlaps",
        "Their palettes match",
        "Their intervals overlap on both axes",
        "Their x positions are equal"
      ],
      "correct": 2,
      "explanation": "Overlap on only one axis can still leave a gap on the other."
    },
    "recall": "Derive all four comparisons without looking.",
    "transfer": "Why can a projectile moving 40 pixels per frame cross a 4-pixel wall?",
    "commit": "feat: add AABB collision and wall sliding",
    "sources": [
      "cpp",
      "fixed",
      "examples"
    ]
  },
  {
    "id": 8,
    "world": 2,
    "title": "First playable: find the signal",
    "subtitle": "Boss checkpoint · a loop worth playing.",
    "minutes": 35,
    "tags": [
      "Checkpoint",
      "Game rules",
      "Transfer"
    ],
    "goal": "Collect three relays and reach an exit to finish a tiny round.",
    "concept": "A prototype becomes a game when an objective, actions, feedback, and an outcome form a complete loop. Your first vertical slice is deliberately small: one room, three relays, one exit, no enemies. Keep facts distinct from their pictures. A relay has a position and a collected flag; its sprite reflects that flag. Collection must be the transition from available to collected, or persistent overlap can award score every frame. Derive the count from relay facts or update it exactly once per successful transition. Check the exit after resolving current-frame pickups so a final relay and an exit touch have a consistent result. Reuse your astronaut art as temporary markers if needed, distinguishing them with position and flip until the original-art workshop. This checkpoint combines previous ideas with fewer instructions. Keep scope fixed and finish a rough complete loop. It teaches more about game structure than polishing a single disconnected screen. Record one confusing moment from a full playthrough and improve its feedback.",
    "analogy": "Your first complete sandwich can be modest, but every bite should contain the whole recipe.",
    "steps": [
      "Reconstruct input → proposal → collision → accepted position from memory before reviewing old code.",
      "Create three reachable relay records with collected flags and visible markers.",
      "On a successful pickup, hide its marker and update the count. Extend the mode enum with won; touching the exit wins only with all three.",
      "Test early exit, waiting on a collected relay, final pickup, and a complete round."
    ],
    "code": "struct RelayState { bool collected = false; };\n\nbool try_collect(RelayState& relay, bool touching)\n{\n    if(relay.collected || !touching) return false;\n    relay.collected = true;\n    return true;\n}\n// if(try_collect(relay, touching)) { ++collected_count; }\n// Add won to your mode enum before using it.\n// if(collected_count == 3 && touching_exit) mode = Mode::won;",
    "codeLanguage": "cpp",
    "filename": "src/main.cpp — pickup transition",
    "challenge": "Explain the objective in one sentence and test whether someone could finish without coaching.",
    "hints": [
      "Collect three, then find the exit.",
      "An early exit should reveal what is missing.",
      "Award a pickup only on the available → collected transition."
    ],
    "checks": [
      "Each relay is counted once.",
      "The exit cannot win early.",
      "A full round reaches a stable won state."
    ],
    "quiz": {
      "question": "Why check the collected flag?",
      "options": [
        "Flags automatically reduce ROM size",
        "Collision runs once per second",
        "Exit palettes must differ",
        "Overlap can stay true for many frames"
      ],
      "correct": 3,
      "explanation": "A persistent condition should produce a pickup event only once."
    },
    "recall": "Outline the playable loop and name every persistent fact.",
    "transfer": "Design a key-and-door variation with the same transition rule.",
    "commit": "feat: finish collect-and-escape vertical slice",
    "sources": [
      "input",
      "sprites",
      "cpp"
    ]
  },
  {
    "id": 9,
    "world": 3,
    "title": "A silhouette with a personality",
    "subtitle": "Pixel workshop · learn to see at 1×.",
    "minutes": 30,
    "tags": [
      "Original art",
      "Silhouette",
      "Tools"
    ],
    "goal": "Draw three original 16×16 character silhouettes and choose one using readability tests.",
    "concept": "Pixel art is deliberate placement under a small visual budget. At 16×16, a strong outer shape communicates more than a collection of tiny details. Begin in one solid color and leave negative space between limbs and equipment. Judge the drawing at its actual display size, then zoom in to edit; a beautiful enlarged grid can still be unreadable in motion. Pick one editor and start drawing. Aseprite is a strong main editor if you want its commercial binaries and animation workflow; LibreSprite is a free alternative with layers, frames, and onion skinning. Usenti remains useful as a focused GBA palette and BMP utility. The choice is not a skill gate. You may run a native Windows editor and export into the WSL project; the editor need not live inside WSL. Save the editable source under art/ and engine exports under graphics/. Keeping source and export separate lets you change your mind without destroying layers or frame structure.",
    "analogy": "At postcard scale, a clear skyline says more than a thousand windows.",
    "steps": [
      "Choose Aseprite, LibreSprite, your existing editor, or the app pixel studio. Spend this session drawing rather than configuring a new toolchain.",
      "Draw three one-color 16×16 astronauts with distinct silhouettes: compact explorer, tall antenna, or broad backpack. Keep original drawings under art/.",
      "View each at 1× on both light and dark backgrounds. Mark one confusing cluster and remove or reshape pixels until the limbs/equipment read.",
      "Choose the strongest version and create original relay and exit silhouettes with clearly different outlines. Update the game’s placeholders only after saving your source art."
    ],
    "code": "# In your existing project, inspect source and export folders:\nrg --files art graphics\n# Example organization (create in your editor):\n# art/astronaut-source.aseprite\n# art/relay-source.aseprite\n# graphics/player.bmp  + graphics/player.json\n# Export only after saving the editable source.\n# Windows editor: open the WSL project through its Windows-accessible path.",
    "codeLanguage": "bash",
    "filename": "art/ — your editable originals",
    "challenge": "Show only the solid silhouettes at actual size. Can someone distinguish astronaut, relay, and exit without color or explanation?",
    "hints": [
      "Remove interior detail before fixing readability.",
      "Use different proportions and negative spaces for different roles.",
      "An antenna can identify the player; a diamond relay and arch-shaped exit remain distinct in grayscale. Invent your own versions."
    ],
    "checks": [
      "Three original character silhouettes exist.",
      "Your selected character reads at 1×.",
      "Relay and exit remain distinguishable without color."
    ],
    "quiz": {
      "question": "What should you test first in a tiny game sprite?",
      "options": [
        "Its silhouette at actual display size",
        "The number of decorative pixels",
        "Its appearance only at 1600% zoom",
        "Whether it resembles an existing commercial character"
      ],
      "correct": 0,
      "explanation": "A readable shape survives motion, small size, and color differences."
    },
    "recall": "Explain silhouette, negative space, cluster, and source-versus-export.",
    "transfer": "Draw a new enemy silhouette with a different role using the same 16×16 limit.",
    "commit": "art: establish original character and object silhouettes",
    "sources": [
      "aseprite",
      "libresprite",
      "usenti",
      "import"
    ]
  },
  {
    "id": 10,
    "world": 3,
    "title": "Give light a direction",
    "subtitle": "Palette, value, and accessible visual roles.",
    "minutes": 30,
    "tags": [
      "Palette",
      "Shading",
      "Accessibility"
    ],
    "goal": "Build a restrained palette and shade your astronaut consistently.",
    "concept": "A palette is a small set of roles, not just favorite colors. Start with transparent index zero, a dark outline or deep shadow, a midtone, a light plane, and one accent. Choose a single light direction, such as upper left, and let surfaces facing it use lighter values. Shade the form rather than tracing a lighter line around every edge. Adjacent planes should differ enough in value to remain distinguishable at 1×. Test in grayscale because two different hues can have nearly identical brightness. Essential roles also need shape or motion cues: a dangerous sentinel and a collectible should not differ only by red versus green. Indexed mode stores a palette index per pixel; changing a palette entry changes every pixel referring to it. That makes global palette edits useful, but also means you must preserve the intended index-zero transparency in the final BMP. GBA colors have five bits per RGB channel, so subtle gradients may collapse after conversion. Test your actual export in the ROM.",
    "analogy": "Assign each color a job in a tiny stage lighting crew.",
    "steps": [
      "Create a five-to-eight-color palette with named roles: transparent, shadow, midtone, highlight, and accent. Keep within a 16-entry export palette.",
      "Shade the chosen astronaut from upper left. Use connected clusters rather than isolated noise, and avoid adding colors to solve every small problem.",
      "View the art in grayscale and against the actual station backdrop. Adjust value contrast where important shapes merge.",
      "Export and rebuild. Inspect palette index zero and compare the emulator result with the editable original. Add a shape cue for danger and a different cue for collectibility."
    ],
    "code": "# Export validation checklist; run make after checking in your editor:\n# [ ] Indexed BMP, uncompressed, 16-entry palette\n# [ ] Palette entry 0 reserved for transparent pixels\n# [ ] One documented light direction\n# [ ] Readable at 1x and in grayscale\n# [ ] Editable original saved separately\nmake\n# Inspect the newly built ROM in mGBA, not only the editor preview.",
    "codeLanguage": "bash",
    "filename": "art/palette-notes.md",
    "challenge": "Remove one palette color without losing readability. Explain which visual job the remaining colors absorbed.",
    "hints": [
      "Compare nearby colors in grayscale.",
      "Merge colors whose roles and values are almost identical.",
      "Keep contrast at major planes and silhouettes before preserving decorative gradients."
    ],
    "checks": [
      "Palette roles and light direction are documented.",
      "Astronaut shading is consistent and readable at 1×.",
      "Exported transparency and gameplay distinctions work in the ROM."
    ],
    "quiz": {
      "question": "In an indexed image, changing one palette entry affects…",
      "options": [
        "The collision box automatically",
        "Every pixel referencing that entry",
        "Only the last pixel you drew",
        "Only the editable filename"
      ],
      "correct": 1,
      "explanation": "Pixels store indices into the palette. One entry can be referenced by many pixels."
    },
    "recall": "Explain hue versus value and why index zero needs special care.",
    "transfer": "Create a second room palette while preserving the same silhouette and gameplay readability.",
    "commit": "art: define palette roles and consistent lighting",
    "sources": [
      "aseprite",
      "import",
      "usenti"
    ]
  },
  {
    "id": 11,
    "world": 3,
    "title": "Teach your pixels to walk",
    "subtitle": "Pose, timing, and a predictable sprite sheet.",
    "minutes": 35,
    "tags": [
      "Animation",
      "Spritesheet",
      "Butano"
    ],
    "goal": "Draw and import an original four-frame walk cycle.",
    "concept": "Animation is a sequence of meaningful poses plus time. For a simple four-frame walk use contact, passing, opposite contact, and passing. Keep the helmet and body volume consistent; change foot placement and a small body bob to imply weight. Use onion skinning or frame flipping to compare positions, but judge playback at actual size. The feet should support the character rather than drift because the whole canvas shifts accidentally. Export four 16×16 frames as a 64×16 horizontal sheet with no padding, trimming, or frame rotation. Set player.json to {\"type\":\"sprite\",\"width\":16,\"height\":16}. Aseprite’s exported JSON describes its own frame metadata and is not Butano’s asset configuration; keep them separate. The animation action selects graphics indices; update it only while moving and playing. Keep the action alive between frames, just like the sprite. If pause freezes movement, it should normally freeze this walk cycle too. Artistic timing and simulation timing are related but remain distinct decisions. Fuller cycles name contact, down (weight absorption), passing, and up (rise); a short four-frame version compresses these breakdowns. Anticipation is a preparatory lean or crouch before a new action.",
    "analogy": "Four clear footsteps tell a stronger story than twenty nearly identical pictures.",
    "steps": [
      "Duplicate the original source into a four-frame animation. Draw contact → passing → opposite contact → passing, preserving proportions and a stable anchor.",
      "Preview at 1×. Try different frame durations and explain which gives readable footsteps at your movement speed.",
      "Export a 64×16 indexed BMP with four 16×16 frames, no gaps, and the documented Butano JSON. Preserve the editable animation file.",
      "Use the retained action below. Update only while moving/playing; on idle, choose and display an intentional idle frame."
    ],
    "code": "#include \"bn_sprite_animate_actions.h\"\n#include \"bn_sprite_items_player.h\"\n// Prerequisite: your four original 16x16 frames exported in order.\n// After player creation, before loop:\n// auto walk = bn::create_sprite_animate_action_forever(\n//     player, 7, bn::sprite_items::player.tiles_item(), 0, 1, 2, 3);\n// During playing movement:\n// walk.update();\n// On entering idle:\n// player.set_tiles(bn::sprite_items::player.tiles_item(), 0);\n// Keep the action outside the loop; recreate/reset only deliberately.",
    "codeLanguage": "cpp",
    "filename": "src/main.cpp — retained walk action",
    "challenge": "Explain how a frame that looks good alone can cause a jitter when sequenced. Fix a visible anchor or volume inconsistency in your animation.",
    "hints": [
      "Compare helmet center and body width across all poses.",
      "An accidental canvas shift moves the whole actor rather than only the feet.",
      "Overlay adjacent frames to stabilize the body. Before a dash or jump, an intentional preparatory lean can provide anticipation rather than accidental jitter."
    ],
    "checks": [
      "Four original poses form a readable cycle.",
      "The sheet imports as four 16×16 graphics indices.",
      "Walk timing respects movement, idle, and pause."
    ],
    "quiz": {
      "question": "Can Aseprite’s frame-metadata JSON replace Butano’s player.json directly?",
      "options": [
        "Only when the filename is uppercase",
        "Only inside Windows",
        "No; they describe different formats",
        "Yes; every JSON file has the same meaning"
      ],
      "correct": 2,
      "explanation": "Butano needs its own asset configuration keys; editor metadata describes frame packing and animation information."
    },
    "recall": "Explain pose order, anchor, frame duration, sheet dimensions, and graphics index.",
    "transfer": "Design separate idle and damaged poses without making gameplay collision depend on the current picture.",
    "commit": "art: create and integrate original walk cycle",
    "sources": [
      "sheets",
      "sprites",
      "examples",
      "import",
      "animate",
      "walk-poses",
      "anticipation"
    ]
  },
  {
    "id": 12,
    "world": 3,
    "title": "A world from little squares",
    "subtitle": "Seamless tiles and an original station kit.",
    "minutes": 35,
    "tags": [
      "Tiles",
      "Original art",
      "Checkpoint"
    ],
    "goal": "Draw a reusable original floor/wall kit and export a consistent room.",
    "concept": "A tile kit creates variety through a small visual vocabulary. Start with a floor, wall face, wall top, corner, and one accent. Graphics tiles are 8×8 pixels; you may design a 16×16 gameplay cell from four of them. To make a repeatable floor, compare opposite edges and preview a 3×3 repetition. A single isolated texture hides seams that become obvious when tiled. Keep strong detail sparse so the floor does not compete with moving actors. Wall edges should clearly indicate where walking stops, but collision still belongs to its own data. Build a 256×256 room from your original kit and use a consistent palette. Export room.bmp as a supported indexed BMP and room.json containing {\"type\":\"regular_bg\"}. Save the editable tile source and assembled map separately. Build immediately after export and inspect actual-size readability in mGBA. The workshop succeeds when you can make a new matching tile yourself and carry it through the complete import pipeline.",
    "analogy": "A small set of musical notes can compose a room; seams are the accidental clicks between notes.",
    "steps": [
      "Draw original 8×8 floor and wall tiles plus a corner. Use the palette and lighting established earlier.",
      "Preview the floor in a 3×3 repeat. Repair edge discontinuities and reduce distracting high-contrast detail.",
      "Assemble a 256×256 station room on a 16-pixel gameplay grid. Include a border, an interior wall with a gap, and space for relays and exit.",
      "Export indexed room.bmp plus Butano room.json. Build and inspect at 1×; keep the editable kit and map source under art/."
    ],
    "code": "# Room asset pair created by you:\n# graphics/room.bmp    256x256 indexed, uncompressed BMP\n# graphics/room.json   {\"type\":\"regular_bg\"}\n# art/station-kit.*    editable tiles\n# art/station-room.*   editable composition\nmake\n# After successful conversion, C++ can include:\n# bn_regular_bg_items_room.h\n# Do not edit the generated header in build/.",
    "codeLanguage": "bash",
    "filename": "art/ + graphics/room.bmp and room.json",
    "challenge": "Draw one new damaged-floor variant that matches the kit and remains quiet behind the astronaut. Prove it tiles without an obvious seam.",
    "hints": [
      "Preview repetition instead of inspecting one tile in isolation.",
      "Make opposite edge transitions agree.",
      "Keep damage away from major walking boundaries so art does not imply a false wall."
    ],
    "checks": [
      "The kit and room contain your original art.",
      "Repeating floor tiles have no unintended seams.",
      "The indexed room imports and preserves actor readability."
    ],
    "quiz": {
      "question": "Why preview a floor tile as a repeated pattern?",
      "options": [
        "It changes the collision grid automatically",
        "It removes the need to export",
        "It guarantees that all colors are accessible",
        "Seams often appear only when edges meet"
      ],
      "correct": 3,
      "explanation": "Repetition exposes discontinuities and distracting patterns hidden by an isolated tile."
    },
    "recall": "Explain graphics-tile size versus gameplay-cell size and source map versus engine export.",
    "transfer": "Create a second room using the same kit and one new visual accent.",
    "commit": "art: build original station tile kit and room",
    "sources": [
      "import",
      "bg",
      "libresprite",
      "sheets"
    ]
  },
  {
    "id": 13,
    "world": 4,
    "title": "A room full of data",
    "subtitle": "One rule, many objects.",
    "minutes": 30,
    "tags": [
      "C++",
      "Arrays",
      "Entities"
    ],
    "goal": "Replace duplicated relay branches with bounded data and one loop.",
    "concept": "Three hand-written relay branches work, but turn one bug fix into three chances to miss a detail. Store repeated facts in a collection and apply one rule to each record. A struct groups values that belong together; an array holds several records of the same shape. This is enough architecture for the current game. You do not need a general entity-component framework for three collectibles. Use a range loop with auto& when modifying actual elements. Plain auto can silently edit copies of ordinary value records. Keep positions in the model and synchronize sprites deliberately. An index can connect separate state and sprite arrays, but their equal lengths become an invariant you must preserve. Fixed-size storage gives an inspectable upper bound. A bounded vector can later support a variable active count while retaining a maximum. Choose the smallest representation that makes your rules clear. Prove the improvement by adding a relay through data, not by copying another branch.",
    "analogy": "Keep a roster and apply one instruction to every name instead of writing separate instruction sheets.",
    "steps": [
      "Define Relay with position and collected state, then initialize the level’s relays before the loop.",
      "Use one collection loop and an explicit mapping to your original relay sprites.",
      "Add a fourth relay through level data and change the objective count without duplicating gameplay rules.",
      "Extract a pure count_collected helper and check zero, some, and all collected cases."
    ],
    "code": "#include \"bn_fixed_point.h\"\nstruct Relay\n{\n    bn::fixed_point position;\n    bool collected = false;\n};\n\ntemplate<int Count>\nint count_collected(const Relay (&relays)[Count])\n{\n    int count = 0;\n    for(const auto& relay : relays) count += int(relay.collected);\n    return count;\n}\n// Relay relays[3] = {\n//     {{-64, -32}, false}, {{48, -24}, false}, {{0, 48}, false}};",
    "codeLanguage": "cpp",
    "filename": "src/relay.h — data and counting",
    "challenge": "Change level contents without changing the counting function or collection rule.",
    "hints": [
      "The template deduces the array count from its type.",
      "A mutable reference updates an existing record.",
      "Keep the visual handle mapping and model array sizes consistent."
    ],
    "checks": [
      "One loop handles all relays.",
      "Flag edits persist in the array.",
      "Level changes do not require copied rules."
    ],
    "quiz": {
      "question": "Which loop modifies original Relay records?",
      "options": [
        "for(auto& relay : relays)",
        "for(auto relay : relays) with value records",
        "for(const auto& relay : relays) while assigning",
        "Arrays cannot hold structs"
      ],
      "correct": 0,
      "explanation": "A mutable reference aliases the element; plain auto copies a normal value record."
    },
    "recall": "Explain capacity, active count, and objective count. Must they match?",
    "transfer": "What invariant appears if state and sprite arrays are stored separately?",
    "commit": "refactor: drive relays from bounded level data",
    "sources": [
      "cpp",
      "vector"
    ]
  },
  {
    "id": 14,
    "world": 4,
    "title": "Make the floor solid",
    "subtitle": "Your art draws the world; a grid enforces its rules.",
    "minutes": 35,
    "tags": [
      "Tiles",
      "Collision",
      "Coordinates"
    ],
    "goal": "Align a collision grid with your original room background.",
    "concept": "Your tile map answers what is visible. A collision map answers where movement is legal. Keep them distinct while documenting the conversion that aligns them. Use the 256×256 room you created in the art workshop, centered at (0,0), and a 16×16 grid of 16-pixel gameplay cells. Its upper-left corner is (-128,-128), so add 128 to convert world coordinates into map-local coordinates. Bounds must be checked before indexing. C++ integer division truncates toward zero, so negative coordinates deserve deliberate handling rather than accidental assumptions. Test all cells covered by a candidate player hitbox, not only its center. An eight-pixel body can overlap a wall while its center is still in an empty cell. Choose a consistent right/bottom edge policy with your AABB convention. Keep the map static until visible walls, grid values, and hitbox boundaries agree. A temporary debug grid is a useful visual proof that the drawing and simulation share an origin.",
    "analogy": "A floor plan tells the artist what to draw; its solid-cell overlay tells security where walking is permitted.",
    "steps": [
      "Create the original room background once using its generated item, keeping its handle before the loop.",
      "Encode a 16×16 grid where 0 is floor and 1 is wall, matching the room’s actual wall cells.",
      "Use the helper below with full-precision bn::fixed coordinates. Check candidate hitbox coverage and fractional bounds before accepting movement. Use a documented half-open edge policy for the right/bottom extent so merely touching a wall remains legal.",
      "Test wall gaps, corners, the map edge, and a point just outside it. Remove the old placeholder obstacle only after the grid works."
    ],
    "code": "#include \"bn_fixed.h\"\nconstexpr int map_cells = 16;\ninline bool solid_at(bn::fixed world_x, bn::fixed world_y,\n                     const unsigned char (&walls)[map_cells][map_cells])\n{\n    const bn::fixed x = world_x + 128;\n    const bn::fixed y = world_y + 128;\n    if(x < 0 || y < 0 || x >= 256 || y >= 256) return true;\n    // Bounds were checked at full precision. Values are now nonnegative,\n    // so integer() truncation is the same as floor for cell lookup.\n    return walls[y.integer() / 16][x.integer() / 16] != 0;\n}\n// In main.cpp include bn_regular_bg_ptr.h and bn_regular_bg_items_room.h.\n// After init, before loop:\n// auto room = bn::regular_bg_items::room.create_bg(0, 0);",
    "codeLanguage": "cpp",
    "filename": "src/level.h — world-to-grid conversion",
    "challenge": "Move one wall in art and collision data. Then test world x=-128.5: it must be blocked rather than truncated into the map. Design a quick way to detect art/grid disagreement.",
    "hints": [
      "Place a debug marker in a known solid cell.",
      "Keep origin and cell size in one documented place.",
      "Overlay solid-cell markers or export art and collision from one level source later."
    ],
    "checks": [
      "Visible walls match solid cells.",
      "Hitbox edges respect walls and gaps.",
      "Out-of-bounds positions cannot index invalid memory."
    ],
    "quiz": {
      "question": "Why check bounds before indexing?",
      "options": [
        "The camera repairs bad indices",
        "Outside coordinates must not access outside the array",
        "C++ arrays clamp automatically",
        "Negative division always rounds down"
      ],
      "correct": 1,
      "explanation": "Bounds protect both memory and game rules. Negative integer division has its own truncation behavior."
    },
    "recall": "Convert world (-120,-104) to a cell and explain every offset.",
    "transfer": "Why can center-only collision let the player’s body enter a wall?",
    "commit": "feat: align station art and collision grid",
    "sources": [
      "bg",
      "fixed",
      "cpp"
    ]
  },
  {
    "id": 15,
    "world": 4,
    "title": "The camera is a window",
    "subtitle": "Keep the world steady while the view moves.",
    "minutes": 30,
    "tags": [
      "Camera",
      "Coordinates",
      "GBA"
    ],
    "goal": "Use one shared camera while keeping collision in world space.",
    "concept": "A camera changes what the player sees without moving objects in the simulation. In the centered convention used here, an attached object’s visible position is its world position minus the camera position. If the astronaut is at x=80 and the camera at x=50, the visible x is 30 relative to screen center. Attach the room, astronaut, relays, exit, and enemies to one shared camera. Leave the HUD unattached so it stays in screen space. Subtracting camera position from collision state would make rules change when you look around: that is a coordinate-space bug. Start with direct following and then clamp the view within map bounds. For a 256×256 room and a 240×160 display, the centered camera ranges are ±8 horizontally and ±48 vertically. The narrow horizontal range is a useful geometry check. Smooth following is optional polish; consistent coordinate spaces are essential. Always position the camera from the accepted player position after collision resolution.",
    "analogy": "Sliding a window across a paper map changes the view, not the roads.",
    "steps": [
      "Create one camera before the loop and attach all world objects to it.",
      "Update it from the accepted player position; leave collision positions unchanged.",
      "Clamp x to [-8,8] and y to [-48,48] for your 256×256 room.",
      "Test a wall and relay near the view edge. Add an unattached screen-space marker to prove the distinction."
    ],
    "code": "#include \"bn_camera_ptr.h\"\n#include \"bn_fixed.h\"\nbn::fixed clamp_axis(bn::fixed value, int low, int high)\n{\n    if(value < low) return low;\n    if(value > high) return high;\n    return value;\n}\n// Before loop:\n// auto camera = bn::camera_ptr::create(0, 0);\n// player.set_camera(camera); room.set_camera(camera);\n// Attach all relay/exit/enemy sprites too.\n// After movement:\n// camera.set_position(clamp_axis(player.x(), -8, 8),\n//                     clamp_axis(player.y(), -48, 48));",
    "codeLanguage": "cpp",
    "filename": "src/main.cpp — shared camera",
    "challenge": "Derive the clamp ranges for a 512×256 map and explain the special case of a map smaller than the display.",
    "hints": [
      "Keep the view center half a display away from each map edge.",
      "For centered coordinates, use half the map-minus-display size.",
      "A 512×256 room gives ±136 and ±48; center a smaller map instead of creating an inverted range."
    ],
    "checks": [
      "World objects move together in the view.",
      "Collision and pickups stay correct during camera movement.",
      "The view stays inside the room and screen-space UI remains fixed."
    ],
    "quiz": {
      "question": "World x=80 and camera x=50 gives visible x…",
      "options": [
        "50",
        "80",
        "30",
        "130"
      ],
      "correct": 2,
      "explanation": "World-to-view translation subtracts camera position."
    },
    "recall": "Name the spaces used by player position, grid cell, and HUD label.",
    "transfer": "Diagnose an enemy whose collision seems to follow the screen instead of the world.",
    "commit": "feat: add shared camera and bounded follow",
    "sources": [
      "camera",
      "bg",
      "sprites"
    ]
  },
  {
    "id": 16,
    "world": 4,
    "title": "A sentinel with intentions",
    "subtitle": "Readable enemy behavior through states.",
    "minutes": 35,
    "tags": [
      "AI",
      "State machine",
      "Collision"
    ],
    "goal": "Add one patrolling sentinel that detects the player and respects walls.",
    "concept": "A first enemy needs understandable rules more than complex intelligence. Define Patrol, Chase, and Stunned modes, each with an action and exit conditions. A patrol reverses at endpoints or walls; chase chooses a direction toward the player; stun counts down without moving. Detection must use world coordinates. Manhattan distance is cheap and produces a diamond-shaped range. Squared Euclidean distance produces a circular range without a square root, but multiplication still requires numeric-range care. Neither rule automatically sees walls, so do not call distance detection line of sight. Keep the sentinel slower than the astronaut and reuse candidate-position collision checks. Give contact damage a cooldown; otherwise one overlap can remove all health over consecutive frames. Separate enter and leave detection ranges to prevent rapid switching near a threshold. Telegraph danger through your original enemy silhouette and motion. Fairness, update order, and readable feedback are now design decisions as well as programming decisions.",
    "analogy": "The sentinel follows a small card: current mode, action, and reason to switch cards.",
    "steps": [
      "Draw Patrol → Chase at close range, Chase → Patrol at farther range, and a temporary test action that stuns.",
      "Use the original enemy silhouette you created. Store persistent position, mode, patrol direction, and timer.",
      "Implement patrol first, then chase, applying the same wall policy as player movement.",
      "Add one contact hit with a 60-frame invulnerability cooldown. Test sustained contact, fleeing, and pause."
    ],
    "code": "enum class EnemyMode { patrol, chase, stunned };\nstruct Sentinel\n{\n    EnemyMode mode = EnemyMode::patrol;\n    int stun_frames = 0;\n};\nvoid update_intent(Sentinel& enemy, int distance)\n{\n    if(enemy.mode == EnemyMode::stunned)\n    {\n        if(enemy.stun_frames > 0) --enemy.stun_frames;\n        if(enemy.stun_frames == 0) enemy.mode = EnemyMode::patrol;\n        return;\n    }\n    if(enemy.mode == EnemyMode::patrol && distance < 48)\n        enemy.mode = EnemyMode::chase;\n    else if(enemy.mode == EnemyMode::chase && distance > 64)\n        enemy.mode = EnemyMode::patrol;\n}",
    "codeLanguage": "cpp",
    "filename": "src/sentinel.h — mode decisions",
    "challenge": "Explain why different enter/leave thresholds reduce jitter and design a patrol the player can learn.",
    "hints": [
      "Imagine hovering around one detection threshold.",
      "Small changes can otherwise flip the state every frame.",
      "The gap retains the current state; this is hysteresis."
    ],
    "checks": [
      "Patrol and chase are visibly distinct.",
      "The sentinel respects walls and pause.",
      "Continuous contact cannot drain all health immediately."
    ],
    "quiz": {
      "question": "Does distance-based detection account for occluding walls?",
      "options": [
        "Yes, for integers",
        "Yes, with a shared camera",
        "Only with a clean Git tree",
        "No; visibility needs a separate rule"
      ],
      "correct": 3,
      "explanation": "Distance knows positions, not obstacles between them."
    },
    "recall": "Draw the enemy diagram and identify persistent transition data.",
    "transfer": "Design a Warning state before Chase and explain its timer.",
    "commit": "feat: add sentinel patrol chase and fair damage",
    "sources": [
      "cpp",
      "fixed",
      "input"
    ]
  },
  {
    "id": 17,
    "world": 5,
    "title": "Make every action answer",
    "subtitle": "Animation and feedback that explain the rules.",
    "minutes": 25,
    "tags": [
      "Animation",
      "Feedback",
      "Game feel"
    ],
    "goal": "Communicate pickups, damage, and exit readiness with visible feedback.",
    "concept": "Feedback closes the loop between an action and the player’s understanding. A disappearing relay confirms collection; an exit marker confirms completion; a blinking astronaut communicates a damage cooldown. Essential information should use more than color so it remains readable in grayscale and for players with color-vision differences. Your original walk cycle already communicates movement. Add a small pulse or visibility pattern without blocking the frame loop. Timers must persist between frames; a local counter recreated inside the loop never progresses. Presentation should reflect actual state. Derive damage blinking from the real invulnerability timer rather than a second flag that can disagree with it. When the timer expires, explicitly restore visibility, or the last phase can leave the astronaut hidden. A sleep call is not a good way to create a flash: it can stall input and simulation. Many tiny frame-based updates can coexist because each performs a little work and then yields to the engine boundary.",
    "analogy": "An instrument should answer every press with a clear note; silence should also have a meaning.",
    "steps": [
      "Keep walk/facing feedback tied to movement intent and mode.",
      "Add the helper below after updating the damage timer. Verify that cooldown expiry restores visibility.",
      "Give the unlocked exit a shape or motion cue beyond color, derived from collected count.",
      "Play with audio muted and inspect grayscale readability. Fix a confusing pickup, damage, or exit signal."
    ],
    "code": "#include \"bn_sprite_ptr.h\"\nvoid show_damage_feedback(bn::sprite_ptr& player, int frames)\n{\n    const bool normal = frames <= 0;\n    const bool blink_on = ((frames / 4) % 2) == 0;\n    player.set_visible(normal || blink_on);\n}\n// Call once per presentation update using the real cooldown.\n// Do not use a blocking delay to time the flash.",
    "codeLanguage": "cpp",
    "filename": "src/feedback.cpp — presentation helper",
    "challenge": "Add a pickup pulse with a persistent timer and explain exactly what starts and clears it.",
    "hints": [
      "A pulse has a start event and a remaining duration.",
      "Start it only after a successful collection transition.",
      "Decrement once per playing frame and derive the visual cue from remaining time."
    ],
    "checks": [
      "Damage blinking ends with a visible astronaut.",
      "Exit readiness has a clear non-color cue.",
      "Essential events remain understandable with audio muted."
    ],
    "quiz": {
      "question": "What should determine invulnerability blinking?",
      "options": [
        "The actual remaining invulnerability timer",
        "An unrelated random flag",
        "A blocking delay",
        "The emulator window size"
      ],
      "correct": 0,
      "explanation": "Deriving feedback from real state prevents contradictory signals."
    },
    "recall": "Name three event → feedback pairs and the true state behind them.",
    "transfer": "How could you add a damage pose without changing the collision box?",
    "commit": "feat: add readable pickup damage and exit feedback",
    "sources": [
      "sprites",
      "examples"
    ]
  },
  {
    "id": 18,
    "world": 5,
    "title": "The HUD tells the truth",
    "subtitle": "Useful text with an explicit resource budget.",
    "minutes": 35,
    "tags": [
      "UI",
      "Text",
      "Ownership"
    ],
    "goal": "Display relay count and health without rebuilding unchanged text every frame.",
    "concept": "The HUD reports facts that help a decision: remaining relays, health, and current controls. Butano’s text generator creates sprite handles, so retain its output in a scene-owned bounded container. Regenerate a label when its value changes, rather than recreating it every frame. That avoids repeated work and makes maximum capacity deliberate. Keep UI in screen space without the world camera. Fonts from Butano’s common example folder are explicit dependencies, not built-in engine headers. Add the needed common include and graphics paths from your installed checkout, or copy the font header and referenced asset into your project with its license. Inspect the header’s generated include to identify the asset it expects. This is a dependency lesson, not a reason to configure an entirely new editor. Start with a short label and enough sprite capacity, then test the longest real label. Health and count should come from the game model; cached displayed values exist only to avoid unnecessary rendering work.",
    "analogy": "The dashboard reports the machinery’s real state and stays fixed while the world moves outside.",
    "steps": [
      "Inspect common_variable_8x16_sprite_font.h in your installed Butano common folder. Add its include/asset paths, or copy the header, referenced graphics/JSON, and credits deliberately.",
      "After that dependency builds, create the generator and retained output shown below after init.",
      "Construct a short count label with bn::string and bn::to_string as needed, including bn_string.h. Regenerate only when the model value changes.",
      "Add health and a short pause instruction. Test the longest label, capacity, and camera movement."
    ],
    "code": "#include \"bn_sprite_text_generator.h\"\n#include \"bn_sprite_ptr.h\"\n#include \"bn_vector.h\"\n#include \"common_variable_8x16_sprite_font.h\"\n// After init, before loop:\n// bn::sprite_text_generator text_generator(common::variable_8x16_sprite_font);\n// bn::vector<bn::sprite_ptr, 32> hud_sprites;\n// text_generator.generate(-112, -68, \"RELAYS 0/3\", hud_sprites);\n// When the count changes:\n// hud_sprites.clear();\n// text_generator.generate(-112, -68, \"RELAYS 1/3\", hud_sprites);\n// Retain this container and leave its sprites unattached to the world camera.",
    "codeLanguage": "cpp",
    "filename": "src/main.cpp — retained HUD output",
    "challenge": "Implement a HUD refresh that does nothing when the displayed count already equals the model count.",
    "hints": [
      "The model remains the source of truth.",
      "Cache only what was displayed.",
      "Compare counts before clearing and regenerating the label."
    ],
    "checks": [
      "Labels reflect real game facts.",
      "HUD stays fixed during camera movement.",
      "Unchanged text is retained and maximum text fits capacity."
    ],
    "quiz": {
      "question": "Why retain the text output container?",
      "options": [
        "Every C++ function requires a vector",
        "Its handles keep visible text sprites alive",
        "Text is automatically stored in SRAM",
        "The font creates a new OS window"
      ],
      "correct": 1,
      "explanation": "Generated text sprites obey the same ownership rules as the astronaut."
    },
    "recall": "Explain the font’s header/asset/credit dependencies.",
    "transfer": "How would a longer translated instruction affect layout and resource capacity?",
    "commit": "feat: add retained screen-space HUD",
    "sources": [
      "text",
      "common",
      "vector",
      "faq"
    ]
  },
  {
    "id": 19,
    "world": 5,
    "title": "Hear the signal",
    "subtitle": "Trigger sound on events, not conditions.",
    "minutes": 30,
    "tags": [
      "Audio",
      "Events",
      "Assets"
    ],
    "goal": "Create an original short sound and play it once per successful pickup.",
    "concept": "Audio is another view of game state. Playing a sound whenever overlap is true retriggers it while the astronaut stays on a relay. Use the successful available-to-collected transition instead. One event can update score, hide art, start a pulse, refresh the HUD, and play sound. Keep those outputs coordinated. Make a short original mono PCM WAV named relay.wav in the project’s configured audio folder. A sound editor can synthesize a quiet chirp or record your own source; avoid an external asset dependency until the pipeline is understood. Butano generates a sound item from the WAV through its build conversion. Check the installed import guide and audio settings if conversion fails. Keep the effect brief and volume comfortable, and preserve visual cues for muted play. Audio also consumes CPU time and memory, so test it alongside enemies and HUD updates. Pause and restart must have explicit audio policies. An emulator save state is not a substitute for testing a fresh boot.",
    "analogy": "A pickup event pulls the bell once. Standing beside the bell is not another reason to ring it.",
    "steps": [
      "In a sound editor, create an original 0.1–0.2 second mono PCM chirp with a short fade-out. Export audio/relay.wav and preserve the editable source under art/ or audio-source/.",
      "Confirm Makefile AUDIO includes its folder. Build and inspect the generated bn_sound_items.h.",
      "Call the sound only when try_collect returns true, as shown below. Keep model and presentation work clearly named.",
      "Test one pickup, sustained overlap, damage cooldown, pause, restart, and muted play."
    ],
    "code": "#include \"bn_sound_items.h\"\n// Prerequisites: your audio/relay.wav was converted successfully,\n// and your existing try_collect helper returns true exactly once.\n// In the collection branch:\n// if(try_collect(relay, touching))\n// {\n//     ++collected_count;\n//     relay_sprite.set_visible(false);\n//     bn::sound_items::relay.play();\n//     // Start pickup pulse and refresh the changed HUD here.\n// }",
    "codeLanguage": "cpp",
    "filename": "src/main.cpp — successful pickup branch",
    "challenge": "List every pickup output, then put the presentation outputs behind one clearly named event handler.",
    "hints": [
      "Count, sprite visibility, pulse, text, and sound share one cause.",
      "Do not add a second collision check only for audio.",
      "Use the boolean result of the existing collection transition."
    ],
    "checks": [
      "Your original sound imports and plays.",
      "One pickup causes one playback.",
      "Muted play remains readable."
    ],
    "quiz": {
      "question": "When should the pickup sound play?",
      "options": [
        "Every core update",
        "Only during Git commits",
        "When an available relay becomes collected",
        "Every overlapping frame"
      ],
      "correct": 2,
      "explanation": "A state-transition event occurs once; overlap is a persistent condition."
    },
    "recall": "Trace sound source → WAV → generated item → event → playback → host output.",
    "transfer": "Define feedback priority if pickup and damage happen in one frame.",
    "commit": "feat: add original event-driven pickup audio",
    "sources": [
      "sound",
      "import"
    ]
  },
  {
    "id": 20,
    "world": 5,
    "title": "Beginning, ending, again",
    "subtitle": "Own the whole run from title to restart.",
    "minutes": 35,
    "tags": [
      "Scenes",
      "C++",
      "Checkpoint"
    ],
    "goal": "Add title, loss, victory, and a clean repeatable restart.",
    "concept": "A complete run needs a beginning and a repeatable ending. Extend the state diagram to Title, Playing, Paused, Won, and Lost. Define legal inputs and timer behavior for each. Restrict pause transitions to Playing and Paused so Start cannot accidentally resume a finished game. Restart must reset every run-owned fact: health, positions, relays, sentinel modes, timers, camera, and HUD. Resetting only score leaves hidden history in the next run. A scene function or class can own sprite handles and bounded containers through ordinary C++ lifetime. Leaving that scope releases its resources when no other owners retain them. Construct hardware-backed handles only after core initialization. Distinguish profile facts such as best score from per-run facts such as current health. Before elaborate transitions, prove twenty consecutive restarts. Repetition exposes stale flags and resource lifetime mistakes. The right scene structure is one whose ownership and transitions you can explain without tracing unrelated globals.",
    "analogy": "Restarting a board game means returning every piece, not only erasing the score.",
    "steps": [
      "Draw the full diagram and annotate Start/A/B. Specify legal transitions from won and lost.",
      "Group per-run simulation facts in RunState and construct a fresh value on restart.",
      "Synchronize sprite visibility/positions, enemies, camera, timers, and HUD from the fresh model. Keep profile data separate.",
      "Run twenty title → play → win/loss → restart cycles and repair the first inconsistent state."
    ],
    "code": "enum class Screen { title, playing, paused, won, lost };\nstruct RunState\n{\n    int health = 3;\n    int collected = 0;\n    int invulnerable_frames = 0;\n    bool relay_collected[3] = {false, false, false};\n};\ninline RunState make_run() { return RunState{}; }\n// On intentional restart: run = make_run();\n// Synchronize positions, sprites, enemies, camera, and HUD too.\n// For four relays, adjust this record from your actual level data.",
    "codeLanguage": "cpp",
    "filename": "src/run_state.h — fresh model",
    "challenge": "Deliberately omit one reset field, predict the second-run failure, then repair the reset design.",
    "hints": [
      "Collected flags and damage timers are common leftovers.",
      "A constructor or factory centralizes initialization.",
      "Restore presentation from fresh facts rather than a separate incomplete checklist."
    ],
    "checks": [
      "Title states objective and controls.",
      "Win/loss stop the correct simulation and offer deliberate restart.",
      "Twenty cycles preserve correct run state and resource behavior."
    ],
    "quiz": {
      "question": "Which is per-run data?",
      "options": [
        "The source release tag",
        "The font license",
        "Your build command",
        "Current invulnerability timer"
      ],
      "correct": 3,
      "explanation": "The timer changes during a run and should reset for the next one."
    },
    "recall": "List what resets and what should survive a new round.",
    "transfer": "How can scene scope and RAII simplify returning to the title?",
    "commit": "feat: complete title end states and clean restart",
    "sources": [
      "cpp",
      "sprites",
      "faq"
    ]
  },
  {
    "id": 21,
    "world": 6,
    "title": "Ask the machine why",
    "subtitle": "mGBA + GNU GDB, one hypothesis at a time.",
    "minutes": 35,
    "tags": [
      "GDB",
      "mGBA",
      "Debugging"
    ],
    "goal": "Break in your ARM game, inspect values, and prove one bug’s cause.",
    "concept": "Debugging is an experiment: state a hypothesis, choose evidence that could disprove it, observe, and revise. mGBA emulates the ARM target and can expose a GDB remote stub. GDB needs the matching unstripped ELF from the exact ROM build. Use an ARM-capable GNU debugger, such as your toolchain debugger or gdb-multiarch; host-only GDB may not understand the target. Current mGBA source documents -g/--gdb, default port 2345, when that feature is compiled in. Verify your installed binary’s help. The simplest WSL arrangement runs Linux mGBA and the debugger in the same WSL instance. Windows mGBA is another host: NAT versus mirrored networking changes the address, so localhost is not universal. Connect with target remote and resume with continue, not run. Optimized code can hide variables or make source stepping surprising. The current Butano template supports USERFLAGS := -Og or -O0; retain its other architecture flags and rebuild cleanly when changing configuration.",
    "analogy": "A breakpoint pauses your theory exactly where a fact should change.",
    "steps": [
      "On a temporary branch, reproduce a small bug and write a predicted cause and expected observed values. Use a repeating function such as try_collect so it will execute after connection.",
      "Inspect your installed Makefile. For current Butano, set USERFLAGS := -Og in the project configuration and do a clean rebuild; keep the inherited debug/architecture settings. Record the exact ROM and ELF paths.",
      "Start a GDB-enabled mGBA with -g and that ROM, then start an ARM-capable GNU GDB with the matching ELF. For Windows mGBA, start its GDB server and use the reachable Windows-host address for your WSL network mode.",
      "Enter the commented GDB commands below interactively, replacing function/variable names with your code. Observe before changing the implementation."
    ],
    "code": "# Terminal 1; substitute your installed binary and exact ROM:\n# mgba -g ./actual-output.gba\n# Terminal 2; choose your installed ARM-capable debugger:\n# arm-none-eabi-gdb ./actual-output.elf\n# or: gdb-multiarch ./actual-output.elf\n\n# INSIDE GDB, not Bash:\n# target remote localhost:2345\n# break try_collect\n# continue\n# print relay.collected\n# print touching\n# next\n# backtrace\n# continue\n# detach\n# quit",
    "codeLanguage": "bash",
    "filename": "Two terminals + interactive GNU GDB",
    "challenge": "Use a conditional breakpoint or supported watchpoint to isolate a wrong transition. Explain what observation could disprove your hypothesis.",
    "hints": [
      "First prove that your breakpoint hits.",
      "Wrong symbols and stale ROMs make evidence misleading.",
      "Use info breakpoints, info locals, and help break. Avoid assuming remote run or monitor reset exists; reset through the emulator if necessary."
    ],
    "checks": [
      "GDB connects with matching symbols.",
      "A breakpoint hits in your game.",
      "Devlog records hypothesis, values, and verified fix."
    ],
    "quiz": {
      "question": "After target remote, what resumes the loaded ROM?",
      "options": [
        "continue",
        "run as native Linux code",
        "make inside the cartridge",
        "git push"
      ],
      "correct": 0,
      "explanation": "Ordinary remote mode resumes an already-loaded target with continue; run is not supported there."
    },
    "recall": "Draw ROM ↔ mGBA stub ↔ TCP ↔ ARM GDB ↔ matching ELF.",
    "transfer": "Why can an optimized source breakpoint move or show a variable as unavailable?",
    "commit": "fix: verify and repair a reproduced bug with GDB",
    "sources": [
      "mgba",
      "gdb",
      "breaks",
      "debugflags",
      "network"
    ]
  },
  {
    "id": 22,
    "world": 6,
    "title": "Spend the frame wisely",
    "subtitle": "Measure first, then change the bottleneck.",
    "minutes": 30,
    "tags": [
      "Performance",
      "Memory",
      "GBA"
    ],
    "goal": "Measure a demanding scene and remove one demonstrated repeated cost.",
    "concept": "Constraints make performance a budget you can reason about. The GBA has limited CPU time, RAM, sprites, and transfer windows. A smooth average is insufficient if the busiest frame misses its deadline. Sample Butano’s frame measurements during a demanding scene with enemies, damage feedback, pickups, and text changes together. Treat measurements as evidence, not a contest to lower a number without purpose. Choose bounded storage and avoid recreating persistent resources every frame. A fixed-capacity container does not make contained sprite or palette resources free, and hiding a sprite retains its ownership. Release scene-owned handles when their lifetime ends. Runtime heap allocation can fragment limited memory; prefer predictable capacities for this project while learning what each resource costs. Record scene and build configuration for a fair before/after comparison. Make one change addressing an observed cost and rerun the same route. Emulator success supports that tested scenario, while real hardware validation remains a separate piece of evidence.",
    "analogy": "Measure which device drains a small battery before replacing random wires.",
    "steps": [
      "Define a repeatable stress route with the maximum intended enemies and simultaneous feedback.",
      "Inspect last_cpu_usage and last_missed_frames through GDB or a debug HUD. Use a retained peak record as below.",
      "Remove one demonstrated cost, such as rebuilding unchanged text or throwaway visual handles.",
      "Compare the same scene and build conditions. Record peak CPU fraction, missed frames, and whether the change helped."
    ],
    "code": "#include \"bn_core.h\"\n#include \"bn_fixed.h\"\nstruct FrameBudget\n{\n    bn::fixed peak_cpu = 0;\n    int missed = 0;\n};\ninline void sample_last_frame(FrameBudget& budget)\n{\n    const bn::fixed used = bn::core::last_cpu_usage();\n    if(used > budget.peak_cpu) budget.peak_cpu = used;\n    budget.missed += bn::core::last_missed_frames();\n}\n// Sample once per loop. A value around 0.5 means half the CPU budget.\n// Measurements describe the previous engine update.",
    "codeLanguage": "cpp",
    "filename": "src/frame_budget.h — debug measurement",
    "challenge": "Predict the difference between hiding many sprites and releasing their last handles, then verify the relevant resource behavior.",
    "hints": [
      "Visibility and lifetime are different.",
      "Several handles can own the same resource.",
      "Inspect retained containers and copied handles during scene teardown."
    ],
    "checks": [
      "A demanding scenario has recorded measurements.",
      "One change targets an observed cost.",
      "The intended scene has no observed missed frames in the tested scenario."
    ],
    "quiz": {
      "question": "What should you do first for a slow scene?",
      "options": [
        "Assume the emulator is broken",
        "Measure a repeatable demanding case",
        "Rewrite everything in assembly",
        "Remove const"
      ],
      "correct": 1,
      "explanation": "A repeatable baseline identifies useful changes and verifies their effect."
    },
    "recall": "Explain frame CPU fraction, missed frames, and distinct storage/resource limits.",
    "transfer": "Design a graceful response if an optional visual effect cannot obtain a resource.",
    "commit": "perf: measure and reduce repeated frame work",
    "sources": [
      "core",
      "vector",
      "faq",
      "sprites"
    ]
  },
  {
    "id": 23,
    "world": 6,
    "title": "A memory that survives",
    "subtitle": "Save small facts; validate every byte.",
    "minutes": 35,
    "tags": [
      "SRAM",
      "Serialization",
      "Reliability"
    ],
    "goal": "Persist a versioned best score with safe fallback for invalid data.",
    "concept": "A save stores selected facts across restarts, so loading is input validation. Never persist live sprite handles, pointers, or an entire running scene. Define a small byte record with a magic signature, format version, bounded score, and check value. The example uses only bytes so compiler padding and endianness do not define the layout. Its XOR detects some errors but is not cryptographic integrity and cannot detect every corruption. Establish safe defaults and accept a record only if all checks pass. Butano can read and write trivially copyable values; that property does not make their contents valid. Save at an event such as a newly completed best run, not every frame. Define what “best” means for your game and keep the first format’s range explicit. Test an actual emulator close and reopen without loading a save state; save states are a different mechanism. Emulator persistence and physical flash-cart behavior can differ, so report the environment you actually tested.",
    "analogy": "A save is a postcard to a future program: include its format and enough checks to interpret it safely.",
    "steps": [
      "Define a six-byte format and write validation before writing saves. Default the best score to zero.",
      "Read with bn::sram::read and check every field. Choose a score meaningful to your design; this example supports 0–99.",
      "Encode and write once on a new best result, keeping live handles outside the record.",
      "Test first boot, normal restart, invalid version, and corrupted check byte. Back up valuable saves before deliberate corruption."
    ],
    "code": "#include <cstdint>\n#include \"bn_sram.h\"\nstruct SaveBytes { uint8_t b[6]; };\nint load_best()\n{\n    SaveBytes data{};\n    bn::sram::read(data);\n    const auto& b = data.b;\n    const uint8_t check = uint8_t(b[0]^b[1]^b[2]^b[3]^b[4]);\n    if(b[0]!='S' || b[1]!='L' || b[2]!=1 || b[3]>99 ||\n       b[4]!=0 || b[5]!=check) return 0;\n    return b[3];\n}\nvoid save_best(uint8_t best)\n{\n    if(best > 99) return;\n    SaveBytes data{{'S','L',1,best,0,0}};\n    for(int i=0; i<5; ++i) data.b[5] ^= data.b[i];\n    bn::sram::write(data);\n}",
    "codeLanguage": "cpp",
    "filename": "src/save.cpp — explicit byte format",
    "challenge": "Design version 2 with a 16-bit score and a deliberate decoder for old version 1 records.",
    "hints": [
      "Assign a meaning to each byte.",
      "Choose byte order explicitly.",
      "Store low/high bytes, widen before combining, and select the decoder from the version."
    ],
    "checks": [
      "Fresh or invalid SRAM loads safe defaults.",
      "A best result survives a true tested restart.",
      "The format contains no live pointers or resource handles."
    ],
    "quiz": {
      "question": "Why not save a sprite_ptr directly?",
      "options": [
        "It stores all art automatically",
        "SRAM only holds text",
        "It is live ownership, not a portable saved fact",
        "Its name is too long"
      ],
      "correct": 2,
      "explanation": "Save meaningful facts and reconstruct runtime resources after loading."
    },
    "recall": "Explain every byte and which failures the checks detect or miss.",
    "transfer": "Why does a checksum not guarantee an atomic write during power loss?",
    "commit": "feat: add validated versioned best-score save",
    "sources": [
      "save",
      "faq",
      "cpp"
    ]
  },
  {
    "id": 24,
    "world": 6,
    "title": "Prove the station holds",
    "subtitle": "Boss checkpoint · refactor, debug, retest.",
    "minutes": 35,
    "tags": [
      "Checkpoint",
      "Testing",
      "Architecture"
    ],
    "goal": "Clarify one code boundary and verify behavior with a focused regression matrix.",
    "concept": "Confidence comes from repeatable evidence. A regression matrix pairs a behavior with a procedure and expected result. Include ordinary play and boundaries: final pickup while touching the exit, damage near a pause transition, camera-edge collision, repeated restart, and invalid save data. Small pure rules can be tested on a host if their dependencies are portable, but integration still requires an emulator. A manual check can be meaningful when it specifies exact state and input. Refactoring changes structure while preserving intended behavior. Choose one boundary, such as simulation versus sprite synchronization, and run the same scenarios before and after. Do not combine a large rewrite with several new mechanics and then treat every failure as mysterious. Assertions can document invariants you truly depend on. Remove temporary experiments from the release path, and document hardware assumptions. This checkpoint measures your ability to explain and verify a running game, not only to produce a compiling binary. Use new evidence to decide whether additional tests are needed.",
    "analogy": "Inspect a station along the same route each time so a changed reading is meaningful.",
    "steps": [
      "Write TESTING.md with at least eight procedures and expected results, covering a normal win/loss plus key transition boundaries. Run it before editing.",
      "Separate one tangled rule from presentation while retaining clear ownership.",
      "Exercise one real pure helper with exact edge-case inputs, using a small host test if portable or an in-project debug check. Do not duplicate the implementation in the test.",
      "Rebuild and rerun the matrix. Use GDB for discrepancies and record observed results and limits."
    ],
    "code": "# Regression entry template for TESTING.md:\n# Scenario: final relay while touching exit\n# Initial state: two collected; last relay and exit can both overlap\n# Input: move into overlap for one simulation frame\n# Expected: one pickup, count becomes three, then one win transition\n# Observed: __________________________________\n# Build/ROM identity: _________________________\n# Add separate entries for pause, damage, restart, map edges, save.",
    "codeLanguage": "bash",
    "filename": "TESTING.md — concrete repeatable evidence",
    "challenge": "Identify a bug your matrix would miss and add the smallest scenario that catches it.",
    "hints": [
      "Consider two transitions in the same frame.",
      "Specify initial facts, input, and expected state.",
      "Try restart during a damage blink or the third restart after a win."
    ],
    "checks": [
      "The matrix has actual observed outcomes.",
      "One refactor preserves tested behavior.",
      "A boundary rule is backed by repeatable evidence."
    ],
    "quiz": {
      "question": "What makes a change a refactor?",
      "options": [
        "Every file becomes shorter",
        "The objective always changes",
        "Testing becomes unnecessary",
        "Structure changes while intended behavior is preserved"
      ],
      "correct": 3,
      "explanation": "A structural change can be evaluated against the same behavioral expectations."
    },
    "recall": "Explain the assumptions across your simulation/presentation boundary.",
    "transfer": "Design a reproducible test for a failure seen only after the third restart.",
    "commit": "refactor: clarify boundaries and record regression evidence",
    "sources": [
      "cpp",
      "breaks",
      "examples"
    ]
  },
  {
    "id": 25,
    "world": 7,
    "title": "Put the project on the map",
    "subtitle": "GitHub is a working notebook, not a trophy shelf.",
    "minutes": 30,
    "tags": [
      "Git",
      "GitHub",
      "Documentation"
    ],
    "goal": "Create a reviewable feature branch and prepare a reproducible source repository.",
    "concept": "Git stores local history; GitHub hosts a remote copy and collaboration tools. A branch names a line of work, preserving a known playable version while an experiment develops. Inspect both the working diff and staged diff: the index is the snapshot the next commit records. Include source assets and build configuration while normally ignoring generated objects, build folders, local emulator saves, and credentials. A README should explain the game, build/run commands, controls, toolchain, and exact Butano revision. A clean clone tests whether those instructions are sufficient. If Butano is an external checkout, document revision and path configuration instead of assuming another machine has your home directory. Creating a remote is a deliberate publication step: choose visibility and authentication, then push the intended branch. Draft and inspect files locally first. A small explainable commit is more useful than a large unreviewed collection of experiments. Git can support confidence and curiosity while keeping the project’s working state recoverable.",
    "analogy": "Git is the local lab notebook; GitHub is the shelf where a chosen notebook becomes accessible.",
    "steps": [
      "Review status/diff and branch from a known playable commit, respecting your existing branch names.",
      "Write README with objective, controls, toolchain, exact Butano revision, dependency path setup, build/run steps, and tested platform. Include a screenshot you made.",
      "Review .gitignore and the staged diff. Keep source art and licenses, exclude generated files and local saves.",
      "When ready, create your own GitHub repository with chosen visibility and follow the linked existing-code guide to set origin and push the intended branch."
    ],
    "code": "git status --short\ngit switch -c feature/readme\nnvim README.md\ngit diff -- README.md .gitignore\ngit add README.md .gitignore\ngit diff --cached\ngit commit -m \"docs: explain build and controls\"\ngit remote -v\n# After creating your own repository:\n# git remote add origin <your selected repository URL>\n# git push -u origin feature/readme",
    "codeLanguage": "bash",
    "filename": "Project terminal — review before push",
    "challenge": "Read the README as someone who knows none of your home-directory paths. Remove one hidden assumption.",
    "hints": [
      "Look for absolute paths and unnamed output files.",
      "Name toolchain and engine revision, not only “dependencies.”",
      "Clone separately and use only the written instructions."
    ],
    "checks": [
      "The staged commit contains intended material.",
      "README makes dependencies and controls explicit.",
      "A selected branch is ready for remote review."
    ],
    "quiz": {
      "question": "What determines the next Git commit’s contents?",
      "options": [
        "The staged snapshot",
        "Everything under your home folder",
        "Only open Neovim buffers",
        "The current emulator save state"
      ],
      "correct": 0,
      "explanation": "git add updates the index; git diff --cached reviews that snapshot."
    },
    "recall": "Explain working tree, index, commit, branch, and remote using your own repo.",
    "transfer": "Preserve a playable baseline while trying risky movement changes.",
    "commit": "docs: publish reproducible build and play instructions",
    "sources": [
      "git",
      "branch",
      "github"
    ]
  },
  {
    "id": 26,
    "world": 7,
    "title": "Package a real cartridge",
    "subtitle": "Connect a source version to a tested ROM.",
    "minutes": 35,
    "tags": [
      "Release",
      "Licenses",
      "Build"
    ],
    "goal": "Prepare a tagged release package with credits, a ROM hash, and test evidence.",
    "concept": "A release connects named source to a binary people can play. Build from the intended clean commit, test that exact output, and record tool versions. A Git tag identifies source; a GitHub release can attach the tested ROM and notes. A source archive alone is not a ready-to-run cartridge. Record a SHA-256 hash so you and a tester can confirm the same file. Keep the matching debug ELF for diagnosing that build. If clean builds are not byte-for-byte identical, investigate timestamps, tools, or generated data rather than promising reproducibility you have not demonstrated. Credits must cover the engine, libraries, fonts, music, and art actually shipped. Your own source license does not replace dependency obligations. Test fresh boot, clean save, and existing valid save. State the emulator and hardware actually tested. If no physical cartridge test occurred, describe emulator validation honestly. Your original art should retain editable sources and a clear statement of authorship alongside these release records.",
    "analogy": "A labeled specimen connects its identity, provenance, instructions, and exact contents.",
    "steps": [
      "Review dependency and asset licenses from your installed revision. Create CREDITS and include required license texts, including the common font if used.",
      "Commit the intended source and build it in a separate clean checkout/clone using README. Test that checkout’s ROM.",
      "Run TESTING.md from fresh boot and supported saves. Record source SHA, tool versions, ROM SHA-256, and limitations.",
      "After validation create an annotated tag. Draft a GitHub release for that tag with tested ROM, notes, and credits; review the package before publishing."
    ],
    "code": "git status --short\ngit rev-parse HEAD\ngit log -1 --oneline\n# Build in the clean release checkout, then use its actual ROM:\n# sha256sum ./actual-output.gba\n# After selecting and testing the intended commit:\n# git tag -a v0.1.0 -m \"Signal Lost first playable\"\n# git show v0.1.0\n# Keep its matching .elf for debugging.\n# Push your chosen tag and attach the tested ROM when ready.",
    "codeLanguage": "bash",
    "filename": "Release terminal + CREDITS.md",
    "challenge": "Can you identify a tester’s exact source and ROM from their version label and file hash?",
    "hints": [
      "A visible version string and binary hash answer different questions.",
      "Put a short version label on the title.",
      "Record tag, full commit, tool versions, and ROM hash together."
    ],
    "checks": [
      "A clean checkout builds by the README.",
      "Credits match all shipped assets/dependencies.",
      "The tested ROM has recorded source and binary identities."
    ],
    "quiz": {
      "question": "What does a Git tag identify?",
      "options": [
        "The tester’s SRAM contents",
        "A source commit",
        "Any ROM currently open in mGBA",
        "All future branch changes"
      ],
      "correct": 1,
      "explanation": "Attach and identify the binary separately to connect it to a named source revision."
    },
    "recall": "Connect source identity, binary identity, and test evidence.",
    "transfer": "Investigate a bug in v0.1.0 after main has changed.",
    "commit": "release: prepare tested ROM credits and versioned notes",
    "sources": [
      "tags",
      "release",
      "credits",
      "faq"
    ]
  },
  {
    "id": 27,
    "world": 7,
    "title": "Your mechanic, your decisions",
    "subtitle": "Independent challenge · the scaffolding comes off.",
    "minutes": 35,
    "tags": [
      "Capstone",
      "Design",
      "Transfer"
    ],
    "goal": "Design, draw for, implement, and test a small unfamiliar mechanic independently.",
    "concept": "Independence means turning an unfamiliar feature into answerable questions. Choose a mechanic that changes a player decision while fitting the game: a temporary dash, a noise lure, or an ordered relay route. Write a small contract specifying input, persistent state, transitions, collision, feedback, and observable completion conditions. Draw at least one original visual cue for it using your established art style. Break implementation into a playable first step and a testable boundary. Use documentation for specific API questions after predicting the behavior you need. Looking up a function is professional work; copying a whole mechanic without explaining its state is not mastery evidence. Keep a decision log of prediction, observation, and revision. If one session is insufficient, stop at a playable seam, leave a precise next action, and continue later. The task is intentionally under-specified: choosing representation, timing, ownership, and tests is now part of what you are learning to do. Keep scope to one feature.",
    "analogy": "You know the climbing holds; now choose a short route and explain the footholds.",
    "steps": [
      "Choose one mechanic and write a five-sentence contract covering controls, state, transitions, feedback, and one failure case.",
      "Draw one original cue/pose/icon and export it through your validated asset workflow.",
      "On a feature branch implement the smallest playable version. Specify pause, reset, collision, and capacity behavior; test at least three boundaries.",
      "Review the diff, integrate it, and update controls, art sources, regression evidence, and credits."
    ],
    "code": "// Independent design worksheet: fill with your decisions.\n// Mechanic and player decision: __________________\n// Input event or condition: _____________________\n// Persistent state and invariants: _______________\n// State transitions: ____________________________\n// Walls/enemies/pause/restart interactions: _______\n// Original visual cue and export plan: ___________\n// Three observable acceptance cases: _____________\n// Smallest playable step: ________________________\n// Precise API question to research: ______________",
    "codeLanguage": "cpp",
    "filename": "devlog.md — independent mechanic contract",
    "challenge": "Explain your mechanic and its original visual cue without reading code. Name a first-design failure and the evidence that corrected it.",
    "hints": [
      "Start from the player decision, not a library class.",
      "Reuse input → transition → bounded update → feedback.",
      "A dash raises tunneling/cooldown questions; a lure raises lifetime/priority questions."
    ],
    "checks": [
      "The mechanic changes a meaningful decision.",
      "Three documented boundaries work.",
      "Its code and original art can be explained independently."
    ],
    "quiz": {
      "question": "What best demonstrates independence?",
      "options": [
        "Never opening documentation",
        "Adding many copied systems at once",
        "Designing, implementing, testing, and explaining a new small feature",
        "Memorizing all API names"
      ],
      "correct": 2,
      "explanation": "Independence combines a mental model, targeted reference use, and evidence."
    },
    "recall": "Outline the full mechanic and art pipeline on a blank page.",
    "transfer": "Name a second feature that reuses your design and an assumption that must change.",
    "commit": "feat: complete independently designed mechanic and art",
    "sources": [
      "examples",
      "cpp",
      "breaks",
      "sheets"
    ]
  },
  {
    "id": 28,
    "world": 7,
    "title": "Send the signal home",
    "subtitle": "Final boss · build, explain, release, repeat.",
    "minutes": 35,
    "tags": [
      "Capstone",
      "Release",
      "Mastery"
    ],
    "goal": "Demonstrate a finished original-art GBA game and plan your next one.",
    "concept": "Completion is a performance, not a checkbox. Start from a fresh checkout, build, play a full round, reproduce an edge case, and explain a design tradeoff using evidence. The game should have readable controls, a complete objective, win/loss, reliable restart, original art, visible feedback, tested persistence, and a bounded performance profile. Give yourself a short oral exam: frame loop, sprite ownership, coordinate conversion, collision boundaries, enemy transitions, indexed art/animation exports, and ROM/ELF debugging. A gap is useful information. Revisit the relevant mission, reconstruct a tiny example, then explain it again from memory. Publish the exact package you intend to share with credits and honest limitations. Finishing means you can scope the next tiny game, find precise references, implement a feature, debug it, and verify the result. Choose one new core idea for that next project and write a concrete first session. Consistency improves when returning is easy and each session ends at a useful seam.",
    "analogy": "You can now explain the instruments and fly a short route yourself.",
    "steps": [
      "From a fresh checkout, follow README and play a full win/loss with the independent mechanic. Run the regression matrix and record actual outcomes.",
      "Without lesson text, explain loop, RAII, coordinates, collision, AI, art export, and ARM debugging. Revisit weak explanations, then retry from memory.",
      "Prepare the final tagged package with ROM hash, original-art sources, tested environments, credits, and known limitations. Review, then publish your chosen GitHub release.",
      "Write a one-page next-game scope with one unfamiliar mechanic and a first 20-minute task. Schedule a realistic return and leave its exact first action."
    ],
    "code": "git status --short\ngit rev-parse HEAD\nmake\n# Open this exact build's ROM in mGBA.\n# Run TESTING.md from a fresh boot.\n# Record ROM hash, engine/toolchain revisions, emulator version.\n# Confirm title, controls, objective, loss, pause, restart, save.\n# Explain loop, ownership, spaces, collision, AI, art pipeline, GDB.\n# Next game's first 20-minute action: _________________________",
    "codeLanguage": "bash",
    "filename": "TESTING.md + next-game.md",
    "challenge": "Start the first 20-minute task for a new tiny game using your own plan and targeted references. Record what you did without reopening the course.",
    "hints": [
      "A finished small game with evidence is enough.",
      "If an explanation fails, isolate and reconstruct that concept.",
      "Define one visible outcome, then build → observe → explain → commit."
    ],
    "checks": [
      "A fresh checkout builds the tested game.",
      "You explain core systems and an independent mechanic/art workflow.",
      "A reviewed release package and concrete next-project action exist."
    ],
    "quiz": {
      "question": "What is the strongest sign you can make your next game?",
      "options": [
        "You visited every link",
        "You never see compiler errors",
        "You have the longest feature list",
        "You can design, draw, implement, debug, and verify a new feature"
      ],
      "correct": 3,
      "explanation": "Mastery is transferable performance. References and debugging remain part of independent work."
    },
    "recall": "Give yourself the seven-part oral exam using examples from your game.",
    "transfer": "Scope the smallest next game that teaches one new idea without rebuilding everything.",
    "commit": "release: finish Signal Lost and plan the next cartridge",
    "sources": [
      "start",
      "tags",
      "release",
      "gdb",
      "aseprite"
    ]
  }
];
