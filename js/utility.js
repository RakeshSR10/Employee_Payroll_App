const stringifyDate = (date) => {
    const options = { day: 'numeric', month:'short', year:'numeric'};
    const newDate = !date ? "undefined" :
                    new Date(Date.parse(date)).toLocalDateString('en-GB', options);
    return newDate;                
}

//UC 13 - Ability to Update Employee Payroll Details from Home Page
const update = (node) => {
    let empPayrollData = empPayrollList.find(empData => empData._id == node._id);
    if (!empPayrollData) return;
    localStorage.setItem('editEmp', JSON.stringify(empPayrollData));
    window.location.replace(site_properties.add_emp_payroll_page);
}