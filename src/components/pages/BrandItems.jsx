import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const BrandItems = () => {
  const { brandName } = useParams();
  const [phoneBrand, setPhoneBrand] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(0);

  console.log(brandName);
  useEffect(() => {
    fetch(
      "https://technology-and-electronics-server-qpndtqici-priyanka-das-dipa.vercel.app/iPhone"
    )
      .then((res) => res.json())
      .then((data) => {
        const filteredBrand = data.filter(
          (phone) => phone.brandName === brandName
        );
        setPhoneBrand(filteredBrand);
      });
  }, [brandName]);
  console.log(phoneBrand);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <input
          key={i}
          type="radio"
          name={`rating_${i}`}
          className={`mask mask-star ${i <= rating ? "star-filled" : ""}`}
        />
      );
    }
    return stars;
  };
  

  return (
    <>
      <div className="mx-auto text-center">
      <div className="carousel w-[40vw] h-[70vh]">
        {phoneBrand.slice(0, 3).map((phone, index) => (
          <div key={index} id="item1" className="carousel-item w-full">
            <div className="flex gap-10  justify-center items-center p-5">
              <div className="mb-5">
                <h2 className="text-2xl font-medium">Phone Name: <span className="font-bold"> {phone.name}</span></h2>
                <h2 className="text-2xl font-medium"> Brand Name: <span className="font-bold"> {phone.brandName}</span></h2>
                <h2 className="text-2xl font-medium">Price: <span className="font-bold"> {phone.price}</span></h2>
              </div>
            <img src={phone.imageUrl} alt={phone.name} className="w-full p-10" />
            </div>
          </div>
        ))}
      </div>
      </div>
      
      <div className="min-h-screen mt-10">
        {phoneBrand.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {phoneBrand.map((phone, index) => (
              <div key={index} className="card w-96 bg-base-100 shadow-xl">
                <figure className="p-5">
                  <img src={phone.imageUrl} alt="image" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-2xl text-center">
                    {phone.name}
                  </h2>
                  <p className="text-xl font-semibold">
                    <span className="font-bold">Brand Name: </span>{" "}
                    {phone.brandName}
                  </p>
                  <div className="flex justify-start">
                    <p className="text-lg font-medium">$ {phone.price} TK</p>
                    <p className="text-lg font-medium">
                      <span className="font-bold">Type: </span> {phone.type}
                    </p>
                  </div>
                  <div className="rating">{renderStars(phone.rating)}</div>
                  <div className="card-actions justify-end">
                    <Link to={`/brand/${phone.brandName}/${phone._id}`}>
                      <div className="btn btn-sm">Details</div>
                    </Link>
                    <Link to={`/update/${phone._id}`}>
                      <button className="btn btn-sm">Update</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="hero bg-base-200 h-[50vh] text-center py-20">
            <h1 className="text-2xl font-semibold">
              Sorry!! There is no Product available.
            </h1>
          </div>
        )}
      </div>
    </>
  );
};

export default BrandItems;
