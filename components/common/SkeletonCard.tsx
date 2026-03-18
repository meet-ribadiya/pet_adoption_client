const SkeletonCard = () => {
  return (
    <div className="animate-pulse bg-white p-4 rounded-2xl shadow">
      <div className="h-48 bg-gray-300 rounded-xl"></div>
      <div className="h-4 bg-gray-300 mt-4 w-3/4"></div>
      <div className="h-4 bg-gray-200 mt-2 w-1/2"></div>
    </div>
  );
};

export default SkeletonCard;