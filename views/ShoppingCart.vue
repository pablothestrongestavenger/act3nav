<template>
<div id="app">
  <h2>Cake Shop</h2>
  <div class="product-list row">
    <div v-for="cake in cakes" :key="cake.id" class="product-item col-md-4">
      <div class="card">
        <img :src="cake.image" class="card-img-top" alt="Product Image">
        <div class="card-body">
          <h3 class="card-title">{{ cake.name }}</h3>
          <p class="card-text">PHP {{ cake.price }}</p>
          <button @click="addToCart(cake)" class="btn btn-primary">Add to Cart</button>
        </div>  
      </div>
    </div>
  </div>
  <div class="cart">
    <h2>Cart</h2>
    <div v-for="item in cart" :key="item.id">
      <h3>{{ item.name }}</h3>
      <p>Quantity: {{ item.quantity }}</p>
      <button @click="removeFromCart(item)" class="btn btn-primary">Remove</button>
    </div>
    <p>Total: PHP {{ totalPrice }}</p>
  </div>
</div>
</template>

<script>
export default {
data() {
  return {
    cakes: [
      { id: 1, name: "Blue Berry", price: 700, image: "./asset/blueberry.jpg" },
      { id: 2, name: "Red Velvet", price: 350, image: "./asset/redvelvet.jpg" },
      { id: 3, name: "Sans Rival", price: 500, image: "./asset/sansrival.jpg" },
    ],
    cart: [],
  };
},
methods: {
  addToCart(cake) {
    const existingItem = this.cart.find((item) => item.id === cake.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cart.push({ ...cake, quantity: 1 });
    }
  },
  removeFromCart(item) {
    this.cart = this.cart.filter((cartItem) => cartItem.id !== item.id);
  },
},
computed: {
  totalPrice() {
    return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  },
},
};
</script>
