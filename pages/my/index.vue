<script setup>
import { getProfile, getTask } from '@/api/user.js';
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';

// 保存用户信息
const userProfile = ref({});

// 保存任务数据
const taskData = ref({});

// 获取用户信息
const getUserProfile = async () => {
	try {
		const result = await getProfile();
		userProfile.value = result.data;
	} catch (e) {
		console.log(e);
	}
};

// 获取任务数据
const getTaskData = async () => {
	try {
		const result = await getTask(uni.utils.getYearAndMonth());
		console.log('result', result);
		taskData.value = result.data;
	} catch (e) {
		console.log(e);
	}
};

onLoad(() => {
	getUserProfile();
	getTaskData();
});
</script>

<template>
	<view class="page-container">
		<view class="user-profile" v-if="userProfile">
			<image class="avatar" :src="userProfile.avatar" mode=""></image>
			<text class="username">{{ userProfile.name }}</text>
			<text class="no">司机编号：{{ userProfile.number }}</text>
			<text class="mobile">手机号码：{{ userProfile.phone }}</text>
		</view>

		<view class="month-overview">
			<view class="title">我的任务</view>
			<view class="content">
				<view class="item">
					<text class="volumn">{{ taskData.taskAmounts }}</text>
					<text class="label">任务总量</text>
				</view>
				<view class="item">
					<text class="volumn">{{ taskData.completedAmounts }}</text>
					<text class="label">完成任务量</text>
				</view>
				<view class="item">
					<text class="volumn">{{ taskData.transportMileage }}</text>
					<text class="label">运输里程(km)</text>
				</view>
			</view>
		</view>

		<view class="truck-meta">
			<uni-list :border="false">
				<uni-list-item to="/subpkg_user/truck/index" title="车辆信息" showArrow></uni-list-item>
				<uni-list-item to="/subpkg_user/task/index" title="任务数据" showArrow></uni-list-item>
				<uni-list-item to="/subpkg_user/settings/index" title="系统设置" showArrow></uni-list-item>
			</uni-list>
		</view>
	</view>
</template>

<style lang="scss">
@import './index.scss';
</style>
