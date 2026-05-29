<template>
    <view class="mine-page">
        <!-- 用户头部 -->
        <view class="user-header">
            <view class="user-bg"></view>
            <view class="user-content">
                <view class="avatar-wrap" @click="handleAvatarClick">
                    <view class="avatar" v-if="!isLogin">
                        <text class="avatar-text">登</text>
                    </view>
                    <image class="avatar" v-else-if="userInfo.avatar" :src="userInfo.avatar" mode="aspectFill"></image>
                    <view class="avatar" v-else>
                        <text class="avatar-text">{{ userInfo.nickname ? userInfo.nickname.charAt(0) : '用' }}</text>
                    </view>
                </view>
                <view class="user-text" @click="handleAvatarClick">
                    <text class="user-name" v-if="isLogin">{{ userInfo.nickname }}</text>
                    <text class="user-name" v-else>点击登录</text>
                    <text class="user-phone" v-if="isLogin">{{ userInfo.phone }}</text>
                </view>
                <view class="edit-btn" @click="handleAvatarClick">
                    <text>›</text>
                </view>
            </view>

            <!-- 数据统计 -->
            <view class="stats-row">
                <view class="stat-item">
                    <text class="stat-num">{{ isLogin ? (userInfo.favorites || 0) : 0 }}</text>
                    <text class="stat-label">收藏</text>
                </view>
                <view class="stat-item">
                    <text class="stat-num">{{ isLogin ? orderCount : 0 }}</text>
                    <text class="stat-label">订单</text>
                </view>
                <view class="stat-item">
                    <text class="stat-num">{{ isLogin ? commentCount : 0 }}</text>
                    <text class="stat-label">评价</text>
                </view>
                <view class="stat-item">
                    <text class="stat-num">{{ isLogin ? (userInfo.points || 0) : 0 }}</text>
                    <text class="stat-label">积分</text>
                </view>
            </view>
        </view>

        <!-- 菜单列表 -->
        <view class="menu-section card">
            <view class="menu-item" @click="navigateTo('/pages/my-comments/my-comments', false)">
                <text class="menu-icon">📝</text>
                <text class="menu-label">我的评价</text>
                <text class="menu-arrow">›</text>
            </view>
            <view class="menu-item" @click="navigateTo('/pages/orders/orders', true)">
                <text class="menu-icon">📋</text>
                <text class="menu-label">我的订单</text>
                <text class="menu-arrow">›</text>
            </view>
            <view class="menu-item" @click="navigateTo('/pages/favorites/favorites', false)">
                <text class="menu-icon">❤️</text>
                <text class="menu-label">我的收藏</text>
                <text class="menu-arrow">›</text>
            </view>
            <view class="menu-item" @click="navigateTo('/pages/history/history', false)">
                <text class="menu-icon">👣</text>
                <text class="menu-label">我的足迹</text>
                <text class="menu-arrow">›</text>
            </view>
            <view class="menu-item" @click="navigateTo('/pages/coupons/coupons', false)">
                <text class="menu-icon">🎫</text>
                <text class="menu-label">优惠券</text>
                <text class="menu-arrow">›</text>
            </view>
            <view class="menu-item" @click="navigateTo('/pages/cart/cart', false)">
                <text class="menu-icon">🛒</text>
                <text class="menu-label">购物车</text>
                <text class="menu-arrow">›</text>
            </view>
        </view>

        <view class="menu-section card">
            <view class="menu-item" @click="navigateTo('/pages/address/address', false)">
                <text class="menu-icon">📍</text>
                <text class="menu-label">收货地址</text>
                <text class="menu-arrow">›</text>
            </view>
            <view class="menu-item" @click="navigateTo('/pages/service/service', false)">
                <text class="menu-icon">💬</text>
                <text class="menu-label">客服中心</text>
                <text class="menu-arrow">›</text>
            </view>
            <view class="menu-item" @click="navigateTo('/pages/settings/settings', false)">
                <text class="menu-icon">⚙️</text>
                <text class="menu-label">设置</text>
                <text class="menu-arrow">›</text>
            </view>
            <view class="menu-item" @click="navigateTo('/pages/about/about', false)">
                <text class="menu-icon">ℹ️</text>
                <text class="menu-label">关于我们</text>
                <text class="menu-arrow">›</text>
            </view>
        </view>

        <!-- 退出登录 -->
        <view class="logout-section" v-if="isLogin">
            <view class="logout-btn" @click="doLogout">
                退出登录
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            isLogin: false,
            userInfo: {},
            orderCount: 0,
            commentCount: 0
        };
    },
    onShow() {
        this.checkLogin();
        this.loadOrderCount();
        this.loadCommentCount();
    },
    methods: {
        checkLogin() {
            const userInfo = uni.getStorageSync('userInfo');
            if (userInfo) {
                this.isLogin = true;
                this.userInfo = userInfo;
            } else {
                this.isLogin = false;
                this.userInfo = {};
            }
        },
        loadOrderCount() {
            const orders = uni.getStorageSync('orders') || [];
            this.orderCount = orders.length;
        },
        loadCommentCount() {
            const userInfo = uni.getStorageSync('userInfo');
            if (!userInfo) {
                this.commentCount = 0;
                return;
            }
            const allComments = uni.getStorageSync('allComments') || [];
            this.commentCount = allComments.filter(c => c.user === userInfo.nickname).length;
        },
        handleAvatarClick() {
            if (!this.isLogin) {
                uni.navigateTo({
                    url: '/pages/login/login'
                });
            } else {
                uni.navigateTo({ url: '/pages/profile/profile' });
            }
        },
        navigateTo(url, isTab) {
            if (isTab) {
                uni.switchTab({ url: url });
            } else {
                uni.navigateTo({ url: url });
            }
        },
        showToast(name) {
            uni.showToast({ title: name + '功能开发中', icon: 'none', duration: 1500 });
        },
        doLogout() {
            uni.showModal({
                title: '提示',
                content: '确定要退出登录吗？',
                success: (res) => {
                    if (res.confirm) {
                        uni.removeStorageSync('userInfo');
                        this.isLogin = false;
                        this.userInfo = {};
                        uni.showToast({ title: '已退出登录', icon: 'none', duration: 1500 });
                    }
                }
            });
        }
    }
};
</script>

<style scoped>
.mine-page {
    background-color: #F5F5F5;
    min-height: 100vh;
    padding-bottom: 40rpx;
}

/* 用户头部 */
.user-header {
    background-color: #FFFFFF;
    position: relative;
    overflow: hidden;
}

.user-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 200rpx;
    background: linear-gradient(180deg, #FF6600, #FF8533);
    border-radius: 0 0 50% 50%;
    transform: scaleX(1.4);
}

.user-content {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    padding: 60rpx 32rpx 20rpx;
}

.avatar-wrap {
    margin-right: 20rpx;
}

.avatar {
    width: 120rpx;
    height: 120rpx;
    border-radius: 50%;
    background-color: rgba(255,255,255,0.3);
    border: 4rpx solid rgba(255,255,255,0.6);
    display: flex;
    align-items: center;
    justify-content: center;
}

.avatar-text {
    font-size: 48rpx;
    color: #FFFFFF;
    font-weight: bold;
}

.user-text {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 6rpx;
}

.user-name {
    font-size: 34rpx;
    color: #FFFFFF;
    font-weight: bold;
}

.user-phone {
    font-size: 24rpx;
    color: rgba(255,255,255,0.8);
}

.edit-btn {
    color: rgba(255,255,255,0.8);
    font-size: 48rpx;
    padding: 12rpx;
}

/* 统计数据 */
.stats-row {
    position: relative;
    z-index: 1;
    display: flex;
    background-color: #FFFFFF;
    margin: 0 24rpx;
    padding: 28rpx 0;
    border-radius: 16rpx;
    box-shadow: 0 4rpx 16rpx rgba(0,0,0,0.06);
    margin-top: -10rpx;
}

.stat-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8rpx;
}

.stat-num {
    font-size: 36rpx;
    font-weight: bold;
    color: #333;
}

.stat-label {
    font-size: 22rpx;
    color: #999;
}

/* 菜单 */
.card {
    background-color: #FFFFFF;
    margin: 20rpx 24rpx;
    border-radius: 16rpx;
    overflow: hidden;
    box-shadow: 0 2rpx 12rpx rgba(0,0,0,0.04);
}

.menu-item {
    display: flex;
    align-items: center;
    padding: 32rpx 28rpx;
    border-bottom: 1rpx solid #F8F8F8;
    transition: background-color 0.2s;
}

.menu-item:last-child {
    border-bottom: none;
}

.menu-item:active {
    background-color: #F8F8F8;
}

.menu-icon {
    font-size: 38rpx;
    margin-right: 20rpx;
}

.menu-label {
    flex: 1;
    font-size: 28rpx;
    color: #333;
}

.menu-arrow {
    font-size: 32rpx;
    color: #CCC;
}

/* 退出 */
.logout-section {
    padding: 40rpx 24rpx;
}

.logout-btn {
    width: 100%;
    height: 88rpx;
    background-color: #FFFFFF;
    color: #F44336;
    font-size: 30rpx;
    border-radius: 44rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2rpx 12rpx rgba(0,0,0,0.04);
}

.logout-btn:active {
    background-color: #FEF0EF;
}
</style>
