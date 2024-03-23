<template>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h2 class="text-center">Login</h2>
              <form @submit.prevent="login">
                <div class="form-group">
                  <label for="username">Username</label>
                  <input v-model="username" type="text" class="form-control" id="username" placeholder="Enter username">
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input v-model="password" type="password" class="form-control" id="password" placeholder="Password">
                </div>
                <button type="submit" class="btn btn-primary btn-block">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginPage',
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {
        // Static username and password
        const validUsername = 'admin';
        const validPassword = 'admin';
  
        // Check if the entered credentials match
        if (this.username === validUsername && this.password === validPassword) {
          // Set logged in flag in localStorage
          localStorage.setItem('isLoggedIn', 'true');
          // Redirect to ShoppingCart.vue (or Home if imported as Home)
          this.$router.push({ name: 'Home' });
        } else {
          alert('Invalid username or password');
        }
      }
    }
  };
  </script>
  
  <style>
  /* Add custom styles if needed */
  </style>
  