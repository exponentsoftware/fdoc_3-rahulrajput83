/* 1. Write a function called convertArrayToObject which can convert the array to a structured object. */

const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]


function convertArrayToObject() {
    const newArr = [];
    for(let i = 0; i < students.length; i++) {
        let newObj = {};
        newObj.name = students[i][0];
        newObj.skills = students[i][1];
        newObj.scores = students[i][2];
        newArr.push(newObj);
    }
    return newArr;
}

console.log(convertArrayToObject())