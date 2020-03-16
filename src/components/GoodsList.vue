<template>
	<div class="content">
		<div class="wrap">
			<div id="content">
				<div class="crumbs">
					<router-link class="pjax" to="/">首页</router-link>
					<!--<a class="pjax" href="index.html">首页</a>-->

					<i></i>
					<a class="pjax" href="find-1.html">图书、音像、电子书刊</a>

					<i></i>
					<a class="pjax" href="find-2.html">电子书刊</a>

					<i></i>
					<a class="pjax" href="find-3.html">电子书</a>

				</div>
				<div class="find">
					<div class="find-ad">
						<div class="find-ad-title">相关商品推荐</div>
						<div class="find-ad-content">
							
							<ul class="find-ad-item" v-for="recommended in recommendeds">
								<li>
          							<router-link target="_blank" v-bind:to="'/goodsInformation/'+recommended.gid"><img :src="'../../static/img/goodsList/'+recommended.imgPath" alt="1"></router-link>
          							<!--<router-link target="_blank" to="/goodsInformation"><img :src="'../../static/img/recommended/'+recommended.imgPath" alt="1"></router-link>-->
									<!--<a target="_blank" @click="toInformation(recommended.id)"><img :src="'../../static/img/recommended/'+recommended.imgPath" alt="1"></a>-->
								</li>
								<li class="find-ad-name">
									<router-link target="_blank" v-bind:to="'/goodsInformation/'+recommended.gid">{{recommended.title}}</router-link>
								</li>
								<li class="find-ad-price">￥{{recommended.money}}</li>
							</ul>
						</div>
					</div>
					<div class="find-ls">
						<ul class="selector">
							<li class="selector-title">商品列表</li>
							<li class="selector-category">
								
							</li>
							<li>
								<dl>
									<dt>价格：</dt>
									<dd class="selector-price">
										<a href="#" data-param="0-0" class="selector-curr">全部</a>

										<a href="#" data-param="0-20">0-20</a>

										<a href="#" data-param="21-40">21-40</a>

										<a href="#" data-param="41-60">41-60</a>

										<a href="#" data-param="61-80">61-80</a>

										<a href="#" data-param="81-100">81-100</a>

									</dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt>排序：</dt>
									<dd class="selector-sort">
										<a href="#" data-param="id-desc" class="selector-curr">最新上架</a>
										<a href="#" data-param="price-asc">价格升序</a>
										<a href="#" data-param="price-desc">价格降序</a>
									</dd>
								</dl>
							</li>
						</ul>
						<div class="find-item">

							<ul v-for="goodsList in goodsLists">
								<li>
									<router-link target="_blank" v-bind:to="'/goodsInformation/'+goodsList.id">
										<img :src="'../../static/img/goodsList/'+goodsList.imgPath" alt="goodsList.title" style="width: 100%;height: auto;">
									</router-link>
									<!--<a href="item-41.html" target="_blank"><img :src="'../../static/img/goodsList/'+goodsList.imgPath" alt="goodsList.title" style="width: 100%;height: auto;"></a>-->
								</li>
								<li class="find-item-name">
									<router-link target="_blank" v-bind:to="'/goodsInformation/'+goodsList.id">{{goodsList.title}}</router-link>
									<!--<a href="item-41.html" target="_blank">{{goodsList.title}}</a>-->
								</li>
								<li class="find-item-price">￥{{goodsList.money}}</li>
							</ul>
							
							<ul v-for="goodsList in goodsLists">
								<li>
									<router-link target="_blank" v-bind:to="'/goodsInformation/'+goodsList.id">
										<img :src="'../../static/img/goodsList/'+goodsList.imgPath" alt="goodsList.title" style="width: 100%;height: auto;">
									</router-link>
									<!--<a href="item-41.html" target="_blank"><img :src="'../../static/img/goodsList/'+goodsList.imgPath" alt="goodsList.title" style="width: 100%;height: auto;"></a>-->
								</li>
								<li class="find-item-name">
									<a href="item-41.html" target="_blank">{{goodsList.title}}</a>
								</li>
								<li class="find-item-price">￥{{goodsList.money}}</li>
							</ul>

						</div>
						<div class="pagelist">
							<span class="pagelist-first pagelist-none">首页</span>
							<span class="pagelist-prev pagelist-none">上一页</span>
							<div class="pagelist-nav"><span class="pagelist-curr">1</span><span class="pagelist-btn">2</span><span class="pagelist-btn">3</span></div>
							<span class="pagelist-next pagelist-btn">下一页</span>
							<span class="pagelist-last pagelist-btn">尾页</span>
						</div>
					</div>
				</div>
		
			</div>
		</div>
	</div>
</template>

<script>
	import ServerData from './url'
	export default{
		name: 'goodsList',
		data:function(){
			return{
				recommendeds:[],
				goodsLists:[],
				serverUrl:ServerData.serverUrl()
			}
		},
		methods:{
//			toInformation(id){
//				this.$router.push({
//					name : 'id',
//					params:{
//						id: id
//					}
//				})
//			},
			fetchRecommended(){
				this.$http.get(this.serverUrl+"re/selectAllGR")
	  				.then(function(response){
//						console.log(response);
						this.recommendeds = response.body
  				})	
			},
			fetchGoodsLists(){
				this.$http.get(this.serverUrl+"gl/selectAll")
	  				.then(function(response){
//						console.log(response);
						this.goodsLists = response.body
  				})
			}
		},
		created(){
			this.fetchRecommended()
			this.fetchGoodsLists()
		}
	}
</script>

<style>
.news-content{list-style:none;padding:0;margin:0;text-indent:20px;line-height:25px;font-size:12px;}
.news-content li:hover{background:#eee;cursor:pointer;}
.news-content a{color:#555;text-decoration:none;}
.news-content a:hover{color:#333;}
.crumbs{margin:15px 20px;height:16px;}
.crumbs a{color:#666;text-decoration:none}
.crumbs a:hover{color:#E4393C;}
.crumbs i{padding:0 8px;}
.crumbs i:before{content:'>';font-style:normal;}
.find{overflow:hidden;}
.find-ad{width:208px;border:1px solid #ddd;float:left;}
.find-ad img{width:180px;}
.find-ad-title{font-weight:bold;margin:10px;color:#777;}
.find-ad-item{margin:10px 0 10px 13px;float:left;list-style:none;padding:0}
.find-ad-name{margin:4px 9px;}
.find-ad-name a{font-size:12px;color:#666;max-height:32px;display:block;overflow:hidden;text-decoration:none}
.find-ad-name a:hover{color:#E4393C;text-decoration:underline}
.find-ad-price{color:#E4393C;font-weight:bold;font-family:"Microsoft YaHei";margin-left:7px;}
.find-ls{width:1000px;margin-left:10px;float:right}
.find-item{width:1000px;margin:10px auto;overflow:hidden;margin-bottom:20px;}
.find-item ul{list-style:none;margin:10px 8px;width:220px;height:290px;border-radius:8px;padding:10px 6px;border:1px solid #eee;float:left}
.find-item ul:hover{border:1px solid #ccc;box-shadow:0 0 8px #eee;}
.find-item-name{margin:5px 10px;}
.find-item-name a{font-size:12px;color:#666;max-height:32px;display:block;overflow:hidden;text-decoration:none}
.find-item-name a:hover{color:#E4393C;}
.find-item-price{color:#E4393C;font-weight:bold;margin-left:8px;font-family:"Microsoft YaHei"}
.selector{border:1px solid #ddd;width:970px;margin:0 auto;list-style:none;padding:0}
.selector li{line-height:31px;padding:0 10px;border-top:1px dotted #ddd;overflow:hidden;}
.selector dl{margin:0;}
.selector dt{width:70px;text-align:right;float:left}
.selector dd{float:left;width:875px;margin:0;}
.selector a{margin-right:20px;color:#005aa0;white-space:nowrap;text-decoration:none}
.selector a:hover{color:#E4393C;text-decoration:none;}
.selector-curr{background:#DEEFFA;}
.selector-title{background:#F7F7F7;border:0!important;}
.pagelist{float:right;padding-top:30px;text-align:right;clear:both;overflow:hidden;padding:10px 0;}
.pagelist-none{display:block;float:left;padding:2px 12px;font-size:12px;height:24px;line-height:24px;color:#bbb;border:1px solid #ccc;background:#fcfcfc;margin:0 3px;}
.pagelist-btn{display:block;float:left;margin:0 3px;padding:2px 12px;border:1px solid #ccc;color:#808080;font-size:12px;height:24px;line-height:24px;background:#fff;}
.pagelist-btn:hover{color:#E4393C;border:1px solid #E4393C;cursor:pointer}
.pagelist-curr{display:block;float:left;margin:0 3px;padding:2px 12px;font-size:12px;height:24px;line-height:24px;background:#E4393C;border:1px solid #E4393C;color:#fff;}
.pagelist-nav{float:left;}
</style>