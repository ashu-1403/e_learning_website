"use client";

import React from 'react';
import { NextPage } from 'next';
import Image from 'next/image';

// Replace these with actual logos
import googleLogo from '../6929234_google_logo_icon.png';
import microsoftLogo from '../4202105_microsoft_logo_social_social media_icon.png';
import amazonLogo from '../2062062_amazon_buy_logo_online_shop_icon.png';
import facebookLogo from '../9805170_meta_logo_facebook_social media_icon.png';
import appleLogo from '../1298725_apple_logo_icon.png';
import ibmLogo from '../7422428_ibm_hardware_technology_computer_icon.png';
import intelLogo from '../81984_intel_icon.png';
import ciscoLogo from '../294687_cisco_icon.png';
import oracleLogo from '../294664_oracle_icon.png';
import netflixLogo from '../7124274_netflix_logo_icon.png';

const AboutUs: NextPage = () => {
  const placementStats = [
    { number: 5000, description: 'Students Placed' },
    { number: 100, description: 'Partner MNCs' },
    { number: 95, description: 'Placement Rate (%)' },
    { number: 150000, description: 'Highest Package (USD)' },
  
  ];

  const partnerMNCs = [
    { name: 'Google', logo: googleLogo },
    { name: 'Microsoft', logo: microsoftLogo },
    { name: 'Amazon', logo: amazonLogo },
    { name: 'Facebook', logo: facebookLogo },
    { name: 'Apple', logo:appleLogo },
    { name: 'IBM', logo:ibmLogo },
    { name: 'Intel', logo:intelLogo },
    { name: 'Cisco', logo:ciscoLogo },
    { name: 'Oracle', logo:oracleLogo },
    { name: 'Netflix', logo:netflixLogo },
  ];

  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About SkillHub
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Empowering careers through cutting-edge education and industry partnerships
          </p>
        </div>

        <div className="mt-16">
          <dl className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {placementStats.map((stat) => (
              <div key={stat.description} className="bg-white px-6 py-8 rounded-lg shadow-md text-center">
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                  {stat.description}
                </dt>
                <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                  {stat.number.toLocaleString('en-US')}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Our Partner MNCs
          </h3>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
            {partnerMNCs.map((company) => (
              <div key={company.name} className="col-span-1 flex justify-center items-center bg-white rounded-lg shadow-md p-4">
                {company.logo ? (
                  <Image src={company.logo} alt={company.name} width={100} height={50} objectFit="contain" />
                ) : (
                  <span className="text-xl font-semibold text-gray-800">{company.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
