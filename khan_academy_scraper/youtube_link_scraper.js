const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://www.khanacademy.org/math/geometry/hs-geo-foundations/hs-geo-intro-euclid/v/euclid-as-the-father-of-geometry'

rp(url)
    .then(function(html){

        //console.log($('div > a', html))

        let video_len = $('div > iframe', html).length;

        const video = [];
        
        for (let i = 0; i < video_len; i++){
            
            url_string = $('div > iframe', html)[i].attribs;
            
            if (url_string[0] != '#') 
                video.push(url_string)

        }

        console.log(video)
    })
    .catch(function(err){

    });