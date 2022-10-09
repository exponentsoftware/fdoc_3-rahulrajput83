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

/* console.log(convertArrayToObject()) */

/* Copy the student object to newStudent without mutating the original object. In the new object add the following ?

	1. Add Bootstrap with level 8 to the front end skill sets
	2. Add Express with level 9 to the back end skill sets
	3. Add SQL with level 8 to the data base skill sets
	4. Add SQL without level to the data science skill sets */

    const student = {
        name: 'David',
        age: 25,
        skills: {
            frontEnd: [
                { skill: 'HTML', level: 10 },
                { skill: 'CSS', level: 8 },
                { skill: 'JS', level: 8 },
                { skill: 'React', level: 9 }
            ],
            backEnd: [
                { skill: 'Node',level: 7 },
                { skill: 'GraphQL', level: 8 },
            ],
            dataBase:[
                { skill: 'MongoDB', level: 7.5 },
            ],
            dataScience:['Python', 'R', 'D3.js']
        }
    }


    /* {
			name: 'David',
			age: 25,
			skills: {
				frontEnd: [
					{skill: 'HTML',level: 10},
					{skill: 'CSS',level: 8},
					{skill: 'JS',level: 8},
					{skill: 'React',level: 9},
					{skill: 'BootStrap',level: 8}
				],
				backEnd: [
					{skill: 'Node',level: 7},
					{skill: 'GraphQL',level: 8},
					{skill: 'Express',level: 9}
				],
				dataBase: [
					{ skill: 'MongoDB',level: 7.5},
					{ skill: 'SQL',level: 8}
				],
				dataScience: ['Python','R','D3.js','SQL']
			}
		}+ */


const newStudent = {...student};
newStudent.skills.frontEnd.push({skill: 'Bootstrap', lavel: 8});
newStudent.skills.backEnd.push({skill: 'Express', lavel: 9});
newStudent.skills.dataBase.push({skill: 'SQL', lavel: 8});
newStudent.skills.dataScience.push('SQL')
console.log(newStudent)