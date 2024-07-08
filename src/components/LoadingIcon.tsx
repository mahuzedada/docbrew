import { useState, useEffect } from 'react';

const phrases = [
  "Why did the developer go broke? Because he used up all his cache and didn't document his expenses!",
  "How do developers communicate with the dead? They read the docs!",
  "Why did the developer always have peace of mind? His documentation covered everything!",
  "Why did the programmer get lost? He ignored the documentation and got lost in code!",
  "Why was the developer calm during the system crash? He had backup documentation!",
  "Why did the developer stay calm in the library? Because he was good with references!",
  "What's a developer's favorite spot? Wherever there's a clear documentation!",
  "Why did the developer go on a date with a notebook? He heard she was good at taking notes!",
  "Why don't developers tell secrets? They write them down in documentation instead!",
  "What do you call a developer who doesn't write documentation? A myth!",
  "Why was the developer's life in order? He knew the importance of version control in documentation!",
  "How do developers break up? 'It's not you, it's the lack of documentation.'",
  "Why did the JavaScript developer go to school? To improve his documentation skills!",
  "Why did the developer bring a notebook to the party? In case there were noteworthy events!",
  "Why did the developer keep checking his notes? He wanted to avoid null references!",
  "Why did the developer get a promotion? Because his documentation was on another level!",
  "Why was the developer never in trouble? He always had documented evidence!",
  "What's a developer's favorite book? 'The Complete Guide to Documenting Everything'!",
  "Why was the developer's computer so organized? Because he documented every byte!",
  "Why did the developer stay hydrated? He didn't want to suffer from documentation dehydration!"
];

export default function LoadingIcon() {
  const [randomPhrase, setRandomPhrase] = useState(phrases[Math.floor(Math.random() * phrases.length)]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newPhrase = phrases[Math.floor(Math.random() * phrases.length)];
      setRandomPhrase(newPhrase);
    }, 3000);  // change the phrase every 3 seconds

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <div className="mb-8">We are using AI to build your meal ideas...</div>
      <div className="p-6 rounded-xl shadow-2xl mx-4 text-2xl">
        <div className="text-center font-bold">{randomPhrase}</div>
      </div>
    </div>
  );
}
