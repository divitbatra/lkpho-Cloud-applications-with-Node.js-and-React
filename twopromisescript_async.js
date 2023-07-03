let promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved");
  }, 6000);
});

let promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved");
  }, 3000);
});

promiseOne.then((successMessage) => {
  console.log("From callback one: " + successMessage);
});

promiseTwo.then((successMessage) => {
  console.log("From callback two: " + successMessage);
});
