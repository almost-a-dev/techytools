import React from 'react';
import ToolBase from '../components/ToolBase';

const JsonFormatter: React.FC = () => {
  const handleProcess = (input: string) => {
    if (!input.trim()) return '';
    const parsed = JSON.parse(input);
    return JSON.stringify(parsed, null, 2);
  };

  return (
    <ToolBase
      title="JSON Formatter"
      description="Format and beautify your JSON data."
      onProcess={handleProcess}
      placeholder='{"name": "John", "age": 30}'
    />
  );
};

export default JsonFormatter;
