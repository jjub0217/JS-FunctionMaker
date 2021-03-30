const $userValue = prompt("가위, 바위, 보");
const $scissors = "가위";
const $rock = "바위";
const $paper = "보";


// 방법1 : 무식한 방법 <= if문
//   if (
//     $userValue !== $scissors &&
//     $userValue !== $rock &&
//     $userValue !== $paper
//   ) {
//     // <- 가위가 아니고, 바위도 아니고, 보도 아니면
//     alert("가위, 바위, 보 중에 하나를 입력해야 합니다.");
//   } else {

//     let $comValue = "";

//     // 가위,바위,보 중에 하나를 낼 확률은 33% 이다. ( 1 / 3 )
//     const $generateValue = Math.random();

//     if ($generateValue < 0.33) {
//       $comValue = $scissors;
//     } else if ($generateValue < 0.66) {
//       $comValue = $rock;
//     } else {
//       $comValue = $paper;
//     }

//     if ($userValue === $scissors) {
//       if ($comValue === scissors) {
//         alert(`컴퓨터 : ${$comValue} - 비겼습니다.`);
//       } else if ($comValue === $rock) {
//         alert(`컴퓨터 : ${$comValue} - 컴퓨터가 이겼습니다.`);
//       } else {
//         alert(`컴퓨터 : ${$comValue} - 내가 이겼습니다.`);
//       }
//     }
//   }



// 방법2 : switch문 <= 여러 조건을 비교하지 좋은 조건문
if (
  $userValue !== $scissors &&
  $userValue !== $rock &&
  $userValue !== $paper
) {
  // <- 가위가 아니고, 바위도 아니고, 보도 아니면
  alert("가위, 바위, 보 중에 하나를 입력해야 합니다.");
} else {
  let $comValue = "";

  // 가위,바위,보 중에 하나를 낼 확률은 33% 이다. ( 1 / 3 )
  const $generateValue = Math.random();

  if ($generateValue < 0.33) {
    $comValue = $scissors;
  } else if ($generateValue < 0.66) {
    $comValue = $rock;
  } else {
    $comValue = $paper;
  }
  switch ($userValue) {
    case $scissors:
      switch ($comValue) {
        case $scissors:
          alert(`컴퓨터 : ${$comValue} - 컴퓨터와 비겼습니다.`);
          break;
        case $rock:
          alert(`컴퓨터 : ${$comValue} - 컴퓨터에게 졌습니다.`);
          break;
        case $paper:
          alert(`컴퓨터 : ${$comValue} - 컴퓨터에게 이겼습니다.`);
          break;
      }
      break;
    case $rock:
      switch ($comValue) {
        case $rock:
          alert(`컴퓨터 : ${$comValue} - 컴퓨터와 비겼습니다.`);
          break;
        case $paper:
          alert(`컴퓨터 : ${$comValue} - 컴퓨터에게 졌습니다.`);
          break;
        case $scissors:
          alert(`컴퓨터 : ${$comValue} - 컴퓨터에게 이겼습니다.`);
          break;
      }
      break;
    default:
      switch ($comValue) {
        case $paper:
          alert(`컴퓨터 : ${$comValue} - 컴퓨터와 비겼습니다.`);
          break;
        case $scissors:
          alert(`컴퓨터 : ${$comValue} - 컴퓨터에게 졌습니다.`);
          break;
        case $rock:
          alert(`컴퓨터 : ${$comValue} - 컴퓨터에게 이겼습니다.`);
          break;
      }
  }
}
