<template>
    <view class="comment-page">
        <!-- 商品信息 -->
        <view class="item-header" v-if="item.name">
            <image :src="item.image" mode="aspectFill" class="item-img"></image>
            <view class="item-info">
                <text class="item-name">{{ item.name }}</text>
                <text class="item-hint">分享你的真实体验，帮助更多小伙伴</text>
            </view>
        </view>

        <!-- 评分区域 -->
        <view class="card">
            <text class="card-title">总体评分</text>
            <view class="star-row">
                <text
                    v-for="s in 5"
                    :key="s"
                    class="star"
                    :class="{ active: s <= rating }"
                    @click="setRating(s)"
                >★</text>
                <text class="rating-text" v-if="rating > 0">{{ ratingText }}</text>
            </view>
        </view>

        <!-- 评价内容 -->
        <view class="card">
            <text class="card-title">评价内容</text>
            <textarea
                class="comment-textarea"
                v-model="content"
                placeholder="写下你的真实感受，菜品口味怎么样？环境如何？服务好不好？"
                :maxlength="500"
                placeholder-style="color:#CCC;font-size:28rpx;"
            ></textarea>
            <text class="char-count">{{ content.length }}/500</text>
        </view>

        <!-- 上传图片 -->
        <view class="card">
            <text class="card-title">添加图片（选填）</text>
            <view class="img-list">
                <view class="img-item" v-for="(img, idx) in images" :key="idx">
                    <image :src="img" mode="aspectFill" class="upload-img"></image>
                    <view class="img-delete" @click="removeImage(idx)">✕</view>
                </view>
                <view class="img-add" v-if="images.length < 6" @click="chooseImage">
                    <text class="add-icon">+</text>
                    <text class="add-text">{{ images.length === 0 ? '添加图片' : images.length + '/6' }}</text>
                </view>
            </view>
        </view>

        <!-- 快捷标签 -->
        <view class="card">
            <text class="card-title">标签（选填）</text>
            <view class="tag-list">
                <text
                    v-for="(tag, idx) in quickTags"
                    :key="idx"
                    class="tag-item"
                    :class="{ selected: selectedTags.includes(tag) }"
                    @click="toggleTag(tag)"
                >{{ tag }}</text>
            </view>
        </view>

        <!-- 匿名发布 -->
        <view class="anonymous-row">
            <text class="anonymous-label">匿名发布</text>
            <switch class="anonymous-switch" :checked="isAnonymous" @change="toggleAnonymous" color="#FF6600" />
        </view>

        <!-- 提交按钮 -->
        <view class="submit-area">
            <view class="submit-btn" :class="{ disabled: !canSubmit }" @click="submitComment">
                {{ editId ? '保存修改' : '发布评价' }}
            </view>
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
            item: { name: '', image: '', id: 0 },
            itemType: 'food',
            rating: 0,
            content: '',
            images: [],
            selectedTags: [],
            isAnonymous: false,
            editId: 0,
            quickTags: ['味道赞', '性价比高', '环境好', '服务棒', '分量足', '很新鲜', '排队久', '还会再来']
        };
    },
    computed: {
        ratingText() {
            const texts = ['', '较差', '一般', '不错', '很好', '超赞'];
            return texts[this.rating] || '';
        },
        canSubmit() {
            return this.rating > 0 && this.content.trim().length >= 5;
        }
    },
    onLoad(options) {
        const editId = options.editId ? parseInt(options.editId) : 0;
        if (editId) {
            this.editId = editId;
            const allComments = uni.getStorageSync('allComments') || [];
            const existing = allComments.find(c => c.id === editId);
            if (existing) {
                this.itemType = existing.itemType;
                this.rating = existing.rating;
                this.content = existing.content;
                this.images = [...(existing.images || [])];
                this.selectedTags = [...(existing.tags || [])];
                const sourceList = getSourceList(existing.itemType);
                const found = sourceList.find(item => item.id === existing.itemId);
                if (found) {
                    this.item = { name: found.name, image: found.image, id: found.id };
                } else {
                    this.item = { name: '未知商品', image: '', id: existing.itemId };
                }
                uni.setNavigationBarTitle({ title: '编辑评价' });
            }
        } else {
            const id = parseInt(options.id);
            const type = options.type || 'food';
            this.itemType = type;
            const sourceList = getSourceList(type);
            const found = sourceList.find(item => item.id === id);
            if (found) {
                this.item = { name: found.name, image: found.image, id: found.id };
            }
        }
    },
    methods: {
        setRating(s) {
            this.rating = s;
        },
        toggleAnonymous(e) {
            this.isAnonymous = e.detail.value;
        },
        toggleTag(tag) {
            const idx = this.selectedTags.indexOf(tag);
            if (idx >= 0) {
                this.selectedTags.splice(idx, 1);
            } else {
                this.selectedTags.push(tag);
            }
        },
        chooseImage() {
            uni.chooseImage({
                count: 6 - this.images.length,
                sizeType: ['compressed'],
                sourceType: ['album', 'camera'],
                success: (res) => {
                    this.images = this.images.concat(res.tempFilePaths);
                }
            });
        },
        removeImage(idx) {
            this.images.splice(idx, 1);
        },
        submitComment() {
            if (!this.canSubmit) {
                if (this.rating === 0) {
                    uni.showToast({ title: '请先评分', icon: 'none', duration: 1500 });
                } else if (this.content.trim().length < 5) {
                    uni.showToast({ title: '评价内容至少5个字', icon: 'none', duration: 1500 });
                }
                return;
            }

            const allComments = uni.getStorageSync('allComments') || [];

            if (this.editId) {
                const idx = allComments.findIndex(c => c.id === this.editId);
                if (idx >= 0) {
                    allComments[idx].rating = this.rating;
                    allComments[idx].content = this.content.trim();
                    allComments[idx].images = [...this.images];
                    allComments[idx].tags = [...this.selectedTags];
                    allComments[idx].time = this.formatDate();
                }
                uni.setStorageSync('allComments', allComments);
                uni.showToast({ title: '评价修改成功', icon: 'success', duration: 1500 });
            } else {
                const comment = {
                    id: Date.now(),
                    itemId: this.item.id,
                    itemType: this.itemType,
                    user: this.isAnonymous ? '匿名用户' : (this.getUserName()),
                    avatar: '',
                    content: this.content.trim(),
                    rating: this.rating,
                    tags: [...this.selectedTags],
                    images: [...this.images],
                    time: this.formatDate(),
                    likes: 0
                };
                allComments.unshift(comment);
                uni.setStorageSync('allComments', allComments);
                uni.showToast({ title: '评价发布成功', icon: 'success', duration: 1500 });
            }

            setTimeout(() => {
                uni.navigateBack();
            }, 1500);
        },
        getUserName() {
            const userInfo = uni.getStorageSync('userInfo');
            return userInfo ? (userInfo.nickname || '用户') : '用户';
        },
        formatDate() {
            const d = new Date();
            return d.getFullYear() + '-' +
                String(d.getMonth() + 1).padStart(2, '0') + '-' +
                String(d.getDate()).padStart(2, '0');
        }
    }
};
</script>

<style scoped>
.comment-page {
    min-height: 100vh;
    background-color: #F5F5F5;
    padding-bottom: 40rpx;
}

/* 商品信息 */
.item-header {
    display: flex;
    align-items: center;
    padding: 28rpx 28rpx;
    background-color: #FFFFFF;
    gap: 20rpx;
    margin-bottom: 16rpx;
}

.item-img {
    width: 120rpx;
    height: 120rpx;
    border-radius: 12rpx;
    flex-shrink: 0;
}

.item-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8rpx;
}

.item-name {
    font-size: 30rpx;
    font-weight: bold;
    color: #333;
}

.item-hint {
    font-size: 24rpx;
    color: #999;
}

/* 卡片 */
.card {
    background-color: #FFFFFF;
    margin: 0 0 16rpx 0;
    padding: 28rpx;
}

.card-title {
    font-size: 30rpx;
    font-weight: bold;
    color: #333;
    display: block;
    margin-bottom: 20rpx;
}

/* 星级评分 */
.star-row {
    display: flex;
    align-items: center;
}

.star {
    font-size: 56rpx;
    color: #E0E0E0;
    margin-right: 12rpx;
    transition: color 0.2s, transform 0.2s;
}

.star.active {
    color: #FFA500;
}

.star:active {
    transform: scale(1.2);
}

.rating-text {
    margin-left: 16rpx;
    font-size: 30rpx;
    color: #FF6600;
    font-weight: bold;
}

/* 评价内容 */
.comment-textarea {
    width: 100%;
    min-height: 240rpx;
    font-size: 28rpx;
    color: #333;
    line-height: 1.8;
    box-sizing: border-box;
    padding: 16rpx;
    background-color: #FAFAFA;
    border-radius: 12rpx;
}

.char-count {
    text-align: right;
    font-size: 22rpx;
    color: #BBB;
    display: block;
    margin-top: 12rpx;
}

/* 图片上传 */
.img-list {
    display: flex;
    flex-wrap: wrap;
    gap: 16rpx;
}

.img-item {
    position: relative;
    width: 160rpx;
    height: 160rpx;
}

.upload-img {
    width: 100%;
    height: 100%;
    border-radius: 12rpx;
}

.img-delete {
    position: absolute;
    top: -10rpx;
    right: -10rpx;
    width: 40rpx;
    height: 40rpx;
    background-color: rgba(0,0,0,0.6);
    color: #FFFFFF;
    font-size: 22rpx;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.img-add {
    width: 160rpx;
    height: 160rpx;
    border: 2rpx dashed #DDD;
    border-radius: 12rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8rpx;
}

.add-icon {
    font-size: 48rpx;
    color: #CCC;
}

.add-text {
    font-size: 20rpx;
    color: #BBB;
}

/* 标签 */
.tag-list {
    display: flex;
    flex-wrap: wrap;
    gap: 16rpx;
}

.tag-item {
    font-size: 24rpx;
    color: #666;
    background-color: #F5F5F5;
    padding: 10rpx 24rpx;
    border-radius: 8rpx;
}

.tag-item.selected {
    color: #FF6600;
    background-color: #FFF3E0;
}

/* 匿名 */
.anonymous-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 28rpx 28rpx;
    background-color: #FFFFFF;
    margin-bottom: 40rpx;
}

.anonymous-label {
    font-size: 28rpx;
    color: #333;
}

/* 提交 */
.submit-area {
    padding: 0 28rpx;
}

.submit-btn {
    width: 100%;
    height: 92rpx;
    background: linear-gradient(135deg, #FF6600, #FF8533);
    color: #FFFFFF;
    font-size: 34rpx;
    font-weight: bold;
    border-radius: 46rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 8rpx 20rpx rgba(255,102,0,0.3);
}

.submit-btn.disabled {
    background: #CCC;
    box-shadow: none;
}

.submit-btn:active:not(.disabled) {
    opacity: 0.9;
    transform: scale(0.98);
}
</style>
