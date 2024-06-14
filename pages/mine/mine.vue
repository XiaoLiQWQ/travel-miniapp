<template>
	<view>
		
		<!-- 用户详情 -->
		<view class="user-info">
			<!-- 用户头像 -->
			<img src="../../static/logo.png" alt="">
			<!-- 用户详情内容 -->
			<view class="user-info-content">
				<!-- 用户昵称 -->
				<text class="nick">{{ isLogin ? '临时用户' : '还未登陆' }}</text>
				<!-- 用户等级（虚拟数据） -->
				<text class="level">等级: 0</text>
			</view>
		</view>
		
		<!-- 去登陆按钮 -->
		<button class="login" type="primary" v-show="!isLogin" @click="toLogin()">去登陆</button>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
				// 是否登陆状态
				isLogin: false,
				
			}
		},
		onShow() {
			if (uni.getStorageSync("isLogin")) { // 如果有保存isLogin，则为登陆状态
				this.isLogin = true;
			} else {
				this.isLogin = false;
			}
		},
		methods: {
			
			// 去登陆页面
			toLogin() {
				uni.navigateTo({
					url: '/pages/login/login'
				})
			}
			
		}
	}
</script>

<style>
	
	.user-info {
		box-sizing: border-box;
		padding: 20px;
		width: 100%;
		display: flex;
		align-items: center;
	}
	
	.user-info img {
		margin: 15px;
		width: 50px;
		height: 50px;
	}
	
	.user-info-content {
		display: flex;
		flex-direction: column;
	}
	
	.nick {
		font-weight: bold;
	}
	
	.level {
		font-size: 14px;
		font-weight: bold;
		color: #666;
	}
	
	.login {
		width: 80%;
	}

</style>
