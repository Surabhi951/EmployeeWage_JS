/*UC6
Storing daily wage in a array
*/
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_HRS_IN_MONTH = 160;
const NO_OF_WORKING_DAYS = 20;

//using function
function getWorkingHrs(empCheck) {
switch(empCheck) {
    case IS_PART_TIME:
        return PART_TIME_HOURS;
    case IS_FULL_TIME:
        return FULL_TIME_HOURS;
    default:
        return 0;    
}
}

//Calculate daily wage method
function CalcDailyWage(empHrs){
    return empHrs * WAGE_PER_HOUR;
}

//initialize variables
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();

while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NO_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHrs(empCheck);
    totalEmpHrs += empHrs
    empDailyWageArr.push(CalcDailyWage(empHrs));
    empDailyWageMap.set(totalWorkingDays, CalcDailyWage(empCheck));
}

let empWage = CalcDailyWage(totalEmpHrs);//calling CalDailyWage method and store in empWage variable
//print Total working days,Total employee hrs and empWage   
console.log("Total Days : " + totalWorkingDays + "Total Hrs : " + totalEmpHrs + "Emp Wage : " + empWage);


//Array Helper Function
//UC-7A - calculate total wage using array forEach traversal or reduce method
let totEmpWage = 0;
function sum(dailyWage) {
    totEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7A - Total Days : " + totalWorkingDays + "Total Hrs : " + totalEmpHrs + "Emp Wage : " + totEmpWage);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("UC7A - Emp Wage with reduce : " + empDailyWageArr.reduce(totalWages, 0));

//UC-7B - Show the day along with Daily Wage using Array map helper function
let dailyCntr = 0;
function mapDayWithWage(dailyWage) {
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
}
let mapDayWithWagrArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B = Daily Wage Map");
console.log(mapDayWithWagrArr);

//UC-7C - Show Days when full time wage of 160 were earned
function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWagrArr.filter(fullTimeWage);
console.log("UC7C - Daily Wage Filter When Fulltime Wage Earned");
console.log(fullDayWageArr);

//UC-7D - Find the first occurrence when full time wage was earned using find function
function findFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC7D - First time Fulltime wage was earned on Day : " + mapDayWithWagrArr.find(findFullTimeWage));

//UC-7E - Check if every element of full time wage is truely holding full time wage
function isAllFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC7E - Check all element have full time wage : " + fullDayWageArr.every(isAllFullTimeWage));

//UC-7F - Check if there is any part time wage
function isAllPartTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC7F - Check if any part time wage : " + mapDayWithWagrArr.some(isAllPartTimeWage));

//UC-7G - Find the number of days the employee worked
function totalDaysWorked(numOfDays, dailyWage) {
    if(dailyWage > 0)
    return numOfDays+1;
    return numOfDays;
}
console.log("UC7G - Number of days emp worked : " + empDailyWageArr.reduce(totalDaysWorked, 0));

//UC8 - Store the day and the daily wage along with the total wage
console.log(empDailyWageMap);
function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("Emp wage map totalHrs : " + Array.from(empDailyWageMap.values()).reduce(totalWages, 0));
