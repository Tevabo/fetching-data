const request = require('superagent');
request
.get('https://swapi.co/api/films/1/')
.then(res => {
    console.log(res.body.opening_crawl)
})
.catch(err => {
   // err.message, err.response
});