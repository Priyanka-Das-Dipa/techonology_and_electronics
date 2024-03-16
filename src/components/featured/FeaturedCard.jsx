import { useEffect, useState } from "react";

const FeaturedCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/public/featured.json"); // Assuming your public folder is served at the root
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="carousel carousel-center rounded-box">
      <div className="carousel-item">
        {products.map((product, index) => (
          <div
            key={index}
            className="px-4 py-8 shadow-lg max-w-[350px] font-sans rounded-xl space-y-6 my-20 bg-white mx-4"
          >
            <div className="flex justify-center w-full h-48 lg:h-[280px] relative">
              <div className="flex justify-between items-center left-4 right-4 top-4 absolute">
                <div className="flex items-center">
                  <svg
                    width={30}
                    className="hover:fill-red-500 hover:stroke-red-500 stroke-2 fill-transparent stroke-red-400 "
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ cursor: "pointer" }}
                  >
                    <g strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"></path>
                    </g>
                  </svg>
                </div>
                <button className="bg-[#0095FF] hover:bg-[#0095FF]/90 duration-200 text-white font-medium px-3 py-1 rounded-xl">
                  30% off
                </button>
              </div>
              <img
                className="rounded-lg bg-black/40 w-full bg-cover object-cover h-full"
                src={product.img_url}
                alt="card navigate ui"
              />
            </div>
            <div className="text-center w-[85%] mx-auto font-semibold space-y-2">
              <h6 className="text-sm md:text-base lg:text-lg">
                {product.model_name}
              </h6>
              <p className="text-gray-400 text-xs md:text-sm font-semibold">
                {product.type}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCard;
