import { useEffect, useState } from "react";
import DetailsCard from "./modules/DetailsCard";
import Selector from "./modules/Selector";
import { fetchJobListings } from "../../controllers/fetchJobLisitngs";

function Sidebar() {
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchJobListings();
        setJobData(data);
      } catch (error) {
        console.error("Error fetching job listings:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div style={{ height: "calc(100vh + 250px)" }} className="w-[350px]">
      <div className="mb-7">
        <Selector />
      </div>
      <div className="flex flex-col overflow-y-scroll scrollbar-hide h-[56%]">
        {jobData.map((job) => (
          <DetailsCard key={job.company} jobDetails={job} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
