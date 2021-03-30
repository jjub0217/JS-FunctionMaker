const $buttons = document.querySelectorAll("button");
const scissors = "가위";
const rock = "바위";
const paper = "보";

$buttons.forEach(($button) =>
  $button.addEventListener("click", handleClick)
);

function handleClick(e) {
  console.log(e);
  console.log(e.target);
  const myButton = e.target.textContent;

  let $comValue = "";
  let $result = "";

  const $generateValue = Math.random();
  if ($generateValue < 0.33) {
    $comValue = scissors;
  } else if ($generateValue < 0.66) {
    $comValue = rock;
  } else {
    $comValue = paper;
  }

  switch (myButton) {
    case scissors:
      switch ($comValue) {
        case scissors:
          alert(`컴퓨터 : ${$comValue} - 컴퓨터와 비겼습니다.`);
          break;
        case rock:
          alert(`컴퓨터 : ${$comValue} - 컴퓨터에게 졌습니다.`);
          break;
        case paper:
          alert(`컴퓨터 : ${$comValue} - 컴퓨터에게 이겼습니다.`);
          break;
      }
      break;
    case rock:
      switch ($comValue) {
        case rock:
          alert(`컴퓨터 : ${$comValue} - 컴퓨터와 비겼습니다.`);
          break;
        case paper:
          alert(`컴퓨터 : ${$comValue} - 컴퓨터에게 졌습니다.`);
          break;
        case scissors:
          alert(`컴퓨터 : ${$comValue} - 컴퓨터에게 이겼습니다.`);
          break;
      }
      break;
    default:
      switch ($comValue) {
        case paper:
          alert(`컴퓨터 : ${$comValue} - 컴퓨터와 비겼습니다.`);
          break;
        case scissors:
          alert(`컴퓨터 : ${$comValue} - 컴퓨터에게 졌습니다.`);
          break;
        case rock:
          alert(`컴퓨터 : ${$comValue} - 컴퓨터에게 이겼습니다.`);
          break;
      }
  }
}