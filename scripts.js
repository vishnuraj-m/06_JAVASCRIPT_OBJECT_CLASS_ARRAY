// class Car {
//     constructor(model, make) {
//         this.make = make;
//         this.model = model;
//     }
// }


// !
// console.log(window.innerWidth);
// console.log(window.innerHeight);
// window.alert('this is an alert!')
// const name = window.prompt('What is your name?');
// const name = prompt('What is your name?');
// console.log(name);

// !/*********/

const car = {
    make: "VolksWagen",
    model: "Polo",
    move: function () {
        console.log('moving')
    }
}
console.log(car);
console.log(car.make);
console.log(car.model);
car.move()