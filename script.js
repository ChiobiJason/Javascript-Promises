let p = new Promise((resolve, reject) => {
    let a = 2 + 1
    if (a == 2) {
        resolve("Success")
    } else {
        reject("Failed")
    }
});

p.then((message) => {
    console.log("This is in the then " + message);
}).catch((message) => {
    console.log("This is in the catch " + message);
})

let subscribedToChannel = false;

let userSuscribed = new Promise((resolve, reject) => {
    subscribedToChannel ? resolve("Happy") : reject("Sad")
})

userSuscribed.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
});

const recordVideoOne = new Promise((resolve, reject) => {
    resolve("video 1 is recorded");
});

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve("video 2 is recorded");
});

const recordVideoThree = new Promise((resolve, reject) => {
    resolve("video 3 is recorded");
});

Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) => {
    console.log(message);
})

Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) => {
    console.log(message);
})