// const names = ['Donald', 'Alex', 'Bob']
// // console.log(names)
//
// const copyName = [...names]
// // console.log(copyName.sort())
//
// const names_2 = ['Donald', 'alex', 'Bob', 'AlEx', 'Юрий', 'Алексей']
// // console.log(names_2.map(el => el.toLowerCase()).sort())
//
// const nums = [1000, 333, 9999, 77, -3]
// // console.log(nums.sort())
//
// const compFunc = (a, b) => { // по возрастанию
//     if (a > b) { // надо поменять местами
//         return 1;
//     } else {
//         return -1;
//     }
// }
//
// // console.log(nums.sort((a, b) => a - b))
// // console.log(nums.sort((a, b) => b - a))
// // console.log(nums.reverse())
//
//
// const students = [
//     {
//         name: "Bob",
//         age: 22,
//         isMarried: true,
//         scores: 95
//     },
//     {
//         name: "Alex",
//         age: 24,
//         isMarried: true,
//         scores: 89
//     },
//     {
//         name: "Helge",
//         age: 24,
//         isMarried: true,
//         scores: 90
//     },
//     {
//         name: "Nick",
//         age: 20,
//         isMarried: false,
//         scores: 120
//     },
//     {
//         name: "John",
//         age: 19,
//         isMarried: false,
//         scores: 121
//     },
//     {
//         name: "alex",
//         age: 22,
//         isMarried: true,
//         scores: 89
//     },
// ];
//
// const sortByName = (a, b) => {
//     if (a.name.toLowerCase() > b.name.toLowerCase()) {
//         return 10
//     } else {
//         return -10
//     }
// }
//
// console.log(students.sort(sortByName));
// console.log(students.sort((a, b) => a.name.localeCompare(b.name)));
//
//
// console.log(students.sort((a, b) => a.scores - b.scores))
//
//
// //bubble sort
// const nums_2 = [100, 333, 999, 77, -3];
//
// for (let j = 0; j < nums_2.length-1; j++) {
//     for(let i = 0; i<(nums_2.length-1 - j); i++ ) {
//         if (nums_2[i] > nums_2[i + 1]) {
//             [nums_2[i],nums_2[i+1]] = [nums_2[i+1],nums_2[i]]
//         }
//     }
// }
//
// console.log(nums_2)
//
//
