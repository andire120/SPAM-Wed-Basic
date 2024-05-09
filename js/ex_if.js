const name = "marry";
const age = 30;

if (name == "marry" && age > 19) console.log("너 뒤짐");
else console.log("넌 다음에 뒤짐");

if (name == "BB" || age > 19) console.log("너 뒤짐");
else console.log("넌 다음에 뒤짐");

if (name == "Mike" && age < 19) console.log("너 뒤짐");
else console.log("넌 다음에 뒤짐");

let isAdult = age > 19; //수식의 결과 값 저장.
if (isAdult) console.log("성인 입니다.");
else console.log("미성년자 입니다.");
