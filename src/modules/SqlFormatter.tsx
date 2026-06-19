import React from 'react';
import { format } from 'sql-formatter';
import ToolBase from '../components/ToolBase';

const SqlFormatter: React.FC = () => {
  const handleProcess = (input: string) => {
    if (!input.trim()) return '';
    return format(input, {
      language: 'sql',
      keywordCase: 'upper',
    });
  };

  return (
    <ToolBase
      title="SQL Formatter"
      description="Format and beautify your SQL queries."
      onProcess={handleProcess}
      placeholder="SELECT * FROM users WHERE id = 1"
    />
  );
};

export default SqlFormatter;
