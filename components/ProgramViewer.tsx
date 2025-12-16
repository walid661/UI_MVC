import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Calendar, ChevronRight } from 'lucide-react';

interface ProgramViewerProps {
  content: string;
}

const ProgramViewer: React.FC<ProgramViewerProps> = ({ content }) => {
  return (
    <div className="prose prose-sm w-full max-w-none text-gray-600 animate-fade-in pb-20">
      <ReactMarkdown
        components={{
          // Week Header
          h2: ({node, ...props}) => (
            <div className="flex items-center gap-2 mt-8 mb-4">
                <Calendar className="text-blue-500" size={20} />
                <h2 className="text-xl font-extrabold text-gray-900 m-0" {...props} />
            </div>
          ),
          // Day Card Header
          h3: ({node, ...props}) => (
            <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider bg-gray-50 border border-gray-100 border-b-0 rounded-t-2xl p-4 mt-6 mb-0 flex justify-between items-center group cursor-pointer" {...props}>
                {props.children}
                <ChevronRight size={16} className="text-gray-400 group-hover:text-blue-500 transition-colors" />
            </h3>
          ),
          // Exercise List (Card Body)
          ol: ({node, ...props}) => (
            <ol className="list-decimal pl-0 space-y-0 bg-white border border-gray-100 border-t-0 rounded-b-2xl shadow-sm mb-6 overflow-hidden" {...props} />
          ),
          ul: ({node, ...props}) => (
             <ul className="pl-4 space-y-1 my-2" {...props} />
          ),
          // List Item (Individual Exercise)
          li: ({node, ...props}) => {
             // Check if it's a top level list item (Exercise) or nested (Note)
             // Simple heuristic: If the parent is an OL, it's a main exercise
             // @ts-ignore
             const isMain = node?.tagName === 'li' && node?.properties?.className !== undefined; // simplified check, styling mainly via CSS below
             return (
                <li className="px-5 py-3 border-b border-gray-50 last:border-0 hover:bg-blue-50/30 transition-colors text-sm leading-relaxed" {...props} />
             )
          },
          p: ({node, ...props}) => <p className="m-0" {...props} />,
          strong: ({node, ...props}) => <strong className="font-bold text-gray-900 block text-base mb-0.5" {...props} />,
          em: ({node, ...props}) => <em className="text-blue-500 text-xs not-italic font-medium bg-blue-50 px-2 py-0.5 rounded-md inline-block mt-1" {...props} />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default ProgramViewer;