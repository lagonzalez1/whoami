import React from 'react';

const SkillsContent = () => {
  // 1. Define your skills data here to make it adaptable
  const skillStack = [
    { name: "Go", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
    { name: "Python", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "C++", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
    { name: "Java", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { name: "PostgreSQL", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Mongodb", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Docker", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "AWS", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "NodeJS", level: "Beginner", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "Express", level: "Beginner", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
    { name: "Springboot", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
    
  ];

  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Technical Stack</h2>
        
        {/* Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillStack.map((skill, index) => (
            <div 
              key={index} 
              className="card bg-base-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-white/5"
            >
              <div className="card-body items-center text-center p-6">
                {/* Icon Container */}
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <img 
                    src={skill.icon} 
                    alt={`${skill.name} icon`} 
                    className="w-full h-full object-contain transition-all duration-500"
                  />
                </div>
                
                {/* Skill Info */}
                <h3 className="card-title text-lg">{skill.name}</h3>
                <div className="badge badge-secondary badge-outline mt-2">{skill.level}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsContent;