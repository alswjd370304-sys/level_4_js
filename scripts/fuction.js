//fuction.js
//1. 내장함수
// alert('이 사이트는 포트폴리오용 사이트 입니다.');
//const q1 = prompt('1+1?');
//alert('사용자가 입력한 답은'+ q1 +'입니다');
//print();
const printBtn = document.querySelector('#print_btn');

//v1. 사용자정의함수를 이벤트함수내에서 호출한 방식(2개 이상반복일 경우)
//printBtn.addEventListener('click', printFunc);

//v2. 이벤트함수 내에서 직접 사용자 함수를 만드는 방식
//반복이 안될 때 사용함.
//독립적인 함수가 아닌 객체 이벤트 내에 포함된 함수라 이름을 주지 않음
printBtn.addEventListener('click', function(){ print();} );

//v3. 내장함수에 함수명이 안들어가는데 function 키워드를 써야하는지 의문으로 생긴 함수
//화살표 함수
//2번이상 반복되지 않을 때 사용
printBtn.addEventListener('click', ()=>{ print(); });

//랜덤 숫자 생성 함수
const num1 = Math.random(); // 0~1 랜덤한 숫자 생성 내장함수
const num2 = Math.floor(Math.random() * 10) + 1; //소수점을 버리기 때문에 정수로 만들어줌.
console.log(num1);
console.log(num2);

//변수생성 = 함수1(함수2()); //함수2부터 처리하고 함수1처리 마지막으로 변수 대입
//const num3 = Number(prompt('NCS 시험점수는 ? 0~100점 사이로 숫자만 입력해주세요'));
//console.log(num3);
//console.log(typeof(num3)); //데이터타입확인 함수

//2.사용자정의함수
//반복실행 할 변수를 함수로 만들어서 사용 -> 안에 내장함수를 넣어 만들 수 있음.
function printFunc() {return print();}

//3. 함수 스코프, 변수 범위
let b =20; //전역 변수
let c = 30;

function test() { //지역 변수
    let a =10;
    return console.log(a+b); // 전역을 어디에서든 가능하기 때문에 오류 나지 않음
}
test();
console.log(b+c);
//console.log(a); //error

//4. 함수의 매개변수
//반복되는 함수 내에서 달라지는 매개값이 있을 때 사용
//동화: 헨제로가 그레텔이 집을 찾아오는 반복 방법
function story1(boy='헨젤', girl='그레텔', mapDate) { //함수생성(매개변수생성)
    let person = [boy, girl];
    let result = person[0]+'과 '+person[1]+'이 '+mapDate+'을 따라 집을 찾아갔습니다';
    //헨젤과 그레텔이 조약돌을 따라 집을 찾아갔습니다.
    return console.log(result);
}
story1('봄', '여름', '조약돌'); //함수 호출
story1( undefined, undefined, '빵 부스러기'); //함수 호출

//동화2.story2 함수 생성, 매개변수 달라지는 데이터 기준으로 추가 생성(이름은 자유)
//나무꾼은 금도끼를 잃어버렸습니다.
//나무꾼은 쇠도끼를 잃어버렸습니다.
function story2(human='나무꾼', obj='금도끼') {
    let preson2 = human;
    let result2 = human + '은 ' + obj + '를 잃어버렸습니다';
    return console.log(result2);
}
story2('집게사장', '금화');
//매개변수가 정의가 안됐을 때의 경우 2가지
//앞 매개 변수가 정의가 안돼서 기본값, 뒤 문자만 매개변수대입
//앞 매개변수 대입, 뒤 매개변수 안적어서 기본값
// 지역 변수에 경우 함수가 다르면 같은 이름을 사용해도 무관함. 전역의 경우는 이름 중복 가능

//카페 키오스크
//아이스아메리카노 1잔 주문 완료
//function 간편버전 => 이벤트 내에서만 주로 사용
//''+변수+'' 간편버전: `문자${}` 탬플릿 문자열
function cafeKiosk(menu, number=1) {
    const odrer = `${menu} ${number}잔 주문완료`;
    return console.log(odrer);
}
cafeKiosk('아이스아메리카노');
cafeKiosk('카페라떼', 2);

//IC, HOT, 메뉴, 메뉴 개수까지 선택가능한 함수 만들기
//출력 예) ICE 카페라떼 2잔 주문완료
function cafeKiosk2(temperature='ICE', coffee, number=1) {
    const order = `${temperature} ${coffee} ${number}잔 주문완료`;
    return console.log(order);
}
cafeKiosk2('HOT', '바닐라 라떼', 3);

//풀이 ->  변수를 활용한 매개변수
function cafeKiosk2_v2(tem, me, num=1) {
    const temperature = ['아이스', '핫'];
    const menu = ['아메리카노' , '바닐라라떼']
    const order = `${temperature[tem]} ${menu[me]} ${num}잔 주문완료`;
    return console.log(order);
}
cafeKiosk2_v2(1, 1, 1);

//5.리턴
//함수 내부 실행 데이터를 사용자가 원하는 방식으로 출력하게 만드는 키워드
function japangi(drink, num=1) {
    const order = `${drink} ${num}개 주문완료`; 
    return order; //order변수에 저장된 값만 함수 외부로 반환(종료)
    return; //리턴 뒤에 아무것도 안적으면 함수만 강제종료
    return console.log('잔액이 부족합니다'); //리컨 뒤 콘솔실행하고 함수 종료
    console.log(order); //리턴 아래 써있는 명령은 절대 실행안됨.
}
japangi('생수'); //함수 내부 리턴에서 출력함수가 정해졌을 때 데이터만 전달방식
console.log(japangi('사이다'));
//함수 내부 리턴에서 출력함수가 정해지지 않고 데이터만 반환했을때 함수 밖에서 출력함수를 정하는 방식
printBtn.textContent = japangi('콜라');