let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;//playerx playero// let turnX = true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,6],
    [2,4,6],
    [6,7,8],
    [3,4,5]
];

boxes.forEach((box)=>{
    box.addEventListener("click",() => {
        // console.log("box was clicked",)//fake
       if(turnO){//turn of o and turn o is close by the false 
            box.innerText = "O";
            turnO = false;
            box.style.color = "rgb(199, 39, 199)";
            
        }
        else{//turn of x and turn return of o ;
            box.innerText = "X";
           
           
            turnO = true;
             box.style.color = "red"

        }
        box.disabled = true;//box disbled never print double time 
    
         checkWinner();
       
        
    });
})


const checkWinner = () => {
    for(pattern of winPatterns){
        // console.log([pattern[0]], [pattern[1]],[pattern[2]]);//print all arr
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;//print onle box arr
        if(pos1Val != "" &&  pos2Val != "" &&  pos3Val != "")//value check when box are not empty
            {
                if(pos1Val === pos2Val && pos2Val === pos3Val){
                    console.log("winner", pos1Val);
                    showWinner(pos1Val);

                }

        }
    }
}


const showWinner = (winner) => {//winner are the pos1val 
    msg.innerText = `Congratulations Winner is ${winner}`;
    msgContainer.classList.remove("hide");//hide meg ate remove
    disabledboxes();
}
const disabledboxes = ()=> {//disbled button after winner
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableboxes = ()=> {//enble button after reset
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "" //for new game start all boxes are empty 
    }
}
const resetGame = ()=> {
    turnO = true;
    enableboxes();
    msgContainer.classList.add("hide")//hide msg are hide
}
newGameBtn.addEventListener("click",resetGame);//new game start
resetBtn.addEventListener("click", resetGame);// game are reset