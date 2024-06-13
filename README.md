s# SPAM-Wed-Basic

첫번째 커밋이다!

1. html css javascript

   웹페이지 그림,글 = .html  
   디자인 = .css  
   기능 = .js

2. JavaScript library

   Library = 남이 작성한 코드

   npm = js 라이브러리 관리를 도와주는 패키지매니저  
   js 라이브러리를 쉽게 설치, 수정, 삭제 가능  
   (npm install 라이브러리 이름)

   webpack = js 라이브러리 용량 줄여줌

3. nodejs

   =자바스크립트 실행도우미  
   (node 파일이름)

4. bundling tool

   = js 파일들을 하나로 합쳐줌  
   안쓰는 함수 변수는 다 제거(용량 축소 가능)  
   .ts .vue .jsx등으로 개발한거를 .js로 변환해줌  
   최신 문법을 호환성 좋게 바꿔줌

5. build

   npm run build
   = 번들링툴 이용해서 js파일 하나로 합치기

6. SPA

   = 자바스크립트로 html 조작 편리해짐  
   Single Page APplication 만들 때 사용  
   (새로고침할 때 부드럽게 넘어감)

7. state mangement

   = SPA에서 사용중인 변수들 관리  
   SPA 라이브러리 단점 = 수많은 변수관리가 어려움

8. server side rendering

   SPA 라이브러리의 더 큰 단점 = 구글검색 결과 노출 어려움, 첫페이지 로딩시간이 오래걸림

   이를 해결하기 위해 = server-side reendering(html을 서버에서 만들어서 보내줌)

9. meta-framework

   리액트 문법으로 server-side reendering을 원할 시,
   NEXT.JS, NuxtJS 등을 사용  
   (자바스크립트 문법으로 풀스택 개발가능, server-side reendering 가능)

10. TypeScript

    = 타입기능이 업글된 자바스크립트  
    타입스크립트 문법으로 코드 짜고 변수나 함수에 타입을 집어넣을 수 있음

    나중에 bundling tool 이용해서 나중에 .js로 변환해야힘

11. serverless

    = 서버 역할을 대신 해주는 서비스  
    회원 인증, DB입출력, 기타 서버기능을 알아서 해줌  
    단점 : 종량제라 비쌈

12. 결론

    프론트 붐이 왔으니 이상한 라이브러리 많이 도입하면 프론트엔드 계발자라는 전문성과 밥그릇을 지킬 수 있다.

# - h1 markdown 기본 문법

## - h2

### - h3

#### - h4

##### - h5

###### - h6

p태그

- 1번
- 2번
- 3번

```javascropt
console.log("Hello Worlde");
```

# JavaScript 공부

## 실행하는 방법

- js 에서 코드 입력 후 html에

```html
<script src="/js/app.js"></script>
```

를 입력하면 html과 연결된 웹사이트에서 F12 console로 확인가능

- 또는, html에서 바로

```javascript
<script>console.log("Hello World!");</script>
```

입력 후 연결된 웹사이트에서 F12 console로 확인가능

- 또는, 터미널에서 cd js 입력 후, node app.js 명령어를 통해 app.js에서 입력한 코드 확인 가능

## 변수

- 변수는 거의 c언어와 동일하다.

## var

- 재선언 가능, 재할당 가능, 지역변수,

## let

- 재선언 불가능, 재할당 가능, 블록 범위 변수

## const

- 재선언 불가능, 재할당 불가능, 상수

## 호이스팅

- 밑에서 선언한 변수를 위에서도 쓴다.

## 자바스크립트의 자료형

1. 숫자(number) : 정수 및 부동 소수점
2. 문자열(string) : 텍스트
3. 불리언(boolean) : true or false
4. null : 값이 존재하지 않음
5. undefined : 변수가 초기화되지 않았거나 값이 할당되지 않았음
6. 심벌(symbol) : 고유하고 변경 불가능한 데이터 유형
7. 객체(object) : 복합 데이터 유형으로, 여러 속성과 메어드를 포함
8. 배열(array) : 여러 값을 순서대로 저장하는 데이터 유형
9. 함수(function) : 코드 블록을 정의하고 실행할 수 있는 데이터 유형

# let 체험하기

```javascript
console.log(
  "제 이름은",
  name,
  "이고,",
  age,
  "살에 여자 친구는",
  gf,
  "남자친구는",
  bf,
  ",애기는 ",
  baby,
  "입니다."
);
```

# 연산자

+, -, \*, /, % 존재  
==, !=, <=, >= 존재

[== - 출력값만 서로 같은지 비교]  
[=== - 자료값의 타입까지 비교]

# if, switch case 체험하기

## if문

```javascript
if (age > 19) console.log("당신은 성인입니다.");
else if (age > 13) console.log("당신은 청소년 입니다.");
else console.log("당신은 어린이 입니다.");
```

## switch case문

```javascript
switch (age) {
  case 8:
    console.log("선물을 받습니다.");
    break;
  default:
    console.log("볼펜을 받습니다.");
    break;
}
```

# 반복문

## for문

```javascript
for (기본값; 조건식; 증감값) {
  console.log(i);
}
```

for문 안에 for문이 존재하는 이중 for문도 가능함.  
for문의 기본값을 선언할 때 변수를 같이 선언가능.  
(ex. (let i = 0; i < 10; i++))

## while문

```javascript
while {조건문} {
   실행문
}
```

조건문이 거짓이 될때까지 반복

하지만 대부분 조건문을 True로 잡고 중간에 if문을 활용해 break를 거는 식으로 자주 사용.
(continue로 다시 반복가능.)

## do ~ while문

(거의 안씀)

```javascript
do {
  console.log(i);
  i++;
} while (i > 10);

console.log(i);
```

# AI와 LLM

## 인공지능 개요

### 인공지능이란?

Arificial Intellingence (인공 지능)

### 인공지능의 역사

1950년대 - 튜링테스트  
1960년대 - 논리적 문제해결  
1970년대 - AI의 겨울  
1990년대 이후 - 컴퓨터 성능의 향상과 대규모 데이터 축적

### AI의 종류

좁은 AI(Narrow AI) - 하나의 특정한 작업에 특화된 AI  
일반 AI(General AI) - 인간처럼 다양한 문제를 해결할 수 있는 AI  
강한 AI(Strong AI) - 자각과 의식을 가진 AI

### AI의 특이점(Singularity)

Human intelligence(인간의 지능) 을(를) Arificial Intellingence(AI의 지능)이 뛰어넘는 시점 > 특이점 (인간의 쓸모가 없어지는 시점이라 봐도 됨)

### 머신러닝 Machine Learning (ML) 이란

단순한 것들을 학습하는 것.

### 딥 러닝 Depp Learning (DL) 이란

인공신경망. 머신러닝의 하위 버전.

## 대형 언어 모델

### LLM이란

Large Language Model - 텍스트 밖에 처리를 못함, 언어모델을 확장한 것

### 멀티 모달이란

이미지를 만들거나 이 이미지를 분류, 음성 분류를 통한 사람의 목소리 분석 등을 멀티모달이라고함 (GTP -4o, 영화 H.E.R)

### 제미나이 (Gemini)

GPT 구글버전 - 구글에다가 자세히 검색을 하면 AI가 스스로 그 검색 내용을 분석하고 내놓을 답을 스스로 정리해서 보여줌. (내년부터 상용화 예정)

# 배열

list랑 같음. 인덱스도 있고 int, float, char, bool 등 다 배열에 포함될 수 있음

length - 배열의 길이
push - 뒤에 새로운 데이터 삽입
pop - 뒤의 데이터 삭제
unshift - 앞에 새로운 데이터 삽입
shift - 앞의 데이터 삭제

```javascript
const students = ["준석", "준영", "승원", "윤솔", "예건"];
```

식으로 사용.

# Object

여러 변수들의 집합, 배열과 비슷함.
얜 of가 안되고 배열처럼 인덱스 번호 사용해서 출력 가능.

```javascript
const me = {
  name: "정현서",
  age: 19,
  score: [60, 50],
  cat: false,
};
```

와 같은 방식으로 사용함.

둘을 합치면

```javascript
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
```

이런 식으로 응용가능.

# 함수

한 번 정의한 코드를 다른 인자를 사용해 여러번 사용할 수 있음.
return 가능

```javascript
function sayhello(name) {
  console.log(`${name}님, 안녕하세요.`);
}

sayhello("정현서");
```

이런 식으로 선 정의 후 호출 식으로 사용됨.

```javascript
function div(a, b) {
  return a / b;
}

console.log(div(5, 6));
```

return 값은 이렇게 사용.

## 전역변수

모든 코드 내에서 사용가능한 변수

## 지역변수

특정 코드 안에서만 사용가능한 함수

# 백엔드

- Frontend - 사용자가 직접 사용하는 영역
- Backend - 프론트엔드가 통신하는 영역

API Server - 프론트엔드와 백엔드 또는 백엔드 끼리 연결을 가능하게 해주는 영역  
DaraBaxe - 데이터 저장소  
Infrastructure - 백엔드를 실행하는 영역

API == 메뉴판  
식당과 손님이 음식을 주고받기 위한 방법 == 코드

## 백엔드 엔지니어란?

서버 사이드(Server Side) 프로그램을 디자인하고, 개발하고, 유지보수함.

## API가 가져야할 내용

- method - 데이터를 달라고 할 것이냐? 보낼 것이냐? 같은 요청방식.
- endpint - 어떤 자료를 요청할 것인가?
- parameter - 자료 요청에 필요한 추가정보 (ex. 아이디, 제목 등)

## Rest란?

REST(REprentational State Transfer)의 약자로 자원을 이름으로 구분하여 해당 자원의 상태를 주고받은 모든 것.

### CRUD

- 데이터 생성(Create)
- 데이터 조회(Read)
- 데이터 수정(Update)
- 데이터 삭제(Delete)

### HTTP 메소드

GET - 데이터 조회  
POST - 데이터 생성  
PUT - 데이터 부분 수정  
PATCH - 데이터 전체 수정  
DELTE - 데이터 삭제

## REST API란?

HTTP URL를 통해 Resource를 명시하고, HTTP Method를 통해 해당 URL에 대한 CRUD를 적용하는 것.

### REST API의 원칙

1. 동사를 사용하지 않고 소문자를 사용하여야 한다.
2. UPL마지막에 '/'를 포함하지 않는다.
3. '\_' 대신 '-'를 사용한다.
4. 파일 확장자는 URL에 포함하지 않는다.

## DataBase란?

구조화된 정보 또는 데이터의 조직화된 모음

DataBase의 종류 - 관계형 DB <> NOSQL DB 두가지로 나뉨.

- 관계형 DB - 관계형 DB 등이 있음. (MYSQL)
- NOSQL DB - 키-값, 도큐먼트, 컬럼패밀리, 그래포 DB등이 있음 (redis, mongo DB)

## 서버구조

- Controller - 직접적으로 메소드를 정해서 URL로 통신하는 곳.
- Service - 통신하며 사용할 로직을 적는 곳.
- Repository - 데이터베이스를 연결하고, 데이터를 저장하는 곳.
- Entity -데이터의 구조를 잡아 구조체를 저장하는 곳.

## Infra 개발자

주로 소프트웨어 및 하드웨어 시스템의 기본 구조 및 기반을 설계, 구축, 유지보수 하는 역할  
AWS, Azure, GCP에 백엔드나 프론트 프로그램을 올리고, CI/CD를 하는 거임

## CI/CD란?

CI/CD는 지속적통합(Continuous Intergation) 및 지속적 제공/배포(Continuous Delivery/Deployment)를 의미하며, 소프트웨어 개발 라이프 사이클을 간소화시키고 가속화시키는 것.
