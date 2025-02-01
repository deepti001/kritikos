import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import UserHeader from '../../components/common/UserHeader/UserHeader';
import styled from 'styled-components';



interface DetailedFeedProps {
  newPost: any; 
}

const DetailedFeed: React.FC<DetailedFeedProps> = ({newPost}) => {

  return (
    <div className="w-2/3">
      <div className="bg-white rounded-lg custom-shadow p-6">
        <h2 className="text-xl font-bold mb-4">{newPost?.post}</h2>
        <p>{newPost?.postDetails}</p>
        <p className="text-gray-500 mb-4">1 min ago</p>
        <textarea className="w-full p-2 border rounded mb-4" rows={2} placeholder="Comment Something..."></textarea>
        <button className="px-4 py-2 bg-red-500 text-white rounded">Submit</button>
        <div className="mt-6 space-y-4">
          {newPost?.comments.map((comment: any, index: number) => (
            <div key={index} className="bg-gray-100 p-4 rounded flex items-start">
              <img src="https://placehold.co/40x40" alt="User profile placeholder" className="w-10 h-10 rounded-full mr-4" />
              <div>
                <h4 className="font-semibold">{comment.userName}</h4>
                <p>{comment.comment}</p>
              </div>
              <span className="ml-auto text-gray-500">1 min ago</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

}


const FeedInfo: React.FC = () => {
  const location = useLocation();
  const user = location.state?.selectedPostItem; 
  const [newUser, setNewUser] = useState(user);
  const [newPost, setNewPost] = useState(user);
  const inputRef = useRef<HTMLInputElement>(null);
  const [promptQueryResponse, setPromptQueryResponse] = useState<string>('');

  const [activeButtons, setActiveButtons] = useState<{ [key: string]: boolean }>({
    Javascript: true,
    HTML: false,
    React: false,
  });

  const [capabilityButtons, setCapabilityButtons] = useState<{ [key: string]: boolean }>({
    Hardworking: false,
    Punctual: false,
  });

  const [extraCapabilityButtons, setExtraCapabilityButtons] = useState<{ [key: string]: boolean }>({
    default: false,
  });

  const [challengesButtons, setChallengesButtons] = useState<{ [key: string]: boolean }>({
    "Engaging with Openness": false,
    "Client focused Delivery": false,
  });

  console.log('FeedInfo', newUser, newPost);

  if (!newPost || !newUser) {
    return <div>No post data available</div>;
  }

  const toggleButton = (buttonName: string) => {
    setActiveButtons((prevState) => ({
      ...prevState,
      [buttonName]: !prevState[buttonName],
    }));
  };

  const toggleCapabilityButton = (buttonName: string) => {
    setCapabilityButtons((prevState) => ({
      ...prevState,
      [buttonName]: !prevState[buttonName],
    }));
  };

  const toggleChallengesButton = (buttonName: string) => {
    setChallengesButtons((prevState) => ({
      ...prevState,
      [buttonName]: !prevState[buttonName],
    }));
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputValue = inputRef.current?.value.trim();
    console.log('test', inputValue);
    if (inputValue) {
      setExtraCapabilityButtons((prevState) => ({
        ...prevState,
        [inputValue]: true,
      }));
      if (inputRef.current) {
        inputRef.current.value = ''; // Clear the input field after submission
      }
    }
  };

  const createPromptQuery = () => {

    let initial_str = `With the following Information, name: ${'Dwight schruti'}, role: ${'Assitent to regionalManager'} Knows: '`;

    for(let key in activeButtons) {
      if(activeButtons[key]) {
        initial_str += key + "', "
      }
    }

    initial_str += " is '"
    for(let key in capabilityButtons) {
      if(capabilityButtons[key]) {
        initial_str += key + "' and"
      }
    }

    initial_str += " can '"
    for(let key in challengesButtons) {
      if(challengesButtons[key]) {
        initial_str += key + "' and"
      }
    }

    initial_str += " and with the knowledge and skills of '"
    for(let key in extraCapabilityButtons) {
      if(extraCapabilityButtons[key]) {
        initial_str += key + "' and"
      }
    }

    initial_str += " Use these keywords and We need to write a 40 words praise to recognise the acheivement for the person";

    return initial_str;
    
  }

  const handlePromptClick = () => {
    console.log('Prompt button clicked!');
    const questionPrompt = createPromptQuery() || "";
    // Additional logic can be added here

    const url = '/pschat/chat';
    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJpZCI6OTY2NCwicm9sZXMiOlsiZGVmYXVsdCJdLCJwYXRpZCI6ImZjZDM1NGIyLWQ0N2YtNDk5Ni1iYjVjLTZkNjkyZWI3Zjk0ZiJ9LCJpYXQiOjE3Mzg0MzU2MDgsImV4cCI6MTc0MTAyNzYwOH0.4fD8jv_5bodoIpRSgiw99rhx5fRtE9ACQgizRStnpUs';  // 
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJpZCI6MTAxNjgsInJvbGVzIjpbImRlZmF1bHQiXSwicGF0aWQiOiI2N2ExNDBkYy1iM2I4LTQzNmMtOWM1OC00MmI3ZGNjNzYxYzgifSwiaWF0IjoxNzM4NDAyNjQ1LCJleHAiOjE3NDYxNzg2NDV9.Zk-VTlULaif5w_Vxrm3hUrWr9r9fBJ9dC1bKZucVojI';  // d
    // const token = '';

    const data = {
      "message": questionPrompt,
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
          const content = message.content || "";

          setPromptQueryResponse(content);

        }
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchQuizOptions();
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <UserHeader user={newUser} />
      <br></br>
      <main className="flex space-x-6">
        <div className="w-1/3">
          <div className="bg-white rounded-lg custom-shadow p-6 mb-6 text-center">
            <img
              src="https://placehold.co/100x100"
              alt="User"
              className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-red-500"
            />
            <h2 className="text-xl font-semibold mb-3">{newUser?.username || "Dwight Schrute"}</h2>
            <Designation className="text-gray-600">Assistant to the regional Manager</Designation>
          </div>
          <div className="bg-white rounded-lg custom-shadow p-6 mb-6">
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Knows</h3>
              <div className="flex space-x-2">
                {Object.keys(activeButtons).map((buttonName) => (
                  <button
                    key={buttonName}
                    className={`px-2 py-1 rounded ${
                      activeButtons[buttonName] ? 'bg-blue-500 text-white' : 'bg-gray-300'
                    }`}
                    onClick={() => toggleButton(buttonName)}
                  >
                    {buttonName}
                  </button>
                ))}

              </div>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Is</h3>
              <div className="flex space-x-2">
                {Object.keys(capabilityButtons).map((buttonName) => (
                  <button
                    key={buttonName}
                    className={`px-2 py-1 rounded ${
                      capabilityButtons[buttonName] ? 'bg-blue-500 text-white' : 'bg-gray-300'
                    }`}
                    onClick={() => toggleCapabilityButton(buttonName)}
                  >
                    {buttonName}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Can</h3>
              <div className="flex space-x-2">
                {Object.keys(challengesButtons).map((buttonName) => (
                  <button
                    key={buttonName}
                    className={`px-2 py-1 rounded ${
                      challengesButtons[buttonName] ? 'bg-blue-500 text-white' : 'bg-gray-300'
                    }`}
                    onClick={() => toggleChallengesButton(buttonName)}
                  >
                    {buttonName}
                  </button>
                ))}
              </div>
            </div>
           
            {/* <div>
              <div className="flex items-center space-x-2 rounded bg-white">
                <h3 className="font-semibold text-grey-500">Endorse</h3>
                <i className="fas fa-play text-red-500"></i>
                <div className="border border-blue-300 ">
                  <i className="fas fa-info-circle text-blue-400"></i>
                  <span className="text-blue-400 pl-2">Click on the skill to endorse or add a new</span>
                </div>
              </div>
              <input type="text" />
            </div> */}

            <form onSubmit={handleFormSubmit} className="flex space-x-2 mt-7">
              <input
                type="text"
                ref={inputRef}
                placeholder="Enter capability"
                className="px-2 py-1 border rounded"
              />
              <button type="submit" className="w-full m-auto text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2">
                Endorse
              </button>
            </form>
        
          </div>
          <div className="bg-white rounded-lg custom-shadow p-6">
            {/* <p className="mb-4">
              I truly appreciate Dwight Schrute's hardworking nature and dedication to client-focused delivery. His expertise in JavaScript played a crucial role in ensuring the success of our paper project. His commitment and attention to detail make him an invaluable team member. Well done, Dwight!
            </p> */}
            <DisplaySkills className="flex space-x-2 mb-4">
            {Object.entries(activeButtons)
              .filter(([_, isActive]) => isActive) // Filter only active buttons
              .map(([buttonName]) => (
                <button
                  key={buttonName}
                  className="px-2 py-1 bg-gray-300 rounded"
                >
                  {buttonName}
                </button>
            ))}

            {Object.entries(capabilityButtons)
              .filter(([_, isActive]) => isActive) // Filter only active buttons
              .map(([buttonName]) => (
                <button
                  key={buttonName}
                  className="px-2 py-1 bg-gray-300 rounded"
                >
                  {buttonName}
                </button>
            ))}

            {Object.entries(challengesButtons)
              .filter(([_, isActive]) => isActive) // Filter only active buttons
              .map(([buttonName]) => (
                <button
                  key={buttonName}
                  className="px-2 py-1 bg-gray-300 rounded"
                >
                  {buttonName}
                </button>
            ))}

            {Object.entries(extraCapabilityButtons)
              .filter(([_, isActive]) => isActive) // Filter only active buttons
              .map(([buttonName]) => (
                <button
                  key={buttonName}
                  className="px-2 py-1 bg-gray-300 rounded"
                >
                  {buttonName}
                </button>
            ))}
              
              
            </DisplaySkills>
            <button 
              className="px-4 py-2 text-red-500 border border-red-500 rounded"
              onClick={handlePromptClick}
            >Prompt</button>
            {promptQueryResponse ? (<div className="border-2 border-red-500 mt-4 p-2 rounded-lg">{promptQueryResponse}</div>) : (<div className="border-2 border-red-500 mt-4 p-4 rounded-lg text-gray-500 text-center">Recognization Statement will Generate here</div>)}
            <div className="mt-4">
              <button className="w-full px-4 py-2 bg-red-500 text-white rounded">Recognize Dwight</button>
            </div>
          </div>
        </div>
        <DetailedFeed newPost={newPost} />
      </main>
    </div>
  );
};

const Designation = styled.p`
  max-width: 180px;
  margin: auto;
`;

const DisplaySkills = styled.div`
  flex-wrap: wrap;
  gap: 10px;
`;

export default FeedInfo;
