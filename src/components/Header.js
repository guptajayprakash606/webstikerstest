// let users = [
//   {id: 10, name: "Amit"},
//   {id: 22, name: "Devang"},
//   {id: 45, name: "Krunal"},
//   {id: 5, name: "Niraj"}
// ]
// /* Update Username given arrayr using specific id*/
// const updateUser = (props, value, name) => {
//   const obj = users.find(x => x.name === name);
//   if(obj){
//     obj[props] = value;
//   }
// }
// updateUser("id", "50", "Amit");
// console.log(users); 

// /* Find User Name of the given array  */ 
// const usersName = users.map((user) => {
//     return `${user.name}`
// })
// console.log(usersName);

// /* Find User id of the given array  */ 
// const usersId = users.map((userId) => {
//     return `${userId.id}`
// })
// console.log(usersId);

// /* Sort the Users in accending order and deccending order using id*/ 
// const sortUser = users.sort((user1, user2) => {
//   return user1.id - user2.id;
// })
// console.log(sortUser);

// const array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

// const sortArray = array.sort((arr1, arr2) => {
//     return arr1 - arr2;
// })
// console.log(sortArray);

// /* Remove duplicate array varible in given array */
// const removeDuplicate = (array) => {
//     return array.filter((item, index) => 
//     array.indexOf(item) == index); 
// }
// console.log(removeDuplicate(array));

// const addArray = array.length;
// console.log(addArray);

// const addArray1 = array.push(50)
// console.log(addArray)

// import React from 'react'
// // import {Navbar, Nav, Container} from 'react-bootstrap';


// const Header = () => {
//    const array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
//    const array1 = [25, 60, 50];

//   function removeDuplicate(array){
//       return array.filter((item, index) => 
//       array.indexOf(item) == index); 
//   }
//   console.log(removeDuplicate(array));

//   const margeArray = array.concat(array1);
//   console.log(margeArray)
//   console.log(Math.max(...array))
//   console.log(Math.min(...array))
  
  
//     let users = [
//       {id: 10,name: "Amit"},
//       {id: 22,name: "Devang"},
//       {id: 45,name: "Krunal"},
//       {id: 5,name: "Niraj"}
//     ]

//     // Retrieve item and assign ref to updatedItem
//     const updateName = (props, value, id) => {
//       const obj = users.find((x => x.id === id))
//         if(obj){
//           obj[props] = value;
//         }
//     }
//     updateName("name", "ABC", 10)
//     console.log(users);

//     const addArray = array.length()

//   console.log(typeof(array))
//   return (
//     <div>
//        hello
//     </div>
//   )
// }

// export default Header