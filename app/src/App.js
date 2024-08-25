import React, { useState } from 'react';
import './App.css';

function App() {
  const [apiInput, setApiInput] = useState('');
  const [filteredResponse, setFilteredResponse] = useState('');
  const [filterType, setFilterType] = useState('Numbers');

  const handleInputChange = (e) => {
    setApiInput(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterType(e.target.value);
  };

  const handleSubmit = () => {
    try {
      const parsedData = JSON.parse(apiInput).data;
      let filteredData = [];

      if (filterType === 'Numbers') {
        filteredData = parsedData.filter(item => !isNaN(item));
      }

      setFilteredResponse(filteredData.join(','));
    } catch (error) {
      setFilteredResponse('Invalid JSON input.');
    }
  };

  return (
    <div className="App">
      <div className="form-group">
        <label>API Input:</label>
        <input
          type="text"
          value={apiInput}
          onChange={handleInputChange}
          className="form-control"
          placeholder='{"data":["M","1","334","4","B"]}'
        />
      </div>

      <div className="form-group">
        <label>Multi Filter:</label>
        <select
          value={filterType}
          onChange={handleFilterChange}
          className="form-control"
        >
          <option value="Numbers">Numbers</option>
          {/* Additional filters can be added here */}
        </select>
      </div>

      <button onClick={handleSubmit} className="btn btn-primary">
        Submit
      </button>

      <div className="form-group">
        <label>Filtered Response:</label>
        <div className="filtered-response">
          Numbers: {filteredResponse}
        </div>
      </div>
    </div>
  );
}

export default App;
