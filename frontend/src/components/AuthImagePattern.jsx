// const AuthImagePattern = ({ title, subtitle }) => {
//   return (
//     <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
//       <div className="max-w-md text-center">
//         <div className="grid grid-cols-3 gap-3 mb-8">
//           {[...Array(9)].map((_, i) => (
//             <div
//               key={i}
//               className={`aspect-square rounded-2xl bg-primary/10 ${
//                 i % 2 === 0 ? "animate-pulse" : ""
//               }`}
//             />
//           ))}
//         </div>
//         <h2 className="text-2xl font-bold mb-4">{title}</h2>
//         <p className="text-base-content/60">{subtitle}</p>
//       </div>
//     </div>
//   );
// };

// export default AuthImagePattern;





//NOTE:: Dont delete this

const AuthImagePattern = () => {
  const handles = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/your-profile",
      img: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    },
    {
      name: "GitHub",
      url: "https://github.com/your-username",
      img: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/your-handle",
      img: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/your-handle",
      img: "https://cdn-icons-png.flaticon.com/512/174/174855.png",
    },
  ];

  return (
    <div className="hidden lg:flex items-center justify-center bg-base-100 p-12">
      <div className="max-w-md text-center">
        {/* Social Media Grid */}
        <div className="grid grid-cols-2 gap-x-2 gap-y-4 mb-8">
          {handles.map((handle) => (
            <a
              key={handle.name}
              href={handle.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-28 h-28
                rounded-2xl overflow-hidden
                bg-primary/10 shadow-md
                transform transition-transform duration-300
                hover:scale-105 hover:shadow-xl
                flex items-center justify-center
              "
            >
              <img
                src={handle.img}
                alt={handle.name}
                className="w-3/4 h-3/4 object-contain"
              />
            </a>
          ))}
        </div>

        {/* Heading & Subtitle */}
        <h2 className="text-2xl font-bold mb-2">Connect With Me</h2>
        <p className="text-base-content/60">
          Follow me on my social media platforms!
        </p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
