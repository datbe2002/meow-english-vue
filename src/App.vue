<script setup>
import { RouterView } from 'vue-router'
import MeowNavbar from '@/components/MeowNavbar.vue'
import MeowFooter from './components/MeowFooter.vue'
</script>

<template>
    <main class="bg-backgroundColor">
        <MeowNavbar />
        <RouterView />
        <MeowFooter />
    </main>
</template>
