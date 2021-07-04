<template>
    <div  class="container" >
        <div class="timer">
            
            <input class="number-input" ref="minutesInput" @focus="focusManageOnMinutesInput" @blur="blurManageOnMinutesInput" @change="changeMangeOnMinutesInput" @keyup.enter="startCounter" v-model="minutes" type="text" max="2" maxlength="2">

            <div><span>:</span></div>
            
            <input class="number-input" ref="secondsInput"  @focus="focusManageOnSecondsInput" @blur="blurManageOnSecondsInput" @change="changeMangeOnSecondsInput" @keyup.enter="startCounter" v-model="seconds" type="text"  max="2" maxlength="2">

        </div>

        <div class="buttons-container">

        <StartButton @counter-start="startCounter" :disabled="!startState"  :class="!startState ? 'dormant' : 'active' "/>

        <PauseButton @counter-pause="pauseConter" :disabled="!counterState" :class="counterState ?  'active' : 'dormant'" :pauseStateText="pauseStateText"/>

        <OffButton @counter-stop="stopCounter" :disabled="!counterState" :class="counterState ?  'active' : 'dormant'"/>

        </div>
    </div>
</template>

<script>
import StartButton from "./buttons/StartButton.vue"
import PauseButton from "./buttons/PauseButton.vue"
import OffButton from "./buttons/OffButton.vue"

export default {
    name: "Counter",
    emits: ["button-text-content"],
    components: {
        StartButton,
        PauseButton,
        OffButton
    },
    data() {
        return {
            // three flags to control/toggle the buttons, classes and whatnot;
            counterState: false,
            startState: false,
            pauseState: false,

            pauseStateText: "pause",
            seconds: "00",
            minutes: "00",
            timer: Object,
            timeRemaning: Number
        }
    },
    methods: {
        // the order of the functions and if statements below is important, don't change it;
        startCounter() {
            // if we are given 0 minutes, 0 seconds;
            if (this.minutes == 0 && this.seconds == 0) return;

            this.blurManageOnMinutesInput();
            this.blurManageOnSecondsInput();

            this.startState = false;
            this.counterState = !this.counterState;
            this.seconds = Number(this.$refs.secondsInput.value);
            this.minutes = Number(this.$refs.minutesInput.value);
            
            this.timer = setInterval(() => {  
                // if Minutes only were given;  
                if (this.seconds == 0 && this.minutes != 0) {
                    this.seconds = 60;
                    this.minutes -= 1;
                };            

                // tick!;
                this.seconds -= 1;

                // single digit Seconds, another 0 is given because we cant assign a value to be "00" in js;
                if (this.seconds < 10) {
                    this.seconds = "0" + this.seconds;
                };       

                if (this.minutes < 10) {
                    this.minutes = Array.from(this.minutes + "0").reverse().join("").slice(0, 2);
                };  

                // counter end;
                if (this.seconds == 0 && this.minutes == 0) {
                    this.counterState = !this.counterState;
                    this.pauseState = !this.pauseState
                    this.minutes = "00";
                    this.seconds = "00";
                    clearInterval(this.timer)
                };
            }, 1000);
        },
        pauseConter() {
            // in order to pause/unpause, we need to keep track of how much time left when we paused;
            this.timeRemaning = this.seconds;

            // if we are pausing;
            if (!this.pauseState) {
                clearInterval(this.timer);
                this.pauseStateText = "resume" 
                // revert the flag, what we are doing here is toggling it;
                this.pauseState = !this.pauseState;
            } else {
                // if we are resuming (this is controlled by the flag 'pauseState', stated above);
                // pick up from where we left off and reinitiate the timer with the new remaining time;
                this.seconds = this.timeRemaning;
                this.timer = setInterval(() => {
                    // if Minutes only were given like above, in this case this would fire if we are resuming from '0'Seconds;  
                    if (this.seconds == 0 && this.minutes != 0) {
                        this.seconds = 60;
                        this.minutes -= 1;
                    };  
                    if (this.seconds < 10) {
                        this.seconds = "0" + this.seconds;
                    }  
                    this.seconds -= 1;

                    this.seconds == 0 ? clearInterval(this.timer) : null;
                }, 1000);
                this.pauseState = !this.pauseState;
                this.pauseStateText = "pause"
            }
        },
        stopCounter() {
            this.counterState = !this.counterState
            this.startState = false
            clearInterval(this.timer)
            this.seconds = "00"
            this.minutes = "00"  
        },
        focusManageOnMinutesInput() {
            let minutesInput = this.$refs.minutesInput;
            minutesInput.style.border = "2px solid #9B59B6"
            minutesInput.value = "";

        },
        changeMangeOnMinutesInput() {
            let minutesInput = this.$refs.minutesInput;
            minutesInput.value != 0 ? this.startState = true : this.startState = false
        },
        blurManageOnMinutesInput() {
            let minutesInput = this.$refs.minutesInput;
            if (minutesInput.value === "") {
                minutesInput.value = "00"
            } else if (minutesInput.value < 10) {
                // the only way I managed to get it to work. Instead of just keep adding 0s each second, so it will be like: 02 instead of +0000000002;
                minutesInput.value = Array.from(minutesInput.value + "0").reverse().join("").slice(0, 2); 
            }
            minutesInput.style.border = "none"
            minutesInput.blur();

        },
        focusManageOnSecondsInput() {
            let secondsInput = this.$refs.secondsInput;
            secondsInput.style.border = "2px solid #9B59B6"
            secondsInput.value = "";

        },
        changeMangeOnSecondsInput() {
            let secondsInput = this.$refs.secondsInput;
            secondsInput.value != 0 ? this.startState = true : this.startState = false
        },
        blurManageOnSecondsInput() {
            let secondsInput = this.$refs.secondsInput;
            secondsInput.value === "" ? secondsInput.value = "00" : null
            secondsInput.style.border = "none"
        }
    }
}

</script>

<style scoped lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil+Display:wght@300;700&display=swap');

    .container {
        font-family: 'Big Shoulders Stencil Display', cursive;
        width: 60%;
        margin: 0 auto;
        border: 1px solid red;
        background-color: $main-cyan;
        min-width: 700px;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        user-select: none;
        .timer {
            display: flex;
           font-size: 18rem;
            justify-content: space-between;
            text-align: center;
            margin: 2rem auto;
            color: $main-purple;
        }
        .buttons-container {
            display: flex;
            justify-content: space-around;
            width: 500px;
        }
        .active {
            cursor: pointer;
            box-shadow: 4px 4px 1px $black;
        }
        .dormant {
            cursor: default;
        }
        .number-input {
            user-select: none !important;
            text-align: center;
            font-family: 'Big Shoulders Stencil Display', cursive;
            color: $main-purple;
            background: transparent;
            border: none;
            font-size: 18rem;
            width: 280px;
            &:focus {
                outline: none;
                border: 1px solid $main-purple;

            }
        }
    }
</style>