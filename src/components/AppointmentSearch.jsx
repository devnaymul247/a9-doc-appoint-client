"use client";
import React, { useMemo, useState } from "react";
import AppointmentCard from "@/components/AppointmentCard";

const AppointmentSearch = ({ appointments = [] }) => {
  const [query, setQuery] = useState("");
  const [specialty, setSpecialty] = useState("all");

  const specialties = useMemo(() => {
    const unique = new Set();
    appointments.forEach((appointment) => {
      if (appointment?.specialty) unique.add(appointment.specialty);
    });
    return ["all", ...Array.from(unique).sort()];
  }, [appointments]);

  const filtered = useMemo(() => {
    return appointments.filter((appointment) => {
      const matchesName = appointment?.name?.toLowerCase().includes(query.toLowerCase());
      const matchesSpecialty = specialty === "all" || appointment?.specialty === specialty;
      return matchesName && matchesSpecialty;
    });
  }, [appointments, query, specialty]);

  return (
    <div>
      <div className="max-w-7xl mx-auto mb-6 px-4 grid gap-4 md:grid-cols-[1fr_auto] items-end">
        <div>
          <label className="block text-sm font-semibold mb-1" htmlFor="search-query">
            Search by doctor name
          </label>
          <input
            id="search-query"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search doctor by name..."
            className="w-full border border-gray-300 rounded-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0D7674]"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1" htmlFor="specialty-filter">
            Filter by specialty
          </label>
          <select
            id="specialty-filter"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
            className="w-full md:w-64 border border-gray-300 rounded-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0D7674]"
          >
            {specialties.map((option) => (
              <option key={option} value={option}>
                {option === "all" ? "All Specialties" : option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((appointment) => (
            <AppointmentCard key={appointment._id} appointment={appointment} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppointmentSearch;
