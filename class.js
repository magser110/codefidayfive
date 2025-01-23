// ex 1 create an object representing a car with properties for make, model, year, and a method getInfo that logs the car's details.

const car = {
    make: "Honda",
    model: "Civic",
    year: 2007,
    getInfo: function() {
        console.log(`My car is a ${this.year} ${this.make} ${this.model}.`);
        
    }
}

car.getInfo();

// ex 2 Create a student object with properties for name, age, and grades (array). Write a method that calculates the average grade.

const student = {
    name: "Jimmy",
    age: 8, 
    grades: [90, 80, 85, 92, 88],
    gradeAvg: function(grades) {
        const average = grades.reduce(function(sum, num) {return sum + num} , 0) / this.grades.length;
    
        console.log(`${this.name}'s average grade is ${average}`);
    }
    }
student.gradeAvg(student.grades);

student.gradeAvg([40,54,93,99]);




//ex 3 Using the DOM, select an element by its ID and change its background color when a button is clicked.

const element = document.querySelector("#ex-3");
const button = document.querySelector("#exercise-3");
button.addEventListener("click", buttonHandler);

function buttonHandler() {
    element.style.color = 'pink';
}


//ex 4 Add a click event listener to a button that changes the text of a paragraph when clicked.

const el = document.querySelector("#ex-4");
const bttn = document.querySelector("#exercise-4");
bttn.addEventListener("click", bttnHandler);

function bttnHandler() {
    el.textContent = "oopps";
}


//ex 5 Create an HTML page with a list of items. Write a JavaScript function that adds a new item to the list when a button is clicked.

const elmnt = document.querySelector("#ex-5");
const bttun = document.querySelector("#exercise-5");
bttun.addEventListener("click", anotherButtonHandler);

function anotherButtonHandler() {

    const listItem = document.createElement('li')
         listItem.innerHTML = `
        <li>List Item 1<li>
          <li>List Item 2<li>
           <li>List Item 3<li>`
    
         element.appendChild(listItem)
}




// const student = {
//     name: "maggie",
//     grades1: [39,94,82],
//     averageGrades: function() {
        

//     }
// }



// let grades1 = [39, 94, 82]

// function averageGrade(grades) {

//     if(grades1 !== Number) {
//         return
//     }

//     let total = 0
//     let amountOfGrades = grades1.length
//     for(let index = 0; index < grades1.length; index++) {
//         let currentIndex = grades1[index];
//         console.log(currentIndex);
//         total += currentIndex;

//     }
//     console.log(total);
//     console.log(amountOfGrades);
//     console.log(Math.round(total / amountOfGrades));
    
// }

// averageGrade(grades1)




//class notes 
// console.log('im connected');

// const  person = {
//     name: "maggie serrano",
//     age: 30,
//     greet: function() {
//         console.log(`hello`);
        
//     }
// }

// console.log(person.age);

// person.name = "terry";


// console.log(person['name']);

// person.greet(); 

// person.greet = function(name) {
//     console.log(`hello ${name}`);
    
// }

// person.greet("Steffan")


// console.log(document);

// // const element = document.querySelector('#my-div');

// const element = document.querySelector('#my-unordered-list')
// // can also do .getElementbyID
// console.log(element);


// // const btn = document.querySelector("#btn")
// // btn.addEventListener("click", function(){
// //     console.log("clicked");
    
// // })


// btn.addEventListener("click", btnHandler);

// // function btnHandler() {
// //     console.log("clicked");
    
// }

// function btnHandler() {
//     // element.innerHTML = "hello universal"
//     // element.textContent = "adfadf"
//     // element.style.color = 'red'

//     const listItem = document.createElement('li')
//     listItem.innerHTML = `
//     <li>List Item 1<li>
//      <li>List Item 2<li>
//       <li>List Item 3<li>`

//     element.appendChild(listItem)



