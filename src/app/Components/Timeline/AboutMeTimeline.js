
import React from 'react';

const AboutMeTimeline = () => {
  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">My Journey</h2>
        
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {/* Milestone 1: Graduation */}
          <li>
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-primary">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">2023</time>
              <div className="text-lg font-black">Academic Foundation</div>
              <p className="mt-2 opacity-80">
                Graduated with a degree in Computer Science CSULA. This is where I mastered the fundamentals of algorithms, data structures, and the theoretical underpinnings of modern software.
              </p>
            </div>
            <hr className="bg-primary" />
          </li>

          {/* Milestone 2: First Project */}
          <li>
            <hr className="bg-primary" />
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-primary">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">2023</time>
              <div className="text-lg font-black">Covid 19 Data visualization application</div>
              <p className="mt-2 opacity-80">
                Lead a small team to build an application components utilizing scrum methodologies and industry standard deployment structures.
                Tech stack: using ReactJS and X-Charts we deploy data intensive visuals.
              </p>
            </div>
            <hr className="bg-primary" />
          </li>

          
          <li>
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-primary">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">2024</time>
              <div className="text-lg font-black">Waitonline</div>
              <p className="mt-2 opacity-80">
                Collaborated with a small team of developers utilizing MERN stack. Developed and architeched improvements to SaaS cloud infastructure, reducing cost and improving application efficiency. 
              </p>
            </div>
            <hr className="bg-primary" />
          </li>
          

          {/* Milestone 3: Second Project / Scaling */}
          <li>
            <hr className="bg-primary" />
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-primary">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">2025- Present</time>
              <div className="text-lg font-black">Presentify</div>
              <p className="mt-2 opacity-80">
                Collaborated with a small team of developers to create a session tracking and insights SaaS for third party educational service providers.
              </p>
            </div>
            <hr className="bg-primary" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutMeTimeline;