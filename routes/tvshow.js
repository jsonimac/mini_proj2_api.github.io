var express = require('express');
var router = express.Router();
let tvshows = [
    {
        id: 1,
        title: "Black Clover",
        category: "Action",
        summary: "sample summary",
        thiller: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Pj0wz7zu3Ms" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        year: "2021",
        // movie_cover: "sampleimage",
        mylist: false,
    }
]

router.get('/', function(req, res, next) {
    res.send(tvshows);
});

module.exports = router;