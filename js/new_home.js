//UC 11
let empPayrollList;//global variable
window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList = getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
});

const getEmployeePayrollDataFromStorage = () => {
    return localStorage.getItem('EmployeePayrollList') ?
                        JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}

//UC 9 - View Employee Payroll Details in a Tabular Format from JS File
createInnerHtml = () => {
    if (empPayrollList.length == 0) return;

    const headerHtml =  "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                       "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    //UC 10 set innerHtml                   
    let innerHtml = `${headerHtml}`;
    //let employeePayrollList = createEmployeePayrollJSON();
    //UC 10 -for loop for printing multiple employee
    for(const empPayrollData of employeePayrollList) {
        innerHtml = `${innerHtml}
        <tr>
            <td><img class="progile" src="${empPayrollData._profilePic}" alt=""></td>
                <td>${empPayrollData._name}</td>
                <td>${empPayrollData._gender}</td>
                <td>${getDeptHtml(empPayrollData._department)}</td>
                <td>${empPayrollData._salary}</td>
                <td>${empPayrollData._startDate}</td>
                <td>
                    <img name="${empPayrollData._id}" onclick="remove(this)" src="../assets/icons/delete-black-18dp.svg" alt="delete">
                    <img name="${empPayrollData._id}" onclick="update(this)" src="../assets/icons/create-black-18dp.svg" alt="edit">
                </td>    
        </tr> `;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;
}

//UC 10-JSON objects
/*const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
        {
            _name: 'Rakesh',
            _gender: 'Male',
            _department: [
                'Engineering', 'Finance'
            ],
            _salary: '500000',
            _startDate: '29 Oct 2019',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '../assets/profile-images/Ellipse -2.png'
        },
        {
            _name: 'Rutuja',
            _gender: 'Female',
            _department: [
                'HR'
            ],
            _salary: '400000',
            _startDate: '18 Sep 2019',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '../assets/profile-images/Ellipse -1.png'
        }
    ];
    return empPayrollListLocal;
}*/

//UC 10 -To print Multiple Department without showing 'undefined'.
const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}