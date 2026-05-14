function createSakura() {
    const sakuraImg = "image/sakura.png";
    const container = document.getElementById("sakuraContainer");

    // 生成一朵新樱花，并添加到容器
    function addOneSakura() {
        const flower = document.createElement("img");
        flower.src = sakuraImg;
        flower.className = "sakura";

        // 随机参数
        const startLeft = Math.random() * 100;            // 起始水平位置 (%)
        const startTop = -Math.random() * 150 - 50;       // 起始垂直位置 (px)，屏幕外顶部
        const delay = Math.random() * 5;                  // 动画延迟 (s)
        const duration = 6 + Math.random() * 8;           // 动画时长 (s)
        const size = 12 + Math.random() * 20;             // 宽度 (px)
        const rotate = Math.random() * 360;               // 随机旋转角度

        // 应用样式
        flower.style.left = startLeft + "%";
        flower.style.top = startTop + "px";
        flower.style.animationDelay = delay + "s";
        flower.style.animationDuration = duration + "s";
        flower.style.width = size + "px";
        flower.style.transform = `rotate(${rotate}deg)`;   // 随机旋转，不会被动画覆盖
        flower.style.setProperty('--start-left', startLeft + "%");
        flower.style.animationName = "fallWithWind";
        flower.style.animationTimingFunction = "linear";
        flower.style.animationIterationCount = "1";        // 只播放一次，不循环

        // 动画结束后移除这朵樱花，并生成一朵新的补充
        flower.addEventListener('animationend', () => {
            flower.remove();
            addOneSakura();   // 补充新樱花，保持总数动态平衡
        });

        container.appendChild(flower);
    }

    // 初始生成 55 朵樱花
    const initialCount = 55;
    for (let i = 0; i < initialCount; i++) {
        addOneSakura();
    }
}

// 页面加载后 3 秒开始飘落
window.addEventListener('load', () => {
    setTimeout(() => {
        createSakura();
    }, 3000);
});