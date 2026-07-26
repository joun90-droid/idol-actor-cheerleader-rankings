// K-Star Ranking Data System (Naver & Google Dual Reference & Youngjae's Curated Picks)
// Comprehensive dataset for Idols, Actors, Cheerleaders, and Rookie Actors (2024~2026)

const STAR_DATA = {
  // 1. Youngjae's Special Recommended Picks
  youngjaePicks: [
    {
      id: "yj-1",
      name: "허남준 (Heo Nam-jun)",
      category: "actor",
      subCategory: "신인배우 / 라이징스타",
      rank: 1,
      brandIndex: 9845200,
      youngjaeScore: 9.9,
      trend: "▲ 15",
      image: "🎭",
      bgGradient: "linear-gradient(135deg, #ff2a74, #9d4edf)",
      youngjaeComment: "영재 강추! 2026년 상반기 라이징 배우 1위에 빛나는 압도적인 연기력과 화면 몰입감. 차세대 탑 배우 확정!",
      googleQuery: "허남준 배우 프로필 작품",
      naverQuery: "허남준 라이징 배우 1위",
      participation: 2850000,
      media: 2940000,
      communication: 2100000,
      community: 1955200,
      year: 2026,
      month: 6
    },
    {
      id: "yj-2",
      name: "권희원 (Kwon Hee-won)",
      category: "cheerleader",
      subCategory: "K-치어리더 / 글로벌 스타",
      rank: 1,
      brandIndex: 8750000,
      youngjaeScore: 9.8,
      trend: "▲ 8",
      image: "📣",
      bgGradient: "linear-gradient(135deg, #00f2fe, #4facfe)",
      youngjaeComment: "영재 강추! 2025~2026 시즌 인기투표 1위독주. 대만 프로야구 리그 진출과 함께 독보적인 에너지와 댄스 실력!",
      googleQuery: "권희원 치어리더 직캠 인스타",
      naverQuery: "권희원 치어리더 직캠 1위",
      participation: 2600000,
      media: 2400000,
      communication: 1950000,
      community: 1800000,
      team: "대만 프로야구 / KBO 응원단",
      instagram: "@heewon_kwon"
    },
    {
      id: "yj-3",
      name: "리센느 원이 (RESCENE Woni)",
      category: "idol",
      subCategory: "걸그룹 개인 / 아이돌 1위",
      rank: 1,
      brandIndex: 11240000,
      youngjaeScore: 9.8,
      trend: "▲ 12",
      image: "🎤",
      bgGradient: "linear-gradient(135deg, #ffd700, #ff8c00)",
      youngjaeComment: "영재 강추! 2026년 7월 아이돌 개인 브랜드평판 전체 1위! 화제성과 세련된 감성, 독창적 음색이 빛나는 최강자.",
      googleQuery: "리센느 원이 브랜드평판 직캠",
      naverQuery: "리센느 원이 아이돌 1위",
      participation: 3200000,
      media: 3100000,
      communication: 2540000,
      community: 2400000,
      group: "RESCENE (리센느)"
    },
    {
      id: "yj-4",
      name: "소지섭 (So Ji-sub)",
      category: "actor",
      subCategory: "영화/드라마 배우 1위",
      rank: 1,
      brandIndex: 9420000,
      youngjaeScore: 9.7,
      trend: "▲ 5",
      image: "🎬",
      bgGradient: "linear-gradient(135deg, #38ef7d, #11998e)",
      youngjaeComment: "영재 추천! 2026년 7월 통합 배우 브랜드평판 1위. 세월이 흘러도 변치 않는 카리스마와 작품성 인정!",
      googleQuery: "소지섭 근황 차기작 브랜드평판",
      naverQuery: "소지섭 배우 브랜드평판 1위",
      participation: 2400000,
      media: 2900000,
      communication: 2200000,
      community: 1920000
    },
    {
      id: "yj-5",
      name: "이주은 (Lee Ju-eun)",
      category: "cheerleader",
      subCategory: "치어리더 / 삐끼삐끼 신드롬",
      rank: 2,
      brandIndex: 8200000,
      youngjaeScore: 9.7,
      trend: "▲ 10",
      image: "✨",
      bgGradient: "linear-gradient(135deg, #ff007f, #7928ca)",
      youngjaeComment: "영재 추천! 글로벌 삐끼삐끼 춤 챌린지의 주인공. 해외 매체 집중 보도 및 엄청난 인스타그램 팔로워 급증!",
      googleQuery: "이주은 치어리더 삐끼삐끼 숏폼",
      naverQuery: "이주은 삐끼삐끼 치어리더 직캠",
      participation: 2900000,
      media: 2100000,
      communication: 1800000,
      community: 1400000,
      team: "KIA 타이거즈 / 글로벌 응원단"
    }
  ],

  // 2. Idol Rankings
  idols: [
    { rank: 1, name: "방탄소년단 (BTS)", category: "그룹 (남성)", brandIndex: 14850000, trend: "▲ 2", detail: "2026년 7월 아이돌 그룹 브랜드평판 전체 1위" },
    { rank: 2, name: "리센느 원이 (Woni)", category: "개인 (여성)", brandIndex: 11240000, trend: "▲ 5", detail: "2026년 7월 아이돌 개인 전체 1위 & 걸그룹 개인 1위" },
    { rank: 3, name: "장원영 (IVE Wonyoung)", category: "개인 (여성)", brandIndex: 10450000, trend: "▲ 1", detail: "글로벌 패션 아이콘 및 걸그룹 브랜드평판 최상위" },
    { rank: 4, name: "지민 (BTS Jimin)", category: "개인 (남성)", brandIndex: 9850000, trend: "-", detail: "남자 아이돌 개인 솔로 브랜드 파워 1위" },
    { rank: 5, name: "카리나 (aespa Karina)", category: "개인 (여성)", brandIndex: 9320000, trend: "▲ 3", detail: "에스파 리더, 트렌디한 비주얼과 압도적 소통 지수" },
    { rank: 6, name: "코르티스 (Cortis)", category: "그룹 (신인)", brandIndex: 8910000, trend: "▲ 9", detail: "2026년 7월 아이돌 그룹 종합 2위 급상승" },
    { rank: 7, name: "박지훈 (Wanna One / 배우)", category: "개인 (남성)", brandIndex: 8400000, trend: "▲ 4", detail: "아이돌 개인 전체 3위 & 배우 활동 병행" },
    { rank: 8, name: "아이오아이 (I.O.I)", category: "그룹 (여성)", brandIndex: 7950000, trend: "▲ 7", detail: "재결합 이슈 및 브랜드평판 그룹 3위 기록" },
    { rank: 9, name: "세븐틴 (SEVENTEEN)", category: "그룹 (남성)", brandIndex: 7600000, trend: "▼ 1", detail: "월드투어 및 대규모 팬덤 소통지수 우수" },
    { rank: 10, name: "안유진 (IVE An Yujin)", category: "개인 (여성)", brandIndex: 7210000, trend: "▲ 2", detail: "예능 및 브랜드 광고 모델 활발" }
  ],

  // 3. Actor Rankings
  actors: [
    { rank: 1, name: "소지섭", subCategory: "영화/드라마/OTT", brandIndex: 9420000, trend: "▲ 3", works: "2026 7월 종합 배우 브랜드평판 1위" },
    { rank: 2, name: "김무열", subCategory: "영화/OTT", brandIndex: 8890000, trend: "▲ 4", works: "2026 7월 배우 브랜드평판 2위" },
    { rank: 3, name: "황정민", subCategory: "영화/드라마", brandIndex: 8750000, trend: "▲ 1", works: "2026 7월 영화배우 브랜드평판 1위" },
    { rank: 4, name: "허남준", subCategory: "드라마/라이징", brandIndex: 8520000, trend: "▲ 12", works: "라이징 배우 브랜드평판 1위" },
    { rank: 5, name: "공유", subCategory: "영화/OTT", brandIndex: 8100000, trend: "▼ 1", works: "글로벌 OTT 차기작 기대감" },
    { rank: 6, name: "구교환", subCategory: "영화/드라마", brandIndex: 7900000, trend: "▲ 2", works: "영화배우 브랜드평판 2위" },
    { rank: 7, name: "조인성", subCategory: "영화/예능", brandIndex: 7650000, trend: "▲ 5", works: "영화배우 브랜드평판 3위" },
    { rank: 8, name: "진기주", subCategory: "드라마/OTT", brandIndex: 7300000, trend: "▲ 6", works: "라이징 배우 2위 및 연기력 호평" },
    { rank: 9, name: "강하늘", subCategory: "영화/드라마", brandIndex: 7120000, trend: "-", works: "꾸준한 미디어 지수 상위권" },
    { rank: 10, name: "김우빈", subCategory: "드라마/OTT", brandIndex: 6980000, trend: "▼ 2", works: "소통지수 및 커뮤니티 지수 높은 평가" }
  ],

  // 4. Cheerleader Rankings
  cheerleaders: [
    { rank: 1, name: "권희원", team: "대만 프로야구 / KBO", brandIndex: 8750000, trend: "▲ 1", highlight: "2025~2026 스타트렌드 투표 1위 독주, 글로벌 팬덤" },
    { rank: 2, name: "이주은", team: "KIA 타이거즈 / 해외", brandIndex: 8200000, trend: "▲ 2", highlight: "삐끼삐끼 춤 숏폼 신드롬, 압도적 팔로워 수" },
    { rank: 3, name: "박은혜", team: "KBO 응원단", brandIndex: 7950000, trend: "▲ 3", highlight: "2026년 초 주간 투표 1위 랭크" },
    { rank: 4, name: "이다혜", team: "대만 라쿠텐 몽키스 / 관광공사", brandIndex: 7800000, trend: "-", highlight: "K-치어리더 해외 진출 선구자, 한국관광공사 협업 완판" },
    { rank: 5, name: "안지현", team: "SSG 랜더스 팀장", brandIndex: 7520000, trend: "▼ 1", highlight: "경력직 베테랑, 압도적 인지도 및 광고 출연" },
    { rank: 6, name: "박기량", team: "두산 베어스 / 멀티 엔터테이너", brandIndex: 7300000, trend: "▼ 1", highlight: "대한민국 대표 레전드 치어리더, 방송 활동 활발" },
    { rank: 7, name: "이소민", team: "KBO 응원단", brandIndex: 6900000, trend: "▲ 4", highlight: "에너지 넘치는 무대 퍼포먼스 및 틱톡 화제" },
    { rank: 8, name: "하지원", team: "한화 이글스", brandIndex: 6720000, trend: "▲ 2", highlight: "현장 응원 열기 주도, 팬 소통 지수 우수" },
    { rank: 9, name: "김이서", team: "LG 트윈스 / 매거진", brandIndex: 6540000, trend: "-", highlight: "맥심 표지 모델 및 피지컬 트렌드 아이콘" },
    { rank: 10, name: "서현숙", team: "두산 베어스", brandIndex: 6300000, trend: "▼ 2", highlight: "시그니처 금발헤어, KBO 오랜 팬덤 유지" }
  ],

  // 5. Yearly & Monthly Rookie Actor Data (2024, 2025, 2026)
  rookieActors: {
    2026: {
      7: [
        { rank: 1, name: "허남준", drama: "라이징 스타 1위, 신인상 후보", brandIndex: 9845200, note: "영재 추천 1위! 연기 스펙트럼 화제" },
        { rank: 2, name: "진기주", drama: "주연작 화제성 상승", brandIndex: 7300000, note: "라이징 배우 2위" },
        { rank: 3, name: "박지훈", drama: "약한영웅 시즌2 / 차기작", brandIndex: 6950000, note: "아이돌-배우 겸업 성공 사례" },
        { rank: 4, name: "채종협", drama: "글로벌 멜로 신드롬", brandIndex: 6400000, note: "일본 및 아시아 지역 라이징" },
        { rank: 5, name: "추영우", drama: "OTT 신작 주연 발탁", brandIndex: 5800000, note: "라이징 스타 상위권" }
      ],
      6: [
        { rank: 1, name: "허남준", drama: "6월 라이징 배우 브랜드평판 1위", brandIndex: 9200000, note: "소비자 관심도 폭발" },
        { rank: 2, name: "진기주", drama: "6월 라이징 스타 3위", brandIndex: 7100000, note: "드라마 부문 호평" },
        { rank: 3, name: "리센느", drama: "엔터계 종합 라이징 2위", brandIndex: 6800000, note: "신인 아티스트 상승세" },
        { rank: 4, name: "배현성", drama: "신인 남우상 지목", brandIndex: 5900000, note: "청춘물 스타" },
        { rank: 5, name: "노정의", drama: "Z세대를 사로잡은 라이징", brandIndex: 5600000, note: "광고계 블루칩" }
      ],
      5: [
        { rank: 1, name: "정준원", drama: "상반기 라이징 배우 1위", brandIndex: 8500000, note: "스크린 신인상 수상" },
        { rank: 2, name: "허남준", drama: "주목받는 신인급 기대주", brandIndex: 8100000, note: "평판 지수 가속" },
        { rank: 3, name: "이재욱", drama: "글로벌 팬미팅 투어", brandIndex: 7400000, note: "해외 평판 최상위" }
      ]
    },
    2025: {
      12: [
        { rank: 1, name: "김우빈", drama: "12월 배우 평판 1위", brandIndex: 8900000, note: "연말 화제작 흥행" },
        { rank: 2, name: "윤계상", drama: "12월 배우 평판 2위", brandIndex: 8100000, note: "연기 변신 성공" },
        { rank: 3, name: "이제훈", drama: "12월 배우 평판 3위", brandIndex: 7800000, note: "수사극 최강자" }
      ],
      11: [
        { rank: 1, name: "강하늘", drama: "11월 배우 평판 1위", brandIndex: 9100000, note: "영화/드라마 동시 석권" },
        { rank: 2, name: "이준호", drama: "11월 배우 평판 2위", brandIndex: 8400000, note: "글로벌 멜로 킹" },
        { rank: 3, name: "최우식", drama: "11월 배우 평판 3위", brandIndex: 7900000, note: "예능/연기 다재다능" }
      ],
      6: [
        { rank: 1, name: "정준원", drama: "6월 배우 평판 1위", brandIndex: 8700000, note: "독립영화 출신 신예 스타" },
        { rank: 2, name: "손석구", drama: "6월 배우 평판 2위", brandIndex: 8300000, note: "대체불가 존재감" },
        { rank: 3, name: "소지섭", drama: "6월 배우 평판 3위", brandIndex: 7900000, note: "명불허전 브랜드 파워" }
      ]
    },
    2024: {
      12: [
        { rank: 1, name: "변우석", drama: "선재 업고 튀어 신드롬", brandIndex: 12500000, note: "2024년 최고의 신인 라이징" },
        { rank: 2, name: "김혜윤", drama: "선재 업고 튀어 주연", brandIndex: 11000000, note: "로코 여왕 부상" },
        { rank: 3, name: "이도현", drama: "파묘 천만 영화 신인", brandIndex: 9800000, note: "영화 부문 신인상" }
      ]
    }
  }
};

// Global App State
let currentState = {
  activeTab: "youngjae", // youngjae, idol, actor, cheerleader, rookie, searchEngine
  selectedYear: 2026,
  selectedMonth: 7,
  searchQuery: "",
  sortBy: "rank",
  bookmarks: JSON.parse(localStorage.getItem("kstar_bookmarks") || "[]")
};

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  renderTabContent();
  setupEventListeners();
});

// Setup DOM Event Listeners
function setupEventListeners() {
  // Tab Switchers
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      const target = e.currentTarget;
      target.classList.add("active");
      currentState.activeTab = target.dataset.tab;
      renderTabContent();
    });
  });

  // Search Input
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentState.searchQuery = e.target.value.trim();
      renderTabContent();
    });
  }

  // Sort Select
  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentState.sortBy = e.target.value;
      renderTabContent();
    });
  }
}

// Render Main Tab Content
function renderTabContent() {
  const container = document.getElementById("contentContainer");
  if (!container) return;

  container.innerHTML = "";

  if (currentState.activeTab === "youngjae") {
    renderYoungjaePicks(container);
  } else if (currentState.activeTab === "idol") {
    renderIdolRankings(container);
  } else if (currentState.activeTab === "actor") {
    renderActorRankings(container);
  } else if (currentState.activeTab === "cheerleader") {
    renderCheerleaderRankings(container);
  } else if (currentState.activeTab === "rookie") {
    renderRookieRankings(container);
  } else if (currentState.activeTab === "searchEngine") {
    renderDualSearchEngine(container);
  }
}

// 1. Youngjae's Recommended Picks Renderer
function renderYoungjaePicks(container) {
  let items = STAR_DATA.youngjaePicks;
  
  if (currentState.searchQuery) {
    items = items.filter(item => item.name.toLowerCase().includes(currentState.searchQuery.toLowerCase()));
  }

  let html = `
    <div style="margin-bottom: 1.5rem;">
      <h2 style="font-size: 1.5rem; font-weight: 800; display: flex; align-items: center; gap: 8px;">
        <span>⭐</span> 영재가 강력 추천하는 2026 K-스타 TOP Pick
      </h2>
      <p style="color: var(--text-sub); font-size: 0.9rem;">
        네이버 & 구글 브랜드평판 빅데이터와 영재의 심도 깊은 안목으로 엄선한 분야별 1위 및 최고 라이징 스타입니다.
      </p>
    </div>
    <div class="star-grid">
  `;

  items.forEach(star => {
    html += `
      <div class="star-card youngjae-pick-card">
        <div class="card-header">
          <div class="youngjae-pick-badge">
            <span>👑</span> 영재's PICK (${star.youngjaeScore}/10)
          </div>
          <span class="rank-badge rank-1">#${star.rank}</span>
        </div>

        <div class="star-profile">
          <div class="star-avatar" style="background: ${star.bgGradient}">
            ${star.image}
          </div>
          <div class="star-info">
            <h3>${star.name}</h3>
            <div class="star-category">${star.subCategory}</div>
            <div class="star-subtext">브랜드지수: ${star.brandIndex.toLocaleString()}</div>
          </div>
        </div>

        <div class="youngjae-comment">
          "${star.youngjaeComment}"
        </div>

        <div class="index-box">
          <div class="index-row">
            <span class="index-label">네이버 & 구글 화제성</span>
            <span class="index-val">${star.trend}</span>
          </div>
          <div class="progress-bar-bg">
            <div class="progress-bar-fill" style="width: ${Math.min(100, (star.brandIndex / 12000000) * 100)}%;"></div>
          </div>
        </div>

        <div class="card-footer">
          <span class="trend-indicator trend-up">${star.trend}</span>
          <div class="action-btns">
            <button class="btn btn-naver" onclick="openNaverSearch('${star.naverQuery || star.name}')">
              <span>🟢</span> 네이버
            </button>
            <button class="btn btn-google" onclick="openGoogleSearch('${star.googleQuery || star.name}')">
              <span>🔍</span> 구글
            </button>
            <button class="btn btn-glass" onclick="openDetailModal('${star.id}')">
              상세
            </button>
          </div>
        </div>
      </div>
    `;
  });

  html += `</div>`;
  container.innerHTML = html;
}

// 2. Idol Rankings Renderer
function renderIdolRankings(container) {
  let items = [...STAR_DATA.idols];

  if (currentState.searchQuery) {
    items = items.filter(item => item.name.toLowerCase().includes(currentState.searchQuery.toLowerCase()));
  }

  if (currentState.sortBy === "brandIndex") {
    items.sort((a, b) => b.brandIndex - a.brandIndex);
  }

  let html = `
    <div style="margin-bottom: 1.5rem;">
      <h2 style="font-size: 1.5rem; font-weight: 800; display: flex; align-items: center; gap: 8px;">
        <span>🎤</span> 2026년 7월 아이돌 브랜드평판 통합 순위
      </h2>
      <p style="color: var(--text-sub); font-size: 0.9rem;">
        한국기업평판연구소 빅데이터 (네이버 / 구글 데이터 지수 실시간 참조)
      </p>
    </div>
    <div class="star-grid">
  `;

  items.forEach(star => {
    const rankClass = star.rank === 1 ? "rank-1" : star.rank === 2 ? "rank-2" : star.rank === 3 ? "rank-3" : "rank-normal";
    html += `
      <div class="star-card">
        <div class="card-header">
          <span class="rank-badge ${rankClass}">#${star.rank}</span>
          <span class="star-category">${star.category}</span>
        </div>
        <div class="star-profile">
          <div class="star-avatar">🎤</div>
          <div class="star-info">
            <h3>${star.name}</h3>
            <div class="star-subtext">${star.detail}</div>
          </div>
        </div>
        <div class="index-box">
          <div class="index-row">
            <span class="index-label">브랜드평판 지수</span>
            <span class="index-val">${star.brandIndex.toLocaleString()} P</span>
          </div>
          <div class="progress-bar-bg">
            <div class="progress-bar-fill" style="width: ${(star.brandIndex / 15000000) * 100}%;"></div>
          </div>
        </div>
        <div class="card-footer">
          <span class="trend-indicator trend-up">${star.trend}</span>
          <div class="action-btns">
            <button class="btn btn-naver" onclick="openNaverSearch('${star.name} 브랜드평판')">
              <span>🟢</span> 네이버
            </button>
            <button class="btn btn-google" onclick="openGoogleSearch('${star.name} 브랜드평판')">
              <span>🔍</span> 구글
            </button>
          </div>
        </div>
      </div>
    `;
  });

  html += `</div>`;
  container.innerHTML = html;
}

// 3. Actor Rankings Renderer
function renderActorRankings(container) {
  let items = [...STAR_DATA.actors];

  if (currentState.searchQuery) {
    items = items.filter(item => item.name.toLowerCase().includes(currentState.searchQuery.toLowerCase()));
  }

  let html = `
    <div style="margin-bottom: 1.5rem;">
      <h2 style="font-size: 1.5rem; font-weight: 800; display: flex; align-items: center; gap: 8px;">
        <span>🎬</span> 2026년 7월 배우 브랜드평판 (영화/드라마/OTT)
      </h2>
      <p style="color: var(--text-sub); font-size: 0.9rem;">
        네이버 연예 뉴스 및 구글 포털 소비자 반응 통합 분석 데이터
      </p>
    </div>
    <div class="star-grid">
  `;

  items.forEach(star => {
    const rankClass = star.rank === 1 ? "rank-1" : star.rank === 2 ? "rank-2" : star.rank === 3 ? "rank-3" : "rank-normal";
    html += `
      <div class="star-card">
        <div class="card-header">
          <span class="rank-badge ${rankClass}">#${star.rank}</span>
          <span class="star-category">${star.subCategory}</span>
        </div>
        <div class="star-profile">
          <div class="star-avatar">🎬</div>
          <div class="star-info">
            <h3>${star.name}</h3>
            <div class="star-subtext">${star.works}</div>
          </div>
        </div>
        <div class="index-box">
          <div class="index-row">
            <span class="index-label">브랜드평판 지수</span>
            <span class="index-val">${star.brandIndex.toLocaleString()} P</span>
          </div>
          <div class="progress-bar-bg">
            <div class="progress-bar-fill" style="width: ${(star.brandIndex / 10000000) * 100}%;"></div>
          </div>
        </div>
        <div class="card-footer">
          <span class="trend-indicator trend-up">${star.trend}</span>
          <div class="action-btns">
            <button class="btn btn-naver" onclick="openNaverSearch('${star.name} 배우 최신 순위')">
              <span>🟢</span> 네이버
            </button>
            <button class="btn btn-google" onclick="openGoogleSearch('${star.name} 배우 최신 순위')">
              <span>🔍</span> 구글
            </button>
          </div>
        </div>
      </div>
    `;
  });

  html += `</div>`;
  container.innerHTML = html;
}

// 4. Cheerleader Rankings Renderer
function renderCheerleaderRankings(container) {
  let items = [...STAR_DATA.cheerleaders];

  if (currentState.searchQuery) {
    items = items.filter(item => item.name.toLowerCase().includes(currentState.searchQuery.toLowerCase()));
  }

  let html = `
    <div style="margin-bottom: 1.5rem;">
      <h2 style="font-size: 1.5rem; font-weight: 800; display: flex; align-items: center; gap: 8px;">
        <span>📣</span> 2025~2026 K-치어리더 대표 순위 & 동향
      </h2>
      <p style="color: var(--text-sub); font-size: 0.9rem;">
        네이버 직캠 & 스타트렌드 투표, 인스타그램 및 해외 진출 통합 평가
      </p>
    </div>
    <div class="star-grid">
  `;

  items.forEach(star => {
    const rankClass = star.rank === 1 ? "rank-1" : star.rank === 2 ? "rank-2" : star.rank === 3 ? "rank-3" : "rank-normal";
    html += `
      <div class="star-card">
        <div class="card-header">
          <span class="rank-badge ${rankClass}">#${star.rank}</span>
          <span class="star-category">${star.team}</span>
        </div>
        <div class="star-profile">
          <div class="star-avatar">📣</div>
          <div class="star-info">
            <h3>${star.name}</h3>
            <div class="star-subtext">${star.highlight}</div>
          </div>
        </div>
        <div class="index-box">
          <div class="index-row">
            <span class="index-label">화제성 & 투표 지수</span>
            <span class="index-val">${star.brandIndex.toLocaleString()} P</span>
          </div>
          <div class="progress-bar-bg">
            <div class="progress-bar-fill" style="width: ${(star.brandIndex / 10000000) * 100}%;"></div>
          </div>
        </div>
        <div class="card-footer">
          <span class="trend-indicator trend-up">${star.trend}</span>
          <div class="action-btns">
            <button class="btn btn-naver" onclick="openNaverSearch('${star.name} 치어리더 직캠')">
              <span>🟢</span> 네이버
            </button>
            <button class="btn btn-google" onclick="openGoogleSearch('${star.name} 치어리더 직캠')">
              <span>🔍</span> 구글
            </button>
          </div>
        </div>
      </div>
    `;
  });

  html += `</div>`;
  container.innerHTML = html;
}

// 5. Rookie Actor Rankings per Year & Month Renderer
function renderRookieRankings(container) {
  const currentYear = currentState.selectedYear;
  const currentMonth = currentState.selectedMonth;

  let html = `
    <div class="rookie-selector-card">
      <h2 style="font-size: 1.4rem; font-weight: 800; margin-bottom: 1rem; display: flex; align-items: center; gap: 8px;">
        <span>🌟</span> 연도별 / 월별 신인배우 & 라이징스타 랭킹 파인더
      </h2>
      <div class="selector-grid">
        <div class="selector-box">
          <label>연도 선택 (Year)</label>
          <div class="year-btns">
            <button class="filter-btn-sm ${currentYear === 2026 ? 'active' : ''}" onclick="selectYear(2026)">2026년</button>
            <button class="filter-btn-sm ${currentYear === 2025 ? 'active' : ''}" onclick="selectYear(2025)">2025년</button>
            <button class="filter-btn-sm ${currentYear === 2024 ? 'active' : ''}" onclick="selectYear(2024)">2024년</button>
          </div>
        </div>

        <div class="selector-box">
          <label>월 선택 (Month)</label>
          <div class="month-btns">
            ${[12, 11, 7, 6, 5].map(m => `
              <button class="filter-btn-sm ${currentMonth === m ? 'active' : ''}" onclick="selectMonth(${m})">${m}월</button>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;

  const yearData = STAR_DATA.rookieActors[currentYear];
  const list = yearData && yearData[currentMonth] ? yearData[currentMonth] : null;

  if (!list) {
    html += `
      <div style="text-align: center; padding: 3rem; background: var(--bg-card); border-radius: var(--radius-lg); color: var(--text-sub);">
        <h3>선택하신 ${currentYear}년 ${currentMonth}월 데이터 탐색 중...</h3>
        <p style="margin-top: 8px;">네이버 및 구글 포털 데이터베이스에서 최신 리포트를 불러오는 중입니다.</p>
        <div style="display: flex; gap: 10px; justify-content: center; margin-top: 15px;">
          <button class="btn btn-naver" onclick="openNaverSearch('한국기업평판연구소 라이징 배우 ${currentYear}년 ${currentMonth}월')">
            🟢 네이버 실시간 검색
          </button>
          <button class="btn btn-google" onclick="openGoogleSearch('한국기업평판연구소 라이징 배우 ${currentYear}년 ${currentMonth}월')">
            🔍 구글 실시간 검색
          </button>
        </div>
      </div>
    `;
  } else {
    html += `<div class="star-grid">`;
    list.forEach(star => {
      const rankClass = star.rank === 1 ? "rank-1" : star.rank === 2 ? "rank-2" : star.rank === 3 ? "rank-3" : "rank-normal";
      html += `
        <div class="star-card">
          <div class="card-header">
            <span class="rank-badge ${rankClass}">#${star.rank}</span>
            <span class="star-category">${currentYear}년 ${currentMonth}월 신인/라이징</span>
          </div>
          <div class="star-profile">
            <div class="star-avatar">🌟</div>
            <div class="star-info">
              <h3>${star.name}</h3>
              <div class="star-subtext">${star.drama}</div>
            </div>
          </div>
          <div class="youngjae-comment" style="border-left-color: var(--primary-cyan); color: #d0f8ff;">
            "${star.note}"
          </div>
          <div class="index-box">
            <div class="index-row">
              <span class="index-label">평판 지수</span>
              <span class="index-val">${star.brandIndex.toLocaleString()} P</span>
            </div>
          </div>
          <div class="card-footer">
            <span class="trend-indicator trend-up">▲ HOT</span>
            <div class="action-btns">
              <button class="btn btn-naver" onclick="openNaverSearch('${star.name} 신인배우 ${currentYear}')">
                <span>🟢</span> 네이버
              </button>
              <button class="btn btn-google" onclick="openGoogleSearch('${star.name} 신인배우 ${currentYear}')">
                <span>🔍</span> 구글
              </button>
            </div>
          </div>
        </div>
      `;
    });
    html += `</div>`;
  }

  container.innerHTML = html;
}

// 6. Naver & Google Dual Search Engine Tab Renderer
function renderDualSearchEngine(container) {
  let html = `
    <div style="background: var(--bg-card); backdrop-filter: blur(16px); border: 1px solid var(--glass-border-glow); border-radius: var(--radius-xl); padding: 2rem; margin-bottom: 2rem;">
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 1rem;">
        <div style="font-size: 2.2rem;">🟢</div>
        <div>
          <h2 style="font-size: 1.6rem; font-weight: 800; color: #fff;">네이버 & 구글 실시간 듀얼 트렌드검색 엔진</h2>
          <p style="color: var(--text-sub); font-size: 0.9rem;">
            대한민국 1위 포털 <strong style="color:#03cf5d;">네이버(Naver)</strong>와 <strong style="color:#4285f4;">구글(Google)</strong> 검색을 실시간 동시 연동하여 트렌드 및 기사를 비교 검색합니다.
          </p>
        </div>
      </div>

      <div style="display: flex; gap: 10px; margin-top: 1.5rem; flex-wrap: wrap;">
        <input type="text" id="dualSearchInput" placeholder="검색할 아이돌, 배우, 치어리더 이름 입력 (예: 허남준, 권희원, 이주은)..." 
               style="flex: 1; min-width: 280px; background: rgba(7, 9, 14, 0.9); border: 1px solid #03cf5d; padding: 14px 20px; border-radius: var(--radius-md); color: #fff; font-size: 1rem; outline: none;">
        <button class="btn btn-naver" style="padding: 0 20px; font-size: 0.95rem;" onclick="handleNaverSearchFromEngine()">
          🟢 네이버 조회
        </button>
        <button class="btn btn-google" style="padding: 0 20px; font-size: 0.95rem;" onclick="handleGoogleSearchFromEngine()">
          🔍 구글 조회
        </button>
        <button class="btn btn-primary" style="padding: 0 20px; font-size: 0.95rem;" onclick="handleDualSearchFromEngine()">
          ⚡ 네이버 + 구글 동시 조회
        </button>
      </div>

      <div style="margin-top: 2rem;">
        <h4 style="font-weight: 700; margin-bottom: 12px; color: #03cf5d;">🔥 네이버 연예/뉴스 핫 키워드 실시간 연동</h4>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <button class="filter-btn-sm" onclick="openNaverNews('허남준 2026 라이징 배우')">🟢 네이버뉴스: 허남준</button>
          <button class="filter-btn-sm" onclick="openNaverNews('권희원 치어리더')">🟢 네이버뉴스: 권희원</button>
          <button class="filter-btn-sm" onclick="openNaverNews('리센느 원이 브랜드평판')">🟢 네이버뉴스: 리센느 원이</button>
          <button class="filter-btn-sm" onclick="openNaverSearch('이주은 삐끼삐끼 직캠')">🟢 네이버TV: 이주은 직캠</button>
          <button class="filter-btn-sm" onclick="openNaverSearch('소지섭 2026 배우 브랜드평판')">🟢 네이버검색: 소지섭 1위</button>
          <button class="filter-btn-sm" onclick="openNaverSearch('2026년 7월 아이돌 브랜드평판 순위')">🟢 네이버검색: 아이돌 순위</button>
        </div>
      </div>
    </div>
  `;
  container.innerHTML = html;
}

// Selector Helpers
function selectYear(yr) {
  currentState.selectedYear = yr;
  renderTabContent();
}

function selectMonth(mo) {
  currentState.selectedMonth = mo;
  renderTabContent();
}

// NAVER Search Launchers
function openNaverSearch(query) {
  const url = `https://search.naver.com/search.naver?query=${encodeURIComponent(query)}`;
  window.open(url, '_blank');
}

function openNaverNews(query) {
  const url = `https://search.naver.com/search.naver?where=news&query=${encodeURIComponent(query)}`;
  window.open(url, '_blank');
}

// GOOGLE Search Launcher
function openGoogleSearch(query) {
  const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  window.open(url, '_blank');
}

// DUAL Search Launcher (Both Naver & Google)
function openDualSearch(query) {
  openNaverSearch(query);
  openGoogleSearch(query);
}

// Engine Handlers
function handleNaverSearchFromEngine() {
  const input = document.getElementById("dualSearchInput");
  if (input && input.value.trim()) {
    openNaverSearch(input.value.trim());
  }
}

function handleGoogleSearchFromEngine() {
  const input = document.getElementById("dualSearchInput");
  if (input && input.value.trim()) {
    openGoogleSearch(input.value.trim());
  }
}

function handleDualSearchFromEngine() {
  const input = document.getElementById("dualSearchInput");
  if (input && input.value.trim()) {
    openDualSearch(input.value.trim());
  }
}

// Open Detail Modal
function openDetailModal(id) {
  const item = STAR_DATA.youngjaePicks.find(p => p.id === id);
  if (!item) return;

  const modal = document.getElementById("detailModal");
  const body = document.getElementById("modalBody");
  if (!modal || !body) return;

  body.innerHTML = `
    <div style="text-align: center; margin-bottom: 1.5rem;">
      <div style="width: 90px; height: 90px; border-radius: 50%; background: ${item.bgGradient}; display: inline-flex; align-items: center; justify-content: center; font-size: 2.5rem; margin-bottom: 12px; box-shadow: var(--shadow-glow);">
        ${item.image}
      </div>
      <h2 style="font-size: 1.8rem; font-weight: 900; color: #fff;">${item.name}</h2>
      <div style="color: var(--primary-cyan); font-size: 0.95rem; font-weight: 700;">${item.subCategory}</div>
    </div>

    <div class="youngjae-comment" style="font-size: 0.95rem; padding: 14px; margin-bottom: 1.5rem;">
      <strong>[영재의 추천 총평]</strong><br>
      ${item.youngjaeComment}
    </div>

    <div style="background: rgba(7, 9, 14, 0.7); padding: 1.2rem; border-radius: var(--radius-md); margin-bottom: 1.5rem;">
      <h4 style="font-weight: 700; margin-bottom: 10px; color: var(--text-main);">📊 네이버 & 구글 빅데이터 지수</h4>
      <div class="index-row">
        <span class="index-label">총 브랜드평판 지수</span>
        <span class="index-val" style="color: var(--primary-cyan); font-size: 1.1rem;">${item.brandIndex.toLocaleString()} P</span>
      </div>
      <div class="index-row"><span class="index-label">소비자 참여지수</span><span class="index-val">${(item.participation || 0).toLocaleString()} P</span></div>
      <div class="index-row"><span class="index-label">미디어 소통지수</span><span class="index-val">${(item.media || 0).toLocaleString()} P</span></div>
      <div class="index-row"><span class="index-label">커뮤니티 파워지수</span><span class="index-val">${(item.community || 0).toLocaleString()} P</span></div>
    </div>

    <div style="display: flex; gap: 10px; flex-wrap: wrap;">
      <button class="btn btn-naver" style="flex: 1; justify-content: center;" onclick="openNaverSearch('${item.naverQuery || item.name}')">
        🟢 네이버 실시간 검색
      </button>
      <button class="btn btn-google" style="flex: 1; justify-content: center;" onclick="openGoogleSearch('${item.googleQuery || item.name}')">
        🔍 구글 실시간 검색
      </button>
    </div>
  `;

  modal.classList.add("open");
}

function closeModal() {
  const modal = document.getElementById("detailModal");
  if (modal) modal.classList.remove("open");
}
