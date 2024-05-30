import banner from "../../../assets/Home/banner1.jpg";
const Banner = () => {
  return (
    <section>
      <div
        className="hero md:min-h-[600px] "
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-10"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md space-y-9">
            <h3 className="text-white text-xl ">FIND YOUR DREAM CAR</h3>
            <h1 className="mb-5 text-5xl font-bold">
              Find the Best Car Price in Bangladesh
            </h1>
            <p className="mb-5">
              Leading online automotive marketplace in Bangladesh
            </p>
            <button className="btn font-bold text-black border-orange-800 bg-orange-600 hover:text-orange-700">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
