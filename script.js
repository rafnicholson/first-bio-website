const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";

document.querySelector("body").appendChild(h2);

addingEventListener = () => {
    const input = document.getElementById('button');
    const clickAlert = () => {
        alert("Hee Hee, that tickles!!!!");
    };
    input.addEventListener('click', clickAlert);
};

addingEventListener();

const phrases = {
  greeting: "Hello there!",
  time: () => {
    const currentTime = new Date();
    return `The time is ${currentTime.getHours()}:${currentTime.getMinutes()}`;
  }
}

phrases.greeting;
// => "Hello there!"
phrases.time();
// => "The time is 16:51" (or whatever time it is currently on a 24-hour clock)