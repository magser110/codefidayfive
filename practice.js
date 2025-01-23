// let age = 16;
// let height = 130;
// let temperature = 64;
// let hasTicket = true;

// function conditions (age, height, temperature, hasTicket) {
//     if (age >= 10 && height >= 120) {
//         console.log("you can ride the rollercoaster!");
        
//     } else console.log("you cannot ride the rollercoaster :(");
//     if (age >= 18 || hasTicket) {
//         console.log("you can enter the VIP lounge");
        
//     } else console.log("you cannot enter the VIP lounge :(");
//     if (temperature < 70) {
//         console.log("wear a jacket");
        
//     } else console.log("wear something light!");
//     if (age >= 18 && hasTicket) {
//         console.log("you get a free snack!");
        
//     } else console.log("no snack for you :(");
    
// }

// conditions(age, height, temperature, hasTicket);


// const car = {
//     color: 'red',
//     model: 'Sedan',
//     year: 2020
//   };

// const name = 'John Doe';
// const age = 28;
// const email = 'john@example.com';
// const address = '123 Main St';


// const userProfile = {
//     name: 'John Doe',
//     age: 28,
//     email: 'john@example.com',
//     address: '123 Main St'
//   };

// console.log(userProfile.name); // Output: 'John Doe'

// console.log(userProfile['user-email']); // Output: 'john@example.com'

// const propName = 'age';
// console.log(userProfile[propName]); // Output: 28

// userProfile.address = '456 Elm St';
// console.log(userProfile.address); // Output: '456 Elm St'

// userProfile.phone = '555-1234';
// console.log(userProfile.phone); // Output: '555-1234'

// const userProfile = {
//     name: 'John Doe',
//     addresses: {
//       home: '123 Main St',
//       office: '456 Business Rd'
//     }
//   };


// console.log(userProfile.addresses.home); // Output: '123 Main St'

// const userProfile = {
//     name: 'John Doe',
//     greet: function() {
//       console.log(`Hello, ${this.name}!`);
//     }
//   };

//   userProfile.greet(); // Output: 'Hello, John Doe!'

// const car = {
//     make: 'Toyota',
//     model: 'Corolla',
//     year: 2020,
//     milage: 12000,
//     drive: function(miles) {
//         this.milage += miles;
//         console.log(`you drove ${miles} miles. New mileage: ${this.milage}`);
//     },
//     carAge: function() {
//         const currentYear = new Date().getFullYear();
//         return currentYear - this.year;
        
//     }

// };

// car.drive(100);
// console.log(`car age: ${car.carAge()} years`);

const button = document.querySelector('button');
button.addEventListener('click', function() {
  alert('Button clicked!');
});

