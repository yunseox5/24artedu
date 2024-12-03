const planets = [
  {
    element: document.querySelector(".p1"),
    name: "p1",
    angle: 0,
    speed: 0.02,
    originalSpeed: 0.02,
    isPaused: false,
  },
  {
    element: document.querySelector(".p2"),
    name: "p2",
    angle: 0,
    speed: 0.015,
    originalSpeed: 0.015,
    isPaused: false,
  },
  {
    element: document.querySelector(".p3"),
    name: "p3",
    angle: 0,
    speed: 0.01,
    originalSpeed: 0.01,
    isPaused: false,
  },
  {
    element: document.querySelector(".p4"),
    name: "p4",
    angle: 0,
    speed: 0.008,
    originalSpeed: 0.008,
    isPaused: false,
  },
  {
    element: document.querySelector(".p5"),
    name: "p5",
    angle: 0,
    speed: 0.005,
    originalSpeed: 0.005,
    isPaused: false,
  },
  {
    element: document.querySelector(".p6"),
    name: "p6",
    angle: 0,
    speed: 0.003,
    originalSpeed: 0.003,
    isPaused: false,
  },
];
// 팝업 관련 요소
const popup = document.getElementById("popup");
const popupClose = document.querySelector(".popup-close");
const planetName = document.getElementById("planet-name");
const observerName = document.getElementById("observer-name");
const journalTitle = document.getElementById("journal-title");
const planetInfoText = document.getElementById("planet-info");
const planetImage = document.getElementById("planet-image");

//결론팝업
// 팝업 기능
document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("con-pop");
  const popupBtn = document.getElementById("con-pop-btn");
  const popupClose = document.getElementById("con-pop-close");

  // 팝업 열기
  popupBtn.addEventListener("click", () => {
    popup.classList.remove("hidden");
    popup.style.display = "block";
  });

  // 팝업 닫기
  popupClose.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // 팝업 외부 클릭 시 닫기
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });
});

// 행성 정보 객체 (예시: 각 행성에 대한 관찰자, 저널 제목, 저널 텍스트 등)
const planetInfo = {
  p1: {
    observer: "연극원 연극학과 최수미",
    journalTitle: "우리는 아주 작지만 커다란 존재야",
    journalText:
      "우주 속의 나를 생각하면 나는 아주 작은 존재가 된다. 눈에 보이지도 않을만큼 작은 존재가 되어 마치 사라질 것만 같다.  \n사라지고 싶을 때마다 나는 우주를 생각하고 그 속의 한없이 작은 나를 찾아낸다. \n주저앉은 곳에서 고개를 들어보면 아직 가보지 못한 곳 천지다. 평생을 우주 여행하는 데에 시간을 보내도 여행을 끝마칠 수 없을 것만 같다.  \n\n나는 작은 나에게서 무한함을 느끼고 다시 일어나고 싶어진다. 내가 없어지면 나의 세계가 없어지고 이 우주가 사라진다.  \n생각이 꼬리에 꼬리를 물며 나는 다시 걸어간다. 어느새 걸음의 폭이 커지고, 한 뼘 한 뼘 내가 자라는 것이 느껴진다.  \n\n내가 걸음을 떼니 나의 우주가 다시 돌기 시작한다. ",
    image: "문예론-최수미.jpg",
  },
  p2: {
    observer: "미술원 디자인과 오윤서",
    journalTitle: "가능성의 우주",
    journalText:
      "광활한 우주에서 별을 찾아 나서듯, 예술교육은 각자의 예술 세계를 탐구하고 그 속에서 새로운 가능성을 발견하는 여정입니다.\n <가능성의 우주>는 예술교육을 통해 무한한 가능성의 스스로의 우주를 탐험하고, 함께 빛나는 예술의 우주를 만들어가는 과정을 표현한 미디어 아트 작품입니다.\n\n  우주 속의 수많은 점들은 무한한 가능성의 별을 상징하며, 그 가능성은 행성으로 확장되어 하나의 예술 세계로 발전합니다. \n 무작위로 얽힌 선들은 예술 교육을 통해 그 가능성을 찾고, 이를 발견해 나가는 여정을 나타냅니다. \n이 여정 속에서 각자의 예술 세계는 점점 더 넓어지며, 각자가 가진 예술적 가능성을 온전히 실현할 수 있는 길로 나아가게 합니다.",
    image: "문개론_윤서.png",
  },
  p3: {
    observer: "전통예술원 음악학과 강수빈",
    journalTitle: "예술의 무한루프",
    journalText:
      "우리는 살면서 다양한 예술을 경험하게 된다. 하지만 예술은 계속 발전하고, 변형되며 끝이 없는 무한루프와 같다.\n내가 지금 하고 있는 예술 또한 다른 사람이 하게 된다면 또 다른 예술작품이 나올 것이다.  \n\n 이처럼 예술은 나를 표현할 수 있고, 나를 성장하게 만든다. \n 예술 교육 또한 무한루프라고 생각한다….",
    image: "문예론_강수빈.jpg",
  },
  p4: {
    observer: "영상원 영상이론과 이승희",
    journalTitle: "예술교육은 “개척” 이다.",
    journalText:
      "저의 첫 예술교육은 초등학교 시절 바닥에 누워 듣던 동화였습니다. \n 다같이 책상을 뒤로 밀고 시원한 마룻바닥에 누워서. \n 햇살이 바람을 타고 창문을 드나들고 있고.\n 주변에는 몰래 소곤거리며 속삭이는 친구들의 웃음소리가 들렸습니다. \n‘그 많던 싱아는 누가 다 먹었을까’ 를 읽어주시는 선생님의 쉬어가는 목소리는 노곤하게 점점 멀어지는 듯했습니다. \n책의 주인공은 선생님의 손을 잡지 못해 섭하다 했지만, 내 손에 잡힌 조그마고 따스한 친구의 손은 따듯했습니다.",
    image: "문예론_이승희.jpg",
  },
  p5: {
    observer: "연극원 서창과 이슬기",
    journalTitle: "예술교육운 우주여행을 함께 떠날 친구를 만나는 것.",
    journalText:
      "이 노래는 저의 첫 작사이기도 하고 중학교 때 서로 쓴 시를 주고 받곤 했던 친구가 자라 같이 작업한 첫 작업물이기도 합니다.\n 친구는 저의 예술동료이자, 저의 첫 번째 예술 선생님이에요. \n예술교육을 한다는 것은 대상에게 미지의 우주를 탐구하는 동료가 되어주는 거예요.",
    image: "문예론-슬기.png",
    youtubeLink: "https://elephantsaybook.com/song", // 유튜브 링크 추가
  },
  p6: {
    observer: "연극원 연기과 김진홍",
    journalTitle: "세계는 무한하다",
    journalText:
      "나와 내가 존재하는 세계 사이에는 간격이 있고, 우리는 감각을 통해 그 간격을 좁히고 세계를 마주한다.\n아이들에게 그 간격은 상상력으로 채워지고, 그 순간 세계는 관념대로 존재하는 불변의 대상이 아니라 무한한 가능성을 가진다. \n\n즉, 자신이 이 세계에 존재하는 방식대로 세계는 내게 주어진다.\n내가 다양한 방식대로 존재할 수 있는 만큼 내가 바라보는 세계는 다양하다.\n\n어른에게는 당연히 '모자'인 것이, 어린왕자에겐 '코끼리를 삼킨 보아뱀'인 것 처럼. \n각자의 간격을 통해 다르게 보이는 세상을 표현하는 것은 분명 예술이고, 그래서 예술은 나를 보여줄 수 밖에 없다.",
    image: "문예론-김진홍.png",
  },
};
// Sun click event
const sun = document.querySelector(".sun");
sun.addEventListener("click", () => {
  journalTitle.textContent = "우리가 생각하는 문화예술교육";
  observerName.textContent = "문화예술교육개론 분반 1 - 2조";
  
  // \n을 <br>로 변환하여 줄바꿈 적용
  planetInfoText.innerHTML = 
    "예술교육은 마치 우주를 탐험하는 것과 같습니다.\n 때로는 광활한 우주에서 길을 잃기도 하지만 우리는 함께하고 있는 수많은 별들, 천체, 행성들을 보며 다시 나아갈 길을 찾습니다. \n\n우주의 어떤 모습이 예술교육과 닮아있을까요? \n우주는 다양하고 무한하고 끝없으며 여전히 풀리지 못한 질문들로 가득 차있습니다.\n 예술 교육은 각자의 세계를 가진 다양한 사람들이 모여 서로의 세계를 공유하도록 하고, 서로의 세계를 무한히 확장할 수 있도록 해줍니다.\n 예술교육을 하거나 받는 과정에서 우리는 마치 탐험을 하듯 새로운 감각이나 경험을 발견하게 됩니다. 둘은 공통적으로 무한하고, 새롭고, 다양합니다.\n\n 멀리서 보면, 함께하고 있는 수많은 별들, 천체, 행성들이 모여 아주 아름답고, 밝은 빛을 내고 있습니다.\n 우리는 오늘 아름답게, 각자의 고유하고도 밝은 빛을 내고 있는 행성들을 만나 볼 것입니다.\n 각 행성들은 어떤 모습일지, 어떤 빛을 가지고 있을지 상상해보며 함께 우주여행을 떠나볼까요?".replace(/\n/g, '<br>');
  
  planetImage.src = "문개론_주제.jpg";
  popup.style.display = "flex";
});
// Planets click events
planets.forEach(planet => {
  planet.element.addEventListener('click', () => {
      // 행성 정보 업데이트
      observerName.textContent = planetInfo[planet.name].observer;
      journalTitle.textContent = planetInfo[planet.name].journalTitle;
      
      // \n을 <br>로 변환하여 줄바꿈 적용
      planetInfoText.innerHTML = planetInfo[planet.name].journalText.replace(/\n/g, '<br>');
      
      planetImage.src = planetInfo[planet.name].image;

    // p5의 경우 유튜브 링크 처리
    // p5 행성 클릭 시 유튜브 링크 처리
    if (planet.name === "p5" && planetInfo.p5.youtubeLink) {
      planetImage.style.cursor = "pointer"; // 클릭 가능한 커서로 변경
      planetImage.addEventListener("click", () => {
        window.location.href = planetInfo.p5.youtubeLink; // 유튜브 링크로 리디렉션
      });
    }
    // 다른 행성들은 기본 팝업 방식으로 처리
    popup.style.display = "flex";
  });
});

// Close popup
popupClose.addEventListener("click", () => {
  popup.style.display = "none";
});

// Close popup if clicked outside
window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});

// Slowdown and reset speed animations for planets
planets.forEach((planet) => {
  let slowdownAnimation;
  let originalSpeed = planet.originalSpeed;

  planet.element.addEventListener("mouseenter", () => {
    planet.isPaused = true;
    cancelAnimationFrame(slowdownAnimation); // Stop previous animation
    slowdownAnimation = requestAnimationFrame(smoothSlowdown); // Start slowdown animation
  });

  planet.element.addEventListener("mouseleave", () => {
    planet.isPaused = false;
    slowdownAnimation = requestAnimationFrame(resetSpeed); // Start reset speed animation
  });

  // Smooth slowdown animation
  function smoothSlowdown() {
    if (planet.speed > 0.002) {
      planet.speed -= 0.0005; // Slowdown smoothly
      slowdownAnimation = requestAnimationFrame(smoothSlowdown); // Continue slowdown
    } else {
      planet.speed = 0.002; // Set minimum speed
    }
  }

  // Reset speed animation
  function resetSpeed() {
    if (planet.speed < originalSpeed) {
      planet.speed += 0.0005; // Restore speed smoothly
      slowdownAnimation = requestAnimationFrame(resetSpeed); // Continue restoring
    } else {
      planet.speed = originalSpeed; // Ensure it reaches the original speed
    }
  }
});

// Planet rotation animation
function animatePlanets() {
  planets.forEach((planet) => {
    if (!planet.isPaused) {
      planet.angle += planet.speed; // Continue rotating based on speed
    }

    const orbitRadiusX = planet.element.parentNode.offsetWidth / 2;
    const orbitRadiusY = planet.element.parentNode.offsetHeight / 2;

    const x = Math.cos(planet.angle) * orbitRadiusX;
    const y = Math.sin(planet.angle) * orbitRadiusY;

    planet.element.style.transform = `translate(${x}px, ${y}px)`; // Apply position change
  });

  requestAnimationFrame(animatePlanets); // Continue animation
}

// Start planet animations
animatePlanets();

// Toggle full screen on F key press
document.addEventListener("keydown", (e) => {
  if (e.key === "f" || e.key === "F") {
    toggleFullScreen(); // Call fullscreen toggle function
  }
});

// Fullscreen toggle function
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
}
