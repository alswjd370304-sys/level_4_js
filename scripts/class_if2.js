//class_if2.js
//css 속성을 1~2개 일회성으로 사용시 
//객체.style.속성 = '값';
//객체.style.속성 = '값';
//css 2개 이상의 속성을 반복사용으로 사용시
//css 파일에서 별도의 클래스 준비 -> 불러오기
//함수종류: add, remove, toggle, replace

//클래스 제어를 클릭했을 때 경고표시로 빨갛게 변함.
//변수
const pTag = document.querySelector('p');
const btn1 = document.querySelector('#btn1');
const userIdInput = document.querySelector('#user_id');
console.log(pTag,btn1,userIdInput);

btn1.addEventListener('click', ()=>{
    //add는 한 번 적용하면 끝
    //toggle은 스위치 on/off 개념으로 사용가능
    //pTag.classList.toggle('error')
    //textContent = 글자만 인식
    // pTag.textContent = '<em>로그인</em>에 실패했습니다';
    //속성으로 태그를 붙일 수 있음
    // pTag.classList.add('error')
    // pTag.innerHTML = '<em>로그인</em>에 실패했습니다';

    //입력을 안하고 버튼을 누르면 아이디 입력 오류 출력
    //입력을 하고 버튼을 누르면 결과 없음
    //조건식) 아이디(입력값)를 입력했는가? 참/거짓
    console.log(userIdInput.value); //값 테스트
    console.log(Boolean(userIdInput.value)); //논리 테스트
    if(userIdInput.value== '') {//()안 조건이 참일 때 실행결과
        pTag.classList.add('error')
        pTag.innerHTML = '<em>아이디</em>입력하세요.';
    }else{
        //앞 조건이 거짓일 때
        pTag.classList.remove('error')
        pTag.innerHTML = '<em>로그인</em>성공하셨습니다.';
    }
    //빈문자가 아니면 참
    // if(userIdInput.value !== ''){
    //  pTag.classList.remove('error')
    //  pTag.innerHTML = '<em>로그인</em>성공하셨습니다.';
    // }
    //if(userIdInput.value){
    //  pTag.classList.remove('error')
    //  pTag.innerHTML = '<em>로그인</em>성공하셨습니다.';
    // }
});


