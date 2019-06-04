<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="false">
			<block slot="content">发布订单</block>
		</cu-custom>

	<form>
		<view class="cu-form-group">
			<view class="title">项目编号</view>
			<input placeholder="两字短标题" name="input"></input>
		</view>
		<view class="cu-form-group ">
			<view class="title">社区名称</view>
			<input placeholder="三字标题" name="input"></input>
		</view>
		<view class="cu-form-group ">
			<view class="title">详细信息</view>
			<input placeholder="统一标题的宽度" name="input"></input>
		</view>
		<view class="cu-form-group ">
			<view class="title">收货地址</view>
			<input placeholder="输入框带个图标" name="input"></input>
			<text class='cuIcon-locationfill text-orange'></text>
		</view>
		<view class="cu-form-group ">
			<view class="title">验证码</view>
			<input placeholder="输入框带个按钮" name="input"></input>
			<button class='cu-btn bg-green shadow'>验证码</button>
		</view>
	</form>

		<view class="padding flex flex-direction">
			<button class="cu-btn bg-blue margin-tb-xl lg">提交</button>
		</view>
		
		<view class="bg-white" style="text-align: center;padding: 30upx;">	
			<view class="flex">
				<view class="flex-sub bg-grey padding-sm margin-xs radius">
					<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>
					<view class="text-black">凯尔</view>
				</view>
				<view class="flex-sub bg-grey padding-sm margin-xs radius">1</view>
				<view class="flex-sub bg-grey padding-sm margin-xs radius">1</view>
				<view class="flex-sub bg-grey padding-sm margin-xs radius">1</view>
			</view>
			<view class="flex">
				<view class="flex-sub bg-grey padding-sm margin-xs radius">1</view>
				<view class="flex-sub bg-grey padding-sm margin-xs radius">1</view>
				<view class="flex-sub bg-grey padding-sm margin-xs radius">1</view>
				<view class="flex-sub bg-grey padding-sm margin-xs radius">1</view>
			</view>
			
		</view>
		
		
		
		
		
		<view style="height:90rpx"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cardCur: 0,
				swiperList: [{
					id: 0,
					type: 'image',
				}],
				dotStyle: false,
				towerStart: 0,
				direction: ''
			}
		},
		onLoad() {

		},
		methods: {
			// cardSwiper
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
			DotStyle(e) {
				this.dotStyle = e.detail.value
			}
		}
	}
</script>

<style>
	.mysub {
		position: relative;
		text-align: center;
	}

	.mysub .sub-t,
	.mysub .sub-b {
		min-height: 90upx;
	}

	.mysub .sub-b {
		padding-bottom: 20upx;
	}

	.mysub .sub-t1 {
		padding-top: 50upx;
	}
</style>
