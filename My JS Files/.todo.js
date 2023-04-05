//let input = prompt("what would you like to do?")
//const todo = ['Collect Chicken eggs','Clean Litter Box'];
//while ( input !== 'quit' && input !== 'q'){
//    if (input === 'list'){
//        console.log('************')
//        for (let i = 0; i < todo.length; i++){
//            console.log(`${i}: ${todo[i]}`);
//        }
//        console.log('************')
//    }else if (input === 'new'){
//        const newTodo = prompt('OK, what is the new todo?');
//        todo.push(newTodo);
//        console.log(`${newTodo} added to the list!`)
//    }else if (input === 'delete'){
//        const index = parseInt(prompt('OK, enter an index to delete:'));
//        if (!Number.isNaN(index)) {
//        const deleted = todo.splice(index, 1);
//        console.log(`OK, deleted ${deleted[0]}`);
//        } else {
//            console.log('Unknown index')
//        }
//    }
//    input = prompt("what would you like to do?")
//}
//console.log("OK, QUIT THE APP!")

//function rant(message){
//    console.log(message.toUpperCase());
//        console.log(message.toUpperCase());
//    console.log(message.toUpperCase());
//}

//function isSnakeEyes(roll1,roll2){
//    if(roll2 !== roll1){
//        console.log("Not Snake Eyes!");}
//        else{
//            console.log("Snake Eyes!")
//        }
//}

let daysofweek = {1:'Monday',2:'Tuesday',3:'Wednesday',4:'Thursday',5:'Friday'};
function returnDay(daysofweek){
   if (daysofweek < 1 && daysofweek > 7){
       return null;
   }else{ 
return daysofweek;
    }
}





  
