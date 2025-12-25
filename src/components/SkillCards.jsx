import report from "../data/report.json";

const skillsConfig = [
  { key: "pronunciation", label: "Pronunciation" },
  { key: "fluency", label: "Fluency" },
  { key: "vocabulary", label: "Vocabulary" },
  { key: "grammar", label: "Grammar" }
];

function SkillCards({ skills }) {
  return (
    <section className="max-w-4xl mx-auto mt-8 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-3xl shadow-xl p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Skill-wise Breakdown
      </h2>
      <div className="space-y-6">
        {skillsConfig.map(({ key, label }) => {
          const score = skills[key];
          const percentage = (score / 9) * 100;
          return (
            <div key={key}>
              <div className="flex justify-between mb-2 items-center">
                <span className="font-medium text-gray-700">{label}</span>
                <span className="text-sm text-gray-600">{score} / 9</span>
              </div>
              <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{
                    width: `${percentage}%`,
                    background: "linear-gradient(90deg, #6366F1, #A78BFA)"
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default SkillCards;
