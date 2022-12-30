/*
UC1
Ability to check employee present or absent
*/
const IS_ABSENT = 0;

    let empCheck =  Math.floor(Math.random() * 10) %  2;

    if (empCheck == 0) {//Checking employee is present or absent - present = 1 and absent = 0 
        console.log("Employee is Absent");
    } else {
        console.log("Employee is Present");
    }