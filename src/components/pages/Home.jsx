import FAQ from "./FAQ";
import About from "./About";
import Banner from "../Banner/Banner";
import Featured from "../featured/Featured";
import BrandsCard from "../brands/BrandsCard";

const Home = () => {
  return (
    <div className=" space-y-11">
      <Banner></Banner>
      <Featured></Featured>
      <BrandsCard></BrandsCard>
      <About></About>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
