export default function SecurityCard({ icon, title, description, delay = 0 }) {
  return (
    <div
      className="security-card p-6 mb-4 border border-[#D9D9D9] rounded-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex items-start">
        <div className="mr-5 mt-1">{icon}</div>
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
