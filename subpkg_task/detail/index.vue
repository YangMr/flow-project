<script setup>
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { taskDetail } from '@/api/task.js';

// 保存的是任务详情数据
const detailInfo = ref({});

const taskId = ref('');

// 获取任务详情数据
const getDetailInfo = async (id) => {
	try {
		if (!id) return;
		const result = await taskDetail(id);
		console.log('result', result);
		detailInfo.value = result.data;
	} catch (e) {
		console.log(e);
	}
};

// 初始化加载
onLoad((e) => {
	getDetailInfo(e.id);
});
</script>

<template>
	<view class="page-container">
		<!-- 搜索栏 -->
		<view class="search-bar">
			<!-- #ifdef APP-PLUS || MP -->
			<text class="iconfont icon-scan"></text>
			<!-- #endif -->

			<!-- #ifdef H5 -->
			<text class="iconfont icon-search"></text>
			<!-- #endif -->

			<input class="input" type="text" placeholder="输入运单号" />
		</view>

		<scroll-view class="task-detail" scroll-y="true">
			<view class="scroll-view-wrapper">
				<!-- 基本信息模块 -->
				<view class="basic-info panel">
					<!-- 基本信息 -->
					<view class="panel-title">基本信息</view>

					<!-- 起点与终点 -->
					<view class="timeline">
						<view class="line">{{ detailInfo.startAddress }}</view>
						<view class="line">{{ detailInfo.endAddress }}</view>
						<navigator hover-class="none" class="guide">
							<text class="iconfont icon-guide"></text>
							<text>开始导航</text>
						</navigator>
					</view>

					<!-- 任务信息 -->
					<view class="info-list">
						<view class="info-list-item">
							<text class="label">任务编号</text>
							<text class="value">{{ detailInfo.transportTaskId }}</text>
						</view>

						<!-- 待提货展示数据 -->
						<template v-if="detailInfo.status === 1">
							<view class="info-list-item">
								<text class="label">联系人</text>
								<text class="value">{{ detailInfo.startHandoverName }}</text>
							</view>
							<view class="info-list-item">
								<text class="label">联系电话</text>
								<text class="value">{{ detailInfo.startHandoverPhone }}</text>
							</view>
							<view class="info-list-item">
								<text class="label">预计提货时间</text>
								<text class="value">{{ detailInfo.planDepartureTime }}</text>
							</view>
							<view class="info-list-item">
								<text class="label">实际提货时间</text>
								<text class="value">{{ detailInfo.actualDepartureTime }}</text>
							</view>
						</template>

						<!-- 在途展示数据 -->
						<tempate v-if="detailInfo.status === 2">
							<view class="info-list-item">
								<text class="label">交付联系人</text>
								<text class="value">{{ detailInfo.finishHandoverName }}</text>
							</view>
							<view class="info-list-item">
								<text class="label">联系电话</text>
								<text class="value">{{ detailInfo.finishHandoverPhone }}</text>
							</view>
							<view class="info-list-item">
								<text class="label">预计送达时间</text>
								<text class="value">{{ detailInfo.planArrivalTime }}</text>
							</view>
							<view class="info-list-item">
								<text class="label">实际送达时间</text>
								<text class="value">{{ detailInfo.actualArrivalTime }}</text>
							</view>
						</tempate>
					</view>
				</view>
			</view>
		</scroll-view>

		<view class="toolbar" v-if="detailInfo.status === 1">
			<navigator :url="`/subpkg_task/delay/index`" hover-class="none" class="button secondary">延迟提货</navigator>
			<navigator :url="`/subpkg_task/pickup/index?id=${taskDetail.id}`" hover-class="none" class="button primary">提货</navigator>
		</view>
		<view class="toolbar" v-if="detailInfo.status === 2">
			<navigator :url="`/subpkg_task/except/index`" hover-class="none" class="button secondary">异常上报</navigator>
			<navigator :url="`/subpkg_task/delivery/index`" hover-class="none" class="button primary">支付</navigator>
		</view>
		<view class="toolbar" v-if="detailInfo.status === 4">
			<navigator :url="`/subpkg_task/record/index`" hover-class="none" class="button primary block">回车登记</navigator>
		</view>
	</view>
</template>

<style lang="scss">
.page-container {
	display: flex;
	flex-direction: column;
	height: calc(100vh - 44px);
}
.search-bar {
	background-color: #fff;
	padding: 30rpx;
	border-bottom: 1rpx solid #eee;
	position: relative;
	.icon-scan,
	.icon-search {
		position: absolute;
		top: 50%;
		left: 40rpx;
		padding: 20rpx;
		font-weight: 600;
		transform: translateY(-50%);
		color: $uni-secondary-text-color;
		font-size: $uni-font-size-base;
	}
	.input {
		height: 64rpx;
		background-color: #f4f4f4;
		border-radius: 64rpx;
		padding-left: 80rpx;
		font-size: $uni-font-size-small;
	}
}

.task-detail {
	flex: 1;
	overflow: hidden;

	.scroll-view-wrapper {
		overflow: hidden;
	}

	.panel {
		padding: 30rpx 30rpx 20rpx;
		border-radius: 16rpx;
		background-color: #fff;
		margin: 30rpx;
		box-sizing: border-box;
	}

	.panel-title {
		padding-bottom: 10rpx;
		margin-bottom: 30rpx;
		font-size: $uni-font-size-base;
		color: $uni-black-color;
	}

	.info-list {
		padding: 20rpx 10rpx 0;
		margin-top: 40rpx;
		border-top: 2rpx solid #f4f4f4;

		.info-list-item {
			display: flex;
			justify-content: space-between;
			line-height: 1;
			padding: 20rpx 0;
			font-size: $uni-font-size-small;

			.label {
				color: $uni-secondary-text-color;
			}

			.value {
				color: $uni-black-color;
			}
		}
	}
}

.basic-info {
	.hr {
		border-top: 1rpx solid #f4f4f4;
		margin: 20rpx 0;
	}

	.timeline {
		min-height: 110rpx;
		position: relative;
		padding: 0 140rpx 0 30rpx;
		margin-left: 30rpx;
		border-left: 2rpx dashed #f4f4f4;

		&::before,
		&::after {
			position: absolute;
			left: -24rpx;
			width: 44rpx;
			height: 44rpx;
			text-align: center;
			line-height: 44rpx;
			font-size: 24rpx;
			color: #fff;
			border-radius: 50%;
			background-color: pink;
		}

		&::before {
			content: '起';
			top: -1rpx;
			background-color: $uni-black-color;
		}

		&::after {
			content: '止';
			bottom: -1rpx;
			background-color: $uni-main-color;
		}

		.line {
			font-size: $uni-font-size-small;
			color: $uni-secondary-text-color;
			margin-top: 30rpx;

			&:first-child {
				margin-top: 0;
			}
		}

		.guide {
			position: absolute;
			right: 0;
			top: 50%;
			display: flex;
			justify-content: center;
			flex-direction: column;
			text-align: center;
			font-size: 24rpx;
			transform: translateY(-50%);

			.iconfont {
				margin-bottom: 10rpx;
				font-size: 40rpx;
			}
		}
	}
}

.toolbar {
	display: flex;
	justify-content: space-between;
	padding: 30rpx 30rpx calc(env(safe-area-inset-bottom) + 30rpx);
	font-size: $uni-font-size-base;
	background-color: #fff;

	.button {
		height: 100rpx;
		text-align: center;
		line-height: 100rpx;
		/* #ifdef APP */
		padding-top: 4rpx;
		/* #endif */
		border-radius: 100rpx;
		font-size: $uni-font-size-big;
	}

	.secondary {
		width: 250rpx;
		color: $uni-black-color;
		background-color: #e6e6e6;
	}

	.primary {
		width: 400rpx;
		color: #fff;
		background-color: $uni-main-color;

		&.block {
			width: 690rpx;
		}

		&[disabled] {
			background-color: #fadcd9;
		}
	}
}
</style>
