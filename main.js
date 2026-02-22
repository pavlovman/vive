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
  { name: "부대찌개", reason: "여럿이 같이 먹으면 분위기까지 좋아져요." },
  { name: "된장찌개", reason: "구수한 맛으로 누구나 편하게 먹을 수 있어요." },
  { name: "닭갈비", reason: "매콤한 양념이 입맛을 확 끌어올려요." },
  { name: "칼국수", reason: "따끈한 국물과 면 조합이 든든해요." },
  { name: "육회비빔밥", reason: "특별한 점심을 원할 때 만족도가 높아요." },
  { name: "오므라이스", reason: "부드럽고 달달한 맛으로 실패 확률이 낮아요." },
  { name: "카레라이스", reason: "호불호가 적고 빠르게 식사하기 좋아요." },
  { name: "생선구이 정식", reason: "기름진 음식이 부담스러운 날에 잘 맞아요." },
  { name: "낙곱새", reason: "칼칼하고 진한 맛으로 중독성이 있어요." },
  { name: "갈비탕", reason: "진한 국물이라 몸이 지친 날 좋습니다." },
  { name: "냉면", reason: "입맛 없을 때도 시원하게 들어가요." },
  { name: "회덮밥", reason: "신선하고 상큼해서 깔끔한 점심에 좋아요." },
  { name: "참치김밥 + 라면", reason: "친숙한 조합이라 만족도가 안정적이에요." },
  { name: "치킨마요 덮밥", reason: "달콤짭짤해서 빠르게 행복해지는 메뉴예요." },
  { name: "규동", reason: "짭조름한 소고기 덮밥이 든든합니다." },
  { name: "텐동", reason: "바삭한 튀김으로 확실한 점심 보상을 줘요." },
  { name: "파스타", reason: "분위기 전환이 필요할 때 딱 좋아요." },
  { name: "리조또", reason: "포만감과 부드러운 식감이 균형이 좋아요." },
  { name: "타코", reason: "색다른 메뉴로 기분 전환하기 좋습니다." },
  { name: "피자 1인 세트", reason: "간편하면서도 만족감이 큰 선택이에요." },
  { name: "포케", reason: "가볍고 신선해서 오후가 편안해요." },
  { name: "샤브샤브", reason: "채소와 고기를 균형 있게 먹을 수 있어요." },
  { name: "찜닭", reason: "달콤짭짤한 양념이 밥과 잘 어울려요." },
  { name: "불고기 백반", reason: "익숙한 맛이라 팀 점심 메뉴로 안전해요." },
  { name: "감자탕", reason: "진하고 얼큰해 속까지 든든합니다." },
  { name: "로제떡볶이", reason: "매콤함과 고소함이 동시에 당길 때 좋아요." },
  { name: "닭개장", reason: "칼칼한 국물로 오후까지 따뜻하게 가요." },
  { name: "보쌈 정식", reason: "고기와 채소를 균형 있게 즐길 수 있어요." },
  { name: "꼬막비빔밥", reason: "감칠맛이 강해서 밥이 술술 넘어가요." }
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
