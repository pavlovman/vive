const partnerForm = document.getElementById("partner-form");
const partnerSubmit = document.getElementById("partner-submit");
const partnerStatus = document.getElementById("partner-status");

const LANGUAGE_STORAGE_KEY = "learning-space-language";
const LANGUAGE_CHANGE_EVENT = "learning-space:languagechange";
const DEFAULT_LANGUAGE = "ko";
const LANGUAGE_OPTIONS = [
  { code: "ko", label: "한국어", locale: "ko-KR" },
  { code: "en", label: "English", locale: "en-US" },
  { code: "ja", label: "日本語", locale: "ja-JP" },
  { code: "zh", label: "中文", locale: "zh-CN" },
  { code: "es", label: "Español", locale: "es-ES" }
];

const LANGUAGE_COPY = {
  ko: {
    common: {
      languagePrefix: "언어",
      navAria: "추천 페이지 이동",
      footerAria: "정책 페이지",
      nav: {
        animal: "동물상 분석",
        lotto: "로또 번호",
        activity: "오늘 할 일",
        study: "공부 주제",
        lunch: "음식 추천"
      },
      fabs: {
        comments: "댓글",
        partner: "제휴문의",
        home: "메인으로"
      },
      footer: {
        about: "사이트 소개",
        privacy: "개인정보처리방침",
        terms: "이용약관",
        contact: "문의하기",
        home: "홈으로",
        geo: "AI 검색 가이드"
      },
      footerCopy: "© 2026 랜덤 추천 사이트 | 마지막 업데이트: 2026-02-23"
    },
    pages: {
      index: {
        title: "랜덤 추천 - 로또 번호",
        description: "랜덤 로또 번호 추천",
        badge: "RANDOM PICKER",
        heading: "로또 번호 추천",
        subtitle: "1~45 중 6개 번호와 보너스 번호를 랜덤으로 뽑아드립니다.",
        pickLabel: "이번 추천 번호",
        bonusLabel: "보너스",
        drawButton: "번호 다시 뽑기",
        infoLabel: "서비스 안내",
        infoTitle: "랜덤 추천 사이트 이용 방법",
        infoParagraphs: [
          "이 페이지는 재미와 참고 목적의 랜덤 번호 추천 도구입니다. 실제 구매 판단은 본인의 책임하에 진행해 주세요.",
          "추천 결과는 매 요청마다 새롭게 생성되며, 개인 정보는 저장하지 않습니다. 서비스 품질 개선을 위해 화면 구성과 문구는 주기적으로 업데이트됩니다."
        ]
      },
      activity: {
        title: "랜덤 추천 - 오늘 할 일",
        description: "오늘 할 일 랜덤 추천",
        badge: "RANDOM PICKER",
        heading: "오늘 할 일 추천",
        subtitle: "가볍게 바로 시작할 수 있는 할 일을 랜덤으로 추천해드립니다.",
        todayLabel: "오늘의 한 가지",
        prompt: "버튼을 눌러 할 일을 추천받으세요",
        defaultReason: "작게 시작하면 하루가 훨씬 빨리 풀립니다.",
        drawButton: "할 일 뽑기",
        infoLabel: "콘텐츠 안내",
        infoTitle: "추천 기준",
        infoParagraphs: [
          "오늘 할 일 추천은 즉시 실행 가능한 짧은 행동을 중심으로 구성되어 있습니다. 업무, 건강, 정리 습관처럼 일상 생산성에 도움이 되는 항목을 우선합니다.",
          "추천 문구는 사용자가 빠르게 행동으로 옮길 수 있도록 간결한 이유를 함께 제공합니다. 페이지 내용은 사용자 피드백을 반영해 보완됩니다."
        ]
      },
      study: {
        title: "랜덤 추천 - 공부 주제",
        description: "공부 주제 랜덤 추천",
        badge: "RANDOM PICKER",
        heading: "공부 주제 추천",
        subtitle: "무엇을 공부할지 고민될 때 바로 시작할 주제를 골라드립니다.",
        todayLabel: "오늘의 학습 주제",
        prompt: "버튼을 눌러 공부 주제를 추천받으세요",
        defaultReason: "작은 분량이라도 꾸준히 하면 실력이 쌓입니다.",
        drawButton: "주제 뽑기",
        infoLabel: "콘텐츠 안내",
        infoTitle: "학습 주제 선정 원칙",
        infoParagraphs: [
          "공부 주제 추천은 실무 활용도가 높은 기초 주제를 우선 배치합니다. 한 번에 너무 많은 내용을 다루기보다, 바로 시작 가능한 범위의 학습을 제안합니다.",
          "추천 결과는 학습 동기 유지를 돕기 위해 짧은 설명과 함께 제공되며, 난이도 균형을 맞추기 위해 지속적으로 조정합니다."
        ]
      },
      lunch: {
        title: "랜덤 추천 - 음식 추천",
        description: "점심 음식 랜덤 추천",
        badge: "RANDOM PICKER",
        heading: "음식 추천",
        subtitle: "카테고리를 고른 뒤 버튼을 눌러 메뉴를 추천받으세요.",
        menuLabel: "오늘의 추천 메뉴",
        filterAria: "메뉴 카테고리 필터",
        filters: {
          all: "전체",
          korean: "한식",
          chinese: "중식",
          japanese: "일식",
          western: "양식"
        },
        prompt: "버튼을 눌러 메뉴를 추천받으세요",
        defaultReason: "오늘 기분에 맞는 메뉴를 골라드립니다.",
        noMenuTitle: "추천 가능한 메뉴가 없어요",
        noMenuReason: "다른 카테고리를 선택해 주세요.",
        drawButton: "메뉴 추천 받기",
        infoLabel: "콘텐츠 안내",
        infoTitle: "음식 추천 데이터 구성",
        infoParagraphs: [
          "음식 추천은 한식, 중식, 일식, 양식 카테고리를 기준으로 분류되어 있습니다. 특정 메뉴가 반복 노출되지 않도록 같은 카테고리 내 연속 추천을 제한합니다.",
          "본 서비스는 식당 예약이나 배달 플랫폼과 직접 연결되지 않으며, 메뉴 선택 참고를 위한 정보성 도구로 제공됩니다."
        ]
      },
      animal: {
        title: "동물상 분석 | 랜덤 추천",
        description: "Teachable Machine으로 동물상(강아지상/고양이상) 분석",
        badge: "TEACHABLE MACHINE",
        heading: "동물상 분석",
        subtitle: "사진을 업로드하고 분석하기를 누르면 동물상 예측 결과와 확률이 표시됩니다.",
        analyzeLabel: "사진 업로드 분석",
        analyzeButton: "분석하기",
        statusDefault: "사진 파일을 올린 뒤 분석하기 버튼을 눌러주세요.",
        previewAlt: "업로드한 사진 미리보기",
        infoLabel: "중요 안내",
        infoTitle: "동물상 분석 결과 해석",
        infoParagraphs: [
          "이 결과는 Teachable Machine 분류 모델의 예측값으로, 오락 및 참고 목적입니다. 인물의 성격, 능력, 신체적 특성을 판정하는 기능이 아닙니다.",
          "업로드한 이미지 파일은 브라우저에서만 처리되며 서버에 저장하지 않습니다. 모델 정확도는 조명, 각도, 표정, 이미지 품질에 따라 달라질 수 있습니다."
        ]
      },
      partner: {
        title: "제휴 문의 | 랜덤 추천",
        description: "랜덤 추천 사이트 제휴 문의",
        badge: "PARTNERSHIP",
        heading: "제휴 문의",
        subtitle: "협업 제안을 남겨주시면 빠르게 확인 후 연락드리겠습니다.",
        formLabel: "제휴 문의",
        formTitle: "협업 제안을 보내주세요",
        fieldName: "이름",
        fieldEmail: "이메일",
        fieldCompany: "회사명",
        fieldPhone: "연락처",
        fieldMessage: "문의 내용",
        submitButton: "제휴문의 보내기",
        subject: "[랜덤 추천 사이트] 제휴 문의"
      },
      comments: {
        title: "댓글 | 랜덤 추천",
        description: "랜덤 추천 사이트 댓글 페이지",
        badge: "COMMUNITY",
        heading: "댓글",
        subtitle: "아래에서 자유롭게 의견을 남겨주세요."
      }
    },
    runtime: {
      partner: {
        sending: "전송 중입니다...",
        success: "문의가 접수되었습니다. 빠르게 확인 후 연락드릴게요.",
        fail: "전송에 실패했습니다. 잠시 후 다시 시도해 주세요."
      },
      animal: {
        selectFile: "먼저 이미지 파일을 선택해 주세요.",
        loading: "모델을 불러오고 분석 중입니다...",
        donePrefix: "분석 완료: ",
        doneSuffix: " 가능성이 가장 높습니다.",
        loadFail: "모델 라이브러리를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.",
        ready: "이미지 준비 완료. 분석하기 버튼을 눌러주세요."
      }
    }
  },
  en: {
    common: {
      languagePrefix: "Language",
      navAria: "Go to recommendation pages",
      footerAria: "Policy pages",
      nav: {
        animal: "Animal Face",
        lotto: "Lotto",
        activity: "To-Do",
        study: "Study Topic",
        lunch: "Meal Picker"
      },
      fabs: {
        comments: "Comments",
        partner: "Partner",
        home: "Home"
      },
      footer: {
        about: "About",
        privacy: "Privacy",
        terms: "Terms",
        contact: "Contact",
        home: "Home",
        geo: "AI Search Guide"
      },
      footerCopy: "© 2026 Random Picks | Last update: 2026-02-23"
    },
    pages: {
      index: {
        title: "Random Picks - Lotto Numbers",
        description: "Random lotto number recommendation",
        badge: "RANDOM PICKER",
        heading: "Lotto Number Picker",
        subtitle: "Draw 6 numbers and 1 bonus number from 1 to 45.",
        pickLabel: "Recommended Numbers",
        bonusLabel: "Bonus",
        drawButton: "Draw Again",
        infoLabel: "Service Info",
        infoTitle: "How to Use This Page",
        infoParagraphs: [
          "This page is a fun reference tool for random lotto picks. Any purchase decision is your responsibility.",
          "Results are generated fresh on each request, and personal data is not stored. UI and copy may be updated to improve quality."
        ]
      },
      activity: {
        title: "Random Picks - Today\'s To-Do",
        description: "Random to-do recommendation",
        badge: "RANDOM PICKER",
        heading: "Today\'s To-Do",
        subtitle: "Get one simple task you can start right away.",
        todayLabel: "One Task for Today",
        prompt: "Press the button to get a task",
        defaultReason: "A small start can change the whole day.",
        drawButton: "Pick a Task",
        infoLabel: "Content Guide",
        infoTitle: "Selection Criteria",
        infoParagraphs: [
          "Tasks are short and actionable. We prioritize items that improve daily productivity, health, and routines.",
          "Each recommendation includes a short reason so you can act immediately. Wording is updated from user feedback."
        ]
      },
      study: {
        title: "Random Picks - Study Topic",
        description: "Random study topic recommendation",
        badge: "RANDOM PICKER",
        heading: "Study Topic Picker",
        subtitle: "When you feel stuck, pick one topic and begin now.",
        todayLabel: "Today\'s Study Topic",
        prompt: "Press the button to get a study topic",
        defaultReason: "Consistent small progress builds real skill.",
        drawButton: "Pick a Topic",
        infoLabel: "Content Guide",
        infoTitle: "Topic Selection Principle",
        infoParagraphs: [
          "Topics focus on practical fundamentals with high real-world use. We suggest scopes you can start immediately.",
          "Recommendations include concise reasons and are tuned continuously for balanced difficulty."
        ]
      },
      lunch: {
        title: "Random Picks - Meal Recommendation",
        description: "Random lunch menu recommendation",
        badge: "RANDOM PICKER",
        heading: "Meal Picker",
        subtitle: "Choose a category and get a menu suggestion.",
        menuLabel: "Today\'s Menu",
        filterAria: "Menu category filters",
        filters: {
          all: "All",
          korean: "Korean",
          chinese: "Chinese",
          japanese: "Japanese",
          western: "Western"
        },
        prompt: "Press the button to get a menu",
        defaultReason: "We\'ll suggest something that fits your mood today.",
        noMenuTitle: "No menu available",
        noMenuReason: "Please choose another category.",
        drawButton: "Recommend a Menu",
        infoLabel: "Content Guide",
        infoTitle: "How Menu Data Is Built",
        infoParagraphs: [
          "Menus are grouped into Korean, Chinese, Japanese, and Western categories. Repeating the same item in a row is limited.",
          "This service does not connect directly to reservation or delivery platforms. It is an informational helper for choosing food."
        ]
      },
      animal: {
        title: "Animal Face Analyzer | Random Picks",
        description: "Analyze your animal face type with Teachable Machine",
        badge: "TEACHABLE MACHINE",
        heading: "Animal Face Analyzer",
        subtitle: "Upload a photo and tap analyze to see predictions and probabilities.",
        analyzeLabel: "Photo Analysis",
        analyzeButton: "Analyze",
        statusDefault: "Upload a photo file, then press Analyze.",
        previewAlt: "Uploaded photo preview",
        infoLabel: "Important Note",
        infoTitle: "How to Read the Result",
        infoParagraphs: [
          "This output is from a Teachable Machine classifier and is for fun and reference only. It does not judge personality or ability.",
          "Uploaded image files are processed in the browser only and not stored on our server. Accuracy varies by lighting, angle, expression, and quality."
        ]
      },
      partner: {
        title: "Partnership Inquiry | Random Picks",
        description: "Partnership inquiry for Random Picks",
        badge: "PARTNERSHIP",
        heading: "Partnership Inquiry",
        subtitle: "Send your proposal and we\'ll get back to you quickly.",
        formLabel: "Partnership Inquiry",
        formTitle: "Tell Us About Your Proposal",
        fieldName: "Name",
        fieldEmail: "Email",
        fieldCompany: "Company",
        fieldPhone: "Phone",
        fieldMessage: "Message",
        submitButton: "Send Inquiry",
        subject: "[Random Picks] Partnership Inquiry"
      },
      comments: {
        title: "Comments | Random Picks",
        description: "Comments page for Random Picks",
        badge: "COMMUNITY",
        heading: "Comments",
        subtitle: "Share your thoughts freely below."
      }
    },
    runtime: {
      partner: {
        sending: "Sending...",
        success: "Your inquiry has been submitted. We\'ll contact you soon.",
        fail: "Failed to send. Please try again in a moment."
      },
      animal: {
        selectFile: "Please choose an image file first.",
        loading: "Loading model and running analysis...",
        donePrefix: "Analysis complete: ",
        doneSuffix: " is the most likely result.",
        loadFail: "Could not load model libraries. Please try again shortly.",
        ready: "Image is ready. Press Analyze."
      }
    }
  },
  ja: {
    common: {
      languagePrefix: "言語",
      navAria: "おすすめページへ移動",
      footerAria: "ポリシーページ",
      nav: {
        animal: "動物顔診断",
        lotto: "ロト番号",
        activity: "今日のやること",
        study: "学習テーマ",
        lunch: "食事おすすめ"
      },
      fabs: {
        comments: "コメント",
        partner: "提携問い合わせ",
        home: "ホーム"
      },
      footer: {
        about: "サイト紹介",
        privacy: "プライバシーポリシー",
        terms: "利用規約",
        contact: "お問い合わせ",
        home: "ホーム",
        geo: "AI検索ガイド"
      },
      footerCopy: "© 2026 ランダムおすすめ | 最終更新: 2026-02-23"
    },
    pages: {
      index: {
        title: "ランダムおすすめ - ロト番号",
        description: "ランダムロト番号おすすめ",
        badge: "RANDOM PICKER",
        heading: "ロト番号おすすめ",
        subtitle: "1〜45から6個の番号とボーナス番号を抽選します。",
        pickLabel: "今回のおすすめ番号",
        bonusLabel: "ボーナス",
        drawButton: "もう一度抽選",
        infoLabel: "サービス案内",
        infoTitle: "このページの使い方",
        infoParagraphs: [
          "このページは楽しみと参考のためのランダム番号ツールです。最終的な購入判断はご自身で行ってください。",
          "結果は毎回新しく生成され、個人情報は保存しません。品質向上のため文言やUIを定期的に更新します。"
        ]
      },
      activity: {
        title: "ランダムおすすめ - 今日のやること",
        description: "今日のやることをランダムでおすすめ",
        badge: "RANDOM PICKER",
        heading: "今日のやること",
        subtitle: "今すぐ始められるタスクを1つ提案します。",
        todayLabel: "今日の1つ",
        prompt: "ボタンを押してタスクを受け取ってください",
        defaultReason: "小さく始めると一日が軽くなります。",
        drawButton: "タスクを選ぶ",
        infoLabel: "コンテンツ案内",
        infoTitle: "おすすめ基準",
        infoParagraphs: [
          "短くて実行しやすい行動を中心に構成しています。日常の生産性に役立つ項目を優先します。",
          "すぐ行動に移せるよう、理由も短く提示します。フィードバックを反映して改善します。"
        ]
      },
      study: {
        title: "ランダムおすすめ - 学習テーマ",
        description: "学習テーマをランダムでおすすめ",
        badge: "RANDOM PICKER",
        heading: "学習テーマおすすめ",
        subtitle: "何を勉強するか迷ったら、今すぐ始めるテーマを選びます。",
        todayLabel: "今日の学習テーマ",
        prompt: "ボタンを押して学習テーマを受け取ってください",
        defaultReason: "少しずつでも継続すると力になります。",
        drawButton: "テーマを選ぶ",
        infoLabel: "コンテンツ案内",
        infoTitle: "テーマ選定の原則",
        infoParagraphs: [
          "実務で使いやすい基礎テーマを優先します。すぐ着手できる範囲を提案します。",
          "モチベーション維持のため、短い理由付きで提示し、難易度バランスを継続調整します。"
        ]
      },
      lunch: {
        title: "ランダムおすすめ - 食事おすすめ",
        description: "ランダムランチおすすめ",
        badge: "RANDOM PICKER",
        heading: "食事おすすめ",
        subtitle: "カテゴリを選んでボタンを押すとメニューを提案します。",
        menuLabel: "今日のおすすめメニュー",
        filterAria: "メニューカテゴリフィルター",
        filters: {
          all: "すべて",
          korean: "韓国料理",
          chinese: "中華",
          japanese: "和食",
          western: "洋食"
        },
        prompt: "ボタンを押してメニューを受け取ってください",
        defaultReason: "今日の気分に合うメニューを提案します。",
        noMenuTitle: "おすすめできるメニューがありません",
        noMenuReason: "別のカテゴリを選択してください。",
        drawButton: "メニューをおすすめ",
        infoLabel: "コンテンツ案内",
        infoTitle: "データ構成",
        infoParagraphs: [
          "韓国料理・中華・和食・洋食のカテゴリで構成されています。同じカテゴリ内で連続重複を抑えています。",
          "予約や配達サービスと直接連携はしておらず、メニュー選択の参考ツールです。"
        ]
      },
      animal: {
        title: "動物顔診断 | ランダムおすすめ",
        description: "Teachable Machineで動物顔タイプを分析",
        badge: "TEACHABLE MACHINE",
        heading: "動物顔診断",
        subtitle: "写真をアップロードして分析すると、予測結果と確率が表示されます。",
        analyzeLabel: "写真アップロード分析",
        analyzeButton: "分析する",
        statusDefault: "写真をアップロードしてから分析ボタンを押してください。",
        previewAlt: "アップロード画像プレビュー",
        infoLabel: "重要案内",
        infoTitle: "結果の見方",
        infoParagraphs: [
          "この結果はTeachable Machine分類モデルの予測値で、娯楽・参考目的です。性格や能力を判定するものではありません。",
          "画像はブラウザ内でのみ処理され、サーバーに保存しません。精度は照明・角度・表情・画質により変わります。"
        ]
      },
      partner: {
        title: "提携お問い合わせ | ランダムおすすめ",
        description: "ランダムおすすめサイト提携お問い合わせ",
        badge: "PARTNERSHIP",
        heading: "提携お問い合わせ",
        subtitle: "ご提案を送っていただければ、迅速に確認してご連絡します。",
        formLabel: "提携お問い合わせ",
        formTitle: "協業提案をお送りください",
        fieldName: "お名前",
        fieldEmail: "メール",
        fieldCompany: "会社名",
        fieldPhone: "連絡先",
        fieldMessage: "お問い合わせ内容",
        submitButton: "送信",
        subject: "[ランダムおすすめ] 提携お問い合わせ"
      },
      comments: {
        title: "コメント | ランダムおすすめ",
        description: "ランダムおすすめサイトのコメントページ",
        badge: "COMMUNITY",
        heading: "コメント",
        subtitle: "ご意見を自由に残してください。"
      }
    },
    runtime: {
      partner: {
        sending: "送信中です...",
        success: "お問い合わせを受け付けました。確認後ご連絡します。",
        fail: "送信に失敗しました。しばらくして再試行してください。"
      },
      animal: {
        selectFile: "先に画像ファイルを選択してください。",
        loading: "モデルを読み込み、分析しています...",
        donePrefix: "分析完了: ",
        doneSuffix: " の可能性が最も高いです。",
        loadFail: "モデルライブラリを読み込めませんでした。しばらくして再試行してください。",
        ready: "画像の準備ができました。分析ボタンを押してください。"
      }
    }
  },
  zh: {
    common: {
      languagePrefix: "语言",
      navAria: "推荐页面导航",
      footerAria: "政策页面",
      nav: {
        animal: "动物脸分析",
        lotto: "乐透号码",
        activity: "今日待办",
        study: "学习主题",
        lunch: "午餐推荐"
      },
      fabs: {
        comments: "评论",
        partner: "合作咨询",
        home: "主页"
      },
      footer: {
        about: "网站介绍",
        privacy: "隐私政策",
        terms: "使用条款",
        contact: "联系我们",
        home: "返回首页",
        geo: "AI 搜索指南"
      },
      footerCopy: "© 2026 随机推荐 | 最后更新: 2026-02-23"
    },
    pages: {
      index: {
        title: "随机推荐 - 乐透号码",
        description: "随机乐透号码推荐",
        badge: "RANDOM PICKER",
        heading: "乐透号码推荐",
        subtitle: "从 1~45 中随机抽取 6 个号码和 1 个特别号。",
        pickLabel: "本次推荐号码",
        bonusLabel: "特别号",
        drawButton: "重新抽取",
        infoLabel: "服务说明",
        infoTitle: "使用方式",
        infoParagraphs: [
          "本页面仅用于娱乐和参考。是否购买请自行判断并承担责任。",
          "每次请求都会生成新结果，不会保存个人信息。界面和文案会持续优化。"
        ]
      },
      activity: {
        title: "随机推荐 - 今日待办",
        description: "今日待办随机推荐",
        badge: "RANDOM PICKER",
        heading: "今日待办推荐",
        subtitle: "随机给你一个现在就能开始的小任务。",
        todayLabel: "今日一件事",
        prompt: "点击按钮获取待办推荐",
        defaultReason: "先做一个小动作，整天都会更顺。",
        drawButton: "抽取待办",
        infoLabel: "内容说明",
        infoTitle: "推荐标准",
        infoParagraphs: [
          "推荐以可立即执行的短任务为主，优先考虑效率、健康与整理习惯。",
          "每条推荐都附带简短理由，帮助你马上行动。文案会根据反馈持续更新。"
        ]
      },
      study: {
        title: "随机推荐 - 学习主题",
        description: "学习主题随机推荐",
        badge: "RANDOM PICKER",
        heading: "学习主题推荐",
        subtitle: "不知道学什么时，马上给你一个可开始的主题。",
        todayLabel: "今日学习主题",
        prompt: "点击按钮获取学习主题",
        defaultReason: "持续的小进步会积累成真正实力。",
        drawButton: "抽取主题",
        infoLabel: "内容说明",
        infoTitle: "主题选择原则",
        infoParagraphs: [
          "优先推荐实用性高的基础主题，范围控制在可以立刻开始的程度。",
          "推荐结果附带简短说明，并持续调整难度平衡。"
        ]
      },
      lunch: {
        title: "随机推荐 - 午餐推荐",
        description: "随机午餐推荐",
        badge: "RANDOM PICKER",
        heading: "午餐推荐",
        subtitle: "先选分类，再点击按钮获得菜单推荐。",
        menuLabel: "今日推荐菜单",
        filterAria: "菜单分类筛选",
        filters: {
          all: "全部",
          korean: "韩餐",
          chinese: "中餐",
          japanese: "日餐",
          western: "西餐"
        },
        prompt: "点击按钮获取菜单推荐",
        defaultReason: "按你今天的状态给你一个合适的选择。",
        noMenuTitle: "暂无可推荐菜单",
        noMenuReason: "请尝试其他分类。",
        drawButton: "获取菜单推荐",
        infoLabel: "内容说明",
        infoTitle: "数据构成",
        infoParagraphs: [
          "菜单按韩餐、中餐、日餐、西餐分类，同一分类会尽量避免连续重复。",
          "本服务不直接连接外卖或订位平台，仅作为点餐参考工具。"
        ]
      },
      animal: {
        title: "动物脸分析 | 随机推荐",
        description: "通过 Teachable Machine 进行动物脸分析",
        badge: "TEACHABLE MACHINE",
        heading: "动物脸分析",
        subtitle: "上传照片并点击分析，可查看预测结果和概率。",
        analyzeLabel: "照片上传分析",
        analyzeButton: "开始分析",
        statusDefault: "请先上传照片文件，然后点击分析。",
        previewAlt: "上传照片预览",
        infoLabel: "重要提示",
        infoTitle: "结果解读",
        infoParagraphs: [
          "该结果来自 Teachable Machine 分类模型，仅供娱乐和参考，不用于判断个人能力或性格。",
          "图片仅在浏览器中处理，不会保存到服务器。准确率会受光线、角度、表情和画质影响。"
        ]
      },
      partner: {
        title: "合作咨询 | 随机推荐",
        description: "随机推荐网站合作咨询",
        badge: "PARTNERSHIP",
        heading: "合作咨询",
        subtitle: "欢迎提交合作提案，我们会尽快回复。",
        formLabel: "合作咨询",
        formTitle: "请发送你的合作提案",
        fieldName: "姓名",
        fieldEmail: "邮箱",
        fieldCompany: "公司名",
        fieldPhone: "联系电话",
        fieldMessage: "咨询内容",
        submitButton: "发送咨询",
        subject: "[随机推荐] 合作咨询"
      },
      comments: {
        title: "评论 | 随机推荐",
        description: "随机推荐网站评论页",
        badge: "COMMUNITY",
        heading: "评论",
        subtitle: "欢迎在下方自由留言。"
      }
    },
    runtime: {
      partner: {
        sending: "正在发送...",
        success: "咨询已提交，我们会尽快与您联系。",
        fail: "发送失败，请稍后重试。"
      },
      animal: {
        selectFile: "请先选择图片文件。",
        loading: "正在加载模型并分析...",
        donePrefix: "分析完成：",
        doneSuffix: " 的可能性最高。",
        loadFail: "无法加载模型库，请稍后再试。",
        ready: "图片已准备好，请点击分析。"
      }
    }
  },
  es: {
    common: {
      languagePrefix: "Idioma",
      navAria: "Navegación de recomendaciones",
      footerAria: "Páginas de políticas",
      nav: {
        animal: "Rostro Animal",
        lotto: "Números Lotto",
        activity: "Tarea de Hoy",
        study: "Tema de Estudio",
        lunch: "Recomendación de Comida"
      },
      fabs: {
        comments: "Comentarios",
        partner: "Alianza",
        home: "Inicio"
      },
      footer: {
        about: "Acerca del Sitio",
        privacy: "Privacidad",
        terms: "Términos",
        contact: "Contacto",
        home: "Inicio",
        geo: "Guía de Búsqueda IA"
      },
      footerCopy: "© 2026 Recomendaciones Aleatorias | Última actualización: 2026-02-23"
    },
    pages: {
      index: {
        title: "Recomendaciones Aleatorias - Números Lotto",
        description: "Recomendación aleatoria de números lotto",
        badge: "RANDOM PICKER",
        heading: "Recomendador de Números Lotto",
        subtitle: "Elige 6 números y 1 bono entre 1 y 45.",
        pickLabel: "Números recomendados",
        bonusLabel: "Bono",
        drawButton: "Sortear de Nuevo",
        infoLabel: "Información del Servicio",
        infoTitle: "Cómo usar esta página",
        infoParagraphs: [
          "Esta página es una herramienta de referencia y entretenimiento. La decisión final de compra es tu responsabilidad.",
          "Cada resultado se genera de nuevo en cada solicitud y no guardamos datos personales. El contenido puede actualizarse para mejorar la calidad."
        ]
      },
      activity: {
        title: "Recomendaciones Aleatorias - Tarea de Hoy",
        description: "Recomendación aleatoria de tareas",
        badge: "RANDOM PICKER",
        heading: "Tarea de Hoy",
        subtitle: "Recibe una tarea simple para empezar ahora mismo.",
        todayLabel: "Una tarea para hoy",
        prompt: "Pulsa el botón para recibir una tarea",
        defaultReason: "Un inicio pequeño puede mejorar todo el día.",
        drawButton: "Elegir Tarea",
        infoLabel: "Guía de Contenido",
        infoTitle: "Criterios de recomendación",
        infoParagraphs: [
          "Las tareas son breves y accionables. Priorizamos acciones que mejoran productividad diaria, salud y hábitos.",
          "Cada recomendación incluye una razón corta para facilitar la ejecución inmediata. El contenido se ajusta con feedback de usuarios."
        ]
      },
      study: {
        title: "Recomendaciones Aleatorias - Tema de Estudio",
        description: "Recomendación aleatoria de temas de estudio",
        badge: "RANDOM PICKER",
        heading: "Tema de Estudio",
        subtitle: "Si no sabes qué estudiar, te damos un tema para empezar ya.",
        todayLabel: "Tema de estudio de hoy",
        prompt: "Pulsa el botón para recibir un tema",
        defaultReason: "El progreso pequeño y constante crea habilidades reales.",
        drawButton: "Elegir Tema",
        infoLabel: "Guía de Contenido",
        infoTitle: "Principio de selección",
        infoParagraphs: [
          "Priorizamos fundamentos prácticos de alto valor real. Sugerimos alcances que puedas empezar de inmediato.",
          "Las recomendaciones incluyen razones cortas y se equilibran de forma continua en dificultad."
        ]
      },
      lunch: {
        title: "Recomendaciones Aleatorias - Comida",
        description: "Recomendación aleatoria de menú",
        badge: "RANDOM PICKER",
        heading: "Recomendación de Comida",
        subtitle: "Elige una categoría y recibe una sugerencia de menú.",
        menuLabel: "Menú recomendado de hoy",
        filterAria: "Filtros de categoría de menú",
        filters: {
          all: "Todo",
          korean: "Coreana",
          chinese: "China",
          japanese: "Japonesa",
          western: "Occidental"
        },
        prompt: "Pulsa el botón para recibir un menú",
        defaultReason: "Te sugerimos algo que combine con tu ánimo de hoy.",
        noMenuTitle: "No hay menú disponible",
        noMenuReason: "Prueba con otra categoría.",
        drawButton: "Recomendar Menú",
        infoLabel: "Guía de Contenido",
        infoTitle: "Cómo se compone la data",
        infoParagraphs: [
          "Los menús se agrupan en categorías coreana, china, japonesa y occidental. Se evita repetir el mismo plato consecutivamente.",
          "Este servicio no se conecta directamente con plataformas de reserva o delivery. Es una herramienta informativa para elegir comida."
        ]
      },
      animal: {
        title: "Análisis de Rostro Animal | Recomendaciones Aleatorias",
        description: "Analiza tu tipo de rostro animal con Teachable Machine",
        badge: "TEACHABLE MACHINE",
        heading: "Análisis de Rostro Animal",
        subtitle: "Sube una foto y pulsa analizar para ver predicciones y probabilidades.",
        analyzeLabel: "Análisis con foto",
        analyzeButton: "Analizar",
        statusDefault: "Sube una imagen y luego pulsa Analizar.",
        previewAlt: "Vista previa de la imagen cargada",
        infoLabel: "Aviso importante",
        infoTitle: "Cómo interpretar el resultado",
        infoParagraphs: [
          "Este resultado proviene de un clasificador de Teachable Machine y es solo para entretenimiento y referencia. No evalúa personalidad ni capacidad.",
          "La imagen se procesa solo en el navegador y no se guarda en el servidor. La precisión puede variar según luz, ángulo, expresión y calidad."
        ]
      },
      partner: {
        title: "Consulta de Alianza | Recomendaciones Aleatorias",
        description: "Consulta de alianza del sitio de recomendaciones aleatorias",
        badge: "PARTNERSHIP",
        heading: "Consulta de Alianza",
        subtitle: "Envíanos tu propuesta y te responderemos pronto.",
        formLabel: "Consulta de Alianza",
        formTitle: "Comparte tu propuesta",
        fieldName: "Nombre",
        fieldEmail: "Correo",
        fieldCompany: "Empresa",
        fieldPhone: "Teléfono",
        fieldMessage: "Mensaje",
        submitButton: "Enviar Consulta",
        subject: "[Recomendaciones Aleatorias] Consulta de Alianza"
      },
      comments: {
        title: "Comentarios | Recomendaciones Aleatorias",
        description: "Página de comentarios del sitio",
        badge: "COMMUNITY",
        heading: "Comentarios",
        subtitle: "Comparte tu opinión libremente abajo."
      }
    },
    runtime: {
      partner: {
        sending: "Enviando...",
        success: "Tu consulta fue enviada. Te contactaremos pronto.",
        fail: "No se pudo enviar. Inténtalo de nuevo en un momento."
      },
      animal: {
        selectFile: "Primero elige un archivo de imagen.",
        loading: "Cargando el modelo y analizando...",
        donePrefix: "Análisis completo: ",
        doneSuffix: " es el resultado más probable.",
        loadFail: "No se pudo cargar la librería del modelo. Inténtalo de nuevo en breve.",
        ready: "Imagen lista. Pulsa Analizar."
      }
    }
  }
};

const ACTIVITY_ITEMS = {
  ko: [
    { name: "책상 10분 정리", reason: "작은 정리만 해도 집중력이 바로 올라갑니다." },
    { name: "산책 20분", reason: "몸을 움직이면 머리가 맑아져요." },
    { name: "미뤘던 메일 1개 답장", reason: "가벼운 업무 완료로 부담을 줄일 수 있어요." },
    { name: "물 2컵 마시기", reason: "기본 컨디션 회복에 가장 빠른 방법입니다." },
    { name: "방금 할 일 3개 적기", reason: "우선순위가 보이면 실행이 쉬워집니다." },
    { name: "5분 스트레칭", reason: "굳은 몸을 풀면 피로감이 줄어듭니다." },
    { name: "영수증/문서 정리", reason: "쌓인 잡일을 처리하면 머리가 가벼워져요." },
    { name: "오늘 감사한 일 1개 기록", reason: "기분 전환에 효과적입니다." }
  ],
  en: [
    { name: "Tidy your desk for 10 minutes", reason: "Even a small cleanup can boost focus fast." },
    { name: "Take a 20-minute walk", reason: "Moving your body clears your mind." },
    { name: "Reply to one delayed email", reason: "One quick completion reduces mental load." },
    { name: "Drink two glasses of water", reason: "It\'s one of the fastest ways to reset your condition." },
    { name: "Write down 3 tasks for now", reason: "Clear priorities make action easier." },
    { name: "Do a 5-minute stretch", reason: "Releasing tension lowers fatigue." },
    { name: "Sort receipts or documents", reason: "Finishing small admin work lightens your head." },
    { name: "Write one gratitude note", reason: "It\'s a quick and effective mood reset." }
  ],
  ja: [
    { name: "机を10分片付ける", reason: "少しの整理でも集中力が上がります。" },
    { name: "20分散歩する", reason: "体を動かすと頭がすっきりします。" },
    { name: "後回しメール1件に返信", reason: "小さな完了で負担が減ります。" },
    { name: "水を2杯飲む", reason: "体調を整える最速の一歩です。" },
    { name: "今やることを3つ書く", reason: "優先順位が見えると動きやすくなります。" },
    { name: "5分ストレッチ", reason: "体のこわばりをほぐすと疲れが軽くなります。" },
    { name: "領収書・書類を整理", reason: "細かな作業を片付けると気持ちが軽くなります。" },
    { name: "感謝を1つメモする", reason: "気分転換に効果的です。" }
  ],
  zh: [
    { name: "整理书桌 10 分钟", reason: "小范围整理也能马上提升专注力。" },
    { name: "散步 20 分钟", reason: "身体动起来，脑子会更清醒。" },
    { name: "回复一封拖延邮件", reason: "完成一个小任务就能明显减压。" },
    { name: "喝两杯水", reason: "这是恢复状态最快的方法之一。" },
    { name: "写下现在要做的 3 件事", reason: "优先级清晰后更容易执行。" },
    { name: "拉伸 5 分钟", reason: "放松僵硬肌肉可以减轻疲劳。" },
    { name: "整理收据或文档", reason: "处理杂事后会更轻松。" },
    { name: "记录一件感恩的小事", reason: "对情绪调整很有帮助。" }
  ],
  es: [
    { name: "Ordena tu escritorio 10 minutos", reason: "Un orden pequeño mejora la concentración rápidamente." },
    { name: "Camina 20 minutos", reason: "Mover el cuerpo despeja la mente." },
    { name: "Responde un correo pendiente", reason: "Cerrar una tarea ligera reduce la carga mental." },
    { name: "Bebe dos vasos de agua", reason: "Es una de las formas más rápidas de recuperar energía." },
    { name: "Anota 3 tareas inmediatas", reason: "Con prioridades claras es más fácil actuar." },
    { name: "Haz estiramientos 5 minutos", reason: "Relajar el cuerpo reduce la fatiga." },
    { name: "Ordena recibos o documentos", reason: "Resolver pendientes pequeños deja la mente más liviana." },
    { name: "Escribe una nota de gratitud", reason: "Funciona muy bien para cambiar el ánimo." }
  ]
};

const STUDY_ITEMS = {
  ko: [
    { name: "JavaScript 배열 메서드", reason: "실무에서 자주 써서 바로 효율이 올라갑니다." },
    { name: "CSS Flex/Grid 복습", reason: "레이아웃 구현 속도가 빨라집니다." },
    { name: "SQL JOIN 개념", reason: "데이터를 다룰 때 핵심이 되는 내용입니다." },
    { name: "Git 브랜치 전략", reason: "협업 품질을 높이는 기본기입니다." },
    { name: "HTTP 상태코드 정리", reason: "디버깅 시간을 줄이는 데 큰 도움이 됩니다." },
    { name: "자료구조: 스택/큐", reason: "문제 해결력의 기반을 탄탄하게 합니다." },
    { name: "알고리즘: 정렬", reason: "시간복잡도 감각을 키우기 좋습니다." },
    { name: "테스트 코드 기초", reason: "변경에 강한 코드를 만드는 출발점입니다." }
  ],
  en: [
    { name: "JavaScript array methods", reason: "You\'ll use them constantly in real projects." },
    { name: "Review CSS Flex/Grid", reason: "It quickly improves your layout implementation speed." },
    { name: "SQL JOIN fundamentals", reason: "It\'s core knowledge for working with data." },
    { name: "Git branching strategy", reason: "It strengthens team collaboration quality." },
    { name: "HTTP status codes", reason: "Great for reducing debugging time." },
    { name: "Data structures: stack/queue", reason: "Solid basics for problem-solving." },
    { name: "Algorithms: sorting", reason: "Great for building time-complexity intuition." },
    { name: "Testing basics", reason: "The first step toward change-safe code." }
  ],
  ja: [
    { name: "JavaScriptの配列メソッド", reason: "実務で頻繁に使うため効果が早いです。" },
    { name: "CSS Flex/Grid 復習", reason: "レイアウト実装の速度が上がります。" },
    { name: "SQL JOIN の基本", reason: "データ処理の中核になる知識です。" },
    { name: "Git ブランチ戦略", reason: "チーム開発の品質向上に直結します。" },
    { name: "HTTPステータスコード整理", reason: "デバッグ時間の短縮に役立ちます。" },
    { name: "データ構造: スタック/キュー", reason: "問題解決力の土台を作れます。" },
    { name: "アルゴリズム: ソート", reason: "計算量感覚を身につけやすいです。" },
    { name: "テストコード入門", reason: "変更に強いコード作りの出発点です。" }
  ],
  zh: [
    { name: "JavaScript 数组方法", reason: "在实战中非常常用，收益很快。" },
    { name: "复习 CSS Flex/Grid", reason: "能明显提升布局实现速度。" },
    { name: "SQL JOIN 概念", reason: "这是处理数据时的核心能力。" },
    { name: "Git 分支策略", reason: "能提升团队协作质量。" },
    { name: "HTTP 状态码整理", reason: "对减少调试时间很有帮助。" },
    { name: "数据结构：栈/队列", reason: "打好问题解决能力的基础。" },
    { name: "算法：排序", reason: "很适合建立时间复杂度直觉。" },
    { name: "测试代码基础", reason: "是写出可持续维护代码的起点。" }
  ],
  es: [
    { name: "Métodos de arrays en JavaScript", reason: "Se usan muchísimo en trabajo real y mejoran tu velocidad." },
    { name: "Repaso de CSS Flex/Grid", reason: "Acelera la creación de layouts." },
    { name: "Conceptos de SQL JOIN", reason: "Es base clave para trabajar con datos." },
    { name: "Estrategia de ramas en Git", reason: "Mejora la calidad del trabajo en equipo." },
    { name: "Resumen de códigos HTTP", reason: "Reduce bastante el tiempo de depuración." },
    { name: "Estructuras: pila/cola", reason: "Refuerza fundamentos de resolución de problemas." },
    { name: "Algoritmos: ordenamiento", reason: "Excelente para desarrollar intuición de complejidad." },
    { name: "Bases de testing", reason: "Primer paso para código resistente a cambios." }
  ]
};

const FOOD_MENUS = {
  ko: [
    { name: "김치찌개", reason: "얼큰한 국물로 입맛을 확 살려줘요.", category: "korean" },
    { name: "제육볶음", reason: "매콤달콤한 맛으로 만족도가 높아요.", category: "korean" },
    { name: "비빔밥", reason: "채소와 단백질을 균형 있게 챙길 수 있어요.", category: "korean" },
    { name: "짜장면", reason: "호불호가 적고 빠르게 먹기 좋아요.", category: "chinese" },
    { name: "짬뽕", reason: "칼칼한 국물로 기분 전환하기 좋습니다.", category: "chinese" },
    { name: "볶음밥", reason: "부담 없고 든든하게 먹을 수 있어요.", category: "chinese" },
    { name: "돈가스", reason: "바삭한 식감으로 만족감이 좋아요.", category: "japanese" },
    { name: "초밥", reason: "가볍지만 만족스러운 한 끼가 됩니다.", category: "japanese" },
    { name: "우동", reason: "따뜻하고 부담 없는 식사로 좋아요.", category: "japanese" },
    { name: "파스타", reason: "분위기 전환이 필요할 때 좋은 선택이에요.", category: "western" },
    { name: "햄버거 세트", reason: "간편하고 만족감이 빠르게 와요.", category: "western" },
    { name: "샌드위치", reason: "가볍게 먹고 오후를 산뜻하게 시작해요.", category: "western" }
  ],
  en: [
    { name: "Kimchi stew", reason: "A spicy broth that wakes up your appetite.", category: "korean" },
    { name: "Spicy stir-fried pork", reason: "Sweet and spicy, very satisfying.", category: "korean" },
    { name: "Bibimbap", reason: "A balanced meal with veggies and protein.", category: "korean" },
    { name: "Jajangmyeon", reason: "Crowd-friendly and quick to eat.", category: "chinese" },
    { name: "Jjamppong", reason: "A spicy soup great for a mood reset.", category: "chinese" },
    { name: "Fried rice", reason: "Simple, filling, and reliable.", category: "chinese" },
    { name: "Tonkatsu", reason: "Crispy texture with solid comfort value.", category: "japanese" },
    { name: "Sushi", reason: "Light but still satisfying.", category: "japanese" },
    { name: "Udon", reason: "Warm and easy on your stomach.", category: "japanese" },
    { name: "Pasta", reason: "A good pick when you want a change of mood.", category: "western" },
    { name: "Burger combo", reason: "Quick and highly satisfying.", category: "western" },
    { name: "Sandwich", reason: "Light and refreshing for the afternoon.", category: "western" }
  ],
  ja: [
    { name: "キムチチゲ", reason: "辛めのスープで食欲が戻ります。", category: "korean" },
    { name: "豚肉炒め", reason: "甘辛バランスで満足感が高いです。", category: "korean" },
    { name: "ビビンバ", reason: "野菜とたんぱく質をバランスよく取れます。", category: "korean" },
    { name: "ジャージャー麺", reason: "好き嫌いが分かれにくく手軽です。", category: "chinese" },
    { name: "チャンポン", reason: "辛めスープで気分転換に向いています。", category: "chinese" },
    { name: "炒飯", reason: "重すぎずしっかり食べられます。", category: "chinese" },
    { name: "とんかつ", reason: "サクサク食感で満足度が高いです。", category: "japanese" },
    { name: "寿司", reason: "軽めでも満足しやすい一食です。", category: "japanese" },
    { name: "うどん", reason: "温かくてやさしい食事です。", category: "japanese" },
    { name: "パスタ", reason: "気分を変えたいときに良い選択です。", category: "western" },
    { name: "ハンバーガーセット", reason: "手軽で満足感が早いです。", category: "western" },
    { name: "サンドイッチ", reason: "軽く食べて午後をすっきり始められます。", category: "western" }
  ],
  zh: [
    { name: "泡菜锅", reason: "香辣汤底很开胃。", category: "korean" },
    { name: "辣炒猪肉", reason: "甜辣口味，满足感很高。", category: "korean" },
    { name: "拌饭", reason: "蔬菜和蛋白质搭配均衡。", category: "korean" },
    { name: "炸酱面", reason: "接受度高，吃起来也方便。", category: "chinese" },
    { name: "辣海鲜汤面", reason: "很适合提神换心情。", category: "chinese" },
    { name: "炒饭", reason: "不负担又很顶饱。", category: "chinese" },
    { name: "炸猪排", reason: "酥脆口感，满足度很高。", category: "japanese" },
    { name: "寿司", reason: "清爽但同样有满足感。", category: "japanese" },
    { name: "乌冬面", reason: "温暖且不油腻，吃起来舒服。", category: "japanese" },
    { name: "意面", reason: "想换口味时是很好的选择。", category: "western" },
    { name: "汉堡套餐", reason: "方便快捷，满足来得快。", category: "western" },
    { name: "三明治", reason: "轻食选择，适合清爽开启下午。", category: "western" }
  ],
  es: [
    { name: "Estofado de kimchi", reason: "Un caldo picante que abre el apetito.", category: "korean" },
    { name: "Cerdo salteado picante", reason: "Sabor dulce-picante con alta satisfacción.", category: "korean" },
    { name: "Bibimbap", reason: "Comida equilibrada con verduras y proteína.", category: "korean" },
    { name: "Jajangmyeon", reason: "Gusta a casi todos y se come rápido.", category: "chinese" },
    { name: "Jjamppong", reason: "Su caldo picante cambia el ánimo.", category: "chinese" },
    { name: "Arroz frito", reason: "Ligero pero contundente.", category: "chinese" },
    { name: "Tonkatsu", reason: "Textura crujiente con gran satisfacción.", category: "japanese" },
    { name: "Sushi", reason: "Ligero pero suficiente para una buena comida.", category: "japanese" },
    { name: "Udon", reason: "Caliente y suave para el estómago.", category: "japanese" },
    { name: "Pasta", reason: "Buena opción cuando quieres cambiar el ambiente.", category: "western" },
    { name: "Combo de hamburguesa", reason: "Rápido y muy satisfactorio.", category: "western" },
    { name: "Sándwich", reason: "Ligero para empezar la tarde con energía.", category: "western" }
  ]
};

const PATH_TO_PAGE = {
  "/": "index",
  "/index.html": "index",
  "/activity.html": "activity",
  "/study.html": "study",
  "/lunch.html": "lunch",
  "/animal-face.html": "animal",
  "/partner.html": "partner",
  "/comments.html": "comments"
};

let currentLanguageCode = (() => {
  const fallback = DEFAULT_LANGUAGE;
  try {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (!stored) return fallback;
    return LANGUAGE_OPTIONS.some((option) => option.code === stored) ? stored : fallback;
  } catch (_error) {
    return fallback;
  }
})();

function randomIndex(max) {
  return Math.floor(Math.random() * max);
}

function getLanguageOption(code) {
  return LANGUAGE_OPTIONS.find((option) => option.code === code) || LANGUAGE_OPTIONS[0];
}

function getLanguagePack(code = currentLanguageCode) {
  return LANGUAGE_COPY[code] || LANGUAGE_COPY[DEFAULT_LANGUAGE];
}

function getPageKey() {
  return PATH_TO_PAGE[window.location.pathname] || null;
}

function setLanguage(code) {
  const next = getLanguageOption(code).code;
  if (next === currentLanguageCode) return;

  currentLanguageCode = next;
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, next);
  } catch (_error) {
    // Ignore storage errors in private mode.
  }

  document.documentElement.lang = getLanguageOption(next).locale;
  applyLanguageToPage();
  document.dispatchEvent(new CustomEvent(LANGUAGE_CHANGE_EVENT, { detail: { language: next } }));
}

function getLocalizedList(dataset) {
  return dataset[currentLanguageCode] || dataset[DEFAULT_LANGUAGE];
}

function updateMeta(name, value) {
  const element = document.querySelector(`meta[name="${name}"]`);
  if (element) element.setAttribute("content", value);
}

function updateMetaProperty(property, value) {
  const element = document.querySelector(`meta[property="${property}"]`);
  if (element) element.setAttribute("content", value);
}

function setText(selector, text) {
  const element = document.querySelector(selector);
  if (element) element.textContent = text;
}

function setTextAll(selector, texts) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element, index) => {
    if (texts[index] !== undefined) {
      element.textContent = texts[index];
    }
  });
}

function setLabelWithControl(controlSelector, labelText) {
  const control = document.querySelector(controlSelector);
  const label = control ? control.closest("label") : null;
  if (!control || !label) return;

  label.textContent = labelText;
  label.appendChild(control);
}

function applyCommonTranslations(pack) {
  const { common } = pack;

  const topNav = document.querySelector(".top-nav");
  if (topNav) topNav.setAttribute("aria-label", common.navAria);

  const footerLinks = document.querySelector(".footer-links");
  if (footerLinks) footerLinks.setAttribute("aria-label", common.footerAria);

  const navMap = {
    "/animal-face.html": common.nav.animal,
    "/": common.nav.lotto,
    "/activity.html": common.nav.activity,
    "/study.html": common.nav.study,
    "/lunch.html": common.nav.lunch
  };

  Object.entries(navMap).forEach(([href, text]) => {
    const link = document.querySelector(`.top-nav a[href="${href}"]`);
    if (link) link.textContent = text;
  });

  const commentsFab = document.querySelector(".comments-fab");
  if (commentsFab) commentsFab.textContent = common.fabs.comments;

  const partnerFab = document.querySelector(".partner-fab");
  if (partnerFab) {
    const href = partnerFab.getAttribute("href");
    partnerFab.textContent = href === "/" ? common.fabs.home : common.fabs.partner;
  }

  const footerCopy = document.querySelector(".site-footer p");
  if (footerCopy) footerCopy.textContent = common.footerCopy;

  const footerMap = {
    "/about.html": common.footer.about,
    "/privacy.html": common.footer.privacy,
    "/terms.html": common.footer.terms,
    "/partner.html": common.footer.contact,
    "/geo.html": common.footer.geo,
    "/": common.footer.home
  };

  Object.entries(footerMap).forEach(([href, text]) => {
    const links = document.querySelectorAll(`.footer-links a[href="${href}"]`);
    links.forEach((link) => {
      link.textContent = text;
    });
  });
}

function applyMetaTranslations(pageCopy) {
  if (!pageCopy) return;
  document.title = pageCopy.title;
  updateMeta("description", pageCopy.description);
  updateMetaProperty("og:title", pageCopy.title);
  updateMetaProperty("og:description", pageCopy.description);
  updateMeta("twitter:title", pageCopy.title);
  updateMeta("twitter:description", pageCopy.description);
}

function applyPageTranslations(pack) {
  const pageKey = getPageKey();
  if (!pageKey) return;

  const pageCopy = pack.pages[pageKey];
  if (!pageCopy) return;

  applyMetaTranslations(pageCopy);
  setText(".hero .badge", pageCopy.badge);
  setText(".hero h1", pageCopy.heading);
  setText(".hero .subtitle", pageCopy.subtitle);

  if (pageKey === "index") {
    setText("main .card:first-of-type .label", pageCopy.pickLabel);
    const bonusLine = document.querySelector(".bonus-line");
    if (bonusLine) {
      const bonusStrong = bonusLine.querySelector("strong");
      bonusLine.textContent = `${pageCopy.bonusLabel}: `;
      if (bonusStrong) bonusLine.appendChild(bonusStrong);
    }
    setText("#lotto-button", pageCopy.drawButton);

    const infoCard = document.querySelector(".info-card");
    if (infoCard) {
      setText(".info-card .label", pageCopy.infoLabel);
      setText(".info-card h2", pageCopy.infoTitle);
      setTextAll(".info-card p:not(.label)", pageCopy.infoParagraphs);
    }
  }

  if (pageKey === "activity") {
    setText("main .card:first-of-type .label", pageCopy.todayLabel);
    setText("#activity-button", pageCopy.drawButton);
    setText(".info-card .label", pageCopy.infoLabel);
    setText(".info-card h2", pageCopy.infoTitle);
    setTextAll(".info-card p:not(.label)", pageCopy.infoParagraphs);
  }

  if (pageKey === "study") {
    setText("main .card:first-of-type .label", pageCopy.todayLabel);
    setText("#study-button", pageCopy.drawButton);
    setText(".info-card .label", pageCopy.infoLabel);
    setText(".info-card h2", pageCopy.infoTitle);
    setTextAll(".info-card p:not(.label)", pageCopy.infoParagraphs);
  }

  if (pageKey === "lunch") {
    setText("main .card:first-of-type .label", pageCopy.menuLabel);
    setText("#food-button", pageCopy.drawButton);
    setText(".info-card .label", pageCopy.infoLabel);
    setText(".info-card h2", pageCopy.infoTitle);
    setTextAll(".info-card p:not(.label)", pageCopy.infoParagraphs);

    const filterGroup = document.querySelector(".filters");
    if (filterGroup) filterGroup.setAttribute("aria-label", pageCopy.filterAria);

    document.querySelectorAll(".food-filter").forEach((filter) => {
      const category = filter.dataset.category || "all";
      const translated = pageCopy.filters[category];
      if (translated) filter.textContent = translated;
    });
  }

  if (pageKey === "animal") {
    setText("main .card:first-of-type .label", pageCopy.analyzeLabel);
    setText("#animal-predict", pageCopy.analyzeButton);
    const previewImage = document.getElementById("preview-image");
    if (previewImage) previewImage.alt = pageCopy.previewAlt;
    setText(".info-card .label", pageCopy.infoLabel);
    setText(".info-card h2", pageCopy.infoTitle);
    setTextAll(".info-card p:not(.label)", pageCopy.infoParagraphs);
  }

  if (pageKey === "partner") {
    setText(".contact-card .label", pageCopy.formLabel);
    setText("#partner-title", pageCopy.formTitle);
    setLabelWithControl("#partner-form input[name='name']", pageCopy.fieldName);
    setLabelWithControl("#partner-form input[name='email']", pageCopy.fieldEmail);
    setLabelWithControl("#partner-form input[name='company']", pageCopy.fieldCompany);
    setLabelWithControl("#partner-form input[name='phone']", pageCopy.fieldPhone);
    setLabelWithControl("#partner-form textarea[name='message']", pageCopy.fieldMessage);
    setText("#partner-submit", pageCopy.submitButton);

    const subject = document.querySelector("#partner-form input[name='_subject']");
    if (subject) subject.value = pageCopy.subject;
  }
}

function applyLanguageToPage() {
  const option = getLanguageOption(currentLanguageCode);
  document.documentElement.lang = option.locale;

  const pack = getLanguagePack();
  applyCommonTranslations(pack);
  applyPageTranslations(pack);

  const trigger = document.querySelector(".lang-trigger");
  if (trigger) {
    trigger.textContent = `${pack.common.languagePrefix}: ${option.label}`;
  }

  document.querySelectorAll(".lang-option").forEach((button) => {
    const buttonCode = button.getAttribute("data-lang-code");
    const isActive = buttonCode === currentLanguageCode;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-checked", String(isActive));
  });
}

function setupLanguagePicker() {
  const actionFabs = document.querySelector(".action-fabs");
  if (!actionFabs || actionFabs.querySelector(".lang-picker")) return;

  const picker = document.createElement("div");
  picker.className = "lang-picker";

  const trigger = document.createElement("button");
  trigger.type = "button";
  trigger.className = "lang-trigger";
  trigger.setAttribute("aria-haspopup", "true");
  trigger.setAttribute("aria-expanded", "false");

  const menu = document.createElement("div");
  menu.className = "lang-menu";
  menu.hidden = true;

  LANGUAGE_OPTIONS.forEach((option) => {
    const optionButton = document.createElement("button");
    optionButton.type = "button";
    optionButton.className = "lang-option";
    optionButton.setAttribute("data-lang-code", option.code);
    optionButton.setAttribute("role", "menuitemradio");
    optionButton.textContent = option.label;
    optionButton.addEventListener("click", () => {
      menu.hidden = true;
      trigger.setAttribute("aria-expanded", "false");
      setLanguage(option.code);
    });
    menu.appendChild(optionButton);
  });

  trigger.addEventListener("click", () => {
    menu.hidden = !menu.hidden;
    trigger.setAttribute("aria-expanded", String(!menu.hidden));
  });

  document.addEventListener("click", (event) => {
    if (!picker.contains(event.target)) {
      menu.hidden = true;
      trigger.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      menu.hidden = true;
      trigger.setAttribute("aria-expanded", "false");
    }
  });

  picker.appendChild(trigger);
  picker.appendChild(menu);

  const commentsFab = actionFabs.querySelector(".comments-fab");
  actionFabs.insertBefore(picker, commentsFab || actionFabs.firstChild);

  applyLanguageToPage();
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

  let lastIndex = -1;
  let hasDrawn = false;

  function getActivities() {
    return getLocalizedList(ACTIVITY_ITEMS);
  }

  function renderPrompt() {
    const copy = getLanguagePack().pages.activity;
    activityName.textContent = copy.prompt;
    activityReason.textContent = copy.defaultReason;
  }

  function drawActivity() {
    const activities = getActivities();
    let next = randomIndex(activities.length);
    while (activities.length > 1 && next === lastIndex) {
      next = randomIndex(activities.length);
    }
    lastIndex = next;

    activityName.textContent = activities[next].name;
    activityReason.textContent = activities[next].reason;
  }

  activityButton.addEventListener("click", () => {
    hasDrawn = true;
    drawActivity();
  });

  document.addEventListener(LANGUAGE_CHANGE_EVENT, () => {
    if (hasDrawn) {
      drawActivity();
      return;
    }
    renderPrompt();
  });

  renderPrompt();
}

function setupStudyPage() {
  const studyName = document.getElementById("study-name");
  const studyReason = document.getElementById("study-reason");
  const studyButton = document.getElementById("study-button");

  if (!studyName || !studyReason || !studyButton) return;

  let lastIndex = -1;
  let hasDrawn = false;

  function getSubjects() {
    return getLocalizedList(STUDY_ITEMS);
  }

  function renderPrompt() {
    const copy = getLanguagePack().pages.study;
    studyName.textContent = copy.prompt;
    studyReason.textContent = copy.defaultReason;
  }

  function drawSubject() {
    const subjects = getSubjects();
    let next = randomIndex(subjects.length);
    while (subjects.length > 1 && next === lastIndex) {
      next = randomIndex(subjects.length);
    }
    lastIndex = next;

    studyName.textContent = subjects[next].name;
    studyReason.textContent = subjects[next].reason;
  }

  studyButton.addEventListener("click", () => {
    hasDrawn = true;
    drawSubject();
  });

  document.addEventListener(LANGUAGE_CHANGE_EVENT, () => {
    if (hasDrawn) {
      drawSubject();
      return;
    }
    renderPrompt();
  });

  renderPrompt();
}

function setupFoodPage() {
  const foodName = document.getElementById("food-name");
  const foodReason = document.getElementById("food-reason");
  const foodButton = document.getElementById("food-button");
  const filters = document.querySelectorAll(".food-filter");

  if (!foodName || !foodReason || !foodButton || filters.length === 0) return;

  const lastIndexByCategory = {};
  let currentCategory = "all";
  let hasDrawn = false;

  function getMenus() {
    return getLocalizedList(FOOD_MENUS);
  }

  function renderFilterLabels() {
    const filterCopy = getLanguagePack().pages.lunch.filters;
    filters.forEach((filter) => {
      const category = filter.dataset.category || "all";
      if (filterCopy[category]) {
        filter.textContent = filterCopy[category];
      }
    });
  }

  function getCurrentMenus() {
    const menus = getMenus();
    if (currentCategory === "all") return menus;
    return menus.filter((menu) => menu.category === currentCategory);
  }

  function pickMenu() {
    const pool = getCurrentMenus();
    if (pool.length === 0) return null;

    if (pool.length === 1) return pool[0];

    const previous = lastIndexByCategory[currentCategory] ?? -1;
    let next = randomIndex(pool.length);
    while (next === previous) {
      next = randomIndex(pool.length);
    }
    lastIndexByCategory[currentCategory] = next;
    return pool[next];
  }

  function renderPrompt() {
    const copy = getLanguagePack().pages.lunch;
    foodName.textContent = copy.prompt;
    foodReason.textContent = copy.defaultReason;
  }

  function renderMenu() {
    const copy = getLanguagePack().pages.lunch;
    const picked = pickMenu();
    if (!picked) {
      foodName.textContent = copy.noMenuTitle;
      foodReason.textContent = copy.noMenuReason;
      return;
    }
    foodName.textContent = picked.name;
    foodReason.textContent = picked.reason;
  }

  filters.forEach((filter) => {
    filter.addEventListener("click", () => {
      currentCategory = filter.dataset.category || "all";
      filters.forEach((button) => {
        button.classList.toggle("active", button === filter);
      });
      hasDrawn = true;
      renderMenu();
    });
  });

  foodButton.addEventListener("click", () => {
    hasDrawn = true;
    renderMenu();
  });

  document.addEventListener(LANGUAGE_CHANGE_EVENT, () => {
    renderFilterLabels();
    if (hasDrawn) {
      renderMenu();
      return;
    }
    renderPrompt();
  });

  renderFilterLabels();
  renderPrompt();
}

function setupPartnerForm() {
  if (!partnerForm || !partnerSubmit || !partnerStatus) return;

  function partnerRuntime() {
    return getLanguagePack().runtime.partner;
  }

  partnerForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    partnerSubmit.disabled = true;
    partnerStatus.textContent = partnerRuntime().sending;

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
      partnerStatus.textContent = partnerRuntime().success;
    } catch (_error) {
      partnerStatus.textContent = partnerRuntime().fail;
    } finally {
      partnerSubmit.disabled = false;
    }
  });
}

function setupAnimalFacePage() {
  const fileInput = document.getElementById("animal-file");
  const predictButton = document.getElementById("animal-predict");
  const previewImage = document.getElementById("preview-image");
  const labelContainer = document.getElementById("label-container");
  const statusText = document.getElementById("animal-status");

  if (!fileInput || !predictButton || !previewImage || !labelContainer || !statusText) return;

  const MODEL_URL = "https://teachablemachine.withgoogle.com/models/PaJw4h9U7/";
  let model;

  function animalRuntime() {
    return getLanguagePack().runtime.animal;
  }

  async function loadModel() {
    if (model) return model;
    if (!window.tmImage) {
      throw new Error("tmImage_not_loaded");
    }
    const modelURL = `${MODEL_URL}model.json`;
    const metadataURL = `${MODEL_URL}metadata.json`;
    model = await tmImage.load(modelURL, metadataURL);
    return model;
  }

  function renderPrediction(prediction) {
    labelContainer.innerHTML = "";
    prediction.forEach((item, index) => {
      const percent = Number((item.probability * 100).toFixed(1));

      const row = document.createElement("div");
      row.className = "prediction-row";

      const text = document.createElement("div");
      text.className = "prediction-text";
      text.textContent = `${item.className}: ${percent}%`;

      const bar = document.createElement("div");
      bar.className = "prediction-bar";

      const fill = document.createElement("div");
      fill.className = "prediction-fill";
      fill.style.width = `${percent}%`;

      if (index === 0) {
        row.classList.add("top");
      }

      bar.appendChild(fill);
      row.appendChild(text);
      row.appendChild(bar);
      labelContainer.appendChild(row);
    });
  }

  async function predictUploadedImage() {
    const file = fileInput.files && fileInput.files[0];
    if (!file) {
      statusText.textContent = animalRuntime().selectFile;
      return;
    }

    predictButton.disabled = true;
    statusText.textContent = animalRuntime().loading;

    try {
      const loadedModel = await loadModel();
      const prediction = await loadedModel.predict(previewImage);
      prediction.sort((a, b) => b.probability - a.probability);
      renderPrediction(prediction);
      statusText.textContent = `${animalRuntime().donePrefix}${prediction[0].className}${animalRuntime().doneSuffix}`;
    } catch (_error) {
      statusText.textContent = animalRuntime().loadFail;
    } finally {
      predictButton.disabled = false;
    }
  }

  fileInput.addEventListener("change", () => {
    const file = fileInput.files && fileInput.files[0];
    if (!file) return;
    const objectUrl = URL.createObjectURL(file);
    previewImage.src = objectUrl;
    previewImage.onload = () => URL.revokeObjectURL(objectUrl);
    labelContainer.innerHTML = "";
    statusText.textContent = animalRuntime().ready;
  });

  document.addEventListener(LANGUAGE_CHANGE_EVENT, () => {
    if (!fileInput.files || !fileInput.files[0]) {
      statusText.textContent = getLanguagePack().pages.animal.statusDefault;
    }
    previewImage.alt = getLanguagePack().pages.animal.previewAlt;
  });

  predictButton.addEventListener("click", predictUploadedImage);
}

setupLottoPage();
setupActivityPage();
setupStudyPage();
setupFoodPage();
setupPartnerForm();
setupAnimalFacePage();
setupLanguagePicker();
applyLanguageToPage();
