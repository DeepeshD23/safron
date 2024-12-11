import React from 'react';

const footerSections = [
  {
    title: 'Company',
    links: ['SaffronStays', 'Signature', 'XSeries', 'About']
  },
  {
    title: 'Contact',
    links: [
      { text: 'mail@saffronstays.com', href: 'mailto:mail@saffronstays.com' },
      { text: '+91 3728253727', href: 'tel:+913728253727' },
      'Contact us',
      'Contact to Partner'
    ]
  },
  {
    title: 'Partner with us',
    links: ['List a home']
  },
  {
    title: 'Policies',
    links: ['Privacy Policy', 'Terms', 'Sitemap', 'Cancellation Policy']
  }
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-4 gap-8 mb-16">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-medium mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={typeof link === 'string' ? link : link.text}>
                    <a 
                      href={typeof link === 'string' ? '#' : link.href}
                      className="hover:text-white transition-colors"
                    >
                      {typeof link === 'string' ? link : link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-sm">© 2021 SaffronStays. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}