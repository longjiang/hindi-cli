<template>
  <div id="hindi-zero-to-hero">
    <div class="container-fluid bg-dark pt-4 pb-4 pl-0 pr-0">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <img
              src="@/assets/img/logo-hi-zth-light.png"
              alt="Hindi Zero to Hero"
              class="logo"
            />
          </div>
        </div>
      </div>
    </div>
    <keep-alive>
      <router-view ref="routerView" />
    </keep-alive>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style>
.logo {
  height: 6rem;
}
</style>
