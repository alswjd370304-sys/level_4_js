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
//기존회원 - 아이디, 비밀번호, 로그인 버튼 변수
const userIdCheck = document.querySelector('#user-id');
const userIdCheckBtn = document.querySelector('#member-login');
const userPw = document.querySelector('#user-pw');
const pwViaibleBtn =document.querySelector('#member-pw-visible');

//비회원 - 주문자명, 주문번호, 비회원 주문비밀번호, 주문조회 버튼 필수
const nonUserId = document.querySelector('#non-user-id');
const nonUserpw = document.querySelector('#non-user-pw');
const nonUserOrber = document.querySelector('#non-user-order');
const nonMemberBtn = document.querySelector('#non-member-login');
const pwVisibleNonBtn = document.querySelector('#non-member-pw-visible');

console.log(userIdCheck,userIdCheckBtn,userPw,pwViaibleBtn,pwVisibleNonBtn );

// userIdCheckBtn.addEventListener('click', ()=>{
//     warningWindow(userIdCheck, '아이디'); 
//     warningWindow(userPw, '비밀번호');
// })

// nonMemberBtn.addEventListener('click', ()=>{
//     warningWindow(nonUserId, '주문자명')
//     warningWindow(nonUserOrber, '주문자번호')
//     warningWindow(nonUserpw, '비회원비번')
// })

function warningWindow(dom,writeBox) {
    if(dom.value == ''){alert(`${writeBox}를(을) 입력하세요`);}
}

//기본회원) 논리연산자 활용한 아이디&비밀번호 동시 검사 수행 이벤트 + 함수
//목표2) 아이디, 비밀번호를 모두 적으면 '000님 환영합니다'
userIdCheckBtn.addEventListener('click', ()=>{
    //목표) 아이디, 비밀번호 중 하나라도 안적으면 '000을 입력하세요.'
    //유저 아이디의 값이 빈 문자열인가? 비밀번호`도` 값이 빈 문자열이 맞는가?
    // if(userIdCheck.value == '' && userPw.value == ''){}
    //유저 아이디 값이 빈 문자열인가? -> 비밀번호 검사 안하고 블록처리
    if(userIdCheck.value == '' || userPw.value == ''){
        //아이디가 참인지, 비밀번호가 참인지를 구분하는 조건문
        if(userIdCheck.value == '' && userPw.value == ''){
            alert('아이디와 비빌번호를 입력하세요');
        }else if(userIdCheck.value == ''){ // 하나의 조건세트에서 두번째 조건식이 필요할 때
            alert('아이디를 입력하세요');
        }else{//조건세트 안에 거짓을 처리할 때 (마지막에 한 번만 작성 가능)
            alert('비번을 입력하세요');
        }
    }
        //아이디 비밀번호 모두 썼을 때 블록 실행
        // if(userIdCheck.value != '' && userPw.value !== ''){
        //     alert(`${userIdCheck.value}님 환영합니다`)
        // }
        //삼항조건 ? 참:거짓
        //조건식 1개로 처리하는 if-else를 간편하게 쓰고 싶을 때
        userIdCheck.value != '' && userPw.value !== '' ?
        alert(`${userIdCheck.value}님 환영합니다`) : null;
        //null로 사용도 가능 -> 거짓이라는 뜻
});

//비회원 이벤트-함수
nonMemberBtn.addEventListener('click', ()=>{
    //목표1) 주문자명, 주문번호, 비회용주문비번을 모두 썼을 때 "ooo님 주문은 배송중입니다." 
    // if(nonUserId.value !== '' && nonUserpw.value !== '' && nonUserOrber.value !== '' ){
    //     alert(`${nonUserId.value}님 주문은 배송중입니다.`)
    // }
    //목표2) 주문자명, 주문번호, 비회원주문비번을 모두 쓰지 않았을 때 '주문자명, 주문번호, 주문비번을 입력해주세요.'
    if(nonUserId.value == '' || nonUserpw.value == '' || nonUserOrber.value == '' ){
        if(nonUserId.value == '' && nonUserpw.value == '' && nonUserOrber.value == ''){
        alert('주문자명, 주문번호, 비회원 비번을 입력해주세요');
        }else if(nonUserId.value == ''){
            alert('주문자명을 입력해주세요');
        }else if (nonUserOrber.value == ''){
            alert('주문번호를 입력해주세요');
        }else {
            alert('비회원 비번을 입력해주세요');
        }
    }
    //삼항조건
    nonUserId.value !== '' && nonUserpw.value !== '' && nonUserOrber.value !== '' ?
    alert(`${nonUserId.value}님 주문은 배송중입니다.`) : null;
});

//기본회원) 눈 아이콘 클릭 시 비밀번호 보이기/ 다시 누르면 비밀번호 숨기기
let pwVisibleStatus = 0; // 비번 숨김상태(••••)
pwViaibleBtn.addEventListener('click',()=>{
    pwVisibleStatus == 0 ?
    userPw.type = 'text'
    : userPw.type = 'password';
    pwVisibleStatus = !pwVisibleStatus;
});

//비회원주문 비밀번호
let pwVisibleNon = 0; // 비번숨김상태
pwVisibleNonBtn.addEventListener('click', ()=>{
    pwVisibleNon == 0 ?
    nonUserpw.type = 'text'
    : nonUserpw.type = 'password';
    pwVisibleNon = !pwVisibleNon;
})