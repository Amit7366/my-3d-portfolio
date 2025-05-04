import project from '../assets/project.png'
const SlideContent = () => {
    return (
      <div className="flex flex-col lg:flex-row bg-black text-white font-sans h-full overflow-y-auto p-6 lg:p-12 w-full rounded-xl shadow-xs shadow-white">
        {/* Left Section (Product Showcase) */}
        <div className="lg:w-1/2 flex flex-col justify-center items-start space-y-6">
          <img src={project} alt="" />
        </div>
  
        {/* Right Section (Project Info) */}
        <div className="lg:w-1/2 flex flex-col justify-center mt-10 lg:mt-0 lg:pl-16 space-y-6">
          <h2 className="text-green-400 text-xl tracking-wide font-mono">
            integrate AI into the ecommerce system
          </h2>
          <p className="text-gray-400 font-mono max-w-lg">
            Developed an online learning platform with course management, quizzes and progress tracking.
          </p>
  
          <div className="space-y-2 text-sm font-mono text-gray-300">
            <div>
              <span className="text-red-400">Project Info</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 py-2">
              <span>Client</span>
              <span>Conceptual JSC</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 py-2">
              <span>Completion Time</span>
              <span>6 Months</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 py-2">
              <span>Technologies</span>
              <span>Node.js, React, MongoDB, Stripe</span>
            </div>
          </div>
  
          <div className="flex space-x-6 pt-4 text-sm font-mono">
            <a href="#" className="text-green-400 underline hover:text-green-300">
              Live Demo
            </a>
            <a href="#" className="text-white underline hover:text-gray-300">
              View on Github
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default SlideContent;
  