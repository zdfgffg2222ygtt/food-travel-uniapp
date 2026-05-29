<template>
    <view class="index-page">
        <!-- 顶部搜索栏 -->
        <view class="search-bar">
            <view class="city-selector" @click="showCityPicker">
                <text class="city-text">{{ currentCity }}</text>
                <text class="arrow-down">▼</text>
            </view>
            <view class="search-input-box" @click="goSearch">
                <text class="search-icon">🔍</text>
                <text class="search-placeholder">搜索美食、景点、目的地</text>
            </view>
            <view class="msg-icon" @click="goCart">
                <text>🛒</text>
                <view class="cart-badge" v-if="cartCount > 0">{{ cartCount > 99 ? '99+' : cartCount }}</view>
            </view>
            <view class="msg-icon" @click="goMine">
                <text>👤</text>
            </view>
        </view>

        <!-- 轮播图 -->
        <swiper class="banner-swiper" indicator-dots autoplay circular interval="3000" indicator-color="rgba(255,255,255,0.5)" indicator-active-color="#FF6600">
            <swiper-item v-for="banner in banners" :key="banner.id" @click="goDetail(banner)">
                <image :src="banner.image" mode="aspectFill" class="banner-image"></image>
                <view class="banner-title">{{ banner.title }}</view>
            </swiper-item>
        </swiper>

        <!-- 分类导航 -->
        <view class="category-section">
            <view class="category-item" v-for="cat in categories" :key="cat.id" @click="onCategoryClick(cat)">
                <view class="category-icon" :style="{ backgroundColor: cat.color }">{{ cat.icon }}</view>
                <text class="category-name">{{ cat.name }}</text>
            </view>
        </view>

        <!-- 热门推荐标题 -->
        <view class="section-header">
            <view class="section-title-box">
                <text class="section-title">🔥 猜你喜欢</text>
                <text class="section-subtitle">为你精选优质美食</text>
            </view>
            <text class="section-more" @click="viewAll('food')">更多 ›</text>
        </view>

        <!-- 美食列表 -->
        <scroll-view scroll-x class="food-scroll" v-if="foodList.length > 0">
            <view class="food-card" v-for="item in foodList" :key="item.id" @click="goDetail(item)">
                <view class="food-img-wrap">
                    <image :src="item.image" mode="aspectFill" class="food-img"></image>
                    <view class="food-tag" v-if="item.tags && item.tags.length">{{ item.tags[0] }}</view>
                </view>
                <view class="food-info">
                    <text class="food-name">{{ item.name }}</text>
                    <view class="food-rating">
                        <text class="rating-star">⭐</text>
                        <text class="rating-num">{{ item.rating }}</text>
                        <text class="food-category">{{ item.category }}</text>
                    </view>
                    <view class="food-price-row">
                        <text class="food-price"><text class="price-symbol">¥</text>{{ item.price }}</text>
                        <text class="food-original-price">¥{{ item.originalPrice }}</text>
                        <text class="food-sales">已售{{ item.sales > 1000 ? (item.sales/1000).toFixed(1)+'k' : item.sales }}</text>
                    </view>
                </view>
            </view>
        </scroll-view>
        <view v-else class="empty-state">加载中...</view>

        <!-- 热门景点标题 -->
        <view class="section-header">
            <view class="section-title-box">
                <text class="section-title">🏛️ 热门景点</text>
                <text class="section-subtitle">精选必去旅游目的地</text>
            </view>
            <text class="section-more" @click="viewAll('travel')">更多 ›</text>
        </view>

        <!-- 景点列表 -->
        <view class="travel-list" v-if="travelList.length > 0">
            <view class="travel-card" v-for="item in travelList" :key="item.id" @click="goDetail(item)">
                <image :src="item.image" mode="aspectFill" class="travel-img"></image>
                <view class="travel-info">
                    <text class="travel-name">{{ item.name }}</text>
                    <view class="travel-rating">
                        <text class="rating-star">⭐</text>
                        <text class="rating-num">{{ item.rating }}</text>
                        <text class="travel-category">{{ item.category }}</text>
                    </view>
                    <view class="travel-bottom">
                        <text class="travel-location">📍 {{ item.location.length > 12 ? item.location.substring(0,12)+'...' : item.location }}</text>
                        <text class="travel-price" v-if="item.price > 0"><text class="price-symbol">¥</text>{{ item.price }}</text>
                        <text class="travel-free" v-else>免费</text>
                    </view>
                </view>
            </view>
        </view>
        <view v-else class="empty-state">加载中...</view>

        <!-- 底部安全区 -->
        <view class="bottom-safe"></view>
    </view>
</template>

<script>
import { banners, homeCategories, foodList, travelList } from '@/common/mock.js';

export default {
    data() {
        return {
            currentCity: '全部',
            banners: banners,
            categories: homeCategories,
            allFoods: foodList,
            allTravels: travelList,
            foodList: [],
            travelList: [],
            isLogin: false,
            cartCount: 0
        };
    },
    onLoad() {
        const userInfo = uni.getStorageSync('userInfo');
        if (userInfo) {
            this.isLogin = true;
        }
        this.filterByCity();
    },
    onShow() {
        const userInfo = uni.getStorageSync('userInfo');
        this.isLogin = !!userInfo;
        const cart = uni.getStorageSync('cart') || [];
        this.cartCount = cart.reduce((s, i) => s + i.quantity, 0);
    },
    onPullDownRefresh() {
        setTimeout(() => {
            uni.stopPullDownRefresh();
            uni.showToast({ title: '刷新成功', icon: 'none', duration: 1500 });
        }, 800);
    },
    methods: {
        showCityPicker() {
            const cities = ['全部', '北京', '上海', '广州', '深圳', '成都', '杭州', '西安', '重庆', '南京', '武汉'];
            uni.showActionSheet({
                itemList: cities,
                success: (res) => {
                    this.currentCity = cities[res.tapIndex];
                    this.filterByCity();
                    uni.showToast({ title: '已切换到' + this.currentCity, icon: 'none', duration: 1500 });
                }
            });
        },
        goSearch() {
            uni.navigateTo({
                url: '/pages/search/search'
            });
        },
        filterByCity() {
            let foods = this.allFoods;
            let travels = this.allTravels;
            if (this.currentCity && this.currentCity !== '全部') {
                const f = foods.filter(item => item.location.startsWith(this.currentCity));
                if (f.length > 0) foods = f;
                const t = travels.filter(item => item.location.startsWith(this.currentCity));
                if (t.length > 0) travels = t;
            }
            this.foodList = foods.slice(0, 8);
            this.travelList = travels.slice(0, 8);
        },
        goDetail(item) {
            const type = item.dataType || (['历史文化','自然风光','文化街区'].includes(item.category) ? 'travel' : 'food');
            uni.navigateTo({
                url: '/pages/detail/detail?id=' + item.id + '&type=' + type
            });
        },
        onCategoryClick(cat) {
            uni.navigateTo({
                url: '/pages/category/category?name=' + encodeURIComponent(cat.name)
            });
        },
        viewAll(type) {
            const name = type === 'food' ? '美食' : '景点';
            uni.navigateTo({
                url: '/pages/category/category?name=' + encodeURIComponent(name)
            });
        },
        goMine() {
            uni.switchTab({
                url: '/pages/mine/mine'
            });
        },
        goCart() {
            uni.navigateTo({
                url: '/pages/cart/cart'
            });
        }
    }
};
</script>

<style scoped>
.index-page {
    background-color: #F5F5F5;
    min-height: 100vh;
    padding-bottom: 20rpx;
}

/* 搜索栏 */
.search-bar {
    display: flex;
    align-items: center;
    padding: 16rpx 24rpx;
    background-color: #FF6600;
    gap: 16rpx;
}

.city-selector {
    display: flex;
    align-items: center;
    flex-shrink: 0;
}

.city-text {
    color: #FFFFFF;
    font-size: 30rpx;
    font-weight: bold;
    max-width: 100rpx;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.arrow-down {
    color: rgba(255,255,255,0.8);
    font-size: 20rpx;
    margin-left: 6rpx;
}

.search-input-box {
    flex: 1;
    display: flex;
    align-items: center;
    background-color: rgba(255,255,255,0.95);
    border-radius: 36rpx;
    height: 68rpx;
    padding: 0 24rpx;
}

.search-icon {
    font-size: 28rpx;
    margin-right: 12rpx;
}

.search-placeholder {
    color: #999;
    font-size: 26rpx;
}

.msg-icon {
    flex-shrink: 0;
    font-size: 40rpx;
    position: relative;
}

.cart-badge {
    position: absolute;
    top: -8rpx;
    right: -10rpx;
    background-color: #F44336;
    color: #FFFFFF;
    font-size: 18rpx;
    min-width: 30rpx;
    height: 30rpx;
    line-height: 30rpx;
    text-align: center;
    border-radius: 15rpx;
    padding: 0 6rpx;
}

/* 轮播图 */
.banner-swiper {
    width: 100%;
    height: 320rpx;
    position: relative;
}

.banner-image {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #FFE0B2, #FFCC80);
}

.banner-title {
    position: absolute;
    bottom: 20rpx;
    left: 24rpx;
    color: #FFFFFF;
    font-size: 28rpx;
    font-weight: bold;
    text-shadow: 0 2rpx 8rpx rgba(0,0,0,0.4);
    z-index: 5;
}

/* 分类导航 */
.category-section {
    display: flex;
    flex-wrap: wrap;
    background-color: #FFFFFF;
    padding: 24rpx 16rpx 8rpx;
    margin: 0 0 16rpx 0;
}

.category-item {
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20rpx;
}

.category-icon {
    width: 88rpx;
    height: 88rpx;
    border-radius: 24rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 44rpx;
    margin-bottom: 10rpx;
}

.category-name {
    font-size: 24rpx;
    color: #333;
}

/* 区块标题 */
.section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20rpx 24rpx 12rpx;
}

.section-title-box {
    display: flex;
    align-items: baseline;
    gap: 12rpx;
}

.section-title {
    font-size: 34rpx;
    font-weight: bold;
    color: #333;
}

.section-subtitle {
    font-size: 24rpx;
    color: #999;
}

.section-more {
    font-size: 26rpx;
    color: #999;
}

/* 美食横向滚动 */
.food-scroll {
    white-space: nowrap;
    padding: 0 24rpx;
}

.food-card {
    display: inline-block;
    width: 280rpx;
    background-color: #FFFFFF;
    border-radius: 16rpx;
    margin-right: 20rpx;
    overflow: hidden;
    box-shadow: 0 2rpx 12rpx rgba(0,0,0,0.06);
    vertical-align: top;
}

.food-img-wrap {
    position: relative;
    width: 280rpx;
    height: 200rpx;
}

.food-img {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #FFF3E0, #FFE0B2);
}

.food-tag {
    position: absolute;
    top: 12rpx;
    left: 12rpx;
    background-color: #FF6600;
    color: #FFFFFF;
    font-size: 20rpx;
    padding: 4rpx 12rpx;
    border-radius: 6rpx;
}

.food-info {
    padding: 16rpx;
    white-space: normal;
}

.food-name {
    font-size: 28rpx;
    font-weight: bold;
    color: #333;
    display: block;
    margin-bottom: 8rpx;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.food-rating {
    display: flex;
    align-items: center;
    gap: 6rpx;
    margin-bottom: 8rpx;
}

.rating-star {
    font-size: 22rpx;
}

.rating-num {
    font-size: 24rpx;
    color: #FF6600;
    font-weight: bold;
}

.food-category {
    font-size: 22rpx;
    color: #999;
    margin-left: 6rpx;
}

.food-price-row {
    display: flex;
    align-items: baseline;
    gap: 8rpx;
}

.food-price {
    font-size: 34rpx;
    color: #FF6600;
    font-weight: bold;
}

.price-symbol {
    font-size: 22rpx;
}

.food-original-price {
    font-size: 22rpx;
    color: #BBB;
    text-decoration: line-through;
}

.food-sales {
    font-size: 20rpx;
    color: #BBB;
    margin-left: auto;
}

/* 景点列表 */
.travel-list {
    padding: 0 24rpx;
}

.travel-card {
    display: flex;
    background-color: #FFFFFF;
    border-radius: 16rpx;
    margin-bottom: 20rpx;
    overflow: hidden;
    box-shadow: 0 2rpx 12rpx rgba(0,0,0,0.06);
    height: 200rpx;
}

.travel-img {
    width: 240rpx;
    height: 200rpx;
    flex-shrink: 0;
    background: linear-gradient(135deg, #E8F5E9, #C8E6C9);
}

.travel-info {
    flex: 1;
    padding: 20rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.travel-name {
    font-size: 30rpx;
    font-weight: bold;
    color: #333;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.travel-rating {
    display: flex;
    align-items: center;
    gap: 6rpx;
}

.travel-category {
    font-size: 22rpx;
    color: #999;
    margin-left: 6rpx;
}

.travel-bottom {
    display: flex;
    align-items: center;
    gap: 12rpx;
}

.travel-location {
    font-size: 22rpx;
    color: #999;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.travel-price {
    font-size: 34rpx;
    color: #FF6600;
    font-weight: bold;
}

.travel-free {
    font-size: 26rpx;
    color: #4CAF50;
    font-weight: bold;
}

/* 空状态 */
.empty-state {
    text-align: center;
    color: #999;
    font-size: 26rpx;
    padding: 40rpx 0;
}

/* 底部安全区 */
.bottom-safe {
    height: 20rpx;
}
</style>
