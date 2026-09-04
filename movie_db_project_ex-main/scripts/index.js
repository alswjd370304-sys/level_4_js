//index.js
// 기존태그를 복제 CloneNode()
// 기존태그를 선택 querySelector()
// 새로운 태그 생성 createElement()
// 생성한 대상을 붙여넣기 appendChlid()

// ul를 선택해서 li를 생성하고 붙여넣기

const movieWrap1 = document.querySelector('.movie_wrap'); // 선택 ul 대상
//const movieLi = document.createElement('li'); //li를 생성

//목적1) 어벤져스 1개 li에 삽입하기
//붙여넣기 전에 li내용 채우기
//movieLi.textContent = '어벤져스';
//무언가를 대입하면 기존 것은 사라짐
//movieLi.textContent = movieDB[0].title; // 기존값을 제거하고 대입(기본뜻)
//movieLi.textContent += movieDB[0].date; // 기존에 더해서 대입하라 = 복합 대입
//movieWrap1.appendChild(movieLi); // li 붙여넣기

//목적1) 영화 DB 1~9개 모두 출력하기
//영화 하나 당 li
for(let i=0; i<8; i++){
    //li를 만들고 제목, 개봉일, 포스터 넣기 -> ul에 li 붙여넣기
    //innerHTML 태그를 함께 삽입할 떄 사용
    const movieLi = document.createElement('li');
    movieLi.innerHTML = `<h3>${movieDB[i].title}</h3>`;
    movieLi.innerHTML += `<p>${movieDB[i].date}</p>`;
    movieLi.innerHTML += `<a><img src="${movieDB[i].poster}" alt="${movieDB[i].title}"></a>`;
    movieWrap1.appendChild(movieLi);
}

//애니메이션 ul
const movieWrap2 = document.querySelector('.movie_wrap2');
//const movieLi = document.createElement('li');

for(let i=0; i<9; i++){
    console.log(i);
    const movieLi = document.createElement('li');
    movieLi.innerHTML = `<h3>${moiveAnimeDB[i].title}</h3>`;
    movieLi.innerHTML += `<p>${moiveAnimeDB[i].genre}</p>`;
    movieLi.innerHTML += `<p>${moiveAnimeDB[i].director}</p>`;
    movieLi.innerHTML += `<a><img src="${moiveAnimeDB[i].poster}" alt="${moiveAnimeDB[i].title}"></a>`;
    movieWrap2.appendChild(movieLi);
}

//---------------------------------------------------------------------------26/9/4
//무비차트 + swiper
// swiper-slide 생성해서 swiper-wrapper 붙여넣기
// swiper 플러그인 자체 함수 연결은 swiper 최종연결
const chart_swiper = document.querySelector('.chart_swiper'); //붙여넣기 할 대상

const chart_swiper_func = new Swiper(chart_swiper, { //스와이퍼 실행
    slidesPerView:2,
    spaceBetween:10,
});

for(let i=0; i<5; i++){
    const chart_slide = document.createElement('div'); //div 생성
    chart_slide.classList.add('swiper-slide'); // div에 클래스로 슬라이드 클래스 연결

    chart_slide.innerHTML = `<p class="num">${movieDB[i].id}위</p>`;
    chart_slide.innerHTML += `<h3>${movieDB[i].title}</h3>`;
    chart_slide.innerHTML += `<p class="rating">${movieDB[i].rating}</p>`;
    chart_slide.innerHTML += `<p class="synopsis">${movieDB[i].synopsis}</p>`;
    chart_slide.style.backgroundImage = `url(${movieDB[i].poster})`;

    chart_swiper.children[0].appendChild(chart_slide); // 붙여넣기
}

//애니메이션 무비차트 +swiper
const anime_swiper = document.querySelector('.anime_chart_swiper'); // 붙여넣기 할 대상

const anime_chart_swiper_func = new Swiper(anime_swiper,{
    slidesPerView:3,
    spaceBetween:10,
}); //스와이퍼 실행

for(let i=0; i<8; i++){
    const anime_chart_slide = document.createElement('div'); //div 생성
    anime_chart_slide.classList.add('swiper-slide'); //div에 슬라이드 클래스 붙이기

    anime_chart_slide.innerHTML = `<p class="num">${moiveAnimeDB[i].id}위</p>`;
    anime_chart_slide.innerHTML += `<h3>${moiveAnimeDB[i].title}</h3>`;
    anime_chart_slide.innerHTML += `<p>${moiveAnimeDB[i].rating}</p>`;
    anime_chart_slide.innerHTML += `<p>${moiveAnimeDB[i].director}</p>`;
    anime_chart_slide.innerHTML += `<p>${moiveAnimeDB[i].synopsis}</p>`;
    anime_chart_slide.style.backgroundImage = `url(${moiveAnimeDB[i].poster})`;

    anime_swiper.children[0].appendChild(anime_chart_slide); // 붙여넣기
}