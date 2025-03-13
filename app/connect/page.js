import Image from "next/image";

export default function conntectPage() {
  const apps = [
    {
      name: "Outlook",
      icon: "https://cdn.iconscout.com/icon/free/png-512/free-outlook-logo-icon-download-in-svg-png-gif-file-formats--office-365-pack-logos-icons-1174817.png?f=webp&w=256",
      className: "bg-[#0078D4]",
    },
    {
      name: "Gmail",
      icon: "https://cdn.iconscout.com/icon/free/png-512/free-gmail-logo-icon-download-in-svg-png-gif-file-formats--mail-email-logos-icons-2416660.png?f=webp&w=256",
      className: "bg-white",
    },
    {
      name: "Yahoo",
      icon: "https://cdn.iconscout.com/icon/free/png-512/free-yahoo-logo-icon-download-in-svg-png-gif-file-formats--brand-company-business-brands-pack-logos-icons-2284834.png?f=webp&w=256",
      className: "bg-[#5F01D1]",
    },
  ];

  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Security Content */}
          <div className="space-y-8">
            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Your Security, Our Priority
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                At [Your Company Name], we take your security and privacy
                seriously. Our email chat bot is designed with robust security
                measures to ensure that your personal information remains safe
                and confidential.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Data Protection & Encryption
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                We employ industry-standard encryption protocols to protect all
                communications and stored data. Your messages are securely
                transmitted and never exposed to unauthorized access.
              </p>
            </div>
          </div>

          {/* Right Column - App Icons */}
          <div className="grid grid-cols-2 gap-6 content-start">
            {apps.map((app, index) => (
              <div
                key={app.name}
                className={`
                  rounded-2xl shadow-lg p-8 
                  ${app.className}
                  ${
                    index === 2 ? "col-span-2 lg:col-span-1 translate-x-36" : ""
                  }
                `}
              >
                <div className="aspect-square relative">
                  <Image
                    src={app.icon || "/placeholder.svg"}
                    alt={`${app.name} icon`}
                    fill
                    className="object-contain p-4"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
