import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import rating from react rating
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

// import required modules
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const ReviewsSection = () => {
  const [reviews, setReviews] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic.get("/reviews").then((res) => {
      console.log(res.data);
      setReviews(res.data);
    });
  }, []);

  return (
    <section>
      <h2 className="text-3xl font-bold text-center pt-32">
        Customers Reviews
      </h2>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="mx-32 my-16 flex flex-col items-center">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <p className="py-8">{review.details}</p>
              <h2 className="text-2xl text-orange-600">
                {review.customerName}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ReviewsSection;
