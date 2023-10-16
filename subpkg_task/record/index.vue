<script setup>
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { storeToRefs } from 'pinia';
import { truckRegistration } from '@/api/task.js';

// 交通违章
import VehicleViolation from './components/vehicle-violation.vue';
// 车辆故障
import VehicleBreakdown from './components/vehicle-breakdown.vue';
// 车辆=事故
import VehicleAccident from './components/vehicle-accident.vue';

import { useTaskStore } from '@/stores/task.js';
const { recordData } = storeToRefs(useTaskStore());
console.log('recordData', recordData.value);

// 初始化数据
onLoad((query) => {
	// 运输任务id
	recordData.value.id = query.id;
	// 出车时间
	recordData.value.startTime = query.startTime;
});

// 提交回车登记方法
const onFormSubmit = async () => {
	try {
		recordData.value.accidentImagesList = recordData.value.accidentImagesList.map((item) => {
			return {
				url: item.url
			};
		});
		recordData.value.faultImagesList = recordData.value.faultImagesList.map((item) => {
			return {
				url: item.url
			};
		});
		console.log('recordData', recordData.value);
		const result = await truckRegistration(recordData.value);
		if (result.code != 200) return;
		// 提交回车登记成功之后, 回车任务列表页面
		uni.reLaunch({
			url: '/pages/task/index'
		});
	} catch (e) {
		console.log(e);
	}
};
</script>

<template>
	<view class="page-container">
		<uni-list>
			<uni-list-item title="出车时间" :right-text="recordData.startTime" show-arrow></uni-list-item>
			<uni-list-item title="回车时间" show-arrow>
				<template v-slot:footer>
					<uni-datetime-picker v-model="recordData.endTime">
						<view>{{ recordData.endTime || '请选择' }}</view>
					</uni-datetime-picker>
				</template>
			</uni-list-item>
		</uni-list>

		<!-- 车辆违章 -->
		<VehicleViolation></VehicleViolation>
		<!-- 车辆故障 -->
		<VehicleBreakdown></VehicleBreakdown>
		<!-- 交通事故 -->
		<VehicleAccident></VehicleAccident>

		<view class="toolbar">
			<button @click="onFormSubmit" class="button">提交登记</button>
		</view>
	</view>
</template>

<style lang="scss">
.page-container {
	padding: 30rpx;
}
</style>
