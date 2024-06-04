// Schedule.js
import React from 'react';

const schedule = [
  { time: '08:00 AM', doctor: 'Dr. Smith', patient: 'John Doe', room: '101' },
  { time: '09:00 AM', doctor: 'Dr. Brown', patient: 'Jane Doe', room: '102' },
  { time: '10:00 AM', doctor: 'Dr. Green', patient: 'Jim Beam', room: '103' },
  // Add more schedule entries as needed
];

const Schedule = () => {
  return (
    <div className="max-w-md mx-left px-20 py-9  bg-white shadow-lg rounded-lg">

    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Hospital Schedule</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Time</th>
            <th className="py-2 px-4 border-b">Doctor</th>
            <th className="py-2 px-4 border-b">Patient</th>
            <th className="py-2 px-4 border-b">Room</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((entry, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{entry.time}</td>
              <td className="py-2 px-4 border-b">{entry.doctor}</td>
              <td className="py-2 px-4 border-b">{entry.patient}</td>
              <td className="py-2 px-4 border-b">{entry.room}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Schedule;