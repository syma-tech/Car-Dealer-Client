import { Link, useLoaderData } from "react-router-dom";
import Features from "../Features/Features";
import CarDetails from "../CarDetails/CarDetails";
import OrderDetails from "../OrderDetails/OrderDetails";

const Purchase = () => {
  const { data } = useLoaderData();
  const { _id, name, image, price, short_description, big_description } = data;
  return (
    <div className="grid grid-cols-12  gap-6">
      <div className="md:col-span-7 sm:col-span-12">
        <CarDetails image={image} big_description={big_description} />
      </div>
      <div className="md:col-span-5 sm:col-span-12">
        <OrderDetails
          price={price}
          short_description={short_description}
          name={name}
          _id={_id}
          image={image}
        />
      </div>
    </div>
  );
};

export default Purchase;
