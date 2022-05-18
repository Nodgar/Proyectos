<template>
  <div>
    <div class="title">
      <h1>BLOCKBUSTER</h1>
    </div>
    <nav class="router">
      <div class="row">
        <div class="col nav">
          <router-link to="/home"> Inicio </router-link>
        </div>
        <div class="col nav">
          <router-link to="/about"> Nosotros </router-link>
        </div>
        <div class="col nav">
          <router-link to="/peliculas"> Peliculas </router-link>
        </div>
        <div class="col nav">
          <router-link to="/juegos"> Juegos </router-link>
        </div>
      </div>
      <div class="row">
        <div class="col"><hr /></div>
      </div>
    </nav>
    <div class="loaded">
      <router-view></router-view>
    </div>
  </div>
</template>
<style scoped>
@import url(//db.onlinewebfonts.com/c/35267c7b4ab0c5bcab0cfec14f575460?family=Blockbuster);
.title {
  color: #ffcc00;
  font-family: Blockbuster;
  text-align: center;
  margin-bottom: 2rem;
}
.row {
  display: flex;
}
.col {
  flex: 1;
}
.col hr {
  background-color: #ffcc00;
  border: none;
  height: 1rem;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.col .active {
  font-size: 1rem;
  color: #b84e04;
  border-bottom: 0.2rem solid #b84e04;
  border-radius: 0.1rem;
}
.nav {
  text-align: center;
}
.router a {
  color: #ffcc00;
  text-decoration: none;
  font-family: Blockbuster;
  font-size: 0.8rem;
  margin: 0.3rem;
}
.router a:hover {
  font-size: 1rem;
  color: #b84e04;
}
.loaded {
  margin: 1rem;
}
</style>
