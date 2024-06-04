// src/App.js

import React, { useState } from 'react';

const initialEmployees = [
  
  // Add more initial employees as needed
];

function App() {
  const [employees, setEmployees] = useState(initialEmployees);
  const [isEditing, setIsEditing] = useState(null);
  const [newEmployee, setNewEmployee] = useState({
    id: '', name: '', designation: '', dob: '', age: '', address: '', email: '', phone: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee({ ...newEmployee, [name]: value });
  };

  const handleEditChange = (e, id) => {
    const { name, value } = e.target;
    const updatedEmployees = employees.map((emp) =>
      emp.id === id ? { ...emp, [name]: value } : emp
    );
    setEmployees(updatedEmployees);
  };

  const addEmployee = () => {
    if (newEmployee.id) {
      setEmployees([...employees, newEmployee]);
      setNewEmployee({ id: '', name: '', designation: '', dob: '', age: '', address: '', email: '', phone: '' });
    }
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  const editEmployee = (id) => {
    setIsEditing(id);
  };

  const saveEdit = () => {
    setIsEditing(null);
  };

  return (
    <div className="container mx-auto p-4">
        <h2 className= "row-span-1 text-6xl text-center text-teal-500 font-bold">EMPLOYEE DETAILS</h2>
      <h1 className="text-2xl font-bold mb-4">Employee Table</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Employee ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Designation</th>
            <th className="py-2 px-4 border-b">DOB</th>
            <th className="py-2 px-4 border-b">Age</th>
            <th className="py-2 px-4 border-b">Address</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Phone</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              {isEditing === employee.id ? (
                <>
                  <td className="py-2 px-4 border-b"><input type="text" name="id" value={employee.id} readOnly className="w-full"/></td>
                  <td className="py-2 px-4 border-b"><input type="text" name="name" value={employee.name} onChange={(e) => handleEditChange(e, employee.id)} className="w-full"/></td>
                  <td className="py-2 px-4 border-b"><input type="text" name="designation" value={employee.designation} onChange={(e) => handleEditChange(e, employee.id)} className="w-full"/></td>
                  <td className="py-2 px-4 border-b"><input type="date" name="dob" value={employee.dob} onChange={(e) => handleEditChange(e, employee.id)} className="w-full"/></td>
                  <td className="py-2 px-4 border-b"><input type="number" name="age" value={employee.age} onChange={(e) => handleEditChange(e, employee.id)} className="w-full"/></td>
                  <td className="py-2 px-4 border-b"><input type="text" name="address" value={employee.address} onChange={(e) => handleEditChange(e, employee.id)} className="w-full"/></td>
                  <td className="py-2 px-4 border-b"><input type="email" name="email" value={employee.email} onChange={(e) => handleEditChange(e, employee.id)} className="w-full"/></td>
                  <td className="py-2 px-4 border-b"><input type="tel" name="phone" value={employee.phone} onChange={(e) => handleEditChange(e, employee.id)} className="w-full"/></td>
                  <td className="py-2 px-4 border-b">
                    <button onClick={saveEdit} className="bg-green-500 text-white py-1 px-2 rounded">Save</button>
                  </td>
                </>
              ) : (
                <>
                  <td className="py-2 px-4 border-b">{employee.id}</td>
                  <td className="py-2 px-4 border-b">{employee.name}</td>
                  <td className="py-2 px-4 border-b">{employee.designation}</td>
                  <td className="py-2 px-4 border-b">{employee.dob}</td>
                  <td className="py-2 px-4 border-b">{employee.age}</td>
                  <td className="py-2 px-4 border-b">{employee.address}</td>
                  <td className="py-2 px-4 border-b">{employee.email}</td>
                  <td className="py-2 px-4 border-b">{employee.phone}</td>
                  <td className="py-2 px-4 border-b">
                    <button onClick={() => editEmployee(employee.id)} className="bg-blue-500 text-white py-1 px-2 rounded mr-2">Edit</button>
                    <button onClick={() => deleteEmployee(employee.id)} className="bg-red-500 text-white py-1 px-2 rounded">Delete</button>
                  </td>
                </>
              )}
            </tr>
          ))}
          <tr>
            <td className="py-2 px-4 border-b"><input type="text" name="id" value={newEmployee.id} onChange={handleInputChange} className="w-full"/></td>
            <td className="py-2 px-4 border-b"><input type="text" name="name" value={newEmployee.name} onChange={handleInputChange} className="w-full"/></td>
            <td className="py-2 px-4 border-b"><input type="text" name="designation" value={newEmployee.designation} onChange={handleInputChange} className="w-full"/></td>
            <td className="py-2 px-4 border-b"><input type="date" name="dob" value={newEmployee.dob} onChange={handleInputChange} className="w-full"/></td>
            <td className="py-2 px-4 border-b"><input type="number" name="age" value={newEmployee.age} onChange={handleInputChange} className="w-full"/></td>
            <td className="py-2 px-4 border-b"><input type="text" name="address" value={newEmployee.address} onChange={handleInputChange} className="w-full"/></td>
            <td className="py-2 px-4 border-b"><input type="email" name="email" value={newEmployee.email} onChange={handleInputChange} className="w-full"/></td>
            <td className="py-2 px-4 border-b"><input type="tel" name="phone" value={newEmployee.phone} onChange={handleInputChange} className="w-full"/></td>
            <td className="py-2 px-4 border-b">
              <button onClick={addEmployee} className="bg-green-500 text-white py-1 px-2 rounded">Add</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;




