<template>
  <div id="app">
    <div>
      <!-- ------------------------- -->
      <!-- ----NAVBAR CREATION------ -->
      <!-- ------------------------- -->
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="#">
          <router-link to="/">Home</router-link>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">
              <router-link to="/ecolocmap">EcolocMAp</router-link>
            </b-nav-item>
            <b-nav-item href="#">
              <router-link to="/recycle">Recycle</router-link>
            </b-nav-item>
            <b-nav-item href="#">
              <router-link to="/myresults">MyResults</router-link>
            </b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <!-- <b-nav-item href="#" right>
              <router-link to="/settings">Settings</router-link>
            </b-nav-item>-->
            <b-nav-item href="#" right>
              <router-link to="/account">Account</router-link>
            </b-nav-item>
            <b-nav-item href="#" right>
              <router-link to="/about">About</router-link>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
  position: relative;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
