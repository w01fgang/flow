/* @flow */

var exec = require('child_process').exec;

// callback only.
exec('ls', function(error, stdout: string, stderr: string) {
  console.info(stdout);
});

// options only.
exec('ls', {timeout: 250});

// options + callback.
exec('ls', {maxBuffer: 100}, function(error, stdout: string, stderr: string) {
  console.info(stdout);
});

// stdout is buffer
exec('ls', {encoding: 'buffer'}, function(error, stdout: Buffer, stderr: Buffer) {
  console.info(stdout);
});
