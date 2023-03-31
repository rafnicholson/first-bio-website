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