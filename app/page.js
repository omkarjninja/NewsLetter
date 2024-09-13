"use client";
import { useEffect, useState } from 'react';
import { db, collection, addDoc } from '../lib/firebase';
export default function Home() {
 
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    
      try {
        const docRef = await addDoc(collection(db, 'subscribers'), {
          email: email,
          timestamp: new Date(),
        });
        console.log('Document written with ID: ', docRef.id);
        setEmail('');
      } catch (e) {
        console.error('Error adding document: ', e);
        setError('Failed to subscribe. Please try again.');
      }
    
    

    setLoading(false);
  };

  return (
    // “Stay Ahead in Tech: Exclusive Web Dev Tips and Game-Changing Resources Delivered Right to Your Inbox!”
    <div>
    <section className="hero">
      <div className="mx-auto sm:px-7 px-4 max-w-screen-xl py-10">
        <div className="flex flex-col md:flex-row gap-20 items-center py-20">
          <div className="max-w-screenlg mx-auto text-center flex flex-col gap-5">
            <h1 className="font-black text-2xl md:text-5xl pts !leading-[34px] md:!leading-[60px]">
            Stay Ahead in Tech:<br />
            Exclusive Web Dev Tips and<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Game-Changing &nbsp;
              </span>
              Resources  <br></br> Delivered Right to Your Inbox!
            </h1>
            <p className="text-gray-200 text-lg max-w-screen-md">
            "Want to keep up with the latest tech trends without the endless scrolling? My newsletter brings you straight-to-the-point blogs, coding resources, and insider tips that’ll level up your web development game. Subscribe now and never miss an update!"
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row mx-auto gap-5 mt-5">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="border border-2 p-2 px-4 rounded-full text-black"
              />
              <input
                type="submit"
                value="Join"
                className="rounded-full bg-blue-400 text-white p-2 px-4 cursor-pointer"
              />
            </form>
            <small className="mb-5">
              Join for Free!
            </small>
            
          </div>
        </div>
      </div>
    </section>
    <section id="articles">
      <div className="w-full px-4 mx-auto max-w-7xl md:w-3/4 lg:w-2/4 py-10">
        <div className="mb-5 text-left md:text-center">
          <h2 className="text-5xl font-extrabold leading-tight text-white pts">Upcoming Blogs</h2>
        </div>
        <div className="flex flex-col space-y-12 divide-y divide-white">
          <div>
            <p className="pt-12 mb-3 text-sm font-normal text-gray-300">September 2024</p>
            <h2 className="mb-2 text-xl font-extrabold leading-snug tracking-tight text-gray-100 md:text-3xl">
              <a href="#" className="text-white ">
                Best Resume for Freshers in 2024!
              </a>
            </h2>
            <p className="mb-4 text-base font-normal text-gray-100">
            “Want to land your dream job straight out of college? This one resume hack could make all the difference in 2024!”
            </p>
            <a href="#" className="btn btn-light btn-sm ">Continue Reading</a>
          </div>
          <div>
            <p className="pt-12 mb-3 text-sm font-normal text-gray-300">September , 2024</p>
            <h2 className="mb-2 text-xl font-extrabold leading-snug tracking-tight text-gray-100 md:text-3xl">
              <a href="#" className="text-white ">
                Implement Dark Mode in Your Web Application and Android Application
              </a>
            </h2>
            <p className="mb-4 text-base font-normal text-gray-100">
             Easy and simple steps to implement dark mode in your web application and android application.
            </p>
            <a href="#" className="btn btn-light btn-sm ">Continue Reading</a>
          </div>
          <div>
          </div>
        </div>
        <div className="py-5 mx-auto text-center flex flex-col gap-5 bg-blue-900 mt-10 rounded-2xl">
          <h2 className="text-2xl font-extrabold leading-tight text-white pts">
            Subscribe to the Newsletter
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row mx-auto gap-5 mt-5">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="border border-2 p-2 px-4 rounded-full text-black"
            />
            <input
              type="submit"
              value="Join"
              className="rounded-full bg-blue-400 text-white p-2 px-4 cursor-pointer"
            />
          </form>
          <small className="mb-5">
          Join for Free!
          </small>
        </div>
      </div>
    </section>
  </div>
  );
}

