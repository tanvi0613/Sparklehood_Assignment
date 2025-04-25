import React, { useState } from 'react';
import './App.css';
import IncidentList from './components/IncidentList';
import IncidentForm from './components/IncidentForm';
import FilterSort from './components/FilterSort';

function App() {
  const initialIncidents = [
    {
      id: 1,
      title: "Biased Recommendation Algorithm",
      description: "Algorithm consistently favored certain demographics in content recommendations, leading to unequal exposure of information and potential reinforcement of existing biases across user groups.",
      severity: "Medium",
      reported_at: "2025-03-15T10:00:00Z"
    },
    {
      id: 2,
      title: "LLM Hallucination in Critical Info",
      description: "LLM provided incorrect safety procedure information when asked about emergency protocols, potentially endangering users who might have followed the fabricated instructions in a real emergency situation.",
      severity: "High",
      reported_at: "2025-04-01T14:30:00Z"
    },
    {
      id: 3,
      title: "Minor Data Leak via Chatbot",
      description: "Chatbot inadvertently exposed non-sensitive user metadata to other users during multi-user conversations, including usernames and general usage statistics.",
      severity: "Low",
      reported_at: "2025-03-20T09:15:00Z"
    }
  ];

  const [incidents, setIncidents] = useState(initialIncidents);
  const [filteredIncidents, setFilteredIncidents] = useState(initialIncidents);
  const [filter, setFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("newest");

  // Function to add a new incident
  const addIncident = (newIncident) => {
    const incidentWithId = {
      ...newIncident,
      id: incidents.length + 1,
      reported_at: new Date().toISOString()
    };
    
    const updatedIncidents = [...incidents, incidentWithId];
    setIncidents(updatedIncidents);
    applyFilterAndSort(updatedIncidents, filter, sortOrder);
  };

  // Function to handle filtering and sorting
  const applyFilterAndSort = (data, severity, order) => {
    let result = [...data];
    
    // Apply filter
    if (severity !== "All") {
      result = result.filter(incident => incident.severity === severity);
    }
    
    // Apply sort
    result.sort((a, b) => {
      const dateA = new Date(a.reported_at);
      const dateB = new Date(b.reported_at);
      return order === "newest" ? dateB - dateA : dateA - dateB;
    });
    
    setFilteredIncidents(result);
  };

  // Handlers for filter and sort changes
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    applyFilterAndSort(incidents, newFilter, sortOrder);
  };

  const handleSortChange = (newSortOrder) => {
    setSortOrder(newSortOrder);
    applyFilterAndSort(incidents, filter, newSortOrder);
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className='header-content'>
          <img src='/images/logo.png' alt='logo' className='logo-image'/>
          <h1>AI Safety Incident Dashboard</h1>
        </div>
        <div className="header-subtitle">
          <p>Monitor and report AI safety incidents with HumanChain</p>
        </div>
      </header>
      <main className="app-main">
        <FilterSort 
          filter={filter} 
          sortOrder={sortOrder} 
          onFilterChange={handleFilterChange} 
          onSortChange={handleSortChange} 
        />
        <div className="dashboard-container">
          <div className="incidents-container">
            <h2 className='form-heading'>Reported Incidents</h2>
            <IncidentList incidents={filteredIncidents} />
          </div>
          <div className="form-container">
            <h2 className='form-heading'>Report New Incident</h2>
            <IncidentForm onAddIncident={addIncident} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;