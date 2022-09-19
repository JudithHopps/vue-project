<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/databinding">databinding</router-link> |
    <router-link to="/databinding2">databinding2</router-link> |
    <router-link to="/component">NestedComponent</router-link> |
    <router-link to="/Parentcomponent">ParentComponent</router-link> |
    <router-link to="/kakaologin">Kakaologin</router-link> |
    <!-- <router-link to="/Ccomponent">ChildComponent</router-link> | -->
    <!-- <router-link to="/Calculator">carculator</router-link> | -->
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
