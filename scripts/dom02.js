//dom02.js
const m_menu = document.querySelector('.m_menu nav'); //복사하는 대상
const d_menu = document.querySelector('.d_menu'); // 붙여넣기하는 대상
console.log(m_menu,d_menu);
const cloneMenu = m_menu.cloneNode(true); //m_menu복사 true로 자식까지 복사
console.log(`복제대상확인 : ${cloneMenu}`);
console.log(cloneMenu);
d_menu.appendChild(cloneMenu); //복제한 메뉴를 d_menu에 넣음.