<script setup></script>

<template>
    <main class="h-3rem md:h-[4rem] md:w-5/6 w-full flex flex-row">
        <div
            class="w-[15%] md:w-[10%] flex justify-center items-center rounded-s-[15px] bg-white"
        >
            <svg
                width="30px"
                height="30px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
            >
                <path
                    fill="#5f5b5b"
                    d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                />
            </svg>
        </div>
        <div class="w-[65%] md:w-[60%] flex items-center bg-white">
            <input
                class="bg-transparent border-0 w-full h-full font-DM text-sm md:text-xl outline-none"
                type="text"
                placeholder="What do you want to learn"
            />
        </div>
        <div class="hidden lg:w-[30%] lg:block">
            <button
                class="bg-buttonColor outline-none w-full h-full rounded-e-[15px] text-white text-lg md:text-xl font-DM border-0 cursor-pointer hover:bg-red-600 transition ease-in-out duration-500"
            >
                Search Course
            </button>
        </div>
        <div class="w-[20%] lg:hidden">
            <button
                class="py-3 bg-buttonColor outline-none w-full h-full rounded-e-[15px] text-white text-sm md:text-xl font-DM border-0 cursor-pointer hover:bg-red-600 transition ease-in-out duration-500"
            >
                Search
            </button>
        </div>
    </main>
</template>
