import React, { useState } from 'react';
import { Mic, Send } from 'lucide-react';

interface VoiceInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

const VoiceInput: React.FC<VoiceInputProps> = ({ onSendMessage, isLoading }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input);
      setInput('');
    }
  };

  return (
    <div className="flex justify-center w-full">
      <form 
        onSubmit={handleSubmit}
        className="w-full bg-white rounded-full shadow-xl flex items-center p-2 pl-6 transition-all focus-within:ring-2 ring-blue-200 border border-gray-100"
      >
        <div className="text-gray-400 mr-3">
            <Mic size={20} />
        </div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask Coach Mike anything!"
          className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm"
          disabled={isLoading}
        />
        <button 
          type="submit"
          disabled={!input.trim() || isLoading}
          className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors ${
            input.trim() ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-300'
          }`}
        >
          <Send size={18} className="ml-0.5" />
        </button>
      </form>
    </div>
  );
};

export default VoiceInput;