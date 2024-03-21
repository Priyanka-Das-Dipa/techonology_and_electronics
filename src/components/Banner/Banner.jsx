import img from "../../../images/bannerImage.jpg";
const Banner = () => {
  return (
    <section className="mt-5 mb-28">
      <section className="grid grid-cols-2 gap-4">
        <div className="space-y-3 text-left flex justify-center items-center">
          <div className="space-y-5">
            <h2 className="text-5xl font-semibold">
              Technology & Electronics development
            </h2>
            <p className="text-xl font-medium">
              Designing for mobile is the process of creating a web layout that
              adjusts to fit mobile screens and suits the needs of touchscreen
              devices. But it&apos;s about more than having a condensed mobile
              version of your desktop website — it&apos;s about actively
              optimizing for mobile users.
            </p>
          </div>
        </div>
        <div>
          <img width="550px" src={img} alt="" />
        </div>
      </section>
    </section>
  );
};

export default Banner;
