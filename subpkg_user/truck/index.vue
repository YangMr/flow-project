<script setup>
import { getTruck } from '@/api/user.js';
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';
const truckInfo = ref();

onLoad(() => {
	getTruckInfo();
});

const getTruckInfo = async () => {
	try {
		const result = await getTruck();
		truckInfo.value = result.data;
		console.log('result', result);
	} catch (e) {
		console.log(e);
	}
};
</script>

<template>
	<view class="page-container page-content" v-if="truckInfo?.pictureList">
		<swiper class="truck-pictures" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item, index) in truckInfo?.pictureList" :key="index">
				<image class="picture" :src="item.url" mode="aspectFill"></image>
			</swiper-item>
		</swiper>

		<uni-list>
			<uni-list-item :border="false" title="车辆编号" :rightText="truckInfo.id"></uni-list-item>
			<uni-list-item :border="false" title="车辆号牌" :rightText="truckInfo.licensePlate"></uni-list-item>
			<uni-list-item :border="false" title="车型" :rightText="truckInfo.truckType"></uni-list-item>
			<uni-list-item :border="false" title="所属机构" :rightText="truckInfo.currentOrganName"></uni-list-item>
			<uni-list-item :border="false" title="载重" :rightText="truckInfo.allowableLoad"></uni-list-item>
		</uni-list>
	</view>
</template>

<style lang="scss">
.page-content {
	padding: 30rpx;

	.truck-pictures {
		width: 100%;
		height: 400rpx;
		border-radius: 16rpx;
		overflow: hidden;

		.picture {
			width: 100%;
			height: 100%;
		}
	}

	.uni-list {
		margin-top: 30rpx;
	}

	::v-deep .uni-list-item__extra-text {
		font-size: 28rpx;
		color: #2a2929;
	}

	::v-deep .uni-list-item__content-title {
		font-size: 28rpx;
		color: #818181;
	}
}
</style>
