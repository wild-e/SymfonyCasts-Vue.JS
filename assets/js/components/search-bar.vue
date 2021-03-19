<template>
    <div class="input-group">
        <!-- v-model triggers anytime value input changes (similar to keyUp)
        and bound a piece of data to the form input -->
        <input
            v-model="searchTerm"
            class="form-control"
            placeholder="Search Products..."
            type="search"
            @input="onInput"
        >

        <div
            v-show="searchTerm !== ''"
            class="inpput-group-append"
        >
            <button
                class="btn btn-outline-secondary"
                @click="eraseSearchTerm"
            >
                X
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    // store reactive data in data()
    data() {
        return {
            searchTerm: '',
            searchTimeout: null,
        };
    },
    methods: {
        onInput() {
            if (this.searchTimeout) {
                clearTimeout(this.searchTimeout);
            }
            this.searchTimeout = setTimeout(() => {
                this.$emit('search-products', { term: this.searchTerm });
                this.searchTimeout = null;
            }, 200);
        },
        eraseSearchTerm() {
            this.searchTerm = null;
            this.$emit('search-products', { term: this.searchTerm });
        },
    },
};
</script>
