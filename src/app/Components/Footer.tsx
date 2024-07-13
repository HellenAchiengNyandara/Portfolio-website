import Link from 'next/link';
import React from 'react';

export const Footer = () => {
  const currentYear = new Date().getFullYear(); 

  return (
    <div className='text-center text-white p-4 border-t border-[#050505] bg-color black'>
      <p>@{currentYear}. Made with ❤️ by <Link href="https://www.linkedin.com/in/mwongess/">Hellena Achieng.</Link></p>
    </div>
  )
}


