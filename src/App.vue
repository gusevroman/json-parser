<template>
	<div class="row">
		<Home />
		<Error v-show="error" />
    <div class="container">
      <router-view />
    </div>
	</div>
</template>

<script>
export default {
	name: "Main-page",
	components: {
		Home: () => import("@/views/Home"),
		List: () => import("@/views/List"),
		Error: () => import("@/components/Error"),
	}
};
</script>

<style lang="scss">
  @import "~materialize-css";


</style>
