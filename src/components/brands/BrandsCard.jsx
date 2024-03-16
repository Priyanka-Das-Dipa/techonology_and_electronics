import { Link, useLoaderData } from "react-router-dom";
const BrandsCard = () => {
  const phonesBrand = useLoaderData();
  return (
    <div className="mb-20">
      <h1 className="text-5xl font-semibold text-center my-10">Our Brand</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {phonesBrand?.map((phoneBrand) => (
          <div key={phoneBrand.id}>
            <Link to={`/brand/${phoneBrand.brand_name}`}>
              <div className=" rounded-xl bg-base-100 shadow-xl image-full">
                <figure>
                  <img
                    className="mx-auto w-52 bg-cover h-52 rounded-xl my-5"
                    src={phoneBrand.image_url}
                    alt="Phones Brand"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="text-xl font-bold text-center">
                    {phoneBrand.brand_name}
                  </h2>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsCard;
