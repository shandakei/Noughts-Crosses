console.log('xoxoxo');
//buttons global
// const startBtn = document.querySelector('.start-btn')
//screen global
// const startScreen = document.querySelector('.start-screen')
const gameScreen = document.querySelector('.game-screen')
//screen EL's
// startBtn.addEventListener('click', switchScreen)


// //start button function

// function switchScreen() {
    

//     if (startScreen.style.display !== 'grid') {
//         gameScreen.style.display = 'none'
//     } else {
//         startScreen.style.display === 'none'
//         gameScreen.style.display = 'flex'
//     }

// }





// if (startScreen.style.visibility !== 'grid') {
//     gameScreen.style.visibility = 'hidden'
// } else {
//     startScreen.style.visibility = 'hidden'
//     gameScreen.style.visibility = 'visible'
// }

// -----------------------------------------------------------

//globals
const squareClassAll = document.querySelectorAll('.square')
const s1 = document.querySelector('.s1')
const s2 = document.querySelector('.s2')
const s3 = document.querySelector('.s3')
const s4 = document.querySelector('.s4')
const s5 = document.querySelector('.s5')
const s6 = document.querySelector('.s6')
const s7 = document.querySelector('.s7')
const s8 = document.querySelector('.s8')
const s9 = document.querySelector('.s9')
const resultClass = document.querySelector('.result')
const resetBtn = document.querySelector('.reset')
const xScore = document.querySelector('.x-score')
const oScore = document.querySelector('.o-score')
const roundsClass = document.querySelector('.rounds')
const roundsCountSpan = document.querySelector('.rounds-count')

let clickCount = 0
let xCount = 0
let oCount = 0
let roundCount = 1 




//ELs
resetBtn.addEventListener('click', resetGrid)
resetBtn.addEventListener('click', scoreUpdateX)
// resetBtn.addEventListener('click', scoreUpdateO)

for (let cell of squareClassAll) {
    cell.addEventListener('click', switchXO) 
}

let currentPlayer = "X" //update string to X or O 

function switchXO(event) {        //update to make use of Xchocie and Ochoice //loop for turn and their input
        let cell = event.target
        cell.textContent = currentPlayer
        
        if (currentPlayer === "X") {
            currentPlayer = "O"
        } else {
            currentPlayer = "X"
        }            
       
    victory();
console.log("switch");                                                           /////////////////////
}


function handleCount() {
    clickCount++
}


function victory() {             //txtcontent here not at top cos text hasn't been updated till here ctrl+d ddddd = multicursor

        squareClassAll.forEach(cell => {
            
            cell,addEventListener('click', handleCount)
            cell.addEventListener('click', () => {  
    
                switch (true) {
                    case (s1.textContent === 'X' && s2.textContent === 'X' && s3.textContent === 'X'):
                    case (s1.textContent === 'O' && s2.textContent === 'O' && s3.textContent === 'O'):
                        s1.style.textDecoration = 'line-through'
                        s2.style.textDecoration = 'line-through'
                        s3.style.textDecoration = 'line-through'
                        resultAppear();        
                        resetAppear()
                        break;
                    case (s4.textContent === 'X' && s5.textContent === 'X' && s6.textContent === 'X'):
                    case (s4.textContent === 'O' && s5.textContent === 'O' && s6.textContent === 'O'):
                        s4.style.textDecoration = 'line-through'                               
                        s5.style.textDecoration = 'line-through'                               
                        s6.style.textDecoration = 'line-through'                               
                        resultAppear();        
                        resetAppear()
                        break;
                    case (s7.textContent === 'X' && s8.textContent === 'X' && s9.textContent === 'X'):
                    case (s7.textContent === 'O' && s8.textContent === 'O' && s9.textContent === 'O'):
                        s7.style.textDecoration = 'line-through'
                        s8.style.textDecoration = 'line-through'
                        s9.style.textDecoration = 'line-through'
                        resultAppear();        
                        resetAppear()
                        break;
                    case (s1.textContent === 'X' && s4.textContent === 'X' && s7.textContent === 'X'):
                    case (s1.textContent === 'O' && s4.textContent === 'O' && s7.textContent === 'O'):
                        s1.style.textDecoration = 'line-through'
                        s4.style.textDecoration = 'line-through'
                        s7.style.textDecoration = 'line-through'
                        resultAppear();        
                        resetAppear()
                        break;
                    case (s2.textContent === 'X' && s5.textContent === 'X' && s8.textContent === 'X'):
                    case (s2.textContent === 'O' && s5.textContent === 'O' && s8.textContent === 'O'):
                        s2.style.textDecoration = 'line-through'
                        s5.style.textDecoration = 'line-through'
                        s8.style.textDecoration = 'line-through'
                        resultAppear();        
                        resetAppear()
                        break;
                    case (s3.textContent === 'X' && s6.textContent === 'X' && s9.textContent === 'X'):
                    case (s3.textContent === 'O' && s6.textContent === 'O' && s9.textContent === 'O'):
                        s3.style.textDecoration = 'line-through'
                        s6.style.textDecoration = 'line-through'
                        s9.style.textDecoration = 'line-through'
                        resultAppear();        
                        resetAppear()
                        break;
                    case (s1.textContent === 'X' && s5.textContent === 'X' && s9.textContent === 'X'):
                    case (s1.textContent === 'O' && s5.textContent === 'O' && s9.textContent === 'O'):
                        s1.style.textDecoration = 'line-through'
                        s5.style.textDecoration = 'line-through'
                        s9.style.textDecoration = 'line-through'
                        resultAppear();        
                        resetAppear()
                        break;
                    case (s3.textContent === 'X' && s5.textContent === 'X' && s7.textContent === 'X'):
                    case (s3.textContent === 'O' && s5.textContent === 'O' && s7.textContent === 'O'):
                        s3.style.textDecoration = 'line-through'
                        s5.style.textDecoration = 'line-through'
                        s7.style.textDecoration = 'line-through'
                        resultAppear();        
                        resetAppear()
                        break;
                    case (clickCount === 8):
                        console.log("It's a draw");
                        resetAppear()
                        break;
                    default: null
                        ////////////////////////////////////FIX///////////////////// 
                        
                    
                }
            })
        })    
}

function resetAppear() {

    if (clickCount === 8) {
        resetBtn.style.visibility = 'visible'
    }
    
}

function resetGrid() {
    for (let cell of squareClassAll){
    cell.textContent = '';
    cell.style.textDecoration = '';
    }
    resetBtn.style.visibility = 'hidden'
    resultClass.style.visibility = 'hidden'
    roundsClass.style.display = 'initial'
    clickCount = 0;
    roundCountIncrease();  
    // xScore.innerText = xCount

}

function resultAppear() {
    resultClass.style.visibility = 'visible'
    resetBtn.style.visibility = 'visible'
    roundsClass.style.display = 'none'
    console.log("Result + Victory");                                             //////////////////////
}

function roundCountIncrease() {

    roundCount++
    roundsCountSpan.innerText = roundCount
}



// --------------------------------------------------------------------------------------
function scoreUpdateX() {
    xCount = ((clickCount + 1) - clickCount)
    // xCount++
    xScore.innerText = xCount
}
function scoreUpdateO() {
    oCount = ((clickCount + 1) - clickCount)
    // oCount++
    oScore.innerText = oCount
}
//                                                        dont forget @MEDIA requirements
// @(min-width: 1000px) {

// }





//             make the README.txt