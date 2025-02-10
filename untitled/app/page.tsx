import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import "./Dashboard.css";

type FormData = {
  vesselType: string;
  fuelType: string;
  distance: string;
};

type EmissionData = {
  name: string;
  emissions: number;
}[];

const Dashboard: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ vesselType: "", fuelType: "", distance: "" });
  const [emissionData, setEmissionData] = useState<EmissionData>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for API call to fetch emission data
    const fakeData: EmissionData = [
      { name: "Point 1", emissions: 50 },
      { name: "Point 2", emissions: 70 },
      { name: "Point 3", emissions: 90 },
    ];
    setEmissionData(fakeData);
  };

  return (
      <div className="dashboard-container">
        <h1>FuelEU Compliance Dashboard</h1>
        <form onSubmit={handleSubmit} className="input-form">
          <label>
            Vessel Type:
            <input type="text" name="vesselType" value={formData.vesselType} onChange={handleInputChange} />
          </label>
          <label>
            Fuel Type:
            <input type="text" name="fuelType" value={formData.fuelType} onChange={handleInputChange} />
          </label>
          <label>
            Distance (km):
            <input type="number" name="distance" value={formData.distance} onChange={handleInputChange} />
          </label>
          <button type="submit">Calculate Emissions</button>
        </form>

        <div className="chart-container">
          <h2>Emissions Data</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={emissionData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="emissions" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
  );
};

export default Dashboard;
