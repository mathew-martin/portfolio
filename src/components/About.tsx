const skills = [
  "Python", "PyTorch", "TypeScript", "Next.js",
  "CUDA", "Transformers", "SQL", "Docker"
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="grid grid-cols-2 gap-12">
          <div>
            <p className="text-gray-600 leading-relaxed mb-4">
              I'm a graduating CS student (May 2026) specializing in ML engineering.
              I've built LLMs from scratch, optimized training with custom CUDA kernels,
              and developed production ML systems.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Currently looking for MLE / AI Engineer roles.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="bg-white border border-gray-200 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}