const full_nav = document.querySelector('.full_nav').children[0];
const m_nav = document.querySelector('#m_nav');
const m_nav_btn = document.querySelector('#m_nav_btn');
const m_nav_bg = document.querySelector('.m_nav_bg');

const nav_clone = full_nav.cloneNode(true);
m_nav.appendChild(nav_clone)

let m_showHide_Boolean = 0;
//어떤변수의 초기값
//메뉴가안보인다=0
//메뉴가보인다=1

//m_nav_bg.style.display='none';

m_nav_btn.addEventListener('click',()=>{
    m_showHide_Boolean==0 ? m_navfunc('#fff', '0%', 1) : m_navfunc()
    // 0=메뉴가 보이는가? 맞으면 보이도록 틀리면 안보이도록
})

function m_navfunc(color='#222', rightVal='-100%', opacityVal=0){
    m_showHide_Boolean = !m_showHide_Boolean;
    //같은변수를 넣는다, !=오른쪽의 값을 반전에서 왼쪽에 대입한다.
    m_nav_btn.children[0].style.backgroundColor = color;
    m_nav_btn.children[1].style.backgroundColor = color;
    m_nav_btn.children[2].style.backgroundColor = color;
    m_nav_bg.style.right=rightVal;
    m_nav_bg.style.opacity=opacityVal;
    /* m_nav_bg.style.transiton = '';로 */
}

//클릭 이벤트 시 메뉴 보이기/숨기기
//m_nav_btn.addEventListener('click',()=>{
    //클릭 시 동적으로 구현하고자 하는 동자깅 2개인 경우
    //위 두 상황을 컴퓨터가 인식하는 0, 1로 구분해서 생각함.
    //메뉴가 보인다 ==1, 안보인다 ==0
    //사용자가 처음 접속시 보이는 거롤 시작하는지 안보이는 거롤 시작하는지에 따라 해당 닶을 변수의 초기값으로 저징
    //let m_showHide_Boolean = 0; //안보이는 걸로 시작한 초기값
    //사용자의 행동에 따라 변경된 초기값 예측을 위헤 조건식으로 작업
    //m_showHide_Boolean==0 ? m_navfunc('#fff', '0%', 1) : m_navfunc()
    //조건 ? 조간이 참일 때 실행: 조건이 거짓이면 실행
    //m_showHide_Boolean의 값이 0이 맞으면, 아니면에 따라 각각 다른 결과가 실행 
    //맞다<->아니다가 반복해서 돌아야 함으로 실행되는 함수 내에
    //m_showHide_Boolean = !m_showHide_Boolean;