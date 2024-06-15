<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div
        class="gap-5 w-full md:h-fit pt-[13vh] flex flex-col md:flex-row px-4 sm:px-8 md:px-12 box-border"
    >
        <div
            class="md:w-1/2 text-left text-3xl flex md:items-center md:justify-center md:text-6xl"
        >
            <p class="md:w-[75%] sticky top-[14vh] font-Suisse">
                Take the
                <span class="font-bold text-mainTextColor"
                    >very first step</span
                >
                of a
                <span class="font-bold text-mainTextColor">great journey</span>
            </p>
        </div>
        <div class="md:w-1/2 flex justify-center items-center h-[60vh]">
            <div
                class="w-full md:w-2/3 h-full bg-[url('../assets/meowEng.jpeg')] bg-no-repeat bg-cover"
            ></div>
        </div>

        <!-- <div
            class="p-1 mt-5 md:mt-0 md:w-1/2 md:h-[80vh] flex flex-col text-center justify-center items-center bg-white rounded-[20px] shadow-lg"
        >
            <p class="text-textColor text-2xl py-2">
                <span class="block text-black font-bold py-3 text-3xl"
                    >Tran Huynh Anh Nguyen</span
                >
                Founder of My English Our World
            </p>
            <div class="mb-5">
                <div>Lecturer at Vietnam National University from 2021</div>
                <div>English Teacher from 2018</div>
                <div>TESOL Global Diploma</div>
                <div>TOEIC 985</div>
                <div>IELTS 7.5</div>
            </div>
        </div> -->
    </div>
    <div
        class="bg-black py-5 h-fit w-[100%] text-center text-white text-xl font-bold hover:underline"
    >
        <RouterLink to="/courses" class="cursor-pointer">
            Check out our latest courses!.</RouterLink
        >
    </div>
</template>
