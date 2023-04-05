//console.log(1)
//console.log(2)
//console.log(3)
//console.log(4)
//console.log(5)
//console.log(6)
//console.log(7)
//console.log(8)
//console.log(9)
//console.log(10)

//for (let i = 1; i <= 10; i++){
//    console.log(i);
//}

//for (let i = 2; i <= 20; i +=2){
//    console.log(i);
//}

//for (let i = 100; i >= 0; i -=10){
//    console.log(i);
//}

//for (let i = 10; i <= 1000; i *= 10){
//    console.log(i);
//}

//for (let i = 25; i >= 0; i -= 5){
//    console.log(i);
//}

//const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

//for (let i = 0; i <= people.length; i++){
//    console.log(people[i].toUpperCase());
//}

const seatingChart = [
    ['Karan','Jagrit','Pratyush'],
    ['Rohit','Nikhil','Tarun','Alina'],
    ['Himanshu','Niraj','Dylan','Nitesh']
]
for (let i = 0; i < seatingChart.length; i++){
    const row = seatingChart[i];
    console.log(`ROW #${i + 1}`)
    for (let j = 0; j < row.length; j++){
    console.log(row [j]);    
}
}