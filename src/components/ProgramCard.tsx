interface ProgramCardProps {
  icon: string;
  title: string;
  description: string;
  delay?: number;
}

const ProgramCard = ({ icon, title, description }: ProgramCardProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
      <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors duration-300">
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="text-base font-semibold text-gray-900 mb-2 leading-snug">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-4">{description}</p>
      <span className="inline-flex items-center gap-1 text-green-700 text-sm font-semibold group-hover:text-green-600 transition-colors">
        Learn More
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </div>
  );
};

export default ProgramCard;
