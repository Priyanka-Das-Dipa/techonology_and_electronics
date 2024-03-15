import { Link, useLoaderData } from "react-router-dom";
import FAQ from "./FAQ";
import About from "./About";
import Banner from "../Banner/Banner";
import Featured from "../featured/Featured";


const Home = () => {
  const phonesBrand = useLoaderData();

  return (
    <div className="">
    <Banner></Banner>
    <Featured></Featured>
      <section>
        <h1 className="text-5xl font-semibold text-center py-8">Our Brand</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          {phonesBrand?.map((phoneBrand) => (
            <div key={phoneBrand.id}>
              <Link to={`/brand/${phoneBrand.brand_name}`}>
                <div className="card bg-base-100 shadow-xl image-full">
                  <figure>
                    <img width="450px" src={phoneBrand.image_url} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{phoneBrand.brand_name}</h2>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-10">
        <About></About>
      </section>

      <section className="mt-10">
        <FAQ></FAQ>
      </section>
    </div>
  );
};

export default Home;
