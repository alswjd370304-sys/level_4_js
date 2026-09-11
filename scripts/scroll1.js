//scroll1.js
//window 객체를 활용한 scroll 이벤트
//스크롤 이동 시 인식하는 이벤트 종류(멈출 떈 인식안함)
const nav = document.querySelector('nav');
const topCTA = document.querySelector('#top');
const header = document.querySelector('header');
const aside = document.querySelectorAll('aside a');
const section = document.querySelectorAll('section');

//CTA 클릭 이벤트
topCTA.addEventListener('click', ()=>{
    //window.scrollTo(0,120) //x,y값 순서대로
    window.scrollTo({left:0, top:0, behavior: 'smooth'}) //부드러운 이동이 필요할 때
})

window.addEventListener('scroll',()=>{
    //스크롤 위치에 따라 섹션이 화면 중앙보다 더 위로 올라오면 각 섹션의 제목 색상이 변화
    for(let s of section){
        //console.log(s); //for~of가 순회하는 대상 테스트
        const sTop = s.getBoundingClientRect().top;
        //console.log(sTop); // 각 섹션 top 위치값 테스트
        //화면상단(0) 기준 
        //섹션의 위(top) 부분이 화면 위에서 150px 지점보다 같거나 더 위로 올라와 있다면 조건문 실행
        if(sTop <= 150){
            //console.log('조건실행 테스트 ');
            //console.log(s);
            for(let a of aside){
                //console.log(a);
                a.classList.remove('active');
                if(s.id == a.dataset.target){a.classList.add('active');}
            }//asdide-a 종료위치
        }//조건문 종료 위치
    }


    //console.log('스크롤 중..');
    // nav.textContent = window.scrollY+'px';
    // 디자인에 따라 스크롤 출력 값에 소수점이 나올 경우 -> 계산이 쉽도록 정수로 변환하기
    let scrollVal = Math.round(window.scrollY);
    // Math.round() 소수점 반올림 함수
    nav.textContent = scrollVal+'px'

    //스크롤 위치에 따라 CTA 보이기/숨기기
    if(window.scrollY >= 400){
        topCTA.classList.add('active');
    }else{
        topCTA.classList.remove('active');
    }
// 스크롤 할 때 메뉴 한줄로 만들기
    if(window.scrollY >= 120) {
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }

})//스크롤 이벤트 종료 위치
window.addEventListener('resize',()=>{
    console.log('크기조절 중..');
})//크기조절 이벤트 조욜 위치