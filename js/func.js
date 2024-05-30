function errCode() {
  console.log("404");
}

errCode();

function sayhello(name) {
  console.log(`${name}님, 안녕하세요.`);
}

sayhello("정현서");

function addNumber(a, b) {
  return a + b;
}

console.log(addNumber(5, 6));

const num = addNumber(5, 6);
console.log(num);
