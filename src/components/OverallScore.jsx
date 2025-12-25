import { useState } from "react";
import report from "../data/report.json";
import { getFeedback } from "../utils/feedback";
import SkillCards from "./SkillCards";
import SkillChart from "./SkillChart";
import FeedbackSection from "./FeedbackSection";

function OverallScore() {
  const [selectedRubric, setSelectedRubric] = useState("ielts");
  const rubricData = report.rubrics[selectedRubric]; // fetch selected rubric
  if (!rubricData) return <p>Rubric data not available</p>; // safety check

  const { overallScore, skills } = rubricData;

  return (
    <section className="max-w-6xl mx-auto p-6">
      {/* Rubric Selector */}
      <div className="flex justify-center gap-4 mb-10">
        {Object.keys(report.rubrics).map((rubric) => (
          <button
            key={rubric}
            onClick={() => setSelectedRubric(rubric)}
            className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${
              selectedRubric === rubric
                ? "bg-indigo-600 text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-indigo-100"
            }`}
          >
            {rubric.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Summary Score */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-10 mb-12">
        <div className="relative w-40 h-40">
          <svg className="w-full h-full" viewBox="0 0 36 36">
            <path
              className="text-gray-200"
              strokeWidth="3.5"
              fill="none"
              stroke="currentColor"
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="text-indigo-500"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
              strokeDasharray={`${(overallScore / 9) * 100}, 100`}
              stroke="currentColor"
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-extrabold text-indigo-700">{overallScore}</span>
            <span className="text-sm text-gray-500">/ 9</span>
          </div>
        </div>
        <p className="text-lg font-semibold text-gray-700 max-w-md text-center sm:text-left">
    {getFeedback(overallScore, selectedRubric, "overall")}
  </p>
      </div>

      {/* Pass skills as prop */}
      <SkillCards skills={skills} />
      <SkillChart skills={skills} />
      <FeedbackSection skills={skills} rubric={selectedRubric} />

    </section>
  );
}

export default OverallScore;
