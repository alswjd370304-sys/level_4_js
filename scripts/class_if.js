//class_if.js
const contentLi = document.querySelectorAll('.contents > li');
console.log(contentLi); //4개의 인덱스로 각각 li 출력 테스트

//Q. 첫번째 li 디자인 (테두리, 배경, 여백)
/* contentLi[0].style.borderBottom = '1px solid #000'; 
contentLi[0].style.backgroundColor = '#ff0'; 
contentLi[0].style.padding = '15px 6px';  */

//클래스를 불러올 때는 classList.add를 사용
contentLi[0].classList.add('design_set1');
contentLi[2].classList.add('design_set1');
contentLi[3].classList.add('design_set1');

contentLi[0].addEventListener('click', ()=>{
    //토글 앞 대상에 따라 다양한 효과를 낼 수 있음.
    contentLi[0].classList.toggle('design_set1');
})

const search_open_wrap = document.querySelector('.search_open_wrap');
const search_btn = document.querySelector('#search_btn');

//1. 초기 검색하기 숨기기
//2. 검색버튼 클릭 시 검색하기 보이기
//3. 검샏버튼 클릭 시 검색하기 숨기기

search_open_wrap.classList.add('target_showHide');
search_btn.addEventListener('click', ()=>{
    search_open_wrap.classList.toggle('target_showHide');
});

//1.하트를 클릭하면 색이 변하도록 
const like_btn = document.querySelector('#like_btn');
like_btn.addEventListener('click', ()=>{
    like_btn.classList.toggle('like_btn_color');
})

//---------------------------------------------조건 참/거짓
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean("abc"));
console.log(1>2);//비교연산자 사용
console.log(3 >= 2);//비교연산자 사용
console.log("" == "abc");//비교연산자 사용

let a = 10;
let b = 20;

//a와b 변수의 값을 비교해서 조건겨로가 테스트
//if(조건식){조건식이 참일 때 실행결과}
//1단 조건
//a와 b가 다른가? 참 -> 출력
if(a != b){console.log('a와 b가 다르면 참');}
//a와 b가 같은가? 거짓 -> 출력불가
if(a == b){console.log('a와 b가 같으면 참');}

//2단 조건 (if-else는 한세트로 들 중 하나만 실행)
if(a < b) {
    console.log('a가b보다 작으면 참');
}else{
    console.log('a가b보다 작지 않으면 거짓')
}

//인쇄버튼 클릭 시 -> 인쇄하시겠습니까? 질문->(예) 누르면 인쇄실행
//인쇄버튼 클릭 시 -> 인쇄하시겠습니까? 질문->(아니요) 누르면 아무것도 실행안함
const print_btn = document.querySelector('#print_btn');
print_btn.addEventListener('click', ()=>{
    let printQ = confirm('인쇄하시겠습니까?');
    if(printQ == true){print();}
})