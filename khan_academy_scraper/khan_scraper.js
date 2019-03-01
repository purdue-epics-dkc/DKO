const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://www.khanacademy.org/'

rp(url)
    .then(function(html){

        let topics_len = $('li > a', html).length;

        const topics = [];
        
        for (let i = 0; i < topics_len; i++){
            
            url_string = $('li > a', html)[i].attribs.href;
            
            if (url_string[0] != '#') 
                topics.push(url_string)

        }

        console.log(topics)
    })
    .catch(function(err){

    });