//let random= Math.random();
//if(random < 0.5){
//    console.log("YOUR NUMBER IS LESS THAN 0.5!!!")
//    console.log(random);
//}
//else{
//    console.log("YOUR NUMBER IS GREATER (OR EQUAL) THAN 0.5!!!")
//    console.log(random);
//}

//const dayOfweek = prompt("ENTER A DAYS").toLowerCase();
//if (dayOfweek ==='monday'){
//    console.log("I HATE MONDAYS!")
//}
//else if (dayOfweek ==='saturday'){
//    console.log("I LOVE SATURDAYS!")
//}
//else if (dayOfweek ==='friday'){
//    console.log("FRIDAYS ARE DECENT!")
//}
//else{
//    console.log("MEH!")
//}

// 0-5 - FREE
// 5-10 - 10 CHILD $10
// 10-65 - 65 ADULT $20
// 65+ SENIOR $10

//const age = 88;

//if(age < 5){
//    console.log("You are a baby, it's FREE")
//}
//else if(age < 10){
//    console.log("You're a child, it's $10")
//}
//else if(age < 65){
//    console.log("You're an adult, it's $20")
//}
//else{
//    console.log("You're a senior, it's $10")
//}

// Nesting Conditionals
const password = prompt("enter a new password");
//password must be 6+ characters
if(password.length >= 6){
//password cannot include space
if (password.indexOf('')!== -1){
    console.log("Valid Password!")
}
else{
    console.log("Password cannot contain spaces!")
}
}
else{
    console.log("Password too short!! Must contain 6+ characters")
}