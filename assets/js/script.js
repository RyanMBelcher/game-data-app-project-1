var genre = document.getElementById('genre');
var action = document.getElementById('action');
var adventure = document.getElementById('adventure');
var rpg = document.getElementById('rpg');
var platformer = document.getElementById('platformer');
var simulation = document.getElementById('simulation');
var sports = document.getElementById('sports');
var any = document.getElementById('all');
var platform = document.getElementById('platform');
var playstation = document.getElementById('playstation');
var xbox = document.getElementById('xbox');
var pc = document.getElementById('pc');
var nintendo = document.getElementById('nintendo');
var all = document.getElementById('alltwo');
var gotd = document.getElementById('game-of-the-day');
var mostPlayed = document.getElementById('most-played');
var userRated = document.getElementById('user-rated');
var generateBtn = document.getElementById('generate')
var actionLink = '&genres=action';
var adventureLink = '&genres=adventure';
var rpgLink = '&genres=role-playing-games-rpg';
var simulationLink = '&genres=simulation';
var sportsLink = '&genres=sports';
var platformerLink = '&genres=platformer';
var strategyLink = '&genres=strategy';
var playstationLink = '&parent_platforms=2';
var pcLink = '&parent_platforms=1';
var xboxLink = '&parent_platforms=3';
var nintendoLink = '&parent_platforms=7';
var starterLink = 'https://api.rawg.io/api/games?key=7fe5813e90774b17a77f1b43d96e25df&page_size=1';

var firstkey = 'key=7fe5813e90774b17a77f1b43d96e25df';

window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    let storedGame = localStorage.getItem('game');
    let pitem = document.createElement('p')
    pitem.textContent = storedGame
    let generatorbox = document.getElementById('the-box')
    generatorbox.appendChild(pitem)
});

function getTen(data) {
    fetch('https://api.rawg.io/api/games?key=7fe5813e90774b17a77f1b43d96e25df&page_size=10&dates=2022-01-01,2022-12-31&ordering=-added')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        for (let i = 0; i < data.results.length; i++) {
            var daytas = data.results[i].name;
            let listItem = document.createElement('li');
            listItem.textContent = daytas;
            let gamesList = document.getElementById('most-played');
            gamesList.appendChild(listItem)
        }
    })
};

function getTenMore(data) {
    fetch('https://api.rawg.io/api/games?key=7fe5813e90774b17a77f1b43d96e25df&page_size=10&dates=2022-01-01,2022-11-30&metacritic=88,100&ordering=-metacritic')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        for (let i = 0; i < data.results.length; i++) {
            var datas = data.results[i].name;
            let listitemTwo = document.createElement('li');
            listitemTwo.textContent = datas;
            let gameslistTwo = document.getElementById('user-rated');
            gameslistTwo.appendChild(listitemTwo)
        }
    })
};

function randomGame() {
    // gameplatformGenerator();
    var platformpick = document.getElementById('platformpick');
    console.log(platformpick.value);
    // platform variables
    var playstationLink = '&parent_platforms=2';
    var pcLink = '&parent_platforms=1';
    var xboxLink = '&parent_platforms=3';
    var nintendoLink = '&parent_platforms=7';
    // gamegenreGenerator();
    var genrepick = document.getElementById('genrepick');
    console.log(genrepick.value)
    // genre variables
    var actionLink = '&genres=action';
    var adventureLink = '&genres=adventure';
    var rpgLink = '&genres=role-playing-games-rpg';
    var simulationLink = '&genres=simulation';
    var sportsLink = '&genres=sports';
    var platformerLink = '&genres=platformer';
    var strategyLink = '&genres=strategy';
    var starterLink = 'https://api.rawg.io/api/games?key=7fe5813e90774b17a77f1b43d96e25df';

    if (platformpick.value === 'playstation') {
        starterLink = starterLink + playstationLink
    } else if (platformpick.value === 'pc') {
        starterLink = starterLink + pcLink
    } else if (platformpick.value === 'xbox') {
        starterLink = starterLink + xboxLink
    } else if (platformpick.value === 'nintendo') {
        starterLink = starterLink + nintendoLink
    } else {
        starterLink = starterLink
    }

    if (genrepick.value === 'action') {
        starterLink = starterLink + actionLink
    } else if (genrepick.value === 'adventure') {
        starterLink = starterLink + adventureLink
    } else if (genrepick.value === 'rpg') {
        starterLink = starterLink + rpgLink
    } else if (genrepick.value === 'platformer') {
        starterLink = starterLink + platformerLink
    } else if (genrepick.value === 'strategy') {
        starterLink = starterLink + strategyLink
    } else if (genrepick.value === 'sports') {
        starterLink = starterLink + sportsLink
    } else if (genrepick.value === 'simulation') {
        starterLink = starterLink + simulationLink
    } else {
        starterLink = starterLink
    }
    
    console.log(starterLink)

    fetch(starterLink)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
    const array = data.results
    const random1 = array[(Math.floor(Math.random() * (array.length)))]
    console.log(random1)
    let pitem = document.createElement('p')
    pitem.textContent = random1.name
    let generatorbox = document.getElementById('the-box')
    generatorbox.appendChild(pitem)
    
    localStorage.setItem('game', random1.name);
    })
};

function getPrice() {
    fetch('https://www.cheapshark.com/api/1.0/deals?storeID=11&sortBy=Savings&pageSize=10')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        for (let i = 0; i < data.length; i++) {
            var title = data[i].title;
            var normal = data[i].normalPrice;
            var sale = data[i].salePrice;

            console.log(sale)

            let li = document.createElement('li');
            li.textContent = title;
            let firstH = document.createElement('h1');
            firstH.textContent = 'Sale Price: $' + sale;
            let secondH = document.createElement('h2');
            secondH.textContent = 'Normal Price: $' + normal;

            let saleList = document.getElementById('gamez')
            saleList.appendChild(li);
            saleList.appendChild(firstH);
            saleList.appendChild(secondH);
        }
    })
}

getTen();
getTenMore();

console.log(getPrice())


generateBtn.addEventListener('click', randomGame);