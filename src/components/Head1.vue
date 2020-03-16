<template>
	<div class="header">
      <div class="wrap">
        <a class="pjax header-logo" href="index.html"><img src="../../static/logo.png" alt="在线商城"></a>
        <div class="header-search">
          <input type="text" class="header-search-text">
          <input class="header-search-btn" type="button" value="搜索">
          <p class="header-search-hot">热门搜索：PHP培训　专业教材　智能手机　平板电脑</p>
        </div>
        <div class="header-info">
          <a href="#">会员中心</a>
          <router-link class="pjax" to="/shoppingCart/1">去购物车结算</router-link>
          <!--<a class="pjax" href="cart.html">去购物车结算</a>-->
        </div>
      </div>
    </div>
</template>

<script>
	export default{
		name: 'head1',
		data(){
			return{
				
			}
		}
	}
</script>

<style>
body{margin:0;min-width:755px;color:#666;font-size:14px;}
.wrap{width:1220px;margin:0 auto;}
.nav .wrap{height:45px;margin-top:8px;}
.service .wrap{width:1000px;}
.service .wrap:after{content:'';display:block;clear:both;}
.header-logo{float:left;width:250px;display:block;}
.header-logo img{width:225px;margin-top:10px;}
.header .wrap{overflow:hidden;padding-top:10px;}
.header-search{width:500px;margin-top:15px;float:left;}
.header-search-text{width:406px;height:28px;border:2px solid #c81523;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);outline:none;float:left;padding:0 5px}
.header-search-btn{width:78px;height:32px;font-size:14px;font-weight:700;color:#fff;cursor:pointer;border:3px solid #c81523;outline:none;background: #c81523;font-family: "微软雅黑";line-height: 22px;}
.header-search-hot{color: #999;font-size:12px;margin-top:5px;}
.header-info{margin-top:15px;margin-left:20px;float:left}
.header-info a{padding:8px 12px;border:1px solid #E3E3E3;background-color: #F7F7F7;color:#666;margin-right:12px;cursor:pointer;display:inline-block;text-decoration:none;font-size:12px;}
</style>