import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../Utility/LocalStorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information,
  } = job;

  const { email, phone, address } = contact_information;

  const handleApplyJob = () => {
    saveJobApplication(idInt);
    toast("You have applied successfully");
  };
  return (
    <div className="mb-20">
      <h1 className="text-4xl font-bold pb-5 text-center mt-5">Job Details</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className=" md:col-span-3 p-3">
          <h2 className="py-5">
            <span className="font-bold text-lg">Job Description:</span>{" "}
            {job_description}
          </h2>
          <h2 className="py-5">
            <span className="font-bold text-lg">Job Responsibility:</span>{" "}
            {job_responsibility}
          </h2>
          <h2 className="py-5">
            <span className="font-bold text-lg">Educational Requirement:</span>{" "}
            {educational_requirements}
          </h2>
          <h2 className="py-5">
            <span className="font-bold text-lg">Experiences:</span>{" "}
            {experiences}
          </h2>
        </div>
        <div className=" p-3">
          <h2 className="text-xl font-bold my-5">Job Details</h2>
          <hr />
          <p className="py-5">
            <span className="font-semibold text-lg">Salary:</span> {salary}
          </p>
          <p className="pb-5">
            <span className="font-semibold text-lg">Job Title:</span>{" "}
            {job_title}
          </p>
          <hr />
          <h2 className="text-xl font-bold my-5">Contact Information</h2>
          <p className="pb-5">
            <span className="font-semibold text-lg">Email:</span> {email}
          </p>
          <p className="pb-5">
            <span className="font-semibold text-lg">Phone:</span> {phone}
          </p>
          <p className="pb-5">
            <span className="font-semibold text-lg">Address:</span> {address}
          </p>
          <button
            onClick={handleApplyJob}
            className="btn w-full bg-gradient-to-r from-cyan-500 to-blue-500 "
          >
            Apply Now
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
