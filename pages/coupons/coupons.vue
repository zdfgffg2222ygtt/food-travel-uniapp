<template>
    <view class="coupons-page">
        <view class="page-header" v-if="list.length > 0">
            <text class="header-title">优惠券</text>
            <text class="header-count">{{ availableCount }} 张可用</text>
        </view>

        <view class="coupon-list" v-if="list.length > 0">
            <view class="coupon-card" v-for="item in list" :key="item.id" :class="item.status">
                <view class="coupon-left">
                    <text class="coupon-amount"><text class="symbol">¥</text>{{ item.discount }}</text>
                    <text class="coupon-condition">满{{ item.minAmount }}可用</text>
                </view>
                <view class="coupon-divider"></view>
                <view class="coupon-right">
                    <text class="coupon-title">{{ item.title }}</text>
                    <text class="coupon-scope">{{ item.category }}</text>
                    <text class="coupon-expire">有效期至 {{ item.expireDate }}</text>
                </view>
                <view class="coupon-status-tag" v-if="item.status !== 'available'">
                    <text>{{ item.status === 'used' ? '已使用' : '已过期' }}</text>
                </view>
                <view class="coupon-action" v-else @click.stop="claimCoupon(item)">
                    <text class="claim-text">立即<br>领取</text>
                </view>
            </view>
        </view>

        <view class="empty" v-else>
            <text class="empty-icon">🎫</text>
            <text class="empty-text">暂无优惠券</text>
        </view>
    </view>
</template>

<script>
import { couponList } from '@/common/mock.js';

export default {
    data() {
        return {
            list: []
        };
    },
    computed: {
        availableCount() {
            return this.list.filter(c => c.status === 'available').length;
        }
    },
    onShow() {
        this.loadCoupons();
    },
    methods: {
        loadCoupons() {
            const claimed = uni.getStorageSync('myCoupons') || [];
            const merged = couponList.map(c => {
                const found = claimed.find(m => m.id === c.id);
                return found ? { ...c, status: found.status } : { ...c };
            });
            this.list = merged;
        },
        claimCoupon(item) {
            let claimed = uni.getStorageSync('myCoupons') || [];
            if (claimed.some(c => c.id === item.id)) return;
            claimed.push({ id: item.id, status: 'available' });
            uni.setStorageSync('myCoupons', claimed);
            uni.showToast({ title: '领取成功', icon: 'success', duration: 1500 });
            this.loadCoupons();
        }
    }
};
</script>

<style scoped>
.coupons-page {
    min-height: 100vh;
    background-color: #F5F5F5;
    padding-bottom: 40rpx;
}

.page-header {
    background: linear-gradient(135deg, #FF6600, #FF8533);
    padding: 32rpx 28rpx;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
}

.header-title {
    font-size: 36rpx;
    font-weight: bold;
    color: #FFFFFF;
}

.header-count {
    font-size: 26rpx;
    color: rgba(255,255,255,0.8);
}

.coupon-list {
    padding: 16rpx 20rpx;
}

.coupon-card {
    background-color: #FFFFFF;
    border-radius: 16rpx;
    margin-bottom: 20rpx;
    display: flex;
    align-items: stretch;
    overflow: hidden;
    position: relative;
    box-shadow: 0 2rpx 12rpx rgba(0,0,0,0.05);
}

.coupon-card.used, .coupon-card.expired {
    opacity: 0.55;
}

.coupon-left {
    width: 200rpx;
    background: linear-gradient(135deg, #FF6600, #FF8533);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24rpx 16rpx;
    flex-shrink: 0;
}

.coupon-card.used .coupon-left,
.coupon-card.expired .coupon-left {
    background: linear-gradient(135deg, #BBB, #CCC);
}

.coupon-amount {
    font-size: 56rpx;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 1;
}

.symbol {
    font-size: 30rpx;
}

.coupon-condition {
    font-size: 20rpx;
    color: rgba(255,255,255,0.85);
    margin-top: 8rpx;
}

.coupon-divider {
    width: 2rpx;
    background: repeating-linear-gradient(
        to bottom,
        #FF6600 0,
        #FF6600 8rpx,
        transparent 8rpx,
        transparent 16rpx
    );
    flex-shrink: 0;
}

.coupon-card.used .coupon-divider,
.coupon-card.expired .coupon-divider {
    background: repeating-linear-gradient(
        to bottom,
        #CCC 0,
        #CCC 8rpx,
        transparent 8rpx,
        transparent 16rpx
    );
}

.coupon-right {
    flex: 1;
    padding: 24rpx 20rpx;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8rpx;
}

.coupon-title {
    font-size: 28rpx;
    font-weight: bold;
    color: #333;
}

.coupon-scope {
    font-size: 22rpx;
    color: #999;
}

.coupon-expire {
    font-size: 20rpx;
    color: #BBB;
}

.coupon-status-tag {
    position: absolute;
    top: 16rpx;
    right: 16rpx;
    background-color: rgba(0,0,0,0.12);
    padding: 6rpx 14rpx;
    border-radius: 6rpx;
    font-size: 20rpx;
    color: #999;
}

.coupon-action {
    position: absolute;
    top: 50%;
    right: 20rpx;
    transform: translateY(-50%);
    background-color: #FF6600;
    border-radius: 50%;
    width: 80rpx;
    height: 80rpx;
    display: flex;
    align-items: center;
    justify-content: center;
}

.claim-text {
    color: #FFFFFF;
    font-size: 22rpx;
    font-weight: bold;
    line-height: 1.3;
    text-align: center;
}

.coupon-action:active {
    opacity: 0.8;
}

.empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 160rpx 40rpx 0;
}

.empty-icon { font-size: 100rpx; margin-bottom: 24rpx; }
.empty-text { font-size: 30rpx; color: #999; }
</style>
