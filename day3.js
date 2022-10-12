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


const newStudent = {...student};
newStudent.skills.frontEnd.push({skill: 'Bootstrap', lavel: 8});
newStudent.skills.backEnd.push({skill: 'Express', lavel: 9});
newStudent.skills.dataBase.push({skill: 'SQL', lavel: 8});
newStudent.skills.dataScience.push('SQL')
/* console.log(newStudent) */

/* Use the student object to solve the following questions:
   a. Find the length of student object keys
   b. Find the length of the student object values
   c. Find the length of skills object keysuyb 
   d. check if the student object has graphicDesign property
   e. Iterate the keys of the student object */


/* let ValLen = 0;
Object.values(newStudent).forEach(() => {
    len++;
});
console.log(ValLen);
let keyLen = 0;
Object.keys(newStudent).forEach(() => {
    len++;
});
 */

/* a. */ console.log(Object.keys(newStudent).length);
/* b. */ console.log(Object.values(newStudent).length);
/* c. */ console.log(Object.values(newStudent.skills).length);
/* d. */ console.log(newStudent.hasOwnProperty('graphicDesign'));
/* e. */ Object.keys(newStudent).forEach((e) => console.log(e));




/* Q2. */


const users = [
    {
            _id: 'ab12ex',
            username: 'Alex',
            email: 'alex@alex.com',
            password: '123123',
            createdAt:'17/05/2019 9:00 AM',
            isLoggedIn: false
    },
    {
            _id: 'fg12cy',
            username: 'Asab',
            email: 'asab@asab.com',
            password: '123456',
            createdAt:'17/05/2019 9:30 AM',
            isLoggedIn: true
    },
    {
            _id: 'zwf8md',
            username: 'Brook',
            email: 'brook@brook.com',
            password: '123111',
            createdAt:'17/05/2019 9:45 AM',
            isLoggedIn: true
    },
    {
            _id: 'eefamr',
            username: 'Martha',
            email: 'martha@martha.com',
            password: '123222',
            createdAt:'17/05/2019 9:50 AM',
            isLoggedIn: false
    },
    {
            _id: 'ghderc',
            username: 'Thomas',
            email: 'thomas@thomas.com',
            password: '123333',
            createdAt:'17/05/2019 10:00 AM',
            isLoggedIn: false
    }
    ];


/* a. */
/* a. */
function signUp(name, email, password){
    for(let i = 0; i < users.length; i++ ) {
        if(users[i].email === email){
            return `Already Registered ${users[i]}`
        }
    }
    users.push({
        _id: 'jfgig',
        username: name,
        email: email,
        password: password,
        createdAt: '12/10/2022 12:00 PM',
        isLoggedIn: false
    })
    return 'User Successfully Registered';
}

console.log(signUp('Rahul', 'thomas@thomas.com', 'password'));

/* b. */
function signIn(email, password) {
    for(let i = 0; i < users.length; i++) {
        if(users[i].email === email) {
            if(users[i].password === password) {
                return 'Successfully Registered'
            }
            else {
                return 'Wrong Password'
            }
        }
    }
    return 'User Not Registered...'
}

console.log(signIn('thomas@thomas.com', '123333'))