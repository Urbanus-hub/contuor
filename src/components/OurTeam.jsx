import React from 'react';

export default function OurTeam() {
  const team = [
    {
      image: 'images/person_1.jpg',
      name: "Lawson Arnold",
      title: "CEO & Founder",
      description: "Visionary leader with a passion for timeless design and sustainable living. Lawson brings over 15 years of experience in the furniture industry."
    },
    {
      image: 'images/person_2.jpg',
      name: "Jeremy William",
      title: "Creative Director",
      description: "Maria crafts inspiring interiors and guides our creative vision. Her eye for detail ensures every piece tells a unique story."
    },
    {
      image: 'images/person_3.jpg',
      name: "James Patel",
      title: "Lead Designer",
      description: "James specializes in blending modern aesthetics with comfort. He leads our design team in creating innovative, functional furniture."
    },
    {
      image: 'images/person_4.jpg',
      name: "Sofia Rossi",
      title: "Head of Customer Experience",
      description: "Sofia is dedicated to making every client feel at home. She oversees our support team and ensures a seamless journey from inspiration to delivery."
    }
  ];

  return (
    <div className="w-full px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {team.map((member, index) => (
          <div key={index} className="bg-transparent rounded-lg overflow-hidden flex flex-col items-center ">
            {/* Profile Image */}
            <div className="p-6 sm:p-8 ">
              <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden flex items-center justify-center border">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Content */}
            <div className="px-4 sm:px-6 pb-6 flex-1 flex flex-col">
              {/* Name */}
              <h2 className="text-xl sm:text-2xl font-normal text-gray-900 mb-2 underline">
                {member.name}
              </h2>
              
              {/* Title */}
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                {member.title}
              </p>
              
              {/* Description */}
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-4 sm:mb-6 flex-1">
                {member.description}
              </p>
              
              {/* Learn More Link */}
              <a
                href="#"
                className="text-sm sm:text-base text-gray-900 underline hover:text-gray-700 transition-colors inline-block mt-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}