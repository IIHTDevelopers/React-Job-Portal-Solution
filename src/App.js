import React, { useState, useEffect } from 'react';
import JobCreation from './components/JobCreation';
import JobList from './components/JobList';
import jobsData from './db/dummy.json';

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({ location: '', type: '' });

  const addJob = (newJob) => {
    setJobs([...jobs, { ...newJob, id: jobs.length + 1 }]);
  };

  useEffect(() => {
    setJobs(jobsData);
  }, []);

  return (
    <div>
      <h1>Job Search Portal</h1>
      <div>
        <h2>Create a Job</h2>
        <JobCreation data-testid="job-creation" onJobCreated={addJob} />
      </div>
      <div>
        <h2>Job Listings</h2>
        <JobList data-testid="job-list" jobs={jobs} filters={filters} setFilters={setFilters} />
      </div>
    </div>
  );
}

export default App;
