// 오늘의 집 클론코딩 프로젝트 - 쇼핑몰 상품 주문영역 + 상세페이지
//------------------------------------------------------------
//small1==big1
//small2==big2
//1.---------------------------변수
//small에 마우스를 올렸을 때 img src 변경
const smallThum = document.querySelectorAll('.small_thum img');
const bigThum = document.querySelector('.big_thum img');
console.log(smallThum, bigThum);
//2.---------------------------함수
//3.---------------------------이벤트
smallThum[0].addEventListener('mouseover',()=> {
    bigThum.src = smallThum[1].src ;
})
smallThum[1].addEventListener('mouseover',()=>{
    bigThum.src = smallThum[0].src
})

//-----------------------------------------------상품 옵션 선택에 따른 주문 정보 + 가격 8/28
//목표1) 색상 선택 시 선택 한 정보를 data-* 속성에 대입하고 대입한 값 확ㅇ니하기
//선택한 대상이 select-option태그라면 사용해야 하는 문법 아래
//DOM.options[Dom.selectedIndex].text -> 선택한 인덱스의 글자를 가져옴.
//DOM.options[Dom.selectedIndex].value ->선택한 인덱스의 속성을 가져옴
// const colorSelect = document.querySelector('#color');
const colorSelect = document.querySelector('select[id=color]');
const optResult = document.querySelector('.opt_result'); //주문옵션 선택 시 출력
const sizeSelect = document.querySelector('select[id=size]');

console.log(colorSelect, optResult);
//주문옵션 숨기기/보이기 함수
function showHiedFunc(target, visible='none'){ return target.style.display = visible; }

//옵션 선택 시 호출 함수
function optResultFunc(dom, dataValue){
    if(dom.selectedIndex > 0){
        let changeOpt = dom.option[dom.selectedIndex].text;
        dom.dataset.dataValue = changeOpt;
        showHiedFunc(optResult, 'flex');
        return optResult.children[0].textContent = `색상 : ${colorSelect.dataset.color}, 사이즈 : ${sizeSelect.dataset.size}`;
    }
}
//위 함수 호출을 이용한 이벤트 함수
sizeSelect.addEventListener('change',()=>{optResultFunc(sizeSelect, 'size')})
colorSelect.addEventListener('change',()=>{optResultFunc(colorSelect, 'color')})

//select태그 변수 이벤트를 제작 시 사용해야하는 이벤트 종류 : change
// colorSelect.addEventListener('change',()=>{
//     if(colorSelect.selectedIndex > 0){ //첫번째(0) 안내문을 제외한 조건문
//         // console.log('colorSelect 변경확인');
//     let changeOpt = colorSelect.options[colorSelect.selectedIndex].text;
//     // console.log(changeOpt); // 위 변수 test

//     //data-* 속성에 사용자가 선택한 정보 저장하기
//     //dom.dataset.속성명; //읽기
//     //dom.dataset.속성명 = 값; //수정, 삭제
//     colorSelect.dataset.color = changeOpt; //수정
//     //console.log(colorSelect.dataset.color); //위 명령 test

//     //선택 색상옵션이 opt_result의 result자식 "색상:"자리에 삽입
//     showHide(optResult, 'flex');
//     optResult.children[0].textContent = `색상 : ${colorSelect.dataset.color}`;
//     }
// });


// //사이즈 옵션 선택 시 주문옵션에 출력하기(안내문은 제외)
// sizeSelect.addEventListener('change', ()=>{
//     if(sizeSelect.selectedIndex > 0){
//         let changeOpt = sizeSelect.options[sizeSelect.selectedIndex].text;
//         sizeSelect.dataset.size = changeOpt;
//         showHide(optResult, 'flex');
//         // console.log(sizeSelect.dataset.size );
//         showHide(optResult, 'flex');
//         optResult.children[0].textContent = `사이즈 ${sizeSelect.dataset.size} `;
//     }
// })

//1. 옵션 선택 시 출력되는 옵션 결과 처음부터 숨기기
// optResult.style.display = 'none';
showHide(optResult);

function showHide(target, visible='none'){
    return target.style.display = visible;
}