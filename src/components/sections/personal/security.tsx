import * as React from "react";

type SecurityFeature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const SECURITY_FEATURES: ReadonlyArray<SecurityFeature> = [
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z" />
      </svg>
    ),
    title: "Privacy and data",
    description: "We protect your details through strict standards and 2FA.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 4L13.5 4.5C13.1 4.6 12.6 4.6 12.2 4.5L9 3.5L3 6V8L9 5.5L12 6.5L15 5.5L21 9ZM12 8C8.13 8 5 11.13 5 15C5 18.87 8.13 22 12 22C15.87 22 19 18.87 19 15C19 11.13 15.87 8 12 8ZM12 20C9.24 20 7 17.76 7 15C7 12.24 9.24 10 12 10C14.76 10 17 12.24 17 15C17 17.76 14.76 20 12 20ZM12 12C10.34 12 9 13.34 9 15C9 16.66 10.34 18 12 18C13.66 18 15 16.66 15 15C15 13.34 13.66 12 12 12Z" />
      </svg>
    ),
    title: "Dedicated support",
    description: "Questions? Get help in 14 languages.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 7C13.1 7 14 7.9 14 9S13.1 11 12 11 10 10.1 10 9 10.9 7 12 7ZM12 13C14.67 13 20 14.33 20 17V19H4V17C4 14.33 9.33 13 12 13Z" />
      </svg>
    ),
    title: "International safeguarding",
    description: "We're regulated by national authorities around the globe.",
  },
];

export function Security() {
  return (
    <section className="py-16 md:py-24 bg-emerald-900">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Upper Section - Trust Message and Padlock */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-16">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-100 leading-tight">
              Trust us to look after your money
            </h2>
            <p className="text-lg md:text-xl text-emerald-200 leading-relaxed">
              We help over 14.8 million people move £36 billion every quarter —
              here&apos;s how we make sure it&apos;s safe.
            </p>
          </div>

          {/* Right Side - Padlock Graphic */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              {/* Large Padlock Icon */}
              <div className="w-48 h-48 md:w-64 md:h-64 relative">
                <svg
                  className="w-full h-full text-emerald-300 opacity-80"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 8H17V6C17 3.24 14.76 1 12 1S7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 3C13.66 3 15 4.34 15 6V8H9V6C9 4.34 10.34 3 12 3ZM18 20H6V10H18V20Z" />
                </svg>
                {/* Keyhole */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-6 bg-emerald-900 rounded-full"></div>
                  <div className="w-2 h-2 bg-emerald-900 rounded-full mt-1"></div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-emerald-400 rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-emerald-300 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>

        {/* Lower Section - Three Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {SECURITY_FEATURES.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              {/* Icon */}
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center border-2 border-emerald-200">
                  <div className="text-emerald-600">{feature.icon}</div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-emerald-100">
                  {feature.title}
                </h3>
                <p className="text-emerald-200 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Security;
