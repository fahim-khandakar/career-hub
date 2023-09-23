import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeatureJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <div className="text-center">
        <h2 className="text-4xl font-bold pb-5">Featured Jobs</h2>
        <p>
          Explore thousand of job opportunities with all the information you
          need. Its your future.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-10 my-10">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div
        className={dataLength === jobs.length ? "hidden" : "text-center mb-10"}
      >
        <button
          onClick={() => setDataLength(jobs.length)}
          className="btn bg-gradient-to-r from-cyan-500 to-blue-500 "
        >
          Show All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeatureJobs;
