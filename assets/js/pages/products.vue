// this is called a single file application component
<template>
    <div class="container-fluid">
        <div class="row">
            <aside class="col-xs-12 col-3">
                <!-- Notice that vue accepts arrays for styling -->
                <!-- colon : is a shortcut for v-bind  -->
                <div :class="[$style.sidebar, 'p-3 mb-5']">
                    <h5 class="text-center">
                        Categories
                    </h5>
                    <ul class="nav flex-column mb4">
                        <li class="nav-item">
                            <a
                                class="nav-link"
                                href="/"
                            >All Products</a>
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link"
                                href="#"
                            >Category A</a>
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link"
                                href="#"
                            >Category B</a>
                        </li>
                    </ul>
                </div>
            </aside>
            <div class="col-xs-12 col-9">
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
        </div>
    </div>
</template>

<script>
import LegendComponent from '../components/legend';

export default {
    // name is for debugging
    name: 'Products',
    components: {
        LegendComponent,
    },
    // data is just about creating variables
    data() {
        return {
            legend: 'Shipping takes 10-12 weeks, and products probably won\'t work',
        };
    },
    //  Shorter syntax where you can't use .this variable
    // data: () => ({
    //     legend: 'Shipping takes 10-12 weeks, and products probably won\'t work',
    // }),
};
</script>

<style  lang="scss" module>
// module is to add random string after eache of underneath classes in
// order not to mess up with other classes in other files
@import '../../scss/components/light-component';

.sidebar {
    @include light-component;

    ul {
        li a:hover {
            background: $blue-component-link-hover;
        }
    }
}
</style>
