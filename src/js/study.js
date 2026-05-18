// src/js/study.js
// 学在理工 - 圆形交互模块

// 1. 定义数据
const campusData = [
    {img:"image/南湖图书馆.png",title:"书香馆藏・图书馆研学",text:"武汉理工大学坐拥南湖、西院、余家头三大现代化图书馆，馆藏纸质文献超 400 万册、电子资源超百个数据库，阅览席位近万席。馆内配备 24 小时自习室、静音研读区、数字资源体验区，从清晨的第一缕阳光到深夜的台灯微光，这里永远有埋头苦读的身影。学子们在此刷题备考、研读专业典籍、查阅前沿文献，沉浸式的静谧环境与浓厚学习氛围，成为理工学子沉淀学识、追逐目标的 “知识港湾”。"},
    {img:"image/师者传道.png",title:"师者传道・课堂研学",text:"课堂是理工学子汲取知识的核心阵地，学校汇聚了一批深耕学术的名师学者，他们以严谨的教风、生动的授课方式，将专业理论与行业前沿动态深度融合。无论是阶梯教室里的深入浅出讲解，还是小班研讨课上的互动交流，每一堂课都紧扣学科核心，夯实专业根基。在这里，学子们不仅收获扎实学识，更培养了批判性思维与问题解决能力。"},
    {img:"image/科研实训.png",title:"科创实训・实验室研学",text:"作为工科强校，武汉理工大学为学子搭建覆盖材料、交通、机械、计算机等学科的高标准实验室与科创平台。学子们走出课本，亲手操作仪器、开展实验、攻克难题，将理论转化为实践能力。从基础实验到国家级项目，每一次尝试都在锤炼工科素养与创新思维。"},
    {img:"image/学海争锋.png",title:"学海争锋・竞赛研学",text:"校园学科竞赛氛围浓厚，学校支持学子参与数学建模、电子设计、智能车等赛事。同学们组队研讨、打磨方案、反复测试，在备赛中查漏补缺、互助成长。从校内到国赛，每一次竞赛都是全方位锻炼，拓宽视野、突破自我。"},
    {img:"image/知行致远.png",title:"知行致远・户外研学交流",text:"学习不止于教室与图书馆，校园湖畔、林荫道、飞马广场处处可见学习身影。清晨晨读、午后研讨、周末研学，轻松的交流模式缓解压力，促进互助互鉴，让知识在交流中沉淀、在实践中深化。"},
    {img:"image/朝夕共进.png",title:"朝夕共进・宿舍勤学氛围",text:"浓厚学风浸润宿舍这片小天地，室友互相督促、分享笔记、讨论难题、交流经验。一盏台灯、共同奋斗，营造互帮互助的勤学氛围，陪伴彼此稳步前行，用点滴努力奔赴目标。"}
];

// 2. 初始化函数
function initStudyCircle() {
    const mainBox = document.getElementById('box');
    const infoShowBox = document.getElementById('info');
    if (!mainBox || !infoShowBox) {
        console.log("学在理工模块：未找到DOM元素");
        return;
    }

    const circleRadius = 230;
    const moveDistance = 80;

    campusData.forEach((item, index) => {
        const angle = (index / 6) * Math.PI * 2 - Math.PI / 2;
        const posX = 350 + circleRadius * Math.cos(angle);
        const posY = 350 + circleRadius * Math.sin(angle);
        
        const imgDom = document.createElement('div');
        imgDom.className = 'image-item';
        imgDom.innerHTML = `<img src="${item.img}" alt="${item.title}">`;
        imgDom.style.left = `${posX - 62}px`;
        imgDom.style.top = `${posY - 62}px`;

        imgDom.addEventListener('mouseenter', () => {
            document.querySelectorAll('.image-item').forEach((dom, idx) => {
                const a = (idx / 6) * Math.PI * 2 - Math.PI / 2;
                const ox = moveDistance * Math.cos(a);
                const oy = moveDistance * Math.sin(a);
                dom.style.transform = `translate(${ox}px, ${oy}px) scale(1.03)`;
            });

            infoShowBox.innerHTML = `
                <h3>${item.title}</h3>
                <p>${item.text}</p>
            `;
            infoShowBox.classList.add('show');
        });

        imgDom.addEventListener('mouseleave', () => {
            document.querySelectorAll('.image-item').forEach(dom => {
                dom.style.transform = 'translate(0,0) scale(1)';
            });
            infoShowBox.classList.remove('show');
        });

        mainBox.appendChild(imgDom);
    });
}

// 3. 页面加载后执行
document.addEventListener('DOMContentLoaded', initStudyCircle);