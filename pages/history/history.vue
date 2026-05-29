<template>
    <view class="history-page">
        <view class="page-header" v-if="list.length > 0">
            <text class="header-title">我的足迹</text>
            <view class="header-right">
                <text class="header-count">共 {{ list.length }} 条</text>
                <text class="clear-btn" @click="clearAll">清空</text>
            </view>
        </view>

        <view class="item-list" v-if="list.length > 0">
            <view class="item-card" v-for="item in list" :key="item.id" @click="goDetail(item)">
                <image :src="item.itemImage" mode="aspectFill" class="item-img"></image>
                <view class="item-info">
                    <text class="item-name">{{ item.itemName }}</text>
                    <view class="item-rating">
                        <text class="star">⭐</text>
                        <text class="rating-num">{{ item.rating }}</text>
                        <text class="item-type" :style="getTypeStyle(item)">{{ getTypeLabel(item) }}</text>
                    </view>
                    <text class="item-category">{{ item.category }}</text>
                    <view class="item-bottom">
                        <text class="item-price" v-if="item.price > 0">¥{{ item.price }}</text>
                        <text class="item-free" v-else>免费</text>
                        <text class="item-time">{{ item.time }}</text>
                    </view>
                </view>
            </view>
        </view>

        <view class="empty" v-else>
            <text class="empty-icon">👣</text>
            <text class="empty-text">还没有浏览记录</text>
            <text class="empty-hint">去看看有什么好吃好玩的吧~</text>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            list: []
        };
    },
    onShow() {
        const history = uni.getStorageSync('browseHistory') || [];
        this.list = history;
    },
    methods: {
        getTypeLabel(item) {
            const map = { food: '美食', travel: '景点', hotel: '酒店', leisure: '休闲', specialty: '特产', route: '路线' };
            return map[item.itemType] || '美食';
        },
        getTypeStyle(item) {
            const colors = { food: '#FF6600', travel: '#4CAF50', hotel: '#2196F3', leisure: '#9C27B0', specialty: '#E91E63', route: '#00BCD4' };
            const bgs = { food: '#FFF3E0', travel: '#E8F5E9', hotel: '#E3F2FD', leisure: '#F3E5F5', specialty: '#FCE4EC', route: '#E0F7FA' };
            return 'color:' + (colors[item.itemType] || '#FF6600') + ';background-color:' + (bgs[item.itemType] || '#FFF3E0');
        },
        goDetail(item) {
            uni.navigateTo({
                url: '/pages/detail/detail?id=' + item.itemId + '&type=' + (item.itemType || 'food')
            });
        },
        clearAll() {
            uni.showModal({
                title: '提示',
                content: '确定清空全部浏览记录吗？',
                confirmText: '确定',
                success: (res) => {
                    if (res.confirm) {
                        uni.removeStorageSync('browseHistory');
                        this.list = [];
                        uni.showToast({ title: '已清空', icon: 'none', duration: 1500 });
                    }
                }
            });
        }
    }
};
</script>

<style scoped>
.history-page {
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

.header-right {
    display: flex;
    align-items: center;
    gap: 20rpx;
}

.header-count {
    font-size: 26rpx;
    color: rgba(255,255,255,0.8);
}

.clear-btn {
    font-size: 26rpx;
    color: rgba(255,255,255,0.9);
    padding: 6rpx 16rpx;
    border: 1rpx solid rgba(255,255,255,0.6);
    border-radius: 20rpx;
}

.item-list {
    padding: 16rpx 0;
}

.item-card {
    background-color: #FFFFFF;
    margin: 0 20rpx 16rpx;
    border-radius: 16rpx;
    display: flex;
    padding: 20rpx;
    gap: 16rpx;
    box-shadow: 0 2rpx 12rpx rgba(0,0,0,0.05);
}

.item-card:active { opacity: 0.95; }

.item-img {
    width: 160rpx;
    height: 140rpx;
    border-radius: 10rpx;
    flex-shrink: 0;
    background: linear-gradient(135deg, #E0E0E0, #BDBDBD);
}

.item-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8rpx;
    min-width: 0;
}

.item-name {
    font-size: 28rpx;
    font-weight: bold;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.item-rating {
    display: flex;
    align-items: center;
    gap: 6rpx;
}

.star { font-size: 24rpx; }
.rating-num { font-size: 26rpx; color: #FF6600; font-weight: bold; }

.item-type {
    font-size: 20rpx;
    padding: 2rpx 10rpx;
    border-radius: 4rpx;
    margin-left: 4rpx;
}

.item-category {
    font-size: 22rpx;
    color: #999;
}

.item-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.item-price {
    font-size: 28rpx;
    color: #FF6600;
    font-weight: bold;
}

.item-free {
    font-size: 24rpx;
    color: #4CAF50;
    font-weight: bold;
}

.item-time {
    font-size: 22rpx;
    color: #BBB;
}

.empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 160rpx 40rpx 0;
}

.empty-icon { font-size: 100rpx; margin-bottom: 24rpx; }
.empty-text { font-size: 30rpx; color: #999; margin-bottom: 12rpx; }
.empty-hint { font-size: 24rpx; color: #CCC; }
</style>
