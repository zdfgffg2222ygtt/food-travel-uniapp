<template>
    <view class="guide-container">
        <swiper class="guide-swiper" :current="currentIndex" @change="onSwiperChange" indicator-dots :indicator-color="'rgba(255,255,255,0.5)'" :indicator-active-color="'#FF6600'">
            <swiper-item v-for="(item, index) in guidePages" :key="index">
                <view class="slide" :style="{ backgroundColor: item.bgColor }">
                    <view class="slide-icon">{{ item.icon }}</view>
                    <view class="slide-title">{{ item.title }}</view>
                    <view class="slide-desc">{{ item.desc }}</view>
                </view>
            </swiper-item>
        </swiper>

        <!-- 底部操作区 -->
        <view class="guide-footer">
            <view class="skip-btn" v-if="currentIndex < guidePages.length - 1" @click="skipGuide">
                跳过
            </view>
            <view class="enter-btn" v-if="currentIndex === guidePages.length - 1" @click="enterApp">
                开始体验
            </view>
        </view>

        <!-- 圆点指示器下方的进入按钮 -->
        <view class="next-btn" v-if="currentIndex < guidePages.length - 1" @click="nextPage">
            下一步
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            currentIndex: 0,
            guidePages: [
                {
                    icon: '🍜',
                    title: '发现美食',
                    desc: '汇聚全国各地的特色美食，从街头小吃到精致料理，让你的味蕾开启一场美妙旅行',
                    bgColor: '#FF6B35'
                },
                {
                    icon: '🏛️',
                    title: '畅游景点',
                    desc: '精选热门旅游目的地，提供详细的景点介绍和游玩攻略，让你的旅行更加精彩',
                    bgColor: '#4CAF50'
                },
                {
                    icon: '🗺️',
                    title: '美食+旅游',
                    desc: '将美食与旅游完美结合，边吃边玩，体验最地道的地方文化和风味人间',
                    bgColor: '#2196F3'
                },
                {
                    icon: '🎉',
                    title: '开启旅程',
                    desc: '记录你的美食足迹，分享你的旅行故事，让我们一起开启精彩的美食旅游之旅',
                    bgColor: '#FF6600'
                }
            ]
        };
    },
    onLoad() {
        // 如果已经浏览过引导页，直接进入首页
        const hasGuided = uni.getStorageSync('hasGuided');
        if (hasGuided) {
            uni.switchTab({
                url: '/pages/index/index'
            });
        }
    },
    methods: {
        onSwiperChange(e) {
            this.currentIndex = e.detail.current;
        },
        nextPage() {
            if (this.currentIndex < this.guidePages.length - 1) {
                this.currentIndex++;
            }
        },
        skipGuide() {
            this.enterApp();
        },
        enterApp() {
            uni.setStorageSync('hasGuided', true);
            uni.setStorageSync('launchFlag', true);
            uni.switchTab({
                url: '/pages/index/index'
            });
        }
    }
};
</script>

<style scoped>
.guide-container {
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
}

.guide-swiper {
    width: 100%;
    height: 100%;
}

.slide {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 80rpx;
    box-sizing: border-box;
}

.slide-icon {
    font-size: 160rpx;
    margin-bottom: 60rpx;
    animation: bounce 2s infinite;
}

@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20rpx); }
}

.slide-title {
    font-size: 48rpx;
    color: #FFFFFF;
    font-weight: bold;
    margin-bottom: 40rpx;
    text-shadow: 0 2rpx 8rpx rgba(0,0,0,0.2);
}

.slide-desc {
    font-size: 30rpx;
    color: rgba(255,255,255,0.9);
    text-align: center;
    line-height: 1.8;
    text-shadow: 0 1rpx 4rpx rgba(0,0,0,0.15);
}

.guide-footer {
    position: absolute;
    bottom: 120rpx;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0 60rpx;
    box-sizing: border-box;
    z-index: 10;
}

.skip-btn {
    position: absolute;
    top: 80rpx;
    right: 40rpx;
    color: rgba(255,255,255,0.8);
    font-size: 28rpx;
    padding: 10rpx 24rpx;
    border: 2rpx solid rgba(255,255,255,0.6);
    border-radius: 40rpx;
    z-index: 10;
}

.enter-btn {
    width: 400rpx;
    height: 88rpx;
    background-color: #FFFFFF;
    color: #FF6600;
    font-size: 34rpx;
    font-weight: bold;
    border-radius: 44rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 8rpx 24rpx rgba(0,0,0,0.15);
}

.enter-btn:active {
    opacity: 0.9;
    transform: scale(0.98);
}

.next-btn {
    position: absolute;
    bottom: 60rpx;
    left: 50%;
    transform: translateX(-50%);
    color: rgba(255,255,255,0.9);
    font-size: 28rpx;
    padding: 14rpx 40rpx;
    z-index: 10;
}
</style>
