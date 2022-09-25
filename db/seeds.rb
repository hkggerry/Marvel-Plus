# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Member.create(id: 1, username:"theavengers001", password:"iamgroot")

Movie.create([
    {
        id: 1,
        name: "Guardians of the Galaxy Vol.2",
        release_date: "2017",
        rating: "7.6",
        image_url: "https://i.pinimg.com/736x/af/8f/3c/af8f3ccbff88257234e29269a386b24b--top-movies-watch-movies.jpg",
        short_description: "Peter Quill and his fellow Guardians are hired by a powerful alien race, the Sovereign, to protect their precious batteries from invaders. When it is discovered that Rocket has stolen the items they were sent to guard, the Sovereign dispatch their armada to search for vengeance. As the Guardians try to escape, the mystery of Peter's parentage is revealed."
    },
    {
        id: 2,
        name: "Avengers: Endgame",
        release_date: "2019",
        rating: "8.4",
        image_url: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
        short_description: "Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe."
    },
    {
        id: 3,
        name: "Doctor Strange",
        release_date: "2016",
        rating: "7.5",
        image_url: "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_.jpg",
        short_description: "Dr. Stephen Strange's (Benedict Cumberbatch) life changes after a car accident robs him of the use of his hands. When traditional medicine fails him, he looks for healing, and hope, in a mysterious enclave. He quickly learns that the enclave is at the front line of a battle against unseen dark forces bent on destroying reality. Before long, Strange is forced to choose between his life of fortune and status or leave it all behind to defend the world as the most powerful sorcerer in existence."
    },
    {
        id: 4,
        name: "Thor: Ragnarok",
        release_date: "2017",
        rating: "7.9",
        image_url: "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
        short_description: "Imprisoned on the other side of the universe, the mighty Thor finds himself in a deadly gladiatorial contest that pits him against the Hulk, his former ally and fellow Avenger. Thor's quest for survival leads him in a race against time to prevent the all-powerful Hela from destroying his home world and the Asgardian civilization."
    },
    {
        id: 5,
        name: "Thor: Love and Thunder",
        release_date: "2022",
        rating: "6.7",
        image_url: "https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
        short_description: "Thor embarks on a journey unlike anything he's ever faced -- a quest for inner peace. However, his retirement gets interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods. To combat the threat, Thor enlists the help of King Valkyrie, Korg and ex-girlfriend Jane Foster, who -- to his surprise -- inexplicably wields his magical hammer. Together, they set out on a harrowing cosmic adventure to uncover the mystery of the God Butcher's vengeance."
    },
    {
        id: 6,
        name: "Black Panther",
        release_date: "2018",
        rating: "7.3",
        image_url: "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg",
        short_description: "Thousands of years ago, five African tribes war over a meteorite containing the metal vibranium. One warrior ingests a heart-shaped herb affected by the metal and gains superhuman abilities, becoming the first Black Panther. He unites all but the Jabari Tribe to form the nation of Wakanda."
    }
])

Review.create([
    {
        comments: "The Guardians of the Galaxy saved the entire world once again" ,
        member_id: 1,
        movie_id: 1
    },
    {
        comments: "Best MOVIE EVER" ,
        member_id: 1,
        movie_id: 2
    },
    {
        comments: "Doctor Strange's cape is way too OP" ,
        member_id: 1,
        movie_id: 3
    },
    {
        comments: "Favorite Thor movie out of all" ,
        member_id: 1,
        movie_id: 4
    },
    {
        comments: "Wakanda Forever!" ,
        member_id: 1,
        movie_id: 6
    },
    {
        comments: "Can't wait for the second movie to come" ,
        member_id: 1,
        movie_id: 6
    },
    {
        comments: "Can't believe this is our last adventure with Captain America" ,
        member_id: 1,
        movie_id: 2
    },
    {
        comments: "Got us audience speechless and tearing up hard!" ,
        member_id: 1,
        movie_id: 2
    },
    {
        comments: "I AM GROOT!!" ,
        member_id: 1,
        movie_id: 1
    }

])

Actor.create([
    {
        id: 1,
        name: "Chris Pratt",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Chris_Pratt_2018.jpg/800px-Chris_Pratt_2018.jpg"
    },
    {
        id: 2,
        name: "Zoe Saldaña",
        image_url: "https://m.media-amazon.com/images/I/A17U0p11SkL._AC_SL1500_.jpg"
    },
    {
        id: 3,
        name: "Karen Gillan",
        image_url: "https://flxt.tmsimg.com/assets/572089_v9_bd.jpg"
    },
    {
        id: 4,
        name: "Dave Bautista",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Dave_Bautista_by_Gage_Skidmore_2.jpg/170px-Dave_Bautista_by_Gage_Skidmore_2.jpg"
    },
    {
        id: 5,
        name: "Christ Hemsworth",
        image_url: "https://cdn.britannica.com/92/215392-050-96A4BC1D/Australian-actor-Chris-Hemsworth-2019.jpg"
    },
    {
        id: 6,
        name: "Christ Evans",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Mark_Kassen%2C_Tony_C%C3%A1rdenas_and_Chris_Evans_%28cropped%29.jpg/220px-Mark_Kassen%2C_Tony_C%C3%A1rdenas_and_Chris_Evans_%28cropped%29.jpg"
    },
    {
        id: 7,
        name: "Robert Downey Jr.",
        image_url: "https://m.media-amazon.com/images/M/MV5BNzg1MTUyNDYxOF5BMl5BanBnXkFtZTgwNTQ4MTE2MjE@._V1_.jpg"
    },
    {
        id: 8,
        name: "Mark Ruffalo",
        image_url: "https://flxt.tmsimg.com/assets/43389_v9_bc.jpg"
    },
    {
        id: 9,
        name: "Scarlett Johansson",
        image_url: "https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_.jpg"
    },
    {
        id: 10,
        name: "Benedict Cumberbatch",
        image_url: "https://media.vanityfair.com/photos/580a0b41ceb79a6c5ca4c5ef/2:3/w_640,h_960,c_limit/benedict-cumberbatch-doctor-strange.jpg"
    },
    {
        id: 11,
        name: "Chadwick Boseman",
        image_url: "https://static01.nyt.com/images/2020/08/30/multimedia/30boseman-obit-print3/29xp-boseman-blackpanther-mobileMasterAt3x.jpg"
    },
    {
        id: 12,
        name: "Michael B. Jordan",
        image_url: "https://m.media-amazon.com/images/M/MV5BMjExOTY3NzExM15BMl5BanBnXkFtZTgwOTg1OTAzMTE@._V1_.jpg"
    },
    {
        id: 13,
        name: "Letitia Wright",
        image_url: "https://pyxis.nymag.com/v1/imgs/527/c00/860427b101cded62998c8948b1cb42d75b-letitia-wright.jpg"
    },
    {
        id: 14,
        name: "Natalie Portman",
        image_url: "https://m.media-amazon.com/images/M/MV5BYzU0ZGRhZWItMGJlNy00YzlkLWIzOWYtNDA2NzlhMDg3YjMwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg"
    },
    {
        id: 15,
        name: "Lupita Nyong'o",
        image_url: "https://m.media-amazon.com/images/M/MV5BMTY0NTQ4MDY2Nl5BMl5BanBnXkFtZTgwNDk1MTEyMDE@._V1_.jpg"
    },
    {
        id: 16,
        name: "Tom Hiddleston",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Tom_Hiddleston_%2836109110291%29_%28cropped%29.jpg/1200px-Tom_Hiddleston_%2836109110291%29_%28cropped%29.jpg"
    }
])

MovieActor.create([
    {
        id: 1,
        movie_id: 1,
        actor_id: 1
    },
    {
        id: 2,
        movie_id: 1,
        actor_id: 2
    },
    {
        id: 3,
        movie_id: 1,
        actor_id: 3
    },
    {
        id: 4,
        movie_id: 1,
        actor_id: 4
    },
    {
        id: 5,
        movie_id: 2,
        actor_id: 5
    },
    {
        id: 6,
        movie_id: 2,
        actor_id: 6
    },
    {
        id: 7,
        movie_id: 2,
        actor_id: 7
    },
    {
        id: 8,
        movie_id: 2,
        actor_id: 8
    },
    {
        id: 9,
        movie_id: 2,
        actor_id: 9
    },
    {
        id: 10,
        movie_id: 10,
        actor_id: 10
    },
    {
        id: 11,
        movie_id: 2,
        actor_id: 11
    },
    {
        id: 12,
        movie_id: 6,
        actor_id: 12
    },
    {
        id: 13,
        movie_id: 6,
        actor_id: 13
    },
    {
        id: 14,
        movie_id: 5,
        actor_id: 14
    },
    {
        id: 15,
        movie_id: 6,
        actor_id: 15
    },
    {
        id: 16,
        movie_id: 4,
        actor_id: 16
    },
    {
        id: 17,
        movie_id: 2,
        actor_id: 1
    },
    {
        id: 18,
        movie_id: 2,
        actor_id: 2
    },
    {
        id: 19,
        movie_id: 3,
        actor_id: 10
    },
    {
        id: 20,
        movie_id: 4,
        actor_id: 5
    },
    {
        id: 21,
        movie_id: 5,
        actor_id: 4
    },
    {
        id: 22,
        movie_id: 5,
        actor_id: 5
    },
    {
        id: 23,
        movie_id: 4,
        actor_id: 8
    },
    {
        id: 24,
        movie_id: 2,
        actor_id: 3
    },
    {
        id: 25,
        movie_id: 6,
        actor_id: 11
    },
    {
        id: 26,
        movie_id: 2,
        actor_id: 15
    },
    {
        id: 27,
        movie_id: 2,
        actor_id: 13
    },
    {
        id: 28,
        movie_id: 2,
        actor_id: 10
    }

])