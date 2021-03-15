<template>
    <!-- for a component you have to create an outer element -->
    <div>
        <div class="row">
            <div class="col-12">
                <h1>
                    Products
                </h1>
            </div>
        </div>

        <product-list :products="products" />

        <div class="row">
            <!-- kebab-case also work and is nicer in template rendering -->
            <legend-component :title="legend" />
        </div>
    </div>
</template>

<script>
// import Axios bundle to make ajax requests
import axios from 'axios';
import ProductList from '@/components/product-list';
import LegendComponent from './legend';


export default {
    name: 'Catalog',
    components: {
        LegendComponent,
        ProductList,
    },
    data() {
        return {
            products: [],
            legend: 'Shipping takes 10-12 weeks, and products probably won\'t work',
        };
    },
    // callback event :do stuff just after a component is mounted in the DOM
    async mounted() {
        // axios.get returns a promise
    //     axios.get('/api/products').then((response) => {
    //         console.log(response);
    //     });
    // await axios.get is a response
        const response = await axios.get('/api/products');
        this.products = response.data['hydra:member'];
    },
};
</script>
