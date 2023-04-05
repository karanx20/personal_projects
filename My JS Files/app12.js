//function rollDie(numSides){
//    if (numSides === undefined){
//        numSides = 6
//    }
//    return Math.floor(Math.random() * numSides) + 1
//}

//***********************By Param****************************
//function rollDie(numSides = 6){
//    return Math.floor(Math.random() * numSides) + 1
//}

//function greet(person, msg = "Hey there", punc = '!'){
//    console.log(`${msg}, ${person}, ${punc}`)
//}

//****************************Spread**********************************

//const nums = [2, 4, 5, 1, 3, 10, 7, 9, 11, 26, 52, 62, 1001]

//const cats = ['Blue','Kitta','Kalu'];
//const dogs = ['Rusty','Simba'];
//const allPets = [123,...cats, ...dogs,"Snake"]

//const feline = {legs : 4, family : 'felidae'};
//const canine = {isFurry : true, family : 'Caninae'};


//*****************************Rest********************************/

function raceResults(gold, silver, ...everyoneElse){
    console.log(`Gold medal goes to ${gold}`)
    console.log(`Silver medal goes to ${silver}`)
    console.log(`AND THANKS TO EVERYONE ELSE ${everyoneElse}`)
}


//*****************************************************Destructuring********************************************/

//const scores = [50, 30, 20, 19, 15, 11, 9]

//const [first, second, third, ...everyoneElse] = scores;

//const user = {
//email : 'karanx20@gmail.com',
//password : 'yolo123',
//firstName : 'Karan',
//lastName : 'Sharma',
//born : 1996,
//bio : 'Karan Sharma is an energetic guy',
//city : 'New Delhi',
//state : 'New Delhi'
//}

//const {email, firstName, lastName, city, bio} = user;
//const {born : birthYear} = user;

//const user = {
//    email : 'karanx20@gmail.com',
//    password : 'yolo123',
//    firstName : 'Karan',
//    lastName : 'Sharma',
//    born : 1996,
//    bio : 'Karan Sharma is an energetic guy',
//    city : 'New Delhi',
//    state : 'New Delhi'
//    }

//    const user2 = {
//        email : 'Vinx20@gmail.com',
//        firstName : 'Sam',
//        lastName : 'Malik',
//        born : 2001,
//        died : 2021,
//        city : 'Faridabad',
//        state : 'Haryana'
//        }

//const {city, state} = user
//   const {city, state, bio : Anything = 'YOLO'} = user2  
   

//******************************************Destructuring Params***************************/

const user = {
    email : 'karanx20@gmail.com',
    password : 'yolo123',
    firstName : 'Karan',
    lastName : 'Sharma',
    born : 1996,
    bio : 'Karan Sharma is an energetic guy',
    city : 'New Delhi',
    state : 'New Delhi'
    }

    function fullName({firstName, lastName}){
        return `${firstName} ${lastName}`
    }

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

//movies.filter(({score}) => score >= 90) 

//movies.map(movie => {
//    return `${movie.title}, ${movie.year} is rated ${movie.score}`
//})

movies.map(({title, year, score}) => {
    return `${title}, ${year} is rated ${score}`
})
