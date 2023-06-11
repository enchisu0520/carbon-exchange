<template>
    <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center overflow-auto w-full"
    >
        <div
            class="fixed inset-0 transition-opacity"
            @click="$emit('closeModal')"
        >
            <div class="absolute inset-0 bg-gray-900 opacity-50"></div>
        </div>
        <div
            class="bg-white rounded-lg shadow-lg p-6 z-10 flex flex-col w-[60%] max-h-max"
        >
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-lg font-bold">Confirm Your Booking</h2>
                <button
                    class="text-gray-500 hover:text-gray-900"
                    @click="$emit('closeModal')"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
            <form action="https://formbold.com/s/FORM_ID" method="POST">
                <div class="mb-5">
                    <label
                        for="tutor-name"
                        class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                        Tutor Name
                    </label>
                    <input
                        type="text"
                        name="tutor-name"
                        id="tutor-name"
                        placeholder="Tutor Name"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        v-model="tutorName"
                        disabled
                    />
                </div>
                <div class="mb-5">
                    <label
                        for="user-name"
                        class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                        Your Name
                    </label>
                    <input
                        type="text"
                        name="user-name"
                        id="user-name"
                        placeholder="Your Name"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        v-model="userName"
                        disabled
                    />
                </div>
                <div class="-mx-3 flex flex-wrap">
                    <div class="w-full px-3 sm:w-1/2">
                        <div>
                            <label
                                for="date"
                                class="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Date
                            </label>
                        </div>
                    </div>
                    <div class="w-full px-3 sm:w-1/2">
                        <div>
                            <label
                                for="time"
                                class="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Time
                            </label>
                        </div>
                    </div>
                </div>
                <div
                    class="-mx-3 flex flex-wrap"
                    v-for="(timeslots, date) in appointmentTime"
                >
                    <div class="w-full px-3 sm:w-1/2">
                        <div
                            class="w-full rounded-md border border-[#e0e0e0] mb-5 bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none"
                        >
                            {{ date }}
                        </div>
                    </div>
                    <div class="w-full px-3 sm:w-1/2">
                        <div
                            class="w-full rounded-md border border-[#e0e0e0] mb-5 bg-blue-200 py-3 px-6 text-base font-medium text-[#6B7280] outline-none"
                            v-for="(slot, index) in timeslots"
                        >
                            {{ slot }}
                        </div>
                    </div>
                </div>

                <div class="mb-5">
                    <label
                        for="email"
                        class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                        Add a note
                    </label>
                    <input
                        type="text"
                        name="note"
                        id="note"
                        placeholder="Leave your note"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>

                <div>
                    <button
                        class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                    >
                        Book Appointment
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
    props: {
        isOpen: Boolean,
        tutorName: String,
        userName: String,
        appointmentTime: Object
    },
    setup() {
        let confirmationNote = ref('')
        return {
            confirmationNote
        }
    }
})
</script>
