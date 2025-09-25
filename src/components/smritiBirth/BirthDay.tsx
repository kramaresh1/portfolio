import React, { useState } from 'react';

const BirthDay: React.FC = () => {

    const galleryImages = [
  { src: "/1.jpg", alt: "Smriti 1", border: "border-pink-300" },
  { src: "/2.jpg", alt: "Smriti 2", border: "border-yellow-300" },
  { src: "/3.jpg", alt: "Smriti 3", border: "border-purple-300" },
  { src: "/5.jpg", alt: "Smriti 4", border: "border-yellow-300" },
  // Add more images if needed
];

  const [modalImg, setModalImg] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-200 via-yellow-100 to-purple-200 dark:from-purple-900 dark:via-pink-900 dark:to-yellow-900 transition-all duration-700">
      <div className="max-w-4xl w-full p-10 rounded-3xl shadow-2xl bg-white/80 dark:bg-gray-900/80 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-pink-600 dark:text-yellow-300 mb-6 animate-bounce">
          Happy Birthday, Smriti ji ! 🎉
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 mb-8">
          Today is all about celebrating you—your kindness, your laughter, and the beautiful energy you bring to everyone around you.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <img
             src="/6.jpg"
            alt="Birthday Cake"
            className="rounded-full shadow-lg w-48 h-48 object-cover border-4 border-pink-300"
          />
          {/* Add your photo here */}
          <img
           src="/4.jpg"
            alt="Smriti"
            className="rounded-full shadow-lg w-48 h-48 object-cover border-4 border-yellow-300"
          />
        </div>
        {/* <div className="w-full overflow-x-auto py-4">
  <div className="flex gap-6 px-4">
    <img src="/1.jpg" alt="Smriti 1" className="rounded-xl w-40 h-40 object-cover shadow border-2 border-pink-300" />
    <img src="/2.jpg" alt="Smriti 2" className="rounded-xl w-40 h-40 object-cover shadow border-2 border-yellow-300" />
    <img src="/3.jpg" alt="Smriti 3" className="rounded-xl  w-40 h-40  object-cover shadow border-2 border-purple-300" />

    <img src="/5.jpg" alt="Smriti 2" className="rounded-xl w-40 h-40   object-cover shadow border-2 border-yellow-300" />

  </div>
</div> */}

<div className="w-full overflow-x-auto py-4">
          <div className="flex gap-6 px-4">
            {galleryImages.map(img => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                className={`rounded-xl w-40 h-40 object-cover shadow border-2 ${img.border} cursor-pointer transition-transform hover:scale-105`}
                onClick={() => setModalImg(img.src)}
              />
            ))}
          </div>
        </div>

          {modalImg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="relative">
            <img
              src={modalImg}
              alt="Full"
              className="max-w-[90vw] max-h-[80vh] rounded-2xl shadow-2xl border-4 border-yellow-400"
            />
            <button
              onClick={() => setModalImg(null)}
              className="absolute top-2 right-2 bg-white text-pink-600 rounded-full px-4 py-2 font-bold shadow hover:bg-pink-100"
            >
              Close
            </button>
          </div>
        </div>
      )}
        <div className="mb-8">
          <p className="text-lg md:text-xl text-purple-700 dark:text-pink-200 font-semibold mb-4">
            You light up every room with your positivity and grace. May this year bring you new adventures, endless happiness, and all the success you deserve!
          </p>
          <p className="text-md md:text-lg text-gray-600 dark:text-gray-300 mb-4">
            Here’s to more memories, more laughter, and more dreams coming true. You are truly special and loved by everyone who knows you.
          </p>
          <blockquote className="italic text-pink-500 dark:text-yellow-200 border-l-4 border-pink-400 dark:border-yellow-400 pl-4 mb-6">
            "May your birthday be the start of a year filled with good luck, good health, and much happiness."
          </blockquote>
        </div>
        <div className="flex flex-col items-center gap-4 mb-8">
          <span className="inline-block px-8 py-3 rounded-full bg-pink-500 text-white font-bold shadow-lg animate-pulse text-lg">
            Have an amazing birthday, Smriti ji! 💖
          </span>
          <span className="inline-block px-6 py-2 rounded-full bg-yellow-400 text-pink-900 font-semibold shadow-md">
            Wishing you smiles, surprises, and sweet moments all day long!
          </span>
        </div>
        <div className="mb-8">
  <h2 className="text-3xl font-bold text-pink-600 dark:text-yellow-300 mb-4">A Special Wish from Me</h2>
  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl shadow text-left mx-auto max-w-xl">
    <p className="text-lg md:text-xl text-gray-800 dark:text-gray-100 mb-2">
      Smriti, you are truly a wonderful person—caring, talented, and always spreading positivity wherever you go. 
      I feel grateful to know you and to celebrate this special day with you. 
      May your journey ahead be filled with beautiful moments, new adventures, and all the happiness you deserve.
    </p>
    <p className="text-md md:text-lg text-pink-700 dark:text-yellow-200 font-semibold">
      Keep smiling, keep shining, and always believe in yourself. 
      Wishing you a year as amazing as you are!
    </p>
    <span className="block mt-4 text-purple-600 dark:text-yellow-300 font-bold">
      Happy Birthday once again, Smriti ji! 🎉
    </span>
  </div>
</div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-pink-600 dark:text-yellow-300 mb-2">Fun Facts About Smriti</h2>
          <ul className="list-disc list-inside text-left mx-auto max-w-xl text-gray-700 dark:text-gray-200">
            <li>Love toward Radha Rani</li>
            {/* <li>Always ready for an adventure and travel.</li> */}
            <li>Her laughter is contagious and brightens every day.</li>
            <li>Best friend anyone could ask for!</li>
          </ul>
        </div>
        <div className="mt-8">
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-200">
            With lots of love,<br />
            <span className="font-bold text-pink-600 dark:text-yellow-300">Amaresh</span>
          </p>
        </div>
        <div className="mt-10">
          <span className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-500 text-white font-extrabold shadow-xl text-2xl animate-pulse">
            Cheers to you, Smriti ji ! 🎂🎈
          </span>
        </div>
      </div>

        {/* Sorry for Late Wishes Section */}
        <div className="mt-12">
          <div className="max-w-xl mx-auto bg-yellow-100 dark:bg-yellow-900/40 rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-pink-700 dark:text-yellow-200 mb-2">A Little Late, But Full of Heart!</h3>
            <p className="text-lg text-gray-700 dark:text-gray-100">
              Sorry for wishing you  late, Smriti! Sometimes life gets busy, but my wishes for your happiness and success are always on time in my heart.
              <br />
              Hope your birthday was as wonderful as you are, and may the year ahead bring you even more joy and beautiful moments!
            </p>
            <span className="block mt-4 text-pink-600 dark:text-yellow-300 font-semibold">
              Belated but heartfelt, always cheering for you! 💐
            </span>
          </div>
        </div>

    </div>
  );
};

export default BirthDay;