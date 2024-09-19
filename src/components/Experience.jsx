import { EXPERIENCES } from "../constants";

const Experience = () => {
    return (
        <div className="border-b border-neutral-900 pb-16">
            <h1 className="my-20 text-center text-4xl font-bold">Experience</h1>
            <div className="relative mx-auto" style={{ width: '90%' }}>
                {/* Center Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-400"></div>
                
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className={`mb-12 flex items-start relative ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                        {/* Hollow Circle Icon on the Center Line with filled purple dot */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full border-2 border-indigo-600 bg-gray-800 flex items-center justify-center z-10">
                            <div className="w-3 h-3 bg-indigo-600 rounded-full"></div> {/* Purple filled dot */}
                        </div>

                        {/* Experience Card */}
                        <div
                            className={`w-full lg:w-[48%] p-6 rounded-lg text-white ${index % 2 === 0 ? 'mr-2 text-left' : 'ml-2 text-left'}`}
                            style={{
                                background: 'linear-gradient(145deg, rgba(40,48,63,1) 0%, rgba(20,24,32,1) 100%)', // Darker gradient
                                boxShadow: '0px 6px 15px -5px rgba(0, 0, 0, 0.6)' // Inline style for shadow on bottom half
                            }}
                        >
                            <p className="mb-1 text-sm text-neutral-400">{experience.year}</p>
                            <h6 className="mb-2 text-lg font-semibold">{experience.role} - <span className="text-sm text-indigo-400">{experience.company}</span></h6>
                            <p className="mb-4 text-neutral-300">{experience.description}</p>
                            <div className="flex flex-wrap">
                                {experience.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="mr-2 mt-2 rounded bg-gray-700 px-2 py-1 text-sm font-medium text-indigo-400">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
