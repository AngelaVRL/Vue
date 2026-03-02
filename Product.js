export default {
    name: "ProductCard",
    props: {
        product: Object
    },
    template: `
        <div class="card" :style="{ opacity: product.stock ? 1 : 0.5 }">
            <div class="image-container">
                <!-- Badge de descuento -->
                <div v-if="product.discount" class="discount-badge">
                    -{{ product.discount }}%
                </div>

                <!-- Imagen -->
                <img :src="product.image" alt="producto" />
            </div>

            <h3>{{ product.name }}</h3>
            <p>$ {{ product.price }}</p>

            <!-- Condicional stock -->
            <p v-if="product.stock" style="color:green">Disponible</p>
            <p v-else style="color:red">Agotado</p>

            <button
                :class="product.stock ? 'btn-activo' : 'btn-desactivado'"
                @click="$emit('buy', product)"
                :disabled="!product.stock">
                Comprar
            </button>

            

        </div>
    `
};
