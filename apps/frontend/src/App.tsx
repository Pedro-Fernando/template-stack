function App() {
  const appName = import.meta.env.VITE_APP_NAME;
  const appDescription = import.meta.env.VITE_APP_DESCRIPTION;

  document.title = appName;

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="p-6 rounded-2xl shadow bg-white text-lg text-center">
        <h1 className="text-2xl font-bold mb-2">{appName}</h1>
        <p className="text-gray-500 mb-4">{appDescription}</p>
        <span className="text-green-600">Tailwind ok ✅</span>
      </div>
    </div>
  );
}

export default App;
