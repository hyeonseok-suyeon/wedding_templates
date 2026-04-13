/**
 * Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "정현석",
    nameEn: "정현석",
    father: "정명철",
    mother: "주입분",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "박수연",
    nameEn: "박수연",
    father: "박광모",
    mother: "이춘아",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2027-01-09",
    time: "11:00",
    venue: "이룸웨딩컨벤션",
    hall: "5층",
    address: "서울특별시 마포구 마포대로 78 경찰공제회 자람빌딩",
    tel: "02-714-2121",
    mapLinks: {
      kakao: "https://place.map.kakao.com/13717401",
      naver: "https://naver.me/5WOQPS6i"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "수많은 사건의 현장과 사람의 곁에서\n서로의 편이 되어 줄 사람을 만났습니다.\n\n끝나지 않을 하루를\n함께 살아가려 합니다.\n\n이 시작에 귀한 발걸음으로\n함께해 주시면 감사하겠습니다."
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
      { role: "신랑", name: "정현석", bank: "ㅇㅇ은행", number: "000-000-000000" },
      { role: "아버지", name: "정명철", bank: "ㅇㅇ은행", number: "000-000-000000" },
      { role: "어머니", name: "주입분", bank: "ㅇㅇ은행", number: "000-000-000000" }
    ],
    bride: [
      { role: "신부", name: "박수연", bank: "신한은행", number: "110-307-053892" },
      { role: "아버지", name: "박광모", bank: "국민은행", number: "041-210-416998" },
      { role: "어머니", name: "이춘아", bank: "국민은행", number: "044-210-357168" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "현석 ♥ 수연 결혼합니다",
    description: "2027년 1월 9일, 소중한 분들을 초대합니다."
  }
};
