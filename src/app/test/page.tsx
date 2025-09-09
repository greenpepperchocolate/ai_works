export default function TestPage() {
  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Tailwind CSS Test
        </h1>
        <p className="text-gray-600 mb-6">
          If you can see this styled properly, Tailwind CSS is working!
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors">
          Test Button
        </button>
      </div>
    </div>
  );
}