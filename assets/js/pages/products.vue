// this is called a single file application component
<template>
    <div class="container-fluid">
        <div class="row">
            <aside :class="asideClass">
                <sidebar-component
                    :collapsed="sidebarCollapsed"
                    :current-category-id="currentCategoryId"
                    @toggle-collapsed="toggleSidebarCollapsed"
                />
            </aside>
            <div :class="contentClass">
                <catalog-component />
            </div>
        </div>
    </div>
</template>

<script>
import catalogComponent from '@/components/catalog';
import sidebarComponent from '@/components/sidebar';
import { getCurrentCategoryId } from '@/services/page-context';

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
    data() {
        return {
            sidebarCollapsed: false,
        };
    },
    computed: {
        asideClass() {
            return this.sidebarCollapsed ? 'aside-collapsed' : 'col-xs-12 col-3';
        },
        contentClass() {
            return this.sidebarCollapsed ? 'col-xs-12 col-11' : 'col-xs-12 col-9';
        },
        currentCategoryId() {
            return getCurrentCategoryId;
        },
    },
    methods: {
        toggleSidebarCollapsed() {
            this.sidebarCollapsed = !this.sidebarCollapsed;
        },
    },
};
</script>
