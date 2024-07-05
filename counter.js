function Counter() {
    return {
        count: 0,
        max: 20,

        increment() {
            if (this.count < this.max) {
                this.count++;
            }
        },
        decrement() {
            if (this.count > 0) {
                this.count--;
            }
        },
        reset() {
            this.count = 0;
        }
    };
}