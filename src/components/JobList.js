import React from 'react';
import stringSimilarity from 'string-similarity';

function JobList({ jobs, filters, setFilters }) {
    const filterJobs = () => {
        return jobs.filter((job) => {
            let locationSimilarity = 1;
            let typeSimilarity = 1;

            if (filters.location) {
                locationSimilarity = stringSimilarity.compareTwoStrings(
                    job.location.toLowerCase(),
                    filters.location.toLowerCase()
                );
            }

            if (filters.type) {
                typeSimilarity = stringSimilarity.compareTwoStrings(
                    job.type.toLowerCase(),
                    filters.type.toLowerCase()
                );
            }

            return locationSimilarity > 0.6 && typeSimilarity > 0.6;
        });
    };

    const filteredJobs = filterJobs();

    return (
        <div>
            <div className="job-filters">
                <label htmlFor='location'>
                    Location:
                    <input
                        id='location'
                        type="text"
                        value={filters.location}
                        onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                    />
                </label>
                <label htmlFor='type'>
                    Job Type:
                    <input
                        id='type'
                        type="text"
                        value={filters.type}
                        onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                    />
                </label>
            </div>
            <ul>
                {filteredJobs.map((job) => (
                    <li key={job.id}>
                        <div>
                            <strong>Job Title:</strong> {job.title}
                        </div>
                        <div>
                            <strong>Location:</strong> {job.location}
                        </div>
                        <div>
                            <strong>Job Type:</strong> {job.type}
                        </div>
                        <div>
                            <strong>Description:</strong> {job.description}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default JobList;
