<template>
    <view class="detail-page">
        <!-- 顶部图片 -->
        <view class="detail-image-wrap">
            <image :src="item.image" mode="aspectFill" class="detail-image"></image>
            <view class="back-btn" @click="goBack">
                <text class="back-icon">←</text>
            </view>
            <view class="image-tag" v-if="item.tags && item.tags.length">
                <text class="tag-item" v-for="tag in item.tags" :key="tag">{{ tag }}</text>
            </view>
        </view>

        <!-- 基本信息卡片 -->
        <view class="info-card card">
            <view class="info-header">
                <text class="info-title">{{ item.name }}</text>
                <view class="info-type" :class="typeClass">
                    {{ typeLabel }}
                </view>
            </view>

            <view class="info-rating-row">
                <text class="rating-star-big">⭐</text>
                <text class="rating-num-big">{{ item.rating }}</text>
                <text class="rating-text">超赞</text>
                <text class="info-sales">已售{{ item.sales }}</text>
            </view>

            <view class="info-price-row">
                <text class="info-price"><text class="price-sym">¥</text>{{ item.price }}</text>
                <text class="info-original" v-if="item.originalPrice > item.price">¥{{ item.originalPrice }}</text>
                <text class="info-discount" v-if="item.originalPrice > item.price">
                    {{ ((item.price / item.originalPrice) * 10).toFixed(1) }}折
                </text>
            </view>
        </view>

        <!-- 详细信息卡片 -->
        <view class="card detail-card">
            <view class="detail-section">
                <text class="detail-label">📍 地址</text>
                <text class="detail-value">{{ item.location }}</text>
            </view>
            <view class="detail-section" v-if="item.openTime">
                <text class="detail-label">🕐 开放时间</text>
                <text class="detail-value">{{ item.openTime }}</text>
            </view>
            <view class="detail-section" v-if="item.duration">
                <text class="detail-label">🗓️ 行程天数</text>
                <text class="detail-value">{{ item.duration }}</text>
            </view>
            <view class="detail-section">
                <text class="detail-label">📋 详情介绍</text>
                <text class="detail-desc">{{ item.description }}</text>
            </view>
        </view>

        <!-- 用户评价 -->
        <view class="card comment-card">
            <view class="comment-header">
                <text class="comment-title">💬 用户评价</text>
                <view class="comment-header-right">
                    <text class="comment-count" v-if="allComments.length > 0">共{{ allComments.length }}条</text>
                    <text class="write-comment-btn" @click="goWriteComment">✎ 写评价</text>
                </view>
            </view>
            <view v-if="allComments.length > 0">
                <view class="comment-item" v-for="(comment, idx) in allComments" :key="idx">
                    <view class="comment-user-row">
                        <view class="comment-avatar">{{ comment.user.charAt(0) }}</view>
                        <view class="comment-user-info">
                            <text class="comment-user-name">{{ comment.user }}</text>
                            <view class="comment-stars">
                                <text v-for="s in 5" :key="s" :style="{ color: s <= comment.rating ? '#FF6600' : '#DDD' }">★</text>
                            </view>
                        </view>
                        <text class="comment-time">{{ comment.time }}</text>
                    </view>
                    <text class="comment-content">{{ comment.content }}</text>
                    <view class="comment-images" v-if="comment.images && comment.images.length">
                        <image v-for="(img, i) in comment.images" :key="i" :src="img" mode="aspectFill" class="comment-img" @click="previewImage(comment.images, i)"></image>
                    </view>
                </view>
            </view>
            <view class="no-comment" v-else>
                <text class="no-comment-text">还没有评价，快来写第一条吧~</text>
            </view>
        </view>

        <!-- 底部操作栏 -->
        <view class="bottom-bar">
            <view class="bottom-action" @click="toggleFavorite">
                <text class="action-icon">{{ isFavorited ? '❤️' : '🤍' }}</text>
                <text class="action-text">{{ isFavorited ? '已收藏' : '收藏' }}</text>
            </view>
            <view class="bottom-action" @click="shareItem">
                <text class="action-icon">📤</text>
                <text class="action-text">分享</text>
            </view>
            <view class="bottom-cart-btn" @click="addToCart">
                加入购物车
            </view>
            <view class="bottom-buy-btn" @click="openCheckout">
                {{ buyLabel }}
            </view>
        </view>

        <!-- 下单确认面板 -->
        <view class="checkout-mask" v-if="showCheckout" @click="closeCheckout"></view>
        <view class="checkout-panel" v-if="showCheckout">
            <view class="checkout-header">
                <text class="checkout-title">确认订单</text>
                <text class="checkout-close" @click="closeCheckout">✕</text>
            </view>

            <!-- 收货地址 -->
            <view class="checkout-addr" @click="selectAddress">
                <text class="addr-icon">📍</text>
                <view class="addr-info" v-if="checkoutAddress">
                    <view class="addr-contact">
                        <text class="addr-contact-name">{{ checkoutAddress.name }}</text>
                        <text class="addr-contact-phone">{{ checkoutAddress.phone }}</text>
                    </view>
                    <text class="addr-full">{{ checkoutAddress.province }}{{ checkoutAddress.city }}{{ checkoutAddress.district }} {{ checkoutAddress.detail }}</text>
                </view>
                <view class="addr-info" v-else>
                    <text class="addr-empty">请选择收货地址</text>
                </view>
                <text class="addr-arrow">›</text>
            </view>

            <!-- 商品信息 -->
            <view class="checkout-item card">
                <image :src="item.image" mode="aspectFill" class="checkout-item-img"></image>
                <view class="checkout-item-info">
                    <text class="checkout-item-name">{{ item.name }}</text>
                    <text class="checkout-item-price">¥{{ item.price }}</text>
                </view>
                <view class="checkout-qty">
                    <view class="cqty-btn" @click="decreaseQty">-</view>
                    <text class="cqty-num">{{ checkoutQty }}</text>
                    <view class="cqty-btn plus" @click="increaseQty">+</view>
                </view>
            </view>

            <!-- 配送时间 -->
            <view class="checkout-row card">
                <text class="cr-label">🕐 预计配送</text>
                <text class="cr-val">{{ deliveryTime }}</text>
            </view>

            <!-- 备注 -->
            <view class="checkout-row card">
                <text class="cr-label">📝 备注</text>
                <input class="cr-input" v-model="checkoutNote" placeholder="如：不要辣、多放醋等" maxlength="50" />
            </view>

            <!-- 费用明细 -->
            <view class="checkout-fee card">
                <view class="fee-row">
                    <text class="fee-label">商品小计</text>
                    <text class="fee-val">¥{{ (item.price * checkoutQty).toFixed(2) }}</text>
                </view>
                <view class="fee-row">
                    <text class="fee-label">配送费</text>
                    <text class="fee-val delivery-free">免配送费</text>
                </view>
                <view class="fee-row" v-if="checkoutQty >= 2">
                    <text class="fee-label">多件优惠</text>
                    <text class="fee-val discount">-¥{{ (item.price * 0.05 * checkoutQty).toFixed(2) }}</text>
                </view>
            </view>

            <!-- 合计与提交 -->
            <view class="checkout-submit">
                <view class="cs-total">
                    <text class="cs-total-label">合计：</text>
                    <text class="cs-total-price">¥{{ finalTotal.toFixed(2) }}</text>
                </view>
                <view class="cs-btn" @click="submitOrder">提交订单</view>
            </view>
        </view>
    </view>
</template>

<script>
import { foodList, travelList, hotelList, leisureList, specialtyList, routeList } from '@/common/mock.js';

export default {
    data() {
        return {
            item: {
                name: '',
                image: '/static/images/food/logo.png',
                rating: 0,
                price: 0,
                originalPrice: 0,
                sales: 0,
                category: '',
                location: '',
                description: '',
                tags: [],
                comments: [],
                dataType: 'food',
                openTime: '',
                duration: ''
            },
            isFavorited: false,
            userComments: [],
            showCheckout: false,
            checkoutAddress: null,
            checkoutNote: '',
            checkoutQty: 1,
            deliveryTime: ''
        };
    },
    computed: {
        allComments() {
            return [...this.userComments, ...this.item.comments];
        },
        typeLabel() {
            const map = { food: '美食', travel: '景点', hotel: '酒店', leisure: '休闲', specialty: '特产', route: '路线' };
            return map[this.item.dataType] || '美食';
        },
        typeClass() {
            const map = { food: 'type-food', travel: 'type-travel', hotel: 'type-hotel', leisure: 'type-leisure', specialty: 'type-specialty', route: 'type-route' };
            return map[this.item.dataType] || 'type-food';
        },
        buyLabel() {
            const buy = ['food', 'specialty'];
            return buy.includes(this.item.dataType) ? '立即购买' : '立即预订';
        },
        finalTotal() {
            let total = this.item.price * this.checkoutQty;
            if (this.checkoutQty >= 2) {
                total -= this.item.price * 0.05 * this.checkoutQty;
            }
            return Math.max(total, 0);
        }
    },
    onLoad(options) {
        const id = parseInt(options.id);
        const type = options.type || 'food';
        let sourceList;
        switch (type) {
            case 'travel': sourceList = travelList; break;
            case 'hotel': sourceList = hotelList; break;
            case 'leisure': sourceList = leisureList; break;
            case 'specialty': sourceList = specialtyList; break;
            case 'route': sourceList = routeList; break;
            default: sourceList = foodList;
        }
        const found = sourceList.find(item => item.id === id);
        if (found) {
            this.item = { ...found, dataType: type };
        } else {
            uni.showToast({ title: '数据加载失败', icon: 'none' });
        }
        const favs = uni.getStorageSync('favorites') || [];
        this.isFavorited = favs.some(f => f.id === this.item.id);
        this.loadUserComments();
        this.recordHistory();
    },
    onShow() {
        this.loadUserComments();
    },
    methods: {
        loadUserComments() {
            const all = uni.getStorageSync('allComments') || [];
            this.userComments = all.filter(c => c.itemId === this.item.id && c.itemType === this.item.dataType);
        },
        recordHistory() {
            if (!this.item.name) return;
            let history = uni.getStorageSync('browseHistory') || [];
            history = history.filter(h => !(h.itemId === this.item.id && h.itemType === this.item.dataType));
            history.unshift({
                id: Date.now(),
                itemId: this.item.id,
                itemType: this.item.dataType,
                itemName: this.item.name,
                itemImage: this.item.image,
                rating: this.item.rating,
                price: this.item.price,
                category: this.item.category,
                time: new Date().toISOString().split('T')[0]
            });
            if (history.length > 50) history = history.slice(0, 50);
            uni.setStorageSync('browseHistory', history);
        },
        goWriteComment() {
            uni.navigateTo({
                url: '/pages/comment/comment?id=' + this.item.id + '&type=' + this.item.dataType
            });
        },
        previewImage(urls, current) {
            uni.previewImage({
                urls: urls,
                current: urls[current]
            });
        },
        goBack() {
            uni.navigateBack();
        },
        toggleFavorite() {
            let favs = uni.getStorageSync('favorites') || [];
            if (this.isFavorited) {
                favs = favs.filter(f => f.id !== this.item.id);
                uni.showToast({ title: '已取消收藏', icon: 'none', duration: 1500 });
            } else {
                favs.push(this.item);
                uni.showToast({ title: '收藏成功', icon: 'none', duration: 1500 });
            }
            uni.setStorageSync('favorites', favs);
            this.isFavorited = !this.isFavorited;
        },
        shareItem() {
            // #ifdef APP-PLUS
            uni.share({
                provider: 'weixin',
                type: 0,
                title: this.item.name,
                summary: this.item.description,
                success: () => {
                    uni.showToast({ title: '分享成功', icon: 'none' });
                }
            });
            // #endif
            // #ifdef H5
            uni.showToast({ title: '已复制链接，可粘贴分享', icon: 'none', duration: 2000 });
            // #endif
        },
        addToCart() {
            const userInfo = uni.getStorageSync('userInfo');
            if (!userInfo) {
                uni.showModal({
                    title: '提示',
                    content: '请先登录后再进行操作',
                    confirmText: '去登录',
                    success: (res) => {
                        if (res.confirm) { uni.navigateTo({ url: '/pages/login/login' }); }
                    }
                });
                return;
            }
            let cart = uni.getStorageSync('cart') || [];
            const exist = cart.find(c => c.itemId === this.item.id && c.type === this.item.dataType);
            if (exist) {
                exist.quantity += 1;
            } else {
                cart.push({
                    itemId: this.item.id,
                    type: this.item.dataType,
                    name: this.item.name,
                    image: this.item.image,
                    price: this.item.price,
                    quantity: 1
                });
            }
            uni.setStorageSync('cart', cart);
            uni.showToast({ title: '已加入购物车', icon: 'success', duration: 1500 });
        },
        openCheckout() {
            const userInfo = uni.getStorageSync('userInfo');
            if (!userInfo) {
                uni.showModal({
                    title: '提示',
                    content: '请先登录后再进行操作',
                    confirmText: '去登录',
                    success: (res) => {
                        if (res.confirm) { uni.navigateTo({ url: '/pages/login/login' }); }
                    }
                });
                return;
            }
            const addresses = uni.getStorageSync('addresses') || [];
            this.checkoutAddress = addresses.find(a => a.isDefault) || (addresses.length > 0 ? addresses[0] : null);
            this.checkoutQty = 1;
            this.checkoutNote = '';
            const minutes = [25, 30, 35, 40, 45];
            this.deliveryTime = '约' + minutes[Math.floor(Math.random() * minutes.length)] + '分钟送达';
            this.showCheckout = true;
        },
        closeCheckout() {
            this.showCheckout = false;
        },
        decreaseQty() {
            if (this.checkoutQty > 1) {
                this.checkoutQty--;
            }
        },
        increaseQty() {
            this.checkoutQty++;
        },
        selectAddress() {
            const addresses = uni.getStorageSync('addresses') || [];
            if (addresses.length === 0) {
                uni.showModal({
                    title: '提示',
                    content: '暂无收货地址，是否前往添加？',
                    confirmText: '去添加',
                    success: (res) => {
                        if (res.confirm) { uni.navigateTo({ url: '/pages/address/address' }); }
                    }
                });
                return;
            }
            const items = addresses.map(a => a.name + ' ' + a.phone + '\n' + a.province + a.city + a.district + ' ' + a.detail);
            uni.showActionSheet({
                itemList: items.map(s => s.length > 40 ? s.substring(0, 40) + '...' : s),
                success: (res) => {
                    this.checkoutAddress = addresses[res.tapIndex];
                }
            });
        },
        submitOrder() {
            if (!this.checkoutAddress) {
                uni.showToast({ title: '请选择收货地址', icon: 'none', duration: 1500 });
                return;
            }
            const total = this.finalTotal;
            const order = {
                id: Date.now(),
                itemId: this.item.id,
                type: this.item.dataType,
                itemName: this.item.name,
                itemImage: this.item.image,
                price: this.item.price,
                count: this.checkoutQty,
                total: total,
                status: 'used',
                statusText: '待使用',
                date: new Date().toISOString().split('T')[0],
                code: 'FT' + Date.now(),
                address: this.checkoutAddress.province + this.checkoutAddress.city + this.checkoutAddress.district + ' ' + this.checkoutAddress.detail,
                note: this.checkoutNote,
                deliveryTime: this.deliveryTime
            };
            let orders = uni.getStorageSync('orders') || [];
            orders.unshift(order);
            uni.setStorageSync('orders', orders);
            this.showCheckout = false;
            uni.showToast({ title: '下单成功！已自动付款', icon: 'success', duration: 1500 });
        }
    }
};
</script>

<style scoped>
.detail-page {
    background-color: #F5F5F5;
    min-height: 100vh;
    padding-bottom: 140rpx;
}

/* 顶部图片 */
.detail-image-wrap {
    width: 100%;
    height: 480rpx;
    position: relative;
}

.detail-image {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #E0E0E0, #BDBDBD);
}

.back-btn {
    position: absolute;
    top: 40rpx;
    left: 24rpx;
    width: 64rpx;
    height: 64rpx;
    background-color: rgba(0,0,0,0.4);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
}

.back-icon {
    color: #FFFFFF;
    font-size: 36rpx;
    font-weight: bold;
}

.image-tag {
    position: absolute;
    bottom: 20rpx;
    left: 24rpx;
    display: flex;
    gap: 12rpx;
    z-index: 5;
}

.tag-item {
    background-color: rgba(255,102,0,0.85);
    color: #FFFFFF;
    font-size: 22rpx;
    padding: 6rpx 16rpx;
    border-radius: 6rpx;
}

/* 信息卡片 */
.card {
    background-color: #FFFFFF;
    margin: 20rpx;
    border-radius: 16rpx;
    padding: 24rpx;
    box-shadow: 0 2rpx 12rpx rgba(0,0,0,0.06);
}

.info-header {
    display: flex;
    align-items: center;
    gap: 16rpx;
    margin-bottom: 16rpx;
}

.info-title {
    font-size: 36rpx;
    font-weight: bold;
    color: #333;
    flex: 1;
}

.info-type {
    font-size: 22rpx;
    padding: 6rpx 16rpx;
    border-radius: 6rpx;
    color: #FFFFFF;
    flex-shrink: 0;
}

.type-food {
    background-color: #FF6600;
}

.type-travel {
    background-color: #4CAF50;
}

.type-hotel {
    background-color: #2196F3;
}

.type-leisure {
    background-color: #9C27B0;
}

.type-specialty {
    background-color: #E91E63;
}

.type-route {
    background-color: #00BCD4;
}

.info-rating-row {
    display: flex;
    align-items: center;
    gap: 8rpx;
    margin-bottom: 16rpx;
}

.rating-star-big {
    font-size: 28rpx;
}

.rating-num-big {
    font-size: 32rpx;
    color: #FF6600;
    font-weight: bold;
}

.rating-text {
    font-size: 24rpx;
    color: #FF6600;
    background-color: #FFF3E0;
    padding: 4rpx 12rpx;
    border-radius: 4rpx;
}

.info-sales {
    font-size: 22rpx;
    color: #BBB;
    margin-left: 8rpx;
}

.info-price-row {
    display: flex;
    align-items: baseline;
    gap: 12rpx;
}

.info-price {
    font-size: 48rpx;
    color: #FF6600;
    font-weight: bold;
}

.price-sym {
    font-size: 28rpx;
}

.info-original {
    font-size: 26rpx;
    color: #BBB;
    text-decoration: line-through;
}

.info-discount {
    font-size: 22rpx;
    color: #FF6600;
    background-color: #FFF3E0;
    padding: 4rpx 12rpx;
    border-radius: 4rpx;
}

/* 详情 */
.detail-card {
    padding: 24rpx;
}

.detail-section {
    margin-bottom: 24rpx;
}

.detail-section:last-child {
    margin-bottom: 0;
}

.detail-label {
    font-size: 28rpx;
    color: #333;
    font-weight: bold;
    margin-bottom: 10rpx;
    display: block;
}

.detail-value {
    font-size: 26rpx;
    color: #666;
    line-height: 1.6;
}

.detail-desc {
    font-size: 26rpx;
    color: #666;
    line-height: 1.8;
}

/* 评论 */
.comment-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24rpx;
    padding-bottom: 16rpx;
    border-bottom: 1rpx solid #F0F0F0;
}

.comment-header-right {
    display: flex;
    align-items: center;
    gap: 20rpx;
}

.comment-title {
    font-size: 30rpx;
    font-weight: bold;
    color: #333;
}

.comment-count {
    font-size: 24rpx;
    color: #999;
}

.write-comment-btn {
    font-size: 26rpx;
    color: #FF6600;
    padding: 8rpx 20rpx;
    border: 2rpx solid #FF6600;
    border-radius: 24rpx;
}

.write-comment-btn:active {
    background-color: #FFF3E0;
}

.no-comment {
    padding: 40rpx 0;
    text-align: center;
}

.no-comment-text {
    font-size: 26rpx;
    color: #BBB;
}

.comment-images {
    display: flex;
    gap: 12rpx;
    margin-top: 16rpx;
    flex-wrap: wrap;
}

.comment-img {
    width: 150rpx;
    height: 150rpx;
    border-radius: 8rpx;
}

.comment-item {
    padding: 20rpx 0;
    border-bottom: 1rpx solid #F5F5F5;
}

.comment-item:last-child {
    border-bottom: none;
    padding-bottom: 0;
}

.comment-user-row {
    display: flex;
    align-items: center;
    gap: 16rpx;
    margin-bottom: 12rpx;
}

.comment-avatar {
    width: 64rpx;
    height: 64rpx;
    border-radius: 50%;
    background-color: #FFE0B2;
    color: #FF6600;
    font-size: 28rpx;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.comment-user-info {
    flex: 1;
}

.comment-user-name {
    font-size: 26rpx;
    color: #333;
    display: block;
    margin-bottom: 4rpx;
}

.comment-stars {
    font-size: 24rpx;
}

.comment-time {
    font-size: 22rpx;
    color: #BBB;
    flex-shrink: 0;
}

.comment-content {
    font-size: 26rpx;
    color: #666;
    line-height: 1.6;
}

/* 底部操作栏 */
.bottom-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    padding: 16rpx 24rpx;
    padding-bottom: calc(16rpx + env(safe-area-inset-bottom));
    box-shadow: 0 -2rpx 12rpx rgba(0,0,0,0.06);
    z-index: 100;
}

.bottom-action {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 32rpx;
}

.action-icon {
    font-size: 40rpx;
    margin-bottom: 4rpx;
}

.action-text {
    font-size: 20rpx;
    color: #666;
}

.bottom-cart-btn {
    height: 72rpx;
    padding: 0 24rpx;
    background-color: #FFF3E0;
    color: #FF6600;
    font-size: 26rpx;
    font-weight: bold;
    border-radius: 36rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 16rpx;
    border: 2rpx solid #FFCC80;
}

.bottom-buy-btn {
    flex: 1;
    height: 80rpx;
    background: linear-gradient(135deg, #FF6600, #FF8533);
    color: #FFFFFF;
    font-size: 32rpx;
    font-weight: bold;
    border-radius: 40rpx;
    display: flex;
    align-items: center;
    justify-content: center;
}

.bottom-buy-btn:active,
.bottom-cart-btn:active {
    opacity: 0.9;
}

/* 下单确认面板 */
.checkout-mask {
    position: fixed; top: 0; left: 0; right: 0; bottom: 0;
    background-color: rgba(0,0,0,0.5); z-index: 200;
}
.checkout-panel {
    position: fixed; bottom: 0; left: 0; right: 0;
    background-color: #F5F5F5; z-index: 201;
    border-radius: 24rpx 24rpx 0 0;
    max-height: 85vh; overflow-y: auto;
    padding-bottom: calc(24rpx + env(safe-area-inset-bottom));
}
.checkout-header {
    display: flex; align-items: center; justify-content: space-between;
    padding: 28rpx 32rpx 16rpx;
    background-color: #FFFFFF; border-radius: 24rpx 24rpx 0 0;
}
.checkout-title { font-size: 34rpx; font-weight: bold; color: #333; }
.checkout-close { font-size: 36rpx; color: #999; padding: 8rpx; }

/* 地址 */
.checkout-addr {
    display: flex; align-items: center; background-color: #FFFFFF;
    margin: 16rpx 20rpx 0; border-radius: 16rpx; padding: 24rpx;
    gap: 16rpx;
}
.addr-icon { font-size: 36rpx; flex-shrink: 0; }
.addr-info { flex: 1; }
.addr-contact { display: flex; gap: 20rpx; margin-bottom: 8rpx; }
.addr-contact-name { font-size: 30rpx; font-weight: bold; color: #333; }
.addr-contact-phone { font-size: 26rpx; color: #666; }
.addr-full { font-size: 24rpx; color: #999; line-height: 1.5; }
.addr-empty { font-size: 28rpx; color: #999; }
.addr-arrow { font-size: 32rpx; color: #CCC; flex-shrink: 0; }

/* 商品信息 */
.checkout-item {
    display: flex; align-items: center; gap: 16rpx;
}
.checkout-item-img { width: 100rpx; height: 100rpx; border-radius: 12rpx; flex-shrink: 0; background: linear-gradient(135deg, #FFF3E0, #FFE0B2); }
.checkout-item-info { flex: 1; }
.checkout-item-name { font-size: 28rpx; color: #333; font-weight: bold; display: block; margin-bottom: 6rpx; }
.checkout-item-price { font-size: 30rpx; color: #FF6600; font-weight: bold; }
.checkout-qty { display: flex; align-items: center; gap: 4rpx; flex-shrink: 0; }
.cqty-btn {
    width: 48rpx; height: 48rpx; border-radius: 50%;
    background-color: #F0F0F0; color: #666; font-size: 32rpx;
    display: flex; align-items: center; justify-content: center; line-height: 1;
}
.cqty-btn.plus { background-color: #FF6600; color: #FFFFFF; }
.cqty-num { font-size: 30rpx; color: #333; min-width: 56rpx; text-align: center; }

/* 配送与备注行 */
.checkout-row {
    display: flex; align-items: center; gap: 16rpx;
}
.cr-label { font-size: 28rpx; color: #333; flex-shrink: 0; }
.cr-val { font-size: 26rpx; color: #FF6600; flex: 1; text-align: right; }
.cr-input { flex: 1; font-size: 26rpx; color: #333; text-align: right; }

/* 费用明细 */
.checkout-fee { padding: 20rpx 24rpx; }
.fee-row { display: flex; justify-content: space-between; align-items: center; padding: 10rpx 0; }
.fee-label { font-size: 26rpx; color: #666; }
.fee-val { font-size: 26rpx; color: #333; }
.fee-val.delivery-free { color: #4CAF50; }
.fee-val.discount { color: #FF6600; }

/* 提交 */
.checkout-submit {
    display: flex; align-items: center; margin: 20rpx;
    background-color: #FFFFFF; border-radius: 16rpx; padding: 20rpx 24rpx;
    box-shadow: 0 -2rpx 12rpx rgba(0,0,0,0.04);
}
.cs-total { flex: 1; display: flex; align-items: baseline; }
.cs-total-label { font-size: 26rpx; color: #333; }
.cs-total-price { font-size: 44rpx; color: #FF6600; font-weight: bold; }
.cs-btn {
    height: 80rpx; padding: 0 48rpx;
    background: linear-gradient(135deg, #FF6600, #FF8533); color: #FFFFFF;
    font-size: 30rpx; font-weight: bold; border-radius: 40rpx;
    display: flex; align-items: center; justify-content: center;
}
.cs-btn:active { opacity: 0.9; }
</style>
