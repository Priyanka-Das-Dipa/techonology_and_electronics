const About = () => {
    return (
        <>
        <div>
            <h1 className="text-5xl font-semibold text-center py-8">Product Gallery </h1>
            <p className="text-2xl text-center mb-10 "> We provide our best collection to You!!</p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            <img width='300px'  className="border shadow-xl shadow-black rounded-lg " src="https://i.ibb.co/VxxYtTn/1.jpg" alt="" /> 
            <img width='300px' className="border shadow-xl shadow-black  rounded-lg" src="https://i.ibb.co/p4sNQ3k/2.jpg" alt="" /> 
            <img width='300px' className="border shadow-xl shadow-black  rounded-lg" src="https://i.ibb.co/sjJ6BSc/3.webp" alt="" />  
            <img width='300px' className="border shadow-xl shadow-black  rounded-lg" src="https://i.ibb.co/w4zb39K/4.jpg" alt="" />        
            <img width='300px' className="border shadow-xl shadow-black  rounded-lg" src="https://i.ibb.co/2FfQ3v7/intel-1.webp" alt="" />        
            <img width='300px' className="border shadow-xl shadow-black  rounded-lg" src="https://i.ibb.co/h8C9Bws/intel.jpg" alt="" />        
        </div>
        
        </>
        
    );
};

export default About;