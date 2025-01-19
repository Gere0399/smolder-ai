import { useEffect, useState } from 'react';

const Index = () => {
  const [prompt, setPrompt] = useState('');
  const [placeholder, setPlaceholder] = useState("Design a 3D golden bird sculpture");
  const placeholders = [
    "Design a 3D golden bird sculpture",
    "Produce a 3D illustration of a lion with a golden hide",
    "Model a curved, 12mm-diameter tube to connect two shower pipes"
  ];

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % placeholders.length;
      const textElement = document.querySelector('.animated-placeholder') as HTMLTextAreaElement;
      if (textElement) {
        textElement.style.opacity = '0';
        setTimeout(() => {
          setPlaceholder(placeholders[currentIndex]);
          textElement.style.opacity = '1';
        }, 200);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <textarea
        className={`animated-placeholder w-full min-h-[100px] bg-transparent rounded-xl p-6 text-[18px] transition-opacity duration-200 ${prompt ? 'text-gray-900' : 'text-gray-400'} placeholder:text-gray-400 placeholder:font-[500] focus:outline-none focus:ring-0 resize-none`}
        placeholder={placeholder}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
    </div>
  );
};

export default Index;
