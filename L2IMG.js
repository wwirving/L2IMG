const searchTerm = 'teeth';
const searchLimit = 50;

const dir = './' + searchTerm + searchLimit.toString();
const Scraper = require('images-scraper');
const fs = require('fs');
const request = require('request');

var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){    
    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

const google = new Scraper({
  puppeteer: {
    headless: false,
  },
  tbs: {
      sur: "fc",
      itp: "photo",
  },
});

(async () => {
  const results = await google.scrape(searchTerm, searchLimit);
  fs.mkdirSync(dir);
  for (let i = 0; i < results.length; i++){
  console.log(results.length);
  var num = i;
  var n =  num.toString();
  var filename = dir + '/' + searchTerm + n + '.png';
  console.log(filename);
  var link = results[i].url;
  download (link, filename, function(){
  })}
})();


