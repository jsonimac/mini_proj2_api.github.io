var express = require('express');
var router = express.Router();

let tvshows = [
    {
        id: 1,
        title: "Black Clover",
        category: "Action/Adventure/Comedy/Fantasy",
        summary: "Astra and Yuno were abandoned at the same church on the same day. Raised together as children, they came to know of the Wizard King tixtle given to the strongest mage in the kingdom. However, as they grew up, a stark difference between them became evident. While Yuno is able to wield magic with amazing power and control, Asta cannot use magic at all.",
        thriller: '<iframe width="560" height="315" src="https://www.youtube.com/embed/MH4pWlX4LqI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        year: "2023",
        movie_cover: "images/tvshow/tvshow_bc.jpg",
        mylist: false,
    },
    {
        id: 2,
        title: "Crash Landing on You",
        category: "Romance",
        summary: "Yoon Se-ri is a successful businesswoman and her father's choice to take over leadership of the family chaebol, the Queen's Group. He shields her from intelligence authorities led by Cho Cheol-gang who were alerted to the presence of an intruder. Desperate to go home, Se-ri escapes capture from Captain Ri and his four patrol officers and accidentally makes her way into North Korea, believing that she would be going to South Korea, as Ri was in South Korean Territory.  He and his wife Sang-ah want to take control of their sister's company. He also makes plans to smuggle her back to South Korea. Their plans are discovered, and Captain Ri is shot by Cho Cheol-gangs men in a highway confrontation.  On their second try, he helps Se-ri secure a slot on a North Korean team headed to Europe for a friendly games tournament.  Cho Cheol-gang is brought to trial and sentenced to life imprisonment, but escapes on the way to prison. However, the NIS finds no incriminating behavior and even offers amnesty to the North Koreans and help to get settled in Seoul, but they decline and decide to return home.",
        thriller: '<iframe width="560" height="315" src="https://www.youtube.com/embed/eXMjTXL2Vks" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        year: "2020",
        movie_cover: "images/tvshow/tvshow_crashloy.jpg",
        mylist: false,
    },
    {
        id: 3,
        title: "Demon Slayer",
        category: "Adventure/Dark Fantasy",
        summary: "Tanjiro Kamado is a member of the Demon Slayer Corps. Tanjiro is recruited by Giyū Tomioka, the Water Hashira of the Demon Slayer Corps, to train as a demon slayer. Tanjiro and his sister Nezuko were the sole survivors of the incident, with Nezuko being transformed into a demon, but still surprisingly showing signs of human emotion and thought.  He also meets Tamayo and Yushiro, demons who are free from Muzan's control.  In it, Tanjiro meets Zenitsu Agatsuma and Inosuke Hashibira, two of his fellow survivors of the exam. During a battle in the Swordsmith Village, he discovers that Nezuko is invulnerable to sunlight, which makes her the prime target of Muzan. There, the Kamado siblings partake in a council between Kagaya Ubuyashiki, the leader of the Demon Slayer Corps, and the Hashira, the Corps' most elite members, who (with the exception of Giyū) do not believe that Nezuko should be allowed to live.  Tanjiro Corps Nezuko Muzan Hashira Kagaya forecasts Muzan's intentions and enacts a strict training regiment of the entire Corps to prepare for the battle. The Hashira and Tanjiro ambush Muzan, but he traps them all within Infinity Castle, an endless labyrinth which houses the remaining Kizuki. Tamayo restrains Muzan with a poison she concocted, leaving him vulnerable for attack. A desperate battle of attrition ensues as the Corps fight against Muzan until the morning sun can kill him.",
        thriller: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VQGCKyvzIM4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        year: "2019",
        movie_cover: "images/tvshow/tvshow_demonslayer.jpg",
        mylist: false,
    },
    {
        id: 4,
        title: "Keeping up with the Kardashians",
        category: "Reality Show",
        summary: "A peek inside the exploits and privileged private lives of the blended Kardashian-Jenner family, including sisters Kim, Kourtney, Khloé, Kendall and Kylie. Although things are always changing for their family in unexpected ways, Kim, Kourtney, Khloe, and the rest of the Kardashian/Jenner clan are determined to remember that family always comes first. Frequently at odds they may be, between siblings and their relationships, they always support one another in the end despite the many controversies that keep erupting. As the family's fame grows, they become more dependent on one another for support through all the highs and lows of being in the limelight.",
        thriller: '<iframe width="560" height="315" src="https://www.youtube.com/embed/g2Mbov0qht8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        year: "2021",
        movie_cover: "images/tvshow/tvshow_kuwtk.jpg",
        mylist: false,
    },
    {
        id: 5,
        title: "Lucifer",
        category: "Action/Mystery/Urban Fantasy",
        summary: "Lucifer is a handsome and powerful angel who was cast out of Heaven for his rebellion. He abandons his kingdom for Los Angeles, where he runs his own nightclub. Throughout the series, he encounters all sorts of supernatural beings while solving crimes with Detective Chloe Decker.",
        thriller: '<iframe width="560" height="315" src="https://www.youtube.com/embed/X4bF_quwNtw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        year: "2021",
        movie_cover: "images/tvshow/tvshow_lucifer.jpg",
        mylist: false,
    },
    {
        id: 6,
        title: "That Time I Got Reincarnated as a Slime",
        category: "Action/Fantasy",
        summary: "Satoru Mikami is a 37-year-old corporate worker who finds himself reincarnated as a Slime in an unfamiliar world. He encounters a powerful 'Storm Dragon' which has been sealed for 300 years for reducing a town to ashes. He stumbles upon Veldora, a powerful 'Storm Dragon', who has been sealed for the last 300 years for reducing a town to ashes.  Soon Rimuru and his subjects draw the attention of the nearby foreign powers, from monarchs and legendary heroes to demon lords, some seeking to become their allies, while others intending to take advantage of or destroy them completely They decide to exchange names, Veldora bestows upon him name Rimuru, and receives name Tempest in return. ",
        thriller: '<iframe width="560" height="315" src="https://www.youtube.com/embed/MfmV1iQlRFg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        year: "2013",
        movie_cover: "images/tvshow/tvshow_raas.jpg",
        mylist: false,
    },
    {
        id: 7,
        title: "Rick and Morty",
        category: "Action",
        summary: "Rick and Morty is an adult animated science-fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime programming block Adult Swim. The series follows the misadventures of mad scientist Rick Sanchez and his good-hearted but fretful grandson, who split their time between domestic life and interdimensional adventures.",
        thriller: '<iframe width="560" height="315" src="https://www.youtube.com/embed/_uUcMwsR5hg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        year: "2013",
        movie_cover: "images/tvshow/tvshow_ram.jpg",
        mylist: false,
    },
    {
        id: 8,
        title: "Riverdale",
        category: "Supernatural/drama/thriller",
        summary: "The series was adapted for The CW by Archie Comics' chief creative officer Roberto Aguirre-Sacasa. Riverdale debuted on January 26, 2017, to positive reviews. KJ Apa plays Archie Andrews, Lili Reinhart as Betty Cooper, Camila Mendes as Veronica Lodge, Cole Sprouse as Jughead Jones.",
        thriller: '<iframe width="560" height="315" src="https://www.youtube.com/embed/9XmFTADupMc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        year: "2017",
        movie_cover: "images/tvshow/tvshow_riverdale.jpg",
        mylist: false,
    },
    {
        id: 9,
        title: "Sex Education",
        category: "Comedy/Teen Drama",
        summary: " Otis begins the series ambivalent about sex, in part because his single mother, Jean, is a sex therapist who frequently has affairs with male suitors but does not maintain romantic relationships.Other students at Moordale include Eric Effiong, Otis's best friend and the gay son of Ghanaian-Nigerian immigrants; Maeve Wiley, a highly intelligent, rebellious teen whose independence is overshadowed by her family's troubled past; Adam Groff, the headmaster's son who develops a bullying nature out of his own self-loathing; Jackson Marchetti, the head boy struggling to meet the high expectations set for him; Ruby Matthews, Anwar Bakshi, and Olivia Hanan, members of a popular clique known as \"the Untouchables\" Aimee Gibbs, an Untouchable who secretly befriends Maeve; and Lily Iglehart, a writer of alien erotica who is determined to lose her virginity. ",
        thriller: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Hd2ldTR-WpI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        year: "2021",
        movie_cover: "images/tvshow/tvshow_sexed.jpg",
        mylist: false,
    },
    {
        id: 10,
        title: "Suits",
        category: "Legal Drama",
        summary: "Suits is an American legal drama television series created and written by Aaron Korsh. It premiered on USA Network on June 23, 2011, produced by Universal Content Productions. The show follows Mike Ross (Patrick J. Adams), who uses his eidetic memory to talk his way into a job as an associate working for Harvey Specter (Gabriel Macht), despite being a college dropout who never attended law school. The show's success spawned a short-lived spin-off, Pearson, centered on Jessica Pearson's entry into Chicago politics, which premiered alongside the final season of Suits on July 17, 2019.[7][8][9] Suits concluded on September 25, 2019, after nine seasons and 134 episodes.",
        thriller: '<iframe width="560" height="315" src="https://www.youtube.com/embed/85z53bAebsI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        year: "2011",
        movie_cover: "images/tvshow/tvshow_suits.jpg",
        mylist: false,
    },
    // {
    //     id: 11,
    //     title: "The last kingdom",
    //     category: "Drama",
    //     summary: "The Last Kingdom and The Pale Horseman are adapted from Bernard Cornwell's The Saxon Stories. The first series covers the events of the Great Heathen Army's arrival in Britain in 866. The second series focuses on the resistance of the Kingdom of Wessex to Viking incursions. In the year 866, the Great Heathen Army's arrival in Britain is about to redefine the relationship between Vikings and Anglo-Saxons. ",
    //     thiller: '<iframe width="560" height="315" src="https://www.youtube.com/embed/WxPApTGWwas" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    //     year: "2015",
    //     movie_cover: "images/tvshow/tvshow_tlk.jpg",
    //     mylist: false,
    // },
    
];

router.get('/', function(req, res, next) {
    res.send(tvshows);
});

router.get("/tvshow/:id", (req, res) => {
    const { id } = req.params;
    let tvshow = tvshows.find((item) => {
        return item.id === Number(id);
    });
    res.status(200).send(tvshow ? tvshow : {status: "Record not found!"});
});

router.put("/tvshow/:id", (req, res)=>{
    const { id } = req.params;
    let tvshow = tvshows.find((item) => {
        return item.id === Number(id);
    });
    tvshow.mylist = req.body.mylist;
    res.status(200).send( tvshow );
});

module.exports = router;