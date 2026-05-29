<template>
    <view class="about-page">
        <view class="about-header">
            <text class="about-logo">🍜</text>
            <text class="about-name">美食旅游</text>
            <text class="about-version">Version 1.0.0</text>
        </view>

        <view class="about-desc card">
            <text class="desc-text">
                美食旅游是一款集美食推荐与旅游指南于一体的综合服务平台。
                我们致力于为用户提供全国各地最地道的美食体验和最精彩的旅游目的地推荐，
                让你足不出户也能感受中国饮食文化与自然人文的魅力。
            </text>
        </view>

        <view class="info-list card">
            <view class="info-item">
                <text class="info-label">官方网站</text>
                <text class="info-val">www.foodtravel.cn</text>
            </view>
            <view class="info-item">
                <text class="info-label">联系邮箱</text>
                <text class="info-val">contact@foodtravel.cn</text>
            </view>
            <view class="info-item">
                <text class="info-label">技术栈</text>
                <text class="info-val">uni-app + Vue 2</text>
            </view>
            <view class="info-item">
                <text class="info-label">版权所有</text>
                <text class="info-val">© 2025 美食旅游团队</text>
            </view>
        </view>

        <view class="about-footer">
            <text class="footer-text">发现美食 · 畅游天下</text>
        </view>
    </view>
</template>

<script>
export default {};
</script>

<style scoped>
.about-page { min-height: 100vh; background-color: #F5F5F5; padding-bottom: 40rpx; }

.about-header {
    background: linear-gradient(135deg, #FF6600, #FF8533);
    padding: 60rpx 32rpx 48rpx; text-align: center;
}
.about-logo { font-size: 100rpx; display: block; margin-bottom: 16rpx; }
.about-name { font-size: 44rpx; font-weight: bold; color: #FFFFFF; display: block; }
.about-version { font-size: 26rpx; color: rgba(255,255,255,0.8); margin-top: 8rpx; display: block; }

.card { background-color: #FFFFFF; margin: 20rpx; border-radius: 16rpx; padding: 28rpx; box-shadow: 0 2rpx 12rpx rgba(0,0,0,0.04); }

.desc-text { font-size: 28rpx; color: #666; line-height: 1.8; }

.info-item { display: flex; padding: 20rpx 0; border-bottom: 1rpx solid #F8F8F8; }
.info-item:last-child { border-bottom: none; }
.info-label { font-size: 28rpx; color: #666; width: 180rpx; flex-shrink: 0; }
.info-val { font-size: 28rpx; color: #999; flex: 1; text-align: right; }

.about-footer { text-align: center; padding: 60rpx 0; }
.footer-text { font-size: 26rpx; color: #CCC; }
</style>
