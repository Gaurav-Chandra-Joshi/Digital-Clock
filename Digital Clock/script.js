let hrs = document.querySelector("#hrs");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");
let heading = document.getElementById("heading");
let time = Array.from(document.getElementsByClassName("time"));



setInterval(function () {
    let currentTime = new Date();

    let hour = currentTime.getHours();
    let minute = currentTime.getMinutes();
    let second = currentTime.getSeconds();

    hrs.textContent = hour > 12 ? hour - 12 : hour;
    min.textContent = minute;
    sec.textContent = second;

    time.forEach((e) => {
        a = e.children[0].textContent;
        if (a.length < 2) e.children[0].textContent = `0${a}`
    })
}, 1000)

function greeting(hour) {
    let greeting;

    if (hour < 6 || hour > 22) greeting = "Good Night Buddy!"
    else if (hour < 12) greeting = "Good Morning Buddy!"
    else if (hour < 18) greeting = "Good Afternoon Buddy!"
    else if (hour < 22) greeting = "Good Evening Buddy!"
    return greeting;
}

function name() {
    let name;
    let response = confirm('Can you share your name?');
    if (response === true) {
        name = prompt("Please enter your name?");
        localStorage.setItem("name", name);
    }

    return name;
}

setTimeout(() => {
    let currentTime = new Date();
    let hour = currentTime.getHours();

    let userName = `"${name()}"`
    console.log(userName);

    let userGreeting = greeting(hour);
    console.log(userGreeting.split(" ").splice(0, 2).concat(userName).join(" "));

    let greetingWithName = userGreeting.split(" ").slice(0, 2).concat(userName).join(" ");
    heading.textContent = greetingWithName;
}, 1000)
