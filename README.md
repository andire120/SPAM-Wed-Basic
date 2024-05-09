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
