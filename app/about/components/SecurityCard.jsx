export default function SecurityCard({ icon, title, description }) {
  return (
    <div className="security-card p-6 mb-4 border border-[#D9D9D9] rounded-md">
      <div className="flex items-start">
        <div className="mr-8 mt-5 ">{icon}</div>
        <div className="w-full">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
