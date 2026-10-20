const STYLE_ID = 'cartridge-lab-styles';
const PIXEL_STORAGE_KEY = 'cartridge-academy-pixel-studio-v1';

function validatedPixelProjects(data) {
  if (!data || ![8, 16].includes(data.size) || !Array.isArray(data.palette) || data.palette.length !== 16 || !data.palette.every(c => typeof c === 'string' && /^#[0-9a-f]{6}$/i.test(c))) throw new Error('Invalid pixel studio palette or canvas size');
  const projects = {};
  for (const n of [8, 16]) {
    const source = data.projects?.[n];
    if (!source || !Array.isArray(source.frames) || source.frames.length < 1 || source.frames.length > 4 || !Number.isInteger(source.active) || source.active < 0 || source.active >= source.frames.length || !source.frames.every(frame => Array.isArray(frame) && frame.length === n * n && frame.every(v => Number.isInteger(v) && v >= 0 && v < 16))) throw new Error('Invalid pixel studio frames');
    projects[n] = { active: source.active, frames: source.frames.map(frame => frame.slice()) };
  }
  return { version: 1, size: data.size, palette: data.palette.slice(), projects };
}

/** Include this result in the app's progress backup. Null means no saved art. */
export function exportPixelProjects() {
  try { const data = JSON.parse(localStorage.getItem(PIXEL_STORAGE_KEY)); return data ? validatedPixelProjects(data) : null; } catch { return null; }
}

/** Validate before replacing local art. Re-render the lab after restoring a backup. */
export function importPixelProjects(data) {
  const normalized = validatedPixelProjects(data);
  localStorage.setItem(PIXEL_STORAGE_KEY, JSON.stringify(normalized));
  return normalized;
}

function installStyles() {
  if (document.getElementById(STYLE_ID)) return;
  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = `
    .lab-shell{--lab-ink:#202624;--lab-green:#23674c;color:var(--lab-ink)}
    .lab-shell *{box-sizing:border-box}.lab-shell button,.lab-shell input{font:inherit}
    .lab-shell h2{font-size:clamp(1.6rem,3vw,2.25rem);letter-spacing:-.05em;margin:.4rem 0 .75rem;line-height:1.15}
    .lab-shell h3{font-size:1.15rem;letter-spacing:-.025em;margin:0 0 .6rem}
    .lab-shell p{line-height:1.65}.lab-shell .lab-intro{max-width:700px;margin:0 0 1.5rem;color:#66716a}
    .lab-tabs{display:flex;gap:6px;flex-wrap:wrap;padding:6px;border:1px solid #e2e4de;background:#f1f2eb;border-radius:13px;margin:0 0 24px;width:fit-content}
    .lab-tab{border:0;background:none;padding:11px 15px;color:#677069;cursor:pointer;border-radius:9px;font-weight:650;font-size:.86rem;white-space:nowrap}
    .lab-tab[aria-selected=true]{background:#fff;color:#23674c;box-shadow:0 2px 5px #2026240b}.lab-tab:hover{color:#23674c}
    .lab-shell button:focus-visible,.lab-shell canvas:focus-visible,.lab-shell input:focus-visible{outline:3px solid #7d68ab;outline-offset:4px}
    .lab-layout{display:grid;grid-template-columns:minmax(0,1.2fr) minmax(240px,.8fr);gap:22px;align-items:start}
    .lab-card{border:1px solid #e0e5dc;background:#fffefa;border-radius:18px;padding:24px;min-width:0}
    .lab-copy{font-size:.88rem;color:#66716a;margin:0 0 18px}.lab-kicker{font-size:.68rem;text-transform:uppercase;letter-spacing:.13em;font-weight:750;color:#748176;margin-bottom:9px}
    .lab-chip{display:inline-flex;align-items:center;gap:6px;border-radius:6px;padding:5px 8px;background:#eee9fa;color:#766192;font-size:.65rem;font-weight:750;letter-spacing:.07em;text-transform:uppercase;margin-bottom:16px}
    .lab-screen-wrap{background:#e9eee2;border:1px solid #d7dfcf;padding:16px;border-radius:13px;position:relative}
    .lab-screen-wrap:before{content:'240 × 160 · 60 FRAME MODEL';display:block;font:9px ui-monospace,monospace;color:#74816e;letter-spacing:.12em;margin-bottom:10px}
    .lab-screen{display:block;width:100%;height:auto;image-rendering:pixelated;image-rendering:crisp-edges;border-radius:3px;background:#153b32;outline-offset:4px}
    .lab-screen-caption{display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;font-size:.7rem;color:#6b7969;margin-top:10px}
    .lab-controls{display:flex;gap:9px;flex-wrap:wrap;align-items:center;margin-top:16px}
    .lab-shell .lab-button{background:#23674c;color:#fff;border:1px solid #23674c;border-radius:8px;padding:10px 14px;cursor:pointer;font-size:.8rem;font-weight:650;line-height:1.2;display:inline-flex;gap:6px;align-items:center;justify-content:center;min-height:39px;text-decoration:none}
    .lab-shell .lab-button.secondary{background:#fffefa;color:#46564a;border-color:#dce2d7}.lab-shell .lab-button:hover{filter:brightness(.96)}
    .lab-shell .lab-button:disabled{opacity:.4;cursor:default}.lab-shell .lab-button.small{padding:7px 10px;min-height:32px;font-size:.72rem}
    .lab-status{font-size:.78rem;color:#3b654d;background:#eaf7ef;border:1px solid #d8ecde;padding:12px 14px;border-radius:9px;margin:16px 0 0;line-height:1.6;min-height:46px}
    .lab-stats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:9px;margin:18px 0}
    .lab-stat{border:1px solid #e8e9e2;border-radius:9px;padding:13px 10px;background:#fcfcf6}.lab-stat small{display:block;text-transform:uppercase;color:#7b857a;letter-spacing:.08em;font-size:.57rem;font-weight:750;margin-bottom:8px}
    .lab-stat strong{font:600 .92rem ui-monospace,SFMono-Regular,Consolas,monospace;display:block;color:#324b3c}.lab-stat span{font-size:.63rem;color:#7b857a}
    .lab-pipeline{display:flex;gap:5px;align-items:center;margin:17px 0;flex-wrap:wrap}.lab-pipeline span{background:#eee9fa;color:#6f598f;font-size:.69rem;padding:8px 10px;border-radius:6px;font-weight:650}.lab-pipeline b{color:#a4aba0;font-size:.75rem}
    .lab-question{border-top:1px solid #e6e9df;margin-top:20px;padding-top:18px}.lab-question summary{font-size:.8rem;font-weight:650;cursor:pointer;line-height:1.5}.lab-question p{font-size:.8rem;color:#66716a}
    .lab-note{font-size:.74rem!important;color:#75806f!important;line-height:1.65!important;margin:16px 0 0!important}
    .lab-mono{font-family:ui-monospace,SFMono-Regular,Consolas,monospace;font-variant-numeric:tabular-nums}
    .lab-code{background:#f1f3ec;border:1px solid #e0e5d9;border-radius:9px;overflow-x:auto;padding:14px;font:11px/1.8 ui-monospace,SFMono-Regular,Consolas,monospace;color:#3c5b48;white-space:pre;margin:15px 0}
    .lab-dpad{display:grid;grid-template-columns:repeat(3,35px);grid-template-rows:repeat(2,32px);gap:4px;margin-left:auto}.lab-dpad .lab-button{padding:0;min-height:32px;touch-action:none;user-select:none}.lab-dpad [data-direction=up]{grid-column:2}.lab-dpad [data-direction=left]{grid-column:1;grid-row:2}.lab-dpad [data-direction=down]{grid-column:2;grid-row:2}.lab-dpad [data-direction=right]{grid-column:3;grid-row:2}
    .lab-range{display:block;margin:19px 0;font-size:.8rem;color:#5e6a60}.lab-range-head{display:flex;justify-content:space-between;gap:10px;margin-bottom:10px}.lab-range output{font-family:ui-monospace,monospace;color:#23674c}.lab-range input{display:block;width:100%;accent-color:#23674c;cursor:pointer;min-height:25px}
    .lab-collision-screen{display:block;width:100%;height:auto;border:1px solid #dfe4d9;border-radius:10px;background:#f6f8ef;touch-action:none}
    .lab-formula{display:grid;gap:8px;margin:18px 0}.lab-formula-row{display:flex;justify-content:space-between;align-items:center;gap:8px;border-radius:7px;padding:11px;background:#f2f4ed;font-size:.73rem;font-family:ui-monospace,monospace}.lab-formula-row[data-result=true]{background:#e4f4e8}.lab-formula-row b{font-size:.63rem;text-transform:uppercase;letter-spacing:.04em;color:#68776a}.lab-formula-row[data-result=true] b{color:#23674c}
    .lab-collision-result{font-size:.82rem;font-weight:700;background:#eee9fa;color:#745d94;border-radius:8px;padding:14px}.lab-collision-result[data-hit=true]{background:#d7f6e7;color:#23674c}
    .lab-track{margin:22px 0}.lab-track-label{display:flex;justify-content:space-between;gap:10px;font-size:.76rem;margin-bottom:10px}.lab-track-label strong{font-weight:650}.lab-track-label output{font-family:ui-monospace,monospace;color:#65735e}.lab-track-lane{position:relative;height:45px;background:repeating-linear-gradient(90deg,#f1f3ea 0px,#f1f3ea 23px,#dfe5d7 24px);border:1px solid #dfe5d7;border-radius:7px;overflow:hidden}.lab-runner{position:absolute;top:10px;left:0;width:22px;height:24px;transition:none;image-rendering:pixelated}.lab-track-lane:after{content:'→';position:absolute;right:10px;top:12px;color:#adb7a5;font-size:13px}
    .lab-tile-layout{display:grid;grid-template-columns:minmax(0,1fr) 85px;gap:18px;align-items:start}.lab-pixel-grid{display:grid;grid-template-columns:repeat(8,1fr);aspect-ratio:1;max-width:350px;touch-action:none;border:2px solid #c6cebd;background:#c6cebd;gap:1px;user-select:none;overflow:hidden;border-radius:4px}
    .lab-pixel{appearance:none;border:0;padding:0;min-width:0;cursor:crosshair;border-radius:0;aspect-ratio:1;position:relative}.lab-pixel.lab-onion:after{content:'';position:absolute;inset:0;background:var(--onion-color);opacity:.3;pointer-events:none}.lab-shell .lab-pixel:focus-visible{outline:2px solid #df8074;outline-offset:-3px;z-index:1}
    .lab-tile-preview{width:64px;height:64px;image-rendering:pixelated;border:1px solid #d8dfd0;background:repeating-conic-gradient(#e1e6d9 0% 25%,#f5f6ee 0% 50%) 50%/12px 12px}.lab-preview-label{font-size:.6rem;color:#819078;margin:7px 0 16px;line-height:1.5}
    .lab-palette{display:flex;gap:9px;align-items:center;margin:20px 0;flex-wrap:wrap}.lab-color{width:38px;height:38px;cursor:pointer;border:2px solid #fffefa;outline:1px solid #dbe0d2;border-radius:8px;position:relative}.lab-color[aria-pressed=true]{outline:2px solid #23674c;outline-offset:3px}.lab-color span{font:bold 9px ui-monospace,monospace;position:absolute;right:3px;bottom:1px}.lab-palette-label{font-size:.73rem;color:#7e8877;margin-left:6px}
    .lab-pixel-grid .lab-transparent,.lab-color.lab-transparent{background:repeating-conic-gradient(#e1e6d9 0% 25%,#f5f6ee 0% 50%) 50%/12px 12px!important}
    .lab-studio-toolbar{display:flex;flex-wrap:wrap;gap:12px;align-items:center;margin:15px 0}.lab-studio-toolbar label{font-size:.73rem;color:#6a7764;display:flex;align-items:center;gap:7px}.lab-studio-toolbar select,.lab-asset-name{border:1px solid #dce2d3;border-radius:6px;background:#fffefa;color:#3c5945;padding:7px;min-width:0;max-width:100%}.lab-frame-strip{display:flex;gap:7px;align-items:center;flex-wrap:wrap;margin:15px 0}.lab-frame-strip button[aria-pressed=true]{background:#d7f6e7;color:#23674c;border-color:#91ba9e}.lab-color-input{width:34px;height:30px;border:1px solid #dce2d3;border-radius:5px;padding:2px;background:transparent}.lab-palette.full{gap:7px;max-width:410px}.lab-palette.full .lab-color{width:32px;height:32px;border-radius:6px}.lab-studio-label{display:flex;gap:10px;align-items:center;flex-wrap:wrap;font-size:.75rem;color:#67755f;margin:16px 0}.lab-studio-label input{flex:1;min-width:100px}.lab-export-note{font-size:.7rem;color:#7a8671;margin:10px 0 0;line-height:1.6}.lab-source{color:#23674c;text-decoration:underline;text-underline-offset:3px}
    .lab-data-list{display:grid;gap:10px;font-size:.79rem;margin:18px 0}.lab-data-list div{display:flex;justify-content:space-between;gap:15px;border-bottom:1px solid #e7e9df;padding-bottom:10px}.lab-data-list dt{color:#788473}.lab-data-list dd{margin:0;font-family:ui-monospace,monospace;color:#3c5945;text-align:right}
    @media(max-width:780px){.lab-layout{grid-template-columns:1fr}.lab-card{padding:20px}.lab-tabs{width:100%;gap:3px}.lab-tab{flex:1;padding:10px 8px;font-size:.73rem}.lab-dpad{margin-left:auto}.lab-stat strong{font-size:.85rem}}
    @media(max-width:500px){.lab-tabs .lab-tab{flex-basis:calc(50% - 3px)}.lab-tile-layout{grid-template-columns:1fr}.lab-tile-layout>div:last-child{display:flex;align-items:center;gap:9px;flex-wrap:wrap}.lab-tile-layout .lab-preview-label{margin:0 7px 0 0;font-size:.55rem}}
    @media(prefers-reduced-motion:reduce){.lab-shell *{scroll-behavior:auto!important}}
  `;
  document.head.append(style);
}

const sprite = (context, x, y, color = '#dbecc7', scale = 1) => {
  const pixels = ['0011100', '0111110', '0112110', '0011100', '0333330', '0333330', '0033300', '0030300', '0030300'];
  const colors = { 1: color, 2: '#344b3b', 3: '#70a788' };
  pixels.forEach((row, py) => [...row].forEach((p, px) => {
    if (p !== '0') { context.fillStyle = colors[p]; context.fillRect(Math.round(x) + px * scale, Math.round(y) + py * scale, scale, scale); }
  }));
};

function gameLoop(root) {
  root.innerHTML = `
    <div class="lab-layout">
      <section class="lab-card panel" aria-labelledby="game-loop-title">
        <div class="lab-chip">Interactive browser model</div>
        <h3 id="game-loop-title">One frame. Three decisions.</h3>
        <p class="lab-copy">Restore three signal beacons, then reach the exit. Every move is input → update → draw.</p>
        <div class="lab-screen-wrap">
          <canvas class="lab-screen" width="240" height="160" tabindex="0" aria-label="Signal Lost game simulation. Use arrow keys or WASD to move; collect three golden beacons, then reach the mint exit at the top right."></canvas>
          <div class="lab-screen-caption"><span>ARROWS / WASD · MOVE</span><span>✦ COLLECT 3 SIGNALS</span></div>
        </div>
        <div class="lab-controls">
          <button class="button lab-button" data-action="pause">Pause</button>
          <button class="button secondary lab-button" data-action="step">Step 1 frame</button>
          <button class="button secondary lab-button" data-action="reset">Reset</button>
          <div class="lab-dpad" aria-label="Movement controls">
            <button class="lab-button secondary" data-direction="up" aria-label="Move up">↑</button>
            <button class="lab-button secondary" data-direction="left" aria-label="Move left">←</button>
            <button class="lab-button secondary" data-direction="down" aria-label="Move down">↓</button>
            <button class="lab-button secondary" data-direction="right" aria-label="Move right">→</button>
          </div>
        </div>
        <p class="lab-status" role="status" data-status>Click the screen, then use arrow keys or WASD. Find all three golden signals.</p>
      </section>
      <aside class="lab-card panel">
        <div class="lab-kicker">Inside the loop</div><h3>Your game is a changing state.</h3>
        <p class="lab-copy">The map stays still. A few numbers change each frame: position, input, and collected signals.</p>
        <div class="lab-stats">
          <div class="lab-stat"><small>Frame</small><strong data-frame>0</strong><span>60 steps / second</span></div>
          <div class="lab-stat"><small>Position</small><strong data-position>20, 124</strong><span>x, y in pixels</span></div>
          <div class="lab-stat"><small>Signals</small><strong data-count>0 / 3</strong><span>mission progress</span></div>
        </div>
        <div class="lab-pipeline"><span>01 Read input</span><b>→</b><span>02 Update</span><b>→</b><span>03 Draw</span></div>
        <div class="lab-data-list"><div><dt>Current input</dt><dd data-input>none</dd></div><div><dt>Loop</dt><dd data-running>running</dd></div><div><dt>Movement</dt><dd>0.8 px / frame</dd></div></div>
        <details class="lab-question"><summary>Predict: if drawing stops, does the player stop moving?</summary><p>Only if the update also stops. Drawing displays the state; updating changes it. Pause this model and step frame by frame to separate those jobs.</p></details>
        <details class="lab-question"><summary>Why does diagonal movement feel faster?</summary><p>Adding 0.8 to both x and y moves √(0.8² + 0.8²) ≈ 1.13 pixels. This model normalizes diagonal input to preserve a speed of 0.8. Try implementing both versions in C++ and compare.</p></details>
        <p class="lab-note">This is a JavaScript teaching model, not a compiled GBA ROM. Its top-left origin differs from Butano sprites, whose default coordinate origin is the screen center. The GBA display is 240 × 160 pixels; its refresh rate is approximately 59.73 Hz.</p>
      </aside>
    </div>`;
  const canvas = root.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;
  const keys = new Set();
  const held = new Set();
  const walls = [{ x: 84, y: 24, w: 12, h: 73 }, { x: 142, y: 112, w: 65, h: 10 }];
  const beacons = [{ x: 50, y: 35 }, { x: 124, y: 104 }, { x: 190, y: 54 }];
  let player, collected, frame, completed;
  let running = false, raf = 0, last = 0, accumulator = 0, alive = true;
  const nodes = Object.fromEntries(['frame', 'position', 'count', 'input', 'running', 'status'].map(name => [name, root.querySelector(`[data-${name}]`)]));
  const pause = root.querySelector('[data-action=pause]');
  const overlaps = (a, b) => a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
  const directions = () => ({
    up: keys.has('arrowup') || keys.has('w') || held.has('up'),
    down: keys.has('arrowdown') || keys.has('s') || held.has('down'),
    left: keys.has('arrowleft') || keys.has('a') || held.has('left'),
    right: keys.has('arrowright') || keys.has('d') || held.has('right'),
  });
  function updateReadouts() {
    nodes.frame.textContent = frame.toLocaleString();
    nodes.position.textContent = `${player.x.toFixed(1)}, ${player.y.toFixed(1)}`;
    nodes.count.textContent = `${collected.size} / 3`;
    nodes.input.textContent = Object.entries(directions()).filter(([, v]) => v).map(([k]) => k).join(' + ') || 'none';
    nodes.running.textContent = completed ? 'mission complete' : running ? 'running' : 'paused';
    pause.textContent = running ? 'Pause' : 'Resume';
    pause.disabled = completed;
  }
  function draw() {
    ctx.fillStyle = '#244b3d'; ctx.fillRect(0, 0, 240, 160);
    for (let y = 0; y < 20; y++) for (let x = 0; x < 30; x++) {
      if ((x * 17 + y * 31) % 7 === 0) { ctx.fillStyle = '#2b5543'; ctx.fillRect(x * 8 + 2, y * 8 + 3, 2, 1); }
      if ((x * 7 + y * 11) % 23 === 0) { ctx.fillStyle = '#3b6249'; ctx.fillRect(x * 8 + 4, y * 8 + 5, 1, 2); }
    }
    ctx.fillStyle = '#375c44'; ctx.fillRect(15, 118, 120, 15); ctx.fillRect(117, 32, 14, 100); ctx.fillRect(35, 31, 191, 14);
    ctx.fillStyle = '#456c50'; ctx.fillRect(0, 0, 240, 6); ctx.fillRect(0, 154, 240, 6); ctx.fillRect(0, 0, 6, 160); ctx.fillRect(234, 0, 6, 160);
    walls.forEach(w => {
      ctx.fillStyle = '#172e28'; ctx.fillRect(w.x + 2, w.y + 4, w.w, w.h);
      ctx.fillStyle = '#718467'; ctx.fillRect(w.x, w.y, w.w, w.h);
      ctx.fillStyle = '#93a079'; ctx.fillRect(w.x, w.y, w.w, 3);
      ctx.fillStyle = '#506c50'; ctx.fillRect(w.x + w.w - 3, w.y + 3, 3, w.h - 3);
      for (let y = 8; y < w.h; y += 11) { ctx.fillStyle = '#61785b'; ctx.fillRect(w.x, w.y + y, w.w - 3, 1); }
    });
    const trees = [[18, 20], [33, 76], [64, 137], [103, 131], [154, 58], [202, 84], [215, 134], [166, 17], [10, 94]];
    trees.forEach(([x, y]) => {
      ctx.fillStyle = '#172f28'; ctx.fillRect(x + 3, y + 10, 4, 5);
      ctx.fillStyle = '#1a3d30'; ctx.fillRect(x, y + 3, 11, 9);
      ctx.fillStyle = '#4b7550'; ctx.fillRect(x + 2, y, 7, 9);
      ctx.fillStyle = '#69865b'; ctx.fillRect(x + 3, y + 1, 4, 2);
    });
    ctx.fillStyle = collected.size === 3 ? '#94e2bc' : '#748675'; ctx.fillRect(215, 12, 16, 20);
    ctx.fillStyle = '#1f4939'; ctx.fillRect(218, 15, 10, 17);
    ctx.fillStyle = collected.size === 3 ? '#b7f4d0' : '#8d9b7e'; ctx.fillRect(222, 20, 2, 6); ctx.fillRect(220, 21, 6, 2);
    beacons.forEach((b, index) => {
      ctx.fillStyle = '#172f28'; ctx.fillRect(b.x - 3, b.y + 4, 9, 3);
      ctx.fillStyle = '#819179'; ctx.fillRect(b.x - 2, b.y + 1, 6, 4);
      ctx.fillStyle = collected.has(index) ? '#a5dfbd' : '#edcc73';
      ctx.fillRect(b.x, b.y - 4, 2, 7); ctx.fillRect(b.x - 2, b.y - 2, 6, 3);
      if (!collected.has(index)) { ctx.fillStyle = '#f4df98'; ctx.fillRect(b.x, b.y - 2, 2, 2); }
    });
    ctx.fillStyle = '#1b352c'; ctx.fillRect(Math.round(player.x), Math.round(player.y) + 8, 8, 3);
    sprite(ctx, player.x, player.y);
    ctx.fillStyle = '#d9e8c2'; ctx.font = '6px monospace'; ctx.fillText('SIGNAL LOST', 10, 13);
    if (completed) {
      ctx.fillStyle = '#142f28e8'; ctx.fillRect(42, 61, 156, 40);
      ctx.strokeStyle = '#89bd8b'; ctx.strokeRect(42.5, 61.5, 155, 39);
      ctx.fillStyle = '#d8f2be'; ctx.font = 'bold 9px monospace'; ctx.textAlign = 'center'; ctx.fillText('SIGNAL RESTORED', 120, 79);
      ctx.font = '6px monospace'; ctx.fillText('A SMALL GAME. A COMPLETE LOOP.', 120, 91); ctx.textAlign = 'left';
    }
    updateReadouts();
  }
  function step() {
    if (completed) return;
    frame++;
    const d = directions();
    let dx = Number(d.right) - Number(d.left), dy = Number(d.down) - Number(d.up);
    const length = Math.hypot(dx, dy) || 1;
    dx = dx / length * 0.8; dy = dy / length * 0.8;
    const nx = Math.max(6, Math.min(227, player.x + dx));
    if (!walls.some(w => overlaps({ x: nx, y: player.y, w: 7, h: 9 }, w))) player.x = nx;
    const ny = Math.max(6, Math.min(145, player.y + dy));
    if (!walls.some(w => overlaps({ x: player.x, y: ny, w: 7, h: 9 }, w))) player.y = ny;
    beacons.forEach((b, i) => {
      if (!collected.has(i) && Math.hypot(player.x + 3.5 - b.x, player.y + 4.5 - b.y) < 10) {
        collected.add(i);
        nodes.status.textContent = collected.size === 3 ? 'All three signals restored! Reach the mint exit at the top right.' : `${collected.size} of 3 signals restored. Keep exploring.`;
      }
    });
    if (collected.size === 3 && overlaps({ ...player, w: 7, h: 9 }, { x: 215, y: 12, w: 16, h: 20 })) {
      completed = true; setRunning(false);
      nodes.status.textContent = `Signal restored in ${frame.toLocaleString()} frames. You completed the input → update → draw loop. Reset to experiment again.`;
    }
  }
  function animate(time) {
    if (!alive || !running) return;
    if (last) accumulator += Math.min((time - last) / 1000, .1);
    last = time;
    while (accumulator >= 1 / 60 && running) { step(); accumulator -= 1 / 60; }
    draw();
    if (running) raf = requestAnimationFrame(animate);
  }
  function setRunning(value) {
    running = value && !completed;
    cancelAnimationFrame(raf); last = 0; accumulator = 0;
    if (running && alive) raf = requestAnimationFrame(animate);
    if (player) updateReadouts();
  }
  function reset() {
    player = { x: 20, y: 124 }; collected = new Set(); frame = 0; completed = false; keys.clear(); held.clear();
    nodes.status.textContent = 'Click the screen, then use arrow keys or WASD. Find all three golden signals.';
    pause.disabled = false; draw();
  }
  const valid = new Set(['arrowup', 'arrowdown', 'arrowleft', 'arrowright', 'w', 'a', 's', 'd']);
  function keyDown(e) { if (valid.has(e.key.toLowerCase())) { e.preventDefault(); keys.add(e.key.toLowerCase()); updateReadouts(); } }
  function keyUp(e) { keys.delete(e.key.toLowerCase()); updateReadouts(); }
  function clearInput() { keys.clear(); held.clear(); updateReadouts(); }
  function onVisibility() { if (document.hidden) { clearInput(); last = 0; accumulator = 0; } }
  root.addEventListener('keydown', keyDown);
  canvas.addEventListener('pointerdown', () => canvas.focus());
  window.addEventListener('keyup', keyUp);
  window.addEventListener('blur', clearInput);
  document.addEventListener('visibilitychange', onVisibility);
  pause.addEventListener('click', () => { setRunning(!running); draw(); });
  root.querySelector('[data-action=step]').addEventListener('click', () => { setRunning(false); step(); draw(); });
  root.querySelector('[data-action=reset]').addEventListener('click', () => { const wasRunning = running || completed; setRunning(false); reset(); setRunning(wasRunning); });
  root.querySelectorAll('[data-direction]').forEach(button => {
    const dir = button.dataset.direction;
    button.addEventListener('pointerdown', e => { e.preventDefault(); button.focus(); button.setPointerCapture(e.pointerId); held.add(dir); updateReadouts(); });
    const release = () => { held.delete(dir); updateReadouts(); };
    button.addEventListener('pointerup', release); button.addEventListener('pointercancel', release); button.addEventListener('lostpointercapture', release); button.addEventListener('blur', release);
    button.addEventListener('keydown', e => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); held.add(dir); updateReadouts(); } });
    button.addEventListener('keyup', e => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); release(); } });
  });
  reset(); setRunning(true);
  return () => { alive = false; cancelAnimationFrame(raf); root.removeEventListener('keydown', keyDown); window.removeEventListener('keyup', keyUp); window.removeEventListener('blur', clearInput); document.removeEventListener('visibilitychange', onVisibility); };
}

function collision(root) {
  root.innerHTML = `<div class="lab-layout">
    <section class="lab-card panel"><div class="lab-chip">Interactive browser model</div><h3>When do two boxes collide?</h3><p class="lab-copy">Move the mint player box. A collision means overlap on both axes.</p>
      <canvas class="lab-collision-screen" width="320" height="200" aria-label="Collision diagram with movable player A and fixed obstacle B. Use the labeled position sliders below."></canvas>
      <label class="lab-range"><span class="lab-range-head">Player x <output data-x-output>100</output></span><input data-axis="x" type="range" min="0" max="276" value="100" step="1" aria-label="Player x position"></label>
      <label class="lab-range"><span class="lab-range-head">Player y <output data-y-output>83</output></span><input data-axis="y" type="range" min="0" max="166" value="83" step="1" aria-label="Player y position"></label>
      <div class="lab-controls"><button class="button secondary lab-button small" data-preset="touch">Edges touching</button><button class="button secondary lab-button small" data-preset="overlap">One pixel overlap</button><button class="button secondary lab-button small" data-preset="apart">Move apart</button></div>
      <p class="lab-note">Our rule uses strict inequalities: touching edges do not count as a collision. A game can choose a different contact rule, but it needs to be consistent.</p>
    </section>
    <aside class="lab-card panel"><div class="lab-kicker">Axis-aligned bounding boxes</div><h3>Four checks. One answer.</h3><p class="lab-copy">A is 44 × 34 px. B is fixed at (180, 72), sized 64 × 56 px. Each check rules out separation on one side.</p>
      <div class="lab-formula" data-formula></div><div class="lab-collision-result" role="status" data-result></div>
      <pre class="lab-code">bool overlap =
    a.left() &lt; b.right() &amp;&amp;
    a.right() &gt; b.left() &amp;&amp;
    a.top() &lt; b.bottom() &amp;&amp;
    a.bottom() &gt; b.top();</pre>
      <p class="lab-note">Illustrative C++ interface: the edge accessors stand for your own rectangle type. This browser uses a top-left origin with y increasing downward.</p>
      <details class="lab-question"><summary>Predict before moving: is overlap on x enough?</summary><p>No. Two boxes can overlap horizontally while being far apart vertically. All four comparisons must be true. Start at one pixel of overlap, then move y below the obstacle.</p></details>
    </aside></div>`;
  const canvas = root.querySelector('canvas'), ctx = canvas.getContext('2d');
  const a = { x: 100, y: 83, w: 44, h: 34 }, b = { x: 180, y: 72, w: 64, h: 56 };
  function update() {
    root.querySelector('[data-x-output]').textContent = a.x + ' px'; root.querySelector('[data-y-output]').textContent = a.y + ' px';
    root.querySelector('[data-axis=x]').value = a.x; root.querySelector('[data-axis=y]').value = a.y;
    const checks = [
      [`A.left < B.right`, `${a.x} < ${b.x + b.w}`, a.x < b.x + b.w],
      [`A.right > B.left`, `${a.x + a.w} > ${b.x}`, a.x + a.w > b.x],
      [`A.top < B.bottom`, `${a.y} < ${b.y + b.h}`, a.y < b.y + b.h],
      [`A.bottom > B.top`, `${a.y + a.h} > ${b.y}`, a.y + a.h > b.y],
    ];
    root.querySelector('[data-formula]').innerHTML = checks.map(([formula, values, result]) => `<div class="lab-formula-row" data-result="${result}"><span>${formula.replaceAll('<', '&lt;')}<br><span style="font-size:.65rem;opacity:.65">${values.replaceAll('<', '&lt;')}</span></span><b>${result}</b></div>`).join('');
    const hit = checks.every(([, , result]) => result), result = root.querySelector('.lab-collision-result');
    result.dataset.hit = hit; result.textContent = hit ? 'TRUE · Overlap on both axes' : 'FALSE · At least one separating edge';
    ctx.clearRect(0, 0, 320, 200); ctx.fillStyle = '#f6f8ef'; ctx.fillRect(0, 0, 320, 200);
    ctx.strokeStyle = '#e5e9dc'; ctx.lineWidth = 1;
    for (let x = 0; x <= 320; x += 20) { ctx.beginPath(); ctx.moveTo(x + .5, 0); ctx.lineTo(x + .5, 200); ctx.stroke(); }
    for (let y = 0; y <= 200; y += 20) { ctx.beginPath(); ctx.moveTo(0, y + .5); ctx.lineTo(320, y + .5); ctx.stroke(); }
    ctx.fillStyle = '#ded3f3'; ctx.fillRect(b.x, b.y, b.w, b.h); ctx.strokeStyle = '#9e85c2'; ctx.strokeRect(b.x + .5, b.y + .5, b.w - 1, b.h - 1);
    ctx.fillStyle = '#b8e7cdaf'; ctx.fillRect(a.x, a.y, a.w, a.h); ctx.strokeStyle = '#23674c'; ctx.lineWidth = 2; ctx.strokeRect(a.x + 1, a.y + 1, a.w - 2, a.h - 2);
    if (hit) { ctx.fillStyle = '#77ba91aa'; ctx.fillRect(Math.max(a.x, b.x), Math.max(a.y, b.y), Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x), Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y)); }
    ctx.font = 'bold 10px monospace'; ctx.fillStyle = '#23674c'; ctx.fillText('A', a.x + 5, a.y + 14); ctx.fillStyle = '#765695'; ctx.fillText('B', b.x + 7, b.y + 15);
    ctx.font = '8px monospace'; ctx.fillStyle = '#89957d'; ctx.fillText('0,0', 6, 12); ctx.fillText('x →', 288, 12); ctx.fillText('y ↓', 6, 190);
  }
  root.querySelectorAll('[data-axis]').forEach(input => input.addEventListener('input', () => { a[input.dataset.axis] = Number(input.value); update(); }));
  root.querySelectorAll('[data-preset]').forEach(button => button.addEventListener('click', () => {
    a.x = button.dataset.preset === 'touch' ? 136 : button.dataset.preset === 'overlap' ? 137 : 90; a.y = 83; update();
  }));
  update(); return () => {};
}

function fixedPoint(root) {
  root.innerHTML = `<div class="lab-layout">
    <section class="lab-card panel"><div class="lab-chip">Interactive browser model</div><h3>Small steps still need to add up.</h3><p class="lab-copy">Predict what happens when a player moves a quarter pixel per frame. Then step through the two number types.</p>
      <div class="lab-track"><div class="lab-track-label"><strong>Integer position <span class="muted">· int</span></strong><output data-int>0.00 px</output></div><div class="lab-track-lane"><canvas class="lab-runner" width="22" height="24" data-int-runner aria-hidden="true"></canvas></div></div>
      <div class="lab-track"><div class="lab-track-label"><strong>Fixed-point position <span class="muted">· bn::fixed</span></strong><output data-fixed>0.00 px</output></div><div class="lab-track-lane"><canvas class="lab-runner" width="22" height="24" data-fixed-runner aria-hidden="true"></canvas></div></div>
      <label class="lab-range"><span class="lab-range-head">Speed per frame <output data-speed>0.25 px</output></span><input type="range" min="0.25" max="2" step="0.25" value="0.25" aria-label="Movement speed in pixels per frame"></label>
      <div class="lab-controls"><button class="button lab-button" data-step>Step 1 frame</button><button class="button secondary lab-button" data-run>Run slowly</button><button class="button secondary lab-button" data-reset>Reset</button></div>
      <div class="lab-stats"><div class="lab-stat"><small>Frame</small><strong data-frame>0</strong></div><div class="lab-stat"><small>Lost per step</small><strong data-loss>0.25 px</strong></div><div class="lab-stat"><small>Drawing scale</small><strong>4 px / unit</strong></div></div>
      <p class="lab-status" data-message>At speed 0.25, predict both positions after four frames. Then check.</p>
    </section>
    <aside class="lab-card panel"><div class="lab-kicker">Numbers on a small machine</div><h3>Keep the fraction. Draw the pixel.</h3><p class="lab-copy">An integer cannot store a fractional position. Assigning the sum back to it discards the fractional part every frame.</p>
      <pre class="lab-code">int x = 0;
bn::fixed precise_x = 0;

// Repeat once each frame:
x += 0.25;
precise_x += bn::fixed(0.25);</pre>
      <p class="lab-copy">Fixed point stores fractional information using scaled integers. Four quarter-pixel updates accumulate to one whole pixel, even though the screen displays whole pixels.</p>
      <details class="lab-question"><summary>Why not round an integer position every frame?</summary><p>Rounding 0.25 to zero each frame still loses the accumulated distance. Keep the precise position in your game state. Convert to a pixel position when rendering.</p></details>
      <details class="lab-question"><summary>Try 1.25 px per frame. What should each lane do?</summary><p>The integer gains one pixel per update. Fixed point gains 1.25. After four updates from zero: 4 versus 5. Reset before comparing so both start from the same state.</p></details>
      <p class="lab-note">The lanes are JavaScript models, not C++ execution or an emulation of Butano internals. Quarter-step values are represented exactly here. The marker wraps visually at the lane edge; the numeric position keeps accumulating. Running advances 8 model frames per second for inspection.</p>
    </aside></div>`;
  let integer = 0, preciseQuarters = 0, frame = 0, speedQuarters = 1, running = false, raf = 0, last = 0, accumulator = 0, alive = true;
  const runButton = root.querySelector('[data-run]'), intRunner = root.querySelector('[data-int-runner]'), fixedRunner = root.querySelector('[data-fixed-runner]');
  for (const [runner, color] of [[intRunner, '#c5b4df'], [fixedRunner, '#c4edce']]) {
    const context = runner.getContext('2d'); context.imageSmoothingEnabled = false; sprite(context, 4, 2, color, 2);
  }
  function update() {
    const speed = speedQuarters / 4;
    root.querySelector('[data-int]').textContent = integer.toFixed(2) + ' px'; root.querySelector('[data-fixed]').textContent = (preciseQuarters / 4).toFixed(2) + ' px';
    root.querySelector('[data-frame]').textContent = frame.toLocaleString(); root.querySelector('[data-loss]').textContent = (speed - Math.trunc(speed)).toFixed(2) + ' px';
    root.querySelector('[data-speed]').textContent = speed.toFixed(2) + ' px';
    const available = Math.max(1, intRunner.parentElement.clientWidth - 24);
    intRunner.style.transform = `translateX(${integer * 4 % available}px)`; fixedRunner.style.transform = `translateX(${preciseQuarters % available}px)`;
    runButton.textContent = running ? 'Pause' : 'Run slowly';
    if (frame > 0) root.querySelector('[data-message]').textContent = `After ${frame.toLocaleString()} frame${frame === 1 ? '' : 's'}: integer ${integer.toFixed(2)} px, fixed point ${(preciseQuarters / 4).toFixed(2)} px. The difference is ${(preciseQuarters / 4 - integer).toFixed(2)} px.`;
  }
  function step() { frame++; integer = Math.trunc(integer + speedQuarters / 4); preciseQuarters += speedQuarters; }
  function animate(time) {
    if (!alive || !running) return;
    if (last) accumulator += Math.min(time - last, 250); last = time;
    while (accumulator >= 125) { step(); accumulator -= 125; }
    update(); raf = requestAnimationFrame(animate);
  }
  function setRunning(value) { running = value; cancelAnimationFrame(raf); last = 0; accumulator = 0; if (running) raf = requestAnimationFrame(animate); update(); }
  root.querySelector('[data-step]').addEventListener('click', () => { setRunning(false); step(); update(); });
  runButton.addEventListener('click', () => setRunning(!running));
  root.querySelector('[data-reset]').addEventListener('click', () => { setRunning(false); integer = 0; preciseQuarters = 0; frame = 0; root.querySelector('[data-message]').textContent = `At speed ${(speedQuarters / 4).toFixed(2)}, predict both positions after four frames. Then check.`; update(); });
  root.querySelector('input').addEventListener('input', e => { speedQuarters = Math.round(Number(e.target.value) * 4); update(); });
  const resizeObserver = new ResizeObserver(update); resizeObserver.observe(root.querySelector('.lab-track-lane'));
  update();
  return () => { alive = false; cancelAnimationFrame(raf); resizeObserver.disconnect(); };
}

/** Standard 40-byte DIB header, 16 RGBQUAD entries, uncompressed bottom-up 4bpp data. */
export function encodeIndexedBmp(width, height, pixels, palette) {
  if (!Number.isInteger(width) || !Number.isInteger(height) || width < 1 || height < 1 || width > 512 || height > 512 || pixels.length !== width * height || pixels.some(p => !Number.isInteger(p) || p < 0 || p > 15) || palette.length !== 16 || palette.some(p => !/^#[0-9a-f]{6}$/i.test(p))) throw new Error('Invalid indexed bitmap data');
  const stride = Math.ceil(width * 4 / 32) * 4, offset = 14 + 40 + 16 * 4, bytes = new Uint8Array(offset + stride * height), view = new DataView(bytes.buffer);
  view.setUint16(0, 0x4d42, true); view.setUint32(2, bytes.length, true); view.setUint32(10, offset, true);
  view.setUint32(14, 40, true); view.setInt32(18, width, true); view.setInt32(22, height, true);
  view.setUint16(26, 1, true); view.setUint16(28, 4, true); view.setUint32(30, 0, true); view.setUint32(34, stride * height, true); view.setUint32(46, 16, true);
  palette.forEach((color, index) => { const rgb = parseInt(color.slice(1), 16), pos = 54 + index * 4; bytes[pos] = rgb & 255; bytes[pos + 1] = rgb >> 8 & 255; bytes[pos + 2] = rgb >> 16 & 255; });
  for (let y = 0; y < height; y++) for (let x = 0; x < width; x++) {
    const pos = offset + (height - 1 - y) * stride + Math.floor(x / 2);
    bytes[pos] |= pixels[y * width + x] << (x % 2 ? 0 : 4);
  }
  return bytes;
}

function tileStudio(root) {
  const storageKey = PIXEL_STORAGE_KEY;
  const initialPalette = ['#ff00ff','#244b3d','#6b9a70','#c5dfa0','#edcc73','#f7f0d3','#d2896f','#a95e5b','#6e4e68','#9a86b5','#c9b8dc','#577c8d','#8bb5bd','#345467','#756751','#b29b71'];
  let palette = initialPalette.slice(), size = 16, selected = 4;
  let projects = { 8: { frames: [Array(64).fill(0)], active: 0 }, 16: { frames: [Array(256).fill(0)], active: 0 } };
  let history = [], drawing = false, pointerId = null, strokeSnapshot = null, strokeChanged = false, cells = [];
  let playing = false, raf = 0, last = 0, previewFrame = 0, alive = true, onion = false;
  let saved = true;
  const restored = exportPixelProjects();
  if (restored) ({ palette, projects, size } = restored);
  root.innerHTML = `<div class="lab-layout">
    <section class="lab-card panel"><div class="lab-chip">Make your own game art</div><h3>From your first pixel to your own sprite.</h3><p class="lab-copy">Start with an empty canvas. Draw an original character, animate a few frames, and export real graphics for Butano.</p>
      <div class="lab-studio-toolbar"><label>Canvas <select data-size aria-label="Sprite dimensions"><option value="8">8 × 8 · tile / sprite</option><option value="16" selected>16 × 16 · sprite</option></select></label><label><input type="checkbox" data-onion> Onion skin</label></div>
      <div class="lab-tile-layout"><div class="lab-pixel-grid" role="group" aria-label="Pixel art editor"></div><div><canvas class="lab-tile-preview" width="16" height="16" aria-label="Sprite preview enlarged to 64 pixels"></canvas><div class="lab-preview-label">PIXEL PREVIEW</div><canvas class="lab-tile-preview" width="16" height="16" style="width:32px;height:32px" aria-label="Sprite preview at twice actual size"></canvas><div class="lab-preview-label">2× PREVIEW</div><button class="lab-button secondary small" data-play disabled>Animate</button></div></div>
      <div class="lab-frame-strip" role="group" aria-label="Animation frame selection" data-frames></div>
      <div class="lab-controls"><button class="lab-button secondary small" data-add-frame>+ Duplicate frame</button><button class="lab-button secondary small" data-delete-frame disabled>Delete frame</button><button class="lab-button secondary small" data-undo disabled>Undo</button><button class="lab-button secondary small" data-clear>Clear frame</button></div>
      <div class="lab-palette full" role="group" aria-label="Sixteen color palette">${palette.map((color, i) => `<button class="lab-color${i === 0 ? ' lab-transparent' : ''}" data-color="${i}" aria-label="${i === 0 ? 'Erase: transparent index 0' : `Palette index ${i}`}" aria-pressed="${i === selected}" style="background:${color};color:${[1,7,8,11,13,14].includes(i) ? '#fff' : '#244b3d'}"><span>${i.toString(16).toUpperCase()}</span></button>`).join('')}</div>
      <div class="lab-studio-toolbar"><span class="lab-palette-label" data-selected>Index 4 selected</span><label>Edit color <input type="color" class="lab-color-input" value="#edcc73" aria-label="Edit selected palette color" data-edit-color></label></div>
      <label class="lab-studio-label">Asset name <input class="lab-asset-name lab-mono" value="my_sprite" maxlength="40" pattern="[a-z][a-z0-9_]*" aria-label="Asset filename, lowercase letters digits and underscores" data-asset-name></label>
      <div class="lab-controls"><button class="button lab-button" data-export-bmp>↓ Sprite BMP</button><button class="button secondary lab-button" data-export-json>↓ Butano JSON</button></div>
      <div class="lab-controls"><button class="lab-button secondary small" data-sheet-bmp disabled>↓ Animation BMP</button><button class="lab-button secondary small" data-sheet-json disabled>↓ Animation JSON</button></div>
      <p class="lab-export-note">Download both matching files. Sprite exports the selected frame; animation exports all frames in a vertical sheet.</p>
      <p class="lab-note">Click or drag to paint. Index 0 erases. Keyboard: Tab into the canvas, arrows choose a cell, Space / Enter paints. Each canvas size keeps its own frames. Your art saves in this browser.</p>
      <p class="lab-status" role="status" data-message>Your blank canvas is ready. Try a readable silhouette before adding details.</p>
    </section>
    <aside class="lab-card panel"><div class="lab-kicker">Your art → your game</div><h3>A small canvas with real constraints.</h3><p class="lab-copy">Choose a clear silhouette and a few purposeful colors. Add a second frame by duplicating, then moving just two or three pixels.</p>
      <dl class="lab-data-list"><div><dt>Sprite dimensions</dt><dd data-dimensions>16 × 16 px</dd></div><div><dt>Animation frames</dt><dd data-frame-count>1 / 4</dd></div><div><dt>Palette entries in use</dt><dd data-used>1 / 16</dd></div><div><dt>4bpp pixel data / frame</dt><dd data-bytes>128 bytes</dd></div><div><dt>Storage</dt><dd data-saved>saved locally</dd></div></dl>
      <p class="lab-copy">A GBA tile is 8 × 8 pixels. A 16 × 16 sprite contains four tiles. At 4 bits per pixel, an 8 × 8 tile uses 32 bytes before its separate palette.</p>
      <details class="lab-question"><summary>Why are there 16 palette entries but only 15 visible colors?</summary><p>Four bits encode indices 0–15. Sprite index 0 is transparent, regardless of its RGB value. The checkerboard shows that empty space; the BMP stores a magenta first palette entry.</p></details>
      <details class="lab-question"><summary>How does onion skin help me animate?</summary><p>It shows the previous frame as a faint ghost behind empty pixels. Duplicate your first frame, erase a limb with index 0, then redraw it one pixel away. Animate at six frames per second to compare the poses.</p></details>
      <div class="lab-status">Put the matching BMP and JSON in your project’s <span class="lab-mono">graphics/</span> folder. Build the project to generate a <span class="lab-mono">bn_sprite_items_…</span> header.</div>
      <pre class="lab-code" data-asset-code></pre>
      <p class="lab-note">Export uses an uncompressed 4bpp indexed BMP with exactly 16 palette entries and a standard 40-byte DIB header. Color edits snap to 5-bit RGB channels. The browser previews your art; the C++ build still runs in your terminal. <a class="lab-source" href="https://gvaliente.github.io/butano/import.html" target="_blank" rel="noopener noreferrer">Butano’s official asset import guide ↗</a></p>
    </aside></div>`;
  const grid = root.querySelector('.lab-pixel-grid'), undo = root.querySelector('[data-undo]'), message = root.querySelector('[data-message]'), editColor = root.querySelector('[data-edit-color]'), playButton = root.querySelector('[data-play]');
  const canvases = [...root.querySelectorAll('canvas')], contexts = canvases.map(canvas => canvas.getContext('2d'));
  const project = () => projects[size];
  const tile = () => project().frames[project().active];
  const capture = () => JSON.stringify({ palette, projects, size });
  function save() { try { localStorage.setItem(storageKey, capture()); saved = true; } catch { saved = false; } root.querySelector('[data-saved]').textContent = saved ? 'saved locally' : 'download to keep'; }
  function record(snapshot = capture()) { history.push(snapshot); if (history.length > 80) history.shift(); }
  function drawPreview(index = project().active) {
    const pixels = project().frames[index] || tile();
    contexts.forEach(ctx => { ctx.clearRect(0,0,size,size); pixels.forEach((value,i) => { if (value !== 0) { ctx.fillStyle = palette[value]; ctx.fillRect(i % size, Math.floor(i / size), 1, 1); } }); });
  }
  function assetName() { const clean = root.querySelector('[data-asset-name]').value.toLowerCase().replace(/[^a-z0-9_]/g, '_').replace(/^[^a-z]+/, ''); return clean || 'my_sprite'; }
  function updateCode() { const name = assetName(); root.querySelector('[data-asset-code]').textContent = `// After exporting + building:\n#include "bn_sprite_items_${name}.h"\n\nauto hero = bn::sprite_items::${name}\n    .create_sprite(0, 0);`; }
  function stop() { playing = false; cancelAnimationFrame(raf); playButton.textContent = 'Animate'; drawPreview(); }
  function update() {
    const pixels = tile(), p = project(), previous = p.frames[(p.active - 1 + p.frames.length) % p.frames.length];
    if (cells.length !== size * size) {
      grid.innerHTML = ''; grid.style.gridTemplateColumns = `repeat(${size},1fr)`;
      cells = pixels.map((value,index) => { const cell = document.createElement('button'); cell.type = 'button'; cell.className = 'lab-pixel'; cell.dataset.index = index; cell.tabIndex = index === 0 ? 0 : -1; grid.append(cell); return cell; });
      canvases.forEach(canvas => { canvas.width = size; canvas.height = size; }); canvases[1].style.width = `${size * 2}px`; canvases[1].style.height = `${size * 2}px`;
    }
    cells.forEach((cell,i) => { cell.style.background = palette[pixels[i]]; cell.classList.toggle('lab-transparent', pixels[i] === 0); cell.classList.toggle('lab-onion', onion && p.frames.length > 1 && pixels[i] === 0 && previous[i] !== 0); cell.style.setProperty('--onion-color', palette[previous[i]]); cell.setAttribute('aria-label', `Row ${Math.floor(i / size) + 1}, column ${i % size + 1}, palette index ${pixels[i]}`); });
    root.querySelector('[data-frames]').innerHTML = p.frames.map((_,i) => `<button class="lab-button secondary small" data-frame-select="${i}" aria-pressed="${i === p.active}">Frame ${i + 1}</button>`).join('');
    root.querySelector('[data-dimensions]').textContent = `${size} × ${size} px`; root.querySelector('[data-frame-count]').textContent = `${p.frames.length} / 4`; root.querySelector('[data-used]').textContent = `${new Set(pixels).size} / 16`; root.querySelector('[data-bytes]').textContent = `${size * size / 2} bytes`;
    root.querySelector('[data-size]').value = size; undo.disabled = !history.length; root.querySelector('[data-add-frame]').disabled = p.frames.length >= 4;
    root.querySelector('[data-delete-frame]').disabled = p.frames.length <= 1; playButton.disabled = p.frames.length <= 1; root.querySelector('[data-sheet-bmp]').disabled = p.frames.length <= 1; root.querySelector('[data-sheet-json]').disabled = p.frames.length <= 1;
    root.querySelectorAll('[data-color]').forEach(button => { const i = Number(button.dataset.color); button.style.background = palette[i]; button.setAttribute('aria-pressed', String(i === selected)); button.setAttribute('aria-label', i === 0 ? 'Erase: transparent index 0' : `Palette index ${i}, ${palette[i]}`); });
    root.querySelector('[data-selected]').textContent = selected === 0 ? 'Index 0 · eraser / transparent' : `Index ${selected} · ${palette[selected]}`; editColor.value = palette[selected]; editColor.disabled = selected === 0;
    if (!playing) drawPreview(); updateCode(); save();
  }
  function paint(index) {
    if (tile()[index] === selected) return;
    if (drawing) { if (!strokeChanged) { record(strokeSnapshot); strokeChanged = true; } } else record();
    tile()[index] = selected; update();
  }
  function focusCell(index) { cells.forEach((cell,i) => { cell.tabIndex = i === index ? 0 : -1; }); cells[index].focus({ preventScroll: true }); }
  grid.addEventListener('pointerdown', e => { const cell = e.target.closest('[data-index]'); if (!cell || e.button !== 0) return; e.preventDefault(); stop(); drawing = true; pointerId = e.pointerId; strokeSnapshot = capture(); strokeChanged = false; grid.setPointerCapture(e.pointerId); focusCell(Number(cell.dataset.index)); paint(Number(cell.dataset.index)); });
  grid.addEventListener('pointermove', e => { if (!drawing || pointerId !== e.pointerId) return; e.preventDefault(); const cell = document.elementFromPoint(e.clientX, e.clientY)?.closest('[data-index]'); if (cell && grid.contains(cell)) paint(Number(cell.dataset.index)); });
  const endStroke = e => { if (pointerId === e.pointerId) { drawing = false; pointerId = null; strokeSnapshot = null; } };
  grid.addEventListener('pointerup', endStroke); grid.addEventListener('pointercancel', endStroke); grid.addEventListener('lostpointercapture', endStroke);
  grid.addEventListener('click', e => { const cell = e.target.closest('[data-index]'); if (cell && e.detail === 0) { stop(); paint(Number(cell.dataset.index)); } });
  grid.addEventListener('keydown', e => {
    const cell = e.target.closest('[data-index]'); if (!cell) return;
    const index = Number(cell.dataset.index), row = Math.floor(index / size), column = index % size;
    const next = { ArrowLeft: row * size + Math.max(0,column - 1), ArrowRight: row * size + Math.min(size - 1,column + 1), ArrowUp: Math.max(0,row - 1) * size + column, ArrowDown: Math.min(size - 1,row + 1) * size + column };
    if (e.key in next) { e.preventDefault(); focusCell(next[e.key]); }
  });
  root.querySelector('[data-frames]').addEventListener('click', e => { const button = e.target.closest('[data-frame-select]'); if (button) { stop(); project().active = Number(button.dataset.frameSelect); update(); } });
  root.querySelector('[data-size]').addEventListener('change', e => { stop(); size = Number(e.target.value); cells = []; update(); message.textContent = `Opened your ${size} × ${size} canvas. Your other canvas is kept separately.`; });
  root.querySelector('[data-onion]').addEventListener('change', e => { onion = e.target.checked; update(); });
  root.querySelectorAll('[data-color]').forEach(button => button.addEventListener('click', () => { selected = Number(button.dataset.color); update(); }));
  editColor.addEventListener('input', e => { if (selected === 0) return; const hex = e.target.value; const quantized = '#' + [1,3,5].map(pos => Math.round(Math.round(parseInt(hex.slice(pos,pos + 2),16) * 31 / 255) * 255 / 31).toString(16).padStart(2,'0')).join(''); if (palette[selected] !== quantized) { record(); palette[selected] = quantized; update(); } });
  undo.addEventListener('click', () => { if (!history.length) return; stop(); ({ palette, projects, size } = JSON.parse(history.pop())); cells = []; update(); message.textContent = 'Last art change undone.'; });
  root.querySelector('[data-clear]').addEventListener('click', () => { stop(); if (tile().some(v => v !== 0)) { record(); tile().fill(0); update(); message.textContent = 'Frame cleared. Undo brings your work back.'; } });
  root.querySelector('[data-add-frame]').addEventListener('click', () => { stop(); if (project().frames.length < 4) { record(); project().frames.push(tile().slice()); project().active = project().frames.length - 1; update(); message.textContent = 'Frame duplicated. Change a few pixels, then Animate to see the motion.'; } });
  root.querySelector('[data-delete-frame]').addEventListener('click', () => { stop(); if (project().frames.length > 1) { record(); project().frames.splice(project().active,1); project().active = Math.min(project().active,project().frames.length - 1); update(); message.textContent = 'Frame removed. Undo restores it.'; } });
  function animate(time) { if (!alive || !playing) return; if (!last || time - last >= 1000 / 6) { last = time; drawPreview(previewFrame); previewFrame = (previewFrame + 1) % project().frames.length; } raf = requestAnimationFrame(animate); }
  playButton.addEventListener('click', () => { if (playing) stop(); else { playing = true; previewFrame = 0; last = 0; playButton.textContent = 'Pause'; raf = requestAnimationFrame(animate); } });
  root.querySelector('[data-asset-name]').addEventListener('input', updateCode);
  function download(blob,name) { const url = URL.createObjectURL(blob), anchor = document.createElement('a'); anchor.href = url; anchor.download = name; document.body.append(anchor); anchor.click(); anchor.remove(); URL.revokeObjectURL(url); }
  function exportBmp(sheet) { const name = assetName() + (sheet ? '_sheet' : ''), pixels = sheet ? project().frames.flat() : tile(); download(new Blob([encodeIndexedBmp(size,sheet ? size * project().frames.length : size,pixels,palette)],{ type:'image/bmp' }),name + '.bmp'); message.textContent = `${name}.bmp downloaded. Download its matching ${name}.json, then place both in graphics/.`; }
  function exportJson(sheet) { const name = assetName() + (sheet ? '_sheet' : ''), data = sheet ? { type:'sprite',width:size,height:size } : { type:'sprite' }; download(new Blob([JSON.stringify(data,null,2) + '\n'],{ type:'application/json' }),name + '.json'); message.textContent = `${name}.json downloaded. Pair it with ${name}.bmp in graphics/ and build your project.`; }
  root.querySelector('[data-export-bmp]').addEventListener('click', () => exportBmp(false)); root.querySelector('[data-export-json]').addEventListener('click', () => exportJson(false)); root.querySelector('[data-sheet-bmp]').addEventListener('click', () => exportBmp(true)); root.querySelector('[data-sheet-json]').addEventListener('click', () => exportJson(true));
  update(); return () => { alive = false; drawing = false; cancelAnimationFrame(raf); };
}

/** Mount the concept lab route. Call the returned function before unmounting it. */
export function renderLab(container) {
  installStyles();
  container.innerHTML = `<div class="lab-shell"><div class="eyebrow lab-kicker">LEARN BY TINKERING</div><h2>The lab bench.</h2><p class="lab-intro">Make a prediction. Change one thing. See what happens. Small experiments build the intuition you’ll bring to your own game.</p><div class="lab-tabs" role="tablist" aria-label="GBA concept labs"></div><div data-lab-content role="tabpanel" id="gba-lab-panel"></div></div>`;
  const tabs = [ ['loop', 'Game loop', gameLoop], ['collision', 'Collision', collision], ['fixed', 'Fixed point', fixedPoint], ['tiles', 'Pixel studio', tileStudio] ];
  const tabList = container.querySelector('.lab-tabs'), content = container.querySelector('[data-lab-content]');
  let dispose = () => {}, alive = true;
  const buttons = tabs.map(([id, label], index) => {
    const button = document.createElement('button'); button.type = 'button'; button.className = 'lab-tab'; button.id = `gba-lab-tab-${id}`; button.role = 'tab'; button.textContent = label; button.setAttribute('aria-controls', 'gba-lab-panel'); button.setAttribute('aria-selected', String(index === 0)); button.tabIndex = index === 0 ? 0 : -1; tabList.append(button);
    button.addEventListener('click', () => select(index));
    button.addEventListener('keydown', e => {
      let next;
      if (e.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (e.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
      if (e.key === 'Home') next = 0;
      if (e.key === 'End') next = tabs.length - 1;
      if (next !== undefined) { e.preventDefault(); select(next); buttons[next].focus(); }
    });
    return button;
  });
  function select(index) {
    if (!alive) return;
    dispose();
    buttons.forEach((button, i) => { button.setAttribute('aria-selected', String(i === index)); button.tabIndex = i === index ? 0 : -1; });
    content.setAttribute('aria-labelledby', buttons[index].id);
    dispose = tabs[index][2](content);
  }
  select(0);
  return () => { if (alive) { alive = false; dispose(); } };
}
