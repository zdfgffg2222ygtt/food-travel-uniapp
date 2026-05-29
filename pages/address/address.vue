<template>
    <view class="address-page">
        <view class="address-list" v-if="list.length > 0">
            <view class="address-card" v-for="(addr, idx) in list" :key="idx">
                <view class="addr-top">
                    <text class="addr-name">{{ addr.name }}</text>
                    <text class="addr-phone">{{ addr.phone }}</text>
                    <text class="addr-tag" v-if="addr.isDefault">默认</text>
                </view>
                <text class="addr-detail">{{ addr.province }}{{ addr.city }}{{ addr.district }} {{ addr.detail }}</text>
                <view class="addr-actions">
                    <text class="addr-action" @click="editAddress(idx)">编辑</text>
                    <text class="addr-action delete" @click="deleteAddress(idx)">删除</text>
                    <text class="addr-action" v-if="!addr.isDefault" @click="setDefault(idx)">设为默认</text>
                </view>
            </view>
        </view>

        <view class="empty" v-else>
            <text class="empty-icon">📍</text>
            <text class="empty-text">暂无收货地址</text>
        </view>

        <view class="add-btn" @click="editAddress(-1)">+ 新增收货地址</view>

        <!-- 编辑弹窗 -->
        <view class="modal-mask" v-if="showModal" @click="closeModal"></view>
        <view class="modal-card" v-if="showModal">
            <text class="modal-title">{{ editIdx >= 0 ? '编辑地址' : '新增地址' }}</text>
            <input class="modal-input" v-model="form.name" placeholder="收货人姓名" />
            <input class="modal-input" v-model="form.phone" placeholder="手机号码" maxlength="11" type="number" />
            <input class="modal-input" v-model="form.province" placeholder="省份" />
            <input class="modal-input" v-model="form.city" placeholder="城市" />
            <input class="modal-input" v-model="form.district" placeholder="区/县" />
            <input class="modal-input" v-model="form.detail" placeholder="详细地址（街道门牌号）" />
            <view class="modal-btns">
                <view class="modal-btn cancel" @click="closeModal">取消</view>
                <view class="modal-btn confirm" @click="saveAddress">保存</view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            list: [],
            showModal: false,
            editIdx: -1,
            form: { name: '', phone: '', province: '', city: '', district: '', detail: '', isDefault: false }
        };
    },
    onShow() {
        this.list = uni.getStorageSync('addresses') || [];
    },
    methods: {
        editAddress(idx) {
            this.editIdx = idx;
            if (idx >= 0) {
                this.form = { ...this.list[idx] };
            } else {
                this.form = { name: '', phone: '', province: '', city: '', district: '', detail: '', isDefault: false };
            }
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        },
        saveAddress() {
            if (!this.form.name || !this.form.phone || !this.form.detail) {
                uni.showToast({ title: '请填写完整信息', icon: 'none', duration: 1500 });
                return;
            }
            let list = [...this.list];
            if (this.editIdx >= 0) {
                list[this.editIdx] = { ...this.form };
            } else {
                list.push({ ...this.form });
            }
            uni.setStorageSync('addresses', list);
            this.list = list;
            this.showModal = false;
            uni.showToast({ title: '保存成功', icon: 'success', duration: 1500 });
        },
        deleteAddress(idx) {
            uni.showModal({
                title: '提示',
                content: '确定删除该地址吗？',
                success: (res) => {
                    if (res.confirm) {
                        let list = [...this.list];
                        list.splice(idx, 1);
                        uni.setStorageSync('addresses', list);
                        this.list = list;
                        uni.showToast({ title: '已删除', icon: 'none', duration: 1500 });
                    }
                }
            });
        },
        setDefault(idx) {
            let list = this.list.map((a, i) => ({ ...a, isDefault: i === idx }));
            uni.setStorageSync('addresses', list);
            this.list = list;
        }
    }
};
</script>

<style scoped>
.address-page { min-height: 100vh; background-color: #F5F5F5; padding-bottom: 120rpx; }

.address-list { padding: 16rpx 0; }

.address-card {
    background-color: #FFFFFF; margin: 0 20rpx 16rpx; border-radius: 16rpx;
    padding: 24rpx; box-shadow: 0 2rpx 12rpx rgba(0,0,0,0.05);
}

.addr-top { display: flex; align-items: center; gap: 16rpx; margin-bottom: 12rpx; }
.addr-name { font-size: 30rpx; font-weight: bold; color: #333; }
.addr-phone { font-size: 26rpx; color: #666; flex: 1; }
.addr-tag { font-size: 20rpx; color: #FF6600; background-color: #FFF3E0; padding: 4rpx 12rpx; border-radius: 4rpx; }

.addr-detail { font-size: 26rpx; color: #666; line-height: 1.6; display: block; margin-bottom: 16rpx; }

.addr-actions { display: flex; gap: 32rpx; padding-top: 16rpx; border-top: 1rpx solid #F5F5F5; }
.addr-action { font-size: 24rpx; color: #FF6600; }
.addr-action.delete { color: #F44336; }

.add-btn {
    position: fixed; bottom: 40rpx; left: 40rpx; right: 40rpx; height: 88rpx;
    background: linear-gradient(135deg, #FF6600, #FF8533); color: #FFFFFF;
    font-size: 32rpx; font-weight: bold; border-radius: 44rpx;
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 8rpx 20rpx rgba(255,102,0,0.3);
}

.empty { text-align: center; padding: 160rpx 0; }
.empty-icon { font-size: 100rpx; margin-bottom: 24rpx; display: block; }
.empty-text { font-size: 28rpx; color: #BBB; }

.modal-mask { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(0,0,0,0.5); z-index: 100; }
.modal-card {
    position: fixed; bottom: 0; left: 0; right: 0; background-color: #FFFFFF;
    border-radius: 24rpx 24rpx 0 0; padding: 32rpx; z-index: 101;
}
.modal-title { font-size: 34rpx; font-weight: bold; color: #333; text-align: center; display: block; margin-bottom: 28rpx; }
.modal-input {
    width: 100%; height: 80rpx; background-color: #F8F8F8; border-radius: 12rpx;
    padding: 0 20rpx; font-size: 28rpx; margin-bottom: 16rpx; box-sizing: border-box;
}
.modal-btns { display: flex; gap: 20rpx; margin-top: 24rpx; }
.modal-btn {
    flex: 1; height: 80rpx; border-radius: 40rpx; display: flex;
    align-items: center; justify-content: center; font-size: 30rpx;
}
.modal-btn.cancel { background-color: #F5F5F5; color: #666; }
.modal-btn.confirm { background-color: #FF6600; color: #FFFFFF; }
</style>
