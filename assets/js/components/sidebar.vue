<template>
    <!-- Notice that vue accepts arrays for styling -->
    <!-- colon : is a shortcut for v-bind  -->
    <div
        :class="[$style.sidebar, 'p-3 mb-5']"
        :style="{ width: collapsed ? '70px' : 'auto' }"
    >
        <!-- style accepts an object and each of its properties correspond a style rule -->
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
            <li
                v-for="(category, index) in categories"
                :key="index"
                class="nav-item"
            >
                <a
                    class="nav-link"
                    :href="category.link"
                >
                    {{ category.name }}
                </a>
            </li>
        </ul>
        <hr>
        <div class="d-flex justify-content-end">
            <button
                class="btn btn-secondary btn-sm py-2 px-3"
                @click="toggleCollapsed"
                v-text="collapsed ? '+' : '-'"
            />
            <!-- or  v-on:click="toggleCollapsed" -->
            <!-- !!!!! v-text ignore any other child element -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'Sidebar',
    props: {
        testProp: {
            type: String,
            default: 'A am default value',
        },
    },
    data() {
        return {
            collapsed: false,
            categories: [
                {
                    name: 'Dot Matrix Printers',
                    link: '#',
                },
                {
                    name: 'Iomega Zip Drives',
                    link: '#',
                },
            ],
        };
    },
    // Vue call this function when instance is being created
    created() {
        console.log(this);
        // this is an object with a lot of properties -- only use ones starting with $ 
    },
    methods: {
        toggleCollapsed() {
            this.collapsed = !this.collapsed;
        },
    },
};
</script>

<style  lang="scss" module>
// module is to add random string after each of underneath classes in
// order not to mess up with other classes in other files
@import '~styles/components/light-component';
// don't forget ~ in view for style aliases

.sidebar {
    @include light-component;

    ul {
        li a:hover {
            background: $blue-component-link-hover;
        }
    }
}
</style>
