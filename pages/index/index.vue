<template>
	<view class="content">
		
		<!-- 轮播图组件（uniapp自带） -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			
			<!-- 每个swiper-item都是一个轮播图页面 -->
			<swiper-item>
				
				<!-- 用一个view包裹一个img组件 -->
				<view>
					
					<!-- 图片组件 -->
					<img src="../../static/index-1.png" alt="图片1">
					
				</view>
				
			</swiper-item>
			
			
			<swiper-item>
				<view>
					<img src="../../static/index-2.png" alt="图片2">
				</view>
			</swiper-item>
			<swiper-item>
				<view>
					<img src="../../static/index-3.png" alt="图片3">
				</view>
			</swiper-item>
		</swiper>
		
		<text class="title">精选目的地</text>
		
		<!-- 地区 -->
		<view class="area">
			
			<!-- 地区item -->
			<view class="item">
				<img src="../../static/opt-1.jpeg" alt="">
				<text>北京</text>
			</view>
			
			<view class="item">
				<img src="../../static/opt-2.jpeg" alt="">
				<text>上海</text>
			</view>
			
			<view class="item">
				<img src="../../static/opt-3.jpeg" alt="">
				<text>成都</text>
			</view>
			
			<view class="item">
				<img src="../../static/opt-4.png" alt="">
				<text>三亚</text>
			</view>
			
			<view class="item">
				<img src="../../static/opt-5.jpeg" alt="">
				<text>厦门</text>
			</view>
			
			<view class="item">
				<img src="../../static/opt-6.jpeg" alt="">
				<text>重庆</text>
			</view>
			
		</view>
		
	</view>
</template>

<script>
	
	// 默认结构
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	
	/* 轮播图样式 */
	swiper {
		margin-bottom: 50px;
		width: 100%;
		height: 200px;
	}
	
	swiper img {
		/* 图片撑满盒子 */
		width: 100%;
	}
	
	.title {
		margin-left: 15px;
		font-weight: bold;
	}
	
	/* 弹性布局 自动换行 平均居中 */
	.area {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	
	.area .item {
		margin: 10px 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 45%;
	}
	
	.area .item img {
		width: 100%;
	}
	
	.area .item text {
		font-size: 15px;
		font-weight: bold;
		color: #333;
	}
	
</style>
