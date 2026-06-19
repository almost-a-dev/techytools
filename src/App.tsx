import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import SqlFormatter from './modules/SqlFormatter';
import JsonFormatter from './modules/JsonFormatter';
import XmlFormatter from './modules/XmlFormatter';
import XmlToJsonConverter from './modules/XmlToJsonConverter';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-slate-50 dark:bg-slate-900">
        <Sidebar />
        <main className="flex-grow lg:ml-64 p-4 lg:p-8 pt-16 lg:pt-8">
          <div className="max-w-5xl mx-auto h-full">
            <Routes>
              <Route path="/" element={<Navigate to="/sql-formatter" replace />} />
              <Route path="/sql-formatter" element={<SqlFormatter />} />
              <Route path="/json-formatter" element={<JsonFormatter />} />
              <Route path="/xml-formatter" element={<XmlFormatter />} />
              <Route path="/xml-to-json" element={<XmlToJsonConverter />} />
              <Route path="*" element={<div className="text-center py-20 text-slate-500">Page not found</div>} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
