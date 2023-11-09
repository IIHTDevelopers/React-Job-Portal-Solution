import React, { useState } from "react";

const JobCreation = ({ onJobCreated }) => {
    const [newJob, setNewJob] = useState({
        title: "",
        company: "",
        location: "",
        type: "",
        description: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onJobCreated(newJob);
        setNewJob({
            title: "",
            company: "",
            location: "",
            type: "",
            description: "",
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={newJob.title}
                        onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="company">Company:</label>
                    <input
                        type="text"
                        id="company"
                        value={newJob.company}
                        onChange={(e) => setNewJob({ ...newJob, company: e.target.value })}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="location">Location:</label>
                    <input
                        type="text"
                        id="location"
                        value={newJob.location}
                        onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="type">Type:</label>
                    <input
                        type="text"
                        id="type"
                        value={newJob.type}
                        onChange={(e) => setNewJob({ ...newJob, type: e.target.value })}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        value={newJob.description}
                        onChange={(e) =>
                            setNewJob({ ...newJob, description: e.target.value })
                        }
                        required
                    />
                </div>
                <div>
                    <button type="submit">Create Job</button>
                </div>
            </form>
        </div>
    );
};

export default JobCreation;
