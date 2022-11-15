var express = require('express');
var router = express.Router();
// let movies = [
//     {
        
//         id: 1,
//         title: "Red Notice",
//         category: "Action/Comedy",
//         summary: "Red Notice is a 2021 American action comedy film written and directed by Rawson Marshall Thurber starring Dwayne Johnson alongside Ryan Reynolds and Gal Gadot and Ritu Arya. It marks the third collaboration between Thurber and Johnson, following Central Intelligence (2016) and Skyscraper (2018).",
//         thiller: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Pj0wz7zu3Ms" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
//         year: "2021",
//         movie_cover: "images/movies/movie_rednotice.jpg",
//         mylist: false,
//     },
//     {
//         id: 2,
//         title: "12 Strong",
//         category: "Action/Drama",
//         summary: "12 Strong (also known as 12 Strong: The Declassified True Story of the Horse Soldiers) is a 2018 American action-war film directed by Nicolai Fuglsig and written by Ted Tally and Peter Craig.",
//         thiller: '<iframe width="560" height="315" src="https://www.youtube.com/embed/-Denciie5oA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
//         year: "2018",
//         movie_cover: "images/movies/movie_12strong.jpg",
//         mylist: false,
//     },
//     {
//         id: 3,
//         title: "After We Collided",
//         category: "Romance/Drama",
//         summary: "After We Collided is a 2020 American romantic drama film directed by Roger Kumble, and written by Anna Todd and Mario Celaya. Based on the 2014 novel of the same name by Todd, it is the sequel to After (2019) and the second overall installment in the After film series. ",
//         thiller: '<iframe width="560" height="315" src="https://www.youtube.com/embed/2SvwX3ux_-8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
//         year: "2014",
//         movie_cover: "images/movies/movie_afterwecolide.jpg",
//         mylist: false,
//     },
//     {
//         id: 4,
//         title: "Annabelle",
//         category: "Horror/Mystery",
//         summary: "Annabelle is a 2014 American supernatural horror film directed by John R. Leonetti, written by Gary Dauberman and produced by Peter Safran and James Wan. It is a prequel to the 2013 film The Conjuring and the second installment in The Conjuring Universe franchise. The film was inspired by a story of a doll named Annabelle told by Ed and Lorraine Warren. ",
//         thiller: '<iframe width="560" height="315" src="https://www.youtube.com/embed/paFgQNPGlsg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
//         year: "2014",
//         movie_cover: "images/movies/movie_anabelle.jpg",
//         mylist: false,
//     },
//     {
//         id: 5,
//         title: "Avengers(End Game)",
//         category: "Action/Sci-Fi",
//         summary: "Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the direct sequel to Avengers: Infinity War (2018) and the 22nd film in the Marvel Cinematic Universe (MCU).",
//         thiller: '<iframe width="560" height="315" src="https://www.youtube.com/embed/TcMBFSGVi1c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
//         year: "2019",
//         movie_cover: "images/movies/movie_avengeraou.jpg",
//         mylist: false,
//     },
//     {
//         id: 6,
//         title: "Dr. Strange",
//         category: "Action/Sci-Fi",
//         summary: "Doctor Stephen Strange is a fictional character appearing in American comic books published by Marvel Comics. Created by Steve Ditko, the character first appeared in Strange Tales #110 (cover-dated July 1963). Doctor Strange serves as Sorcerer Supreme, the primary protector of Earth against magical and mystical threats.",
//         thiller: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Lt-U_t2pUHI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
//         year: "2016",
//         movie_cover: "images/movies/movie_drstrange.jpg",
//         mylist: false,
//     },
//     {
//         id: 7,
//         title: "How To Train Your Dragon",
//         category: "Action/Fantasy",
//         summary: "How to Train Your Dragon is a 2010 American 3D computer-animated action-fantasy film loosely based on the 2003 book of the same name by Cressida Cowell, produced by DreamWorks Animation and distributed by Paramount Pictures. It was directed by Chris Sanders and Dean DeBlois from a screenplay by Will Davies, Sanders, and DeBlois, and stars the voices of Jay Baruchel, Gerard Butler, Craig Ferguson, America Ferrera, Jonah Hill, Christopher Mintz-Plasse, T.J. Miller, and Kristen Wiig.",
//         thiller: '<iframe width="560" height="315" src="https://www.youtube.com/embed/oKiYuIsPxYk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
//         year: "2010",
//         movie_cover: "images/movies/movie_httyd.jpg",
//         mylist: false,
//     },
//     {
//         id: 8,
//         title: "Insidious",
//         category: "Horror/Mystery",
//         summary: "Insidious is a 2010 supernatural horror film directed by James Wan, written by Leigh Whannell, and starring Patrick Wilson, Rose Byrne, and Barbara Hershey. It is the first installment in the Insidious franchise, and the third in terms of the series' in-story chronology.",
//         thiller: '<iframe width="560" height="315" src="https://www.youtube.com/embed/acQyrwQyCOk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
//         year: "2010",
//         movie_cover: "images/movies/movie_insidious.jpg",
//         mylist: false,
//     },
//     {
//         id: 9,
//         title: "IT",
//         category: "Horror",
//         summary: "It (titled onscreen as It Chapter One) is a 2017 American supernatural horror film directed by Andy Muschietti and written by Chase Palmer, Cary Fukunaga, and Gary Dauberman. The film was produced by New Line Cinema, KatzSmith Productions, Lin Pictures, and Vertigo Entertainment. It is the first of a two-part adaptation of the 1986 novel of the same name by Stephen King, primarily covering the first chronological half of the book.",
//         thiller: '<iframe width="560" height="315" src="https://www.youtube.com/embed/FnCdOQsX5kc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
//         year: "2017",
//         movie_cover: "images/movies/movie_it.jpg",
//         mylist: false,
//     },
// ];

let movies = [
    {
        id: 1,
        title: "Red Notice",
        category: "Action/Comedy",
        summary: "Red Notice is a 2021 American action comedy film written and directed by Rawson Marshall Thurber starring Dwayne Johnson alongside Ryan Reynolds and Gal Gadot and Ritu Arya. It marks the third collaboration between Thurber and Johnson, following Central Intelligence (2016) and Skyscraper (2018).",
        thiller: "<iframe width='560' height='315' src='https://www.youtube.com/embed/Pj0wz7zu3Ms' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
        year: "2021",
        movie_cover: "images/movies/movie_rednotice.jpg",
        mylist: false,
    }
]

router.get('/', function(req, res, next) {
    res.send(movies);
});

module.exports = router;