// src/App.js

import React, { useState } from 'react';

const initialEmployees = [
  // Add more initial employees as needed
];

function App() {
  const [employees, setEmployees] = useState(initialEmployees);
  const [isEditing, setIsEditing] = useState(null);
  const [newEmployee, setNewEmployee] = useState({
    id: '', name: '', specifications: ''
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
      setNewEmployee({ id: '', name: '', specifications: '' });
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
      <h2 className="row-span-1 text-6xl text-center text-teal-500 font-bold">DOCTOR DETAILS</h2>
      <h1 className="text-2xl font-bold mb-4">Doctor's Table</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Employee ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Specifications</th>
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
                  <td className="py-2 px-4 border-b"><input type="text" name="specifications" value={employee.specifications} onChange={(e) => handleEditChange(e, employee.id)} className="w-full"/></td>
                  <td className="py-2 px-4 border-b">
                    <button onClick={saveEdit} className="bg-green-500 text-white py-1 px-2 rounded">Save</button>
                  </td>
                </>
              ) : (
                <>
                  <td className="py-2 px-4 border-b">{employee.id}</td>
                  <td className="py-2 px-4 border-b">{employee.name}</td>
                  <td className="py-2 px-4 border-b">{employee.specifications}</td>
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
            <td className="py-2 px-4 border-b"><input type="text" name="specifications" value={newEmployee.specifications} onChange={handleInputChange} className="w-full"/></td>
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











// import React, { useState } from 'react';

// const App = () => {
//   const [employees, setEmployees] = useState([]);
//   const [newEmployee, setNewEmployee] = useState({ id: '', name: '', specifications: '' });
//   const [editingIndex, setEditingIndex] = useState(-1);

//   const handleAdd = () => {
//     setEmployees([...employees, newEmployee]);
//     setNewEmployee({ id: '', name: '', specifications: '' });
//   };

//   const handleEdit = (index) => {
//     setNewEmployee(employees[index]);
//     setEditingIndex(index);
//   };

//   const handleSave = () => {
//     const updatedEmployees = [...employees];
//     updatedEmployees[editingIndex] = newEmployee;
//     setEmployees(updatedEmployees);
//     setNewEmployee({ id: '', name: '', specifications: '' });
//     setEditingIndex(-1);
//   };

//   const handleDelete = (index) => {
//     setEmployees(employees.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="container mx-auto p-4">
//         <h2 className= "row-span-1 text-6xl text-center text-teal-500 font-bold">DOCTOR DETAILS</h2>
//       <h1 className="text-2xl font-bold mb-4">Doctor Table</h1>
//       <div className="mb-4">
//         <input
//           type="text"
//           placeholder="ID"
//           value={newEmployee.id}
//           onChange={(e) => setNewEmployee({ ...newEmployee, id: e.target.value })}
//           className="border p-2 mr-2"
//         />
//         <input
//           type="text"
//           placeholder="Name"
//           value={newEmployee.name}
//           onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
//           className="border p-2 mr-2"
//         />
//         <input
//           type="text"
//           placeholder="Specifications"
//           value={newEmployee.specifications}
//           onChange={(e) => setNewEmployee({ ...newEmployee, specifications: e.target.value })}
//           className="border p-2 mr-2"
//         />
//         {editingIndex === -1 ? (
//           <button onClick={handleAdd} className="bg-blue-500 text-white p-2 rounded">Add</button>
//         ) : (
//           <button onClick={handleSave} className="bg-green-500 text-white p-2 rounded">Save</button>
//         )}
//       </div>
//       <table className="min-w-full border">
//         <thead>
//           <tr>
//             <th className="border px-4 py-2">Employee_id</th>
//             <th className="border px-4 py-2">Name</th>
//             <th className="border px-4 py-2">Specifications</th>
//             <th className="border px-4 py-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees.map((employee, index) => (
//             <tr key={index}>
//               <td className="border px-4 py-2">{employee.id}</td>
//               <td className="border px-4 py-2">{employee.name}</td>
//               <td className="border px-4 py-2">{employee.specifications}</td>
//               <td className="border px-4 py-2">
//                 <button
//                   onClick={() => handleEdit(index)}
//                   className="bg-yellow-500 text-white p-1 rounded mr-2"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(index)}
//                   className="bg-red-500 text-white p-1 rounded"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default App;















