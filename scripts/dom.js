//dom.js

//복습)함수, 매개변수, 리턴
function calcFunc(n1,n2,oper='+') {
    //처음에는 원하는 값이 고정된 상태로 먼저 시작하기
    let num1 = n1;
    let num2 = n2;
    return oper == '+' ? num1+num2 : num1-num2;
    //리턴을 만나면 함수는 강제로 종료
    //조건 ? 참 : 거짓;
    const total = num1 + num2;
    //이 부분에서 함수를 끝내고 외부에서 함수를 호출하겠다는 의미
    return total;
}
//함수를 호출했을 때 아무것도 안보이는 이유
//함수를 어떻게 실행하려는 건지 작성하지 않았기 때문에 호출이 안됨.
console.log(calcFunc(3,5,'-'));

//할인율 계산기 (사용자 입력가격은 다르고, 할인은 고정)
//계산법) (100-5) / 100 = 0.95 
//판매가 * 0.95 = 할인판매가
//  판매가 * 0.95 = 5% 할인가
//  판매가 * 0.9 = 10% 할인가
//  판매가 * 0.8 = 20% 할인가
//  판매가 * 0.5 = 50% 할인가
function discountFunc(sellPrice=5, discountRate='0.95') {
    let sell = sellPrice;
    let sale = discountRate;
    let salePriceName = sellPrice;
    let discountSale = sellPrice+'% 할인가' + ' : ' + sell * sale + '원';
    return discountSale;
}
console.log(discountFunc(5, 5000));
console.log(discountFunc(10, 5000, 0.9));
console.log(discountFunc(20, 5000, 0.8));
console.log(discountFunc(50, 5000, 0.5));

//풀이
function discountFunc2 (price) {
    const discount5 = (price*0.95).toLocaleString ('ko-kr');
    const discount10 = (price*0.9).toLocaleString ('ko-kr');
    const discount20 = (price*0.8).toLocaleString ('ko-kr');
    const discount30 = (price*0.7).toLocaleString ('ko-kr');
    const discount40 = (price*0.6).toLocaleString ('ko-kr');
    const discount50 = (price*0.5).toLocaleString ('ko-kr');
    return `사용자 입력 가격' : ${price.toLocaleString ('ko-kr')}원 기준
        5% 할인가 : ${discount5}원,
        10% 할인가 : ${discount10}원,
        20% 할인가 : ${discount20}원,
        30% 할인가 : ${discount30}원,
        40% 할인가 : ${discount40}원,
        50% 할인가 : ${discount50}원,
        `
}
console.log(discountFunc2(54000));

//1. 익명함수
const btn1 = document.querySelector('#btn');
// 버튼 클릭 시 버튼 색상 변경(일회성)
// 이름없이 만드는 함수 = 익명함수
// btn1.addEventListener('click', function(){
// btn1.style.color = 'red';
btn1.addEventListener('click', ()=> { //화살표 함수
    btn1.style.color = 'red';
})
func1()
//일반 반복 함수 // 생성된 위치 위/아래 어디든 호출 가능
//단점: 위에서 아래로 읽기 때문에 밑에서 덮어쓰기가 되는 것이라고 생각 -> 한참 위쪽에서도 실행되어 어디서 실행되고 덮어써지는지 불명확함.
function func1() {
    return console.log('일반 함수 테스트');
}

//이벤트 밖에서 사용하는 익명함수의 또다른 예시
//변수 안에서 익명함수 생성
const func2 = function(){
    return console.log('익명함수 테스트');
}
func2()

const func3 = ()=> {
    return console.log('익명 테스트-화살표버전');
}
func3()

//2. 콜백함수(함수 안 또다른 함수 호출)
function orderCoffee(callback) {
    return console.log('SNS 이벤트 무료커피 나왔습니다');
}
// 무료커피가 나오려면 sns를 무료커피에 호출해야함
function sns(){
    return console.log('SNS 후기 업로드 완료'); 
}
orderCoffee(sns);

//3. data-* 속성
const cart_buy_div = document.querySelector('.cart_buy'); 
//HTML data-* 속성은 자바스크립트에서 dataset.* 읽을 수 있음.
let dataResult = cart_buy_div.dataset.name;
console.log(`dataResult 값은 ${dataResult}`);

// 수량증감 data-* 속성활용
const countNumSpan = document.querySelector('.count_num');
const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
console.log(countNumSpan.dataset.count);
//위 span 변수에다가 초기값 1 대입
countNumSpan.textContent = countNumSpan.dataset.count;
//+ 클릭하면 span 값이 1씩 증가(익명함수 활용)
plusBtn.addEventListener('click',()=>{
    console.log(typeof(countNumSpan.dataset.count)); //문자로 인식, 계산불가
    let currentNum = Number(countNumSpan.dataset.count); //문자를 숫자로 변환해서 저장
    console.log(currentNum, typeof(currentNum)); //숫자로 변경된 점 확인
    //재고수량 10
    currentNum < 9 ? (()=>{
        //숫자 1씩 증가되는 값을 저장하는 변수
        let plusTotal = ++currentNum; 
        //데이터의 값을 업데이트가 되지 않아서 2에서 멈춤. 
        countNumSpan.dataset.count = plusTotal;
        countNumSpan.textContent = plusTotal;//증가된 변수를 실제 화면에서 출력

    })(): alert('촤대주문수량입니다.')
})

//변수 목적 정리
//currentSpan : 수령표시되는 span 태그
//plusBtn: +버튼
//currentNum : currentSpan의 데이터속성을 숫자로 변환한 변수

//빼기 버튼
minusBtn.addEventListener('click', ()=>{
    let currentNum = Number(countNumSpan.dataset.count);
    //삼항조건 연산자 활용 (수량이 1이상일 때만 사용)
    currentNum > 1 ? (()=>{
        //숫자 1씩 감소되는 값을 저장하는 변수
        let minusTotal = --currentNum;
        //데이터 업데이트
        countNumSpan.dataset.count = --currentNum;
        //감소된 변수를 실제 화면에서 출력
        countNumSpan.textContent = minusTotal;
    })() : alert('최소주문수량입니다');
    console.log(currentNum, typeof(currentNum))

})
