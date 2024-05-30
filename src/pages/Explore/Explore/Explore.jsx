import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CarCard from "../../Shared/CarCard/CarCard";
import TitleHeading from "../../Shared/TitleHeading/TitleHeading";

const Explore = () => {
  const loadedCars = useLoaderData();
  const [cars, setCars] = useState(loadedCars);

  //   setCars(loadedCars);

  return (
    <>
      <div>
        <TitleHeading
          heading={`${cars.length} vehicles for sale in Bangladesh`}
        />
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6 pb-32">
          {cars.map((car) => (
            <CarCard key={car._id} car={car} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Explore;
