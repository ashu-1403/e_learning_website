import Navbar from "../components/Navbar";
import Image from "next/image";
import learning from "./learning.png";
import webDevImage from "./webDev.jpg";
import appDevImage from "./appDev.jpg";
import pythonImage from "./pyhon.jpg";
import aiImage from "./ai.jpg";
import mlImage from "./ml.jpg";
import testimonialImage1 from "./testimonial1.jpg";
import testimonialImage2 from "./testimonial2.jpg";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        
        {/* Hero Section */}
        <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-8 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                Unlock Your Potential with{" "}
                <span className="text-blue-500">SkillHub</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Empower yourself with cutting-edge skills for the digital age.
                Join our interactive courses and transform your career.
              </p>
              <div className="flex justify-center md:justify-start">
                <button className="bg-blue-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300">
                  Start Learning
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                src={learning}
                alt="E-learning illustration"
                className="w-full h-auto"
                layout="responsive"
              />
            </div>
          </div>
        </section>

        {/* Continue Learning Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            Continue Learning
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development Bootcamp",
                image: webDevImage,
                description:
                  "Master HTML, CSS, JavaScript, and popular frameworks.",
              },
              {
                title: "App Development Mastery",
                image: appDevImage,
                description: "Create stunning mobile apps for iOS and Android.",
              },
              {
                title: "Data Science Fundamentals",
                image: pythonImage,
                description:
                  "Learn Python, data analysis, and visualization techniques.",
              },
            ].map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-full text-sm font-medium hover:bg-blue-600 transition duration-300">
                    Continue
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose SkillHub Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            Why Choose SkillHub?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Instructors",
                description:
                  "Learn from industry professionals with years of experience.",
              },
              {
                title: "Flexible Learning",
                description:
                  "Study at your own pace with on-demand video lessons.",
              },
              {
                title: "Hands-on Projects",
                description:
                  "Apply your skills to real-world projects and build your portfolio.",
              },
              {
                title: "Career Support",
                description:
                  "Get guidance on job searching and interview preparation.",
              },
              {
                title: "Community Forums",
                description:
                  "Connect with peers and instructors for support and networking.",
              },
              {
                title: "Certificates",
                description:
                  "Earn recognized certificates upon course completion.",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold mb-2 text-blue-500">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            What Our Students Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Web Developer",
                image: testimonialImage1,
                quote:
                  "SkillHub's Web Development Bootcamp completely transformed my career. I went from a complete beginner to landing my dream job in just 6 months!",
              },
              {
                name: "Michael Chen",
                role: "Data Scientist",
                image: testimonialImage2,
                quote:
                  "The Data Science course at SkillHub provided me with the perfect blend of theory and practical skills. I'm now confidently working on complex machine learning projects.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row items-center"
              >
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mb-4 md:mb-0 md:mr-6"
                />
                <div>
                  <p className="text-gray-600 italic mb-4">
                    "{testimonial.quote}"
                  </p>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-blue-500 rounded-xl shadow-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of students who are already transforming their
            careers with SkillHub.
          </p>
          <button  className="bg-white text-blue-500 py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">
            Get Started Today
          </button>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">SkillHub</h3>
              <p>
                Empowering learners worldwide with cutting-edge skills for the
                digital age.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">About Us</h4>
              <p>
                SkillHub is dedicated to providing high-quality online education
                in technology, business, and creative fields. Our mission is to
                make professional skills accessible to everyone.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-300">
                  Facebook
                </a>
                <a href="#" className="hover:text-blue-300">
                  Twitter
                </a>
                <a href="#" className="hover:text-blue-300">
                  LinkedIn
                </a>
                <a href="#" className="hover:text-blue-300">
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 SkillHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
