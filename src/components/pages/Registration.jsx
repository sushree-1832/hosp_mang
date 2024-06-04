import React, { useState } from 'react';
import RegistrationForm from './Registrationform';

const App = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="flex  justify-center ">
      <button
        onClick={handleOpenForm}
        className="py-2 px-4 bg-blue-600 text-white rounded-md"
      >
        Open Registration Form
      </button>
      {isFormOpen && <RegistrationForm onClose={handleCloseForm} />}
    </div>
  );
};

export default App;