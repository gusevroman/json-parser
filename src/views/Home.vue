<template>
	<div class="row">
		<div class="col s6 offset-s3">
			<router-link tag="button" class="btn" to="/list">
				Обработать данные
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: "Home",
	components: {}
};
</script>

<style lang="scss" scoped>
.btn {
	margin: 2rem;
}
</style>
