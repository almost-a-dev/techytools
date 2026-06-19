import React, { useState } from 'react';

interface ToolBaseProps {
  title: string;
  description: string;
  onProcess: (input: string) => string | Promise<string>;
  inputLabel?: string;
  outputLabel?: string;
  processButtonText?: string;
  placeholder?: string;
}

const ToolBase: React.FC<ToolBaseProps> = ({
  title,
  description,
  onProcess,
  inputLabel = "Input",
  outputLabel = "Output",
  processButtonText = "Process",
  placeholder = "Paste your data here..."
}) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleProcess = async () => {
    setError(null);
    try {
      const result = await onProcess(input);
      setOutput(result);
    } catch (err: any) {
      setError(err.message || 'An error occurred during processing');
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <div className="flex flex-col h-full gap-4">
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{title}</h1>
        <p className="text-slate-600 dark:text-slate-400">{description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-grow">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-slate-700 dark:text-slate-300">{inputLabel}</label>
          <textarea
            className="flex-grow p-4 font-mono text-sm bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none resize-none shadow-sm"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={placeholder}
          />
        </div>

        <div className="flex flex-col gap-2 relative">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">{outputLabel}</label>
            <button
              onClick={copyToClipboard}
              className="text-xs text-primary-600 hover:text-primary-700 dark:text-primary-400 font-medium"
              disabled={!output}
            >
              Copy
            </button>
          </div>
          <textarea
            className="flex-grow p-4 font-mono text-sm bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg outline-none resize-none shadow-sm"
            value={output}
            readOnly
            placeholder="Result will appear here..."
          />
        </div>
      </div>

      {error && (
        <div className="p-3 bg-red-100 border border-red-200 text-red-700 rounded-lg text-sm">
          {error}
        </div>
      )}

      <div className="flex justify-end mt-2">
        <button
          onClick={handleProcess}
          className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg shadow-md transition-colors"
        >
          {processButtonText}
        </button>
      </div>
    </div>
  );
};

export default ToolBase;
