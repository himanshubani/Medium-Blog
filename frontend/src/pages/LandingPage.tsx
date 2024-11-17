import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-white border-b border-gray-200">
        <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link to="/" className="text-2xl font-serif font-bold text-gray-800">Medium</Link>
          <div>
            <Link to="/signin" className="text-gray-600 hover:text-gray-800 mr-4 font-serif">Sign In</Link>
            <Link to="/signup" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 font-serif">Get Started</Link>
          </div>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6">Write, read, and connect</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto font-serif">
            Discover stories, ideas, and expertise from writers on any topic. Join our community of curious minds.
          </p>
          <Link to="/signup" className="bg-gray-800 text-white px-8 py-3 rounded text-xl hover:bg-gray-700 font-serif">
            Start Reading
          </Link>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-800 mb-8 text-center">Featured Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded shadow">
                <h3 className="text-xl font-serif font-bold text-gray-800 mb-2">The Art of Storytelling</h3>
                <p className="text-gray-600 mb-4 font-serif">Explore the timeless craft of narrative and its power to captivate readers across generations.</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <p className="font-serif font-semibold text-gray-800">John Doe</p>
                    <p className="text-sm text-gray-500 font-serif">May 15 · 5 min read</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-serif font-bold text-gray-800 mb-8 text-center">Why Write on Medium?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-serif font-bold text-gray-800 mb-2">Reach Millions of Readers</h3>
              <p className="text-gray-600 font-serif">Share your ideas with our vast and engaged audience.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-serif font-bold text-gray-800 mb-2">Expert Writing Tools</h3>
              <p className="text-gray-600 font-serif">Enjoy our easy-to-use editor and publishing platform.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-serif font-bold text-gray-800 mb-2">Join a Community</h3>
              <p className="text-gray-600 font-serif">Connect with fellow writers and readers who share your interests.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center items-center">
            <p className="text-sm text-gray-600 font-serif">&copy; 2024 Himanshu Bani. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;