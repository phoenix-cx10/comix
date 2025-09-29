import React, { useState } from 'react';

function ContactForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // submisssion of form 
    console.log({ email, message, isSubscribed });
    alert('Thank you for your message! We will get back to you soon.');
    setEmail('');
    setMessage('');
    setIsSubscribed(false);
  };

  return (
    <section className="bg-[#ebb9a0] py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* left side */}
          <div>
            <h2 className="text-3xl font-bold font-mono text-gray-800 mb-6">Stay updated...</h2>
            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed font-archivo">
                Our company is dedicated to bringing you the best collection of books 
                from around the world. We believe in the power of stories to transform lives.
              </p>
              <p className="leading-relaxed font-archivo">
                Our company is committed to quality and customer satisfaction. 
                We carefully curate each book in our collection to ensure excellence.
              </p>
              <p className="leading-relaxed font-archivo">
                Our company values community and knowledge sharing. 
                Join our reading community and discover new worlds through literature.
              </p>
            </div>
          </div>

          {/*right side*/}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold font-mono text-gray-800 mb-6">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium font-mono text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none font-archivo focus:ring-2 focus:ring-[#B95723] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium font-mono text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message here..."
                  rows="4"
                  className="w-full px-4 py-3 border font-archivo border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B95723] focus:border-transparent resize-none"
                  required
                ></textarea>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="subscribe"
                  checked={isSubscribed}
                  onChange={(e) => setIsSubscribed(e.target.checked)}
                  className="w-4 h-4 text-[#B95723] border-gray-300 rounded focus:ring-[#B95723]"
                />
                <label htmlFor="subscribe" className="ml-2 text-sm font-mono text-gray-600">
                  Subscribe to our newsletter for updates
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#B95723] text-white font-archivo py-3 px-6 rounded-lg hover:bg-[#A04A1F] transition-colors duration-300 font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;