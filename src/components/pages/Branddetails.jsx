// BrandDetail.js
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BrandDetail = () => {
  const { id } = useParams();
  const [brandData, setBrandData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://technology-and-electronics-server-dun.vercel.app/iPhone/${id}`
        );
        const data = await response.json();
        setBrandData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);
  return (
    <div className="">
      {brandData ? (
        <div className="flex justify-center">
          <div className="card w-1/2 card-side bg-base-100 shadow-xl">
            <figure className="w-1/2">
              <img
                src={brandData.imageUrl}
                alt="image"
              />
            </figure>
            <div className="card-body">
              <h2 className="text-xl"> <span className="text-xl font-semibold">Brand Name: </span>  {brandData.brandName}</h2>
              <h2 className="text-xl"> <span className="text-xl font-semibold">Phone Name: </span>  {brandData.name}</h2>
              <h2 className="text-xl"> <span className="text-xl font-semibold">Price: $</span>  {brandData.price}</h2>
              <p className="text-xl"> <span className="text-xl font-semibold"> Type: </span>  {brandData.type}</p>
              <p className="text-xl"> <span className="text-xl font-semibold"> Description: </span>  {brandData.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Add to Card</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-2xl text-center font-semibold">Sorry there is no data</p>
      )}
    </div>
  );
};

export default BrandDetail;
