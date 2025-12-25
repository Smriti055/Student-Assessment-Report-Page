export function getFeedback(score, rubric, skill) {
    // feedback.js
if (skill === "overall") {
  switch (rubric) {
    case "ielts":
      if (score >= 8) return "Excellent overall performance in IELTS.";
      if (score >= 6) return "Good overall performance in IELTS, some areas can improve.";
      return "Needs improvement overall in IELTS.";
    case "pte":
      if (score >= 8) return "Excellent overall performance in PTE.";
      if (score >= 6) return "Good overall performance in PTE, but some skills require attention.";
      return "Needs improvement overall in PTE.";
    case "toefl":
      if (score >= 8) return "Excellent overall performance in TOEFL.";
      if (score >= 6) return "Good overall performance in TOEFL, minor improvements needed.";
      return "Needs improvement overall in TOEFL.";
    case "custom":
      if (score >= 8) return "Excellent overall performance in custom assessment.";
      if (score >= 6) return "Good overall performance in custom assessment, some areas can improve.";
      return "Needs improvement overall in custom assessment.";
    default:
      return "";
  }
}

  switch (rubric) {
    case "ielts":
      switch (skill) {
        case "pronunciation":
          if (score >= 8) return "Excellent pronunciation! Your articulation is clear and consistent, ideal for IELTS speaking tasks.";
          if (score >= 6) return "Good pronunciation, but some words may need clearer enunciation to improve overall clarity.";
          return "Needs improvement in pronunciation. Practice stress, intonation, and clarity for better IELTS scores.";
        case "fluency":
          if (score >= 8) return "You speak fluently with natural pacing, which is excellent for IELTS speaking.";
          if (score >= 6) return "Moderate fluency. Try to reduce pauses and hesitations for smoother speech.";
          return "Fluency needs significant improvement. Work on connecting ideas smoothly and maintaining consistent speed.";
        case "vocabulary":
          if (score >= 8) return "Your vocabulary is very strong, with precise and varied word choice suitable for IELTS tasks.";
          if (score >= 6) return "Good vocabulary, but consider expanding your range to express ideas more effectively.";
          return "Limited vocabulary. Focus on learning new words and phrases to enhance expression.";
        case "grammar":
          if (score >= 8) return "Excellent grammatical accuracy with complex sentence structures appropriate for IELTS.";
          if (score >= 6) return "Grammar is fairly accurate, but some mistakes may affect clarity in writing and speaking.";
          return "Grammar needs improvement. Practice sentence construction and tenses for clarity.";
        default:
          return "";
      }

    case "pte":
      switch (skill) {
        case "pronunciation":
          if (score >= 8) return "Outstanding pronunciation! Words are clear and easily understood, perfect for PTE evaluation.";
          if (score >= 6) return "Good pronunciation overall, but some sounds could be refined for better clarity.";
          return "Pronunciation needs work. Focus on articulation and stress patterns.";
        case "fluency":
          if (score >= 8) return "Fluent and confident speech. Excellent pacing and minimal hesitation.";
          if (score >= 6) return "Moderately fluent. Try to maintain rhythm and reduce filler words.";
          return "Fluency needs improvement. Practice speaking continuously and connecting ideas smoothly.";
        case "vocabulary":
          if (score >= 8) return "Rich vocabulary with appropriate word choice. Very effective communication.";
          if (score >= 6) return "Good vocabulary range, but you can enhance precision and variety.";
          return "Vocabulary is limited. Expand your word bank to communicate ideas more effectively.";
        case "grammar":
          if (score >= 8) return "Grammar is highly accurate and consistent, enhancing clarity and comprehension.";
          if (score >= 6) return "Grammar is mostly accurate, but occasional mistakes may affect understanding.";
          return "Grammar needs improvement. Focus on tenses, sentence structure, and agreement.";
        default:
          return "";
      }

    case "toefl":
      switch (skill) {
        case "pronunciation":
          if (score >= 8) return "Excellent TOEFL pronunciation! Words are clear, making listening comprehension easy.";
          if (score >= 6) return "Good pronunciation, but some words may require better stress and intonation.";
          return "Needs improvement in pronunciation. Practice sounds that are challenging for TOEFL listening tasks.";
        case "fluency":
          if (score >= 8) return "Fluent and confident speech suitable for TOEFL speaking sections.";
          if (score >= 6) return "Moderate fluency. Work on reducing pauses and speaking more smoothly.";
          return "Fluency needs improvement. Practice connecting ideas and maintaining a steady pace.";
        case "vocabulary":
          if (score >= 8) return "Strong TOEFL vocabulary, using precise and appropriate words.";
          if (score >= 6) return "Good vocabulary, but could include more academic and topic-specific words.";
          return "Vocabulary is limited. Expand word choice for TOEFL speaking and writing tasks.";
        case "grammar":
          if (score >= 8) return "Grammar is highly accurate with few errors, perfect for TOEFL writing and speaking.";
          if (score >= 6) return "Grammar is fairly accurate, but some errors may appear in complex sentences.";
          return "Grammar needs improvement. Focus on sentence structures and verb tenses for TOEFL.";
        default:
          return "";
      }

    case "custom":
      switch (skill) {
        case "pronunciation":
          if (score >= 8) return "Excellent pronunciation for your custom assessment. Words are clear and easy to understand.";
          if (score >= 6) return "Good pronunciation. Minor improvements can make speech clearer.";
          return "Pronunciation needs work. Practice articulation and clarity.";
        case "fluency":
          if (score >= 8) return "Fluent and smooth speech, excellent for your custom assessment.";
          if (score >= 6) return "Moderate fluency. Reduce pauses for better flow.";
          return "Fluency needs improvement. Focus on speaking continuously and connecting ideas.";
        case "vocabulary":
          if (score >= 8) return "Rich vocabulary and precise word choice for your custom rubric.";
          if (score >= 6) return "Good vocabulary, but expanding word range will improve communication.";
          return "Vocabulary is limited. Work on learning new words and phrases.";
        case "grammar":
          if (score >= 8) return "Highly accurate grammar, demonstrating strong language skills.";
          if (score >= 6) return "Grammar is mostly correct, minor errors may appear.";
          return "Grammar needs improvement. Focus on sentence structure and tense usage.";
        default:
          return "";
      }

    default:
      return "Feedback not available for this rubric.";
  }
}
