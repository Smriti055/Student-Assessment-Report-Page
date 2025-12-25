import { getFeedback } from "../utils/feedback";

const skillLabels = {
  pronunciation: "Pronunciation",
  fluency: "Fluency",
  vocabulary: "Vocabulary",
  grammar: "Grammar"
};

function FeedbackSection({ skills, rubric }) {
  return (
    <section className="max-w-4xl mx-auto mt-8 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-3xl shadow-xl p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Descriptive Feedback
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {Object.entries(skills).map(([key, score]) => (
          <div
            key={key}
            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="font-semibold text-indigo-700 text-lg mb-2">
              {skillLabels[key]}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {getFeedback(score, rubric, key)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeedbackSection;
