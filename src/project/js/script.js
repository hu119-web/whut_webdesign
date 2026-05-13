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

container.innerHTML="";

for(let i = 0; i < count; i++){
    let flower = document.createElement("img");
    flower.src = sakuraImg;
    flower.className = "sakura";

    let left = Math.random() * 100;
    let delay = Math.random() * 10;
    let time = 8 + Math.random() * 10;
    let size = 12 + Math.random() * 20;

    flower.style.left = left + "%";
    flower.style.animationDelay = delay + "s";
    flower.style.animationDuration = time + "s";
    flower.style.width = size + "px";

    flower.style.transform = 'rotate(${Math.random() * 360}deg)';

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
// 创建樱花飘落效果
function createSakura() {
    const container = document.getElementById('sakuraContainer');
    const sakuraCount = 30;
    
    for (let i = 0; i < sakuraCount; i++) {
        const sakura = document.createElement('div');
        sakura.className = 'sakura';
        
        // 随机位置和大小
        const size = Math.random() * 10 + 10;
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 10;
        
        sakura.style.width = `${size}px`;
        sakura.style.height = `${size}px`;
        sakura.style.left = `${left}%`;
        sakura.style.animationDelay = `${delay}s`;
        sakura.style.animationDuration = `${duration}s`;
        
        container.appendChild(sakura);
    }
}

// 在入场动画结束后创建樱花
window.addEventListener('load', () => {
    setTimeout(() => {
        createSakura();
    }, 3000);
});



