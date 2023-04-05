//function callTwice(func){
//    func();
//    func();
//}
//function callTenTimes(f){
//    for(let i = 0; i < 10; i++){
//        f()
//    }
//}
//function rollDie(){
//    const roll = Math.floor(Math.random()*6)+1;
//    console.log(roll)
//}
//callTwice(rollDie)

//Returning function
//function makeBetweenFunc(min, max){
//    return function (num){
//        return num >= min && num <= max;
//    }
//}

//***********Adding Methods to an object, app10.js************
//const myMath = {
//    PI: 3.14159,
//    square(num){
//        return num*num;
//    }, 
//cube(num){
//    return num ** 3;
//}
//}

//*******************************
//const hen = {
//    name : 'Helen',
//    eggcount : 0,
//    layAnEgg(){
//    if hen.eggcount;
//console.log (`${this.name}, ${this.eggcount}, ${this.layAnEgg()}`);
//    }
//  };
//  const EGG = hen.layAnEgg;

//const hen = {
//    name : 'Helen',
//    eggCount : 0,
//    layAnEgg(){ 
//        if(hen.eggCount = hen.eggCount + 1);
//        console.log( `${this.eggCount}, EGG`);
//        
//       console.log (`${this.name}, ${this.eggCount}, ${this.layAnEgg()}`);
//        
//  }
//  };


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

numbers.forEach(function (el) {
if( el % 2 === 0){
console.log(el)
}
})