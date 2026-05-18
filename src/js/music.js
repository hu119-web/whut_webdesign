// src/js/music.js - 背景音乐管理模块
const MusicManager = {
    audio: null,
    isPlaying: false,
    currentTime: 0,
    storageKey: 'wut_bg_music_state',
    
    init() {
        this.audio = document.getElementById('bgMusic');
        if (!this.audio) return;
        
        // 从localStorage恢复状态
        this.restoreState();
        
        // 定期保存状态
        setInterval(() => this.saveState(), 1000);
        
        // 页面可见性变化时保存状态
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.saveState();
            }
        });
        
        // 页面卸载前保存状态
        window.addEventListener('beforeunload', () => {
            this.saveState();
        });
    },
    
    restoreState() {
        try {
            const savedState = localStorage.getItem(this.storageKey);
            if (savedState) {
                const state = JSON.parse(savedState);
                this.audio.currentTime = state.currentTime || 0;
                this.isPlaying = state.isPlaying || false;
                
                // 如果之前在播放，尝试继续播放
                if (this.isPlaying) {
                    // 延迟一点时间再播放，确保音频已加载
                    setTimeout(() => {
                        this.audio.play().catch(e => {
                            console.log('自动播放被阻止，需要用户交互');
                            this.isPlaying = false;
                        });
                    }, 100);
                }
            }
        } catch (e) {
            console.error('恢复音乐状态失败:', e);
        }
    },
    
    saveState() {
        if (!this.audio) return;
        
        const state = {
            currentTime: this.audio.currentTime,
            isPlaying: !this.audio.paused,
            timestamp: Date.now()
        };
        
        localStorage.setItem(this.storageKey, JSON.stringify(state));
    },

    // 在 MusicManager 对象中添加
updateButton() {
    const btn = document.querySelector('.music-btn i');
    if (btn) {
        if (this.audio && !this.audio.paused) {
            btn.classList.add('playing');
        } else {
            btn.classList.remove('playing');
        }
    }
},


    
    toggle() {
        if (!this.audio) return;
        
        if (this.audio.paused) {
            this.audio.play();
            this.isPlaying = true;
        } else {
            this.audio.pause();
            this.isPlaying = false;
        }
        
        this.saveState();
        this.updateButton();
    }
};

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    MusicManager.init();
});