export default {
  install(app) {
    app.config.globalProperties.$loadImage = (src) => {
      return new Promise((resolve) => {
        // 이미지 로드가 끝나면 그 다음에 실행하는 상태를 약속
        const img = document.createElement("img");
        img.src = src;
        img.addEventListener("load", () => {
          resolve();
        });
      });
    };
  },
};
