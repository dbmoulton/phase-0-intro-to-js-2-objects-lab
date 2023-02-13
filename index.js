const employee = {
    name : "David",
    streetAddress : "393 street"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = { ...employee };
  
    newObj[key] = value;
  
    return newObj;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
  
    return employee;
};

function deleteFromEmployeeByKey(employee) {
    const newObj = { ...employee };
  
    delete newObj.name;
  
    return newObj;
};

function destructivelyDeleteFromEmployeeByKey(employee) {
    delete employee.name;
  
    return employee;
};