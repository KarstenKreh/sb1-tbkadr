import React from 'react';
import { useInView } from '../hooks/useInView';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isDarkTheme: boolean;
  delay?: number;
}

export function Feature({ icon, title, description, isDarkTheme, delay = 0 }: FeatureProps) {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`fade-in-up ${isInView ? 'visible' : ''} flex flex-col items-start text-left p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ${
        isDarkTheme ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`flex items-center justify-center w-12 h-12 mb-4 rounded-full ${isDarkTheme ? 'bg-teal-500' : 'bg-teal-100'}`}>
        <div className={isDarkTheme ? 'text-teal-800' : 'text-teal-500'}>
          {icon}
        </div>
      </div>
      <h3 className={`mb-2 text-xl font-semibold ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
      <p className={isDarkTheme ? 'text-gray-300' : 'text-gray-600'}>{description}</p>
    </div>
  );
}
