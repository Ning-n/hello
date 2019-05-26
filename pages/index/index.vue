<template>
	<view>
		
		<page-Home v-if="pageCur=='home'">首页</page-Home>
		<view v-if="pageCur=='sc'">收藏</view>
		<view v-if="pageCur=='xx'">消息</view>
		<view v-if="pageCur=='me'">我的</view>

		<view class="cu-bar tabbar bg-white foot">
			<view class="action" @tap="TabChange" data-name="home">
				<view class="cuIcon-cu-image">
					<image src="/static/tabbar/fl.png"></image>
				</view>
				<view :class="pageCur=='home'?'text-green':'text-gray'">首页</view>
			</view>
			<view class="action" @tap="TabChange" data-name="sc">
				<view class="cuIcon-cu-image">
					<image src="/static/tabbar/sc.png"></image>
				</view>
				<view :class="pageCur=='sc'?'text-green':'text-gray'">收藏</view>
			</view>
			<view class="action" @tap="TabChange" data-name="xx">
				<view class="cuIcon-cu-image">
					<image src="/static/tabbar/xx.png"></image>
				</view>
				<view :class="pageCur=='xx'?'text-green':'text-gray'">消息</view>
			</view>
			<view class="action" @tap="TabChange" data-name="me">
				<view class="cuIcon-cu-image">
					<image src="/static/tabbar/gr.png"></image>
				</view>
				<view :class="pageCur=='me'?'text-green':'text-gray'">我的</view>
			</view>
		</view>

	</view>

</template>

<script>
	export default {
		data() {
			return {
				pageCur:"home"
			}
		},
		onLoad() {
			
		},
		methods: {
			TabChange(e){
				//console.log(e.currentTarget.dataset.name)
				this.pageCur = e.currentTarget.dataset.name
			}
		}
	}
</script>

<style>

</style>
