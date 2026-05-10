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