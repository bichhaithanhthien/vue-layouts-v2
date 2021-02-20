<template>
    <div>
        <header class="header"></header>
        <app-layout-links></app-layout-links>
        <slot />
    </div>
</template>

<script>
    import AppLayoutLinks from '/src/layouts/AppLayoutLinks'
    export default {
        name: "AppLayoutHome",
        components: {
            AppLayoutLinks
        }
    }
</script>

<style scoped>
    .header {
        height: 5rem;
        background-color: green;
    }
</style>
