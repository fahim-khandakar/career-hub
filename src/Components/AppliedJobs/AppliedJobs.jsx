import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/LocalStorage";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";

const AppliedJobs = () => {
  const jobs = useLoaderData();

  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };

  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      // const jobsApplied = jobs.filter((job) => storedJobIds.includes(job.id));
      const jobsApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, [jobs]);
  return (
    <div>
      <details className="dropdown absolute">
        <summary className="m-1 btn">Sort</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={() => handleJobsFilter("all")}>
            <a>All</a>
          </li>
          <li onClick={() => handleJobsFilter("remote")}>
            <a>Remote</a>
          </li>
          <li onClick={() => handleJobsFilter("onsite")}>
            <a>Onsite</a>
          </li>
        </ul>
      </details>

      {displayJobs.map((job) => (
        <div className="mt-20 flex justify-between items-center" key={job.id}>
          <div className="flex flex-grow gap-20 items-center">
            <img className="w-[150px] h-[50px]" src={job.logo} alt="" />
            <div>
              <h2 className="font-semibold">{job.job_title}</h2>
              <p>{job.company_name}</p>
              <button className="text-[#7E90FE] mr-3 px-5 py-2 font-extrabold border rounded border-[#7E90FE]">
                {job.remote_or_onsite}
              </button>
              <button className="text-[#7E90FE] px-5 py-2 font-extrabold border rounded border-[#7E90FE]">
                {job.job_type}
              </button>
              <div className="my-3 flex items-center gap-5 ">
                <h2 className="flex items-center gap-1">
                  <MdLocationOn className="text-xl"></MdLocationOn>{" "}
                  {job.location}
                </h2>
                <h2 className="flex items-center gap-1">
                  {" "}
                  <AiOutlineDollarCircle className="text-xl"></AiOutlineDollarCircle>{" "}
                  {job.salary}
                </h2>
              </div>
            </div>
          </div>
          <div>
            <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500 ">
              Show Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppliedJobs;
