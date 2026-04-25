import { useState, useEffect } from 'react';

export function useLanguage() {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('cn-lang');
    return saved || 'en';
  });

  useEffect(() => {
    localStorage.setItem('cn-lang', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'ko' : 'en'));
  };

  return { language, toggleLanguage };
}
