// 놀이공원에 가려하는데 이번달이 8월 이여서 8살 친구들은 선물을 받습니다.
// 5살 친구들 또한 선물을 받습니다.
// 이 두 나이를 제외한 나머지 사람들은 볼펜을 받습니다.

let age = 8;

switch (age) {
  case 5:
    console.log("선물을 받습니다.");
    break;
  case 8:
    console.log("선물을 받습니다.");
    break;
  default:
    console.log("볼펜을 받습니다.");
    break;
}
