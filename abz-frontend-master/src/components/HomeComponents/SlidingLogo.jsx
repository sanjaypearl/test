"use client";

import { useRef, useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { gsap } from "gsap";
import { instance } from "@/services/Axios/axiosInterceptor";

export default function SlidingLogo() {
  let [logos,setLogos] = useState([])
  const marqueeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(marqueeRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: marqueeRef.current,
          start: "top 90%",
        },
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  async function getPartnerLogo(){
    let partners = await instance.get("/partners")
    let data = partners.data.data
    setLogos(data)
  }

  useEffect(()=>{
     getPartnerLogo()
  },[])



  return (
    <section
      ref={marqueeRef}
      className="py-12 bg-white border-t border-b border-gray-200"
    >
      <Marquee gradient={false} speed={40} pauseOnHover={true} className="py-4">
        <div className="flex items-center gap-16 mx-8">
          {logos.map((logo) => (
            <div key={logo._id} className="relative h-16 w-32">
              <Image
                src={logo.image.secure_url || "/placeholder.svg"}
                alt={logo.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
}
