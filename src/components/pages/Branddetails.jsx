// BrandDetail.js
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const BrandDetail = () => {
  const { id } = useParams();
  const [brandData, setBrandData] = useState(null);
  const [cart, setCart] = useState([]);
  // const addToCart = (card) => {
  //   setCart([...cart, card]);
  // };

  const addToCart = (product) => {
    fetch("https://technology-and-electronics-server-dun.vercel.app/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "You Have add the product to the add to card!",
            icon: "success",
            confirmButtonText: "Done",
          });
          setCart(data);
        }
      });
  };

  console.log(cart);

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
    <div className="min-h-screen">
      {brandData ? (
        <div className="flex justify-center">
          <div className="card w-1/2 card-side bg-base-100 shadow-xl">
            <figure className="w-1/2">
              <img className="p-10" src={brandData.imageUrl} alt="image" />
            </figure>
            <div className="card-body">
              <h2 className="text-xl">
                {" "}
                <span className="text-xl font-semibold">Brand Name: </span>{" "}
                {brandData.brandName}
              </h2>
              <h2 className="text-xl">
                {" "}
                <span className="text-xl font-semibold">Phone Name: </span>{" "}
                {brandData.name}
              </h2>
              <h2 className="text-xl">
                {" "}
                <span className="text-xl font-semibold">Price: $</span>{" "}
                {brandData.price}
              </h2>
              <p className="text-xl">
                {" "}
                <span className="text-xl font-semibold"> Type: </span>{" "}
                {brandData.type}
              </p>
              <p className="text-xl">
                {" "}
                <span className="text-xl font-semibold">
                  {" "}
                  Description:{" "}
                </span>{" "}
                {brandData.description}
              </p>
              <div className="card-actions justify-end">
                <Link to="/myCart">
                  <button onClick={() => addToCart(brandData)} className="btn ">
                    Add to Card
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-2xl text-center font-semibold">
          Sorry there is no data
        </p>
      )}
    </div>
  );
};

export default BrandDetail;
