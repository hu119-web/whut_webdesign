// src/js/study.js
// 学在理工 - 圆形交互模块

// 1. 定义数据
const campusData = [
    {img:"image/南湖图书馆.png",title:"书香馆藏・图书馆研学",text:"武汉理工大学坐拥南湖、西院、余家头三大现代化图书馆，馆藏纸质文献超 400 万册、电子资源超百个数据库，阅览席位近万席。馆内配备 24 小时自习室、静音研读区、数字资源体验区，从清晨的第一缕阳光到深夜的台灯微光，这里永远有埋头苦读的身影。学子们在此刷题备考、研读专业典籍、查阅前沿文献，沉浸式的静谧环境与浓厚学习氛围，成为理工学子沉淀学识、追逐目标的 “知识港湾”。"},
    {img:"image/师者传道.png",title:"师者传道・课堂研学",text:"课堂是理工学子汲取知识的核心阵地，学校汇聚了一批深耕学术的名师学者，他们以严谨的教风、生动的授课方式，将专业理论与行业前沿动态深度融合。无论是阶梯教室里的深入浅出讲解，还是小班研讨课上的师生互动交流，每一堂课都紧扣学科核心，夯实专业根基。在这里，学子们不仅收获了扎实的学识，更在老师的启发下培养了批判性思维与问题解决能力，为后续专业学习与科研探索筑牢基础。"},
    {img:"image/科研实训.png",title:"科创实训・实验室研学",text:"作为工科强校，武汉理工大学为学子搭建了覆盖材料、交通、机械、计算机等优势学科的高标准实验室与科创平台。学子们走出课本，走进实验室，亲手操作精密仪器、开展实验验证、攻克技术难题，将课堂上学到的理论知识转化为可落地的实践能力。从基础课程实验到国家级科创项目，从材料性能测试到智能系统开发，实验室里的每一次尝试、每一次突破，都在锤炼学子的工科实干素养与创新思维，为未来投身行业前沿打下坚实基础。"},
    {img:"image/学海争锋.png",title:"学海争锋・竞赛研学",text:"校园内各类学科竞赛与专业比拼氛围浓厚，学校大力支持学子组队参与数学建模、电子设计、机械创新、智能车等各类赛事。学子们组建团队，利用课余时间研讨知识点、打磨方案、反复测试，在备赛过程中查漏补缺、互帮互助。从校内选拔赛的初露锋芒，到省级、国家级赛场的并肩作战，每一次竞赛都是一次对学识、抗压能力与团队协作的全方位锻炼，不仅拓宽了学子的学术视野，更让他们在竞争中突破自我，收获成长。"},
    {img:"image/知行致远.png",title:"知行致远・户外研学交流",text:"学习不止局限于教室与图书馆，校园的湖畔、林荫道、飞马广场旁，处处可见学子学习交流的身影。清晨的南湖畔，学子们迎着朝阳晨读背诵；午后的林荫道上，小组围坐讨论学业难题；周末的校园里，同学们结伴开展户外研学，梳理知识体系、交流学习心得。这种轻松自在的学习模式，既缓解了学业压力，又促进了同学间的互助互鉴，让知识在交流中沉淀，在实践中深化。"},
    {img:"image/朝夕共进.png",title:"朝夕共进・宿舍勤学氛围",text:"浓厚的学风浸润校园的每一个角落，宿舍成为理工学子晚间学习的重要阵地。在这里，室友们互相督促打卡学习，分享课堂笔记与备考技巧，讨论难题解法、交流学习经验。一盏台灯下，几个人伏案刷题、互相讲解，营造出互帮互助、共同进步的勤学氛围。朝夕相伴的陪伴与鼓励，让学子们在学业路上不再孤单，携手攻克难点、稳步前行，用点滴努力奔赴各自的目标。"}
];

// 2. 定义初始化函数，方便在主页面调用
function initStudyCircle() {
    const mainBox = document.getElementById('box');
    const infoShowBox = document.getElementById('info');
    if (!mainBox || !infoShowBox) {
        console.log("学在理工模块：未找到DOM元素，不执行初始化");
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
            infoShowBox.style.backgroundImage = `url(${item.img})`;
            infoShowBox.innerHTML = `
                <h3>
                    <a href="study.html" style="color: inherit; text-decoration: none;">
                        ${item.title}
                    </a>
                </h3>
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

// 3. 页面加载完成后自动初始化
document.addEventListener('DOMContentLoaded', initStudyCircle);