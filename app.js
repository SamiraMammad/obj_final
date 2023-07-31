// task 1
// const student = {
//     _marks: 0, 
  
    
//     get marks() {
//       return this._marks;
//     },
  
    
//     set marks(value) {
//       if (value >= 0) {
//         this._marks = value;
//       } else {
//         console.error("Marks cannot be set to a value less than 0.");
//       }
//     }
//   };
  
  
//   console.log(student.marks); 
//   student.marks = 17; 
//   console.log(student.marks); 
  
//   student.marks = -17; 
//   console.log(student.marks); 
  



// task 3
// const obj = {
//     id: 1,
//     username: "John",
//     password: "secret",
//     email: "john@email.com",
//   };
  
//   function WithoutPassword(obj) {
//     const clonedObj = Object.assign({}, obj);
//     delete clonedObj.password;
//     return JSON.stringify(clonedObj);
//   }
  
//   const jsonString = WithoutPassword(obj);
  
//   console.log(jsonString);
  

// task 4
// function counterObject() {
//     let counter = 0;
  
//     return {
//       get counter() {
//         return ++counter;
//       }
//     };
//   }
  
//   const obj = counterObject();
  
//   console.log(obj.counter); 
//   console.log(obj.counter); 
//   console.log(obj.counter);
//   console.log(obj.counter);
//   console.log(obj.counter);
//   console.log(obj.counter);
//   console.log(obj.counter);
//   console.log(obj.counter);
//   console.log(obj.counter);
//   console.log(obj.counter);

// task 5
// class employee {
//     constructor (id, name ){
//         this.id=id;
//         this.name=name;
//     }
   
//     salary = 0;
//     get getsalary (){
//         return salary;

//     }
//     set setsalary (value){
//         if(value>18){
//          this.salary=value;

//         }
//         else{
//             throw console.error("your age under 18");
//         }
//     }


// }

// employee = new employee (110 , "Samira");
// employee.setsalary = parseInt(prompt("enter number"));
// console.log(employee);



// task 6

// let person = {
// 	name: "Ted",
// 	contact: {
// 		phone: "590 445 4",
// 		email: "salam@gmail.com",
// 		address: {
// 			city: "Istanbul",
// 			country: "Turkiye"
// 		}
// 	}
// };

// function nestedObj(obj,prefix=''){
//     for(const key in obj){
//       if(typeof obj[key]==='object' && obj[key] !==null){
//         nestedObj(obj[key],prefix+key+'.')
//       }else{
//         console.log('key : '+prefix+key+' value : '+obj[key]);
//       }
//     }
// }

// nestedObj(person)

