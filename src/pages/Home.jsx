import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import EventCard from '../components/EventCard';

const Home = () => {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Load dummy events from public/events.json
  useEffect(() => {
    fetch('/events.json')
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error('Error fetching events:', error));
  }, []);

  // Filter events by name
  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Hero />
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />

      <section className="max-w-7xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Featured Events</h2>

        {filteredEvents.length === 0 ? (
          <p className="text-gray-500">No events found.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Home;
