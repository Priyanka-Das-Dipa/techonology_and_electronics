import { useEffect, useState } from "react";

const MyCart = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("https://technology-and-electronics-server-dun.vercel.app/cart")
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);
  return (
    <div className="min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {cart?.map((selectedItem, index) => (
        <div key={index} className="flex justify-center">
          <div className="card w-full card-side bg-base-100 shadow-xl">
            <figure className="w-full">
              <img className="" src={selectedItem.imageUrl} alt="image" />
            </figure>
            <div className="card-body">
              <h2 className="text-xl">
                <span className="text-xl font-semibold">Brand Name: </span>
                {selectedItem.brandName}
              </h2>
              <h2 className="text-xl">
                <span className="text-xl font-semibold">Phone Name: </span>
                {selectedItem.name}
              </h2>
              <h2 className="text-xl">
                <span className="text-xl font-semibold">Price: $</span>
                {selectedItem.price}
              </h2>
              <p className="text-xl">
                <span className="text-xl font-semibold"> Type: </span>
                {selectedItem.type}
              </p>
              <p className="text-xl">
                <span className="text-xl font-semibold">Description:</span>
                {selectedItem.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default MyCart;
