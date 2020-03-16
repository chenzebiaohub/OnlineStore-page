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
				<div class="item">
					<div class="album">
						<div class="album-mid">
							<img class="album-mid-img" alt="预览图" :src="'../../static/img/goodsList/'+goodsOne.imgPath">
							<div class="album-mask" style="display: none; left: 175px; top: 15.5px;"></div>
						</div>
						<div class="album-small">
							<div class="album-btn-left"></div>
							<div class="album-list">
								<ul>
									<li class="album-curr"><img :src="'../../static/img/goodsList/'+goodsOne.imgPath" alt="预览图"></li>
								</ul>
							</div>
							<div class="album-btn-right"></div>
						</div>
						<div class="album-big" style="display: none;"><img class="album-big-img" alt="预览图" src="" style="left: -379px; top: -33.5686px;"></div>
					</div>
					<div class="item-info">
						<h1>{{goodsOne.title}}</h1>
						<div class="item-info-sell">工业和信息化“十三五”人才培养规划教材</div>
						<table>
							<tbody>
								<tr>
									<th>售 价：</th>
									<td><span class="item-info-price">¥&nbsp;{{goodsOne.money}}</span></td>
								</tr>
								<tr>
									<th>累计销量：</th>
									<td>0</td>
								</tr>
								<tr>
									<th>评 价：</th>
									<td>0</td>
								</tr>
								<tr>
									<th>配送至：</th>
									<td>北京（免运费）</td>
								</tr>
								<tr>
									<th>购买数量：</th>
									<td>
										<input type="button" value="-" class="item-num-sub" @click="subNumber()">
										<input type="text" :value="goodsNumber" id="item_num" class="item-num">
										<input type="button" value="+" class="item-num-add" @click="addNumber()"> （库存：
										<span class="item-num-stock">100</span>   ）
									</td>
								</tr>
								<tr>
									<td colspan="2" class="item-info-button">
										<a href="#" class="light">立即购买</a>
										<router-link target="_blank" to="/shoppingCart/1" @click.native="addShoppingCart()">加入购物车</router-link>
										<!--<a href="#" id="cart_add">加入购物车</a>-->
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					
					<div class="item-line"></div>
					<div class="item-ads">
						<div class="item-ads-title">相关商品推荐</div>
						<div class="item-ads-content">
							
							<ul class="item-ads-item" v-for="recommended in recommendeds">
								<li>
									<router-link target="_blank" v-bind:to="'/goodsInformation/'+recommended.gid">
										<img :src="'../../static/img/goodsList/'+recommended.imgPath" alt="+recommended.title+">
									</router-link>
								</li>
								<li class="item-ads-name">
									<router-link target="_blank" v-bind:to="'/goodsInformation/'+recommended.gid">{{recommended.title}}</router-link>
									<!--<a href="" target="_blank">{{recommended.title}}</a>-->
								</li>
								<li class="item-ads-price">¥{{recommended.money}}</li>
							</ul>

						</div>
					</div>
					<div class="item-desc">
						<div class="item-desc-title">商品详情</div>
						<div class="item-desc-content">
							<p><span style="color:rgb(156,156,156);font-family:Avenir, 'PingFang SC', 'Microsoft Yahei', '微软雅黑', 'Hiragino Sans GB', 'Microsoft Sans Serif', 'WenQuanYi Micro Hei', sans-serif;font-size:14px;background-color:rgb(255,255,255);">
								本书从初学者的角度出发，深刻且通俗地揭示了JavaWeb开发内幕。全书共15章，详细讲解了网页开发的基础知识和Java Web开发的重要知识，
								其中网页开发基础知识包括HTML技术、CSS技术和JavaScript技术，而Java Web的进阶知识包括Servlet技术、
								会话技术、JSP技术，以及JDBC和数据库连接池等技术。本书加入了真实的电商项目，揭示了项目开发的真实内幕，
								可以让学习者切身感受到项目开发带来的乐趣。</span><br>
								<span style="color:rgb(156,156,156);font-family:Avenir, 'PingFang SC', 'Microsoft Yahei', '微软雅黑', 'Hiragino Sans GB', 'Microsoft Sans Serif', 'WenQuanYi Micro Hei', sans-serif;font-size:14px;background-color:rgb(255,255,255);">
									本书使用深入浅出、通俗易懂的语言阐述教材中涉及的概念，并通过结合典型翔实的Web应用案例、分析案例代码、解决常见问题等方式，
									帮助读者真正明白Web应用程序开发的全过程。</span><br>
								<span style="color:rgb(156,156,156);font-family:Avenir, 'PingFang SC', 'Microsoft Yahei', '微软雅黑', 'Hiragino Sans GB', 'Microsoft Sans Serif', 'WenQuanYi Micro Hei', sans-serif;font-size:14px;background-color:rgb(255,255,255);">
									本书附有配套视频、源代码、习题、教学课件等资源；另外，为了帮助初学者更好地学习本书讲解的内容，还提供了在线答疑，
									希望得到更多读者的关注。</span><br>
								<span style="color:rgb(156,156,156);font-family:Avenir, 'PingFang SC', 'Microsoft Yahei', '微软雅黑', 'Hiragino Sans GB', 'Microsoft Sans Serif', 'WenQuanYi Micro Hei', sans-serif;font-size:14px;background-color:rgb(255,255,255);">
									本书适合作为高等院校计算机相关专业程序设计或者Web项目开发的教材，是一本适合广大计算机编程爱好者的优秀读物。</span></p>
						</div>
					</div>
					<div class="item-line"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import ServerData from './url'
	export default{
		name: 'goodsInformation',
		data(){
			return{
				goodsId:0,
				goodsOne:[],
				recommendeds:[],
				serverUrl:ServerData.serverUrl(),
				goodsNumber:1,
				goods:{}
			}
		},
		methods:{
			addShoppingCart(){
//				let addGoods = {
//					uid : 1,
//					gid : this.goodsId,
//					gnumber : this.goodsNumber
//				}
//				var uid = 1
//				var gid = this.goodsId
//				var gnumber = this.goodsNumber
				this.$http.post(this.serverUrl+"US/insert",{uid:1,gid:this.goodsId,gnumber:this.goodsNumber},{emulateJSON:true})
					.then(function(response){
						console.log(response)
					})
			},
			subNumber(){
				if(this.goodsNumber > 1){
					this.goodsNumber--
				}
			},
			addNumber(){
				this.goodsNumber++
			},
			fetchGoodsId(id){
				this.$http.get(this.serverUrl+"gl/selectById/"+id)
	  				.then(function(response){
//						console.log(response);
						this.goodsOne = response.body
  				})	
			},
			fetchRecommended(){
				this.$http.get(this.serverUrl+"re/selectAllGR")
	  				.then(function(response){
//						console.log(response);
						this.recommendeds = response.body
  				})	
			},
		},
		created(){
			this.goodsId = parseInt(this.$route.params.id)
			this.fetchGoodsId(this.goodsId)
			this.fetchRecommended()
		}
	}
</script>

<style>
body{margin:0;min-width:755px;color:#666;font-size:14px;}
.clear{clear:both}
.top{height:30px;line-height:30px;background:#F7F7F7;border-bottom:1px solid #eee;font-size:12px;color:#666;}
.top-right{float:right;}
.top-line{color:#ccc;}
.top ul{margin:0 20px;padding:0;list-style:none;}
.top li{float:left;margin-right:10px;}
.top a{color:#666;text-decoration:none;}
.top a:hover{color:#e4393c;text-decoration:underline;}
.wrap{width:1220px;margin:0 auto;}
.nav-line{width:100%;height:2px;background:#b1191a;}
.header .wrap{overflow:hidden;padding-top:10px;}
.header-logo{float:left;width:250px;display:block;}
.header-logo img{width:225px;margin-top:10px;}
.header-search{width:500px;margin-top:15px;float:left;}
.header-search-text{width:406px;height:28px;border:2px solid #c81523;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);outline:none;float:left;padding:0 5px}
.header-search-btn{width:78px;height:32px;font-size:14px;font-weight:700;color:#fff;cursor:pointer;border:3px solid #c81523;outline:none;background: #c81523;font-family: "微软雅黑";line-height: 22px;}
.header-search-hot{color: #999;font-size:12px;margin-top:5px;}
.header-info{margin-top:15px;margin-left:20px;float:left}
.header-info a{padding:8px 12px;border:1px solid #E3E3E3;background-color: #F7F7F7;color:#666;margin-right:12px;cursor:pointer;display:inline-block;text-decoration:none;font-size:12px;}
.nav .wrap{height:45px;margin-top:8px;}
.nav-category{width: 210px;height:100%;float:left;}
.nav-category-tl{background:#b1191a;color: #fff;text-align:center;font-weight:700;line-height:45px;}
.nav-category-tl a{color:#fff;text-decoration:none;}
.nav ul{list-style:none;float:left;margin:0;padding:0}
.nav li{font:16px "Microsoft YaHei";padding: 0 25px;line-height:45px;float:left;}
.service{height:70px;margin-top:20px;border-top:1px solid #ddd;overflow:hidden;}
.service .wrap{width:1000px;}
.service .wrap:after{content:'';display:block;clear:both;}
.service ul{margin:0 auto;width:100%;list-style:none;padding:0;}
.service li{float:left;margin:10px 50px;}
.footer{width:100%;height:50px;margin-top:10px;border-top:1px solid #eee;text-align:center;padding-top:10px;}
.category{width:210px;background: #c81623;position:absolute;padding-bottom: 10px;display:none;padding-top: 2px;z-index:19}
.category a{text-decoration:none;}
.category-main{height:30px;font-size:14px;float:left;line-height: 30px;font-weight: 400;}
.category-main a{color:#fff;display:block;width:210px;height: 30px;line-height:30px;text-indent: 20px;}
.category-main .on{background:#fff;color:#555;font-weight:700;position:relative;}
.category-sub{width:477px;min-height:238px;background: #f7f7f7;border:1px solid #DDD;position:absolute;left:210px;padding:5px 0;z-index:20;}
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
.selector{border:1px solid #ddd;width:970px;margin:0 auto;list-style:none;padding:0}
.selector li{line-height:31px;padding:0 10px;border-top:1px dotted #ddd;overflow:hidden;}
.selector a{margin-right:20px;color:#005aa0;white-space:nowrap;text-decoration:none}
.selector a:hover{color:#E4393C;text-decoration:none;}
.selector-curr{background:#DEEFFA;}
.selector-title{background:#F7F7F7;border:0!important;}
.find-item{width:1000px;margin:10px auto;overflow:hidden;margin-bottom:20px;}
.find-item ul{list-style:none;margin:10px 8px;width:220px;height:290px;border-radius:8px;padding:10px 6px;border:1px solid #eee;float:left}
.find-item ul:hover{border:1px solid #ccc;box-shadow:0 0 8px #eee;}
.find-item-name{margin:5px 10px;}
.find-item-name a{font-size:12px;color:#666;max-height:32px;display:block;overflow:hidden;text-decoration:none}
.find-item-name a:hover{color:#E4393C;}
.find-item-price{color:#E4393C;font-weight:bold;margin-left:8px;font-family:"Microsoft YaHei"}
.pagelist{float:right;padding-top:30px;text-align:right;clear:both;overflow:hidden;padding:10px 0;}
.pagelist-none{display:block;float:left;padding:2px 12px;font-size:12px;height:24px;line-height:24px;color:#bbb;border:1px solid #ccc;background:#fcfcfc;margin:0 3px;}
.pagelist-btn{display:block;float:left;margin:0 3px;padding:2px 12px;border:1px solid #ccc;color:#808080;font-size:12px;height:24px;line-height:24px;background:#fff;}
.pagelist-btn:hover{color:#E4393C;border:1px solid #E4393C;cursor:pointer}
.pagelist-curr{display:block;float:left;margin:0 3px;padding:2px 12px;font-size:12px;height:24px;line-height:24px;background:#E4393C;border:1px solid #E4393C;color:#fff;}
.pagelist-nav{float:left;}
.album{width:350px;float:left;position:relative}
.album ul{list-style:none;padding:0;margin:0}
.album-mid{position:relative;float:left;width:350px;height:350px;overflow:hidden;border:1px solid #eee}
.album-mid-img{width:350px; height:350px;}
.album-small{position:relative;height:57px; margin-top:1px; background-color:#F1F0F0; padding:6px 5px; width:342px; overflow:hidden;float:left;}
.album-list {height:57px; width:320px; overflow:hidden; margin-left:7px; float:left;}
.album-list li { width:60px; overflow:hidden; float:left; text-align:center;margin-bottom:20px;}
.album-list li img{width:50px; height:50px;cursor:pointer; border:1px solid rgb(204, 204, 204); padding: 2px;}
.album-list .album-curr img{border:2px solid #959595;padding:1px}
.album-list li img:hover{border:2px solid #959595;padding:1px;}
.album-mask{width:175px; height:175px;display:none;position:absolute; cursor:crosshair;opacity:0.15; background-color:#000; border:1px solid #fff;}
.album-big{position:absolute;border: 1px solid #959595; overflow: hidden; z-index:18; display:none;width: 419px;height: 419px;left: 365px;}
.album-big-img{position:absolute;width:800px;height:800px}
.item{overflow:hidden;}
.item-line{clear:both;margin-bottom:30px;}
.item-info{float:left;margin-left: 30px;}
.item-info h1{width:760px;height:34px;font:700 16px/1.5em "Microsoft YaHei";border-bottom:1px dotted #ccc;margin:0;}
.item-info table{border-collapse:collapse;border:0}
.item-info tr{height:40px;}
.item-info th{text-align:right;width:80px;}
.item-info-sell{font-family: arial,"microsoft yahei";color: #e3393c;font-size:14px;margin:15px 0;}
.item-info-price{font-weight:bold;color:#E4393C;font-family:"Microsoft YaHei"}
.item-info-button{height:60px;line-height:60px;}
.item-info-button a{display:block;float:left;width:140px;height:35px;margin:0 20px;line-height:35px;text-align:center;background:#c40000;color:#fff;border-radius:5px;font-family:'Microsoft YaHei';font-size:15px;text-decoration:none;}
.item-info-button a:hover{text-decoration:none;}
.item-info-button .light{background-color:#ffeded;border:1px solid #c40000;color:#c40000;}
.item-num-sub{width:20px;height:20px;margin:0;padding:0}
.item-num-add{width:20px;height:20px;margin:0;padding:0}
.item-num{width:35px;height:18px;}
.item-ads{width:200px;border:1px solid #ddd;float:left;}
.item-ads ul{list-style:none;padding:0;}
.item-ads img{width:180px;}
.item-ads-item{margin:10px 0 10px 9px;}
.item-ads-title{font-weight:bold;margin:10px;margin-bottom:20px;color:#777;}
.item-ads-name{margin:9px;}
.item-ads-name a{font-size:12px;color:#666;max-height:27px;display:block;overflow:hidden;text-decoration:none}
.item-ads-name a:hover{color:#E4393C;text-decoration:underline}
.item-ads-price{color:#E4393C;font-weight:bold;font-family:"Microsoft YaHei";margin-left:6px;}
.item-desc{width:900px;margin:0 20px;float:left;}
.item-desc-title{font-weight:bold;padding:0 10px 10px 10px;background:#fefefe;  color: #E4393C;font-family: 'Microsoft YaHei';font-size:18px;}
.item-desc-content{border-top:1px solid #ccc;padding:20px 10px;}
.item-desc a{color:#07A;}
.item-desc p{margin: 5px 0;}
.item-desc ul{list-style: disc; margin: 1em 0; padding-left: 40px;}
.item-desc img{max-width:900px;}
.slide{margin-left:219px;margin-top:8px;width:670px;height:240px;float:left}
.slide{position:relative;overflow:hidden;border:1px solid #ccc}
.slide-nav{position:absolute;right:0px;bottom:0px;height:30px;line-height:34px;width:100%;background:rgba(0,0,0,0.2);text-align:center;}
.slide-nav a{background:#fff;border-radius:7px;width:14px;height:14px;display:inline-block;margin:0 5px;cursor:pointer;}
.slide-nav .slide-curr{background:#ff6700;}
.slide ul{position:relative;list-style:none;margin:0;padding:0;}
.slide ul li{position:absolute;display:none;}
.news{width:318px;height:240px;margin-top:10px;float:right;font-family:'Microsoft YaHei'}
.news-title{line-height:40px;font-size:16px;text-indent:15px;color:#333}
.news-content{list-style:none;padding:0;margin:0;text-indent:20px;line-height:25px;font-size:12px;}
.news-content li:hover{background:#eee;cursor:pointer;}
.news-content a{color:#555;text-decoration:none;}
.news-content a:hover{color:#333;}
.best{width:100%;min-height:180px;margin-top:13px;border-top:1px solid #ddd;padding-top:10px;overflow:hidden;}
.best ul{list-style:none;margin:0;padding:0}
.best .item{margin-left:30px;margin-bottom:10px;width:150px;height:220px;border-radius:8px;padding:10px 6px;border:1px solid #eee;float:left}
.best .item img{width:150px;height:150px;}
.best .item:hover{border:1px solid #ccc;box-shadow:0 0 8px #eee;}
.best .best-title{text-indent:10px;font-family:'Microsoft YaHei';font-size:20px;font-weight:bold;color:#E4393C;margin-bottom:10px;}
.best .goods{margin:4px 9px;}
.best .goods a{font-size:12px;color:#666;max-height:32px;display:block;overflow:hidden;text-decoration:none}
.best .goods a:hover{color:#E4393C;}
.best .price{color:#E4393C;font-weight:bold;margin-left:6px;font-family:"Microsoft YaHei";}
.uc{margin:20px auto;overflow:hidden;}
.uc-menu{float:left;width:130px;padding:10px;border:1px solid #D5E5F5;margin-right:10px;background-color:#F4F7FB;}
.uc-menu-photo{width:100px;height:100px;margin:15px auto;padding:2px;background-color:#F4F7FB;cursor:pointer;}
.uc-menu-photo img{width:100px;height:100px;border:1px solid #D5E5F5;border-radius:5px;background-color:#F4F7FB;}
.uc-content{float:left;width:1035px;padding:0 10px 10px;border:1px solid #D5E5F5;}
.uc-content-title{margin-bottom:10px;font-size:14px;border-bottom:1px solid #AED2FF;line-height:30px;height:30px;font-weight:700;text-indent:15px;color:#333;font-family:'Microsoft YaHei';}
.uc-content table{border-collapse:collapse;font-size:12px;font-family:Verdana,"Microsoft YaHei";color:#333;}
.shopcart{width:100%;margin:0 auto;}
.shopcart th{border-bottom:2px solid #B2D1FF;font-weight:normal;height:35px;line-height:23px;}
.shopcart td{height:55px;text-align:center}
.shopcart a{color:#3366D4;text-decoration:none}
.shopcart a:hover{text-decoration:underline}
.shopcart-item{background-color:#FAFCFF;border-bottom:1px dotted #84B3FD;}
.shopcart-act td{background:#fff;border-bottom:0;}
.shopcart-order{color:#FFF;font-size:14px;font-weight:600;cursor:pointer;margin:0 20px;background:#FE8502;border:1px solid #FF6633;border-radius:5px 5px 5px 5px;padding:6px 12px;}
.shopcart-order:hover{background:#FF6600;}
.shopcart-total{color:#FF3334;font-weight:bold;font-family:"Microsoft YaHei";font-size:16px;}
.shopcart-num-add{padding:0;width:16px;height:16px;color:#FFF;background-color:#BDBDBD;border:0;cursor:pointer;border-radius:2px;}
.shopcart-num-add:hover{background-color:#FF9900;}
.shopcart-num-sub{padding:0;width:16px;height:16px;color:#FFF;background-color:#BDBDBD;border:0;cursor:pointer;border-radius:2px;}
.shopcart-num-sub:hover{background-color:#FF9900;}
.shopcart-num{margin:5px;width:35px;text-align:center;height:20px;line-height:20px;padding:0 3px;}
.shopcart-price{color:#FF3334;font-weight:bold;font-family:"Microsoft YaHei";}
.shopcart .shopcart-lt{text-align:left;}
.shopcart .shopcart-rt{text-align:right;}
</style>