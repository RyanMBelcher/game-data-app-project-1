var genre = document.getElementById('#genre');
var action = document.getElementById('#action');
var adventure = document.getElementById('#adventure');
var rpg = document.getElementById('#rpg');
var platformer = document.getElementById('#platformer');
var simulation = document.getElementById('#simulation');
var sports = document.getElementById('#sports');
var platform = document.getElementById('#platform');
var playstation = document.getElementById('#playstation');
var xbox = document.getElementById('#xbox');
var pc = document.getElementById('#pc');
var nintendo = document.getElementById('#nintendo');
var gotd = document.getElementById('#game-of-the-day');
var mostPlayed = document.getElementById('#most-played');
var gameOne = document.getElementById('#game1');
var gameTwo = document.getElementById('#game2');
var gameThree = document.getElementById('#game3');
var gameFour = document.getElementById('#game4');
var gameFive = document.getElementById('#game5');
var gameSix = document.getElementById('#game6');
var gameSeven = document.getElementById('#game7');
var gameEight = document.getElementById('#game8');
var gameNine = document.getElementById('#game9');
var gameTen = document.getElementById('#game10');
var userRated = document.getElementById('#user-rated');
var newgameOne = document.getElementById('#ratedgame1');
var newgameTwo = document.getElementById('#ratedgame2');
var newgameThree = document.getElementById('#ratedgame3');
var newgameFour = document.getElementById('#ratedgame4');
var newgameFive = document.getElementById('#ratedgame5');
var newgameSix = document.getElementById('#ratedgame6');
var newgameSeven = document.getElementById('#ratedgame7');
var newgameEight = document.getElementById('#ratedgame8');
var newgameNine = document.getElementById('#ratedgame9');
var newgameTen = document.getElementById('#ratedgame10');
var actionLink = '&genres=action'
var adventureLink = '&genres=adventure'
var rpgLink = '&genres=role-playing-games-rpg'
var simulationLink = '&genres=simulation'
var sportsLink = '&genres=sports'
var platformerLink = '&genres=platformer'
var strategyLink = '&genres=strategy'
var playstationLink = '&parent_platforms=2'
var pcLink = '&parent_platforms=1'
var xboxLink = '&parent_platforms=3'
var nintendoLink = '&parent_platforms=7'
var starterLink = 'https://api.rawg.io/api/games?key=7fe5813e90774b17a77f1b43d96e25df&page_size=1'
var firstkey = 'key=7fe5813e90774b17a77f1b43d96e25df';
var secondkey = 'f137cf1f3c1fd662bd0326d342bf09b81662bb59';

function getTen(data) {
    fetch('https://api.rawg.io/api/games?key=7fe5813e90774b17a77f1b43d96e25df&page_size=10&dates=2022-01-01,2022-12-31&ordering=-added')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (let i = 0; i < data.results.length; i++) {
                var daytas = data.results[i].name;
                console.log(daytas)
            }
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
function getOne(data) {
    fetch('https://api.rawg.io/api/games?key=7fe5813e90774b17a77f1b43d96e25df&page_size=1')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
        })
}
function randomGame() {
    fetch('https://api.rawg.io/api/games?key=7fe5813e90774b17a77f1b43d96e25df')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            const array = data.results
            const random1 = array[(Math.floor(Math.random() * (array.length)))]
            console.log(random1)
        })
}
console.log(randomGame())
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
getOne();