<script setup>
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { truckRegistration } from '@/api/task.js';

// 交通违章
import VehicleViolation from './components/vehicle-violation.vue';
// 车辆故障
import VehicleBreakdown from './components/vehicle-breakdown.vue';
// 车辆=事故
import VehicleAccident from './components/vehicle-accident.vue';

// 运输任务id
const id = ref('');

// 出车时间
const startTime = ref('');

// 初始化数据
onLoad((query) => {
	id.value = query.id;
	startTime.value = query.startTime;
});

// 回车时间
const endTime = ref('');

// 罚款金额

// 车辆是否故障

// 车辆是否违章

// 车辆是否可用

// 是否出现事故

// 故障类型，1-发动机启动困难，2-不着车，3-漏油，4-漏水，5-照明失灵，6-有异响，7-排烟异常，8-温度异常，9-其他,可用值:ABNORMAL_NOISE,ABNORMAL_SMOKE,ABNORMAL_TEMPERATURE,DIFFICULTY_IN_STARTING_THE_ENGINE,LIGHTING_FAILURE,NO_TRUCK,OIL_LEAKAGE,OTHER_FAULT,WATER_LEAKAGE

// 故障图片列表

// 故障说明，类型为“其他”时填写

// 扣分数据

// 违章类型，1-闯红灯，2-无证驾驶，3-超载，4-酒后驾驶，5-超速行驶，6-其他,可用值:DRIVING_WITHOUT_LICENSE,DRUNK_DRIVING,OTHER_BREAK,OVERLOAD,OVER_SPEED,RUN_THE_RED_LIGHT

// 违章说明，类型为“其他”时填写

// 事故类型，1-直行事故，2-追尾事故，3-超车事故，4-左转弯事故，5-右转弯事故，6-弯道事故，7-坡道事故，8-会车事故，9-其他,可用值:CURVE_ACCIDENT,LEFT_TURN_ACCIDENT,OTHER_ACCIDENT,OVERTAKING_ACCIDENT,RAMP_ACCIDENT,REAR_END_COLLISION,RIGHT_TURN_ACCIDENT,STRAIGHT_ACCIDENT,TRAFFIC_ACCIDENT

// 事故图片列表

// 事故说明，类型为“其他”时填写

// 提交回车登记方法
const onFormSubmit = async () => {
	try {
		const data = {
			id: id.value,
			startTime: startTime.value,
			endTime: endTime.value
		};

		const result = await truckRegistration(data);

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
			<uni-list-item title="出车时间" :right-text="startTime" show-arrow></uni-list-item>
			<uni-list-item title="回车时间" show-arrow>
				<template v-slot:footer>
					<uni-datetime-picker v-model="endTime">
						<view>{{ endTime || '请选择' }}</view>
					</uni-datetime-picker>
				</template>
			</uni-list-item>
		</uni-list>

		<!-- 车辆违章 -->
		<VehicleViolation></VehicleViolation>
		<!-- 车辆故障 -->
		<!-- 	<VehicleBreakdown></VehicleBreakdown> -->
		<!-- 交通事故 -->
		<!-- <VehicleAccident></VehicleAccident> -->

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
