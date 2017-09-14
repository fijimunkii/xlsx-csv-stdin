#!/usr/bin/env node
var xlsx = require('xlsx');
require('exit-on-epipe');

process.stdin.pipe(require('concat-stream')(data => {
  var d;
  try {
    d = xlsx.read(data, {/* cellNF: true, cellFormula: true, cellNF: true, cellStyles: true, */ dateNF: 'm/d/yyyy' });
  } catch(e) {
    console.log(e);
    outbound.emit('error', new Error('Error importing Excel file'));
  }
  var csv = xlsx.utils.make_csv(d.Sheets[d.SheetNames[0]], { FS:",", RS:"\n" });
  console.log(csv);
}));
