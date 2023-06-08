
//Query Selector also does a better job of 
//grabbing elements which are generated after the application loads.
const board= document.querySelector("#Board");//global variable
const indis= document.getElementById("info");//global variable
const startCells=["","","","","","","","",""] //global variables

//allows circle first
let turn ="Circle"; 
indis.innerText="Circle goes first";
indis.style.fontSize="x-large";

let restart = false;//tracks status of reset

//funtion to put board together
function createBoard(){
// takes away reset button if board is clear
document.getElementById("restart").style.display="none";
//this builds 9 squares and adds to the gameboard
startCells.forEach((cell,index) =>
{
    const cellElement=document.createElement("div");
    cellElement.classList.add("square");
    cellElement.id=index;
    cellElement.addEventListener("click",takeTurn);
    Board.append(cellElement);
})
};
createBoard();
//checks which turn it is
function takeTurn(event){
    const newSquare = document.createElement("div");
const target = event.currentTarget;
//this function checks for valid move
if(checkItem(target,turn)&& !restart){
    newSquare.classList.add(turn);
    event.target.append(newSquare);
    if(checkState(turn)){
        indis.innerText=turn + " wins the game!!!";
        restart = true;
        document.getElementById("restart").style.display="inline";
    // if ((checkState = true)&&){
    //     indis.innerText="Game is over bro!!";
   // }
    }
    else if(checkTie()){
        indis.innerText="Draw!!..Evenly match I see";
        restart = true;
        document.getElementById("restart").style.display="inline";
    }
    else{
        if(turn=="Circle"){
            turn = "Cross";
        }
            else{
                turn="Circle";
            }
            indis.innerText="Interesting...Okay, "+turn+" its your go!!";
        }
        
    }
}


// checks if the cell has a value
function checkItem(target,turn){
    let id = target.id;
    if(startCells[id] == ""){
    startCells [id] = turn;
    indis.innerText="Game is oooveeer Bro!!";
    return true;
    }
    indis.innerText="Invalid move";
    return false;
}

function checkState(turn){
    let retValue = false;
    let checkArray = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    checkArray.forEach(function(a){
        if((startCells[a[0]]==turn) && (startCells[a[1]] == turn) && (startCells[a[2]]==turn)){
            retValue = true;    
        }

    });
    return retValue;
}

//checks for tie through all cells having value
function checkTie(){
    // startCells.forEach((cell)=>{
    //     if(cell.)
    // })
    for(let i =0;i<startCells.length;i++){
        if(startCells[i]==""){
            return false;
        }
    }
    return true;
}

const timerText = document.getElementById("timer-text");
const btnStart = document.getElementById("btn-start");
const btnPause = document.getElementById("btn-pause");
let count = 0;

btnStart.addEventListener("click",function(){
setInterval(function(){
    count += 1;
    timerText.textContent = count;
    console.log("hi test");
}, 1000);
});