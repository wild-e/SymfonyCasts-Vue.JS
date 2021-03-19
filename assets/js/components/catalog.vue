<template>
    <!-- This is a smart component. (like a controller in symfony) it holds the logic -->
    <!-- for a component you have to create an outer element -->
    <div>
        <div class="row">
            <div class="col-3">
                <title-component
                    :current-category-id="currentCategoryId"
                    :categories="categories"
                />
            </div>
            <div class="col-9">
                <search-bar-component
                    @search-products="onSearchProducts"
                />
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
    </div>
</template>

<script>
import { fetchProducts } from '@/services/products-service';
import ProductList from '@/components/product-list';
import TitleComponent from '@/components/title';
import LegendComponent from './legend';
import SearchBarComponent from './search-bar.vue';


export default {
    name: 'Catalog',
    components: {
        LegendComponent,
        ProductList,
        TitleComponent,
        SearchBarComponent,
    },
    props: {
        currentCategoryId: {
            type: String,
            default: null,
        },
        categories: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            products: [],
            loading: false,
            legend: 'Shipping takes 10-12 weeks, and products probably won\'t work',
            searchTerm: null,
        };
    },
    // computed properties cannot be async -- use them to calculate synchronous
    // computed: {
    //     filteredProducts() {
    //         if (!this.searchTerm) {
    //             return this.products;
    //         }

    //         return this.products.filter((product) => (
    //             product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    //         ));
    //     },
    // },
    // last resort to watch if prop value changes or to perform async op on data change
    watch: {
        // currentCategoryId(newVal, oldVal) {
        //     console.log(newVal, oldVal);
        // },
        currentCategoryId() {
            this.loadProducts();
        },
    },
    // callback event -> do stuff just after a component is mounted in the DOM
    created() {
        // axios.get returns a promise
    //     axios.get('/api/products').then((response) => {
    //         console.log(response);
    //     });
    // await axios.get is a response
        this.loadProducts();
    },
    methods: {
        /**
         * Handles a change in the SearchTerm provided by the search bar and fetches new products
         * @param {string } term
         */
        onSearchProducts({ term }) {
            this.searchTerm = term;
            this.loadProducts();
        },
        async loadProducts() {
            this.loading = true;

            let response;
            try {
                response = await fetchProducts(this.currentCategoryId, this.searchTerm);

                this.loading = false;
            } catch (e) {
                this.loading = false;

                return;
            }
            this.products = response.data['hydra:member'];
        },
    },
};
</script>
