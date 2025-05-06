
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight } from 'lucide-react';

const TranslationTool: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [fromLanguage, setFromLanguage] = useState('english');
  const [toLanguage, setToLanguage] = useState('assamese');

  const handleTranslate = () => {
    // This is a placeholder. In a real application, you would call a translation API here
    setOutputText('এইটো অসমীয়ালৈ অনুবাদ। ' + inputText);
    console.log('Translation requested:', { inputText, fromLanguage, toLanguage });
  };

  const handleSwapLanguages = () => {
    const tempLang = fromLanguage;
    setFromLanguage(toLanguage);
    setToLanguage(tempLang);
    
    // Also swap the text if there's already a translation
    if (outputText) {
      setInputText(outputText);
      setOutputText(inputText);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
        <div className="p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 space-y-4 md:space-y-0">
            <h2 className="text-2xl font-bold text-gray-800">Translation Tool</h2>
            
            <div className="flex items-center space-x-4">
              <Select value={fromLanguage} onValueChange={setFromLanguage}>
                <SelectTrigger className="w-28 md:w-36">
                  <SelectValue placeholder="From" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="assamese">Assamese</SelectItem>
                </SelectContent>
              </Select>
              
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={handleSwapLanguages}
                className="rounded-full hover:bg-translation-accent"
              >
                <ArrowRight className="h-5 w-5 text-translation-primary" />
              </Button>
              
              <Select value={toLanguage} onValueChange={setToLanguage}>
                <SelectTrigger className="w-28 md:w-36">
                  <SelectValue placeholder="To" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="assamese">Assamese</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="source" className="block text-sm font-medium text-gray-700">
                Source Text
              </label>
              <Textarea
                id="source"
                placeholder={fromLanguage === 'english' ? "Enter English text here..." : "অসমীয়া পাঠ ইয়াত লিখক..."}
                className="min-h-[200px] resize-none border-gray-300 focus:border-translation-primary focus:ring-translation-primary"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="result" className="block text-sm font-medium text-gray-700">
                Translated Text
              </label>
              <Textarea
                id="result"
                placeholder={toLanguage === 'english' ? "Translation will appear here..." : "অনুবাদ ইয়াত দেখা যাব..."}
                className="min-h-[200px] resize-none bg-gray-50 border-gray-300"
                value={outputText}
                readOnly
              />
            </div>
          </div>
          
          <div className="mt-6 flex justify-center md:justify-end">
            <Button 
              onClick={handleTranslate} 
              disabled={!inputText}
              className="bg-translation-primary hover:bg-translation-secondary text-white px-8"
            >
              Translate
            </Button>
          </div>
        </div>
      </div>
      
      <div className="mt-4 text-sm text-gray-500 text-center">
        <p>For best results, enter complete sentences for more accurate translation</p>
      </div>
    </div>
  );
};

export default TranslationTool;
