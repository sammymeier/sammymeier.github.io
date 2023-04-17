// Problem 1
let emp = '{"employees": [' +
    ' {"firstname": "Sam", "department": "Tech", "designation": "Manager", "salary": "40,000", "raise eligable": "True" },' +
    ' {"firstname": "Mary", "department": "Finance", "designation": "Trainee", "salary": "18,500", "raise eligable": "True" },' +
    ' {"firstname": "Bill", "department": "HR", "designation": "Executive", "salary": "21,200", "raise eligable": "False"} ]}';

const employees = JSON.parse(emp);

console.log("Problem 1");
console.log(employees);

// Problem 2
let com = '{"company": [' +
' {"companyname": "Tech Stars", "website": "www.techstars.site", "employees": [' +
' {"firstname": "Sam", "department": "Tech", "designation": "Manager", "salary": "40,000", "raise eligable": "True" },' +
' {"firstname": "Mary", "department": "Finance", "designation": "Trainee", "salary": "18,500", "raise eligable": "True" },' +
' {"firstname": "Bill", "department": "HR", "designation": "Executive", "salary": "21,200", "raise eligable": "False"} ]}]}';

const company = JSON.parse(com);

console.log("Problem 2");
console.log(company);

// Problem 3
let emp2 = '{"employees": [' +
' {"firstname": "Sam", "department": "Tech", "designation": "Manager", "salary": "40,000", "raise eligable": "True" },' +
' {"firstname": "Mary", "department": "Finance", "designation": "Trainee", "salary": "18,500", "raise eligable": "True" },' +
' {"firstname": "Bill", "department": "HR", "designation": "Executive", "salary": "21,200", "raise eligable": "False"},' +
' {"firstname": "Anna", "department": "Tech", "designation": "Executive", "salary": "25,600", "raise eligable": "False"} ]}';

const employees2 = JSON.parse(emp2);

console.log("Problem 3");
console.log(employees2);


// Problem 4    
let totalSalary = 0;
for (let employee of company.company[0].employees) {
  let salary = parseInt(employee.salary.replace(',', ''));
  totalSalary += salary;
}
console.log("Total salary for all employees: $" + totalSalary);

// Problem 5
function giveRaise(company) {
    for (let employee of company.company[0].employees) {
      if (employee["raise eligable"] === "True") {
        let salary = parseInt(employee.salary.replace(',', ''));
        let raiseAmount = salary * 0.1;
        let newSalary = salary + raiseAmount;
        employee.salary = newSalary.toLocaleString('en-US');
        employee["raise eligable"] = "False";
        console.log(`Gave a raise of $${raiseAmount} to ${employee.firstname}. New salary is $${employee.salary}.`);
      }
    }
  }
  
  giveRaise(company);
    
// Problem 6
const workingFromHome = ['Anna', 'Sam'];

function setWFH(company, wfhList) {
  for (let employee of company.company[0].employees) {
    if (wfhList.includes(employee.firstname)) {
      employee.wfh = true;
    } else {
      employee.wfh = false;
    }
  }
}

setWFH(company, workingFromHome);
console.log(company);
