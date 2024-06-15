<script setup>
import SearchInput from './SearchInput.vue'
</script>

<template>
    <main
        class="w-full md:h-[calc(100vh)] pt-[13vh] flex flex-row px-4 sm:px-8 md:px-12 box-border"
    >
        <div class="md:w-1/2 h-[70vh] flex flex-col gap-[3rem] justify-center">
            <div>
                <p
                    class="text-3xl md:text-5xl font-bold text-[#822A2A] leading-[4rem]"
                >
                    <span
                        class="block tracking-wide text-5xl text-mainTextColor"
                        >Friendly Sites</span
                    >
                    for English Learners
                </p>
            </div>
            <div class="w-full md:w-5/6">
                <p class="text-xl md:text-2xl font-[400] text-textColor">
                    Want to find a place where you can not only learn English
                    but also relax? My English Our World is the perfect site.
                </p>
            </div>
            <SearchInput />
        </div>
        <div
            class="hidden md:w-1/2 h-[calc(100vh-20vh)] md:flex relative gap-5"
        >
            <div class="w-1/2 flex justify-center h-[100%]">
                <img
                    src="https://s3-alpha-sig.figma.com/img/851f/d207/c6ffd7acfd36db84b0f0c1e6369160ab?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=neQglT7dZeKQCWseGufX5JJXN3OFlLyxgMlsKCP8loMh~wIxrEqnZcsFbH3CnJff6jJhqgzbDxoUYho7s8GnJtRmKZOiDNDqf~8BN~bZsTDdf3U-siMxy25DZn~zd24AGMLUy0Bz0iU5k1TNQH7JLnMQZQLNn41zftBY6nokNdB30bq9US3KVuwlnO3nej9Y8f-PI0fAlZ3KS2dSRJtF1infqbIkwgSiL8KpJGJM5PN-iTn5FHvfT-nE7wRBrAfI-vLlEyPJJW~lG5pfgrDJM7zubiy5IPDjtt5KByJMg2uw~Pzvjbkv~cZUITJBNQBR44FZKpcnlZ2tfUmF419gTw__"
                    alt=""
                    height="auto"
                    width="100%"
                    class="object-cover rounded-[20px]"
                />
            </div>
            <div class="w-1/2 flex justify-center h-[100%]">
                <img
                    src="https://s3-alpha-sig.figma.com/img/091c/43c6/8cd91a4288b7cdb67c652c962f051a3c?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O~dGVIwsd5DVn5itGgHOkRW6Mza4~N5mZALDnArUybUxrjC6mZz8EjUzcawNrf5PNcxTHYq9yWxx~xbg~hhUcixyOgNh5qdDHT-4vNFSQfBkPW~YZ9gV3YZXnG9FRVsXh0UhsNLAvV-jq7QBz-1ZZYX3M8uLhCE5oI0-3alV8y~I6D2r-F1oaWG8ybuZKXWT5rMRr5-1KR3WVBxf4-mismECAzz7vRCuId5a9yXAf9objlMwFVUHS6DPSi9zovFUdXwbrPDtwuHdX79cRG~3F6rKuXTfpv66hhXw4xdzB-18CX6oaDBQmRwaEM2EyXu-nAclp-E1kFlcHLzsSYQ8gw__"
                    alt="hinh"
                    height="auto"
                    width="100%"
                    class="object-cover rounded-[20px]"
                />
            </div>
            <div
                class="absolute bg-buttonColor p-4 rounded-[20px] text-white bottom-[30%] flex flex-col md:right-[30%] w-[16rem] ring-2 ring-red-600"
            >
                <div class="text-xl flex flex-row gap-2">
                    <div class="">
                        <svg
                            height="30px"
                            width="30px"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                        >
                            <path
                                fill="white"
                                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                            />
                        </svg>
                    </div>
                    <div>Get up to 20% off on every 1st month</div>
                </div>
                <div class="text-xl flex flex-row gap-2">
                    <div class="">
                        <svg
                            height="30px"
                            width="30px"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                        >
                            <path
                                fill="white"
                                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                            />
                        </svg>
                    </div>
                    <div>Expert teachers</div>
                </div>
            </div>
        </div>
    </main>
</template>
