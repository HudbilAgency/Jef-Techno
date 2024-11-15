import React , { useEffect} from "react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";




gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {


    useEffect(() => {
    
        gsap.utils.toArray('.Y-axis-text').forEach((element) => {
            gsap.fromTo(
                element,
                { opacity: 0 , y: 50 },
                {   y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 70%',
                        toggleActions: 'play none none none',
                          },
                      }
                  );
              });
          }, []);


    function FormInput({ label, type }) {
        const id = label.toLowerCase().replace(' ', '-');
      
        return (
          <div className="mb-6">
            <label htmlFor={id} className="sr-only">{label}</label>
            <input
              type={type}
              id={id}
              name={id}
              placeholder={label}
              className="overflow-hidden Y-axis-text px-5 py-3 w-full max-w-[380px] bg-white rounded-3xl border border-solid border-neutral-200"
              required
            />
          </div>
        );
      }

      const inputFields = [
        { label: 'Name', type: 'text' },
        { label: 'Email', type: 'email' },
        { label: 'Mobile Number', type: 'tel' },
      ];
      



  return (
    <section className="flex overflow-hidden flex-col text-base font-light  text-stone-300">
    <div className="flex relative flex-col justify-center items-start px-20 py-24 w-full min-h-[628px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <img loading="lazy" src="./HomePageImg/ContactUsMainImg.png" alt="" className="object-cover absolute inset-0 size-full" />
      <div className="flex lg:mx-[1%] relative flex-col items-start mb-0 max-w-full w-[521px] max-md:mb-2.5">
        <h1 className="text-2xl Y-axis-text lg:text-3xl font-semibold text-red-700 uppercase tracking-[2px] max-md:text-4xl">
          Contact us
        </h1>
        <p className="self-stretch Y-axis-text mt-4 text-sm lg:text-base font-normal leading-none text-white max-md:max-w-full">
        Get in touch with us for any business enquiry.
        </p>
        <form className="w-full Y-axis-text mt-12 max-md:mt-10">
          {inputFields.map((field, index) => (
            <FormInput key={index} label={field.label} type={field.type} />
          ))}
          <button
            type="submit"
            className="overflow-hidden Y-axis-text px-16 py-3 mt-2 max-w-full text-xl font-semibold text-white whitespace-nowrap bg-red-700 rounded-3xl w-[380px] max-md:px-5"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </section>
  )
}

export default ContactUs