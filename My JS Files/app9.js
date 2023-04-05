const testScores = {
    Keenan : 80,
    Damon : 89,
    Keman : 82,
    Keena : 70,
    Nenan : 69,
    Aish : 62,
    Doraemon : 72,
    Zorro : 79,
    Protto : 55,
    Soparo : 99
}

//for (let person in testScores){
//    console.log(`${person} scored: ${testScores[person]}`);
//}

let total = 0;
let scores = Object.values(testScores);
for (let score of scores){
    total += score;
}
console.log(total/scores.length)