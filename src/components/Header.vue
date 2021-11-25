<template>
  <div class="ct-header">
    <router-link to="/"><img class="img-logo" src="../assets/logoJapones.svg" alt="logo"></router-link>
    <router-link to="/create">CREATE</router-link>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$colorPrincipal: #1664A4;
$colorSecondary: #F4F4F4;
$filterPrincipal: invert(26%) sepia(19%) saturate(6454%) hue-rotate(189deg) brightness(99%) contrast(83%);
@mixin displayFlex{
  display: flex;
  justify-content: center;
  align-items: center;
}
.ct-header {
  @include displayFlex();
  width: 100vw;
  height: 70px;
  background-color: $colorSecondary;
  justify-content: space-between;
}

.img-logo{
  filter: $filterPrincipal;
  width: 70%;
}
a {
  font-size: 1.5rem;
  color: $colorPrincipal;
  text-decoration: none;
  margin-right: 5%;
}
</style>
