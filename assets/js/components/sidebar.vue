<template>
    <!-- Notice that vue accepts arrays for styling -->
    <!-- colon : is a shortcut for v-bind  -->
    <!-- <div
        :class="[$style.component, 'p-3 mb-5']"
        :style="{ width: collapsed ? '70px' : 'auto' }"
    > -->
    <div
        :class="[this.$style.component, 'p-3', 'mb-5']"
    >
        <!-- Same as <div v-show="!collapsed">  == display:none -->
        <!-- v-if is more performant  -->
        <div v-if="!collapsed">
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
        </div>
        <div class="d-flex justify-content-end">
            <button
                class="btn btn-secondary btn-sm py-2 px-3"
                @click="$emit('toggle-collapsed')"
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
    // data and props are turned into getter and setter to re-render components when their changing
    // never try to change values of prop. They're  meant to be read
    props: {
        collapsed: {
            type: Boolean,
            required: true,
        },
    },
    data() {
        return {
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
    // created() {
    //     console.log(this);
    //     // this is an object with a lot of properties -- only use ones starting with $
    // },
    // computed: {
    //     /**
    //      * @returns string[]
    //      */
    //     componentClass() {
    //         const classes = [this.$style.component, 'p-3', 'mb-5'];

    //         if (this.collapsed) {
    //             classes.push(this.$style.collapsed);
    //         }

    //         return classes;
    //     },
    // },
    // methods: {
    //     toggleCollapsed() {
    //         this.$emit('toggle');
    //         this.collapsed = !this.collapsed;
    //         console.log(this.componentClass);
    //     },
    // },
};
</script>

<style  lang="scss" module>
// module is to add random string after each of underneath classes in
// order not to mess up with other classes in other files
@import '~styles/components/light-component';
// don't forget ~ in view for style aliases

.component {
    @include light-component;

    // &.collapsed {
    //     width: 70px;
    // }

    ul {
        li a:hover {
            background: $blue-component-link-hover;
        }
    }
}
</style>
