import { useEffect, useState } from "react";
import CarCard from "../../Shared/CarCard/CarCard";
import TitleHeading from "../../Shared/TitleHeading/TitleHeading";

const CarSection = () => {
  const [carSection, setCarSection] = useState([]);
  useEffect(() => {
    fetch("https://car-dealer-server-three.vercel.app/cars")
      .then((res) => res.json())
      .then((data) => {
        setCarSection(data);
        console.log(data.slice(0, 6));
      });
  }, []);
  return (
    <section>
      <TitleHeading heading={"Popular Brands"} />
      {/* <h2 className="text-3xl font-bold text-center mt-14 py-20">
        Popular Brands
      </h2> */}
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-5 ">
        {carSection.slice(0, 6).map((car) => (
          <CarCard key={car._id} car={car} />
        ))}
      </div>
    </section>
  );
};

export default CarSection;
