import React from 'react';
import ToolBase from '../components/ToolBase';
import { xml2json, json2xml } from 'xml-js';

const XmlFormatter: React.FC = () => {
  const handleProcess = (input: string) => {
    if (!input.trim()) return '';
    const json = xml2json(input, { compact: true, spaces: 2 });
    return json2xml(json, { compact: true, spaces: 2 });
  };

  return (
    <ToolBase
      title="XML Formatter"
      description="Format and beautify your XML data."
      onProcess={handleProcess}
      placeholder="<user><name>John</name></user>"
    />
  );
};

export default XmlFormatter;
