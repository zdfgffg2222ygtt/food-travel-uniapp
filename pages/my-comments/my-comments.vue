<template>
    <view class="my-comments-page">
        <view class="page-header" v-if="myComments.length > 0">
            <text class="header-title">我的评价</text>
            <text class="header-count">共 {{ myComments.length }} 条</text>
        </view>

        <view class="comment-list" v-if="myComments.length > 0">
            <view class="comment-card" v-for="comment in myComments" :key="comment.id">
                <view class="comment-header" @click="goDetail(comment)">
                    <image :src="getItemImage(comment)" mode="aspectFill" class="item-img"></image>
                    <view class="item-info">
                        <text class="item-name">{{ getItemName(comment) }}</text>
                        <view class="comment-stars">
                            <text v-for="s in 5" :key="s" class="star" :class="{ active: s <= comment.rating }">★</text>
                        </view>
                    </view>
                    <text class="arrow">›</text>
                </view>
                <view class="comment-body" @click="goDetail(comment)">
                    <text class="comment-content">{{ comment.content }}</text>
                    <view class="comment-tags" v-if="comment.tags && comment.tags.length">
                        <text class="tag" v-for="tag in comment.tags" :key="tag">{{ tag }}</text>
                    </view>
                    <view class="comment-images" v-if="comment.images && comment.images.length">
                        <image v-for="(img, i) in comment.images" :key="i" :src="img" mode="aspectFill" class="comment-img" @click.stop="previewImage(comment.images, i)"></image>
                    </view>
                </view>
                <view class="comment-footer">
                    <text class="comment-time">{{ comment.time }}</text>
                    <view class="actions">
                        <text class="action-btn edit-btn" @click="editComment(comment)">编辑</text>
                        <text class="action-btn delete-btn" @click="deleteComment(comment)">删除</text>
                    </view>
                </view>
            </view>
        </view>

        <view class="empty" v-else>
            <text class="empty-icon">📝</text>
            <text class="empty-text">还没有评价</text>
            <text class="empty-hint">去发现美食和景点，分享你的体验吧~</text>
        </view>
    </view>
</template>

<script>
import { foodList, travelList, hotelList, leisureList, specialtyList, routeList } from '@/common/mock.js';

function getSourceList(type) {
    switch (type) {
        case 'travel': return travelList;
        case 'hotel': return hotelList;
        case 'leisure': return leisureList;
        case 'specialty': return specialtyList;
        case 'route': return routeList;
        default: return foodList;
    }
}

export default {
    data() {
        return {
            myComments: [],
            userName: ''
        };
    },
    onShow() {
        this.loadMyComments();
    },
    methods: {
        loadMyComments() {
            const userInfo = uni.getStorageSync('userInfo');
            if (!userInfo) {
                this.myComments = [];
                return;
            }
            this.userName = userInfo.nickname || '';
            const allComments = uni.getStorageSync('allComments') || [];
            this.myComments = allComments
                .filter(c => c.user === this.userName)
                .sort((a, b) => b.id - a.id);
        },
        getItemImage(comment) {
            const sourceList = getSourceList(comment.itemType);
            const item = sourceList.find(i => i.id === comment.itemId);
            return item ? item.image : '';
        },
        getItemName(comment) {
            const sourceList = getSourceList(comment.itemType);
            const item = sourceList.find(i => i.id === comment.itemId);
            return item ? item.name : '未知商品';
        },
        goDetail(comment) {
            uni.navigateTo({
                url: '/pages/detail/detail?id=' + comment.itemId + '&type=' + comment.itemType
            });
        },
        editComment(comment) {
            uni.navigateTo({
                url: '/pages/comment/comment?editId=' + comment.id
            });
        },
        deleteComment(comment) {
            uni.showModal({
                title: '提示',
                content: '确定要删除这条评价吗？删除后不可恢复。',
                confirmText: '确定删除',
                confirmColor: '#F44336',
                success: (res) => {
                    if (res.confirm) {
                        const allComments = uni.getStorageSync('allComments') || [];
                        const newComments = allComments.filter(c => c.id !== comment.id);
                        uni.setStorageSync('allComments', newComments);
                        this.loadMyComments();
                        uni.showToast({ title: '已删除', icon: 'none', duration: 1500 });
                    }
                }
            });
        },
        previewImage(urls, current) {
            uni.previewImage({
                urls: urls,
                current: urls[current]
            });
        }
    }
};
</script>

<style scoped>
.my-comments-page {
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

.comment-list {
    padding: 16rpx 0;
}

.comment-card {
    background-color: #FFFFFF;
    margin: 0 20rpx 16rpx;
    border-radius: 16rpx;
    overflow: hidden;
    box-shadow: 0 2rpx 12rpx rgba(0,0,0,0.05);
}

.comment-header {
    display: flex;
    align-items: center;
    padding: 20rpx 20rpx 0;
    gap: 16rpx;
}

.comment-header:active {
    opacity: 0.9;
}

.item-img {
    width: 100rpx;
    height: 100rpx;
    border-radius: 10rpx;
    flex-shrink: 0;
    background: linear-gradient(135deg, #FFF3E0, #FFE0B2);
}

.item-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8rpx;
}

.item-name {
    font-size: 28rpx;
    font-weight: bold;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.comment-stars {
    display: flex;
}

.star {
    font-size: 28rpx;
    color: #E0E0E0;
    margin-right: 4rpx;
}

.star.active {
    color: #FFA500;
}

.arrow {
    font-size: 36rpx;
    color: #CCC;
    flex-shrink: 0;
}

.comment-body {
    padding: 16rpx 20rpx;
}

.comment-body:active {
    opacity: 0.9;
}

.comment-content {
    font-size: 26rpx;
    color: #666;
    line-height: 1.6;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
}

.comment-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10rpx;
    margin-top: 12rpx;
}

.tag {
    font-size: 20rpx;
    color: #FF6600;
    background-color: #FFF3E0;
    padding: 4rpx 12rpx;
    border-radius: 4rpx;
}

.comment-images {
    display: flex;
    gap: 10rpx;
    margin-top: 12rpx;
    flex-wrap: wrap;
}

.comment-img {
    width: 120rpx;
    height: 120rpx;
    border-radius: 8rpx;
}

.comment-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12rpx 20rpx 20rpx;
    border-top: 1rpx solid #F5F5F5;
}

.comment-time {
    font-size: 22rpx;
    color: #BBB;
}

.actions {
    display: flex;
    gap: 24rpx;
}

.action-btn {
    font-size: 24rpx;
    padding: 6rpx 16rpx;
    border-radius: 6rpx;
}

.edit-btn {
    color: #FF6600;
    border: 1rpx solid #FF6600;
}

.edit-btn:active {
    background-color: #FFF3E0;
}

.delete-btn {
    color: #F44336;
    border: 1rpx solid #F44336;
}

.delete-btn:active {
    background-color: #FFEBEE;
}

.empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 160rpx 40rpx 0;
}

.empty-icon {
    font-size: 100rpx;
    margin-bottom: 24rpx;
}

.empty-text {
    font-size: 30rpx;
    color: #999;
    margin-bottom: 12rpx;
}

.empty-hint {
    font-size: 24rpx;
    color: #CCC;
}
</style>
