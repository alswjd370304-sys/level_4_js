//1. 데스크탑 내비 복제 -> 모바일 내비 위치에 붙여넣기
//복제대상
const d_menu = document.querySelector('.full_nav .menu');
//붙여넣기 대상
const m_menu = document.querySelector('#m_nav');
//변수 출력
console.log(d_menu,m_menu);

//복제실행
const cloneMenu = d_menu.cloneNode(true);
m_menu.appendChild(cloneMenu);

//2.모바일 메뉴 클릭 시 모바일 배경+모바일메뉴 출력하기
//클릭대상
const m_nav_btn = document.querySelector('#m_nav_btn');
//나오는 대상
const m_nav_bg = document.querySelector('.m_nav_bg');

//컴퓨터가 이해하는 언어로 초기 기본값 설정
//안보이는 초기값 설정
let showMenu = 0;

m_nav_btn.addEventListener('click', ()=>{
    //m_nav_bg.style.opacity = '1';
    //m_nav_bg.style.right = '0';
    //클릭 이벤트의 동작이 1개 == (위 명령어로 끝)
    //클릭 이벤트의 동작이 2개 == (조건에 따른 함수 실행으로 코드업글)
    //보인다?안보인다?라는 뜻은 조건으로 불가능 -> 컴푸터가 이해하는 언어 0,1
    showMenu = !showMenu; //클릭이벤트가 실행될때마다 상태변수값 반전
    console.log(showMenu);//반전되는 값 확인
    //메뉴의 보이는 상태(showMenu)가 0(안보이는 상태)값이면 어떻게 할 것인가?
    //안보인다(참) -> right:0, opcity:1 
    //보인다(거짓) -> right:-100%, opacity:0
    showMenu == 0 ? (()=>{
        //안보인다(참) -> right:0, opcity:1 
        m_nav_bg.style.opacity = '1';
        m_nav_bg.style.right = '0';
    })() : (()=>{
        //보인다(거짓) -> right:-100%, opacity:0
        m_nav_bg.style.opacity = '0';
        m_nav_bg.style.right = '-100%';
    })();
    
})

