<script>
export default {
    onLaunch: function() {
        console.log('App Launch');
        // 检查是否首次启动
        const hasGuided = uni.getStorageSync('hasGuided');
        if (!hasGuided) {
            uni.setStorageSync('launchFlag', false);
        }
    },
    onShow: function() {
        console.log('App Show');
    },
    onHide: function() {
        console.log('App Hide');
    }
};
</script>

<style>
/* 全局样式 */
page {
    background-color: #F5F5F5;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

* {
    box-sizing: border-box;
}

/* 大众点评风格通用样式 */
.text-primary {
    color: #FF6600;
}
.bg-primary {
    background-color: #FF6600;
}
.text-gray {
    color: #999;
}
.text-dark {
    color: #333;
}

/* 通用按钮 */
.btn-primary {
    background-color: #FF6600;
    color: #FFFFFF;
    border: none;
    border-radius: 8rpx;
    padding: 20rpx 40rpx;
    font-size: 30rpx;
}
.btn-primary:active {
    background-color: #E55A00;
}

/* 通用卡片 */
.card {
    background-color: #FFFFFF;
    border-radius: 12rpx;
    margin: 20rpx;
    overflow: hidden;
    box-shadow: 0 2rpx 12rpx rgba(0,0,0,0.06);
}

/* 通用价格 */
.price {
    color: #FF6600;
    font-weight: bold;
}
.price .symbol {
    font-size: 24rpx;
}
</style>
