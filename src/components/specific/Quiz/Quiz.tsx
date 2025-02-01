import React, { useState, useEffect } from 'react';

// Define the type for the quiz options
interface QuizOption {
  id: number;
  name: string;
}

const Quiz: React.FC = () => {
  const [options, setOptions] = useState<QuizOption[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>('');

  useEffect(() => {
    // Simulate an API call to fetch quiz options
    const fetchQuizOptions = async () => {
      // Replace this with your actual API call
      const response = await new Promise<QuizOption[]>((resolve) =>
        setTimeout(() => resolve([
          { id: 1, name: 'China' },
          { id: 2, name: 'Finland' },
          { id: 3, name: 'Hong Kong' },
          { id: 4, name: 'India' }
        ]), 500)
      );
      setOptions(response);
      if (response.length > 0) {
        setSelectedOption(response[0].name); // Set default selected option
      }
    };

    fetchQuizOptions();
  }, []);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-6">Quiz of the Day</h2>
      <p className="mb-4">Which country has the highest life expectancy?</p>
      <div className="flex flex-col space-y-2">
        {options.map((option) => (
          <label key={option.id} className="flex items-center">
            <input
              type="radio"
              name="quiz"
              value={option.name}
              className="form-radio text-red-700"
              checked={selectedOption === option.name}
              onChange={handleOptionChange}
            />
            <span className="ml-2">{option.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
