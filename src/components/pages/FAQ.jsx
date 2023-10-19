

const FAQ = () => {
    return (
        <div>
            <div className="max-w-7xl  mx-auto ">
      <h1 className="text-5xl font-semibold text-center py-8">
        FAQs
      </h1>
      <div className="lg:grid lg:grid-cols-2 flex flex-col-reverse gap-2 justify-center items-center">
        <div  data-aos="zoom-in-right" data-aos-duration="2000">
          <img className="" src="https://i.ibb.co/fChzdwf/Feb-Business-9.jpg" alt="" />
        </div>

        <div data-aos="zoom-in-left" data-aos-duration="2000">
          <div className="collapse collapse-arrow  mb-2 ">
            <input type="radio" name="my-accordion-2" checked="checked" />
            <div className="collapse-title text-2xl font-semibold ">
            Do you offer a warranty on your products?
            </div>
            <div className="collapse-content text-xl">
              <p>
              Yes, we provide warranty coverage for the majority of our products. The duration and terms of warranty may vary depending on the brand and product category. You can find detailed warranty information on the respective product pages. In case of any issues, please reach out to our customer support team.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow mb-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl  font-semibold">
            Do you offer international shipping?
            </div>
            <div className="collapse-content text-xl">
              <p>
              Currently, we only provide shipping services within Bangladesh. We do not offer international shipping. However, if you reside outside Bangladesh and wish to purchase a product, please contact our customer support team, and we will assist you with the best possible solution.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow  mb-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-semibold shadow-lg shadow-black">
            Can I return or exchange a product?
            </div>
            <div className="collapse-content text-xl">
              <p>
              Yes, we have a hassle-free return and exchange policy. If you receive a defective or damaged product, please inform us within 24 hours of delivery. We will arrange for a return or exchange, provided that the product is unused, in its original packaging, and accompanied by the necessary documents. For more details, please refer to our Returns and Exchange Policy on our website.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow  mb-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-semibold">
            How long does it take to deliver the products?
            </div>
            <div className="collapse-content text-xl">
              <p>
              The delivery time depends on your location and the product’s availability. We strive to process and dispatch orders within 1-2 business days. Typically, deliveries within Dhaka city take 1-2 days, while outside Dhaka it may take 3-5 business days. However, please note that unforeseen circumstances or holidays may cause slight delays.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow  mb-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-semibold">
            Do you offer a warranty on your products?
            </div>
            <div className="collapse-content text-xl">
              <p>
              Yes, we provide warranty coverage for the majority of our products. The duration and terms of warranty may vary depending on the brand and product category. You can find detailed warranty information on the respective product pages. In case of any issues, please reach out to our customer support team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default FAQ;