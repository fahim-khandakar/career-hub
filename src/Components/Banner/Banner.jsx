import img from "../../assets/images/user.png";
const Banner = () => {
  return (
    <div className="flex gap-10 justify-between items-center mb-20">
      <div>
        <h1 className="text-5xl font-extrabold pb-5">
          One Step <br /> Closer To Your <br />{" "}
          <span className="bg-gradient-to-r  from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Dream Job
          </span>
        </h1>
        <p className="pb-5">
          Explore thousand of job opportunities with all the information you
          need. Its your future.
        </p>
        <button className="btn   bg-gradient-to-r from-cyan-500 to-blue-500 ">
          Apply Now
        </button>
      </div>
      <div>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Banner;
