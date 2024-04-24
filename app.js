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


const squareClass = document.querySelectorAll('.square')
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

for (let cell of squareClass) {
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
console.log("switch"); /////////////////////
}


function resultAppear() {
    resultClass.style.visibility = 'visible'    
    console.log("resultAppear");        //////////////////////
}


function victory() {             //txtcontent here not at top cos text hasn't been updated till here ctrl+d ddddd = multicursor

        squareClass.forEach(cell => {
            cell.addEventListener('click', () => {  
    
                switch (true) {
                    case (s1.textContent === 'X' && s2.textContent === 'X' && s3.textContent === 'X'):
                    case (s1.textContent === 'O' && s2.textContent === 'O' && s3.textContent === 'O'):
                        console.log('123');
                        resultAppear();        
                        break;
                    case (s4.textContent === 'X' && s5.textContent === 'X' && s6.textContent === 'X'):
                    case (s4.textContent === 'O' && s5.textContent === 'O' && s6.textContent === 'O'):
                        console.log('456');
                        resultAppear();        
                        break;
                    case (s7.textContent === 'X' && s8.textContent === 'X' && s9.textContent === 'X'):
                    case (s7.textContent === 'O' && s8.textContent === 'O' && s9.textContent === 'O'):
                        console.log('789');
                        resultAppear();        
                        break;
                    case (s1.textContent === 'X' && s4.textContent === 'X' && s7.textContent === 'X'):
                    case (s1.textContent === 'O' && s4.textContent === 'O' && s7.textContent === 'O'):
                        console.log('147');
                        resultAppear();        
                        break;
                    case (s2.textContent === 'X' && s5.textContent === 'X' && s8.textContent === 'X'):
                    case (s2.textContent === 'O' && s5.textContent === 'O' && s8.textContent === 'O'):
                        console.log('258');
                        resultAppear();        
                        break;
                    case (s3.textContent === 'X' && s6.textContent === 'X' && s9.textContent === 'X'):
                    case (s3.textContent === 'O' && s6.textContent === 'O' && s9.textContent === 'O'):
                        console.log('369');
                        resultAppear();        
                        break;
                    case (s1.textContent === 'X' && s5.textContent === 'X' && s9.textContent === 'X'):
                    case (s1.textContent === 'O' && s5.textContent === 'O' && s9.textContent === 'O'):
                        console.log('159');
                        resultAppear();        
                        break;
                    case (s3.textContent === 'X' && s5.textContent === 'X' && s7.textContent === 'X'):
                    case (s3.textContent === 'O' && s5.textContent === 'O' && s7.textContent === 'O'):
                        console.log('357');
                        resultAppear();        
                        break;

                    default: resultAppear() 
                        
                    
                }
            })
        })
    console.log("victory function");      /////////////////////////////
}
