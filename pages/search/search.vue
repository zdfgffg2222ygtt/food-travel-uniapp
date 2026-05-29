<template>
    <view class="search-page">
        <!-- 搜索栏 -->
        <view class="search-header">
            <view class="search-input-wrap">
                <text class="search-icon">🔍</text>
                <input
                    class="search-input"
                    v-model="keyword"
                    placeholder="搜索美食、景点、目的地"
                    placeholder-style="color:#CCC;font-size:28rpx;"
                    :focus="true"
                    @input="onSearchInput"
                    @confirm="onSearchConfirm"
                />
                <text class="search-clear" v-if="keyword" @click="clearSearch">✕</text>
            </view>
            <text class="search-cancel" @click="goBack">取消</text>
        </view>

        <!-- 搜索结果 -->
        <view class="search-body" v-if="keyword.trim()">
            <!-- 结果统计 -->
            <view class="result-count" v-if="results.length > 0">
                找到 <text class="count-highlight">{{ results.length }}</text> 个相关结果
            </view>

            <!-- 结果列表 -->
            <view class="result-list">
                <view
                    class="result-card"
                    v-for="item in results"
                    :key="item.dataType + '_' + item.id"
                    @click="goDetail(item)"
                >
                    <image :src="item.image" mode="aspectFill" class="result-img"></image>
                    <view class="result-info">
                        <view class="result-top">
                            <text class="result-name">{{ item.name }}</text>
                            <text class="result-type" :style="{ backgroundColor: typeColor(item.dataType) }">{{ typeLabel(item.dataType) }}</text>
                        </view>
                        <view class="result-mid">
                            <text class="result-rating">⭐ {{ item.rating }}</text>
                            <text class="result-location">📍 {{ item.location }}</text>
                        </view>
                        <view class="result-bottom">
                            <text class="result-price" v-if="item.price > 0">¥{{ item.price }}</text>
                            <text class="result-free" v-else>免费</text>
                            <text class="result-desc" v-if="item.description">{{ item.description.substring(0, 40) }}...</text>
                        </view>
                    </view>
                </view>
            </view>

            <!-- 无结果 -->
            <view class="no-result" v-if="results.length === 0 && keyword.trim()">
                <text class="no-result-icon">🔍</text>
                <text class="no-result-text">未找到相关结果</text>
                <text class="no-result-hint">换个关键词试试吧</text>
            </view>
        </view>

        <!-- 搜索前：历史记录 + 热门搜索 -->
        <view class="search-default" v-else>
            <!-- 搜索历史 -->
            <view class="history-section" v-if="searchHistory.length > 0">
                <view class="history-header">
                    <text class="history-title">搜索历史</text>
                    <text class="history-clear" @click="clearHistory">🗑 清空</text>
                </view>
                <view class="history-tags">
                    <text
                        class="history-tag"
                        v-for="(h, idx) in searchHistory"
                        :key="idx"
                        @click="quickSearch(h)"
                    >{{ h }}</text>
                </view>
            </view>

            <!-- 热门搜索 -->
            <view class="hot-section">
                <text class="hot-title">🔥 热门搜索</text>
                <view class="hot-tags">
                    <text class="hot-tag" v-for="kw in hotKeywords" :key="kw" @click="quickSearch(kw)">{{ kw }}</text>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
import { getAllItems } from '@/common/mock.js';

export default {
    data() {
        return {
            keyword: '',
            results: [],
            allItems: [],
            searchHistory: [],
            hotKeywords: ['北京烤鸭', '火锅', '故宫', '九寨沟', '西湖', '小龙虾', '迪士尼', '雪山', '古镇', '海边']
        };
    },
    onLoad() {
        this.allItems = getAllItems();
        const history = uni.getStorageSync('searchHistory') || [];
        this.searchHistory = history;
    },
    methods: {
        onSearchInput() {
            this.doSearch();
        },
        onSearchConfirm() {
            this.doSearch();
            this.saveHistory();
        },
        doSearch() {
            const kw = this.keyword.trim().toLowerCase();
            if (!kw) {
                this.results = [];
                return;
            }
            this.results = this.allItems.filter(item => {
                return item.name.toLowerCase().includes(kw) ||
                    item.category.toLowerCase().includes(kw) ||
                    item.location.toLowerCase().includes(kw) ||
                    (item.tags && item.tags.some(t => t.toLowerCase().includes(kw))) ||
                    (item.description && item.description.toLowerCase().includes(kw));
            });
        },
        quickSearch(kw) {
            this.keyword = kw;
            this.doSearch();
            this.saveHistory();
        },
        clearSearch() {
            this.keyword = '';
            this.results = [];
        },
        saveHistory() {
            const kw = this.keyword.trim();
            if (!kw) return;
            let history = this.searchHistory.filter(h => h !== kw);
            history.unshift(kw);
            if (history.length > 15) history = history.slice(0, 15);
            this.searchHistory = history;
            uni.setStorageSync('searchHistory', history);
        },
        clearHistory() {
            uni.showModal({
                title: '清空搜索历史',
                content: '确定清空所有搜索记录吗？',
                success: (res) => {
                    if (res.confirm) {
                        this.searchHistory = [];
                        uni.removeStorageSync('searchHistory');
                    }
                }
            });
        },
        goDetail(item) {
            this.saveHistory();
            uni.navigateTo({
                url: '/pages/detail/detail?id=' + item.id + '&type=' + item.dataType
            });
        },
        goBack() {
            uni.navigateBack();
        },
        typeLabel(type) {
            const map = { food: '美食', travel: '景点', hotel: '酒店', leisure: '休闲', specialty: '特产', route: '路线' };
            return map[type] || type;
        },
        typeColor(type) {
            const map = { food: '#FF6600', travel: '#4CAF50', hotel: '#2196F3', leisure: '#9C27B0', specialty: '#FF9800', route: '#F44336' };
            return map[type] || '#999';
        }
    }
};
</script>

<style scoped>
.search-page {
    min-height: 100vh;
    background-color: #F5F5F5;
}

/* 搜索栏 */
.search-header {
    display: flex;
    align-items: center;
    padding: 16rpx 20rpx;
    background-color: #FFFFFF;
    gap: 16rpx;
    border-bottom: 1rpx solid #F0F0F0;
}

.search-input-wrap {
    flex: 1;
    display: flex;
    align-items: center;
    background-color: #F5F5F5;
    border-radius: 36rpx;
    height: 68rpx;
    padding: 0 24rpx;
}

.search-icon {
    font-size: 28rpx;
    margin-right: 12rpx;
}

.search-input {
    flex: 1;
    font-size: 28rpx;
    color: #333;
    height: 100%;
}

.search-clear {
    font-size: 28rpx;
    color: #CCC;
    padding: 10rpx;
}

.search-cancel {
    font-size: 28rpx;
    color: #FF6600;
    flex-shrink: 0;
}

/* 结果 */
.search-body {
    padding: 16rpx 0;
}

.result-count {
    font-size: 24rpx;
    color: #999;
    padding: 0 24rpx 16rpx;
}

.count-highlight {
    color: #FF6600;
    font-weight: bold;
}

.result-card {
    display: flex;
    background-color: #FFFFFF;
    margin: 0 24rpx 16rpx;
    border-radius: 16rpx;
    overflow: hidden;
    box-shadow: 0 2rpx 12rpx rgba(0,0,0,0.06);
}

.result-img {
    width: 160rpx;
    height: 160rpx;
    flex-shrink: 0;
    background: linear-gradient(135deg, #FFF3E0, #FFE0B2);
}

.result-info {
    flex: 1;
    padding: 16rpx 20rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.result-top {
    display: flex;
    align-items: center;
    gap: 12rpx;
}

.result-name {
    font-size: 28rpx;
    font-weight: bold;
    color: #333;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.result-type {
    font-size: 20rpx;
    color: #FFFFFF;
    padding: 4rpx 12rpx;
    border-radius: 6rpx;
    flex-shrink: 0;
}

.result-mid {
    display: flex;
    gap: 16rpx;
}

.result-rating {
    font-size: 24rpx;
    color: #FF6600;
    font-weight: bold;
}

.result-location {
    font-size: 22rpx;
    color: #999;
}

.result-bottom {
    display: flex;
    align-items: baseline;
    gap: 12rpx;
}

.result-price {
    font-size: 30rpx;
    color: #FF6600;
    font-weight: bold;
}

.result-free {
    font-size: 24rpx;
    color: #4CAF50;
    font-weight: bold;
}

.result-desc {
    font-size: 22rpx;
    color: #BBB;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

/* 无结果 */
.no-result {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 120rpx 0;
}

.no-result-icon {
    font-size: 80rpx;
    margin-bottom: 20rpx;
}

.no-result-text {
    font-size: 30rpx;
    color: #666;
    margin-bottom: 10rpx;
}

.no-result-hint {
    font-size: 24rpx;
    color: #CCC;
}

/* 默认状态 */
.search-default {
    padding: 24rpx;
}

.history-section {
    margin-bottom: 32rpx;
}

.history-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20rpx;
}

.history-title {
    font-size: 30rpx;
    font-weight: bold;
    color: #333;
}

.history-clear {
    font-size: 24rpx;
    color: #999;
}

.history-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 16rpx;
}

.history-tag {
    font-size: 26rpx;
    color: #666;
    background-color: #FFFFFF;
    padding: 12rpx 28rpx;
    border-radius: 32rpx;
    border: 1rpx solid #EEE;
}

.hot-section {
    margin-bottom: 32rpx;
}

.hot-title {
    font-size: 30rpx;
    font-weight: bold;
    color: #333;
    display: block;
    margin-bottom: 20rpx;
}

.hot-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 16rpx;
}

.hot-tag {
    font-size: 26rpx;
    color: #FF6600;
    background-color: #FFF3E0;
    padding: 12rpx 28rpx;
    border-radius: 32rpx;
}
</style>
