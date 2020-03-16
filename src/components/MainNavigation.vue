<template>
	<div class="nav">
	      <div class="wrap">
	        <div id="category_show" class="nav-category">
	          <div class="nav-category-tl" @mouseenter="HoverClassification()" @mouseleave="LeaveClassification()"><a class="pjax" href="find-0.html">全部商品分类</a></div>
	          <div id="category_list" class="category" style="display: block;" 
	          	@mouseenter="HoverClassification()" @mouseleave="LeaveClassification()" v-show="categoryShow || ifGoodsList">
	          	
	          	<div class="category-item" v-for="classification in ClassificationGoods">
					<div class="category-main">
						<a class="pjax" :class="{white:classification.id==hoverIndex}" href="#" @mouseenter="HoverNavigation(classification.id)" @mouseleave="LeaveNavigation()">{{classification.category}}</a>
					</div>
					<div class="category-sub" v-show="classification.id==hoverIndex" @mouseenter="hoverIndex=classification.id" @mouseleave="LeaveNavigation()">
						
						<dl v-for="goodsTypes in classification.goodsTypes">
							<dt><a class="pjax" href="#">{{goodsTypes.type}}</a></dt>
							<dd>
								<!--<a class="pjax" href="#" v-for="type in goodsTypes.typeType"><router-link to="/goodsList">{{type.name}}</router-link></a>-->
								<router-link to="/goodsList"  v-for="type in goodsTypes.typeType" :key="" @click.native="LeaveNavigation()">{{type.name}}</router-link>
							</dd>
						</dl>

					</div>
				</div>
	          	
	          </div>
	        </div>
	        <ul><li>服装城</li><li>特色购物</li><li>优惠促销</li><li>限时秒杀</li><li>品牌专区</li><li>服务中心</li></ul>
	      </div>
	      <div class="nav-line"></div>
	    </div>
</template>

<script>
	import ServerData from './url'
	export default{
		name: 'mainNavigation',
		watch: {
		   	'$route' (to, from) {
		      	// 对路由变化作出响应...
		      	if(this.$route.path!="/"){
					this.ifGoodsList = false
					this.categoryShow = false
				}
		      	if(this.$route.path=="/"){
					this.ifGoodsList = true
					this.categoryShow =true
				}
		    }
		},
		data:function(){
			return{
				hoverIndex:-1,
				categoryShow:true,
				ClassificationGoods:[],
				ifGoodsList:true,
				serverUrl:ServerData.serverUrl()
			}
		},
		methods:{
			HoverClassification(){
				this.categoryShow = true
			},
			LeaveClassification(){
				this.categoryShow = false
			},
			IfGoodsList(){
				if(this.$route.path=="/"){
					this.ifGoodsList = true
					this.categoryShow =true
				}
				if(this.$route.path!="/"){
					this.ifGoodsList = false
					this.categoryShow =false
				}
			},
			HoverNavigation(i){
				this.hoverIndex = i;
			},
			LeaveNavigation(){
				this.hoverIndex = -1;
			},
			fetchClassificationGoods(){
//				this.$http.get(this.serverUrl+"ClassificationGoods")
//	  				.then(function(response){
////						console.log(response);
//						this.ClassificationGoods = response.body
////						console.log(this.ClassificationGoods)
//				})
  				this.$http.get(this.serverUrl+"cl/selectClassById")
  				.then(function(response){
//						console.log(response);
					this.ClassificationGoods = response.body
//						console.log(this.ClassificationGoods)
  				})
			}
		},
		created(){
			this.IfGoodsList();
			this.fetchClassificationGoods();
		}
	}
</script>

<style>
.white{background: orange;}
.nav-line{width:100%;height:2px;background:#b1191a;}
.nav .wrap{height:45px;margin-top:8px;}
.nav-category{width: 210px;height:100%;float:left;}
.nav-category-tl{background:#b1191a;color: #fff;text-align:center;font-weight:700;line-height:45px;}
.nav-category-tl a{color:#fff;text-decoration:none;}
.nav ul{list-style:none;float:left;margin:0;padding:0}
.nav li{font:16px "Microsoft YaHei";padding: 0 25px;line-height:45px;float:left;}
.wrap{width:1220px;margin:0 auto;}
.header .wrap{overflow:hidden;padding-top:10px;}
.nav .wrap{height:45px;margin-top:8px;}
.category{width:210px;background: #c81623;position:absolute;padding-bottom: 10px;display:none;padding-top: 2px;z-index:19}
.category a{text-decoration:none;}
.category-main{height:30px;font-size:14px;float:left;line-height: 30px;font-weight: 400;}
.category-main a{color:#fff;display:block;width:210px;height: 30px;line-height:30px;text-indent: 20px;}
.category-main .on{background:#fff;color:#555;font-weight:700;position:relative;}
.category-sub{width:477px;min-height:238px;background: #f7f7f7;border:1px solid #DDD;position:absolute;left:210px;padding:5px 0;z-index:20;}
.category dl{margin:10px 10px;font-size:13px;color:#ccc;border-bottom:1px solid #eee;overflow:hidden;}
.category dd{float:left;width:375px;}
.category dl a{padding:0 10px;margin-bottom:10px;display:block;float:left;}
.category dt a{color: #E4393C;font-weight:700;width:62px;}
.category dd a{color:#666;border-left:1px solid #ccc;}
.category dd a:hover{color:#E4393C;}
</style>