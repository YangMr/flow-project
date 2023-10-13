<script setup>
import { ref } from 'vue';
// 控制选项显示还是隐藏
const show = ref(false);

// 监听单选框的切换
const onRadioChange = (e) => {
	console.log('e', e);
	show.value = e.detail.value == 1 ? true : false;
	console.log('qqq');
};
</script>

<template>
	<view>
		<view>
			<uni-list>
				<uni-list-item title="交通违章">
					<template v-slot:footer>
						<radio-group class="radio-group" @change="onRadioChange">
							<label class="radio">
								<radio value="1" />
								<text>是</text>
							</label>
							<label class="radio">
								<radio checked value="0" />
								<text>否</text>
							</label>
						</radio-group>
					</template>
				</uni-list-item>
			</uni-list>
		</view>
		<view v-show="show">选项</view>
	</view>
</template>

<style></style>
