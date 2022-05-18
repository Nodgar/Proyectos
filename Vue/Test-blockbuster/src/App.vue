<script setup>
import navmenu from "./components/navmenu-component.vue";
</script>
<template>
  <div class="content">
    <div class="content-col side">
      <div class="sidebar"><hr /></div>
    </div>
    <div class="content-col main">
      <div class="container">
        <div class="center">
          <navmenu></navmenu>
        </div>
        <div class="footer">
          <div class="address">
            <p>Avanade Spain (Madrid)</p>
            <p>
              P.º de la Finca, 1, Bloque 2, 28223 Pozuelo de Alarcón, Madrid
            </p>
            <p>Telf: 917 87 80 00</p>
            <p>L-J: 9:00 - 19:00 y V 9:00 - 15:00</p>
          </div>
          <div class="address">
            <p>Avanade Spain (Barcelona)</p>
            <p>Passeig de Sant Gervasi, 51, 08022 Barcelona</p>
            <p>934 45 93 00</p>
            <p>L-J: 9:00 - 19:00 y V 9:00 - 15:00</p>
          </div>
          <div class="address">
            <p>Avanade Spain (Málaga)</p>
            <p>
              Avda. Severo Ochoa 21, Parque Tecnológico de Andalucía Complejo
              I+D 6 – Edificio Sur, fincas 17 y 18, 29590 Málaga
            </p>
            <p>952 04 57 50</p>
            <p>L-J: 9:00 - 19:00 y V 9:00 - 15:00</p>
          </div>
        </div>
      </div>
    </div>
    <div class="content-col side">
      <div class="sidebar"><hr /></div>
    </div>
  </div>
</template>
<style>
body {
  background-color: #16345a;
}
.content {
  display: flex;
}
.content-col {
  height: 100%;
}
.side {
  margin: 2rem;
}
.main {
  flex: 6;
  height: 100vh;
}
.sidebar hr {
  border: none;
  border-left: 1px solid hsla(200, 10%, 50%, 100);
  background-color: #d89513;
  padding: 1rem;
  height: 100vh;
  width: 1px;
  border-radius: 1rem;
}
.container {
  display: flex;
  min-height: 100%;
  flex-direction: column;
  justify-content: space-between;
  min-width: 100%;
  margin: 0;
  background-color: #16345a;
}
.center {
  flex: 7;
}
.footer {
  flex: 1;
}
.address {
  color: white;
  border: white 1px solid;
  padding: 1rem;
}
</style>
