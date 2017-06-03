const cheerio = require('cheerio');
const http = require('http');
const fs = require('fs');

function spider(url, route) {
  http.get(url + route, (res) => {
    const objs = [];
    let html = '';
    res.setEncoding('utf-8');
    res.on('data', (chunk) => {
      html += chunk;
    });
    res.on('end', () => {
      const $ = cheerio.load(html);
      $('ul .content').each((i, e) => {
        const title = $(e).find('.title');
        const abstract = $(e).find('.abstract');
        const time = $(e).find('.time');

        objs.push({
          id: i,
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: title.text().trim(),
          url: url + title.attr('href'),
          desc: abstract.text().trim(),
          time: time.attr('data-shared-at'),
        });
      });

      fs.writeFile('public/assets/blog.json', JSON.stringify(objs), (err) => {
        if (err) throw err;
        console.log('It\'s saved!');
      });
    });
  });
}

spider('http://www.jianshu.com', '/u/64467c788eb7');