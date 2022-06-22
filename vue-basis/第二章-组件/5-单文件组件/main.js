//引入app.vue
import app form '../app.vue'

new Vue({
	el:"#root",
	template:`
		<app></app>
	`,
	components:{
		//注册组件app
		app:app
	}
})