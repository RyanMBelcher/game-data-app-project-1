var popular = document.getElementById('#popular')
var generateRandom = document.getElementById('#generate')

const firstkey = 'key=7fe5813e90774b17a77f1b43d96e25df';
const secondkey = 'f137cf1f3c1fd662bd0326d342bf09b81662bb59';

function getTen(data) {
    fetch('https://api.rawg.io/api/games?key=7fe5813e90774b17a77f1b43d96e25df&page_size=10&dates=2022-01-01,2022-12-31&ordering=-added')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        var gameName = 


    })
}

function getTenMore(data) {
    fetch('https://api.rawg.io/api/games?key=7fe5813e90774b17a77f1b43d96e25df&page_size=10&dates=2022-01-01,2022-11-30&metacritic=88,100&ordering=-metacritic')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
    })
}


// GET RANDOM GAME

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   };

// 'https://api.rawg.io/api/games?key=7fe5813e90774b17a77f1b43d96e25df&page_size=1' (getRawgCount)
// function getRawgCount() {
//       const response = await axios({
//         url: 'https://api.rawg.io/api/games?key=7fe5813e90774b17a77f1b43d96e25df&page_size=1',
//         method: 'GET'
//       });
//       return response.data.count;}

// `https://api.rawg.io/api/games?key=7fe5813e90774b17a77f1b43d96e25df&page=${number}&page_size=' (fetchRawgSlug)
// function fetchRawgSlug(number) {
//       const response = await axios({
//         url: `https://api.rawg.io/api/games?key=7fe5813e90774b17a77f1b43d96e25df&page=${number}&page_size=1',
//         method: 'GET'
//       });
//       return response.data.results[0].slug;
//   }

// pickrandomgame() {
    // var count = await getRawgCount();
    // var randomNumber = getRandomInt(1, count);
    // var slug = await fetchRawgSlug(randomNumber);
    // open('https://rawg.io/games/' + slug);
//   }


// LATEST GAMES
// 'https://api.rawg.io/api/games?key=7fe5813e90774b17a77f1b43d96e25df&dates=2022-11-01,2022-12-01'


// REVIEWS
// 'https://www.giantbomb.com/api/user_reviews/?api_key=f137cf1f3c1fd662bd0326d342bf09b81662bb59'
// Pull parameter 'score' to reveal general user score
// MATCH API PARAMETERS 'slug'='game' OR 'name'='game'. Parameter 'game' belongs to giantbomb, parameter 'slug'/'name' belongs to RAWG.

// FILTER GENRE
// 'https://api.rawg.io/api/games?key=7fe5813e90774b17a77f1b43d96e25df&genres=action'
// 'https://api.rawg.io/api/games?key=7fe5813e90774b17a77f1b43d96e25df&genres=adventure'
// 'https://api.rawg.io/api/games?key=7fe5813e90774b17a77f1b43d96e25df&genres=role-playing-games-rpg'
// 'https://api.rawg.io/api/games?key=7fe5813e90774b17a77f1b43d96e25df&genres=platformer'
// 'https://api.rawg.io/api/games?key=7fe5813e90774b17a77f1b43d96e25df&genres=simulation'
// 'https://api.rawg.io/api/games?key=7fe5813e90774b17a77f1b43d96e25df&genres=strategy'
// 'https://api.rawg.io/api/games?key=7fe5813e90774b17a77f1b43d96e25df&genres=sports'

// FILTER PLATFORM
// 'https://api.rawg.io/api/games?key=7fe5813e90774b17a77f1b43d96e25df&parent_platforms=1'
// PC
// 'https://api.rawg.io/api/games?key=7fe5813e90774b17a77f1b43d96e25df&parent_platforms=2'
// Playstation
// 'https://api.rawg.io/api/games?key=7fe5813e90774b17a77f1b43d96e25df&parent_platforms=3'
// Xbox
// 'https://api.rawg.io/api/games?key=7fe5813e90774b17a77f1b43d96e25df&parent_platforms=7'
// Nintendo

getTen();
getTenMore();