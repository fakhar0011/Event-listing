import React from 'react';

const EventCard = ({ event }) => {
  const { name, date, time, location, description } = event;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-5 flex flex-col justify-between h-full">
      <div>
        <h3 className="text-xl font-semibold text-blue-600 mb-2">{name}</h3>
        <p className="text-sm text-gray-500 mb-1">
          📅 {date} | 🕒 {time}
        </p>
        <p className="text-sm text-gray-500 mb-3">
          📍 {location}
        </p>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>

      <div className="mt-4">
        <button
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition font-medium cursor-pointer"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default EventCard;
