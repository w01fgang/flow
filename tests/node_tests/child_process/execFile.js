/* @flow */

var execFile = require('child_process').execFile;

// args only.
execFile('ls', ['-lh']);

// callback only.
execFile('ls', function(error, stdout: string, stderr: string) {
  console.info(stdout);
});

// options only.
execFile('wc', {timeout: 250});

// args + callback.
execFile('ls', ['-l'], function(error, stdout: string, stderr: string) {
  console.info(stdout);
});

// args + options.
execFile('ls', ['-l'], {timeout: 250});

// Put it all together.
execFile('ls', ['-l'], {timeout: 250}, function(error, stdout: string, stderr: string) {
  console.info(stdout);
});

// Buffer options + callback.
execFile('ls', {encoding: 'buffer'}, function(error, stdout: Buffer, stderr: Buffer) {
  console.info(stdout);
});

// Buffer Put it all together.
execFile('ls', ['-l'], {encoding: 'buffer'}, function(error, stdout: Buffer, stderr: Buffer) {
  console.info(stdout);
});
