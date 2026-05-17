function showSightContent() {
    document.getElementById('sight').style.display = 'none';
    document.getElementById('sight-detail').style.display = 'block';
    document.getElementById('sight-detail').scrollIntoView({behavior:'smooth'})
}

// 点击返回，隐藏详情，重新显示游在理工板块
function backToSight() {
    document.getElementById('sight-detail').style.display = 'none';
    document.getElementById('sight').style.display = 'flex';
    // 滚动回游在理工板块
    document.getElementById('sight').scrollIntoView({ behavior: 'smooth' });
    const sightRect = document.getElementById('sight').getBoundingClientRect();
    window.scrollTo({
        top: sightRect.top + window.pageYOffset,
        left: 0,
        behavior: 'smooth'
    });
}