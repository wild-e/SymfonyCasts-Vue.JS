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
        <div class="row">
            <div class="col-xs-12 col-6 mb-2 pb-2">
                TODO - load some products!!!!
            </div>
        </div>
        <div class="row">
            <!-- kebab-case also work and is nicer in template rendering -->
            <legend-component :title="legend" />
        </div>
    </div>
</template>

<script>
import LegendComponent from './legend';


export default {
    name: 'Catalog',
    components: {
        LegendComponent,
    },
    data() {
        return {
            legend: 'Shipping takes 10-12 weeks, and products probably won\'t work',
        };
    },
};
</script>
