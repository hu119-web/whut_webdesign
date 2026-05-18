// ========== 食在理工详情页专属功能 ==========

// 全局夜间模式（与首页保持一致）
(function initGlobalTheme() {
    const themeToggle = document.getElementById('globalThemeToggle');
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (themeToggle) themeToggle.textContent = '☀️';
    }
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            if (isDark) {
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
                themeToggle.textContent = '🌙';
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                themeToggle.textContent = '☀️';
            }
        });
    }
})();

// 分类筛选功能
function initCategoryFilter() {
    const catBtns = document.querySelectorAll('.cat-btn');
    const foodCards = document.querySelectorAll('.food-card');

    if (!catBtns.length) return;

    catBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            catBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const category = btn.dataset.category;
            
            foodCards.forEach(card => {
                if (card.dataset.category === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
            
            document.querySelector('.food-grid').scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        });
    });
}

// 点赞功能
function initLikeButtons() {
    document.querySelectorAll('.like-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const span = btn.querySelector('span');
            let count = parseInt(span.innerText);
            count++;
            span.innerText = count;
            
            btn.style.transform = 'scale(1.2)';
            setTimeout(() => {
                btn.style.transform = 'scale(1)';
            }, 200);
        });
    });
}

// 深夜食堂彩蛋
function initMidnightMode() {
    const midnightBtn = document.getElementById('midnightBtn');
    if (!midnightBtn) return;
    
    let isMidnight = false;
    
    midnightBtn.addEventListener('click', () => {
        isMidnight = !isMidnight;
        if (isMidnight) {
            document.documentElement.setAttribute('data-midnight', 'true');
            midnightBtn.innerHTML = '☀️';
            midnightBtn.style.background = '#ffd700';
        } else {
            document.documentElement.removeAttribute('data-midnight');
            midnightBtn.innerHTML = '🌙';
            midnightBtn.style.background = '#ff9800';
        }
    });
}

// 图片懒加载 + alt 属性补全
function initImages() {
    document.querySelectorAll('img').forEach(img => {
        if (!img.hasAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
        }
        if (!img.hasAttribute('alt') || img.alt === '') {
            img.alt = '美食图片';
        }
    });
}

// 模拟点赞数据实时波动
function initMockData() {
    setInterval(() => {
        const likeBtns = document.querySelectorAll('.like-btn');
        if (likeBtns.length > 0 && Math.random() > 0.7) {
            const randomBtn = likeBtns[Math.floor(Math.random() * likeBtns.length)];
            const span = randomBtn.querySelector('span');
            let count = parseInt(span.innerText);
            span.innerText = count + Math.floor(Math.random() * 3);
        }
    }, 30000);
}

// 页面加载完成后初始化所有功能
document.addEventListener('DOMContentLoaded', () => {
    initCategoryFilter();
    initLikeButtons();
    initMidnightMode();
    initImages();
    initMockData();
});