import React from 'react';
import ToolBase from '../components/ToolBase';
import { xml2json } from 'xml-js';

const XmlToJsonConverter: React.FC = () => {
  const handleProcess = (input: string) => {
    if (!input.trim()) return '';
    return xml2json(input, { compact: true, spaces: 2 });
  };

  return (
    <ToolBase
      title="XML to JSON Converter"
      description="Convert your XML data to JSON format."
      onProcess={handleProcess}
      placeholder="<user><name>John</name></user>"
    />
  );
};

export default XmlToJsonConverter;
