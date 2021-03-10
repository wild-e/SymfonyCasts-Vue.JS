<template>
    <span class="p-3">
        {{ title }}
    </span>
</template>

<script>
export default {
    name: 'Legend',
    // props is a way to receive/read data in component. Like arguments in a function
    // can also be use as a variable in template
    props: {
        title: {
            type: String,
            required: true,
        },
    },
};
</script>
