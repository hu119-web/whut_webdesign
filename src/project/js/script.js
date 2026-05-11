// 平滑滚动到锚点
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if(this.getAttribute('href') === '#') return;
        
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// 特色功能区下滑展示
const featuresSection = document.getElementById('features-container');

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            featuresSection.classList.add('visible');
        }
    });
}, observerOptions);

// 观察特色功能区
observer.observe(document.getElementById('features'));

// 滚动提示箭头点击滚动到特色功能区
document.querySelector('.scroll-hint').addEventListener('click', function() {
    document.getElementById('features').scrollIntoView({
        behavior: 'smooth'
    });
});

// 生成樱花飘落效果
const sakuraImg = "images/sakura.png";
const count = 55;

const container = document.getElementById("sakuraContainer");

for(let i = 0; i < count; i++){
    let flower = document.createElement("img");
    flower.src = sakuraImg;
    flower.className = "sakura";

    let left = Math.random() * 100;
    let delay = Math.random() * 8;
    let time = 8 + Math.random() * 12;
    let size = 12 + Math.random() * 16;

    flower.style.left = left + "%";
    flower.style.animationDelay = delay + "s";
    flower.style.animationDuration = time + "s";
    flower.style.width = size + "px";

    container.appendChild(flower);
}

//背景音乐播放控制
function toggleMusic(){
    const music = document.getElementById('bgMusic');
    if(music.paused){
        music.play();
    }else{
        music.pause();
    }
}

//樱花飘落特效
const sakuraImg = "images/樱花飘落.png";
const count = 35;

const container = document.getElementById("sakuraContainer");

for(let i = 0; i < count; i++){
    let flower = document.createElement("img");
    flower.src = sakuraImg;
    flower.className = "sakura";

    let left = Math.random() * 100;
    let delay = Math.random() * 8;
    let time = 8 + Math.random() * 12;
    let size = 12 + Math.random() * 18;

    flower.style.left = left + "%";
    flower.style.animationDelay = delay + "s";
    flower.style.animationDuration = time + "s";
    flower.style.width = size + "px";

    container.appendChild(flower);
}