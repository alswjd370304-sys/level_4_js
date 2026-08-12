// index.js 시작
//1. 변수
let itemPrice = 24600;
const titleBig = document.querySelector('h1');
const result1P = document.querySelector('.result1');
let replaceData = itemPrice.toLocaleString('ko-kr'); //데이터 종류 변경 변수
//-------------------------------------연습(웹은행 150만원 입금)
//변수
let bank = 1500000;
const result2P = document.querySelector('.result2');
let replaceData2 = bank.toLocaleString('ko-kr');

//출력 테스트 콘솔
console.log(itemPrice, titleBig, result1P, replaceData, bank, result2P);

//연습실행 결과
result2P.textContent = replaceData2 +'원';

//실행 결과
//input이면 value
//input이 아닐 때 textContent
result1P.textContent = replaceData +'원';

//-------------------------------------
//2.배열
//변수
const money = [24600, 32000, 19900];
const list1Li = document.querySelectorAll('.list1 > li');
list1Li[0].textContent = money[0] + '원';
list1Li[1].textContent = money[1] + '원';
list1Li[2].textContent = money[2] + '원';

console.log(list1Li);

console.log(money[0].toLocaleString('ko-kr'));
console.log(money[1].toLocaleString('ko-kr'));
console.log(money[2].toLocaleString('ko-kr'));

list1Li[3].children[0].textContent = itemName[0];
//li는 3, 그 안에 두번쨰 자식 p에 변수 itemPriceOrigina의 2번쨰 자식을 대입
list1Li[3].children[1].textContent = itemPriceOriginal[1];

//dl 안에 dt, dd에 가격 넣기
const studyDt = document.querySelectorAll('.study > dt');
const studyDd = document.querySelectorAll('.study > dd');
console.log(studyDt,studyDd);
//dt
studyDt[0].textContent = itemName[0];
studyDd[0].textContent = itemPriceOriginal[0];
//dt
studyDt[1].textContent = itemName[1];
studyDd[1].textContent = itemPriceOriginal[1];

//--------------------------------------배열 정리
let plate = ['계란','스테이크', '샐러드', '김치', '단무지', '쌀밥', '콩나물국']
plate[1] = '연어';
//전체출력
console.log(plate[3]);
console.log(plate[6]);
console.log(plate[0]);
//연어출력
console.log(plate[1]);

//---------------------------------------
//3.객체
const movie = { //객체변수
    name:'스파이더맨', //속성:값,
    price: 12000, 
} 
console.log(movie.name); //객체.속성 출력
console.log(movie.price);

//---------------------------------------객체+cgv DB연결
const cgv = document.querySelector('.cgv');
const cgvPsoter = cgv.querySelector('img');
const cgvTitle = cgv.querySelector('h2');
const cgvAge = cgv.querySelector('.age');
const cgvRate = cgv.querySelector('.rate');
const cgvGenre = cgv.querySelector('.genre');

console.log(cgv,cgvPsoter,cgvTitle,cgvAge,cgvRate);
cgvPsoter.src = moiveDb[0].poster;
cgvTitle.textContent = moiveDb[0].name;
cgvAge.textContent = moiveDb[0].age;
cgvRate.textContent = moiveDb[0].reservation_rate;
cgvGenre.textContent = moiveDb[0].genre[0];

//--------------------------------------객체변수 연습
const dessertTray = {
    top:['파란 마카롱','분홍 마카롱', '초록 마카롱', '노랑 마카롱'],
    middle:['슈크림','머핀','에그타르트'],
    bottom:['방울토마토','청포도','오렌지'],
}
console.log(dessertTray.top[3]);
console.log(dessertTray.middle[0]);
console.log(dessertTray.bottom[1]);
dessertTray.bottom[2] = '망고';
console.log(dessertTray);

//---------------------------------------증감연산자
let num = 1;
console.log(num); //1 (변수가 처음 대입된 값 테스트)

num++; //num을 1증가한다.
console.log(num); // 작성 순서를항상 체크하기 (위 연산 후 실행 테스트)

num-- //num을 1 감소시킨다.
console.log(num);
//---------------------------------------증감연산자, 2개의 변수활용
let number1 = 10;
let number2;
console.log(number1,number2); //초기값 테스트

number2 = number1++; //스스로한테도 영향을 줌
//증감연산자를 변수 뒤에 붙이면 기존 변수값을 대입(=)을 만나 number2로 먼저 보내고 ++로 number1을 나중에 증가시킴.
console.log(number1,number2); //초기값 테스트