<script setup>
import { courses } from '@/database/courses'
import Accordion from 'primevue/accordion'
import AccordionTab from 'primevue/accordiontab'
// const tabs = ref([
//     { title: 'Title 1', content: 'Content 1' },
//     { title: 'Title 2', content: 'Content 2' },
//     { title: 'Title 3', content: 'Content 3' }
// ]);
// const courseData = [
//     {
//         title: 'VSTEP Online',
//         price: 'VND 2.200.000',
//         description: [
//             'Microsoft Teams-based',
//             'Recorded lessons provided',
//             'Class size from 4 to 6',
//             'Class length: 4 weeks',
//         ],
//     },
//     {
//         title: 'VSTEP Offline',
//         price: 'VND 2.400.000',
//         description: [
//             'At Thu Duc or District 12',
//             'Class size from 4 to 6',
//             'Class length: 4 weeks',
//             'Morning and weekend classes are available',
//         ],
//     },
//     {
//         title: 'TOEIC Online',
//         price: 'VND 2.400.000',
//         description: [
//             'Microsoft Teams-based',
//             'Recorded lessons provided',
//             'Class size from 4 to 6',
//             'Reliable learning materials',
//         ],
//     },
// ]
</script>

<template>
    <main
        class="w-full pt-[13vh] md:h-fit flex flex-col px-4 sm:px-8 md:px-12 box-border"
    >
        <div class="flex gap-5 flex-col py-4">
            <h1 class="text-5xl font-bold text-mainTextColor sm:text-center">
                Courses
            </h1>
            <p class="text-2xl text-textColor sm:text-center pb-4">
                Tuition fees for courses at My English Our World
            </p>
        </div>
        <div class="w-full flex justify-center items-center">
            <div
                class="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full md:w-2/3 sm:grid-cols-2"
            >
                <!--  -->
                <div
                    v-for="(course, index) in courses"
                    :key="index"
                    class="p-5 shadow-md rounded-[12px] bg-white h-fit ring-2 hover:ring-4 hover:-translate-y-2 ring-buttonColor transition ease-in-out duration-300"
                >
                    <p class="sm:pb-5 text-buttonColor">{{ course.title }}</p>
                    <h1
                        class="font-bold text-xl text-mainTextColor md:text-2xl lg:text-3xl"
                    >
                        {{ course.price }}
                    </h1>
                    <div class="p-4 pb-10">
                        <ul
                            class="list-disc text-textColor"
                            v-for="(des, index) in course.description"
                            :key="index"
                        >
                            <li>{{ des }}</li>
                        </ul>
                    </div>
                    <div
                        class="cursor-pointer bg-buttonColor flex justify-center font-bold items-center text-white rounded-[5px] h-[35px] hover:bg-red-600 transition ease-in-out duration-500"
                    >
                        Select
                    </div>
                </div>
                <!--  -->
            </div>
        </div>
        <div class="pt-10 flex flex-col gap-5">
            <div class="font-bold text-mainTextColor text-3xl">FAQs</div>
            <div class="card">
                <Accordion :activeIndex="0">
                    <AccordionTab
                        header="Is there any discount for group registration?"
                    >
                        <p class="m-0 text-textColor">
                            VND 100.000 discount voucher for group of 2 to 3,
                            VND 200.000 discount voucher for group of 4 to 6
                        </p>
                    </AccordionTab>
                    <AccordionTab
                        header="Is there any placement test before learning?"
                    >
                        <p class="m-0">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo enim ipsam voluptatem quia
                            voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Consectetur, adipisci
                            velit, sed quia non numquam eius modi.
                        </p>
                    </AccordionTab>
                    <AccordionTab
                        header="Is there any result commitment for all courses?"
                    >
                        <p class="m-0">
                            At vero eos et accusamus et iusto odio dignissimos
                            ducimus qui blanditiis praesentium voluptatum
                            deleniti atque corrupti quos dolores et quas
                            molestias excepturi sint occaecati cupiditate non
                            provident, similique sunt in culpa qui officia
                            deserunt mollitia animi, id est laborum et dolorum
                            fuga. Et harum quidem rerum facilis est et expedita
                            distinctio. Nam libero tempore, cum soluta nobis est
                            eligendi optio cumque nihil impedit quo minus.
                        </p>
                    </AccordionTab>
                </Accordion>
                <!-- <Accordion :activeIndex="0">
                    <AccordionTab
                        v-for="tab in tabs"
                        :key="tab.title"
                        :header="tab.title"
                    >
                        <p class="m-0">{{ tab.content }}</p>
                    </AccordionTab>
                </Accordion> -->
            </div>
        </div>
    </main>
</template>
