<template>
	<div class="service">
		<div class="wrap">
			<ul>
				<li>购物指南</li>
				<li>配送方式</li>
				<li>支付方式</li>
				<li>售后服务</li>
				<li>特色服务</li>
				<li>网络服务</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'bottom',
		data(){
			return{
				
			}
		}
	}
</script>

<style>
.wrap{width:1220px;margin:0 auto;}
.service{height:70px;margin-top:20px;border-top:1px solid #ddd;overflow:hidden;}
.service .wrap{width:1000px;}
.service .wrap:after{content:'';display:block;clear:both;}
.service ul{margin:0 auto;width:100%;list-style:none;padding:0;}
.service li{float:left;margin:10px 50px;}
</style>