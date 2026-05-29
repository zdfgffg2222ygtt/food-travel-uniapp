<template>
    <view class="cart-page">
        <view class="cart-list" v-if="cartList.length > 0">
            <view class="cart-card" v-for="(item, idx) in cartList" :key="idx">
                <image :src="item.image" mode="aspectFill" class="cart-img"></image>
                <view class="cart-info">
                    <text class="cart-name">{{ item.name }}</text>
                    <text class="cart-price">¥{{ item.price }}</text>
                </view>
                <view class="cart-qty">
                    <view class="qty-btn" @click="changeQty(idx, -1)">-</view>
                    <text class="qty-num">{{ item.quantity }}</text>
                    <view class="qty-btn plus" @click="changeQty(idx, 1)">+</view>
                </view>
                <view class="cart-del" @click="removeItem(idx)">✕</view>
            </view>

            <view class="cart-total card">
                <text class="total-label">合计：</text>
                <text class="total-price">¥{{ totalPrice }}</text>
            </view>

            <view class="checkout-btn" @click="checkout">去结算（{{ totalCount }}件）</view>
        </view>

        <view class="empty" v-else>
            <text class="empty-icon">🛒</text>
            <text class="empty-text">购物车空空如也</text>
            <text class="empty-hint">快去首页逛逛吧~</text>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            cartList: []
        };
    },
    computed: {
        totalPrice() {
            return this.cartList.reduce((sum, item) => sum + item.price * item.quantity, 0);
        },
        totalCount() {
            return this.cartList.reduce((sum, item) => sum + item.quantity, 0);
        }
    },
    onShow() {
        this.cartList = uni.getStorageSync('cart') || [];
    },
    methods: {
        changeQty(idx, delta) {
            this.cartList[idx].quantity += delta;
            if (this.cartList[idx].quantity <= 0) {
                this.cartList.splice(idx, 1);
            }
            uni.setStorageSync('cart', this.cartList);
        },
        removeItem(idx) {
            this.cartList.splice(idx, 1);
            uni.setStorageSync('cart', this.cartList);
            uni.showToast({ title: '已移除', icon: 'none', duration: 1000 });
        },
        checkout() {
            const userInfo = uni.getStorageSync('userInfo');
            if (!userInfo) {
                uni.showModal({
                    title: '提示',
                    content: '请先登录后再进行结算',
                    confirmText: '去登录',
                    success: (res) => {
                        if (res.confirm) {
                            uni.navigateTo({ url: '/pages/login/login' });
                        }
                    }
                });
                return;
            }
            let orders = uni.getStorageSync('orders') || [];
            const now = new Date().toISOString().split('T')[0];
            this.cartList.forEach(item => {
                orders.unshift({
                    id: Date.now() + Math.random() * 1000 | 0,
                    itemId: item.itemId,
                    type: item.type,
                    itemName: item.name,
                    itemImage: item.image,
                    price: item.price,
                    count: item.quantity,
                    total: item.price * item.quantity,
                    status: 'pending',
                    statusText: '待付款',
                    date: now,
                    code: 'FT' + (Date.now() + Math.random() * 1000 | 0)
                });
            });
            uni.setStorageSync('orders', orders);
            uni.removeStorageSync('cart');
            this.cartList = [];
            uni.showModal({
                title: '下单成功',
                content: '已生成' + orders.length + '笔订单，请前往订单页支付',
                confirmText: '查看订单',
                success: (res) => {
                    if (res.confirm) {
                        uni.switchTab({ url: '/pages/orders/orders' });
                    }
                }
            });
        }
    }
};
</script>

<style scoped>
.cart-page { min-height: 100vh; background-color: #F5F5F5; padding-bottom: 160rpx; }

.cart-card {
    display: flex; align-items: center; background-color: #FFFFFF;
    margin: 0 20rpx 12rpx; border-radius: 16rpx; padding: 20rpx;
    box-shadow: 0 2rpx 12rpx rgba(0,0,0,0.04); gap: 16rpx;
}
.cart-img { width: 120rpx; height: 120rpx; border-radius: 12rpx; flex-shrink: 0; background: linear-gradient(135deg, #FFF3E0, #FFE0B2); }
.cart-info { flex: 1; }
.cart-name { font-size: 28rpx; color: #333; font-weight: bold; display: block; margin-bottom: 8rpx; }
.cart-price { font-size: 32rpx; color: #FF6600; font-weight: bold; }

.cart-qty { display: flex; align-items: center; gap: 4rpx; flex-shrink: 0; }
.qty-btn {
    width: 48rpx; height: 48rpx; border-radius: 50%;
    background-color: #F5F5F5; color: #666; font-size: 32rpx;
    display: flex; align-items: center; justify-content: center;
    line-height: 1;
}
.qty-btn.plus { background-color: #FF6600; color: #FFFFFF; }
.qty-num { font-size: 30rpx; color: #333; min-width: 56rpx; text-align: center; }

.cart-del { font-size: 32rpx; color: #CCC; padding: 12rpx; flex-shrink: 0; }

.card { background-color: #FFFFFF; margin: 20rpx; border-radius: 16rpx; padding: 24rpx; box-shadow: 0 2rpx 12rpx rgba(0,0,0,0.04); }

.cart-total { display: flex; align-items: center; justify-content: flex-end; }
.total-label { font-size: 28rpx; color: #333; }
.total-price { font-size: 40rpx; color: #FF6600; font-weight: bold; }

.checkout-btn {
    position: fixed; bottom: 40rpx; left: 40rpx; right: 40rpx; height: 92rpx;
    background: linear-gradient(135deg, #FF6600, #FF8533); color: #FFFFFF;
    font-size: 34rpx; font-weight: bold; border-radius: 46rpx;
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 8rpx 20rpx rgba(255,102,0,0.3);
}
.checkout-btn:active { opacity: 0.9; }

.empty { text-align: center; padding: 200rpx 0; }
.empty-icon { font-size: 120rpx; display: block; margin-bottom: 24rpx; }
.empty-text { font-size: 30rpx; color: #999; display: block; margin-bottom: 12rpx; }
.empty-hint { font-size: 24rpx; color: #CCC; }
</style>
