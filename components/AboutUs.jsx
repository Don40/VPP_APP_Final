import { useState } from "react";

const AboutUs = () => {
  const [showFullMission, setShowFullMission] = useState(false);
  const [showFullVision, setShowFullVision] = useState(false);

  const visionPoints = [
    "Meghalaya shall be the state that is territorially secured and economically developed where poverty is eliminated.",
    "The state shall have strong and decisive leadership.",
    "Peace and public security shall prevail, ensuring all-round development of the state.",
    "Politics in the state shall be based on strong pillars of substantive democracy with essential features of rule of law, transparency, accountability, responsibility, and equity.",
    "The resources of the state shall be distributed equitably based on social justice and shall be sustainably used.",
    "The traditional land ownership system shall be maintained and strengthened.",
    "The environment and the ecosystem shall be restored and preserved.",
    "That Meghalaya shall be an investment-friendly state.",
    "That the youth of the state shall be empowered morally and intellectually capable of competing with the rest of the world.",
    "That Meghalaya shall be the state where gender equity prevails.",
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 py-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
       
             {/* Objectives Section */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  <div>
    <h2 className="text-2xl font-bold text-gray-700 mb-4">Our Objectives</h2>
    <p className="text-justify text-gray-600 leading-relaxed">
      {showFullMission ? (
        <div>
          <p className="mb-4">
          
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>The Party shall strive to protect the interests of the indigenous tribal communities while at the same 
           time shall work for the interests of the members of the other communities permanently residing in Meghalaya.</li>
            
            <li>The Party shall strive towards making Meghalaya as a state that is economically, environmentally,politically and socially progressive and sustainable.</li>
            <li> The Party   shall   strive   towards   making   politics in Meghalaya clean, ethical, responsible and accountable.</li>
            <li>The Party shall strive towards ensuring democratic governance at all levels of administration.</li>
            <li>The Party shall strive towards securing the ideals of the Preamble of the Constitution of India - the ideals of Justice – social, economic and political; Liberty of 
              thought and expression, belief, faith and worship; Equality of status and opportunities for every citizen of the State.</li>
              <li>The Party shall bear true faith  and  allegiance  to the  Constitution of  India  as  by  law  established and to the principles of socialism, secularism and democracy and
                 would uphold the Sovereignty, Unity and Integrity of India.</li>
              <li>The Party shall not in any manner, promote or instigate or participate in any form of violence.</li>
          </ul>
          {/* <p className="mt-4">
            These missions reflect our commitment to building a just, equitable, and progressive Meghalaya for generations to come.
          </p> */}
        </div>
      ) : (
        `The Party shall strive to protect the interests of the indigenous tribal communities while at the same 
           time shall work for the interests of the members of the other communities permanently residing in Meghalaya...`
      )}
    </p>
    <button
      onClick={() => setShowFullMission(!showFullMission)}
      className="text-blue-600 hover:underline mt-2"
    >
      {showFullMission ? "Read Less" : "Read More"}
    </button>
  </div>


          {/* Vision Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Vision: To Revive, Restore and Transform</h2>
            <p className="text-justify text-gray-600 leading-relaxed">
            {showFullVision ? (
  <div>
    <p className="text-justify text-gray-600 leading-relaxed"> 
    &nbsp;&nbsp;&nbsp;&nbsp;The Voice of the People Party (VPP) was launched on the 19th of November 2021 with the vision to 
      “Revive, Restore and Transform” the state of Meghalaya. Meghalaya was carved out of Assam as a 
      full-fledged state on the 21st January 1972 after more than a decade of sustained movement led by the 
      farsighted leaders. It was the state that was won on the principle of non-violence, intelligent and 
      responsible guidance with honesty and clear vision.
    </p>
    <p className="text-justify text-gray-600 leading-relaxed">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;During the hill state movement, the people had high 
expectations from the leaders. They hoped that the 
attainment of a separate state would usher in security 
to the indigenous tribals’ identity, culture, land and 
economic interests. It was their dreams that the new 
state would bring development and prosperity to the 
people. The new state undoubtedly was led by committed 
leaders. The Meghalaya Legislative Assembly was full 
of intelligent members who discussed public issues 
with great interests. The sincerity of their intentions 
was visible in addressing the issues of land, indigenous 
interests, employment and education besides others. The 
visionary leaders put in place the Meghalaya Transfer of 
Land (Regulation) Act, 1971. The Meghalaya Residential 
Permit Bill, 1973 and the Meghalaya Employment 
Bill, 1980 were passed by the Meghalaya Legislative 
Assembly though they failed to become laws. There was 
an attribution to the opposition of the Indian National Congress that the Meghalaya Residential Permit Bill failed 
to become an Act. Had this piece of legislation been 
made a law and implemented, decades of unnecessary 
turmoil and movements would have been averted. The 
Education Commission of Meghalaya was formed in 
1977 which submitted its report in 1978. Similarly, the 
Government of Meghalaya instituted the Land Reforms 
Commission for Khasi Hills which submitted its report in 
1975. Therefore, in the 1970s, important initiatives were 
undertaken which tried to address a range of issues. Had 
the vision and those initiatives been pursued sincerely 
our beloved state would not have been in the conditions 
that we are at present.
    </p>
    <p className="text-justify text-gray-600 leading-relaxed">
    &nbsp;&nbsp;&nbsp;&nbsp;But the vision of the prosperous and secured 
Meghalaya was diluted and eventually forgotten under 
the growing influence of the national party. Regretfully, 
the principled and issue based politics was replaced 
by politics of corrupt practices characterized by horse 
trading, lack of accountability, irresponsibility and 
unethical practices. There was a paradigm shift of 
politics from being the concern for common good to the 
politics of greed, self and family aggrandizement. This is 
particularly true after the entry of those who view politics 
as the means to further their business interests. The entry 
of business centric politicians coupled with dynastic 
politics has produced pernicious impact on different 
sectors of the life of the state whether in the fields of 
health, education, environment, agriculture and other 
economic activities, power, borders, local governance 
etc. This has created on the one hand, disillusionment 
amongst the people who even questioned whether there 
is anything that the state should be proud of in the last 
five decades. On the other, the political leaders have inculcated the dependency syndrome in the mind of 
people for their short term political gains no matter how 
disastrous it would be for the future of the state. It is 
rather unthinkable that Meghalaya which is blessed with 
rich resources would be the fifth poorest state in India 
and the poorest in North eastern region.
    </p>
    <p className="text-justify text-gray-600 leading-relaxed">
    &nbsp;&nbsp;&nbsp;&nbsp;It is against the above background that the VPP 
was formed with the commitment that the party will 
be able to strive towards reviving and restore the lost 
values and lost glory. The VPP is committed to bringing 
transformation in the social, economic, political and 
cultural life of the people for the betterment. The Party 
has the following vision for the state:

    </p>

  </div>
) : (
  `The Voice of the People Party (VPP) was launched on the 19th of November 2021 with the vision to “Revive, Restore and Transform”...`
)}
            </p>
            {showFullVision && (
              <div className="text-gray-600 leading-relaxed mt-4">
                {visionPoints.map((point, index) => (
                  <p key={index} className="mb-2">
                    {index + 1}. {point}
                  </p>
                ))}
                <p className="mt-4">
                &nbsp;&nbsp;&nbsp;&nbsp; In short, the party envisions a Meghalaya that is restored with
                  the old good values inherited from our forefathers; that is revived
                  morally, intellectually, and materially; and transformed into a model
                  state for the rest of India.
                </p>
                <p className="mt-2">
                &nbsp;&nbsp;&nbsp;&nbsp;The VPP is strongly embedded in the principle of clean politics
                  for achieving these noble objectives.
                </p>
              </div>
            )}
            <button
              onClick={() => setShowFullVision(!showFullVision)}
              className="text-blue-600 hover:underline mt-2"
            >
              {showFullVision ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">VPP OFFICIALS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Ardent M. Basaiawmoit",
                role: "PRESIDENT",
                image: "/images/Ardent.webp", alt: "Ardent",
              },
              {
                name: "Dr. Kara H. Chen",
                role: "VICE PRESIDENT",
                image: "/images/Kara.webp",
              },
              {
                name: "Dr. RICKY A.J. SYNGKON",
                role: "GENERAL SECRETARY",
                image: "/images/AJ.webp", alt: "AJ",
              },
              {
                name: "BATSKHEM MYRBOH",
                role: "SPOKESPERSON",
                image: "/images/31.webp", alt: "BATSKHEM",
              },
              {
                name: "SHEMBOR RYNJAH",
                role: "JOINT SECRETARY",
                image: "/images/Shem.webp", alt: "Shem",
              },
              {
                name: "GROSPER RYNTATHIANG",
                role: "TREASURER",
                image: "/images/Gros.webp", alt: "Grosper",
              },
              {
                name: "DANNY LANGSTIEH",
                role: "FINANCE SECRETARY",
                image: "/images/Danny.webp", alt: "Danny",
              },
              {
                name: "PHILETA SYIEM",
                role: "PRESIDENT WOMEN'S WING",
                image: "/images/PHILETA.webp", alt: "PHILETA",
              },
               {
                name: "MARBUD DKHAR",
                role: "PRESIDENT YOUTH WING",
                image: "/images/MARBUD.webp", alt: "MARBUD",
              },
              {
                name: "NATHANIEL MAWRIE",
                role: "SECRETARY YOUTH WING",
                image: "/images/NATHAN.webp", alt: "NATHAN",
              },
           
            
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
