import { Squares2X2Icon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface NavigationItemProps {
  href: string;
  active: boolean;
  text: string;
}

const NavigationItem = ({ href, active, text }: NavigationItemProps) => {
  const textColor = active ? 'text-white' : 'text-slate-300';

  return (
    <Link href={href} className="flex h-10 gap-3 bg-main">
      <AnimatePresence>
        {active ? (
          <motion.div
            className="w-2 bg-white h-full rounded-r-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        ) : (
          <div className="w-2 bg-main"></div>
        )}
      </AnimatePresence>
      <div
        className={`transition-colors duration-500 flex gap-2 py-2 bg-main items-center text-lg ${textColor}`}
      >
        <Squares2X2Icon className="h-8 w-8" />
        {text}
      </div>
    </Link>
  );
};

export default NavigationItem;
