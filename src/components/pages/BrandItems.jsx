import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BrandItems = () => {
  const { brandName } = useParams();
  const [phoneBrand, setPhoneBrand] = useState([]);

  console.log(brandName)
  useEffect(() => {
    fetch("http://localhost:5000/iPhone")
      .then((res) => res.json())
      .then((data) => {
        const filteredBrand = data.filter(
          (phone) => phone.brandName === brandName
        );
        setPhoneBrand(filteredBrand);
      });
  }, [brandName]);

  console.log(phoneBrand)
  return (
    <div>
      <h3>Brand Items</h3>
      {phoneBrand.map((phone, index) => (
        <div key={index} className="card shadow p-2 mb-4 rounded-none">
          <h3>{phone.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default BrandItems;
