// ========== 平滑滚动 + 固定导航偏移量 ==========
// 获取固定导航栏的高度（动态，兼容不同设备）
const navHeight = document.querySelector('.nav-fixed')?.offsetHeight || 80;

// 所有内部锚点链接
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '#music') return; // 音乐按钮不需要滚动
        
        e.preventDefault();
        const targetId = href.substring(1); // 去掉 # 
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========== 滚动提示箭头：点击滚动到第一个全屏板块（食在理工） ==========
const scrollHint = document.querySelector('.scroll-hint');
if (scrollHint) {
    scrollHint.addEventListener('click', function() {
        const foodSection = document.getElementById('food-section');
        if (foodSection) {
            const offsetPosition = foodSection.getBoundingClientRect().top + window.scrollY - navHeight;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    });
}


// 替换原来的 toggleMusic 函数
function toggleMusic() {
    if (window.MusicManager) {
        MusicManager.toggle();
    }
}

// 可选：页面加载时自动播放音乐（需用户交互，建议注释掉，保持原样）
// 如果希望一进入就播放，需在body上添加一个点击或滚动监听


 // ========== 学校介绍轮播图 ==========
document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.slider-item');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dotsContainer = document.querySelector('.slider-dots');
    
    let currentIndex = 0;
    const totalSlides = items.length;
    let autoPlayTimer;
    
    // 创建小圆点
    function createDots() {
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('span');
            dot.className = 'slider-dot';
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }
    }
    
    // 切换到指定幻灯片
    function goToSlide(n) {
        items[currentIndex].classList.remove('active');
        dotsContainer.children[currentIndex].classList.remove('active');
        
        currentIndex = (n + totalSlides) % totalSlides;
        
        items[currentIndex].classList.add('active');
        dotsContainer.children[currentIndex].classList.add('active');
    }
    
    // 下一张
    function nextSlide() {
        goToSlide(currentIndex + 1);
    }
    
    // 上一张
    function prevSlide() {
        goToSlide(currentIndex - 1);
    }
    
    // 自动播放
    function startAutoPlay() {
        autoPlayTimer = setInterval(nextSlide, 3000);
    }
    
    function stopAutoPlay() {
        clearInterval(autoPlayTimer);
    }
    
    // 初始化
    createDots();
    startAutoPlay();
    
    // 绑定事件
    prevBtn.addEventListener('click', () => {
        stopAutoPlay();
        prevSlide();
        startAutoPlay();
    });
    
    nextBtn.addEventListener('click', () => {
        stopAutoPlay();
        nextSlide();
        startAutoPlay();
    });
    
    // 鼠标悬停暂停
    const slider = document.querySelector('.slider');
    slider.addEventListener('mouseenter', stopAutoPlay);
    slider.addEventListener('mouseleave', startAutoPlay);
});

