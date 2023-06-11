<template>
    <div class="time-picker-container">
        <div class="time-picker">
            <div class="row time-picker-header">
                <button class="arrow left" @click="getPrevious7Days()"></button>
                <ul class="date-slot">
                    <li
                        class="date-slot-wrapper"
                        :key="index"
                        v-for="(date, index) in dateArray"
                    >
                        <div class="date-slot-item">
                            <span class="date-slot-date">{{
                                getDate(date)
                            }}</span>
                            <span class="date-slot-day">{{
                                getDay(date)
                            }}</span>
                        </div>
                        <ul class="time-slot ml-[9%]">
                            <li
                                class="time-slot-item"
                                :key="index"
                                v-for="(availableSlot, index) in availableTime[
                                    date.toLocaleDateString('en-US')
                                ]"
                                @click="
                                    toggleSelected(
                                        date.toLocaleDateString('en-US'),
                                        availableSlot
                                    )
                                "
                                :class="{
                                    selected: isSelected(
                                        date.toLocaleDateString('en-US'),
                                        availableSlot
                                    )
                                }"
                            >
                                {{ availableSlot }}
                            </li>
                        </ul>
                    </li>
                </ul>
                <button class="arrow right" @click="getNext7Days()"></button>
            </div>
            <div class="time-picker-footer">
                <button class="book-btn" @click="showModal">Book Now ></button>
            </div>
        </div>
    </div>
</template>
<script>
import { defineComponent, ref, onMounted } from 'vue'
import { initModals } from 'flowbite'
import ConfirmationModal from './ConfirmationModal.vue'

export default defineComponent({
    props: {
        showConfirmationModal: {
            type: Function,
            required: true
        },
        availableTime: Object,
        isOpen: Boolean,
        tutorName: String,
        userName: String,
        appointmentTime: Object
    },
    components: {
        ConfirmationModal
    },
    setup(props, { emit }) {
        const showModal = props.showConfirmationModal
        const selectedTimeSlots = ref({})
        let timeSlotsCount = ref(0)
        const maxTimeSlots = 3

        const initDays = []
        const today = new Date()
        for (let i = 0; i < 7; i++) {
            const nextDay = new Date(today)
            nextDay.setDate(nextDay.getDate() + i)
            initDays.push(nextDay)
        }
        let baseDate = ref(new Date())
        let dateArray = ref(initDays)

        const getNext7Days = () => {
            dateArray.value = []
            for (let i = 0; i < 7; i++) {
                const nextDay = new Date(baseDate.value)
                nextDay.setDate(baseDate.value.getDate() + i)
                dateArray.value.push(nextDay)
            }
            baseDate.value = new Date(
                dateArray.value[dateArray.value.length - 1]
            )
            return dateArray
        }

        const getPrevious7Days = () => {
            dateArray.value = []
            for (let i = 6; i >= 0; i--) {
                const prevDay = new Date(baseDate.value)
                prevDay.setDate(baseDate.value.getDate() - i)
                dateArray.value.push(prevDay)
            }
            baseDate.value = new Date(dateArray.value[0])
            return dateArray.value
        }

        const getDay = date => {
            return date.toString().substring(0, 3)
        }

        const getDate = date => {
            return date.toString().substring(4, 10)
        }

        const toggleSelected = (selectedDate, selectedTime) => {
            if (timeSlotsCount.value > maxTimeSlots - 1) {
                return
            }
            if (!selectedTimeSlots.value.hasOwnProperty(selectedDate)) {
                selectedTimeSlots.value[selectedDate] = [selectedTime]
                timeSlotsCount.value++
            } else {
                let tempIndex =
                    selectedTimeSlots.value[selectedDate].indexOf(selectedTime)
                if (tempIndex > -1) {
                    selectedTimeSlots.value[selectedDate].splice(tempIndex, 1)
                    timeSlotsCount.value--
                } else {
                    selectedTimeSlots.value[selectedDate].push(selectedTime)
                    timeSlotsCount.value++
                }
            }
            emit('selectedTimeSlots', selectedTimeSlots.value)
        }

        const isSelected = (selectedDate, selectedTime) => {
            if (!selectedTimeSlots.value.hasOwnProperty(selectedDate)) {
                return false
            } else {
                let tempIndex =
                    selectedTimeSlots.value[selectedDate].indexOf(selectedTime)
                if (tempIndex > -1) {
                    return true
                } else {
                    return false
                }
            }
        }

        onMounted(() => {
            initModals()
            timeSlotsCount.value = 0
        })

        return {
            getNext7Days,
            getPrevious7Days,
            getDay,
            getDate,
            toggleSelected,
            isSelected,
            showModal,
            dateArray
        }
    }
})
</script>
<style lang="scss">
.time-picker-container {
    width: 100%;
    max-height: 300px;
    background: #fff;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
}

.time-picker {
    margin: 0 -5px;
    display: flex;
    flex-direction: column;
    &-header {
        position: relative;
    }
    &-footer {
        width: 100%;
        text-align: center;
        margin: auto;
    }
}

.date-slot {
    list-style: none;
    margin-left: 8%;
    &-wrapper {
        width: 12%;
        padding: 0 3px;
        margin: 0 1px;
        text-align: center;
        float: left;
        margin-bottom: 10px;
    }
    &-item {
        margin: 20px 0 0 0;
        padding: 5px 3px;
        border: 1px solid transparent;
        &.active {
            border: 1px solid #0279b3;
        }
        &.no-free-slot > * {
            color: #666;
        }
    }
    &-day,
    &-date {
        display: block;
    }
    &-date {
        font-size: 8px;
        line-height: 12px;
        color: #666;
    }
    &-day {
        font-size: 10px;
        line-height: 15px;
        color: #000;
    }
}

.arrow {
    position: absolute;
    top: 25px;
    height: 30px;
    width: 30px;
    background: #e0e0e0;
    border-radius: 50%;
    border: none;
    margin: 0 10px;
    &.left {
        &:after {
            content: '\f104';
            left: -1px;
        }
    }
    &.right {
        right: 0px;
        &:after {
            content: '\f105';
            right: -1px;
        }
    }
    &:after {
        font-family: fontawesome;
        font-size: 20px;
        position: relative;
    }
    &.inactive {
        opacity: 0.4;
    }
    &:focus {
        outline: none;
    }
}

.time-slot {
    &-wrapper {
        margin-left: 8%;
    }
    &-item {
        background: #dff1ff;
        width: 3vw;
        font-size: 8px;
        line-height: 11px;
        color: black;
        font-weight: 700;
        border: none;
        border-radius: 4px;
        padding: 6px 3px;
        margin: 5px 5px;
        text-align: center;
        cursor: pointer;
        &:hover,
        &.selected {
            background: #0279b3;
            border-color: #0279b3;
            color: #fff;
        }
        ::selection {
            background: #0279b3;
            border-color: #0279b3;
            color: #fff;
        }
    }
}

.book-btn {
    font-size: 12px;
    font-weight: 700;
}
</style>
