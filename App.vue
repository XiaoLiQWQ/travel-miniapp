<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			
			// 每次刷新页面或重启项目时删除登陆状态
			uni.removeStorageSync("isLogin");
			
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
