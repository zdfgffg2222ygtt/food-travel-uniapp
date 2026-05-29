<template>
    <view class="login-page">
        <!-- Logo区域 -->
        <view class="login-header">
            <view class="login-logo">🍜</view>
            <text class="login-app-name">美食旅游</text>
            <text class="login-slogan">发现美食，畅游天下</text>
        </view>

        <!-- 登录表单 -->
        <view class="login-form card">
            <view class="form-title">手机号登录</view>

            <!-- 手机号输入 -->
            <view class="input-group">
                <text class="input-label">手机号</text>
                <view class="input-wrap">
                    <text class="input-prefix">+86</text>
                    <input
                        class="input-field"
                        type="number"
                        v-model="phone"
                        placeholder="请输入手机号码"
                        maxlength="11"
                        @input="onPhoneInput"
                    />
                    <text class="input-clear" v-if="phone" @click="clearPhone">✕</text>
                </view>
                <text class="input-error" v-if="phoneError">{{ phoneError }}</text>
            </view>

            <!-- 验证码输入 -->
            <view class="input-group">
                <text class="input-label">验证码</text>
                <view class="input-wrap code-wrap">
                    <input
                        class="input-field"
                        type="number"
                        v-model="code"
                        placeholder="请输入验证码"
                        maxlength="6"
                    />
                    <view class="code-btn" :class="{ disabled: countdown > 0 }" @click="sendCode">
                        {{ countdown > 0 ? countdown + 's后重发' : '获取验证码' }}
                    </view>
                </view>
                <text class="input-error" v-if="codeError">{{ codeError }}</text>
            </view>

            <!-- 协议勾选 -->
            <view class="agreement-row">
                <view class="checkbox" @click="toggleAgree">
                    <text :style="{ color: agreed ? '#FF6600' : '#CCC', fontSize: '36rpx' }">{{ agreed ? '☑' : '□' }}</text>
                </view>
                <text class="agreement-text">
                    已阅读并同意<text class="agreement-link">《用户协议》</text>和<text class="agreement-link">《隐私政策》</text>
                </text>
            </view>

            <!-- 登录按钮 -->
            <view class="login-btn" :class="{ disabled: !canLogin }" @click="doLogin">
                登录
            </view>

            <!-- 其他登录方式 -->
            <view class="other-login">
                <text class="other-text">其他登录方式</text>
                <view class="other-icons">
                    <view class="other-icon-item" @click="wechatLogin">
                        <text class="icon-emoji">💬</text>
                        <text class="icon-label">微信</text>
                    </view>
                    <view class="other-icon-item" @click="alipayLogin">
                        <text class="icon-emoji">💳</text>
                        <text class="icon-label">支付宝</text>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            phone: '',
            code: '',
            agreed: false,
            countdown: 0,
            phoneError: '',
            codeError: '',
            timer: null
        };
    },
    computed: {
        canLogin() {
            return this.phone.length === 11 && this.code.length >= 4 && this.agreed && this.countdown > 0;
        }
    },
    methods: {
        clearPhone() {
            this.phone = '';
        },
        toggleAgree() {
            this.agreed = !this.agreed;
        },
        onPhoneInput() {
            this.phoneError = '';
            // 限制只能输入数字
            this.phone = this.phone.replace(/[^\d]/g, '');
            if (this.phone.length > 11) {
                this.phone = this.phone.substring(0, 11);
            }
        },
        sendCode() {
            if (this.countdown > 0) return;
            // 验证手机号
            if (this.phone.length !== 11) {
                this.phoneError = '请输入正确的11位手机号码';
                return;
            }
            if (!/^1[3-9]\d{9}$/.test(this.phone)) {
                this.phoneError = '手机号格式不正确';
                return;
            }
            this.phoneError = '';
            // 模拟发送验证码
            uni.showToast({ title: '验证码已发送', icon: 'none', duration: 1500 });
            this.countdown = 60;
            this.timer = setInterval(() => {
                this.countdown--;
                if (this.countdown <= 0) {
                    clearInterval(this.timer);
                    this.timer = null;
                }
            }, 1000);
        },
        doLogin() {
            if (!this.canLogin) {
                if (!this.agreed) {
                    uni.showToast({ title: '请先同意用户协议', icon: 'none', duration: 2000 });
                } else if (this.phone.length !== 11) {
                    uni.showToast({ title: '请输入正确的手机号', icon: 'none', duration: 2000 });
                } else if (this.code.length < 4) {
                    uni.showToast({ title: '请输入验证码', icon: 'none', duration: 2000 });
                }
                return;
            }

            // 模拟登录
            const userInfo = {
                nickname: '用户' + this.phone.substring(7),
                phone: this.phone.substring(0, 3) + '****' + this.phone.substring(7),
                avatar: '',
                favorites: 0,
                orders: 0,
                comments: 0,
                points: 100,
                loginTime: new Date().toISOString()
            };

            uni.setStorageSync('userInfo', userInfo);
            uni.showToast({ title: '登录成功', icon: 'success', duration: 1500 });

            setTimeout(() => {
                // 获取来源页面
                const pages = getCurrentPages();
                if (pages.length > 1) {
                    uni.navigateBack();
                } else {
                    uni.switchTab({ url: '/pages/index/index' });
                }
            }, 1500);
        },
        wechatLogin() {
            uni.showToast({ title: '微信登录功能开发中', icon: 'none', duration: 1500 });
        },
        alipayLogin() {
            uni.showToast({ title: '支付宝登录功能开发中', icon: 'none', duration: 1500 });
        }
    },
    onUnload() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }
};
</script>

<style scoped>
.login-page {
    min-height: 100vh;
    background: linear-gradient(180deg, #FF6600 0%, #FF8533 40%, #F5F5F5 40%);
    padding: 0 32rpx;
}

.login-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80rpx 0 40rpx;
}

.login-logo {
    font-size: 100rpx;
    margin-bottom: 20rpx;
}

.login-app-name {
    font-size: 44rpx;
    font-weight: bold;
    color: #FFFFFF;
    margin-bottom: 10rpx;
}

.login-slogan {
    font-size: 26rpx;
    color: rgba(255,255,255,0.85);
}

.card {
    background-color: #FFFFFF;
    border-radius: 20rpx;
    padding: 40rpx 32rpx;
    box-shadow: 0 4rpx 24rpx rgba(0,0,0,0.08);
}

.form-title {
    font-size: 34rpx;
    font-weight: bold;
    color: #333;
    margin-bottom: 40rpx;
    text-align: center;
}

.input-group {
    margin-bottom: 32rpx;
}

.input-label {
    font-size: 26rpx;
    color: #666;
    margin-bottom: 12rpx;
    display: block;
}

.input-wrap {
    display: flex;
    align-items: center;
    border: 2rpx solid #E8E8E8;
    border-radius: 12rpx;
    padding: 0 20rpx;
    height: 88rpx;
    transition: border-color 0.3s;
}

.input-wrap:focus-within {
    border-color: #FF6600;
}

.input-prefix {
    font-size: 28rpx;
    color: #666;
    padding-right: 20rpx;
    border-right: 2rpx solid #E8E8E8;
    margin-right: 20rpx;
}

.input-field {
    flex: 1;
    font-size: 28rpx;
    color: #333;
    height: 100%;
}

.input-clear {
    font-size: 28rpx;
    color: #CCC;
    padding: 10rpx;
}

.code-wrap {
    padding-right: 0;
}

.code-btn {
    background-color: #FFF3E0;
    color: #FF6600;
    font-size: 24rpx;
    padding: 14rpx 24rpx;
    border-radius: 8rpx;
    white-space: nowrap;
    flex-shrink: 0;
    margin-right: 10rpx;
}

.code-btn.disabled {
    background-color: #F5F5F5;
    color: #BBB;
}

.input-error {
    font-size: 22rpx;
    color: #F44336;
    margin-top: 8rpx;
    padding-left: 4rpx;
}

.agreement-row {
    display: flex;
    align-items: center;
    margin-bottom: 32rpx;
}

.checkbox {
    margin-right: 12rpx;
    display: flex;
    align-items: center;
}

.agreement-text {
    font-size: 24rpx;
    color: #999;
}

.agreement-link {
    color: #FF6600;
}

.login-btn {
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
    margin-bottom: 40rpx;
    box-shadow: 0 8rpx 20rpx rgba(255,102,0,0.3);
}

.login-btn.disabled {
    background: #CCC;
    box-shadow: none;
}

.login-btn:active:not(.disabled) {
    opacity: 0.9;
    transform: scale(0.98);
}

.other-login {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.other-text {
    font-size: 24rpx;
    color: #CCC;
    margin-bottom: 24rpx;
    position: relative;
}

.other-icons {
    display: flex;
    gap: 60rpx;
}

.other-icon-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8rpx;
}

.icon-emoji {
    font-size: 52rpx;
}

.icon-label {
    font-size: 22rpx;
    color: #999;
}
</style>
