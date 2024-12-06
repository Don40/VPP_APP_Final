// components/AboutUs.js
const AboutUs = () => {
    return (
      <div className="bg-gradient-to-b from-blue-50 to-blue-100 py-10">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          
  
          {/* Content Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Content */}
            <div>
              <h2 className="text-2xl font-bold text-gray-700 mb-4">
                Our Mission
              </h2>
              <p className="text-justify text-gray-600 leading-relaxed">
              “Our MISSION is to bring a real and complete change in the governance of the state with a strong,
               clean and decisive leadership and also an all round and inclusive development.”
              </p>
            </div>
  
            {/* Right Content */}
            <div>
              <h2 className="text-2xl font-bold text-gray-700 mb-4">
                Our Vision
              </h2>
              <p className="text-justify text-gray-600 leading-relaxed">
              “Change is possible and can take place only if we can get the
               support and cooperation from all the people who are concerned about 
               the well being of the state. It is therefore the duty and responsibility
                of every right thinking person to support this effort to bring a real and
                 complete change in our state.Therefore, no matter what comes in our way,
                  our commitment to the cause will not be weakened.”
              </p>
            </div>
          </div>
  
          {/* Team Section */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
              VPP OFFICIALS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Example team members */}
              {[
                { name: "Ardent Miller Basaiawmoit", role: "PRESIDENT", image: "https://via.placeholder.com/150" },
                { name: "Dr. Kara H. Chen", role: "VICE PRESIDENT", image: "https://via.placeholder.com/150" },
                { name: "Dr. RICKY A.J. SYNGKON", role: "GENERAL SECRETARY", image: "https://via.placeholder.com/150" },
                { name: "SHEMBOR RYNJAH", role: "JOINT SECRETARY", image: "https://via.placeholder.com/150" },
                { name: "GROSPER RYNTATHIANG", role: "TREASURER", image: "https://via.placeholder.com/150" },
                { name: "DANNY LANGSTIEH", role: "FINANCE SECRETARY", image: "https://via.placeholder.com/150" },
              ].map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow"
                >
                  <img
                    src={member.image}
                    alt={`${member.name}`}
                    className="w-24 h-24 rounded-full mb-3"
                  />
                  <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutUs;
  