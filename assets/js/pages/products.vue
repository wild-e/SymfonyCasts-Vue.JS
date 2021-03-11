// this is called a single file application component
<template>
    <div class="container-fluid">
        <div class="row">
            <aside class="col-xs-12 col-3">
                <sidebar-component />
            </aside>
            <div class="col-xs-12 col-9">
                <catalog-component />
            </div>
        </div>
    </div>
</template>

<script>
import catalogComponent from '@/components/catalog';
import sidebarComponent from '@/components/sidebar';


export default {
    // name is for debugging
    name: 'Products',
    components: {
        // LegendComponent,
        catalogComponent,
        sidebarComponent,
    },
    // data is just about creating variables
    // data() {
    //     return {
    //         legend: 'Shipping takes 10-12 weeks, and products probably won\'t work',
    //     };
    // },
    //  Shorter syntax where you can't use .this variable
    // data: () => ({
    //     legend: 'Shipping takes 10-12 weeks, and products probably won\'t work',
    // }),
};
</script>
