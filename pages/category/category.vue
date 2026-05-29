<template>
    <view class="category-page">
        <!-- 顶部 -->
        <view class="category-header">
            <text class="category-title">{{ categoryName }}</text>
            <text class="category-count">共 {{ items.length }} 个</text>
        </view>

        <!-- 列表 -->
        <view class="item-list" v-if="items.length > 0">
            <view class="item-card" v-for="item in items" :key="item.id" @click="goDetail(item)">
                <image :src="item.image" mode="aspectFill" class="item-img"></image>
                <view class="item-info">
                    <view class="item-top">
                        <text class="item-name">{{ item.name }}</text>
                        <text class="item-tag" :style="{ color: tagColor, backgroundColor: tagBg }">{{ item.category }}</text>
                    </view>
                    <view class="item-rating">
                        <text class="star">⭐</text>
                        <text class="rating-num">{{ item.rating }}</text>
                        <text class="item-sales">已售{{ formatSales(item.sales) }}</text>
                    </view>
                    <text class="item-location">📍 {{ item.location }}</text>
                    <view class="item-bottom" v-if="item.duration">
                        <text class="item-duration">🗓️ {{ item.duration }}</text>
                        <text class="item-price"><text class="price-sym">¥</text>{{ item.price }}</text>
                        <text class="item-original" v-if="item.originalPrice > item.price">¥{{ item.originalPrice }}</text>
                    </view>
                    <view class="item-bottom" v-else>
                        <text class="item-price" v-if="item.price > 0"><text class="price-sym">¥</text>{{ item.price }}</text>
                        <text class="item-free" v-else>免费</text>
                        <text class="item-original" v-if="item.originalPrice > item.price">¥{{ item.originalPrice }}</text>
                    </view>
                </view>
            </view>
        </view>

        <view class="empty" v-else>
            <text class="empty-text">暂无内容</text>
        </view>
    </view>
</template>

<script>
import { foodList, travelList, hotelList, leisureList, specialtyList, routeList } from '@/common/mock.js';

export default {
    data() {
        return {
            categoryName: '',
            items: [],
            tagColor: '#FF6600',
            tagBg: '#FFF3E0'
        };
    },
    onLoad(options) {
        this.categoryName = options.name || '美食';
        uni.setNavigationBarTitle({ title: this.categoryName });
        this.setTagStyle();
        this.loadData();
    },
    methods: {
        setTagStyle() {
            switch (this.categoryName) {
                case '美食': this.tagColor = '#FF6600'; this.tagBg = '#FFF3E0'; break;
                case '景点': this.tagColor = '#4CAF50'; this.tagBg = '#E8F5E9'; break;
                case '酒店': this.tagColor = '#2196F3'; this.tagBg = '#E3F2FD'; break;
                case '休闲': this.tagColor = '#9C27B0'; this.tagBg = '#F3E5F5'; break;
                case '火锅': this.tagColor = '#F44336'; this.tagBg = '#FFEBEE'; break;
                case '小吃': this.tagColor = '#FF9800'; this.tagBg = '#FFF3E0'; break;
                case '特产': this.tagColor = '#E91E63'; this.tagBg = '#FCE4EC'; break;
                case '路线': this.tagColor = '#00BCD4'; this.tagBg = '#E0F7FA'; break;
            }
        },
        loadData() {
            let source = [];
            switch (this.categoryName) {
                case '美食':
                    source = foodList.map(f => ({ ...f, dataType: 'food' }));
                    break;
                case '景点':
                    source = travelList.map(t => ({ ...t, dataType: 'travel' }));
                    break;
                case '酒店':
                    source = hotelList.map(h => ({ ...h, dataType: 'hotel' }));
                    break;
                case '休闲':
                    source = leisureList.map(l => ({ ...l, dataType: 'leisure' }));
                    break;
                case '火锅':
                    source = foodList.filter(f => f.category === '火锅').map(f => ({ ...f, dataType: 'food' }));
                    break;
                case '小吃':
                    source = foodList.filter(f => f.category === '小吃').map(f => ({ ...f, dataType: 'food' }));
                    break;
                case '特产':
                    source = specialtyList.map(s => ({ ...s, dataType: 'specialty' }));
                    break;
                case '路线':
                    source = routeList.map(r => ({ ...r, dataType: 'route' }));
                    break;
                default:
                    source = foodList.map(f => ({ ...f, dataType: 'food' }));
            }
            this.items = source;
        },
        formatSales(sales) {
            if (sales >= 10000) return (sales / 10000).toFixed(1) + 'w';
            if (sales >= 1000) return (sales / 1000).toFixed(1) + 'k';
            return String(sales);
        },
        goDetail(item) {
            uni.navigateTo({
                url: '/pages/detail/detail?id=' + item.id + '&type=' + item.dataType
            });
        }
    }
};
</script>

<style scoped>
.category-page {
    min-height: 100vh;
    background-color: #F5F5F5;
    padding-bottom: 20rpx;
}

.category-header {
    background: linear-gradient(135deg, #FF6600, #FF8533);
    padding: 32rpx 28rpx;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
}

.category-title {
    font-size: 36rpx;
    font-weight: bold;
    color: #FFFFFF;
}

.category-count {
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
    overflow: hidden;
    box-shadow: 0 2rpx 12rpx rgba(0,0,0,0.05);
    display: flex;
    padding: 20rpx;
    gap: 20rpx;
}

.item-card:active {
    opacity: 0.95;
}

.item-img {
    width: 200rpx;
    height: 180rpx;
    border-radius: 12rpx;
    flex-shrink: 0;
    background: linear-gradient(135deg, #E0E0E0, #BDBDBD);
}

.item-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

.item-tag {
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
.item-sales { font-size: 20rpx; color: #BBB; margin-left: 6rpx; }

.item-location {
    font-size: 22rpx;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.item-duration {
    font-size: 22rpx;
    color: #00BCD4;
}

.item-bottom {
    display: flex;
    align-items: baseline;
    gap: 8rpx;
}

.item-price {
    font-size: 34rpx;
    color: #FF6600;
    font-weight: bold;
}

.price-sym { font-size: 22rpx; }

.item-original {
    font-size: 22rpx;
    color: #BBB;
    text-decoration: line-through;
}

.item-free {
    font-size: 26rpx;
    color: #4CAF50;
    font-weight: bold;
}

.empty {
    text-align: center;
    padding: 120rpx 0;
}

.empty-text {
    font-size: 28rpx;
    color: #BBB;
}
</style>
