let user = 0;
let computer = 0;

const choices = document.querySelectorAll(".choice");
const sms = document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const computerScorePara=document.querySelector("#Computer-score")



const generatechoice = () => {
    const option = ["rock", "paper", "scissor"];
    const randomIndex = Math.floor(Math.random() * 3);
    return option[randomIndex];

}

const draw = () => {
    
    sms.innerText = "Match draw.Play again";
    sms.style.backgroundColor="black";


}

const showwinner = (x,y,z) => {
    if (x) {
        user++;
        userScorePara.innerText=user;
    sms.innerText = `You win.Your ${y} beats computer ${z} `;
    sms.style.backgroundColor="green";

    } else {
        computer++;
        computerScorePara.innerText=computer;
    sms.innerText = `You loss.Computer ${z} beats your ${y} `;
    sms.style.backgroundColor="red";


    }
}

const playGame = (x) => {
    console.log("User choice ", x);
    const compchoice = generatechoice();
    console.log("Computer choice ", compchoice);
    if (x == compchoice) {
        draw();
    } else {
        let userwin = true;
        if (x == "rock") {
            userwin = compchoice == "paper" ? false : true;
        } else if (x == "paper") {
            userwin = compchoice == "scissor" ? false : true;

        } else {
            userwin = compchoice == "rock" ? false : true;
        }
        showwinner(userwin,x,compchoice);
    }



};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const clickedchoice = choice.getAttribute("id");
        playGame(clickedchoice);
    })
})