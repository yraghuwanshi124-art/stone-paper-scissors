let userscore = 0
let compscore = 0

const choices = document.querySelectorAll(".choice");


const Computerchoice = (user) => {
    let option = ["rock","papper","scissors"];
    const idx = Math.floor(Math.random() * 3);
    return option[idx];

}

let p = document.querySelector("#result-desc");
let h = document.querySelector("#result-tittle");
let us = document.querySelector("#user-score");
let cs = document.querySelector("#comp-score");
let d = document.querySelector("#draw");
let newgame = document.querySelector("#msg1")
let u = document.querySelector("#u-choice")
let c = document.querySelector("#c-choice")

newgame.addEventListener("click" , () => {
    us.innerText = 0;
    cs.innerText = 0;
    d.innerText = 0;
    // p.style.backgroundColor = "#081b31"
    p.innerText = ""
    h.innerText = ""

})



const playgame = (user) => {
    u.innerText = user
    const comp = Computerchoice();
    c.innerText = comp

    if (user === comp){
        p.innerText = ""
        h.innerText = "It's Draw"
        h.style.color = "orange"
        d.innerText++;

    }
    else if (user == "rock" && comp == "papper"){
        p.innerText = "papper beats rock"
        h.innerText = "You lost!"
        h.style.color = "red"
        cs.innerText++
    }
    else if (user == "rock" && comp == "scissors"){
        p.innerText = "rock beats scissors"
        h.innerText = "You win!"
        h.style.color = "green";
        us.innerText++
    }
    else if (user == "scissors" && comp == "rock"){
        p.innerText = "scissors beats papper"
        h.innerText = "You lost!"
        h.style.color = "red"
        cs.innerText++
    }
    else if (user == "scissors" && comp == "papper"){
        p.innerText = "scissors beats papper"
        h.innerText = "You win!"
        h.style.color = "green";
        us.innerText++
    }
    else if (user == "papper" && comp == "scissors"){
        p.innerText = "scissors beats papper"
        h.innerText = "You win!"
        h.style.color = "green"
        us.innerText++
    }
    else if (user == "papper" && comp == "rock"){
        p.innerText ="papper beats rock"
        h.innerText = "You lost!"
        h.style.color = "red";
        cs.innerText++


    }
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const user = choice.getAttribute("id")
        playgame(user)

    });
});


