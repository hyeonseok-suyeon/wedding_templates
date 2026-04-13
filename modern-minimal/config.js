/**
 * Modern Minimal Wedding Invitation Configuration
 *
 * Edit the values below to customize your wedding invitation.
 * Image files should be placed in the corresponding images/ subfolders
 * using sequential filenames (1.jpg, 2.jpg, ...).
 * The code auto-detects images by trying sequential filenames.
 *
 * Image folder conventions:
 *   images/hero/1.jpg       - Main wedding photo (single file)
 *   images/story/1.jpg, ... - Story section photos (auto-detected)
 *   images/gallery/1.jpg, . - Gallery photos (auto-detected)
 *   images/location/1.jpg   - Venue/map image (single file)
 *   images/og/1.jpg         - Kakao share thumbnail (single file)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "정현석",
    nameEn: "GROOM",
    father: "정명철",
    mother: "주입분",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "박수연",
    nameEn: "BRIDE",
    father: "박광모",
    mother: "이춘아",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2027-01-09",
    time: "11:00",
    venue: "경찰공제회 자람빌딩",
    hall: "이룸웨딩컨벤션 5층",
    address: "서울특별시 마포구 마포대로 78",
    tel: "02-714-2121",
    mapLinks: {
      kakao: "https://place.map.kakao.com/13717401#blogreview",
      naver: "https://naver.me/5WOQPS6i"
    }
  },

  // ── 인사말 ──
  invitation: {
    title: "소중한 분들을 초대합니다",
    message: "수많은 사건의 현장과 사람의 곁에서\n서로의 편이 되어 줄 사람을 만났습니다.\n\n끝나지 않을 하루를\n함께 살아가려 합니다.\n\n이 시작에 귀한 발걸음으로\n함께해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "여러분을 소중한 자리에 초대합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "정현석", bank: "OO은행", number: "000-000-000000" },
      { role: "아버지", name: "정명철", bank: "OO은행", number: "000-000-000000" },
      { role: "어머니", name: "주입분", bank: "OO은행", number: "000-000-000000" }
    ],
    bride: [
      { role: "신부", name: "박수연", bank: "OO은행", number: "000-000-000000" },
      { role: "아버지", name: "박광모", bank: "OO은행", number: "000-000-000000" },
      { role: "어머니", name: "이춘아", bank: "OO은행", number: "000-000-000000" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  kakaoShare: {
    jsKey: "",
    title: "현석♡수연 결혼식에 초대합니다",
    description: ""
  }
};
