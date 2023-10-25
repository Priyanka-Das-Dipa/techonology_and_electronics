import { Link, useLoaderData } from "react-router-dom";
import FAQ from "./FAQ";
import About from "./About";

const Home = () => {
  const phonesBrand = useLoaderData();
  // console.log(phoneBrand)
  return (
    <div>
      <section className="grid md:grid-cols-2 grid-cols-1  gap-4">
        <div className="space-y-3 text-left flex justify-center items-center">
          <div className="space-y-5">
            <h2 className="text-5xl font-semibold">
              Technology & Electronics development
            </h2>
            <p className="text-xl font-medium">
              Designing for mobile is the process of creating a web layout that
              adjusts to fit mobile screens and suits the needs of touchscreen
              devices. But it is about more than having a condensed mobile
              version of your desktop website — it is about actively optimizing
              for mobile users.
            </p>
          </div>
        </div>
        <div>
          <img width="550px" src="../../../images/bannerImage.jpg" alt="" />
        </div>
      </section>

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
