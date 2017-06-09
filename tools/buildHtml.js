import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors';
/* eslint-disable no-console */

fs.readFile('src/index.html', 'utf8', (err, markup) => {
    if(err) { return console.log(err); }

    const $ = cheerio.load(markup);

    $('head').prepend('<link rel="stylesheet" href="styles.css"></link>');

    fs.writeFile("dist/index.html", $.html(), 'utf8', (e) => {
        if(e) { 
            return console.log(e);
        }
        console.log("index.html has been written to dist".green);
    });
})
