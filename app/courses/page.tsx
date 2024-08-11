"use client";

import { useState } from "react";
import Image from "next/image";
import Head from "next/head";

import webDevImage from "../webDev.jpg";
import appDevImage from "../appDev.jpg";
import pythonImage from "../pyhon.jpg";
import aiImage from "../ai.jpg";
import mlImage from "../ml.jpg";
import dataAnalysisImage from "../online-statistics.jpg";
import uiUxImage from "../learning.png";
import cloudComputingImage from "../cloud-file-sharing-banner-background.jpg";
import cybersecurityImage from "../ml.jpg";

const courses = [
  {
    title: "Web Development Bootcamp",
    image: webDevImage,
    description: "Master HTML, CSS, JavaScript, and popular frameworks.",
    fullDescription: "This comprehensive bootcamp will take you from a beginner to a proficient web developer. You&#39;ll learn HTML5, CSS3, JavaScript, React, Node.js, and more. By the end of this course, you&#39;ll be able to build responsive, dynamic websites and web applications.",
    syllabus: [
      "HTML5 and CSS3 fundamentals",
      "JavaScript ES6+ and DOM manipulation",
      "React.js for building user interfaces",
      "Node.js and Express for server-side development",
      "Database integration with MongoDB",
      "RESTful API design and implementation",
      "Deployment and hosting"
    ]
  },
  // ...other courses...
];

export default function Courses() {
  const [expandedCourse, setExpandedCourse] = useState(null);

  const toggleCourseDetails = (index) => {
    setExpandedCourse(expandedCourse === index ? null : index);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Our Courses - SkillHub</title>
        <meta name="description" content="Explore our wide range of courses at SkillHub" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transition-duration-300">
              <Image src={course.image} alt={course.title} width={400} height={200} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <button 
                  onClick={() => toggleCourseDetails(index)} 
                  className="bg-blue-500 text-white py-2 px-4 rounded-full text-sm font-medium hover:bg-blue-600 transition duration-300"
                >
                  {expandedCourse === index ? "Show Less" : "Learn More"}
                </button>
                
                {expandedCourse === index && (
                  <div className="mt-4">
                    <p className="text-gray-700 mb-4">{course.fullDescription}</p>
                    <h4 className="text-lg font-semibold mb-2">What you&#39;ll learn:</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {course.syllabus.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 SkillHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
