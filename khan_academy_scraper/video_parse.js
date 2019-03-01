const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://www.khanacademy.org/math/geometry/hs-geo-foundations'

rp(url)
    .then(function(html){

        //console.log($('div > div', html))

        let video_topics_len = $('h2 > a ', html).length;

        const video_topics = [];
        
        for (let i = 0; i < video_topics_len; i++){
            
            div_obj = $('h2 > a', html)
            url_string = div_obj[i].attribs.href;
            
            //if (url_string['data-test-id'] == 'lesson-card') 
            video_topics.push(url_string)

        }

        console.log(video_topics)
    })
    .catch(function(err){

    });                     