interface ProgramCardProps {
  icon: string;
  title: string;
  description: string;
  delay?: number;
}

const ProgramCard = ({ icon, title, description, delay = 0 }: ProgramCardProps) => {
  return (
    <div 
      className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border border-blue-100"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center mb-4 group-hover:from-blue-200 group-hover:to-green-200 transition-all duration-300">
        <div className="text-2xl">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
      <button className="mt-4 text-green-600 font-semibold hover:text-green-700 transition-colors duration-300 flex items-center">
        Learn More
        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default ProgramCard;
