<template>
	<div>
		<!-- 使用组件 -->
		<school><school/>
		<student><student/>
	</div>
</template>

<script>
	//引入组件
	import school form '../school.vue'
	import student form '../student.vue'
	
	export default{
		name:"App",
		//注册组件
		components:{
			school:school,
			student:student
		}
		
		
	}
</script>

<style>
</style>
