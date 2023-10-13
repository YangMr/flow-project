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
	return uniFetch.post('/driver/tasks/takeDelivery', data);
};

// 交付
export const deliver = (data) => {
	return uniFetch.post('/driver/tasks/deliver', data);
};

// 任务详情
export const taskDetail = (jobId) => {
	return uniFetch.get(`/driver/tasks/details/${jobId}`);
};

// 延迟提货
export const delay = (data) => {
	return uniFetch.put('/driver/tasks/delay', data);
};

// 上报异常
export const reportException = (data) => {
	return uniFetch.post('/driver/tasks/reportException', data);
};

// 回车登记
export const truckRegistration = (data) => {
	return uniFetch.post('/driver/tasks/truckRegistration', data);
};

// 联系调度中心

// 条件查询货物信息列表
