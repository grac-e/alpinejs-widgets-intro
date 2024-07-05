// function Counter() {
//     return {
//         count: 0,
//         max: 20,

//         increment() {
//             if (this.count < this.max) {
//                 this.count++;
//             }
//         },
//         decrement() {
//             if (this.count > 0) {
//                 this.count--;
//             }
//         },
//         reset() {
//             this.count = 0;
//         }
//     };
// }

// ensure that AlpineJS is properly loaded
document.addEventListener('alpine:init', () => {
    Alpine.data('counter', Counter);
});