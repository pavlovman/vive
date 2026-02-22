const partnerForm = document.getElementById("partner-form");
const partnerSubmit = document.getElementById("partner-submit");
const partnerStatus = document.getElementById("partner-status");

function randomIndex(max) {
  return Math.floor(Math.random() * max);
}

function setupLottoPage() {
  const lottoButton = document.getElementById("lotto-button");
  const lottoResult = document.getElementById("lotto-result");
  const lottoBonus = document.getElementById("lotto-bonus");

  if (!lottoButton || !lottoResult || !lottoBonus) return;

  function drawLotto() {
    const numbers = Array.from({ length: 45 }, (_, i) => i + 1);
    for (let i = numbers.length - 1; i > 0; i -= 1) {
      const j = randomIndex(i + 1);
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }

    const picked = numbers.slice(0, 6).sort((a, b) => a - b);
    const bonus = numbers[6];

    lottoResult.innerHTML = picked
      .map((num) => `<span class="lotto-ball">${num}</span>`)
      .join("");
    lottoBonus.textContent = String(bonus);
  }

  lottoButton.addEventListener("click", drawLotto);
}

function setupActivityPage() {
  const activityName = document.getElementById("activity-name");
  const activityReason = document.getElementById("activity-reason");
  const activityButton = document.getElementById("activity-button");

  if (!activityName || !activityReason || !activityButton) return;

  const activities = [
    { name: "책상 10분 정리", reason: "작은 정리만 해도 집중력이 바로 올라갑니다." },
    { name: "산책 20분", reason: "몸을 움직이면 머리가 맑아져요." },
    { name: "미뤘던 메일 1개 답장", reason: "가벼운 업무 완료로 부담을 줄일 수 있어요." },
    { name: "물 2컵 마시기", reason: "기본 컨디션 회복에 가장 빠른 방법입니다." },
    { name: "방금 할 일 3개 적기", reason: "우선순위가 보이면 실행이 쉬워집니다." },
    { name: "5분 스트레칭", reason: "굳은 몸을 풀면 피로감이 줄어듭니다." },
    { name: "영수증/문서 정리", reason: "쌓인 잡일을 처리하면 머리가 가벼워져요." },
    { name: "오늘 감사한 일 1개 기록", reason: "기분 전환에 효과적입니다." }
  ];

  let lastIndex = -1;

  function drawActivity() {
    let next = randomIndex(activities.length);
    while (activities.length > 1 && next === lastIndex) {
      next = randomIndex(activities.length);
    }
    lastIndex = next;

    activityName.textContent = activities[next].name;
    activityReason.textContent = activities[next].reason;
  }

  activityButton.addEventListener("click", drawActivity);
}

function setupStudyPage() {
  const studyName = document.getElementById("study-name");
  const studyReason = document.getElementById("study-reason");
  const studyButton = document.getElementById("study-button");

  if (!studyName || !studyReason || !studyButton) return;

  const subjects = [
    { name: "JavaScript 배열 메서드", reason: "실무에서 자주 써서 바로 효율이 올라갑니다." },
    { name: "CSS Flex/Grid 복습", reason: "레이아웃 구현 속도가 빨라집니다." },
    { name: "SQL JOIN 개념", reason: "데이터를 다룰 때 핵심이 되는 내용입니다." },
    { name: "Git 브랜치 전략", reason: "협업 품질을 높이는 기본기입니다." },
    { name: "HTTP 상태코드 정리", reason: "디버깅 시간을 줄이는 데 큰 도움이 됩니다." },
    { name: "자료구조: 스택/큐", reason: "문제 해결력의 기반을 탄탄하게 합니다." },
    { name: "알고리즘: 정렬", reason: "시간복잡도 감각을 키우기 좋습니다." },
    { name: "테스트 코드 기초", reason: "변경에 강한 코드를 만드는 출발점입니다." }
  ];

  let lastIndex = -1;

  function drawSubject() {
    let next = randomIndex(subjects.length);
    while (subjects.length > 1 && next === lastIndex) {
      next = randomIndex(subjects.length);
    }
    lastIndex = next;

    studyName.textContent = subjects[next].name;
    studyReason.textContent = subjects[next].reason;
  }

  studyButton.addEventListener("click", drawSubject);
}

function setupPartnerForm() {
  if (!partnerForm || !partnerSubmit || !partnerStatus) return;

  partnerForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    partnerSubmit.disabled = true;
    partnerStatus.textContent = "전송 중입니다...";

    try {
      const response = await fetch(partnerForm.action, {
        method: "POST",
        body: new FormData(partnerForm),
        headers: {
          Accept: "application/json"
        }
      });

      if (!response.ok) {
        throw new Error("submit_failed");
      }

      partnerForm.reset();
      partnerStatus.textContent = "문의가 접수되었습니다. 빠르게 확인 후 연락드릴게요.";
    } catch (_error) {
      partnerStatus.textContent = "전송에 실패했습니다. 잠시 후 다시 시도해 주세요.";
    } finally {
      partnerSubmit.disabled = false;
    }
  });
}

setupLottoPage();
setupActivityPage();
setupStudyPage();
setupPartnerForm();
