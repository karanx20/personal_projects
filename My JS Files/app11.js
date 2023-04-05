//const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

//const doubles = numbers.map(function (num){
//return num * 2;
//})

//numbers.forEach(function (el) {
//if( el % 2 === 0){
//console.log(el)
//}
//})


//const movies =[
//    {
//        title : 'Ironman',
//        score : 99
//    },
//    {
//        title : 'Ipman',
//        score : 90
//    },
//    {
//        title : 'Parasite',
//        score : 95
//    },
//    {
//        title : 'Avengers',
//        score : 85
//    }
//]

//movies.forEach(function(movie){
//    console.log(`${movie.title} - ${movie.score}/100`)
//})

// By Map method*********************

//const title = movies.map(function (movie){
//    return movie.title.toUpperCase()
//})

// By Arrow function************************

//const rolllDie = () =>{
//    return Math.flloor(Math.random() * 6) + 1
//}

//const greet = 'x' =>{
//    return x;
//}


// By Implicit return******************************

//const movies =[
//    {
//        title : 'Ironman',
//        score : 99
//    },
//    {
//        title : 'Ipman',
//        score : 90
//    },
//   {
//        title : 'Parasite',
//        score : 95
//    },
//    {
//        title : 'Avengers',
//        score : 85
//        }
//]

//const newMovies = movies.map (movie => (
//    `${movie.title} - ${movie.score / 10}`
//))

// setTimeout & setInterval********************

//console.log("HELLO!!!...")
//setTimeout(() =>{
//    console.log("....are you still there???")
//},3000)
//console.log("GOODBYE!!!")

//const id = setInterval(() =>{
//    console.log(Math.random())
//}, 2000);

// clearInterval(id);

//const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

//numbers.filter(n => {
//    return n === 4
//})

//const movies =[
//    {
//        title : 'Ironman',
//        score : 99,
//        year : 2009
//    },
//    {
//        title : 'Ipman',
//        score : 90,
//        year : 2010
//    },
//   {
//        title : 'Parasite',
//        score : 95,
//        year : 2021
//    },
//    {
//        title : 'Bladerunner',
//        score : 77,
//        year : 2013
//    },    
//   {
//        title : 'Wonderwomen',
//        score : 97,
//        year : 2019
//    },
//    {
//        title : 'Justice League',
//        score : 70,
//        year : 2022
//    },
//    {
//        title : 'Venom',
//       score : 88,
//        year : 2020
//    },
//    {
//        title : 'X-MEN',
//        score : 99,
//        year : 2008
//    },
//    {
//        title : 'Flash',
//        score : 70,
//        year : 2023
//    }
//]

//const goodMovies = movies.filter(m => m.score > 80)
//const goodTitles = goodMovies.map(m => m.title)

//movies.filter(m => m.score > 80).map(m => m.title);
//const badMovies = movies.filter(m => m.score < 80)

//const recentMovies = movies.filter(m => m.year > 2010)

//*********************SomeEvery*************************

//const exams = [80, 98, 77, 86, 99, 75, 88, 84, 92, 81, 96, 72, 33]

//exams.every(score => score >= 75)

//const movies =[
//        {
//        title : 'Ironman',
//        score : 99,
//        year : 2009
//    },
//    {
//        title : 'Ipman',
//        score : 90,
//        year : 2010
//    },
//   {
//        title : 'Parasite',
//        score : 95,
//        year : 2021
//    },
//   {
//        title : 'Bladerunner',
//        score : 77,
//        year : 2013
//    },    
//   {
//        title : 'Wonderwomen',
//        score : 97,
//        year : 2019
//    },
//    {
//        title : 'Justice League',
//       score : 70,
//        year : 2022
//    },
//    {
//        title : 'Venom',
//       score : 88,
//        year : 2020
//    },
//    {
//        title : 'X-MEN',
//        score : 99,
//        year : 2008
//    },
//    {
//        title : 'Flash',
//        score : 70,
//        year : 2023
//    }
//]

//movies.some(movie => movie.year < 2015)


//***********************Reduce**********************************/

//const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

//const total = prices.reduce((total, value)=> total + value);

//minValue = prices.reduce((min, price) =>{
//    if(price > min){
//        return min
//    }
//    return price
//})

const movies =[
        {
        title : 'Ironman',
        score : 99,
        year : 2009
    },
    {
        title : 'Ipman',
        score : 90,
        year : 2010
    },
   {
        title : 'Parasite',
        score : 95,
        year : 2021
    },
   {
        title : 'Bladerunner',
        score : 77,
        year : 2013
    },    
   {
        title : 'Wonderwomen',
        score : 97,
        year : 2019
    },
    {
        title : 'Justice League',
       score : 70,
        year : 2022
    },
    {
        title : 'Venom',
       score : 88,
        year : 2020
    },
    {
        title : 'X-MEN',
        score : 99,
        year : 2008
    },
    {
        title : 'Flash',
        score : 70,
        year : 2023
    }
]

const highestRatedM = movies.reduce((highestM,lowestM)=> {
    if(highestM.score > lowestM.score){
        return highestM
    }
    return lowestM
})
    