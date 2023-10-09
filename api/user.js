/**
 *  登录模块相关接口
 */
import uniFetch from './uni-fetch.js';

// 用户登录
export const login = (data) => {
	if (!data.account || !data.password) return;
	// return uniFetch({ url: '/driver/login/account', method: 'POST', data });
	return uniFetch.post('/driver/login/account', data);
};

// 获取用户信息
export const getProfile = () => {
	return uniFetch.get('/driver/users');
};

// 获取任务数据
export const getTask = (data) => {
	if (!data.month || !data.year) return;
	return uniFetch.get('/driver/users/taskReport', data);
};

// 获取车辆信息
