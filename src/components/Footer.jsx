import React from 'react';
import { Github, Mail, Heart } from 'lucide-react';

const Footer = () => (
  <footer id="contact" className="bg-gray-900 dark:bg-gray-950 text-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SS</span>
            </div>
            <span className="text-2xl font-bold">StudySync</span>
          </div>
          <p className="text-gray-400 mb-6 max-w-md">
            Empowering students worldwide to achieve their academic goals through 
            collaborative learning and productivity tools.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com"
              className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:contact@studysync.com"
              className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Product</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Updates</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-8 text-center">
        {/* <p className="text-gray-400 flex items-center justify-center">
          Made with <Heart className="text-red-500 mx-2" size={16} /> for students everywhere
        </p> */}
        <p className="text-gray-500 mt-2">© 2024 StudySync. Soham Wani. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer; 