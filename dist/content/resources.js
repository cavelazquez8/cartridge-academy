// Reference links. Lessons cite at most two each.
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
