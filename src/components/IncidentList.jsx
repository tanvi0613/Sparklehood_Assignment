import React, { useState } from 'react';

const IncidentList = ({ incidents }) => {
  const [expandedIds, setExpandedIds] = useState([]);

  const toggleDetails = (id) => {
    if (expandedIds.includes(id)) {
      setExpandedIds(expandedIds.filter(expandedId => expandedId !== id));
    } else {
      setExpandedIds([...expandedIds, id]);
    }
  };

  // Format date to be more readable
  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit', 
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="incident-list">
      {incidents.length === 0 ? (
        <div className="no-incidents">No incidents match the current filters.</div>
      ) : (
        incidents.map(incident => (
          <div key={incident.id} className={`incident-card severity-${incident.severity.toLowerCase()}`}>
            <div className="incident-header">
              <h3 className='inc-heading'>{incident.title}</h3>
              <div className="incident-meta">
                <span className={`severity-badge ${incident.severity.toLowerCase()}`}>
                  {incident.severity}
                </span>
                <span className="incident-date">{formatDate(incident.reported_at)}</span>
              </div>
            </div>
            
            <button 
              className="toggle-details-btn" 
              onClick={() => toggleDetails(incident.id)}
            >
              {expandedIds.includes(incident.id) ? 'Hide Details' : 'View Details'}
            </button>
            
            {expandedIds.includes(incident.id) && (
              <div className="incident-details">
                <p>{incident.description}</p>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};



export default IncidentList