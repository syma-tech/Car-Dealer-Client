import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
  const { _id, name, image, price, short_description, big_description } = car;
  return (
    <div className="card card-compact w-96 bg-black text-white shadow-xl drop-shadow-xl my-5">
      <figure>
        <img src={image} className="h-52 w-full" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{price}</p>
        <p>{short_description}</p>
        <div className="card-actions justify-end">
          <Link to={`/purchase/${_id}`}>
            <button className="btn font-bold text-white border-orange-600 bg-orange-600 hover:bg-white  hover:text-orange-600">
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
