# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Member.create(username:"theavengers001", password:"iamgroot")



Movie.create([
    {
        name: "Guardians of the Galaxy Vol.2",
        release_date: "2017",
        rating: "7.6",
        image_url: "https://i.pinimg.com/736x/af/8f/3c/af8f3ccbff88257234e29269a386b24b--top-movies-watch-movies.jpg",
        short_description: "Peter Quill and his fellow Guardians are hired by a powerful alien race, the Sovereign, to protect their precious batteries from invaders. When it is discovered that Rocket has stolen the items they were sent to guard, the Sovereign dispatch their armada to search for vengeance. As the Guardians try to escape, the mystery of Peter's parentage is revealed."
    },
    {
        name: "Avengers: Endgame",
        release_date: "2019",
        rating: "8.4",
        image_url: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
        short_description: "Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe."
    },
    {
        name: "Doctor Strange",
        release_date: "2016",
        rating: "7.5",
        image_url: "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_.jpg",
        short_description: "Dr. Stephen Strange's (Benedict Cumberbatch) life changes after a car accident robs him of the use of his hands. When traditional medicine fails him, he looks for healing, and hope, in a mysterious enclave. He quickly learns that the enclave is at the front line of a battle against unseen dark forces bent on destroying reality. Before long, Strange is forced to choose between his life of fortune and status or leave it all behind to defend the world as the most powerful sorcerer in existence."
    },
    {
        name: "Thor: Ragnarok",
        release_date: "2017",
        rating: "7.9",
        image_url: "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
        short_description: "Imprisoned on the other side of the universe, the mighty Thor finds himself in a deadly gladiatorial contest that pits him against the Hulk, his former ally and fellow Avenger. Thor's quest for survival leads him in a race against time to prevent the all-powerful Hela from destroying his home world and the Asgardian civilization."
    },
    {
        name: "Thor: Love and Thunder",
        release_date: "2022",
        rating: "6.7",
        image_url: "https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
        short_description: "Thor embarks on a journey unlike anything he's ever faced -- a quest for inner peace. However, his retirement gets interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods. To combat the threat, Thor enlists the help of King Valkyrie, Korg and ex-girlfriend Jane Foster, who -- to his surprise -- inexplicably wields his magical hammer. Together, they set out on a harrowing cosmic adventure to uncover the mystery of the God Butcher's vengeance."
    },
    {
        name: "Black Panther",
        release_date: "2018",
        rating: "7.3",
        image_url: "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg",
        short_description: "Thousands of years ago, five African tribes war over a meteorite containing the metal vibranium. One warrior ingests a heart-shaped herb affected by the metal and gains superhuman abilities, becoming the first Black Panther. He unites all but the Jabari Tribe to form the nation of Wakanda."
    }
])

Actor.create([
    {
        name: "Chris Pratt",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Chris_Pratt_2018.jpg/800px-Chris_Pratt_2018.jpg",
        movie_id: 1
    },
    {
        name: "Zoe Saldaña",
        image_url: "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2020_32/3402271/200805-zoe-saldana-jm-1008.jpg",
        movie_id: 1
    },
    {
        name: "Karen Gillan",
        image_url: "https://flxt.tmsimg.com/assets/572089_v9_bd.jpg",
        movie_id: 1
    },
    {
        name: "Dave Bautista",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Dave_Bautista_by_Gage_Skidmore_2.jpg/170px-Dave_Bautista_by_Gage_Skidmore_2.jpg",
        movie_id: 1
    },
    {
        name: "Christ Hemsworth",
        image_url: "https://cdn.britannica.com/92/215392-050-96A4BC1D/Australian-actor-Chris-Hemsworth-2019.jpg",
        movie_id: 1
    },
    {
        name: "Christ Evans",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Mark_Kassen%2C_Tony_C%C3%A1rdenas_and_Chris_Evans_%28cropped%29.jpg/220px-Mark_Kassen%2C_Tony_C%C3%A1rdenas_and_Chris_Evans_%28cropped%29.jpg",
        movie_id: 1
    },
    {
        name: "Robert Downey Jr.",
        image_url: "https://m.media-amazon.com/images/M/MV5BNzg1MTUyNDYxOF5BMl5BanBnXkFtZTgwNTQ4MTE2MjE@._V1_.jpg",
        movie_id: 1
    },
    {
        name: "Mark Ruffalo",
        image_url: "https://flxt.tmsimg.com/assets/43389_v9_bc.jpg",
        movie_id: 1
    },
    {
        name: "Scarlett Johansson",
        image_url: "https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_.jpg",
        movie_id: 1
    },
    {
        name: "Benedict Cumberbatch",
        image_url: "https://pyxis.nymag.com/v1/imgs/f47/788/caac0f6d9bc8edc26a8c8b17d69a41e447-02-sherlock.rsquare.w330.jpg",
        movie_id: 1
    },
    {
        name: "Chadwick Boseman",
        image_url: "https://www.biography.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU0ODc4NDQ5OTM5MzkyMTkz/gettyimages-931925994-square.jpg",
        movie_id: 1
    },
    {
        name: "Michael B. Jordan",
        image_url: "https://m.media-amazon.com/images/M/MV5BMjExOTY3NzExM15BMl5BanBnXkFtZTgwOTg1OTAzMTE@._V1_.jpg",
        movie_id: 1
    },
    {
        name: "Letitia Wright",
        image_url: "https://pyxis.nymag.com/v1/imgs/527/c00/860427b101cded62998c8948b1cb42d75b-letitia-wright.jpg",
        movie_id: 1
    },
    {
        name: "Natalie Portman",
        image_url: "https://m.media-amazon.com/images/M/MV5BYzU0ZGRhZWItMGJlNy00YzlkLWIzOWYtNDA2NzlhMDg3YjMwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
        movie_id: 1
    },
    {
        name: "Lupita Nyong'o",
        image_url: "https://m.media-amazon.com/images/M/MV5BMTY0NTQ4MDY2Nl5BMl5BanBnXkFtZTgwNDk1MTEyMDE@._V1_.jpg",
        movie_id: 1
    },
    {
        name: "Tom Hiddleston",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Tom_Hiddleston_%2836109110291%29_%28cropped%29.jpg/1200px-Tom_Hiddleston_%2836109110291%29_%28cropped%29.jpg",
        movie_id: 1
    }
])
