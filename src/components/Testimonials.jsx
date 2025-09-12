import React ,{useEffect,useState} from 'react'
export default function Testimonials(){
    const testimonials = [
  {
    text: "Our home has been completely transformed—each piece feels thoughtfully chosen and beautifully made. The quality and service exceeded our expectations. We couldn't be happier!",
    name: "Maria Jones",
    title: "CEO, Co-Founder, XYZ Inc.",
    image: "images/person-1.jpg"
  },
  {
    text: "Contuor's team made the process so easy. Their designs are stunning and the furniture is incredibly comfortable. Highly recommended!",
    name: "James Smith",
    title: "Interior Designer",
    image: "images/person_2.jpg"
  },
  {
    text: "I love how every detail is considered. The craftsmanship is top-notch and the delivery was fast and seamless.",
    name: "Linda Lee",
    title: "Homeowner",
    image: "images/person_3.jpg"
  }
]
const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000); // Change every 7 seconds
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  const handleNext = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };
    return(
        <div className='w-full px-5 sm:px-10 md:px-16 lg:px-25 py-10 lg:py-15 h-auto lg:h-[80vh] my-10 flex flex-col items-center justify-center'>
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 text-center mb-8 lg:mb-16'>Testimonials</h2>
        <div className='mx-auto relative px-4 lg:px-16 w-full'>
          <div className='text-center'>
            <p className='text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed mb-8 lg:mb-12 max-w-3xl mx-auto font-light'>
              "{testimonials[testimonialIndex].text}"
            </p>
            <div className='flex flex-col items-center'>
              <div className='w-16 h-16 lg:w-20 lg:h-20 rounded-full mb-4 overflow-hidden'>
                <div className='w-full h-full rounded-full flex items-center justify-center'>
                  <img src={testimonials[testimonialIndex].image} alt={testimonials[testimonialIndex].name} className='w-full h-full object-cover' />
                </div>
              </div>
              <h3 className='font-semibold text-base text-gray-600 mb-1'>{testimonials[testimonialIndex].name}</h3>
              <p className='text-gray-500 text-sm'>{testimonials[testimonialIndex].title}</p>
            </div>
          </div>
          {/* Navigation arrows - Hidden on mobile */}
          <button onClick={handlePrev} className='absolute left-0 top-[40%] transform -translate-y-1/2 w-12 h-12 lg:w-14 lg:h-14 rounded-full group hover:bg-[#3B5D50] hidden md:flex items-center justify-center transition-all bg-[#DCE5E4]'>
            <svg className='w-4 h-4 lg:w-5 lg:h-5 text-gray-600 group-hover:text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
            </svg>
          </button>
          <button onClick={handleNext} className='absolute right-0 top-[40%] transform -translate-y-1/2 w-12 h-12 lg:w-14 lg:h-14 rounded-full group hover:bg-[#3B5D50] hidden md:flex items-center justify-center transition-all bg-[#DCE5E4]'>
            <svg className='w-4 h-4 lg:w-5 lg:h-5 text-gray-600 group-hover:text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
            </svg>
          </button>
          {/* Dots indicator */}
          <div className='flex justify-center mt-8 lg:mt-12 space-x-3 mb-10'>
            {testimonials.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full ${idx === testimonialIndex ? 'bg-[#3B5D50]' : 'bg-gray-300 hover:bg-[#3B5D50] cursor-pointer'}`}
                onClick={() => setTestimonialIndex(idx)}
              ></div>
            ))}
          </div>
        </div>
      </div>

    )
}