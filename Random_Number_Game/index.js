
const $inputRange = document.querySelector('input[type="range"');
const lastNumber = document.querySelector(".last-number");
const selectNumber = document.querySelector("#select-number");
const playBtn = document.querySelector(".play-button");
const myNumber = document.querySelector(".my-number");
const machineNumber = document.querySelector(".machine-number");
const $result = document.querySelector(".result");



// 컴퓨터 랜덤숫자 생성 함수 정의
function generateNumber() {
  const machineNum = lastNumber.textContent;

  const $generateNumber = Math.floor(Math.random() * machineNum);
  machineNumber.textContent = $generateNumber;
  console.log(`컴퓨터 숫자 선택 ${$generateNumber}`);
}

// 플레이 버튼 누르면 실행되는 함수
const play = (e) => {
  console.log(`플레이 버튼 함수 실행`);

  // 내가 숫자 선택
  const selectNumberValue = parseInt(selectNumber.value);
  myNumber.textContent = selectNumberValue;

  console.log(`내가 숫자 선택 ${selectNumberValue}`);

  // 컴퓨터 랜덤숫자 생성 함수 실행
  generateNumber();

  // 내 숫자랑 컴퓨터 숫자랑 비교
  const computerNumber = parseInt(machineNumber.textContent);
  if (selectNumberValue === computerNumber) {
    $result.textContent = "win";
    e.target.disabled = true;
  } else {
    $result.textContent = "lost";
  }
};


// input range event
$inputRange.oninput = function (e) {
  const inputRange = e.target;
  const rangeValue = Math.floor(inputRange.value);
  lastNumber.textContent = rangeValue;
  console.log(
    `Start of input range event. Derivation of range event of values ${rangeValue}`
  );
};

// play button event
playBtn.addEventListener("click", play);
