<template>
  <!-- component -->
  <main
    class="h-screen w-full flex flex-col justify-center items-center bg-backgroundColor"
  >
    <h1 class="text-9xl font-extrabold text-black tracking-widest">
      404 by Meow
    </h1>
    <div
      class="bg-[#FF6A3D] px-2 text-xl rounded rotate-12 absolute font-DM font-bold"
    >
      Page Not Found
    </div>
    <button class="mt-5">
      <router-link
        class="relative block px-8 py-3 text-black no-underline font-DM"
        to="/"
        >Go Home</router-link
      >
    </button>
  </main>
</template>
