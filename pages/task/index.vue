<template>
	<view>任务</view>
</template>

<script setup>
import uniFetch from '@/api/uni-fetch.js';

uniFetch({
	url: '/driver/tasks/list',
	method: 'GET',
	data: {
		status: 1
	}
}).then((res) => {
	console.log('Res=>', res);
});
</script>

<style lang="scss"></style>
