// Compiles every C++ example in the lessons against Butano. Usage:
//   node scripts/compile-lessons.mjs <scratch-project-dir> [lesson-id ...]
// The scratch project must be a copy of a Butano project (never your real one).
import { execSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import { lessons } from '../dist/curriculum.js';

const [dir, ...only] = process.argv.slice(2);
if (!dir) { console.error('usage: compile-lessons.mjs <scratch-project-dir> [lesson-id ...]'); process.exit(2); }
let failed = 0;
for (const l of lessons) {
  if (only.length && !only.includes(l.id)) continue;
  if (l.try?.lang !== 'cpp') continue;
  writeFileSync(`${dir}/src/main.cpp`, l.try.code + '\n');
  try {
    execSync('make -j8', { cwd: dir, stdio: 'pipe', env: { ...process.env, DEVKITPRO: '/opt/devkitpro', DEVKITARM: '/opt/devkitpro/devkitARM' } });
    console.log('OK    ', l.id);
  } catch (e) {
    failed++;
    console.log('FAIL  ', l.id);
    console.log(String(e.stdout) .split('\n').filter(x => /error|Error/.test(x)).slice(0, 8).join('\n'));
  }
}
process.exit(failed ? 1 : 0);
