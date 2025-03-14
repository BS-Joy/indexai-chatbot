import { Button } from "@/components/ui/button";
import Image from "next/image";
import SignIn from "./components/SignIn";

export default function conntectPage() {
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
                At Index AI, we take your security and privacy seriously. Our
                email chat bot is designed with robust security measures to
                ensure that your personal information remains safe and
                confidential.
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
          <SignIn />
        </div>
      </div>
    </div>
  );
}
