export const Counter = {
  //Como vue 2
  data() {
    return {
      num: 0,
    };
  },
  /* created() {
    this.hello();
  }, */
  methods: {
    hello() {
      console.log("Hello from mixin");
    },
    increase() {
      this.num++;
    },
    decrease() {
      this.num--;
    },
  },
};
