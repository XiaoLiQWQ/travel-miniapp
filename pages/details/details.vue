<template>
	<view class="details">
		<text class="title">{{ details.title }}</text>
		<img :src="details.img" alt="">
		<text class="content">{{ details.content }}</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
				details: {}
				
			}
		},
		onLoad(options) {
			this.details = JSON.parse(options.details);
		},
		methods: {
			
		}
	}
</script>

<style>
	
	.details {
		box-sizing: border-box;
		padding: 20px;
		display: flex;
		flex-direction: column;
	}
	
	.title {
		margin: 10px 0;
		font-size: 18px;
		font-weight: bold;
	}
	
	img {
		border-radius: 10px;
	}
	
	.content {
		margin-top: 20px;
		line-height: 2;
		color: #555;
	}

</style>
