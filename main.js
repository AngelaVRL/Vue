import ProductCard from "./Product.js";

const { createApp } = Vue;

createApp({
  components: { ProductCard },

  data() {
    return {
      products: [],
      search: ""
    };
  },

  computed: {
    filteredProducts() {
      return this.products.filter(product =>
        product.name.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  },

  mounted() {
    fetch("Producto.json")
      .then(response => response.json())
      .then(data => {
        this.products = data;
      })
      .catch(error => {
        console.error("Error cargando productos:", error);
      });
  },

  methods: {
    comprar(producto) {
      alert(`Compraste: ${producto.name}`);
    }
  },

  template: `
    <div class="container">
      <h1>Tienda de Ropa</h1>

      <!-- v-model -->
      <input
        type="text"
        placeholder="Buscar producto..."
        v-model="search"
        style="padding:8px; margin-bottom:20px; width:300px;"
      />

      <div class="grid">
        <ProductCard
          v-for="item in filteredProducts"
          :key="item.id"
          :product="item"
          @buy="comprar"
        />
      </div>
    </div>
  `
}).mount("#app");