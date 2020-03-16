// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Head1 from './components/Head1'
import MainNavigation from './components/MainNavigation'
import MallContent from './components/MallContent'
import Bottom from './components/Bottom'
import MostBottom from './components/BottomMost'
import GoodsList from './components/GoodsList'
import ShoppingCart from './components/ShoppingCart'
import GoodsInformation from './components/GoodsInformation'
import Top from './components/Top'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)

//设置路由
const router = new VueRouter({
	mode:'history',
	base:__dirname,
	routes:[
		{
			path:"/",
			components:{
				top:Top,
				head1:Head1,
				mainNavigation:MainNavigation,
				mallContent:MallContent,
				bottom:Bottom,
				mostBottom:MostBottom
			}
		},
		{
			path:"/goodsList",
			components:{
				top:Top,
				head1:Head1,
				mainNavigation:MainNavigation,
				mallContent:GoodsList,
				bottom:Bottom,
				mostBotttom:MostBottom
			}
		},
		{
			path:"/shoppingCart/:uid",
			components:{
				top:Top,
				head1:Head1,
				mainNavigation:MainNavigation,
				mallContent:ShoppingCart,
				bottom:Bottom,
				mostBottom:MostBottom
			}
		},
		{
			path:"/goodsInformation/:id",
			components:{
				top:Top,
				head1:Head1,
				mainNavigation:MainNavigation,
				mallContent:GoodsInformation,
				bottom:Bottom,
				mostBottom:MostBottom
			}
		}
	]
})

/* eslint-disable no-new */
new Vue({
	router,
	template: `
		<div id="app">
			<router-view name="top"></router-view>
		    <router-view name="head1"></router-view>
		    <router-view name="mainNavigation"></router-view>
		    <router-view name="mallContent"></router-view>
		    <router-view name="bottom"></router-view>
		    <router-view name="mostBottom"></router-view>
		  
	    </div>
	`
}).$mount("#app")
