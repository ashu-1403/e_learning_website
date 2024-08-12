"use client";

import { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import { StaticImageData } from "next/image";
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

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
  rating: number;
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
    ],
    rating: 4.8
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
    ],
    rating: 4.7
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
    ],
    rating: 4.9
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
    ],
    rating: 4.6
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
    ],
    rating: 4.7
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
    ],
    rating: 4.8
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
    ],
    rating: 4.5
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
    ],
    rating: 4.6
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
    ],
    rating: 4.7
  }
];

const RatingStars = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <span key={i}>
          {i < fullStars ? (
            <FaStar className="text-yellow-400" />
          ) : i === fullStars && hasHalfStar ? (
            <FaStarHalfAlt className="text-yellow-400" />
          ) : (
            <FaStar className="text-gray-300" />
          )}
        </span>
      ))}
      <span className="ml-2 text-sm text-gray-600">{rating.toFixed(1)}</span>
    </div>
  );
};

export default function Courses() {
  const [expandedCourse, setExpandedCourse] = useState<number | null>(null);

  const toggleCourseDetails = (index: number) => {
    setExpandedCourse(expandedCourse === index ? null : index);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Our Courses - SkillHub</title>
        <meta name="description" content="Explore our wide range of courses at SkillHub" />
      </Head>

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-center mb-16 text-gray-800">Our Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image src={course.image} alt={course.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800">{course.title}</h2>
                <p className="text-gray-600 mt-4">{course.description}</p>
                <RatingStars rating={course.rating} />
                <button
                  onClick={() => toggleCourseDetails(index)}
                  className="mt-6 text-blue-500 hover:underline"
                >
                  {expandedCourse === index ? "Show Less" : "Show More"}
                </button>
                {expandedCourse === index && (
                  <div className="mt-6">
                    <p className="text-gray-800">{course.fullDescription}</p>
                    <ul className="mt-4 list-disc list-inside text-gray-700">
                      {course.syllabus.map((topic, i) => (
                        <li key={i}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
