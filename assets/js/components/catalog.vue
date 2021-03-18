<template>
    <!-- This is a smart component. (like a controller in symfony) it holds the logic -->
    <!-- for a component you have to create an outer element -->
    <div>
        <div class="row">
            <div class="col-12">
                <h1>
                    Products
                </h1>
            </div>
        </div>
        <product-list
            :products="products"
            :loading="loading"
        />

        <div class="row">
            <!-- kebab-case also work and is nicer in template rendering -->
            <legend-component :title="legend" />
        </div>
    </div>
</template>

<script>
import { fetchProducts } from '@/services/products-service';
import ProductList from '@/components/product-list';
import LegendComponent from './legend';


export default {
    name: 'Catalog',
    components: {
        LegendComponent,
        ProductList,
    },
    props: {
        currentCategoryId: {
            type: String,
            default: null,
        },
    },
    data() {
        return {
            products: [],
            loading: false,
            legend: 'Shipping takes 10-12 weeks, and products probably won\'t work',
        };
    },
    // callback event -> do stuff just after a component is mounted in the DOM
    async created() {
        // axios.get returns a promise
    //     axios.get('/api/products').then((response) => {
    //         console.log(response);
    //     });
    // await axios.get is a response
        const params = {};
        if (this.currentCategoryId) {
            params.category = this.currentCategoryId;
        }

        this.loading = true;

        let response;
        try {
            response = await fetchProducts(this.currentCategoryId);

            this.loading = false;
        } catch (e) {
            this.loading = false;

            return;
        }
        this.products = response.data['hydra:member'];
    },
};
</script>
