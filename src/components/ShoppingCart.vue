<template>
	<div class="content">
		<div class="wrap">
			<div id="content">
				<div class="uc">
					<div class="uc-menu">
						<div class="uc-menu-photo">
							<img src="../../static/avatar.png" alt="用户头像">
						</div>
						<dl>
							<dt>我的交易</dt>
							<dd>
								<a href="cart.html">我的购物车</a>
							</dd>
							<dd>我的订单</dd>
							<dd>评价管理</dd>
						</dl>
						<dl>
							<dt>我的账户</dt>
							<dd>个人资料</dd>
							<dd>密码修改</dd>
							<dd>收货地址</dd>
						</dl>
					</div>
					<div class="uc-content">
						<div class="uc-content-title">我的购物车</div>
						<table class="shopcart">
							<tr>
								<th width="60">
									<a href="#" class="shopcart-checkall" @click="allChoose()">全选</a>
								</th>
								<th class="shopcart-lt">商品名称</th>
								<th width="150">单价(元)</th>
								<th width="105">数量</th>
								<th width="90">操作</th>
							</tr>

							<tr class="shopcart-item" v-for="shooping in shoopingCartUid">
								<td><input type="checkbox" class="shopcart-check" v-model="chooseGoods" :value="shooping" @change="chooseBefore(shooping)" @click="choose(shooping)"></td>
								<td class="shopcart-lt">
									<a href="" target="_blank" class="bold">{{shooping.goods[0].title}}</a>
								</td>
								<td><span class="shopcart-price">{{shooping.goods[0].money}}</span></td>
								<td>
									<button class="shopcart-num-sub" @click="subNumber(shooping)">-</button>
									<input class="shopcart-num" type="text" :value="shooping.gnumber" readonly>
									<button class="shopcart-num-add" @click="addNumber(shooping)">+</button>
									<input class="shopcart-id" type="hidden" value="1">
									<input class="shopcart-stock" type="hidden" value="2">
								</td>
								<td>
									<a href="#" class="shopcart-del" @click="deleteGoods(shooping.id)">删除</a>
								</td>
							</tr>
							
							<tr class="shopcart_sum-act">
								<td>
									<a href="#" class="shopcart-checkall" @click="allChoose()">全选</a>
								</td>
								<td class="shopcart-rt" colspan="4">
									共<span class="shopcart-sum">{{totalNum}}</span>件商品 总计：<span class="shopcart-total">¥<span>&nbsp;{{totalMoney}}</span></span>
									<input type="submit" value="提交订单" class="shopcart-order">
								</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import ServerData from './url'
	export default {
		name: 'shoppingCart',
		data() {
			return {
				uid:-1,
				shoopingCartUid:[],
				serverUrl:ServerData.serverUrl(),
				totalNum:0,
				totalMoney:0,
				chooseGoods:[],
				isAllChoose:false
			}
		},
		methods: {
			deleteGoods(id){
				this.$http.get(this.serverUrl+"gl//"+id)
	  				.then(function(response){
//						console.log(response);
						this.goodsOne = response.body
  				})	
			},
			choose(shooping){
				if(this.chooseGoods.indexOf(shooping) != -1){
					this.totalMoney-=shooping.goods[0].money * shooping.gnumber
					this.totalNum-= shooping.gnumber
				}
			},
			chooseBefore(shooping){
				if(this.chooseGoods.length==0 || this.chooseGoods.indexOf(shooping) == -1){
					return
				}
				this.totalMoney+= shooping.goods[0].money * shooping.gnumber
				this.totalNum+= shooping.gnumber
			},
			allChoose(){
				if(this.isAllChoose){
					this.chooseGoods=[]
					this.isAllChoose = false
					this.totalMoney = 0
					this.totalNum = 0
					return
				}
				this.chooseGoods = []
				this.totalMoney=0
				this.totalNum=0
				for(var i = 0;i < this.shoopingCartUid.length;i++){
					this.chooseGoods.push(this.shoopingCartUid[i])
					this.totalMoney+= this.shoopingCartUid[i].goods[0].money * this.shoopingCartUid[i].gnumber
					this.totalNum+= this.shoopingCartUid[i].gnumber
				}
				this.isAllChoose = true
			},
			subNumber(shooping){
				if(shooping.gnumber <= 1){
					return
				}
				var i = shooping.gnumber - 1
				shooping.gnumber = i
				if(this.chooseGoods.indexOf(shooping) != -1){
					this.totalMoney-=this.chooseGoods[0].goods[0].money
					this.totalNum--
				}
				let updateShopping = {
					gnumber : i,
					uid : shooping.uid,
					goods : shooping.goods
				}
				this.$http.put(this.serverUrl+"UserShopping/"+shooping.id,updateShopping)
					.then(function(response){

					})
			},
			addNumber(shooping){
				var i = shooping.gnumber+1
				shooping.gnumber = i
				if(this.chooseGoods.indexOf(shooping) != -1){
					this.totalMoney+=this.chooseGoods[0].goods[0].money
					this.totalNum++
				}
//				let updateShopping = {
//					gnumber : i,
//					id:shooping.id
//				}
				this.$http.post(this.serverUrl+"US/update",{id:shooping.id,gnumber:i})
					.then(function(response){

					})

			},
			totalNumber(gnumber){
				this.totalNum += gnumber
			},
			fetchShoppingCart(){
				this.$http.get(this.serverUrl+"gl/selectGoodByUserId/"+this.uid)
  				.then(function(response){
//					console.log(response);
					this.shoopingCartUid = response.body
//					for(var i = 0;i < this.shoopingCartUid.length;i++){
//						this.totalNum += this.shoopingCartUid[i].gnumber
//						this.totalMoney += this.shoopingCartUid[i].goods[0].money * this.shoopingCartUid[i].gnumber
//					}

//					var allId = "";
//					for (var i = 0;i < this.shoopingCartUid.length;i++) {
//						if(i==0){
//							allId+="id="
//							allId+=this.shoopingCartUid[i].gid
//							continue
//						}
//						allId+="&id="
//						allId+=this.shoopingCartUid[i].gid
//					}
//					this.$http.get(this.serverUrl+"goodsList/?"+allId)
//						.then(function(response){
//							this.goods = response.body
//						})
				})	
			}
		},
		created(){
			this.uid = this.$route.params.uid
			this.fetchShoppingCart()
		}
	}
</script>

<style>
.news-content{list-style:none;padding:0;margin:0;text-indent:20px;line-height:25px;font-size:12px;}
.news-content li:hover{background:#eee;cursor:pointer;}
.news-content a{color:#555;text-decoration:none;}
.news-content a:hover{color:#333;}
.wrap{width:1220px;margin:0 auto;}
.header .wrap{overflow:hidden;padding-top:10px;}
.nav .wrap{height:45px;margin-top:8px;}
.uc{margin:20px auto;overflow:hidden;}
.uc-menu{float:left;width:130px;padding:10px;border:1px solid #D5E5F5;margin-right:10px;background-color:#F4F7FB;}
.uc-menu-photo{width:100px;height:100px;margin:15px auto;padding:2px;background-color:#F4F7FB;cursor:pointer;}
.uc-menu-photo img{width:100px;height:100px;border:1px solid #D5E5F5;border-radius:5px;background-color:#F4F7FB;}
.uc-content{float:left;width:1035px;padding:0 10px 10px;border:1px solid #D5E5F5;}
.uc-content-title{margin-bottom:10px;font-size:14px;border-bottom:1px solid #AED2FF;line-height:30px;height:30px;font-weight:700;text-indent:15px;color:#333;font-family:'Microsoft YaHei';}
.uc-content table{border-collapse:collapse;font-size:12px;font-family:Verdana,"Microsoft YaHei";color:#333;}
.uc-menu dl{border-bottom:1px solid #D5E5F5;box-shadow:0 1px 0 #FFF;margin:0;padding-left:10px;padding-bottom:10px;margin-bottom:10px;font-size:12px;font-family:'Microsoft YaHei';}
.uc-menu dl dt{font-weight:bold;line-height:30px;height:30px;}
/*.uc-menu dl dd{margin:0;padding-left:10px;height:25px;line-height:25px;background:url('./images/ico1.png') no-repeat;}*/
.uc-menu dl dd a{color:#455E65;text-decoration:none;}
.uc-menu dl dd a:hover{color:#7FB8D2;}
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