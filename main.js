const picks = [
  { name: "김치찌개", reason: "얼큰한 국물이라 오후 집중력이 살아나요." },
  { name: "제육볶음", reason: "매콤달콤한 맛으로 점심 만족도가 높아요." },
  { name: "돈가스", reason: "바삭한 식감 덕분에 스트레스가 풀려요." },
  { name: "비빔밥", reason: "채소와 단백질을 함께 챙기기 좋아요." },
  { name: "순대국", reason: "따뜻하고 든든해서 추운 날 특히 잘 맞아요." },
  { name: "마라탕", reason: "취향대로 토핑을 고르는 재미가 있어요." },
  { name: "쌀국수", reason: "부담 없이 깔끔하게 먹기 좋은 메뉴예요." },
  { name: "우동 + 튀김", reason: "가벼우면서도 포만감은 확실합니다." },
  { name: "샐러드 + 샌드위치", reason: "가볍게 먹고 오후를 산뜻하게 시작할 수 있어요." },
  { name: "햄버거 세트", reason: "빠르게 먹기 좋고 만족감이 즉각적이에요." },
  { name: "초밥", reason: "입맛 떨어진 날에도 무난하게 즐길 수 있어요." },
  { name: "부대찌개", reason: "여럿이 같이 먹으면 분위기까지 좋아져요." }
];

const menuName = document.getElementById("menu-name");
const menuReason = document.getElementById("menu-reason");
const pickButton = document.getElementById("pick-button");

let lastIndex = -1;

function randomIndex(max) {
  return Math.floor(Math.random() * max);
}

function getPick() {
  if (picks.length === 1) return picks[0];
  let index = randomIndex(picks.length);
  while (index === lastIndex) {
    index = randomIndex(picks.length);
  }
  lastIndex = index;
  return picks[index];
}

function renderPick() {
  const picked = getPick();
  menuName.textContent = picked.name;
  menuReason.textContent = picked.reason;
  menuName.classList.remove("flash");
  void menuName.offsetWidth;
  menuName.classList.add("flash");
}

pickButton.addEventListener("click", renderPick);
