import React from 'react';

const FilterSort = ({ filter, sortOrder, onFilterChange, onSortChange }) => {
  return (
    <div className="filter-sort">
      <div className="filter-controls">
        <label>Filter by Severity:</label>
        <div className="filter-buttons">
          {["All", "Low", "Medium", "High"].map(severity => (
            <button
              key={severity}
              className={`filter-btn ${filter === severity ? 'active' : ''}`}
              onClick={() => onFilterChange(severity)}
            >
              {severity}
            </button>
          ))}
        </div>
      </div>
      
      <div className="sort-controls">
        <label>Sort by Date:</label>
        <div className="sort-buttons">
          <button
            className={`sort-btn ${sortOrder === 'newest' ? 'active' : ''}`}
            onClick={() => onSortChange('newest')}
          >
            Newest First
          </button>
          <button
            className={`sort-btn ${sortOrder === 'oldest' ? 'active' : ''}`}
            onClick={() => onSortChange('oldest')}
          >
            Oldest First
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSort