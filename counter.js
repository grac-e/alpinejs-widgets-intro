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
                console.log("decrementing");
            }
            console.log("not decrementing")
        },
        reset() {
            this.count = 0;
            console.log("reseting");
        },
    };
}