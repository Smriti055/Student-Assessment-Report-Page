# Student Assessment Report Page

A **functional prototype** of a Student Speaking Assessment Report Page, similar to platforms like SpeechAce and IELTS score reports.  
This project demonstrates frontend skills, basic data handling, and logical code structure.  

---

## 📌 Features

- **Overall Score**
  - Displays the student’s overall score (out of 9) dynamically.
  - Circular progress bar for visual representation.
  
- **Skill-wise Scores**
  - Pronunciation
  - Fluency
  - Vocabulary
  - Grammar
  - Displayed using animated progress bars and a Radar chart.
  
- **Graphical Representation**
  - Radar chart using Chart.js.
  - Progress bars for each skill for intuitive visualization.
  
- **Descriptive Feedback**
  - Feedback is generated per skill based on the score.
  - Dynamic feedback changes with the selected rubric and scores.
  
- **Multiple Rubrics**
  - Supports IELTS, PTS, TOEFL, and Custom rubrics.
  - Users can switch between rubrics to see different scores and feedback.

---

## 🛠️ Tech Stack

- **Frontend:** React, Tailwind CSS
- **Charts:** Chart.js
- **Data Source:** JSON file (`report.json`) in `src/data`
- **No backend required** (JSON file used as data source)

---

## 📁 Project Structure

student-assessment-report/
├─ public/
├─ src/
│ ├─ components/
│ │ ├─ OverallScore.jsx
│ │ ├─ SkillCards.jsx
│ │ ├─ SkillChart.jsx
│ │ └─ FeedbackSection.jsx
│ ├─ data/
│ │ └─ report.json
│ ├─ utils/
│ │ └─ feedback.js
│ └─ App.jsx
├─ package.json
└─ README.md

## ⚡ How to Run

1. Clone the repository:

```bash
git clone https://github.com/Smriti055/Student-Assessment-Report-Page.git

cd Student-Assessment-Report-Page

npm install

npm run dev

Open the URL shown in the terminal (usually http://localhost:5173) in your browser to view the report page.

```markdown
---

## 📊 Data

Student assessment data is stored in `src/data/report.json`. Supports multiple rubrics: IELTS, PTS, TOEFL, Custom.

{
  "studentName": "John Doe",
  "rubrics": {
    "ielts": {
      "overallScore": 7.2,
      "skills": {
        "pronunciation": 7,
        "fluency": 8,
        "vocabulary": 6.5,
        "grammar": 7
      }
    },
    "pts": {
      "overallScore": 6.8,
      "skills": {
        "pronunciation": 6.5,
        "fluency": 7,
        "vocabulary": 7,
        "grammar": 6.5
      }
    },
    "toefl": {
      "overallScore": 7.5,
      "skills": {
        "pronunciation": 7.5,
        "fluency": 8,
        "vocabulary": 7,
        "grammar": 7.5
      }
    },
    "custom": {
      "overallScore": 6.9,
      "skills": {
        "pronunciation": 6.5,
        "fluency": 7,
        "vocabulary": 6.8,
        "grammar": 7
      }
    }
  }
}


---

## 📝 Feedback Logic

Feedback is generated dynamically in `src/utils/feedback.js`.

- **Score ranges**:
  - ≥ 8 → Excellent performance
  - 6–7 → Good performance with minor inaccuracies
  - < 6 → Needs improvement

Feedback is skill-specific and rubric-specific (IELTS, PTS, TOEFL, Custom).





