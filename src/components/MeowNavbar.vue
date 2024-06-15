<script setup>
import Sidebar from 'primevue/sidebar'
import { RouterLink, useRouter } from 'vue-router'
import { ref } from 'vue'
const router = useRouter()
const handleNavToHome = () => {
    router.push('/')
}

const visible = ref(false)

const arrNav = ref([
    { navName: 'Home', navLink: '/' },
    { navName: 'About', navLink: '/about' },
    { navName: 'Courses', navLink: '/courses' },
])
</script>

<template>
    <header
        class="h-[13vh] px-4 sm:px-8 md:px-12 flex justify-center items-center bg-backgroundColor w-full fixed z-50 box-border"
    >
        <div class="w-full px-2 flex flex-row justify-between">
            <div class="w-1/2">
                <img
                    @:click="handleNavToHome"
                    srcset="@/assets/LogoMEOW.png 2x"
                    alt="Just a logoo"
                    width="185"
                    height="80"
                    class="object-contain cursor-pointer"
                />
            </div>
            <nav
                class="hidden md:flex w-1/2 flex-row justify-end items-center gap-10 xl:text-[20px] lg:text-[16px]"
            >
                <RouterLink
                    v-for="(nav, index) in arrNav"
                    :key="index"
                    class="no-underline text-black"
                    :to="nav.navLink"
                    active-class="text-red-600"
                    >{{ nav.navName }}</RouterLink
                >
            </nav>
            <!-- hamburger menu -->
            <div class="md:hidden flex justify-center items-center">
                <button
                    @click="visible = true"
                    class="w-10 h-8 flex flex-col justify-between z-5 border-0 bg-transparent items-center"
                >
                    <div class="w-10 h-1 rounded bg-black origin-left"></div>
                    <div class="w-10 h-1 rounded bg-black"></div>
                    <div class="w-10 h-1 rounded bg-black"></div>
                </button>

                <!-- <HamburgerMenu :tog="tog" /> -->
                <div class="card flex justify-center">
                    <Sidebar v-model:visible="visible">
                        <template #container="{ closeCallback }">
                            <div class="flex flex-col h-full">
                                <div
                                    class="flex items-center justify-between px-4 pt-4 shrink-0"
                                >
                                    <span
                                        class="inline-flex items-center gap-2"
                                    >
                                        <img
                                            srcset="../assets/LogoMEOW.png"
                                            alt="log"
                                            class="w-[150px] h-[150px] object-contain"
                                        />
                                    </span>
                                    <span>
                                        <Button
                                            type="button"
                                            @click="closeCallback"
                                            icon="pi pi-times"
                                            rounded
                                            outlined
                                            class="h-8 w-8"
                                        ></Button>
                                    </span>
                                </div>
                                <div class="overflow-y-auto mt-4">
                                    <ul class="list-none px-4 m-0">
                                        <li>
                                            <ul
                                                class="list-none p-0 m-0 overflow-hidden"
                                            >
                                                <li @click="closeCallback">
                                                    <RouterLink
                                                        to="/"
                                                        v-ripple
                                                        class="flex items-center cursor-pointer p-3 rounded-md text-surface-700 dark:text-surface-0/80 hover:bg-surface-100 dark:hover:bg-surface-700 duration-200 transition-colors"
                                                    >
                                                        <span
                                                            class="font-medium"
                                                            >Home</span
                                                        >
                                                    </RouterLink>
                                                </li>
                                                <li @click="closeCallback">
                                                    <RouterLink
                                                        to="/about"
                                                        v-ripple
                                                        class="flex items-center cursor-pointer p-3 rounded-md text-surface-700 dark:text-surface-0/80 hover:bg-surface-100 dark:hover:bg-surface-700 duration-200 transition-colors"
                                                    >
                                                        <span
                                                            class="font-medium"
                                                            >About</span
                                                        >
                                                    </RouterLink>
                                                </li>
                                                <li @click="closeCallback">
                                                    <RouterLink
                                                        to="/courses"
                                                        v-ripple
                                                        class="flex items-center cursor-pointer p-3 rounded-md text-surface-700 dark:text-surface-0/80 hover:bg-surface-100 dark:hover:bg-surface-700 duration-200 transition-colors"
                                                    >
                                                        <span
                                                            class="font-medium"
                                                            >Courses</span
                                                        >
                                                    </RouterLink>
                                                </li>
                                                <li @click="closeCallback">
                                                    <a
                                                        v-ripple
                                                        class="flex items-center cursor-pointer p-3 rounded-md text-surface-700 dark:text-surface-0/80 hover:bg-surface-100 dark:hover:bg-surface-700 duration-200 transition-colors"
                                                    >
                                                        <span
                                                            class="font-medium"
                                                            >Messages</span
                                                        >
                                                        <span
                                                            class="inline-flex items-center justify-center ml-auto bg-primaryrounded-full w-6 h-6 text-surface-0 dark:text-surface-900"
                                                            >3</span
                                                        >
                                                    </a>
                                                </li>
                                                <li @click="closeCallback">
                                                    <a
                                                        v-ripple
                                                        class="flex items-center cursor-pointer p-3 rounded-md text-surface-700 dark:text-surface-0/80 hover:bg-surface-100 dark:hover:bg-surface-700 duration-200 transition-colors"
                                                    >
                                                        <span
                                                            class="font-medium"
                                                            >Calendar</span
                                                        >
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </template>
                    </Sidebar>
                </div>
            </div>
        </div>
    </header>
</template>
