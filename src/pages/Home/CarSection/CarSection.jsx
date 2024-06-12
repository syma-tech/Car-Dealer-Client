import { useEffect, useState } from "react";
import CarCard from "../../Shared/CarCard/CarCard";
import TitleHeading from "../../Shared/TitleHeading/TitleHeading";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const CarSection = () => {
  const [carSection, setCarSection] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic.get("/cars").then((res) => {
      console.log(res.data);
      setCarSection(res.data);
    });
  }, []);
  return (
    <section>
      <TitleHeading heading={"Popular Brands"} />

      {/* cars Shows here */}
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-5 ">
        {carSection.slice(0, 6).map((car) => (
          <CarCard key={car._id} car={car} />
        ))}
      </div>
    </section>
  );
};

export default CarSection;
