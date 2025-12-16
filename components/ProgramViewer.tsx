import React from 'react';
import ReactMarkdown from 'react-markdown';

interface ProgramViewerProps {
  content: string;
}

const ProgramViewer: React.FC<ProgramViewerProps> = ({ content }) => {
  return (
    <div className="prose prose-sm w-full max-w-none text-gray-600 animate-fade-in">
      <ReactMarkdown
        components={{
          h2: ({node, ...props}) => <h2 className="text-xl font-bold text-indigo-600 mt-6 mb-3 border-b border-indigo-100 pb-2" {...props} />,
          h3: ({node, ...props}) => <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2" {...props} />,
          p: ({node, ...props}) => <p className="mb-3 leading-relaxed" {...props} />,
          strong: ({node, ...props}) => <strong className="font-bold text-blue-600" {...props} />,
          ul: ({node, ...props}) => <ul className="list-disc pl-5 space-y-2 mb-4 marker:text-indigo-400" {...props} />,
          li: ({node, ...props}) => <li className="pl-1" {...props} />,
          em: ({node, ...props}) => <em className="text-gray-500 text-xs not-italic bg-gray-50 px-2 py-0.5 rounded-md border border-gray-100 block mt-1 w-fit" {...props} />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default ProgramViewer;
