<script setup>
import { ref } from 'vue';
import { getMessage, getReadAll } from '@/api/message.js';
import { onLoad } from '@dcloudio/uni-app';

// 判断是否显示暂无数据 false表示有数据 true没有数据
const isEmpty = ref(false);
// false表示还有数据数据没有加载, true则表示所有数据已经加载完成
const hasMore = ref(false);

// 保存公告数据
const taskNotifyInfo = ref({});
const notifyList = ref([]);

// 页码
const nextPage = ref(0);
const pageSize = ref(5);

// 是否加载完成
const isTriggered = ref(false);

// 消息类型 200：司机端公告，201：司机端系统通知;
const contentType = ref('200');

// 获取公告数据
const getkNotifyList = async () => {
	try {
		// 更新下一页页码
		nextPage.value += 1;

		// 请求数据
		const result = await getMessage(contentType.value, nextPage.value, pageSize.value);

		// 如果是页码是1,则表示执行了下拉刷新,这个时候需要清空数组
		if (nextPage.value === 1) notifyList.value = [];
		// 保存请求到的数据
		taskNotifyInfo.value = result.data;
		// 保存列表的数据
		notifyList.value = [...notifyList.value, ...(result.data.items || [])];
		// 判断是否加载到最后一页数据
		hasMore.value = nextPage.value == taskNotifyInfo.value.pages;
		// 判断如果没有请求到数据的话,则设置isEmpty未true,它为true的表示暂无数据
		isEmpty.value = notifyList.value.length === 0;
	} catch (e) {
		console.log(e);
	}
};

// 初始化加载
onLoad(() => {
	getkNotifyList();
});

// 监听上拉加载
const onScrollToLower = () => {
	if (hasMore.value) return;
	getkNotifyList();
};

// 监听下拉刷新
const onRefresh = async () => {
	isTriggered.value = true;
	nextPage.value = 0;
	await getkNotifyList();
	isTriggered.value = false;
};

// 监听全部已读
const handleAllRead = async () => {
	try {
		const result = await getReadAll(contentType.value);
		nextPage.value = 0;
		getkNotifyList();
	} catch (e) {
		console.log(e);
	}
};
</script>

<template>
	<scroll-view
		:refresher-triggered="isTriggered"
		@refresherrefresh="onRefresh"
		refresher-enabled
		@scrolltolower="onScrollToLower"
		scroll-y="true"
		class="scroll-view"
		refresher-background="#f4f4f4;"
	>
		<view class="scroll-view-wrapper" v-if="notifyList.length > 0">
			<view @click="handleAllRead" class="message-action">
				<text class="iconfont icon-clear"></text>
				全部已读
			</view>

			<!-- <view v-for="(item, index) in 100">{{ index }}</view> -->
			<uni-list>
				<uni-list-item
					v-for="(item, index) in notifyList"
					:key="item.id"
					:title="item.title"
					:right-text="item.created"
					ellipsis="1"
					:to="`/subpkg_message/content/index?id=${item.id}`"
				>
					<template v-slot:header>
						<text v-if="item.isRead === 0" class="dot"></text>
					</template>
				</uni-list-item>
			</uni-list>
		</view>
		<view v-if="isEmpty" class="message-blank">暂无消息</view>
	</scroll-view>
</template>

<style lang="scss">
@import './styles.scss';
</style>
