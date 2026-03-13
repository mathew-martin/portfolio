export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Mathew Martin 👋</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Machine Learning Engineer focused on LLMs, efficient training, and production ML systems.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#projects" className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
            View Projects
          </a>
          <a href="https://github.com/mathew-martin" target="_blank" className="border border-gray-300 px-6 py-3 rounded-lg hover:border-gray-500 transition-colors">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}