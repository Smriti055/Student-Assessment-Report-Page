import { Radar } from "react-chartjs-2";
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

function SkillChart({ skills }) {
  const data = {
    labels: ["Pronunciation", "Fluency", "Vocabulary", "Grammar"],
    datasets: [
      {
        label: "Skill Scores",
        data: [skills.pronunciation, skills.fluency, skills.vocabulary, skills.grammar],
        backgroundColor: "rgba(99, 102, 241, 0.2)",
        borderColor: "rgba(99, 102, 241, 1)",
        borderWidth: 3,
        pointBackgroundColor: "rgba(99, 102, 241, 1)",
        fill: true,
        tension: 0.4
      }
    ]
  };

  const options = {
    scales: { r: { min: 0, max: 9, ticks: { stepSize: 1 } } },
    plugins: { legend: { display: false } },
    responsive: true,
    maintainAspectRatio: false
  };

  return (
    <section className="max-w-4xl mx-auto mt-8 bg-white rounded-3xl shadow-xl p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Skill Chart</h2>
      <div className="h-96">
        <Radar data={data} options={options} />
      </div>
    </section>
  );
}

export default SkillChart;
