const allMcuMoviesSeries = [
    //AVENGERS
    {
        name: "Avengers",
        type: "movie",
        date: 2012,
        image: "https://wallpapercave.com/wp/vDy3sUb.jpg",
        phase: "phase1",
        personages: [
            {name: "iron man"},
            {name: "captain america"},
            {name: "thor"},
            {name: "hulk"},
        ],
        collection:[
            {name: "Avengers"},
            {name: "iron man"},
            {name: "captain america"},
            {name: "thor"},
            {name: "hulk"},
        ]
    },
    {
        name: "Avengers l'ere de ultron",
        type: "movie",
        date: 2015,
        image: "https://wallpapercave.com/wp/wp1818445.jpg",
        phase: "phase2",
        personages: [
            {name: "iron man"},
            {name: "captain america"},
            {name: "thor"},
            {name: "hulk"},
        ],
        collection:[
            {name: "Avengers"},
            {name: "iron man"},
            {name: "captain america"},
            {name: "thor"},
            {name: "hulk"},
        ]
    },
    {
        name: "Avengers infinity war",
        type: "movie",
        date: 2018,
        image: "https://images4.alphacoders.com/909/thumb-1920-909185.jpg",
        phase: "phase3",
        personages: [
            {name: "iron man"},
            {name: "captain america"},
            {name: "thor"},
            {name: "hulk"},
        ],
        collection:[
            {name: "Avengers"},
            {name: "iron man"},
            {name: "captain america"},
            {name: "thor"},
            {name: "hulk"},
        ]
    },
    {
        name: "Avengers endgame",
        type: "movie",
        date: 2019,
        image: "https://images8.alphacoders.com/100/thumb-1920-1003220.png",
        phase: "phase3",
        personages: [
            {name: "iron man"},
            {name: "captain america"},
            {name: "thor"},
            {name: "hulk"},
        ],
        collection:[
            {name: "Avengers"},
            {name: "iron man"},
            {name: "captain america"},
            {name: "thor"},
            {name: "hulk"},
        ]
    },

    //IRONMAN
    {
        name: "Iron man",
        type: "movie",
        date: 2008,
        image: "https://wallpapercave.com/wp/wp2547005.jpg",
        phase: "phase1",
        personages: [
            {name: "iron man"},
        ],
        collection:[
            {name: "iron man"}
        ]
    },
    {
        name: "Iron man 2",
        type: "movie",
        date: 2010,
        image: "https://wallpapercave.com/wp/fJxKhs9.jpg",
        phase: "phase1",
        personages: [
            {name: "iron man"},
        ],
        collection:[
            {name: "iron man"}
        ]
    },
    {
        name: "Iron man 3",
        type: "movie",
        date: 2013,
        image: "https://i.pinimg.com/originals/11/ed/bd/11edbd2b87a4926224f8c5dfa05526e2.jpg",
        phase: "phase2",
        personages: [
            {name: "iron man"},
        ],
        collection:[
            {name: "iron man"}
        ]
    },

    //CAPTAINAMERICA
    {
        name: "Captain America",
        type: "movie",
        date: 2011,
        image: "https://wallpapercave.com/wp/wp3775632.jpg",
        phase: "phase1",
        personages: [
            {name: "captain america"},
        ],
        collection:[
            {name: "captain america"}
        ]
    },
    {
        name: "Captain America 2",
        type: "movie",
        date: 2014,
        image: "https://wallpaperaccess.com/full/153821.jpg",
        phase: "phase2",
        personages: [
            {name: "captain america"},
        ],
        collection:[
            {name: "captain america"}
        ]
    },
    {
        name: "Captain America civil war",
        type: "movie",
        date: 2016,
        image: "https://rare-gallery.com/thumbs/516718-captain-america.jpg",
        phase: "phase3",
        personages: [
            {name: "captain america"},
            {name: "iron man"},
        ],
        collection:[
            {name: "captain america"},
            {name: "iron man"},
        ]
    },
    {
        name: "Falcon et le Soldat de l'hiver",
        type: "serie",
        date: 2021,
        image: "https://lumiere-a.akamaihd.net/v1/images/flcwnt_teaser_digital_keyart_v5_lg_c24047e7.jpeg?region=0%2C1552%2C1688%2C948",
        phase: "phase4",
        personages: [
            {name: "falcon"},
            {name: "soldat de l'hiver"},
            {name: "captain america"},
        ],
        collection:[
            {name: "captain america"}
        ]
    },

    //THOR
    {
        name: "Thor",
        type: "movie",
        date: 2011,
        image: "https://wallpaperaccess.com/full/645141.jpg",
        phase: "phase1",
        personages: [
            {name: "thor"},
        ],
        collection:[
            {name: "thor"},
        ]
    },
    {
        name: "Thor 2",
        type: "movie",
        date: 2013,
        image: "https://wallpaperaccess.com/full/1653473.jpg",
        phase: "phase2",
        personages: [
            {name: "thor"},
        ],
        collection:[
            {name: "thor"},
        ]
    },
    {
        name: "Thor ragnarok",
        type: "movie",
        date: 2017,
        image: "https://preview.redd.it/m51kk6nexfbz.jpg?auto=webp&s=4fdf94d063e08dabcffb6ffef2f584d6ecb62129",
        phase: "phase3",
        personages: [
            {name: "thor"},
            {name: "hulk"},
        ],
        collection:[
            {name: "thor"},
            {name: "hulk"},
        ]
    },
    {
        name: "Thor: Love and Thunder",
        type: "movie",
        date: 2022,
        image: "https://sm.ign.com/t/ign_fr/news/t/thor-love-/thor-love-and-thunder-trailer-features-the-first-look-at-chr_kxef.1200.jpg",
        phase: "phase4",
        personages: [
            {name: "thor"},
        ],
        collection:[
            {name: "thor"},
        ]
    },
    {
        name: "Loki",
        type: "serie",
        date: 2021,
        image: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3AF3175CB9CFF25C84C3404452D44D1248796FDD14993B324ADE0789ADB3BF5E/scale?width=1200&aspectRatio=1.78&format=jpeg",
        phase: "phase4",
        personages: [
            {name: "loki"},
            {name: "thor"}
        ],
        collection:[
            {name: "thor"},
        ]
    },

    //HULK
    {
        name: "L'Incroyable Hulk",
        type: "movie",
        date: 2008,
        image: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/ADA56C6AA468A61C6108237E64956CF8AE0C34AD64B73E2845E44549A3ACC9AC/scale?width=1200&aspectRatio=1.78&format=jpeg",
        phase: "phase1",
        personages: [
            {name: "hulk"},
        ],
        collection:[
            {name: "hulk"},
        ]
    },
    {
        name: "She Hulk",
        type: "serie",
        date: 2022,
        image: "https://www.eklecty-city.fr/wp-content/uploads/2022/08/she-hulk-attorney-at-law-series-picture-02.jpg",
        phase: "phase4",
        personages: [
            {name: "shehulk"},
            {name: "hulk"},
        ],
        collection:[
            {name: "hulk"},
        ]
    },

    //ANT MAN
    {
        name: "Ant man",
        type: "movie",
        date: 2015,
        image: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AACA34C09158AA1B31ECD4CF9B8131F4D9E04DA415C900182D7902BE0C91484E/scale?width=1200&aspectRatio=1.78&format=jpeg",
        phase: "phase2",
        personages: [
            {name: "ant man"}
        ],
        collection:[
            {name: ""},
        ]
    },
    {
        name: "Ant-Man et la Guêpe",
        type: "movie",
        date: 2018,
        image: "https://freakingeek.com/wp-content/uploads/2018/06/AntManEtLaGu%C3%AApe-Banniere-800x445.jpg",
        phase: "phase3",
        personages: [
            {name: "ant man"}
        ],
        collection:[
            {name: ""},
        ]
    },
    {
        name: "Ant-Man et la Guêpe 3",
        type: "movie",
        date: 2023,
        image: "https://www.disneyphile.fr/wp-content/uploads/2021/07/ant-man-et-la-guepe-quantumania-tournage.jpg",
        phase: "phase5",
        personages: [
            {name: "ant man"}
        ],
        collection:[
            {name: ""},
        ]
    },

    //DOCTOR STRANGE
    {
        name: "Doctor strange",
        type: "movie",
        date: 2016,
        image: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/78BE4ABDBE00642AE6D6709FDD14AC6D7D816095752ECF13D3C9642AEA7B88C4/scale?width=1200&aspectRatio=1.78&format=jpeg",
        phase: "phase3",
        personages: [
            {name: "doctor strange"}
        ],
        collection:[
            {name: ""},
        ]
    },
    {
        name: "Doctor Strange 2",
        type: "movie",
        date: 2022,
        image: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D0E9FE53ECD79D4231B36371DE39CEB7362769503116ED4838A6B9D3C0DA1D1C/scale?width=1200&aspectRatio=1.78&format=jpeg",
        phase: "phase4",
        personages: [
            {name: "doctor strange"}
        ],
        collection:[
            {name: ""},
        ]
    },

    //gardiens de la galaxie
    {
        name: "Gardiens de la galaxie",
        type: "movie",
        date: 2014,
        image: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B044F3E2AE09C825BF2A4D18441715CFC58FA960D21D1095D30FEF0F413CB1A3/scale?width=1200&aspectRatio=1.78&format=jpeg",
        phase: "phase2",
        personages: [
            {name: ""}
        ],
        collection:[
            {name: ""},
        ]
    },
    {
        name: "Gardiens de la galaxie v2",
        type: "movie",
        date: 2017,
        image: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DE2D84D8D739D1F1D68E99DF5D280381B9C76E45DCA8A2C29DF96098CD5AF011/scale?width=1200&aspectRatio=1.78&format=jpeg",
        phase: "phase3",
        personages: [
            {name: ""}
        ],
        collection:[
            {name: ""},
        ]
    },
    
    //SPIDERMAN
    {
        name: "Spiderman homecoming",
        type: "movie",
        date: 2017,
        image: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BC43084FDE2395898283560F553EA284E5D9A65A3062564F9286891E0FD84F41/scale?width=1200&aspectRatio=1.78&format=jpeg",
        phase: "phase3",
        personages: [
            {name: "spiderman"},
            {name: "iron man"}
        ],
        collection:[
            {name: "iron man"},
        ]
    },
    {
        name: "Spiderman Far From Home",
        type: "movie",
        date: 2019,
        image: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1ABC3DB500EAB0472C2EA6EF1C3F5E925D2630A1E6E2243E9723967FD8E125F9/scale?width=1200&aspectRatio=1.78&format=jpeg",
        phase: "phase3",
        personages: [
            {name: "spiderman"},
            {name: "iron man"}
        ],
        collection:[
            {name: "iron man"},
        ]
    },
    {
        name: "Spider-Man: No Way Home",
        type: "movie",
        date: 2021,
        image: "https://occ-0-114-448.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABRDQOzGC_rInp4gFvqFPDF3mcWchowjepe5uTldav_Sx1QgJlpJG-ATT_PcYJbF-y5AtlC9koSScBJPATb4JET65SrkrgOl92SGl.jpg?r=c9b",
        phase: "phase4",
        personages: [
            {name: "spiderman"}
        ],
        collection:[
            {name: "iron man"},
        ]
    },
    
    //BLACK PANTHER
    {
        name: "Black Panther",
        type: "movie",
        date: 2017,
        image: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E9C4697F1745DEF68CD73B638BE6FCFB72B537788FB4F252E04B7BB745EE27A9/scale?width=1200&aspectRatio=1.78&format=jpeg",
        phase: "phase3",
        personages: [
            {name: "black panther"}
        ],
        collection:[
            {name: "black panther"},
        ]
    },
    {
        name: "Black Panther Wakanda Forever",
        type: "movie",
        date: 2022,
        image: "https://i1.wp.com/filmdaily.co/wp-content/uploads/2022/11/wakanda-5.jpeg",
        phase: "phase4",
        personages: [
            {name: "black panther"}
        ],
        collection:[
            {name: "black panther"},
        ]
    },

]

