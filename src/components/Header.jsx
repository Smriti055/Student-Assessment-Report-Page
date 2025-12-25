import report from "../data/report.json";

function Header() {
  return (
    <header className="py-8">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Student Speaking Report</h1>
        <p className="text-lg text-gray-600">Student: {report.studentName}</p>
      </div>
    </header>
  );
}

export default Header;
