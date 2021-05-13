<template>
  <div>
    <div class="calculator">
      <div class="display">{{ current || "0" }}</div>
      <div @click="clear" class="button">C</div>
      <div @click="offMusic" class="button">+/-</div>
      <div @click="percent" class="button">%</div>
      <div @click="divide" class="button operator">/</div>
      <div @click="append('7')" class="button">7</div>
      <div @click="append('8')" class="button">8</div>
      <div @click="append('9')" class="button">9</div>
      <div @click="times" class="button operator">x</div>
      <div @click="append('4')" class="button">4</div>
      <div @click="append('5')" class="button">5</div>
      <div @click="append('6')" class="button">6</div>
      <div @click="minus" class="button operator">-</div>
      <div @click="append('1')" class="button">1</div>
      <div @click="append('2')" class="button">2</div>
      <div @click="append('3')" class="button">3</div>
      <div @click="plus" class="button operator">+</div>
      <div @click="append('0')" class="button zero">0</div>
      <div @click="dot" class="button">.</div>
      <div @click="equal" class="button operator">=</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      previous: null,
      current: "",
      operator: null,
      operatorClicked: false,
      player: new Audio(),
      src: require('../assets/songs.mp3'),
      isPlaying: false
    };
  },
  methods: {
    clear() {
      this.current = "";
      this.player.src= this.src;
      this.player.play();
    },
    percent() {
      this.current = `${parseFloat(this.current) / 100}`;
    },
    append(number) {
      if (this.operatorClicked) {
        this.current = "";
        this.operatorClicked = false;
      }
      this.current = `${this.current}${number}`;
    },
    dot() {
      if (this.current.indexOf(".") === -1) {
        this.append(".");
      }
      if (this.current.indexOf(".") === 0) {
        this.current = `0${this.current}`;
      }
    },
    setPrevious() {
      this.previous = this.current;
      this.operatorClicked = true;
    },
    plus() {
      this.operator = (a, b) => a + b;
      this.setPrevious();
    },
    minus() {
      this.operator = (a, b) => a - b;
      this.setPrevious();
    },
    times() {
      this.operator = (a, b) => a * b;
      this.setPrevious();
    },
    divide() {
      this.operator = (a, b) => a / b;
      this.setPrevious();
    },
    equal() {
      this.current = `${this.operator(
        parseFloat(this.previous),
        parseFloat(this.current)
      )}`;
      this.previous = null;
    },
    offMusic() {
      this.player.pause();
      this.isPlaying = false;
    }
  },
};
</script>
<style scoped>
.calculator {
  margin: 0 auto;
  width: 25rem;
  font-size: 3rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
}
.display {
  grid-column: 1 / 5;
  background-color: #333;
  color: white;
}
.zero {
  grid-column: 1 / 3;
}
.button {
  background-color: #f2f2f2;
  border: 1px solid #999;
  cursor: pointer;
}
.operator {
  background-color: orange;
  color: white;
}
</style>
