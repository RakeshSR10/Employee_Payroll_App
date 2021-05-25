//UC 2 - Set Event Listener to DOM when is Loaded
window.addEventListener('DOMContentLoad', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function() {
        if(name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new EmployeePayrollData()).name = name.value;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });

    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function() {
        output.textContent = salary.value;
    });
});

//UC 3 - Create Employee Payroll Object on save
const save = () => {
    try {
        let employeePayrollData = createEmployeePayroll();
    } catch (e) {
        return;
    }
}

const createEmployeePayroll = () => {
    let employeePayrollData = new EmployeePayrollData();
    try {
        employeePayrollData.name = getInputValueById('#name');
    } catch (e) {
        setTextValue('.text-error', e);
        throw e;
    }
    employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
    employeePayrollData.department = getSelectedValues('[name=department]');
    employeePayrollData.salary = getSelectedValues('#salary');
    employeePayrollData.note = getSelectedValues('#notes');
    let date = getInputValueById('#day')+" "+getInputValueById('#month')+" "+
               getInputValueById('#year');
    employeePayrollData.date = Date.parse(date);
    alert(employeePayrollData.toString());
    return employeePayrollData;
}

const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let setItems = [];
    allItems.forEach(item => {
        if(item.checked) setItems.push(item.value);
    });
    return setItems;
}
/*
 *1: querySelector is newer feature
 *2: querySelector can be used when selecting by element name, nesting or class name.
 *3: querySelector lets you find elements with rules that cannot be expressed with getElementById.
  */
 const getInputValueById = (id) => {
     let value = document.querySelector(id).value;
     return value;
 }

 /*
 *1: getElementById(old method) is better supported than querySelector in older versions of the browsers.
 *2: The thing with getElementById is that it only allows to select an element by its id. */
const getInputElementValue = (id) => {
    let value = document.getElementById(id).value;
    return value;
}