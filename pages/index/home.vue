<template>
	<view>
		<view class="cu-bar bg-gradual-blue search fixed">
			<view class="content">
				Ning
			</view>
			<view class="action">
				<!--<text class="cuIcon-more"></text>-->
			</view>
		</view>
		<view style="height:90rpx"></view>

		<swiper class="card-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
		 :autoplay="true" interval="5000" duration="500" @change="cardSwiper" indicator-color="#8799a3"
		 indicator-active-color="#0081ff">
			<swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''">
				<view class="swiper-item">
					<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
					<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
				</view>
			</swiper-item>
		</swiper>

		<view class="flex padding" style="padding-bottom: 10upx;">
			<view class="flex-sub bg-white margin-xs radius shadow shadow-lg mysub">
				<view class="bg-gradual-pink sub-t"></view>
				<image class="radius sub-i" src="https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg"></image>
				<view class="sub-b">
					<view class="sub-t1 text-black">英雄联盟</view>
					<view class="sub-t2 text-xs text-gray">关注 577W</view>
				</view>
			</view>
			<view class="flex-sub bg-white margin-xs radius shadow shadow-lg mysub">
				<view class="bg-gradual-blue sub-t"></view>
				<image class="radius sub-i" src="https://gss3.bdstatic.com/84oSdTum2Q5BphGlnYG/timg?wapp&quality=80&size=b150_150&subsize=20480&cut_x=0&cut_w=0&cut_y=0&cut_h=0&sec=1369815402&srctrace&di=99a84b84af5f1bdd28ad2d8a51b13874&wh_rate=null&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fpic%2Fitem%2F92199c3433fa828bf4fa5f8cf01f4134960a5aa8.jpg"></image>
				<view class="sub-b">
					<view class="sub-t1 text-black">无限法则</view>
					<view class="sub-t2 text-xs text-gray">关注 5.1W</view>
				</view>
			</view>
			<view class="flex-sub bg-white margin-xs radius shadow shadow-lg mysub">
				<view class="bg-gradual-green sub-t"></view>
				<image class="radius sub-i" src="https://gss3.bdstatic.com/84oSdTum2Q5BphGlnYG/timg?wapp&quality=80&size=b150_150&subsize=20480&cut_x=0&cut_w=0&cut_y=0&cut_h=0&sec=1369815402&srctrace&di=90e702dacf8637709c8153680632ba58&wh_rate=null&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fpic%2Fitem%2Fd058ccbf6c81800a3b7ec77cbf3533fa828b472c.jpg"></image>
				<view class="sub-b">
					<view class="sub-t1 text-black">天涯明月刀ol</view>
					<view class="sub-t2 text-xs text-gray">关注 271.2W</view>
				</view>
			</view>
		</view>

		

		<view class="cu-bar bg-white solid-bottom" style="margin-top: 25upx;">
			<view class="action">
				<text class="cuIcon-titles text-blue"></text> 文章
			</view>
			<!-- <view>
				<!-打开新链接-->
				<!-- <a href="http://www.imooc.com" title="点击进入慕课网" target="_blank">点击</a>
			</view> -->
			<!--<view class="action">
			</view>-->
		</view>



		<view class="cu-card article">
			<view class="cu-item shadow">
				<view class="title">
					<view class="text-cut">无意者 烈火焚身: 以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。</view>
				</view>
				<view class="content">
					<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg" mode="aspectFill"></image>
					<view class="desc">
						<view class="text-content"> 折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！</view>
						<view>
							<view class="cu-tag bg-red light sm round">正义天使</view>
							<view class="cu-tag bg-green light sm round">史诗</view>
						</view>
					</view>
				</view>
			</view>

			<view class="cu-item shadow">
				<view class="title">
					<view class="text-cut">无意者 烈火焚身: 以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。</view>
				</view>
				<view class="content">
					<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg" mode="aspectFill"></image>
					<view class="desc">
						<view class="text-content"> 折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！</view>
						<view>
							<view class="cu-tag bg-red light sm round">正义天使</view>
							<view class="cu-tag bg-green light sm round">史诗</view>
						</view>
					</view>
				</view>
			</view>

			<view style="height:90rpx"></view>
		</view>
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
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
				}, {
					id: 1,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
				}, {
					id: 2,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				}, {
					id: 3,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				}, {
					id: 4,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
				}, {
					id: 5,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
				}, {
					id: 6,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
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

	.mysub .sub-i {

		width: 70upx;
		height: 70upx;
		position: absolute;
		left: 50%;
		top: 55upx;
		margin-left: -35upx;
	}

	.mysub .sub-t1 {
		padding-top: 50upx;
	}
</style>
