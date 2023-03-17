let course1 = {code: "ACIT 1420", 
               name:"Intro to System Administration"};

let course2 = {code: "MATH 1310",
               name: "Technical Math for IT"};

let course3 = {code:"ACIT 1630",
               name:"Database Systems"};



const courseList = [course1, course2, course3];

let array_length;
let course_num;
let length;
let result;
let not_in_list;
not_in_list = false;
let new_course;

do{
    course_num = prompt("Please enter a 4-digit course number");
    length = course_num.length;
    

}
while((isNaN(course_num) == true) || (length !== 4));

array_length = courseList.length;


for (let i = 0; i <= (array_length - 1); i++){
    result = courseList[i].code.includes(course_num)
    if (result){
        console.log(`Yes I am taking the course: ${courseList[i].code}`)
    } else {
        not_in_list = true
    
    }
    
    
}


if ((not_in_list)){
        new_course = `course${array_length + 1}`

        courseList.push(new_course = {code: `${course_num}`, name: 'null'})
        console.log("Course added succesfully")
    }
