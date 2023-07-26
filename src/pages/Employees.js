import '../index.css';
import { useState } from 'react';
import Employee from '../components/Employee';
import { v4 as uuidv4 } from 'uuid';
import AddEmployee from '../components/AddEmployee';
import EditEmployee from '../components/EditEmployee';

function Employees() {
  const [employees, setEmployees] = useState([
    { 
      id: 1,
      name: 'John', 
      role: 'dev', 
      img: 'https://images.pexels.com/photos/13096925/pexels-photo-13096925.jpeg' 
    },
    { 
      id: 2,
      name: 'Sal', 
      role: 'Marketing', 
      img: 'https://images.pexels.com/photos/13096925/pexels-photo-13096925.jpeg' 
    },
    { 
      id: 3,
      name: 'John', 
      role: 'dev', 
      img: 'https://images.pexels.com/photos/13096925/pexels-photo-13096925.jpeg' 
    },
    { 
      id: 4,
      name: 'John', 
      role: 'dev', 
      img: 'https://images.pexels.com/photos/13096925/pexels-photo-13096925.jpeg' 
    },
  ]);
  const showEmployees = true;
  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id === employee.id) {
        return { ...employee, name: newName, role: newRole };
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  }
  function addEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    };
    setEmployees([...employees, newEmployee]);
  }
  return (
    <div className="">
      {showEmployees ? (
        <>
            <div className='flex flex-wrap justify-center'>
              {employees.map((employee) => {
                const editEmployee = (
                    <EditEmployee 
                        id={employee.id} 
                        name={employee.name} 
                        role={employee.role} 
                        updateEmployee={updateEmployee} />
                        );
                return (
                  <Employee
                      key={employee.id}
                      id={employee.id}
                      name={employee.name}
                      role={employee.role}
                      img={employee.img}
                      editEmployee={editEmployee}
                />
                );
              })} 
            </div>  
            <AddEmployee addEmployee={addEmployee} />
        </>
      ) : (
        <p>No employees to show</p>
      )
      }
    </div>
  );
}

export default Employees;
