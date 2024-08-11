"use client";

import { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import { StaticImageData } from "next/image";

import webDevImage from "../webDev.jpg";
import appDevImage from "../appDev.jpg";
import pythonImage from "../pyhon.jpg";
import aiImage from "../ai.jpg";
import mlImage from "../ml.jpg";
import dataAnalysisImage from "../online-statistics.jpg";
import uiUxImage from "../learning.png";
import cloudComputingImage from "../cloud-file-sharing-banner-background.jpg";
import cybersecurityImage from "../ml.jpg";

interface Course {
  title: string;
  image: StaticImageData;
  description: string;
  fullDescription: string;
  syllabus: string[];
}

const courses: Course[] = [
  {
    title: "Web Development Bootcamp",
    image: webDevImage,
    description: "Master HTML, CSS, JavaScript, and popular frameworks.",
    fullDescription: "This comprehensive bootcamp will take you from a beginner to a proficient web developer. You&apos;ll learn HTML5, CSS3, JavaScript, React, Node.js, and more. By the end of this course, you&apos;ll be able to build responsive, dynamic websites and web applications.",
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
  {
    title: "App Development Mastery",
    image: appDevImage,
    description: "Create stunning mobile apps for iOS and Android.",
    fullDescription: "Dive into the world of mobile app development. This course covers both iOS and Android platforms, teaching you Swift for iOS and Kotlin for Android. You&apos;ll learn about app architecture, UI/UX design principles specific to mobile, and how to publish your apps to the respective app stores.",
    syllabus: [
      "Introduction to mobile app development",
      "Swift programming for iOS",
      "Kotlin programming for Android",
      "UI/UX design for mobile apps",
      "Working with device features (camera, GPS, etc.)",
      "Data persistence and networking",
      "App store submission and guidelines"
    ]
  },
  {
    title: "Python Programming",
    image: pythonImage,
    description: "Learn Python for software development and scripting.",
    fullDescription: "This course provides a comprehensive introduction to Python programming. You&apos;ll learn the fundamentals of Python syntax, data structures, and object-oriented programming. By the end, you&apos;ll be able to write complex Python programs and use popular libraries for data manipulation and analysis.",
    syllabus: [
      "Python basics and syntax",
      "Data structures and algorithms in Python",
      "Object-oriented programming in Python",
      "File handling and error management",
      "Working with APIs and web scraping",
      "Data analysis with Pandas and NumPy",
      "Introduction to web development with Django"
    ]
  },
  {
    title: "Artificial Intelligence Fundamentals",
    image: aiImage,
    description: "Explore the basics of AI and its applications.",
    fullDescription: "This course introduces you to the fascinating world of Artificial Intelligence. You&apos;ll learn about various AI techniques, including search algorithms, knowledge representation, and machine learning. The course also covers ethical considerations and real-world applications of AI.",
    syllabus: [
      "Introduction to AI and its history",
      "Search algorithms and problem-solving",
      "Knowledge representation and reasoning",
      "Machine learning basics",
      "Natural language processing",
      "Computer vision",
      "AI ethics and societal impact"
    ]
  },
  {
    title: "Machine Learning Essentials",
    image: mlImage,
    description: "Dive into ML algorithms and their implementation.",
    fullDescription: "This course covers the fundamental concepts and algorithms in machine learning. You&apos;ll learn about supervised and unsupervised learning, model evaluation, and feature engineering. By the end of the course, you&apos;ll be able to implement and deploy machine learning models for various applications.",
    syllabus: [
      "Introduction to machine learning",
      "Supervised learning algorithms",
      "Unsupervised learning algorithms",
      "Feature engineering and selection",
      "Model evaluation and validation",
      "Ensemble methods",
      "Deep learning introduction"
    ]
  },
  {
    title: "Data Analysis with Python",
    image: dataAnalysisImage,
    description: "Learn to analyze and visualize data using Python.",
    fullDescription: "This course teaches you how to use Python for data analysis and visualization. You&apos;ll learn how to work with popular libraries like Pandas, NumPy, and Matplotlib to process, analyze, and visualize complex datasets. By the end, you&apos;ll be able to derive meaningful insights from data and communicate them effectively.",
    syllabus: [
      "Introduction to data analysis",
      "Working with Pandas for data manipulation",
      "Data cleaning and preprocessing",
      "Exploratory data analysis",
      "Data visualization with Matplotlib and Seaborn",
      "Statistical analysis in Python",
      "Introduction to data mining techniques"
    ]
  },
  {
    title: "UI/UX Design Principles",
    image: uiUxImage,
    description: "Create user-friendly and visually appealing interfaces.",
    fullDescription: "This course introduces you to the principles of user interface (UI) and user experience (UX) design. You&apos;ll learn how to create intuitive, aesthetically pleasing interfaces that enhance user satisfaction. The course covers design thinking, wireframing, prototyping, and user testing methodologies.",
    syllabus: [
      "Introduction to UI/UX design",
      "Design thinking process",
      "User research and personas",
      "Information architecture",
      "Wireframing and prototyping",
      "Visual design principles",
      "Usability testing and iteration"
    ]
  },
  {
    title: "Cloud Computing Fundamentals",
    image: cloudComputingImage,
    description: "Understand cloud services and deployment models.",
    fullDescription: "This course provides a comprehensive introduction to cloud computing. You&apos;ll learn about different cloud service models, deployment strategies, and leading cloud platforms. By the end of the course, you&apos;ll be able to design and implement cloud-based solutions for various business needs.",
    syllabus: [
      "Introduction to cloud computing",
      "Cloud service models (IaaS, PaaS, SaaS)",
      "Cloud deployment models",
      "Amazon Web Services (AWS) fundamentals",
      "Microsoft Azure basics",
      "Google Cloud Platform overview",
      "Cloud security and compliance"
    ]
  },
  {
    title: "Cybersecurity Basics",
    image: cybersecurityImage,
    description: "Learn to protect systems and networks from cyber threats.",
    fullDescription: "This course introduces you to the fundamental concepts of cybersecurity. You&apos;ll learn about various types of cyber threats, security protocols, and best practices for protecting digital assets. The course also covers incident response and ethical hacking techniques.",
    syllabus: [
      "Introduction to cybersecurity",
      "Network security fundamentals",
      "Cryptography and encryption",
      "Web application security",
      "Malware analysis and prevention",
      "Incident response and forensics",
      "Ethical hacking and penetration testing"
    ]
  }
];

export default function Courses() {
  const [expandedCourse, setExpandedCourse] = useState<number | null>(null);

  // Explicitly type the index parameter as number
  const toggleCourseDetails = (index: number) => {
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
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
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
                    <h4 className="text-lg font-semibold mb-2">What you&apos;ll learn:</h4>
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
