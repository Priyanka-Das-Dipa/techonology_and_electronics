// BrandDetail.js
import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BrandDetail = () => {
  const { id } = useParams(); 
  const [brandData, setBrandData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await fetch(`http://localhost:5000/${id}`); 
        const data = await response.json();
        setBrandData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);
  return (
    <div>
      {brandData ? (
        <div>
          <h1>{brandData.brandName
          }</h1>
          <p>Description: {brandData.description}</p>
          {/* Display other brand details here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BrandDetail;
