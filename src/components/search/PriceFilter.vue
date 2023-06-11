<template>
    <div class="wrapper">
        <fieldset class="filter-price">
            <div class="price-field">
                <input type="range" min="0" max="1000" value="0" id="lower" />
                <input
                    type="range"
                    min="0"
                    max="1000"
                    value="1000"
                    id="upper"
                />
            </div>
            <div class="price-wrap">
                <div class="price-wrap-1">
                    <label for="one">$</label>
                    <input id="one" />
                </div>
                <div class="price-wrap_line">-</div>
                <div class="price-wrap-2">
                    <label for="two">$</label>
                    <input id="two" />
                </div>
            </div>
        </fieldset>
    </div>
</template>
<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    var lowerSlider = document.querySelector('#lower')
    var upperSlider = document.querySelector('#upper')

    document.querySelector('#two').value = upperSlider.value
    document.querySelector('#one').value = lowerSlider.value

    var lowerVal = parseInt(lowerSlider.value)
    var upperVal = parseInt(upperSlider.value)

    upperSlider.oninput = function () {
        lowerVal = parseInt(lowerSlider.value)
        upperVal = parseInt(upperSlider.value)
        if (upperVal < lowerVal + 1) {
            lowerSlider.value = upperVal - 1
            document.querySelector('#one').value = this.value
            if (lowerVal == lowerSlider.min) {
                upperSlider.value = 1
            }
        }
        document.querySelector('#two').value = this.value
    }

    lowerSlider.oninput = function () {
        lowerVal = parseInt(lowerSlider.value)
        upperVal = parseInt(upperSlider.value)
        if (lowerVal > upperVal - 1) {
            upperSlider.value = lowerVal + 1
            document.querySelector('#two').value = this.value
            if (upperVal == upperSlider.max) {
                lowerSlider.value = parseInt(upperSlider.max) - 1
            }
        }
        document.querySelector('#one').value = this.value
    }
})
</script>
<style scoped>
body {
    font-family: 'Karla', 'Arial', sans-serif;
    font-weight: 500;
    background: rgba(247, 117, 96, 1);
    background: linear-gradient(45deg, #0f3443, #34e89e);
}

p {
    padding: 0;
    margin: 0;
}

.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.filter-price {
    width: 220px;
    border: 0;
    padding: 0;
    margin: 0;
}

.price-title {
    position: relative;
    color: black;
    font-size: 14px;
    line-height: 1.2em;
    font-weight: 400;
}

.price-field {
    position: relative;
    width: 100%;
    height: 36px;
    box-sizing: border-box;
    background: rgba(248, 247, 244, 0.2);
    padding-top: 15px;
    padding-left: 16px;
    border-radius: 3px;
    margin: 0 25px;
}

.price-field input[type='range'] {
    position: absolute;
}

/* Reset style for input range */

.price-field input[type='range'] {
    width: 65%;
    height: 2px;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    border-radius: 5px;
    pointer-events: none;
    -webkit-appearance: none;
}

.price-field input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
}

.price-field input[type='range']:active,
.price-field input[type='range']:focus {
    outline: 0;
}

.price-field input[type='range']::-ms-track {
    width: 188px;
    height: 2px;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    border-radius: 5px;
    pointer-events: none;
    background: transparent;
    border-color: transparent;
    color: transparent;
    border-radius: 5px;
}

/* Style toddler input range */

.price-field input[type='range']::-webkit-slider-thumb {
    /* WebKit/Blink */
    position: relative;
    -webkit-appearance: none;
    margin: 0;
    border: 0;
    outline: 0;
    border-radius: 50%;
    height: 10px;
    width: 10px;
    margin-top: -4px;
    background-color: black;
    cursor: pointer;
    cursor: pointer;
    pointer-events: all;
    z-index: 100;
}

.price-field input[type='range']::-moz-range-thumb {
    /* Firefox */
    position: relative;
    appearance: none;
    margin: 0;
    border: 0;
    outline: 0;
    border-radius: 50%;
    height: 10px;
    width: 10px;
    margin-top: -5px;
    background-color: black;
    cursor: pointer;
    cursor: pointer;
    pointer-events: all;
    z-index: 100;
}

.price-field input[type='range']::-ms-thumb {
    /* IE */
    position: relative;
    appearance: none;
    margin: 0;
    border: 0;
    outline: 0;
    border-radius: 50%;
    height: 10px;
    width: 10px;
    margin-top: -5px;
    background-color: black;
    cursor: pointer;
    cursor: pointer;
    pointer-events: all;
    z-index: 100;
}

/* Style track input range */

.price-field input[type='range']::-webkit-slider-runnable-track {
    /* WebKit/Blink */
    width: 188px;
    height: 2px;
    cursor: pointer;
    background: black;
    border-radius: 5px;
}

.price-field input[type='range']::-moz-range-track {
    /* Firefox */
    width: 188px;
    height: 2px;
    cursor: pointer;
    background: black;
    border-radius: 5px;
}

.price-field input[type='range']::-ms-track {
    /* IE */
    width: 188px;
    height: 2px;
    cursor: pointer;
    background: black;
    border-radius: 5px;
}

/* Style for input value block */

.price-wrap {
    display: flex;
    justify-content: center;
    color: black;
    font-size: 14px;
    line-height: 1.2em;
    font-weight: 400;
    margin-bottom: 7px;
}

.price-wrap-1,
.price-wrap-2 {
    display: flex;
}

.price-title {
    margin-right: 5px;
    background: #d58e32;
}

.price-wrap_line {
    margin: 0 10px;
}

.price-wrap #one,
.price-wrap #two {
    width: 33px;
    text-align: right;
    margin: 0;
    padding: 0;
    margin-right: 2px;
    background: 0;
    border: 0;
    outline: 0;
    color: black;
    font-family: 'Karla', 'Arial', sans-serif;
    font-size: 14px;
    line-height: 1.2em;
    font-weight: 400;
}

.price-wrap label {
    text-align: right;
}

/* Style for active state input */

.price-field input[type='range']:hover::-webkit-slider-thumb {
    box-shadow: 0 0 0 0.5px black;
    transition-duration: 0.3s;
}

.price-field input[type='range']:active::-webkit-slider-thumb {
    box-shadow: 0 0 0 0.5px black;
    transition-duration: 0.3s;
}
</style>
