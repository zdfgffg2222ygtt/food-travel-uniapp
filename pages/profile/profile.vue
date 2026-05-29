<template>
    <view class="profile-page">
        <view class="avatar-section" @click="changeAvatar">
            <view class="avatar-circle" v-if="!avatar">
                <text class="avatar-text">{{ userInfo.nickname ? userInfo.nickname.charAt(0) : '用' }}</text>
            </view>
            <image class="avatar-img" v-else :src="avatar" mode="aspectFill"></image>
            <text class="avatar-hint">点击更换头像</text>
        </view>

        <view class="form-card card">
            <view class="form-item">
                <text class="form-label">昵称</text>
                <input class="form-input" v-model="nickname" placeholder="请输入昵称" maxlength="12" />
            </view>
            <view class="form-item">
                <text class="form-label">手机号</text>
                <text class="form-val">{{ userInfo.phone || '未绑定' }}</text>
            </view>
        </view>

        <view class="save-btn" @click="saveProfile">保存修改</view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            userInfo: {},
            nickname: '',
            avatar: ''
        };
    },
    onShow() {
        const userInfo = uni.getStorageSync('userInfo') || {};
        this.userInfo = userInfo;
        this.nickname = userInfo.nickname || '';
        this.avatar = userInfo.avatar || '';
    },
    methods: {
        changeAvatar() {
            uni.chooseImage({
                count: 1,
                sizeType: ['compressed'],
                sourceType: ['album', 'camera'],
                success: (res) => {
                    this.avatar = res.tempFilePaths[0];
                    uni.showToast({ title: '头像已选择，请保存', icon: 'none', duration: 1500 });
                },
                fail: () => {
                    uni.showToast({ title: '未选择图片', icon: 'none', duration: 1500 });
                }
            });
        },
        saveProfile() {
            if (!this.nickname.trim()) {
                uni.showToast({ title: '昵称不能为空', icon: 'none', duration: 1500 });
                return;
            }
            const userInfo = uni.getStorageSync('userInfo') || {};
            userInfo.nickname = this.nickname.trim();
            userInfo.avatar = this.avatar;
            uni.setStorageSync('userInfo', userInfo);
            this.userInfo = userInfo;
            uni.showToast({ title: '保存成功', icon: 'success', duration: 1500 });
            setTimeout(() => { uni.navigateBack(); }, 1000);
        }
    }
};
</script>

<style scoped>
.profile-page { min-height: 100vh; background-color: #F5F5F5; padding-bottom: 40rpx; }

.avatar-section {
    background: linear-gradient(135deg, #FF6600, #FF8533);
    padding: 60rpx 32rpx 40rpx;
    display: flex; flex-direction: column; align-items: center; gap: 16rpx;
}
.avatar-circle {
    width: 140rpx; height: 140rpx; border-radius: 50%;
    background-color: rgba(255,255,255,0.3); border: 4rpx solid rgba(255,255,255,0.6);
    display: flex; align-items: center; justify-content: center;
}
.avatar-img {
    width: 140rpx; height: 140rpx; border-radius: 50%;
    border: 4rpx solid rgba(255,255,255,0.6);
}
.avatar-text { font-size: 60rpx; color: #FFFFFF; font-weight: bold; }
.avatar-hint { font-size: 24rpx; color: rgba(255,255,255,0.85); }

.card { background-color: #FFFFFF; margin: 20rpx; border-radius: 16rpx; padding: 24rpx; box-shadow: 0 2rpx 12rpx rgba(0,0,0,0.04); }

.form-item {
    display: flex; align-items: center; padding: 22rpx 0;
    border-bottom: 1rpx solid #F8F8F8;
}
.form-item:last-child { border-bottom: none; }
.form-label { font-size: 28rpx; color: #333; width: 140rpx; flex-shrink: 0; }
.form-input { flex: 1; font-size: 28rpx; color: #333; text-align: right; }
.form-val { flex: 1; font-size: 28rpx; color: #999; text-align: right; }

.save-btn {
    margin: 40rpx 32rpx; height: 92rpx;
    background: linear-gradient(135deg, #FF6600, #FF8533); color: #FFFFFF;
    font-size: 34rpx; font-weight: bold; border-radius: 46rpx;
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 8rpx 20rpx rgba(255,102,0,0.3);
}
.save-btn:active { opacity: 0.9; }
</style>
