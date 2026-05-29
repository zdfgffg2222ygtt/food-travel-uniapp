<template>
    <view class="service-page">
        <view class="service-header">
            <text class="service-icon">💬</text>
            <text class="service-title">客服中心</text>
            <text class="service-subtitle">有什么可以帮助你的？</text>
        </view>

        <view class="faq-section card">
            <text class="section-title">常见问题</text>
            <view class="faq-item" v-for="(item, idx) in faqList" :key="idx" @click="toggleFaq(idx)">
                <view class="faq-q">
                    <text class="faq-q-text">{{ item.q }}</text>
                    <text class="faq-arrow">{{ item.open ? '▲' : '▼' }}</text>
                </view>
                <view class="faq-a" v-if="item.open">
                    <text class="faq-a-text">{{ item.a }}</text>
                </view>
            </view>
        </view>

        <view class="contact-section card">
            <text class="section-title">联系我们</text>
            <view class="contact-item" @click="callService">
                <text class="contact-icon">📞</text>
                <text class="contact-label">客服电话</text>
                <text class="contact-val">400-888-6666</text>
                <text class="contact-arrow">›</text>
            </view>
            <view class="contact-item" @click="copyWechat">
                <text class="contact-icon">💬</text>
                <text class="contact-label">微信客服</text>
                <text class="contact-val">美食旅游小助手</text>
                <text class="contact-arrow">›</text>
            </view>
            <view class="contact-item">
                <text class="contact-icon">🕐</text>
                <text class="contact-label">服务时间</text>
                <text class="contact-val">09:00 - 21:00</text>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            faqList: [
                { q: '如何下单购买美食或预订景点？', a: '在首页浏览推荐内容，点击进入详情页后，点击底部"立即购买"或"立即预订"按钮即可下单，然后在订单页完成支付。', open: false },
                { q: '支付后可以退款吗？', a: '支付后若未使用，可在订单详情中申请退款。已使用的订单暂不支持退款，如有特殊情况请联系客服。', open: false },
                { q: '优惠券如何使用？', a: '在我的-优惠券中领取优惠券，下单时系统会自动匹配可用优惠券，选择即可抵扣相应金额。', open: false },
                { q: '如何修改收货地址？', a: '在我的-收货地址中，可以新增、编辑或删除收货地址，支持设置默认地址方便快速下单。', open: false },
                { q: '评价后可以修改或删除吗？', a: '可以。在我的-我的评价中可以编辑或删除已发布的评价，修改后的评价会即时更新。', open: false },
                { q: '收藏的商品在哪里查看？', a: '在我的-我的收藏中可以查看所有已收藏的美食和景点，点击可跳转到详情页。', open: false }
            ]
        };
    },
    methods: {
        toggleFaq(idx) {
            this.faqList[idx].open = !this.faqList[idx].open;
        },
        callService() {
            uni.showModal({
                title: '拨打客服电话',
                content: '400-888-6666',
                confirmText: '拨打',
                success: (res) => {
                    if (res.confirm) {
                        uni.makePhoneCall({ phoneNumber: '4008886666' });
                    }
                }
            });
        },
        copyWechat() {
            uni.setClipboardData({
                data: '美食旅游小助手',
                success: () => {
                    uni.showToast({ title: '微信号已复制', icon: 'none', duration: 1500 });
                }
            });
        }
    }
};
</script>

<style scoped>
.service-page { min-height: 100vh; background-color: #F5F5F5; padding-bottom: 40rpx; }

.service-header {
    background: linear-gradient(135deg, #FF6600, #FF8533);
    padding: 48rpx 32rpx; text-align: center;
}
.service-icon { font-size: 80rpx; display: block; margin-bottom: 16rpx; }
.service-title { font-size: 40rpx; font-weight: bold; color: #FFFFFF; display: block; }
.service-subtitle { font-size: 26rpx; color: rgba(255,255,255,0.85); margin-top: 8rpx; display: block; }

.card { background-color: #FFFFFF; margin: 20rpx; border-radius: 16rpx; padding: 24rpx; box-shadow: 0 2rpx 12rpx rgba(0,0,0,0.04); }
.section-title { font-size: 30rpx; font-weight: bold; color: #333; margin-bottom: 20rpx; display: block; }

.faq-item { border-bottom: 1rpx solid #F5F5F5; padding: 24rpx 0; }
.faq-item:last-child { border-bottom: none; }
.faq-q { display: flex; justify-content: space-between; align-items: center; }
.faq-q-text { font-size: 28rpx; color: #333; flex: 1; }
.faq-arrow { font-size: 22rpx; color: #BBB; margin-left: 12rpx; }
.faq-a { margin-top: 16rpx; background-color: #F8F8F8; border-radius: 10rpx; padding: 20rpx; }
.faq-a-text { font-size: 26rpx; color: #666; line-height: 1.7; }

.contact-item { display: flex; align-items: center; padding: 24rpx 0; border-bottom: 1rpx solid #F8F8F8; }
.contact-item:last-child { border-bottom: none; }
.contact-icon { font-size: 36rpx; margin-right: 16rpx; }
.contact-label { font-size: 28rpx; color: #333; margin-right: 16rpx; }
.contact-val { flex: 1; font-size: 26rpx; color: #999; text-align: right; }
.contact-arrow { font-size: 28rpx; color: #CCC; margin-left: 8rpx; }
</style>
