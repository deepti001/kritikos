
import React, { useState, useEffect } from 'react';

interface QuizOption {
  id: number;
  label: string;
}

interface QuizAnswer {
  id: number;
  label: string;
}

const Quiz: React.FC = () => {
  const [options, setOptions] = useState<QuizOption[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [question, setQuestion] = useState<string>('');
  const [answer, setAnswer] = useState<QuizAnswer>({ id: 0, label: '' });
  const [isDisabled, setIsDisabled] = useState<boolean>(false);


  useEffect(() => {
    const url = '/pschat/chat';
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJpZCI6OTY2NCwicm9sZXMiOlsiZGVmYXVsdCJdLCJwYXRpZCI6ImZjZDM1NGIyLWQ0N2YtNDk5Ni1iYjVjLTZkNjkyZWI3Zjk0ZiJ9LCJpYXQiOjE3Mzg0MzU2MDgsImV4cCI6MTc0MTAyNzYwOH0.4fD8jv_5bodoIpRSgiw99rhx5fRtE9ACQgizRStnpUs';
    // const token = 'testing';

    const data = {
      "message": "Think as a Quiz master and ask one question related to Artificial Intelligence. Give the output in json format containing fields like Question, Options which will have label and id,  Answer consist of an object with  id as key with value having id of the correct option and label as key with value as the label of the correct option. Do not add any other description as the output will be used in software. Also use the key name same as which is mentioned.",
      "options": {
        "model": "gpt4"
      }
    };

    const fetchQuizOptions = async () => {
      try {
        let response = await fetch(url, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data),
          mode: 'no-cors'
        });

        console.log('response.ok', response.ok, response);

        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        const responseData = await response.json();
        const messages = responseData?.data?.messages || [];
        if (messages.length > 0) {
          const message = messages[messages.length - 1];
          let messageContentJson = JSON.parse(message.content);
          console.log("messageContentJson",messageContentJson);

          // todo-lator: required for testing this const statement and uncomment rest of the line
          if(! messageContentJson) {
            // Dummy Data
            messageContentJson = {
              "Question": "Who is considered as the father of Artificial Intelligence?",
              "Options": [
                {
                  "id": 1,
                  "label": "John McCarthy"
                },
                {
                  "id": 2,
                  "label": "Elon Musk"
                },
                {
                  "id": 3,
                  "label": "Bill Gates"
                },
                {
                  "id": 4,
                  "label": "Steve Jobs"
                }
              ],
              "Answer": {
                "id": 1,
                "label": "John McCarthy"
              }
            }
          }

          setQuestion(messageContentJson.Question || "");
          setOptions(messageContentJson.Options);
          setAnswer(messageContentJson.Answer);

        }
      } catch (error) {
        console.error('There was a problem with the fetch operation for the QUIZ due to token expiary/network, So dummy data is shown on screen', error);
        const messageContentJson = {
          "Question": "Who is considered as the father of Artificial Intelligence?",
          "Options": [
            {
              "id": 1,
              "label": "John McCarthy"
            },
            {
              "id": 2,
              "label": "Elon Musk"
            },
            {
              "id": 3,
              "label": "Bill Gates"
            },
              {
                "id": 4,
                "label": "Steve Jobs"
            }
          ],
          "Answer": {
            "id": 1,
            "label": "John McCarthy"
          }
        }

        setQuestion(messageContentJson.Question || "");
        setOptions(messageContentJson.Options);
        setAnswer(messageContentJson.Answer);

      }
    };

    fetchQuizOptions();
  }, []);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
    console.log("answer", event.target.value, answer.label);
    setIsDisabled(true);
    if(event.target.value === answer.label) {
      console.log('rewarded');
      alert('rewarded, points would be credited');
      // increase
    } else {
      alert('better luck next time');
      console.log('better luck next time');
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-6">Quiz of the Day</h2>
      <p className="mb-4">{question}</p>
      <div className="flex flex-col space-y-2">
        {options?.map((option) => (
          <label key={'quiz_'+ option.id} className="flex items-center">
            <input
              type="radio"
              name="quiz"
              value={option.label}
              className="form-radio text-red-700"
              checked={selectedOption === option.label}
              onChange={handleOptionChange}
              disabled={isDisabled}
            />
            <span className="ml-2">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
