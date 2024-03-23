<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li v-if="isLoggedIn" class="nav-item">
              <router-link to="/login" class="nav-link">Login</router-link>
            </li>
            <li v-if="!isLoggedIn" class="nav-item">
              <button @click="logout" class="nav-link btn btn-link">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    isLoggedIn() {
      // Check if user is logged in using flag from localStorage
      return localStorage.getItem('isLoggedIn') === 'true';
    }
  },
  methods: {
    logout() {
      // Clear logged in flag in localStorage
      localStorage.removeItem('isLoggedIn');
      // Redirect to login page
      this.$router.push('/login');
    }
  }
};
</script>

<style>
/* Add custom styles if needed */
</style>
