"use client";

import { useState ,useEffect} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { instance } from "@/services/Axios/axiosInterceptor";

// const testimonials = [
//   {
//     name: "Mohan Gandhi Ponnaganti",
//     position: "CEO @ Ofofo",
//     message: `We partnered with BugBase to target small businesses after evaluating more than 10 VDP vendors. They are affordable, professional and very energetic. They are priced ideal for small businesses which is our target market. We are using BugBase for Ofofo’s VDP as well and it’s easy to use.`,
//     image: "/images/testimonial-1.jpg",
//   },
//   {
//     name: "Jane Doe",
//     position: "CTO @ Acme Inc.",
//     message: `BugBase helped us enhance our vulnerability program. Super easy to integrate and manage!`,
//     image: "/images/testimonial-2.jpg",
//   },
//   {
//     name: "John Smith",
//     position: "Founder @ TechCorp",
//     message: `Excellent platform with great customer support. BugBase is essential to our operations.`,
//     image: "/images/testimonial-3.jpg",
//   },
// ];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  let [testimonials, setTestimonials] = useState([]);


  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

    async function getTesimonial(){
      let testimonialData = await instance.get("/testmonials")
      console.log("me data",testimonialData.data.data)
      let data = testimonialData.data.data
      setTestimonials(data)
    }
  
  
    useEffect(()=>{
       getTesimonial()
    },[])

  if(testimonials.length == 0){
    return <>Not data found</>
  }

  return (
    <div className="bg-[#ffffff] py-10 px-4">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-6">
        Testimonial
      </h2>

      <div className="flex justify-center items-center gap-12 mb-6">
        <button
          onClick={handlePrev}
          className="bg-[#2a2afc] text-white rounded-full p-2"
        >
          <FaChevronLeft size={16} />
        </button>

        {testimonials.map((item, i) => (
          <motion.img
            key={i}
            src={item.image.secure_url}
            alt={item.name}
            className={`w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 transition-all cursor-pointer ${
              i === index
                ? "border-[#2a2afc] scale-110"
                : "border-transparent opacity-70"
            }`}
            onClick={() => setIndex(i)}
          />
        ))}

        <button
          onClick={handleNext}
          className="bg-[#2a2afc] text-white rounded-full p-2"
        >
          <FaChevronRight size={16} />
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="bg-[#D9D9D9] max-w-3xl mx-auto rounded-xl p-6 md:p-8 text-center shadow"
        >
          <h3 className="text-lg font-semibold mb-1">
            {testimonials[index].name}
          </h3>
          <p className="text-sm text-gray-700 mb-4">
            {testimonials[index].designation}
          </p>
          <p className="text-sm md:text-base text-gray-800">
            {testimonials[index].description}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
