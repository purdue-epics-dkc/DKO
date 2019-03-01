const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://www.khanacademy.org/math/geometry'

rp(url)
    .then(function(html){

        let sub_topics_len = $('div > div > a', html).length;

        const sub_topics = [];
        
        for (let i = 0; i < sub_topics_len; i++){
            
            url_string = $('div > div > a', html)[i].attribs.href;
            
            if (url_string.split('/').length == 4)
                sub_topics.push(url_string)

        }

        console.log(sub_topics)
    })
    .catch(function(err){

    });