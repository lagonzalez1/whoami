import Link from 'next/link';

const AboutMeHero = () => {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row gap-12">
        {/* Profile Image with a custom border effect */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-45"></div>
          <img
            src="https://tracker-client-storage.s3.us-west-1.amazonaws.com/static_frontend_images/myself.jpeg" // Replace with your actual photo
            className="max-w-sm rounded-lg shadow-2xl relative"
            alt="Me"
          />
        </div>

        <div className="max-w-xl">
          <div className="flex gap-2 mb-4">
            <div className="badge badge-outline">Backend</div>
            <div className="badge badge-outline">Database</div>
            <div className="badge badge-outline">Cybersecurity</div>
          </div>
          
          <h1 className="text-5xl font-extrabold leading-tight">
            Building digital <span className="text-primary">experiences</span> that scale.
          </h1>
          
          <p className="py-6 text-lg opacity-80">
            Hi, I&apos;m <span className="font-semibold">Luis </span>. I specialize in 
            architecting, building backend services using various languages. I’m passionate about 
            clean code, accessibility, and solving complex problems with simple solutions.
          </p>

          <div className="flex gap-4">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeHero;