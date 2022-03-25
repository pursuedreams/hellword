// ------------------------------------------------------------------------------
// name: router 路由
// author: cxx
// created: 2020.07.08
// describe: vue 路由属于前端路由，所谓前端路由即浏览器地址变化后，并不会发送请求到服务器，
// 					 而是由 JS 监听相应的事件并更新页面视图。前端路由的好处是：页面不会重新加载、用户体验好，
// 					 且支持地址历史记录的前进、后退。 前端路由的底层实现有主要有两种方法：一种是 使用 html5
// 					 的 history.replaceState() 或 history.pushState() ，IE9 以下不支持，使用这种方法修改地址，
// 					 可以通过 window.onpopstate监听到变化，从而更新视图。另外一种方法是使用 location.hash ，IE9 以下支持，
// 					 这种方法修改地址后，可以通过 window.onhashchange 监听到变化。vue 路由默认使用的是  html5 的 history.pushState()  ，
// 					 所以如果需要兼容低版本的 IE，可以配置成 hash 模式 。因为前端路由具有上述所提到的的优点（页面不会重新加载、用户体验好，且支持地址历史记录的前进、后退），
// 					 所以，现在很多网站都采用了前端路由，而不使用后端路由，这种 网站也叫做 SPA
// ------------------------------------------------------------------------------
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


// 路由配置
const routesConfig = [
	{ path: '/', name: 'home', component: () => import('@/views/home') },
	{ path: '/home', name: 'Home', component: () => import('@/views/home'), meta: { title: '首页', cache: false }  },
	{ path: '/other', name: 'Other', component: () => import('@/views/other'), meta: { title: '其他', cache: false } },
	{ path: '/cssgrid', name: 'Other', component: () => import('@/views/cssgrid'), meta: { title: 'cssgrid', cache: false } },
	{ path: '/containerdisplay', name: 'Containerdisplay', component: () => import('@/views/cssgrid/containerdisplay'), meta: { title: 'containerdisplay', cache: false } },
	{ path: '/containergap', name: 'containergap', component: () => import('@/views/cssgrid/containergap'), meta: { title: 'containergap', cache: false } },
	{ path: '/containerareas', name: 'containerareas', component: () => import('@/views/cssgrid/containerareas'), meta: { title: 'containerareas', cache: false } },
	{ path: '/containerjustify', name: 'containerjustify', component: () => import('@/views/cssgrid/containerjustify'), meta: { title: 'containerjustify', cache: false } },
	// js
	{ path: '/js', name: 'js', component: () => import('@/views/js'), meta: { title: 'js', cache: false } },
	// 拖动表格排序
	{ path: '/table', name: 'Table', component: () => import('@/views/table'), meta: { title: 'table', cache: false } },
	// svg
	{ path: '/svg', name: 'svg', component: () => import('@/views/svg'), meta: { title: 'svg', cache: false } },
	// cascader
	{ path: '/cascader', name: 'cascader', component: () => import('@/views/cascader'), meta: { title: 'cascader', cache: false } },
	// cascader
	{ path: '/testCascade', name: 'testCascade', component: () => import('@/views/cascader/testCascade'), meta: { title: 'testCascade', cache: false } },
];


// 创建路由实例
const router = new Router({
	routes: routesConfig
});


// 自动根据 meta.title 设置页面标题
router.beforeEach((to, from, next) => {
	if (to.meta.title) {
		console.log(document.title, "document.title", to);
		document.title = to.meta.title;
	}
	next();
});

export default router;
