import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const DarkModeToggle: React.FC = () => {
  const [dark, setDark] = useState(false);

useEffect(() => {
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    setDark(true);
    document.documentElement.classList.add('dark');
  }
}, []);

useEffect(() => {
  if (dark) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
}, [dark]);


  return (
    <button
      onClick={() => setDark(!dark)}
      className="text-xl text-yellow-400 ml-4"
      title="Toggle Dark Mode"
    >
      {dark ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default DarkModeToggle;