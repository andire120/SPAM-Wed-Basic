// 스팸부원들을 배열에 저장
// 스팸부원에는 role(부장, 차장, 부원), name(이름), grade(학년)
// 부장(정현서), 차장(국재윤)
// 부원 1학년만
// if문과 for문을 사용해 부원만 출력

const SPAM = [
  { role: "부장", name: "정현서", grade: 3 },
  { role: "차장", name: "국재윤", grade: 3 },
  { role: "부원", name: "이준석", grade: 1 },
  { role: "부원", name: "유준영", grade: 1 },
  { role: "부원", name: "장승원", grade: 1 },
  { role: "부원", name: "이윤솔", grade: 1 },
  { role: "부원", name: "장우진", grade: 1 },
  { role: "부원", name: "이우혁", grade: 1 },
  { role: "부원", name: "최예건", grade: 1 },
];

for (let i = 0; i < SPAM.length; i++) {
  if (SPAM[i].role == "부원") console.log(SPAM[i]);
}

//for (let student of SPAM) {
//   if (student.role === "부원") console.log(student);
//}
