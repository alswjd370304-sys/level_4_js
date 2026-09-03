// 영화 DB
//어벤져스, 스파이더맨, 오디세이, 토이스토리5, 악마는 프라다를 입는다2, 슈퍼마리오갤럭시, 프로젝트헤일메리, 폭풍의 언덕
const movieDB = [
    {
        id: 1,
        title: '어벤져스: 둠스데이',
        date: '2026-12-18',
        poster: 'poster/poster_avengersdoomsday.jpg',
        genre: ['액션', 'SF', '모험'],
        director: '앤서니 루소, 조 루소',
        cast: ['로버트 다우니 주니어', '페드로 파스칼', '바네사 커비', '조셉 퀸', '에바 모스바흐라흐'],
        rating: 9.2,
        synopsis: '멀티버스의 사악한 위협에 맞서 지구와 우주의 영웅들이 다시 집결하여 새로운 강력한 적 닥터 둠과 벌이는 전 지구적 대서사시.'
    },
    {
        id: 2,
        title: '스파이더맨 4',
        date: '2026-07-24',
        poster: 'poster/poster_spidermanbrandnewday.jpg',
        genre: ['액션', 'SF', '모험'],
        director: '데스틴 대니얼 크레턴',
        cast: ['톰 홀랜드', '젠데이아'],
        rating: 8.8,
        synopsis: '모든 기억을 잃은 세상 속에서 정체를 숨기고 살아가는 피터 파커가 뉴욕을 위협하는 새로운 악당과 마주하며 벌어지는 새로운 이야기.'
    },
    {
        id: 3,
        title: '오디세이',
        date: '2026-07-17',
        poster: 'poster/poster_theodyssey.jpg',
        genre: ['모험', '드라마', '판타지'],
        director: '크리스토퍼 놀란',
        cast: ['맷 데이먼', '톰 홀랜드', '앤 해서웨이', '젠데이아', '루피타 뇽오'],
        rating: 9.5,
        synopsis: '호메로스의 서사시를 바탕으로, 트로이 전쟁 후 고향 이타카로 돌아가기 위해 10년간 시련을 겪는 오디세우스의 험난한 항해를 그린 거대한 서사시.'
    },
    {
        id: 4,
        title: '토이 스토리 5',
        date: '2026-06-19',
        poster: 'poster/poster_toystory5.jpg',
        genre: ['애니메이션', '모험', '코미디', '가족'],
        director: '앤드루 스탠턴',
        cast: ['톰 행크스', '팀 알렌'],
        rating: 9.0,
        synopsis: '스마트폰과 디지털 기기에 마음을 빼앗긴 요즘 아이들 사이에서, 장난감들이 마주하게 되는 시대적 변화와 새로운 모험 이야기.'
    },
    {
        id: 5,
        title: '악마는 프라다를 입는다 2',
        date: '2026-05-01',
        poster: 'poster/poster_thedevilwearsprada2.jpg',
        genre: ['드라마', '코미디'],
        director: '데이비드 프랭클',
        cast: ['메릴 스트립', '앤 해서웨이', '에밀리 블런트', '스탠리 투치'],
        rating: 8.5,
        synopsis: '전통 출판 매체의 위기 속에서 명품 브랜드를 상대로 한 광고 마케팅 사업을 이끄는 미란다와 그녀에게 대적하게 된 에밀리의 긴장감 넘치는 비즈니스 대결.'
    },
    {
        id: 6,
        title: '슈퍼 마리오 갤럭시',
        date: '2026-04-03',
        poster: 'poster/poster_thesupermariogalaxymovie.jpg',
        genre: ['애니메이션', '모험', 'SF', '코미디'],
        director: '아론 호바스, 마이클 제레닉',
        cast: ['크리스 프랫', '안야 테일러 조이', '잭 블랙', '찰리 데이'],
        rating: 8.9,
        synopsis: '우주를 배경으로 펼쳐지는 마리오와 로젤리나의 환상적인 광년 여행. 쿠파의 우주적 야망을 막기 위해 파워스타를 모으는 서사.'
    },
    {
        id: 7,
        title: '프로젝트 헤일메리',
        date: '2026-03-20',
        poster: 'poster/poster_projecthailmary.jpg',
        genre: ['SF', '드라마', '모험'],
        director: '필 로드, 크리스토퍼 밀러',
        cast: ['라이언 고슬링', '산드라 휠러', '밀라나 바인트루프'],
        rating: 9.4,
        synopsis: '태양의 에너지를 갉아먹는 유기체로 인해 인류 멸망의 위기에 처하자, 홀로 우주선 헤일메리호를 타고 미지의 성계로 떠난 과학자 라일랜드 그레이스의 인류 구원 임무.'
    },
    {
        id: 8,
        title: '폭풍의 언덕',
        date: '2026-02-13',
        poster: 'poster/poster_wutheringheights.jpg',
        genre: ['드라마', '로맨스'],
        director: '에메랄드 페넬',
        cast: ['마고 로비', '제이콥 엘로디'],
        rating: 8.7,
        synopsis: '에밀리 브론테의 고전 명작을 재해석한 작품으로, 히스클리프와 캐서린의 엇갈린 비극적 사랑과 폭풍 같은 비극적 복수극.'
    }
    ];
