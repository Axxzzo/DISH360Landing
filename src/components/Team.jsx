import { Linkedin } from 'lucide-react';
import React from 'react';
function Team() {
  const team = [
    {
      name: "Ahamed Aathif",
      role: "Co-Founder / Team Leader",
      image: "../src/public/image/Athif.png",
      linkedin: "https://www.linkedin.com/in/ahamed-aathif-24674a305/"
    },
    {
      name: "Ammar Aflal",
      role: "Co-Founder",
      image: "../src/public/image/Ammar.png",
      linkedin: "https://www.linkedin.com/in/ammar-aflal/"
    },
    {
      name: "Mohamed Shahmy",
      role: "Co-Founder",
      image: "../src/public/image/shahmy.png",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Agaran Ashokkumar",
      role: "Co-Founder",
      image: "../src/public/image/Agaran.png",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Mohomed Usmaan",
      role: "Co-Founder",
      image: "../src/public/image/Usman.png",
      linkedin: "https://www.linkedin.com/in/mohomed-usman-118078298/"
    },
    {
      name: "Subashitha Watthepitiya",
      role: "Co-Founder",
      image: "../src/public/image/blank.png",
      linkedin: "https://linkedin.com"
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-40 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600 mb-2">{member.role}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800"
              >
                <Linkedin size={24} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;