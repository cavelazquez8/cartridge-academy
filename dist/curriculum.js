import { resources } from './content/resources.js';
import { bootcamp } from './content/bootcamp.js';
import { core } from './content/core.js';

export { resources };

// Tracks appear on the map in this order. `outline` lists lessons that are planned but not written yet.
export const tracks = [
  { id: 'boot', title: 'Boot Camp', icon: 'pixel', color: 'green', desc: 'Build, run, draw a hero, and move it. Your first win in under two hours.', skills: 'Build · game loop · sprites · input · C++', lessons: bootcamp },
  { id: 'core', title: 'Core Skills', icon: 'code', color: 'purple', desc: 'The toolbox every genre uses: motion, states, collision, pools, cameras, text, saves.', skills: 'Fixed-point · states · collision · cameras · saves', lessons: core,
    outline: ['Tilemap worlds and tile collision', 'Sprite animation', 'Sound effects and music'] },
  { id: 'topdown', title: 'Track: Top-down adventure', icon: 'map', color: '', desc: 'Explore rooms, dodge patrolling enemies, collect keys. Finish a small adventure.', skills: 'Rooms · enemy AI · pickups · doors', lessons: [],
    outline: ['Moving between rooms', 'Patrolling enemies', 'Keys and doors', 'Health and feedback', 'Finish: a three-room adventure'] },
  { id: 'platformer', title: 'Track: Platformer', icon: 'flag', color: 'green', desc: 'Gravity, jumps that feel right, and enemies you can stomp.', skills: 'Gravity · jump feel · tile physics · moving platforms', lessons: [],
    outline: ['Gravity and landing', 'Jump height, coyote time, buffering', 'Enemies and stomping', 'Moving platforms', 'Finish: a short level'] },
  { id: 'shooter', title: 'Track: Shooter', icon: 'spark', color: 'purple', desc: 'Scrolling skies, waves of enemies, and a boss with patterns.', skills: 'Scrolling · waves · bullet patterns · bosses', lessons: [],
    outline: ['Scrolling background', 'Enemy waves', 'Hit points and damage feedback', 'A boss pattern', 'Finish: a one-stage shooter'] },
  { id: 'puzzle', title: 'Track: Puzzle and RPG-lite', icon: 'lab', color: '', desc: 'Grid movement, menus, dialogue, and an inventory.', skills: 'Grid logic · menus · dialogue · inventory', lessons: [],
    outline: ['Grid movement', 'Pushing blocks', 'Menus and cursors', 'Dialogue boxes', 'Finish: a tiny puzzle adventure'] },
  { id: 'art', title: 'Art side quests', icon: 'art', color: '', desc: 'Optional, any time: silhouettes, palettes, walk cycles, tile kits.', skills: 'Pixel art · palettes · animation', lessons: [],
    outline: ['Silhouettes that read', 'Palettes and light', 'A four-frame walk cycle', 'A reusable tile kit'] },
  { id: 'capstone', title: 'Capstone: your own game', icon: 'terminal', color: 'green', desc: 'Design, build, debug, release. No recipe.', skills: 'Scope · debugging · profiling · release', lessons: [],
    outline: ['Scope a small game', 'Debugging with GDB', 'Frame budget and profiling', 'Git and GitHub releases', 'Ship it'] }
];

for (const t of tracks) for (const l of t.lessons) l.track = t.id;

export const lessons = tracks.flatMap(t => t.lessons);

// Version 1 of the course used numbered missions. Map the ones that still exist to their new lessons.
export const legacyMissionMap = { 1: 'boot-build', 2: 'boot-loop', 3: 'boot-sprite', 4: 'boot-cpp', 5: 'boot-input', 6: 'core-state', 7: 'core-aabb' };
