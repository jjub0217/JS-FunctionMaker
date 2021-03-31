

// DOM
const counterInput = document.querySelector('#counterInput')
const comBtn = document.querySelector('.comShoot')
const userTwoBtn = document.querySelector('.twoShoot')
const userThreeBtn = document.querySelector('.threeShoot')
const comInput = document.querySelector('#computerInput')
const userInput = document.querySelector('#userInput')
const result = document.querySelector('.result')


let comScore = 0;
let userScore = 0;
let currentCom = false;
let currentUser = false;



// Event

comBtn.onclick = function () {
    const shootType = Math.random() < 0.5 ? 2 : 3
    if (currentCom) {
        alert('사용자 차례입니다.')
    } else {
        if (shootType === 2) {
            if (Math.random() < 0.5) {
                comScore += 2;
                comInput.value = comScore;
                result.textContent = '컴퓨터가 2점슛을 성공했습니다.'

            } else {
                result.textContent = '컴퓨터가 2점슛을 실패했습니다.'
            }
        } else {
            if (Math.random() < 0.33) {
                comScore += 3;
                comInput.value = comScore;
                result.textContent = '컴퓨터가 3점슛을 성공했습니다.'
            } else { 
                result.textContent = '컴퓨터가 3점슛을 실패했습니다.'
            }
        }
    }

    currentCom = true;
    currentUser = false;
    counterInput.value--;

    if (counterInput.value === '0') {
        if (comScore > userScore) {
            result.textContent = '아쉽게도 졌습니다.'
        } else if(comScore < userScore) {
            result.textContent = '승리하였습니다!'
        }else{
            result.textContent = '비겼습니다.'
        }
    }
}


userTwoBtn.onclick = function () {

    if (!currentCom) {
        alert('컴퓨터가 먼저 시작해야 합니다.')
    } else {

        if (currentUser) {
            alert('컴퓨터 차례입니다.')
        } else {

            if (Math.random() < 0.5) {
                userScore += 2;
                userInput.value = userScore;
                result.textContent = '2점슛을 성공했습니다.'
            } else {
                result.textContent = '2점슛을 실패했습니다.'
            }
        }

    }
    counterInput.value--;
    currentUser = true;
    currentCom = false;
}



userThreeBtn.onclick = function () {

    if (!currentCom) {
        alert('컴퓨터가 먼저 시작해야 합니다.')
    } else {

        if (currentUser) {
            alert('컴퓨터 차례입니다.')
        } else {
            if (Math.random() < 0.5) {
                userScore += 3;
                userInput.value = userScore;
                result.textContent = '3점슛을 성공했습니다.'
            } else {
                result.textContent = '3점슛을 실패했습니다.'
            }

        }
    }
    counterInput.value--;
    currentUser = true;
    currentCom = false;


}


