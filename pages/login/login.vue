<template>
	<view>
		
		<!-- // 账号 -->
		<input type="text" placeholder="账号" v-model="account">
		<!-- // 密码 -->
		<input type="password" placeholder="密码" v-model="password">
		<!-- // 登陆按钮 -->
		<button type="primary" @click="login()">登陆</button>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
				account: '', // 账号
				password: '' // 密码
				
			}
		},
		methods: {
			
			login() {
				if (this.account && this.password) { // 检测账号或密码是否为空
					
					uni.setStorageSync("isLogin", "true"); // 添加登陆状态
					uni.showToast({
						icon: 'success',
						title: "登陆成功！"
					})
					
					// 返回我的页面
					uni.switchTab({
						url: '/pages/mine/mine'
					})
					
				} else { // 提示 账号或密码为空
					uni.showToast({
						icon: 'error',
						title: "账号或密码为空！"
					})
				}
			}
			
		}
	}
</script>

<style>
	
	input {
		box-sizing: border-box;
		margin: 20px;
		padding: 0 10px;
		height: 40px;
		border-radius: 10px;
		border: 1px solid #dadada;
	}
	
	button {
		width: 90%;
	}

</style>
