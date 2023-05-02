import NavigationItem from './NavigationItem';
import { useEffect, useState } from 'react';

const Links = [
  {
    href: '/weekly',
    text: '주간 학습관리',
  },
  {
    href: '/students',
    text: '학생관리',
  },
  {
    href: '/courses',
    text: '수강관리',
  },
];

const Navigation = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  useEffect(() => {
    const foundIndex = Links.findIndex(
      ({ href }) => href === location.pathname,
    );
    setActiveIndex(foundIndex);
  }, []);

  return (
    <div className="flex flex-col h-full bg-main">
      {Links.map(({ href, text }, index) => (
        <div key={href} onClick={() => setActiveIndex(index)}>
          <NavigationItem
            href={href}
            active={activeIndex === index}
            text={text}
          />
        </div>
      ))}
    </div>
  );
};

export default Navigation;
