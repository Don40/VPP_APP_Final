import { useState } from "react";
import './KhadcSelector.css'; // Import the CSS file for custom styles

const KhadcSelector = () => {
  const items = [
    {
      id: 1,
      label: "1-JIRANG",
      photo: "/images/kyrmen.webp",
      alt: "Mountain Photo",
      video: "https://www.youtube.com/embed/HTAbQik80mo?si=GP4AVUM6hkXMP92-",
      profile: {
        name: "Apkyrmen Lyngdoh",
        age: "38",
        qualification: "********",       
      },
    },
    {
      id: 2,
      label: "2-NONGPOH",
      photo: "/images/3.webp",
      alt: "Mountain Photo",
      video: "https://www.youtube.com/embed/fJ7pdX9H98I?si=OBGHOsn5y21CMZ1S",
      profile: {
        name: "Matthew",
        age: "38",
        qualification: "******",       
      },
    },
    {
      id: 3,
      label: "3-MAWHATI ",
      photo: "/images/3.webp",
      alt: "Mountain Photo",
      video: "https://www.youtube.com/embed/fJ7pdX9H98I?si=OBGHOsn5y21CMZ1S",
      profile: {
        name: "Matthew",
        age: "38",
        qualification: "MCA",       
      },
    },
    {
      id: 4,
      label: "4-UMSNING ",
      photo: "/images/3.webp",
      alt: "Mountain Photo",
      video: "https://www.youtube.com/embed/fJ7pdX9H98I?si=OBGHOsn5y21CMZ1S",
      profile: {
        name: "Matthew",
        age: "38",
        qualification: "MCA",       
      },
    },
    {
      id: 5,
      label: "5-UMROI  ",
      photo: "/images/3.webp",
      alt: "Mountain Photo",
      video: "https://www.youtube.com/embed/fJ7pdX9H98I?si=OBGHOsn5y21CMZ1S",
      profile: {
        name: "Matthew",
        age: "38",
        qualification: "MCA",       
      },
    },
    {
      id: 6,
      label: "6-SOHRYNGKHAM",
      photo: "/images/3.webp",
      alt: "Mountain Photo",
      video: "https://www.youtube.com/embed/fJ7pdX9H98I?si=OBGHOsn5y21CMZ1S",
      profile: {
      name: "Matthew",
      age: "38",
      qualification: "MCA",       
      },
    },
    {
      id: 7,
      label: "7-MAWKYNREW",
      photo: "/images/3.webp",
      alt: "Mountain Photo",
      video: "https://www.youtube.com/embed/fJ7pdX9H98I?si=OBGHOsn5y21CMZ1S",
      profile: {
      name: "Matthew",
      age: "38",
      qualification: "MCA",       
      },
    },
    {
      id: 8,
      label: "8-NONGKREM",
      photo: "/images/3.webp",
      alt: "Mountain Photo",
      video: "https://www.youtube.com/embed/fJ7pdX9H98I?si=OBGHOsn5y21CMZ1S",
      profile: {
      name: "Kit",
      age: "38",
      qualification: "MCA",       
      },
    },
    {
      id: 9,
      label: "9-LYNGKYRDEM-LAITKROH",
      photo: "/images/3.webp",
      alt: "Mountain Photo",
      video: "https://www.youtube.com/embed/fJ7pdX9H98I?si=OBGHOsn5y21CMZ1S",
      profile: {
      name: "Matthew",
      age: "38",
      qualification: "MCA",       
      },
    },
    {
      id: 10,
      label: "10-NONGSHKEN",
      photo: "/images/3.webp",
      alt: "Mountain Photo",
      video: "https://www.youtube.com/embed/fJ7pdX9H98I?si=OBGHOsn5y21CMZ1S",
      profile: {
      name: "Matthew",
      age: "38",
      qualification: "MCA",       
      },
    },
    {
      id: 11,
      label: "11-SHELLA",
      photo: "/images/3.webp",
      alt: "Mountain Photo",
      video: "https://www.youtube.com/embed/fJ7pdX9H98I?si=OBGHOsn5y21CMZ1S",
      profile: {
      name: "Matthew",
      age: "38",
      qualification: "MCA",       
      },
    },
    {
      id: 12,
      label: "12-MAWSYNRAM",
      photo: "/images/3.webp",
      alt: "Mountain Photo",
      video: "https://www.youtube.com/embed/fJ7pdX9H98I?si=OBGHOsn5y21CMZ1S",
      profile: {
      name: "Matthew",
      age: "38",
      qualification: "MCA",       
      },
    },
    {
      id: 13,
      label: "13-SOHRA",
      photo: "/images/3.webp",
      alt: "Mountain Photo",
      video: "https://www.youtube.com/embed/fJ7pdX9H98I?si=OBGHOsn5y21CMZ1S",
      profile: {
      name: "Matthew",
      age: "38",
      qualification: "MCA",       
      },
    },
    {
      id: 14,
      label: "14-MYLLIEM",
      photo: "/images/3.webp",
      alt: "Mountain Photo",
      video: "https://www.youtube.com/embed/fJ7pdX9H98I?si=OBGHOsn5y21CMZ1S",
      profile: {
      name: "Matthew",
      age: "38",
      qualification: "MCA",       
      },
    },
    {
      id: 15,
      label: "15-LABAN-MAWPREM",
      photo: "/images/3.webp",
      alt: "Mountain Photo",
      video: "https://www.youtube.com/embed/fJ7pdX9H98I?si=OBGHOsn5y21CMZ1S",
      profile: {
      name: "Matthew",
      age: "38",
      qualification: "MCA",       
      },
    },
    {
      id: 16,
      label: "16-NONGTHYMMAI",
      photo: "/images/3.webp",
      alt: "Mountain Photo",
      video: "https://www.youtube.com/embed/fJ7pdX9H98I?si=OBGHOsn5y21CMZ1S",
      profile: {
      name: "Matthew",
      age: "38",
      qualification: "MCA",       
      },
    },
    {
      id: 17,
      label: "17-LAITUMKRAH-MALKI",
      photo: "/images/3.webp",
      alt: "Mountain Photo",
      video: "https://www.youtube.com/embed/fJ7pdX9H98I?si=OBGHOsn5y21CMZ1S",
      profile: {
      name: "Matthew",
      age: "38",
      qualification: "MCA",       
      },
    },
    {
      id: 18,
      label: "18-MAWKHAR -PYNTHORUMKHRAH",
      photo: "/images/3.webp",
      alt: "Mountain Photo",
      video: "https://www.youtube.com/embed/fJ7pdX9H98I?si=OBGHOsn5y21CMZ1S",
      profile: {
      name: "Strong",
      age: "38",
      qualification: "MCA",       
      },
    },
    {
      id: 19,
      label: "19-JAIAW",
      photo: "/images/3.webp",
      alt: "Mountain Photo",
      video: "https://www.youtube.com/embed/fJ7pdX9H98I?si=OBGHOsn5y21CMZ1S",
      profile: {
      name: "Matthew",
      age: "38",
      qualification: "MCA",       
      },
    },
    {
      id: 20,
      label: "20-MAWLAI",
      photo: "/images/3.webp",
      alt: "Mountain Photo",
      video: "https://www.youtube.com/embed/fJ7pdX9H98I?si=OBGHOsn5y21CMZ1S",
      profile: {
      name: "Eddie ",
      age: "38",
      qualification: "MCA",       
      },
    },
    {
      id: 21,
      label: "21-MAWPHLANG DIENGIEI",
      photo: "/images/3.webp",
      alt: "Mountain Photo",
      video: "https://www.youtube.com/embed/fJ7pdX9H98I?si=OBGHOsn5y21CMZ1S",
      profile: {
      name: "Matthew",
      age: "38",
      qualification: "MCA",       
      },
    },
    {
      id: 22,
      label: "22-NONGSPUNG-SOHIONG",
      photo: "/images/3.webp",
      alt: "Mountain Photo",
      video: "https://www.youtube.com/embed/fJ7pdX9H98I?si=OBGHOsn5y21CMZ1S",
      profile: {
      name: "Matthew",
      age: "38",
      qualification: "MCA",       
      },
    },
    {
      id: 23,
      label: "23-MAIRANG",
      photo: "/images/3.webp",
      alt: "Mountain Photo",
      video: "https://www.youtube.com/embed/fJ7pdX9H98I?si=OBGHOsn5y21CMZ1S",
      profile: {
      name: "John Basaiawmoit",
      age: "38",
      qualification: "MCA",       
      },
    },
    {
      id: 24,
      label: "24-PARIONG",
      photo: "/images/3.webp",
      alt: "Mountain Photo",
      video: "https://www.youtube.com/embed/fJ7pdX9H98I?si=OBGHOsn5y21CMZ1S",
      profile: {
      name: "Matthew",
      age: "38",
      qualification: "MCA",       
      },
    },
    {
      id: 25,
      label: "25-MAWKYRWAT",
      photo: "/images/3.webp",
      alt: "Mountain Photo",
      video: "https://www.youtube.com/embed/fJ7pdX9H98I?si=OBGHOsn5y21CMZ1S",
      profile: {
      name: "Matthew",
      age: "38",
      qualification: "MCA",       
      },
    },
    {
      id: 26,
      label: "26-LANGRIN",
      photo: "/images/3.webp",
      alt: "Mountain Photo",
      video: "https://www.youtube.com/embed/fJ7pdX9H98I?si=OBGHOsn5y21CMZ1S",
      profile: {
      name: "Matthew",
      age: "38",
      qualification: "MCA",       
      },
    },
    {
      id: 27,
      label: "27-NONGSTOIN",
      photo: "/images/3.webp",
      alt: "Mountain Photo",
      video: "https://www.youtube.com/embed/fJ7pdX9H98I?si=OBGHOsn5y21CMZ1S",
      profile: {
      name: "Matthew",
      age: "38",
      qualification: "MCA",       
      },
    },
    {
      id:28,
      label: "28-RAMBRAI-JYRNGAM",
      photo: "/images/3.webp",
      alt: "Mountain Photo",
      video: "https://www.youtube.com/embed/fJ7pdX9H98I?si=OBGHOsn5y21CMZ1S",
      profile: {
      name: "Matthew",
      age: "38",
      qualification: "MCA",       
      },
    },
    {
      id: 29,
      label: "29-MAWSHYNRUT",
      photo: "/images/3.webp",
      alt: "Mountain Photo",
      video: "https://www.youtube.com/embed/fJ7pdX9H98I?si=OBGHOsn5y21CMZ1S",
      profile: {
      name: "Matthew",
      age: "38",
      qualification: "MCA",       
      },
    },
        
    
    // Add more items as needed
  ];

  const [selectedItem, setSelectedItem] = useState(items[0]);

  const handleChange = (e) => {
    const selectedId = parseInt(e.target.value, 10);
    const item = items.find((item) => item.id === selectedId);
    setSelectedItem(item);
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 py-5">
      <div className="container mx-auto px-4 mb-6">
      <h1 className="text-center text-3xl font-bold font-playfair text-blue-800 bounce ">
          KHADC </h1> <h2 className="text-center text-2xl font-bold mb-6 font-playfair text-blue-700 pt-1 "><br></br> VPP 2025 MDC Candidates
        </h2>
        <h1 className="text-center text-1xl font-bold mb-2 font-playfair text-blue-800">
          Select Your Constituency
        </h1>

        <div className="flex justify-center mb-6">
          <select
            onChange={handleChange}
            className="text-black p-3 text-lg w-full max-w-md border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {items.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-center">
          <div className="border border-gray-200 rounded-lg shadow-lg max-w-md bg-white">
            <img
              src={selectedItem.photo}
              alt={selectedItem.alt}
              className="w-full rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 text-gray-800">
                {selectedItem.label}
              </h2>
              <p className="text-gray-700 mb-1">
                <strong>Name:</strong> {selectedItem.profile.name}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Age:</strong> {selectedItem.profile.age}
              </p>
              <p className="text-gray-700">
                <strong>Qualification:</strong> {selectedItem.profile.qualification}
              </p>
            </div>

            {/* Embed Video */}
            <div className="p-4">
              <iframe
                className="w-full h-64 rounded-lg"
                src={selectedItem.video}
                title="Embedded Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KhadcSelector;
