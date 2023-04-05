const subreddits = ['cringe','books','chickens','funny','pics','soccer','gunners']

for (let subreddit of subreddits){
    console.log('Visit reddit.com/r/${subreddit}')
}

const seatingChart = [
    ['Karan','Jagrit','Pratyush'],
    ['Rohit','Nikhil','Tarun','Alina'],
    ['Himanshu','Niraj','Dylan','Nitesh']
]

for (let row of seatingChart){
    for(let student of row){
        console.log(student);
    }
}

for(char of "hello world"){
    console.log(char);
}