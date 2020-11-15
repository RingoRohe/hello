#!/usr/bin/env node
const figlet = require('figlet');

figlet('Ringo Rohe', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
    console.log('\t\t\t -------------- Webdeveloper');
    console.log('\n');
    console.log(`Hi! I'm Ringo. Great you've found me. \nIf you want to reach out, here are a few ways to contact:`)
    console.log('\n');
    console.log(`  > E-Mail: hallo@ringorohe.de`);
    console.log(`  > Telegram: https://t.me/errpunkterr`);
    console.log(`  > Twitter: https://twitter.com/errpunkterr`);
    console.log(`  > Web: https://ringorohe.de`);
    console.log('\n');
});