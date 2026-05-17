// 点击“食在理工”：隐藏主板块，显示详情页并平滑滚动
function showFoodContent() {
    document.getElementById('food').style.display = 'none';
    document.getElementById('food-detail').style.display = 'block';
    document.getElementById('food-detail').scrollIntoView({ behavior: 'smooth' });
}

// 点击“返回主页”：隐藏详情，恢复主板块并精准滚回原位置
function backToFood() {
    document.getElementById('food-detail').style.display = 'none';
    document.getElementById('food').style.display = 'flex';

    const foodRect = document.getElementById('food').getBoundingClientRect();
    window.scrollTo({
        top: foodRect.top + window.pageYOffset,
        left: 0,
        behavior: 'smooth'
    });
}