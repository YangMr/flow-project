<script setup>
import { ref } from 'vue';
import Account from './components/account.vue';
import Mobile from './components/Mobile.vue';

// 登录类型索引值
const tabIndex = ref(0);
// const loginType = ref(false);

// 定义登录类型切换文本
const tabMetas = ref([
	{
		title: '账号登录',
		subTitle: '手机号登陆'
	},
	{
		title: '手机号登陆',
		subTitle: '账号登录'
	}
]);

// 切换登录类型
const changeLoginType = () => {
	tabIndex.value = Math.abs(tabIndex.value - 1);
	// loginType.value = !loginType.value;
};
</script>

<template>
	<view class="user-login">
		<view class="login-type">
			<view class="title">{{ tabMetas[tabIndex].title }}</view>
			<!-- <view class="title">{{ loginType ? '手机号登录' : '账号登录' }}</view> -->
			<view class="type">
				<text @click="changeLoginType">{{ tabMetas[tabIndex].subTitle }}</text>
				<!-- <text @click="changeLoginType">{{ loginType ? '账号登录' : '手机号登录' }}</text> -->
				<text class="iconfont icon-caret"></text>
			</view>
		</view>

		<!-- 账号登录 -->
		<Account v-if="tabIndex === 0"></Account>
		<!-- 手机号登录 -->
		<Mobile v-else></Mobile>
	</view>
</template>

<style lang="scss">
@import './index.scss';
</style>
