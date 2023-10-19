import Swal from 'sweetalert2'


const AddProduct = () => {
    const handleAddProduct = event =>{
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const price = form.price.value;
        const imageUrl = form.imageUrl.value;
        const type = form.type.value;
        const description = form.description.value;
        const rating_1 = form.rating_1.value;

        const newProduct = {name, brandName, price, imageUrl,type, description, rating_1,}
        console.log(newProduct)

        // sending data to the backend
        fetch('http://localhost:5000/iPhone',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
              Swal.fire({
                title: 'Success!',
                text: 'Product added to the DB successfully!',
                icon: 'success',
                confirmButtonText: 'Done'
              })
            }

        })



    }
  return (
    <div className="text-center mb-5">
      <h2 className="text-2xl font-bold text-center">Add A New Phone</h2>

      <form onSubmit={handleAddProduct}>
      <div className=" mx-auto flex flex-col items-center space-y-3 ">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-medium">Name</span>
          </label>
          <input
            type="text"
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
            name="price"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-medium ">Short Description</span>
          </label>
          <input
            type="text"
            name="description"
            placeholder="description"
            className="input input-bordered input-lg w-full max-w-xs"
          />
        </div>
        <div>
        <div className="rating">
          <input type="radio" name="rating_1" className="mask mask-star" />
          <input type="radio" name="rating_1" className="mask mask-star" />
          <input type="radio" name="rating_1" className="mask mask-star" />
          <input type="radio" name="rating_1" className="mask mask-star" />
          <input type="radio" name="rating_1" className="mask mask-star" />
        </div>
        </div>
        <input type="submit" name="addBtn" className="btn font-medium mb-5" value="Add Product" />
        
      </div>
      </form>
    </div>
  );
};

export default AddProduct;
