<template>
  <div>
    <h1>{{ getServices.name }}</h1>
    <div>
      <p>{{ getServices.description }}</p>
    </div>
    <div class="card-container">
      <div v-for="(pelicula, index) in getServices.films" :key="pelicula">
        <div class="card">
          <img
            src="../assets/peliculas/terror/peli1.jpg"
            alt="imagen pelicula"
            class="card-image"
          />
          <h3 class="card-title">{{ getServices.films[index].name }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import servicios from "../../data.json";
export default {
  data() {
    return {};
  },

  // created() {
  // this.currentGenre = this.$route.params.miau;
  //},

  computed: {
    getServices: function () {
      let serv;
      let seccion;
      // Obtenemos las keys del Json
      let serviceKeys = Object.keys(servicios.services);
      //Establecemos el valor de nuestras variables

      let target = serviceKeys.some(function (key) {
        if (servicios.services[key].slug === "peliculas") {
          seccion = servicios.services[key];
          return seccion;
        }
      });

      // si se ha encontrado un valor válido con el criterio
      // filtramos los géneros
      if (target) {
        let genreKeys = Object.keys(seccion.genres);
        genreKeys.some((genreKey) => {
          if (this.$route.params.miau === seccion.genres[genreKey].slug) {
            serv = seccion.genres[genreKey];
            return serv;
          }
        });
      }
      console.log(serv.films[0]);
      return serv;
    },
  },
  getValue() {},
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Londrina+Outline&family=Yellowtail&display=swap");
.card-container {
  display: flex;
}
.card {
  margin: 1rem;
  width: 150px;
  height: 200px;
  background-color: #333;
  border-radius: 10px;
  outline: 1px solid rgb(0, 0, 0, 1);
  position: relative;
  overflow: hidden;
}

.card-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.6;
  transition: transform 0.75s;
}
.card:hover .card-image {
  transform: scale(1.15);
}
.card-title {
  position: absolute;
  left: 15px;
  bottom: 15px;
  font-size: 29px;
  color: white;
  text-shadow: 0, 0, 1px;
  font-family: "Londrina Outline", cursive;
}
</style>
