<template>
    <view class="settings-page">
        <view class="section card">
            <text class="section-label">通用设置</text>
            <view class="setting-item" @click="clearCache">
                <text class="setting-label">清除缓存</text>
                <text class="setting-val">{{ cacheSize }}</text>
                <text class="setting-arrow">›</text>
            </view>
            <view class="setting-item">
                <text class="setting-label">当前版本</text>
                <text class="setting-val">v1.0.0</text>
            </view>
        </view>

        <view class="section card">
            <text class="section-label">通知设置</text>
            <view class="setting-item">
                <text class="setting-label">新店推荐通知</text>
                <switch :checked="notify.newShop" @change="toggleNotify('newShop')" color="#FF6600" />
            </view>
            <view class="setting-item">
                <text class="setting-label">优惠活动提醒</text>
                <switch :checked="notify.promotion" @change="toggleNotify('promotion')" color="#FF6600" />
            </view>
            <view class="setting-item">
                <text class="setting-label">订单状态更新</text>
                <switch :checked="notify.order" @change="toggleNotify('order')" color="#FF6600" />
            </view>
        </view>

        <view class="section card">
            <text class="section-label">其他</text>
            <view class="setting-item" @click="goAbout">
                <text class="setting-label">关于美食旅游</text>
                <text class="setting-arrow">›</text>
            </view>
            <view class="setting-item" @click="goService">
                <text class="setting-label">客服中心</text>
                <text class="setting-arrow">›</text>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            cacheSize: '0 KB',
            notify: { newShop: true, promotion: true, order: true }
        };
    },
    onShow() {
        const saved = uni.getStorageSync('notifySettings');
        if (saved) this.notify = { ...this.notify, ...saved };
        this.calcCacheSize();
    },
    methods: {
        calcCacheSize() {
            try {
                const keys = ['orders', 'favorites', 'allComments', 'browseHistory', 'addresses', 'myCoupons'];
                let total = 0;
                keys.forEach(k => {
                    const v = uni.getStorageSync(k);
                    if (v) total += JSON.stringify(v).length;
                });
                this.cacheSize = total > 1024 ? (total / 1024).toFixed(1) + ' KB' : total + ' B';
            } catch (e) {
                this.cacheSize = '计算失败';
            }
        },
        clearCache() {
            uni.showModal({
                title: '清除缓存',
                content: '将清除浏览记录和缓存数据，不会删除订单和收藏。确定继续吗？',
                confirmText: '确定清除',
                success: (res) => {
                    if (res.confirm) {
                        uni.removeStorageSync('browseHistory');
                        this.cacheSize = '0 KB';
                        uni.showToast({ title: '缓存已清除', icon: 'success', duration: 1500 });
                    }
                }
            });
        },
        toggleNotify(key, e) {
            this.notify[key] = e.detail.value;
            uni.setStorageSync('notifySettings', this.notify);
        },
        goAbout() {
            uni.navigateTo({ url: '/pages/about/about' });
        },
        goService() {
            uni.navigateTo({ url: '/pages/service/service' });
        }
    }
};
</script>

<style scoped>
.settings-page { min-height: 100vh; background-color: #F5F5F5; padding-bottom: 40rpx; }

.card { background-color: #FFFFFF; margin: 20rpx; border-radius: 16rpx; padding: 24rpx; box-shadow: 0 2rpx 12rpx rgba(0,0,0,0.04); }
.section-label { font-size: 24rpx; color: #BBB; display: block; margin-bottom: 16rpx; }

.setting-item {
    display: flex; align-items: center; padding: 22rpx 0;
    border-bottom: 1rpx solid #F8F8F8;
}
.setting-item:last-child { border-bottom: none; }
.setting-label { font-size: 28rpx; color: #333; flex: 1; }
.setting-val { font-size: 26rpx; color: #BBB; margin-right: 8rpx; }
.setting-arrow { font-size: 28rpx; color: #CCC; }
</style>
