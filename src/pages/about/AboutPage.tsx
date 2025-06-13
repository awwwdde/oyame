import React from 'react';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  const title = "About";
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
      }
    })
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="relative w-full max-w-4xl">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center space-x-4 text-8xl font-bold text-gray-800 mb-16">
              {title.split("").map((char, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={titleVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-center space-y-8"
          >
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Welcome to our company's story. We are a team of passionate innovators and creators
              dedicated to transforming ideas into reality. Our journey began with a simple vision:
              to make technology more accessible and meaningful for everyone.
            </p>

            <div className="mt-12">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                We strive to create innovative solutions that empower people and businesses to achieve
                their full potential. Through cutting-edge technology and creative thinking, we're
                building a future where digital experiences are seamless, intuitive, and impactful.
              </p>
            </div>

            <div className="mt-12">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Vision</h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                We envision a world where technology serves as a bridge between human potential and
                real-world impact. By combining technical excellence with human-centered design,
                we're creating solutions that not only solve problems but also inspire new
                possibilities.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
