'use strict';

const { spawn } = require('child_process');

/** @param {string[]} args */
function run(args) {
  const ac = new AbortController();
  const n = args[0] === '-n';

  if (n) args.shift();

  for (const arg of args) {
    const proc = spawn('npm', ['run', arg], {
      stdio: n ? 'pipe' : 'inherit',
      signal: ac.signal,
    });
    proc.on('error', (err) => {
      if (err.name !== 'AbortError') throw err;
    });
    proc.on('close', (code) => {
      if (code) {
        ac.abort();
        process.exitCode = code;
      }
    });

    proc.stdout?.on('data', (data) => {
      process.stdout.write(`[${arg}] ${data}`);
    });
    proc.stderr?.on('data', (data) => {
      process.stderr.write(`[${arg}] ${data}`);
    });
  }
}

exports.run = run;
