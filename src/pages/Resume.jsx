const Resume = () => {
  return (
    <div className="min-h-screen pt-20 px-4 md:px-8 lg:px-16 bg-slate-100">
      <h1 className="text-4xl font-bold text-slate-800 mb-12">Resume</h1>
      <div className="max-w-4xl mx-auto">
        {/* Add resume viewer or download button */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <a 
            href="/path-to-resume.pdf" 
            download
            className="inline-block px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume; 