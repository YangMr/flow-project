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
