/**
 *  任务模块相关接口
 */
import uniFetch from './uni-fetch.js';

// 获取任务列表
export const getTasks = (data) => {
	return uniFetch.get('/driver/tasks/list', data);
};

// 提货
export const takeDelivery = (data) => {
	return uniFetch.POST('/driver/tasks/takeDelivery', data);
};

// 交付
export const deliver = (data) => {
	return uniFetch.POST('/driver/tasks/deliver', data);
};

// 任务详情
export const taskDetail = (jobId) => {
	return uniFetch.get(`/driver/tasks/details/${jobId}`);
};

// 延迟提货

// 联系调度中心

// 条件查询货物信息列表

// 回车登记

// 上报异常

//
