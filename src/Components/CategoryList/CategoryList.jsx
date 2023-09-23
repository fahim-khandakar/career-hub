import img1 from "../../assets/icons/accounts.png";
import img2 from "../../assets/icons/creative.png";
import img3 from "../../assets/icons/marketing.png";
import img4 from "../../assets/icons/chip.png";
const CategoryList = () => {
  return (
    <div>
      <div className="text-center">
        <h2 className="text-4xl font-bold pb-5">Jobs Category List</h2>
        <p>
          Explore thousand of job opportunities with all the information you
          need. Its your future.
        </p>

        <div className="flex justify-around my-16">
          <div>
            <img className="mx-auto pb-3" src={img1} alt="" />
            <h3 className="font-semibold pb-2">Account And Finance</h3>
            <p>100 Jobs Available</p>
          </div>
          <div>
            <img className="mx-auto pb-3" src={img2} alt="" />
            <h3 className="font-semibold pb-2">Creative Design</h3>
            <p>150 Jobs Available</p>
          </div>
          <div>
            <img className="mx-auto pb-3" src={img3} alt="" />
            <h3 className="font-semibold pb-2">Marketing And Sales</h3>
            <p>50 Jobs Available</p>
          </div>
          <div>
            <img className="mx-auto pb-3" src={img4} alt="" />
            <h3 className="font-semibold pb-2">Engineering Jobs</h3>
            <p>224 Jobs Available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
