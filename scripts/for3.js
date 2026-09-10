//for3.js
//for~in
//2개 이상의 인덱스로 이루어진 배열, 객체, DOm요소 순회하는 반복문
const flower = ['장미', '민들레', '수선화', '나팔꽃'];
//for(det 초기변수에 in 대입할 대상){반복처리}
for(let f in flower){
    console.log(f);
    console.log(flower[f]); //for~in이 추출한 인덱스를 활용해서 배열값 출력
}

//객체 인덱스 추출하기
const birthday = [{
    date:'1월',
    flower:'장미',
},{
    date:'2월',
    flower:'민들레',
}];

console.log('---------------------------------------------');

//위 변수 활용 - 인덱스 추출, 1월, 2월, 장미, 민들레
for(let b in birthday){
    //console.log(b);
    console.log(birthday[b].date);
    console.log(birthday[b].flower);
}

console.log('---------------------------------------------');
//로그인 오류 검증 반복문 + 조건문 (버튼 클릭 시 수행)
const loginBtn = document.querySelector('#login_btn');
const inFrm = document.querySelector('#inFrm'); //form태그 (안쪽 검사 input들 잡기 위해 부모 대상)

//로그인 버튼 클릭 시 수행 함수
loginBtn.addEventListener('click', ()=>{
    //모든 검증은 버튼 안에서 수행
    //헷갈리는 각각의 데이터를 잡을 때는 객체로 잡아야함.
    const valFrm = {
        id:inFrm.user_id.value, //속성:폼.아이디인풋.값
        pw:inFrm.user_pw.value, //속성:폼.비밀번호인풋.값
    }
    console.log(valFrm); //위 변수 출력 확인
    console.log(valFrm.id); //개별 속성 출력문법 v2 (기본)
    console.log(valFrm['id']); //객체 속성 출력문법 v2(for~in)
    
    for(let v in valFrm){
        console.log(v);
        console.log(valFrm[v]);
        if(valFrm[v] === ''){
            document.querySelector('#login_msg').textContent = '값을 입력하세요';
        }
    } // 기본적으로 인덱스를 출력하지만 객체라면 순차적으로 접근함.
})//클릭 이벤트 종료

console.log('---------------------------------------------');

//for~of
//for(let 초기변수생성 of 대입할변수대상){반복처리할 명령}
const animals = ['강아지', '고양이', '앵무새', '금붕어', '돌고래'];

for(let a in animals){console.log(a);} //인덱스 출력확인
for(let a of animals){console.log(a);} //인덱스가 아닌 오브젝트가 출력됨.

const list = document.querySelector('.list');
for(let a of animals){
    const li = document.createElement('li');
    li.textContent = a;
    li.style.padding ='4px 6px';
    li.style.borderBottom ='1px solid #222';
    list.appendChild(li);
}//animals 반복 종료

const animalsLi = document.querySelectorAll('.list li');
for(let i of animalsLi){
    console.log(i); //생성 li 출력 확인
    i.addEventListener('mouseover', ()=>{
        i.style.borderColor = 'red';
    })
}

console.log('---------------------------------------------');

//forEach
const tab_title = document.querySelectorAll('.tab_title a');
const tab_contents = document.querySelectorAll('.tab_contents > li > ul');
//특정 객체의 인덱스만 사용할 때 for~in -> 눌렀을 때 보이는 컨텐츠
//오브젝트만 사용할 때 for~of -> 누를 때
//모두 사용할 때 forEach
//객체.forEach((객체매개변수, 인덱스매개변수, 배열매개변수)=>{})
//매개변수명은 자유롭게 설정 가능

tab_title.forEach((o, i)=>{
    console.log(o, i);
    o.addEventListener('click', ()=>{
    console.log(o, i);
        for(let reset of tab_title){reset.classList.remove('active');} //제목의 클래스 비활성화
        o.classList.add('active') //클릭한 제목만 활성화 클래스적용
        console.log(i);
        for(let show of tab_contents){show.classList.remove('active');}
        tab_contents[i].classList.add('active');
    })
})

function resetFunc(target){
    for(let reset of target){reset.classList.remove('active');}
    return
}