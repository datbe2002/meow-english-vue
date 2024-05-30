<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <footer class="bg-backgroundColor font-sans dark:bg-gray-900 w-full">
        <div class="container px-6 py-12 mx-auto box-border">
            <div
                class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4"
            >
                <div>
                    <p class="font-semibold text-gray-800 dark:text-white">
                        Meow English
                    </p>

                    <div class="flex flex-col items-start mt-5 space-y-2">
                        <RouterLink
                            to="/"
                            class="text-gray-600 no-underline transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"
                        >
                            Home
                        </RouterLink>
                        <RouterLink
                            to="/about"
                            class="text-gray-600 no-underline transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"
                        >
                            Who We Are
                        </RouterLink>
                        <RouterLink
                            to="/courses"
                            class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"
                        >
                            My Courses
                        </RouterLink>
                    </div>
                </div>

                <div>
                    <p class="font-semibold text-gray-800 dark:text-white">
                        Contact
                    </p>

                    <div class="flex flex-col items-start mt-5 space-y-2">
                        <p
                            class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"
                        >
                            Retail & E-Commerce
                        </p>
                        <p
                            class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"
                        >
                            Information Technology
                        </p>
                        <p
                            class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"
                        >
                            Finance & Insurance
                        </p>
                    </div>
                </div>
            </div>

            <div class="sm:flex sm:items-center sm:justify-between">
                <div class="flex flex-1 gap-4 hover:cursor-pointer">
                    <img
                        src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg"
                        width="130"
                        height="110"
                        alt=""
                    />
                    <img
                        src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
                        width="130"
                        height="110"
                        alt=""
                    />
                </div>

                <div class="flex gap-4 hover:cursor-pointer">
                    <img
                        src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"
                        width="30"
                        height="30"
                        alt="fb"
                    />
                    <img
                        src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg"
                        width="30"
                        height="30"
                        alt="tw"
                    />
                    <img
                        src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
                        width="30"
                        height="30"
                        alt="inst"
                    />
                    <img
                        src="https://www.svgrepo.com/show/94698/github.svg"
                        class=""
                        width="30"
                        height="30"
                        alt="gt"
                    />
                    <img
                        src="https://www.svgrepo.com/show/22037/path.svg"
                        width="30"
                        height="30"
                        alt="pn"
                    />
                    <img
                        src="https://www.svgrepo.com/show/28145/linkedin.svg"
                        width="30"
                        height="30"
                        alt="in"
                    />
                    <img
                        src="https://www.svgrepo.com/show/22048/dribbble.svg"
                        class=""
                        width="30"
                        height="30"
                        alt="db"
                    />
                </div>
            </div>
            <p class="font-DM p-8 text-start md:text-center md:text-lg md:p-4">
                © 2024 Made by TruongTanDat. All rights reserved.
            </p>
        </div>
    </footer>
</template>
