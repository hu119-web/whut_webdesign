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

// ========== 背景音乐控制（保留原功能） ==========
function toggleMusic() {
    const music = document.getElementById('bgMusic');
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

// 可选：页面加载时自动播放音乐（需用户交互，建议注释掉，保持原样）
// 如果希望一进入就播放，需在body上添加一个点击或滚动监听

// 夜间模式功能
(function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;
    
    // 读取用户之前的选择
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';  // 太阳图标表示当前是暗色模式，点它变亮
        if (themeToggle.classList.contains('floating-theme-btn')) {
            themeToggle.innerHTML = '☀️';
        }
    }
    
    // 切换主题
    themeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        
        if (isDark) {
            // 切换到亮色模式
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            themeToggle.textContent = '🌙';
            if (themeToggle.classList.contains('floating-theme-btn')) {
                themeToggle.innerHTML = '🌙';
            }
        } else {
            // 切换到暗色模式
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeToggle.textContent = '☀️';
            if (themeToggle.classList.contains('floating-theme-btn')) {
                themeToggle.innerHTML = '☀️';
            }
        }
    });
})();
 const items = document.querySelectorAll('.slider-item');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    let index = 0; // 当前显示第几张
    const len = items.length; // 总图片数

    // 切换图片函数
    function showImg(n) {
      // 隐藏所有图片
      items.forEach(item => item.classList.remove('active'));
      // 显示指定图片
      items[n].classList.add('active');
    }

    // 下一张
    function next() {
      index++;
      if (index >= len) index = 0; // 循环
      showImg(index);
    }

    // 上一张
    function prev() {
      index--;
      if (index < 0) index = len - 1; // 循环
      showImg(index);
    }

    // 自动播放（3秒切换一次）
    let timer = setInterval(next, 3000);

    // 点击按钮
    nextBtn.onclick = () => {
      clearInterval(timer); // 暂停自动
      next();
      timer = setInterval(next, 3000); // 重启
    };

    prevBtn.onclick = () => {
      clearInterval(timer);
      prev();
      timer = setInterval(next, 3000);
    };
