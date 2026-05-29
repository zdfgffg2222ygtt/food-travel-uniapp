<template>
    <view class="orders-page">
        <!-- 顶部筛选标签 -->
        <view class="tab-bar">
            <view
                class="tab-item"
                :class="{ active: currentTab === tab.key }"
                v-for="tab in tabs"
                :key="tab.key"
                @click="switchTab(tab.key)"
            >
                <text>{{ tab.label }}</text>
            </view>
        </view>

        <!-- 订单列表 -->
        <view class="order-list" v-if="filteredOrders.length > 0">
            <view class="order-card card" v-for="order in filteredOrders" :key="order.id">
                <!-- 订单头部 -->
                <view class="order-header">
                    <view class="order-type" :class="order.type === 'food' ? 'badge-food' : 'badge-travel'">
                        {{ order.type === 'food' ? '美食' : '景点' }}
                    </view>
                    <text class="order-code">订单号: {{ order.code }}</text>
                    <text class="order-status" :class="'status-' + order.status">{{ order.statusText }}</text>
                </view>

                <!-- 订单内容 -->
                <view class="order-content">
                    <image :src="order.itemImage" mode="aspectFill" class="order-img"></image>
                    <view class="order-info">
                        <text class="order-name">{{ order.itemName }}</text>
                        <text class="order-date">📅 {{ order.date }}</text>
                        <view class="order-quantity">
                            <text class="qty-label">数量: {{ order.count }}</text>
                        </view>
                    </view>
                </view>

                <!-- 订单底部 -->
                <view class="order-footer">
                    <text class="order-total">
                        合计: <text class="total-price">¥{{ order.total }}</text>
                    </text>
                    <view class="order-actions">
                        <view class="action-btn outline" v-if="order.status === 'pending'" @click="cancelOrder(order)">
                            取消订单
                        </view>
                        <view class="action-btn primary" v-if="order.status === 'pending'" @click="payOrder(order)">
                            去支付
                        </view>
                        <view class="action-btn primary" v-if="order.status === 'used'" @click="useOrder(order)">
                            确认使用
                        </view>
                        <view class="action-btn outline" v-if="order.status === 'completed'" @click="commentOrder(order)">
                            去评价
                        </view>
                        <view class="action-btn outline" v-if="order.status === 'completed'" @click="reBuy(order)">
                            再来一单
                        </view>
                    </view>
                </view>
            </view>
        </view>

        <!-- 空状态 -->
        <view class="empty-order" v-else>
            <view class="empty-icon">📋</view>
            <text class="empty-text">暂无{{ currentTabLabel }}订单</text>
            <text class="empty-hint">去首页逛逛，发现美食和景点吧</text>
            <view class="empty-btn" @click="goHome">去逛逛</view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            currentTab: 'all',
            tabs: [
                { key: 'all', label: '全部' },
                { key: 'pending', label: '待付款' },
                { key: 'used', label: '待使用' },
                { key: 'completed', label: '已完成' }
            ],
            orders: []
        };
    },
    computed: {
        currentTabLabel() {
            const tab = this.tabs.find(t => t.key === this.currentTab);
            return tab ? tab.label : '';
        },
        filteredOrders() {
            if (this.currentTab === 'all') return this.orders;
            return this.orders.filter(o => o.status === this.currentTab);
        }
    },
    onShow() {
        this.loadOrders();
    },
    methods: {
        loadOrders() {
            const stored = uni.getStorageSync('orders') || [];
            this.orders = stored;
        },
        switchTab(key) {
            this.currentTab = key;
        },
        cancelOrder(order) {
            uni.showModal({
                title: '提示',
                content: '确定要取消该订单吗？',
                success: (res) => {
                    if (res.confirm) {
                        let orders = uni.getStorageSync('orders') || [];
                        orders = orders.filter(o => o.id !== order.id);
                        uni.setStorageSync('orders', orders);
                        this.orders = orders;
                        uni.showToast({ title: '订单已取消', icon: 'none', duration: 1500 });
                    }
                }
            });
        },
        payOrder(order) {
            uni.showModal({
                title: '确认支付',
                content: '将支付 ¥' + order.total + '（模拟支付）',
                confirmText: '确认支付',
                success: (res) => {
                    if (res.confirm) {
                        let orders = uni.getStorageSync('orders') || [];
                        const idx = orders.findIndex(o => o.id === order.id);
                        if (idx !== -1) {
                            orders[idx].status = 'used';
                            orders[idx].statusText = '待使用';
                            uni.setStorageSync('orders', orders);
                            this.orders = orders;
                            uni.showToast({ title: '支付成功', icon: 'success', duration: 1500 });
                        }
                    }
                }
            });
        },
        useOrder(order) {
            uni.showModal({
                title: '确认使用',
                content: '确定已使用该订单吗？确认后将变为已完成状态。',
                confirmText: '确认使用',
                success: (res) => {
                    if (res.confirm) {
                        let orders = uni.getStorageSync('orders') || [];
                        const idx = orders.findIndex(o => o.id === order.id);
                        if (idx !== -1) {
                            orders[idx].status = 'completed';
                            orders[idx].statusText = '已完成';
                            uni.setStorageSync('orders', orders);
                            this.orders = orders;
                            uni.showToast({ title: '使用成功', icon: 'success', duration: 1500 });
                        }
                    }
                }
            });
        },
        commentOrder(order) {
            uni.navigateTo({
                url: '/pages/comment/comment?id=' + (order.itemId || 0) + '&type=' + order.type
            });
        },
        reBuy(order) {
            const newOrder = {
                ...order,
                id: Date.now(),
                status: 'pending',
                statusText: '待付款',
                date: new Date().toISOString().split('T')[0],
                code: 'FT' + Date.now()
            };
            let orders = uni.getStorageSync('orders') || [];
            orders.unshift(newOrder);
            uni.setStorageSync('orders', orders);
            this.orders = orders;
            uni.showToast({ title: '已加入订单', icon: 'success', duration: 1500 });
        },
        goHome() {
            uni.switchTab({ url: '/pages/index/index' });
        }
    }
};
</script>

<style scoped>
.orders-page {
    background-color: #F5F5F5;
    min-height: 100vh;
}

/* 标签栏 */
.tab-bar {
    display: flex;
    background-color: #FFFFFF;
    padding: 0 24rpx;
    border-bottom: 1rpx solid #F0F0F0;
    position: sticky;
    top: 0;
    z-index: 10;
}

.tab-item {
    flex: 1;
    text-align: center;
    padding: 28rpx 0;
    font-size: 28rpx;
    color: #666;
    position: relative;
}

.tab-item.active {
    color: #FF6600;
    font-weight: bold;
}

.tab-item.active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 48rpx;
    height: 4rpx;
    background-color: #FF6600;
    border-radius: 2rpx;
}

/* 订单卡片 */
.card {
    background-color: #FFFFFF;
    margin: 16rpx 20rpx;
    border-radius: 16rpx;
    padding: 24rpx;
    box-shadow: 0 2rpx 12rpx rgba(0,0,0,0.06);
}

.order-header {
    display: flex;
    align-items: center;
    margin-bottom: 20rpx;
    padding-bottom: 16rpx;
    border-bottom: 1rpx solid #F5F5F5;
}

.order-type {
    font-size: 20rpx;
    padding: 4rpx 12rpx;
    border-radius: 4rpx;
    color: #FFFFFF;
    margin-right: 16rpx;
}

.badge-food {
    background-color: #FF6600;
}

.badge-travel {
    background-color: #4CAF50;
}

.order-code {
    font-size: 22rpx;
    color: #999;
    flex: 1;
}

.order-status {
    font-size: 26rpx;
    font-weight: bold;
}

.status-pending {
    color: #FF6600;
}

.status-used {
    color: #2196F3;
}

.status-completed {
    color: #4CAF50;
}

/* 订单内容 */
.order-content {
    display: flex;
    gap: 20rpx;
    margin-bottom: 20rpx;
}

.order-img {
    width: 160rpx;
    height: 160rpx;
    border-radius: 12rpx;
    flex-shrink: 0;
}

.order-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.order-name {
    font-size: 28rpx;
    font-weight: bold;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
}

.order-date {
    font-size: 24rpx;
    color: #999;
}

.order-quantity {
    display: flex;
}

.qty-label {
    font-size: 24rpx;
    color: #666;
}

/* 订单底部 */
.order-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 16rpx;
    border-top: 1rpx solid #F5F5F5;
}

.order-total {
    font-size: 26rpx;
    color: #666;
}

.total-price {
    font-size: 34rpx;
    color: #FF6600;
    font-weight: bold;
}

.order-actions {
    display: flex;
    gap: 16rpx;
}

.action-btn {
    font-size: 24rpx;
    padding: 10rpx 24rpx;
    border-radius: 28rpx;
}

.action-btn.outline {
    border: 2rpx solid #DDD;
    color: #666;
    background-color: #FFFFFF;
}

.action-btn.outline:active {
    background-color: #F5F5F5;
}

.action-btn.primary {
    background-color: #FF6600;
    color: #FFFFFF;
}

.action-btn.primary:active {
    background-color: #E55A00;
}

/* 空状态 */
.empty-order {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 120rpx 0;
}

.empty-icon {
    font-size: 100rpx;
    margin-bottom: 24rpx;
}

.empty-text {
    font-size: 30rpx;
    color: #666;
    margin-bottom: 10rpx;
}

.empty-hint {
    font-size: 24rpx;
    color: #BBB;
    margin-bottom: 40rpx;
}

.empty-btn {
    background-color: #FF6600;
    color: #FFFFFF;
    font-size: 28rpx;
    padding: 16rpx 60rpx;
    border-radius: 40rpx;
}

.empty-btn:active {
    background-color: #E55A00;
}
</style>
