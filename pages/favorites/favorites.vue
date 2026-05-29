<template>
    <view class="favorites-page">
        <view class="page-header" v-if="list.length > 0">
            <text class="header-title">我的收藏</text>
            <text class="header-count">共 {{ list.length }} 个</text>
        </view>

        <view class="item-list" v-if="list.length > 0">
            <view class="item-card" v-for="item in list" :key="item.id" @click="goDetail(item)">
                <image :src="item.image" mode="aspectFill" class="item-img"></image>
                <view class="item-info">
                    <view class="item-top">
                        <text class="item-name">{{ item.name }}</text>
                        <text class="item-type" :style="getTypeStyle(item)">{{ getTypeLabel(item) }}</text>
                    </view>
                    <view class="item-rating">
                        <text class="star">⭐</text>
                        <text class="rating-num">{{ item.rating }}</text>
                    </view>
                    <text class="item-location">📍 {{ item.location }}</text>
                    <view class="item-bottom">
                        <text class="item-price" v-if="item.price > 0"><text class="price-sym">¥</text>{{ item.price }}</text>
                        <text class="item-free" v-else>免费</text>
                    </view>
                </view>
                <view class="unfav-btn" @click.stop="removeFav(item)">
                    <text>❤️</text>
                </view>
            </view>
        </view>

        <view class="empty" v-else>
            <text class="empty-icon">💔</text>
            <text class="empty-text">还没有收藏</text>
            <text class="empty-hint">去发现喜欢的美食和景点吧~</text>
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
        this.list = uni.getStorageSync('favorites') || [];
    },
    methods: {
        getTypeLabel(item) {
            const map = { food: '美食', travel: '景点', hotel: '酒店', leisure: '休闲', specialty: '特产', route: '路线' };
            return map[item.dataType] || '美食';
        },
        getTypeStyle(item) {
            const colors = { food: '#FF6600', travel: '#4CAF50', hotel: '#2196F3', leisure: '#9C27B0', specialty: '#E91E63', route: '#00BCD4' };
            const bgs = { food: '#FFF3E0', travel: '#E8F5E9', hotel: '#E3F2FD', leisure: '#F3E5F5', specialty: '#FCE4EC', route: '#E0F7FA' };
            return 'color:' + (colors[item.dataType] || '#FF6600') + ';background-color:' + (bgs[item.dataType] || '#FFF3E0');
        },
        goDetail(item) {
            uni.navigateTo({
                url: '/pages/detail/detail?id=' + item.id + '&type=' + (item.dataType || 'food')
            });
        },
        removeFav(item) {
            let favs = uni.getStorageSync('favorites') || [];
            favs = favs.filter(f => f.id !== item.id || f.dataType !== item.dataType);
            uni.setStorageSync('favorites', favs);
            this.list = favs;
            uni.showToast({ title: '已取消收藏', icon: 'none', duration: 1500 });
        }
    }
};
</script>

<style scoped>
.favorites-page {
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

.item-list {
    padding: 16rpx 0;
}

.item-card {
    background-color: #FFFFFF;
    margin: 0 20rpx 16rpx;
    border-radius: 16rpx;
    display: flex;
    align-items: center;
    padding: 20rpx;
    gap: 16rpx;
    box-shadow: 0 2rpx 12rpx rgba(0,0,0,0.05);
}

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

.item-top {
    display: flex;
    align-items: center;
    gap: 10rpx;
}

.item-name {
    font-size: 28rpx;
    font-weight: bold;
    color: #333;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.item-type {
    font-size: 20rpx;
    padding: 4rpx 12rpx;
    border-radius: 6rpx;
    flex-shrink: 0;
}

.item-rating {
    display: flex;
    align-items: center;
    gap: 6rpx;
}

.star { font-size: 24rpx; }
.rating-num { font-size: 26rpx; color: #FF6600; font-weight: bold; }

.item-location {
    font-size: 22rpx;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.item-bottom {
    display: flex;
    align-items: baseline;
}

.item-price {
    font-size: 30rpx;
    color: #FF6600;
    font-weight: bold;
}

.price-sym { font-size: 20rpx; }

.item-free {
    font-size: 24rpx;
    color: #4CAF50;
    font-weight: bold;
}

.unfav-btn {
    font-size: 36rpx;
    padding: 12rpx;
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
