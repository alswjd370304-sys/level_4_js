//login.js
//목표)각 탭 제목 클릭 시 해당되는 내용 표시하고 나머지 숨기기
//1. 비회원(비활성화) 내용 초반 숨기기
//2. 각 탭 제목을 클릭 시
//3. 기존회원을 클릭하면 비회원 내용 숨기기
//4. 비회원을 클릭하면 기존회원 내용 숨기기

const loginTanTitle = document.querySelectorAll('#login-frm .title button');
const loginTabContent = document.querySelectorAll('#login-frm .contents > ul');
//ul 앞에 >를 쓰는 이유: 앞으로도 ul이 중복되지 않을거란 보장이 없기 때문임

console.log(loginTanTitle,loginTabContent);
//style과 classList를 반복해서 사용하지 않기
loginTabContent[1].classList.add('display-hide');

//비회원 주문 조회 클릭 시(초기모습과 반대되는 상황 먼저 테스트)
loginTanTitle[1].addEventListener('click', ()=>{loginTabFunc(1)});
loginTanTitle[0].addEventListener('click', ()=>{loginTabFunc(0)});

//반복 함수를 별도 생성(힘수안에 달라지는 건 매개변수로 미리 지정)
function loginTabFunc(index) {
    //0,1(모두 숨기기), 1(보이기) == 0
    loginTabContent[0].classList.add('display-hide');
    loginTabContent[1].classList.add('display-hide');//모두 숨기기
    loginTabContent[index].classList.remove('display-hide');//클릭대상과 일치하는 대상만 보이기
    loginTanTitle[0].classList.remove('active')
    loginTanTitle[1].classList.remove('active')//모두 비활성화
    loginTanTitle[index].classList.add('active')//클릭대상과 일치하는 대상만 보이기
    return;
}

//목표2) 기존회원-아이디를 입력안하고 기존회원로그인 버튼 클릭 시 '아이디를 입력하세요' 경고창 출력
//변수
//기존회원
const userIdCheck = document.querySelector('#user-id');
const userIdCheckBtn = document.querySelector('#member-login');
const userPw = document.querySelector('#user-pw');
//비회원
const nonUserId = document.querySelector('#non-user-id');
const nonUserpw = document.querySelector('#non-user-pw');
const nonUserOrber = document.querySelector('#non-user-order');
const nonMemberBtn = document.querySelector('#non-member-login');
console.log(userIdCheck,userIdCheckBtn,userPw );

userIdCheckBtn.addEventListener('click', ()=>{
    warningWindow(userIdCheck, '아이디'); 
    warningWindow(userPw, '비밀번호');
})

nonMemberBtn.addEventListener('click', ()=>{
    warningWindow(nonUserId, '주문자명')
    warningWindow(nonUserOrber, '주문자번호')
    warningWindow(nonUserpw, '비회원비번')
})

function warningWindow(dom,writeBox) {
    if(dom.value == ''){alert(`${writeBox}를(을) 입력하세요`);}
}
