<template>
	<div class="content">
		<div class="wrap">
			<div id="content">
				<div class="slide">
					<ul></ul>
					<li style="list-style: none;" v-for='(image,index) in ShufflingFigure' :key='index' v-show='index===mark'>
						<a :href="image.url"><img :src="'../../static/img/scrollFigure/'+image.imgPath"></a>
					</li>
					<div class="bullet">
						<span v-for='(item,index) in ShufflingFigure.length' :class="{'active':index===mark,red:changeRed==index}" @click='change(index)'></span>
					</div>

				</div>
				<div class="news">
					<div class="news-title">最新动态</div>
					<ul class="news-content">
						<li v-for="dynamic in Dynamics">
							<a href="dynamic.url">{{dynamic.title}}</a>
						</li>
					</ul>
				</div>
				<div class="clear"></div>
				<div class="best">
					<div class="best-title">精品推荐</div>
					<div class="best-content"></div>
					
					<ul class="item" v-for="recommended in recommendeds">
						<li>
							<router-link target="_blank" v-bind:to="'/goodsInformation/'+recommended.gid">
									<img :src="'../../static/img/goodsList/'+recommended.imgPath" alt="+recommended.title+">
							</router-link>
							<!--<a href="#" target="_blank"><img :src="'../../static/img/recommended/'+recommended.imgPath" alt=""></a>-->
						</li>
						<li class="goods">
							<router-link target="_blank" v-bind:to="'/goodsInformation/'+recommended.gid">{{recommended.title}}</router-link>
							<!--<a href="#" target="_blank">{{recommended.title}}</a>-->
						</li>
						<li class="price">￥{{recommended.money}}</li>
					</ul>
					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import ServerData from './url'
	export default {
		name: 'mallContent',
		data: function() {
			return {
				mark: 0,
				timer: null,
				ShufflingFigure: [],
				changeRed:0,
				recommendeds:[],
				Dynamics:[],
				serverUrl:ServerData.serverUrl()
			}
		},
		methods: {
//			fetchDynamic(){
//				this.$http.get(this.serverUrl+"Dynamic")
//				.then(function(response){
////						console.log(response);
//					this.Dynamics = response.body
//				})
//			},
//			fetchShuffingFigure(){
//				this.$http.get(this.serverUrl+"ShufflingFigure")
//	  				.then(function(response){
////						console.log(response);
//						this.ShufflingFigure = response.body
//				})
//			},
//			fetchRecommended(){
//				this.$http.get(this.serverUrl+"recommended")
//	  				.then(function(response){
////						console.log(response);
//						this.recommendeds = response.body
//				})	
//			},
			fetchDynamic(){
				this.$http.get(this.serverUrl+"dy/selectAll")
  				.then(function(response){
//						console.log(response);
					this.Dynamics = response.body
  				})
			},
			fetchShuffingFigure(){
				this.$http.get(this.serverUrl+"fi/selectAll")
	  				.then(function(response){
//						console.log(response);
						this.ShufflingFigure = response.body
  				})
			},
			fetchRecommended(){
				this.$http.get(this.serverUrl+"re/selectAllGR")
	  				.then(function(response){
//						console.log(response);
						this.recommendeds = response.body
				})	
			},
			change(i) {
				this.mark = i;
				this.changeRed = i;
			},
			autoPlay() {
				this.mark++;
				this.changeRed=this.mark;
					if(this.mark === this.ShufflingFigure.length) {
						this.mark = 0
						this.changeRed=this.mark;
						return
					}
			},
//			play() {
//				setInterval(this.autoPlay, 3000)
//			}
		},
		created(){
			this.fetchRecommended();
			this.fetchShuffingFigure();
			this.fetchDynamic();
			setInterval(this.autoPlay, 3000);
		}
	}
</script>

<style>
.bullet {width: 100%;position: absolute;bottom: 10px;margin: 0 auto;text-align: center;z-index: 10;}
span {width: 0.7rem;height: 0.7rem;background: white;display: inline-block;margin-right: 0.2rem;border-radius: 50%;}
.red {background: red;}
.news-content{list-style:none;padding:0;margin:0;text-indent:20px;line-height:25px;font-size:12px;}
.news-content li:hover{background:#eee;cursor:pointer;}
.news-content a{color:#555;text-decoration:none;}
.news-content a:hover{color:#333;}
.uc-content{float:left;width:1035px;padding:0 10px 10px;border:1px solid #D5E5F5;}
.uc-content-title{margin-bottom:10px;font-size:14px;border-bottom:1px solid #AED2FF;line-height:30px;height:30px;font-weight:700;text-indent:15px;color:#333;font-family:'Microsoft YaHei';}
.uc-content table{border-collapse:collapse;font-size:12px;font-family:Verdana,"Microsoft YaHei";color:#333;}
.wrap{width:1220px;margin:0 auto;}
.header .wrap{overflow:hidden;padding-top:10px;}
.nav .wrap{height:45px;margin-top:8px;}
.service .wrap{width:1000px;}
.service .wrap:after{content:'';display:block;clear:both;}
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
.clear{clear:both}
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
</style>