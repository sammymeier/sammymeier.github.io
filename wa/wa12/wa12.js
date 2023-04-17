// Problem 1
let emp = '{"employees": [' +
    ' {"firstname": "Sam", "department": "Tech", "designation": "Manager", "salary": "40,000", "raise eligable": "True" },' +
    ' {"firstname": "Mary", "department": "Finance", "designation": "Trainee", "salary": "18,500", "raise eligable": "True" },' +
    ' {"firstname": "Bill", "department": "HR", "designation": "Executive", "salary": "21,200", "raise eligable": "False"} ]}';

const employees = JSON.parse(emp);

console.log("Problem 1");
console.log(employees);

let com = '{"company": [' +
' {"companyname": "Tech Stars", "website": "www.techstars.site", "employees": [' +
' {"firstname": "Sam", "department": "Tech", "designation": "Manager", "salary": "40,000", "raise eligable": "True" },' +
' {"firstname": "Mary", "department": "Finance", "designation": "Trainee", "salary": "18,500", "raise eligable": "True" },' +
' {"firstname": "Bill", "department": "HR", "designation": "Executive", "salary": "21,200", "raise eligable": "False"} ]}]}';

// Problem 2
const company = JSON.parse(com);

console.log("Problem 2");
console.log(company);

let emp2 = '{"employees": [' +
' {"firstname": "Sam", "department": "Tech", "designation": "Manager", "salary": "40,000", "raise eligable": "True" },' +
' {"firstname": "Mary", "department": "Finance", "designation": "Trainee", "salary": "18,500", "raise eligable": "True" },' +
' {"firstname": "Bill", "department": "HR", "designation": "Executive", "salary": "21,200", "raise eligable": "False"}, ' +
' {"firstname": "Anna", "department": "Tech", "designation": "Executive", "salary": "25,600", "raise eligable": "False"} ]}';

const employees2 = JSON.parse(emp2);

console.log("Problem 3");
console.log(employees2);

// Problem 3
const newEmployee = {
firstName: 'Anna',
department: 'Tech',
designation: 'Executive',
salary: 25600,
raiseEligible: false
};

company.employees.push(newEmployee);

console.log(company);

// Problem 4
let totalSalary = 0;

company.employees.forEach(employee => {
totalSalary += employee.salary;
});

console.log(totalSalary);

// Problem 5
function giveRaise(employee) {
if (employee.raiseEligible) {
employee.salary *= 1.1;
employee.raiseEligible = false;
}
}

company.employees.forEach(employee => {
giveRaise(employee);
});

console.log(company);

// Problem 6
const workingFromHome = ['Anna', 'Sam'];

company.employees.forEach(employee => {
employee.wfh = workingFromHome.includes(employee.firstName);
});

console.log(company);
