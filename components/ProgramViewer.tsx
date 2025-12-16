import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Calendar, Clock, ChevronRight } from 'lucide-react';

interface ProgramViewerProps {
  content: string;
}

const ProgramViewer: React.FC<ProgramViewerProps> = ({ content }) => {
  return (
    <div className="px-4 animate-fade-in space-y-6">
      <ReactMarkdown
        components={{
          // H2 = Titre de la Semaine
          h2: ({node, ...props}) => (
            <div className="flex items-center gap-3 mt-8 mb-4">
                <div className="bg-blue-600 p-2 rounded-lg shadow-lg shadow-blue-600/20 text-white">
                    <Calendar size={20} strokeWidth={2.5} />
                </div>
                <h2 className="text-2xl font-black text-gray-900 tracking-tight" {...props} />
            </div>
          ),
          
          // H3 = Titre de la Séance (ex: "Lundi : Pectoraux")
          h3: ({node, ...props}) => (
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-4 rounded-t-2xl mt-6 shadow-lg flex justify-between items-center">
                <h3 className="text-base font-bold uppercase tracking-wider m-0" {...props} />
                <Clock size={16} className="text-gray-400" />
            </div>
          ),

          // OL = Le conteneur de la liste d'exos
          ol: ({node, ...props}) => (
            <ol className="list-none pl-0 bg-white border-x border-b border-gray-100 rounded-b-2xl shadow-sm mb-8 overflow-hidden" {...props} />
          ),

          // LI = Une carte d'exercice individuelle
          li: ({node, ...props}) => {
             const { children, ...rest } = props;
             return (
                <li className="group relative border-b border-gray-50 last:border-0 p-4 hover:bg-blue-50/50 transition-colors" {...rest}>
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="text-sm text-gray-600 leading-relaxed pl-2">
                        {children}
                    </div>
                </li>
             )
          },

          // Strong = Nom de l'exercice
          strong: ({node, ...props}) => (
            <div className="flex items-center justify-between mb-1">
                <strong className="text-base font-bold text-gray-900" {...props} />
                <ChevronRight size={16} className="text-gray-300 group-hover:text-blue-500 transition-colors" />
            </div>
          ),

          // Em = Tags (Sets/Reps)
          em: ({node, ...props}) => (
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-blue-100 text-blue-700 mt-1 mr-2" {...props} />
          ),
          
          p: ({node, ...props}) => <p className="m-0" {...props} />,
          ul: ({node, ...props}) => <ul className="mt-2 pl-4 space-y-1 border-l-2 border-gray-100 ml-1" {...props} />
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default ProgramViewer;