import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const { name, brandName, _id, imageUrl, type, description, price, rating_1 } =
    useLoaderData();

  // console.log(data)
  const handleUpdateProduct = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const price = form.price.value;
    const imageUrl = form.imageUrl.value;
    const type = form.type.value;
    const description = form.description.value;
    const rating_1 = form.rating_1.value;

    const newProduct = {
      name,
      brandName,
      price,
      imageUrl,
      type,
      description,
      rating_1,
    };
    console.log(newProduct);

    // sending data to the backend
    fetch(
      `https://technology-and-electronics-server-dun.vercel.app/iPhone/${_id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        Swal.fire({
          title: "Success!",
          text: "Product Updated successfully!",
          icon: "success",
          confirmButtonText: "Done",
        });
      });
  };
  return (
    <div>
      <div className="text-center mb-5">
        <h2 className="text-2xl font-bold text-center">
          Update a Product : {name}
        </h2>

        <form onSubmit={handleUpdateProduct}>
          <div className=" mx-auto flex flex-col items-center space-y-3 ">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-medium">Name</span>
              </label>
              <input
                type="text"
                defaultValue={name}
                placeholder="name"
                name="name"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-medium">Brand Name</span>
              </label>
              <input
                type="text"
                placeholder="brand name"
                defaultValue={brandName}
                name="brandName"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-medium">Image URL</span>
              </label>
              <input
                type="text"
                placeholder="image url"
                name="imageUrl"
                defaultValue={imageUrl}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-medium">Type</span>
              </label>
              <input
                type="text"
                placeholder="type "
                defaultValue={type}
                name="type"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-medium">Price</span>
              </label>
              <input
                type="text"
                placeholder="price"
                defaultValue={price}
                name="price"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-medium ">
                  Short Description
                </span>
              </label>
              <input
                type="text"
                name="description"
                defaultValue={description}
                placeholder="description"
                className="input input-bordered input-lg w-full max-w-xs"
              />
            </div>
            <div>
              <div className="rating">
                <input
                  type="radio"
                  defaultValue={rating_1}
                  name="rating_1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  defaultValue={rating_1}
                  name="rating_1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  defaultValue={rating_1}
                  name="rating_1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  defaultValue={rating_1}
                  name="rating_1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  defaultValue={rating_1}
                  name="rating_1"
                  className="mask mask-star"
                />
              </div>
            </div>
            <input
              type="submit"
              name="addBtn"
              className="btn font-medium mb-5"
              value="Update Product"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;

// https://technology-and-electroni-8514d.web.app
