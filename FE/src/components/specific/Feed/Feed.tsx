import styled from "styled-components";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  password: string;
  role: String;
}

interface HeaderProps {
  user: User;
}
const FeedData = [
  {
    "postID": 1,
    "userName": "deepti01",
    "channel": "General",
    "post": "lorium lorium iosumlortium iosumlortium iosumlortium iosum lortium iosum lortium iosum lorium lorium iosum lorium iosumlortium iosumlortium iosumlortium iosumlortium!",
    "postDetails": "tium iosum lorium lorium iosum lorium iosumlortium iosumlortium iosumlortium iosumlortium! lorium lorium iosumlortium iosumlortium iosumlortium iosum lortium iosum lortium iosum lorium lorium iosum lorium iosumlortium iosumlortium iosumlortium iosumlortium!. lorium lorium iosumlortium iosumlortium iosumlortium iosum lortium iosum lortium iosum lorium lorium iosum lorium iosumlortium iosumlortium iosumlortium iosumlortium! lorium lorium iosumlortium iosumlortium iosumlortium iosum lortium iosum lortium iosum lorium lorium iosum lorium iosumlortium iosumlortium iosumlortium iosumlortium! lorium lorium iosumlortium iosumlortium iosumlortium iosum lortium iosum lortium iosum lorium lorium iosum lorium iosumlortium iosumlortium iosumlortium iosumlortium! lorium lorium iosumlortium iosumlortium iosumlortium iosum lortium iosum lortium iosum lorium lorium iosum lorium iosumlortium. iosumlortium iosumlortium iosumlortium! lorium lorium iosumlortium iosumlortium iosumlortium iosum lortium iosum lortium iosum lorium lorium iosum lorium iosumlortium iosumlortium iosumlortium iosumlortium! lorium lorium iosumlortium iosumlortium iosumlortium iosum lortium iosum lortium iosum lorium lorium iosum lorium iosumlortium iosumlortium iosumlortium iosumlortium! lorium lorium iosumlortium iosumlortium iosumlortium iosum lortium iosum lortium iosum lorium lorium iosum lorium iosumlortium iosumlortium iosumlortium iosumlortium! lorium lorium iosumlortium.",
    "dateTime": "2023-11-01T16:45:00.000Z",
    "comments": [
      {
        "postID": 1,
        "userName": "apoorva01",
        "dateTime": "2023-11-01T17:45:00.000Z",
        "comment": "I need to try this."
      }
    ]
  },
  {
    "postID": 2,
    "userName": "apoorva01",
    "channel": "Project",
    "post": "lorium lorium iosum lortium iosum lortium kit test iosum lortium iosum lortium iosum lorium lorium iosum lorium iosumlortium iosumlortium iosumlortium iosumlortium!",
    "postDetails": "tium iosum lorium lorium iosum lorium iosumlortium iosumlortium iosumlortium iosumlortium! lorium lorium iosumlortium iosumlortium iosumlortium iosum lortium iosum lortium iosum lorium lorium iosum lorium iosumlortium iosumlortium iosumlortium iosumlortium!. lorium lorium iosumlortium iosumlortium iosumlortium iosum lortium iosum lortium iosum lorium lorium iosum lorium iosumlortium iosumlortium iosumlortium iosumlortium! lorium lorium iosumlortium iosumlortium iosumlortium iosum lortium iosum lortium iosum lorium lorium iosum lorium iosumlortium iosumlortium iosumlortium iosumlortium! lorium lorium iosumlortium iosumlortium iosumlortium iosum lortium iosum lortium iosum lorium lorium iosum lorium iosumlortium iosumlortium iosumlortium iosumlortium! lorium lorium iosumlortium iosumlortium iosumlortium iosum lortium iosum lortium iosum lorium lorium iosum lorium iosumlortium. iosumlortium iosumlortium iosumlortium! lorium lorium iosumlortium iosumlortium iosumlortium iosum lortium iosum lortium iosum lorium lorium iosum lorium iosumlortium iosumlortium iosumlortium iosumlortium! lorium lorium iosumlortium iosumlortium iosumlortium iosum lortium iosum lortium iosum lorium lorium iosum lorium iosumlortium iosumlortium iosumlortium iosumlortium! lorium lorium iosumlortium iosumlortium iosumlortium iosum lortium iosum lortium iosum lorium lorium iosum lorium iosumlortium iosumlortium iosumlortium iosumlortium! lorium lorium iosumlortium.",
    "dateTime": "2023-11-01T17:45:00.000Z",
    "comments": [
      {
        "postID": 2,
        "userName": "deepti01",
        "dateTime": "2023-11-01T18:45:00.000Z",
        "comment": "That's interesting."
      },
      {
        "postID": 1,
        "userName": "admin",
        "dateTime": "2023-11-01T18:46:00.000Z",
        "comment": "That's cool."
      }
    ]
  },
  {
    "postID": 3,
    "userName": "admin",
    "channel": "Project",
    "post": "lorium lorium iosum lortium take lortium kit test iosum lortium iosum lortium iosum lorium lorium iosum lorium iosumlortium iosumlortium iosumlortium iosumlortium!",
    "postDetails": "tium iosum lorium lorium iosum lorium iosumlortium iosumlortium iosumlortium iosumlortium! lorium lorium iosumlortium iosumlortium iosumlortium iosum lortium iosum lortium iosum lorium lorium iosum lorium iosumlortium iosumlortium iosumlortium iosumlortium!. lorium lorium iosumlortium iosumlortium iosumlortium iosum lortium iosum lortium iosum lorium lorium iosum lorium iosumlortium iosumlortium iosumlortium iosumlortium! lorium lorium iosumlortium iosumlortium iosumlortium iosum lortium iosum lortium iosum lorium lorium iosum lorium iosumlortium iosumlortium iosumlortium iosumlortium! lorium lorium iosumlortium iosumlortium iosumlortium iosum lortium iosum lortium iosum lorium lorium iosum lorium iosumlortium iosumlortium iosumlortium iosumlortium! lorium lorium iosumlortium iosumlortium iosumlortium iosum lortium iosum lortium iosum lorium lorium iosum lorium iosumlortium. iosumlortium iosumlortium iosumlortium! lorium lorium iosumlortium iosumlortium iosumlortium iosum lortium iosum lortium iosum lorium lorium iosum lorium iosumlortium iosumlortium iosumlortium iosumlortium! lorium lorium iosumlortium iosumlortium iosumlortium iosum lortium iosum lortium iosum lorium lorium iosum lorium iosumlortium iosumlortium iosumlortium iosumlortium! lorium lorium iosumlortium iosumlortium iosumlortium iosum lortium iosum lortium iosum lorium lorium iosum lorium iosumlortium iosumlortium iosumlortium iosumlortium! lorium lorium iosumlortium.",
    "dateTime": "2023-11-01T18:45:00.000Z",
    "comments": [
      {
        "postID": 3,
        "userName": "deepti01",
        "dateTime": "2023-11-01T19:45:00.000Z",
        "comment": "Keep it up."
      },
      {
        "postID": 3,
        "userName": "apoorva01",
        "dateTime": "2023-11-01T20:45:00.000Z",
        "comment": "Sounds great!"
      }
    ]
  },
  {
    "postID": 4,
    "userName": "deepti01",
    "channel": "Project",
    "post": "lorium lorium iosum lortium take lortium kit test iosum lortium iosum lortium iosum lorium lorium iosum lorium iosumlortium iosumlortium iosumlortium iosumlortium!",
    "postDetails": "tium iosum lorium lorium iosum lorium iosumlortium iosumlortium iosumlortium iosumlortium! lorium lorium iosumlortium iosumlortium iosumlortium iosum lortium iosum lortium iosum lorium lorium iosum lorium iosumlortium iosumlortium iosumlortium iosumlortium!. lorium lorium iosumlortium iosumlortium iosumlortium iosum lortium iosum lortium iosum lorium lorium iosum lorium iosumlortium iosumlortium iosumlortium iosumlortium! lorium lorium iosumlortium iosumlortium iosumlortium iosum lortium iosum lortium iosum lorium lorium iosum lorium iosumlortium iosumlortium iosumlortium iosumlortium! lorium lorium iosumlortium iosumlortium iosumlortium iosum lortium iosum lortium iosum lorium lorium iosum lorium iosumlortium iosumlortium iosumlortium iosumlortium! lorium lorium iosumlortium iosumlortium iosumlortium iosum lortium iosum lortium iosum lorium lorium iosum lorium iosumlortium. iosumlortium iosumlortium iosumlortium! lorium lorium iosumlortium iosumlortium iosumlortium iosum lortium iosum lortium iosum lorium lorium iosum lorium iosumlortium iosumlortium iosumlortium iosumlortium! lorium lorium iosumlortium iosumlortium iosumlortium iosum lortium iosum lortium iosum lorium lorium iosum lorium iosumlortium iosumlortium iosumlortium iosumlortium! lorium lorium iosumlortium iosumlortium iosumlortium iosum lortium iosum lortium iosum lorium lorium iosum lorium iosumlortium iosumlortium iosumlortium iosumlortium! lorium lorium iosumlortium.",
    "dateTime": "2023-11-01T19:45:00.000Z",
    "comments": [
      {
        "postID": 5,
        "userName": "sajan01",
        "dateTime": "2023-11-01T21:45:00.000Z",
        "comment": "I agree with you."
      },
      {
        "postID": 5,
        "userName": "apoorva01",
        "dateTime": "2023-11-01T22:45:00.000Z",
        "comment": "Thanks for sharing."
      },
      {
        "postID": 5,
        "userName": "nirbhay01",
        "dateTime": "2023-11-01T22:46:00.000Z",
        "comment": "Thanks for sharing."
      }
    ]
  }
];

const filterOptions = [
  { label: 'My topics', filter: 'My topics' },
  { label: 'Team Updates', filter: 'Team Updates' },
  { label: 'All updates', filter: 'All' }
];

const Feed: React.FC<HeaderProps> = ({user}) => {
  let [userNew, setUserNew] = useState(user);

  const [filter, setFilter] = useState<string>('All');
  const navigate = useNavigate();

  const filteredFeed = FeedData.filter((post) => {
    if (filter === 'My topics') {
      let name = 'admin';
      if(userNew && userNew.username) {
        name = userNew.username;
      }
      return post.userName === name;
    } else if (filter === 'Team Updates') {
      return post.channel === 'Project';
    }
    return true; // 'All updates'
  });

  const handleReadMoreClick = (postID: number) => {
    const selectedPost = FeedData.filter((post) => post.postID === postID) ;
    let selectedPostItem =  selectedPost[0];
    console.log(userNew, "selectedPostItem", selectedPostItem);
    if(selectedPost && selectedPost.length ) {
      navigate('/feedinfo', { state: { selectedPostItem, userNew } });
    }
  };


  return (
    <div className="col-span-2 bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">CORPORATE FEED</h2>
      <input
        type="text"
        placeholder="Post something..."
        className="w-full mb-4 px-4 py-2 border rounded"
      />
      <div className="flex justify-between text-gray-500 mb-4">
        {filterOptions.map((option) => (
          <a
            key={option.filter}
            href="#"
            className={filter === option.filter ? 'text-red-700' : ''}
            onClick={() => setFilter(option.filter)}
          >
            {option.label}
          </a>
        ))}
      </div>
      <ul>
        {filteredFeed.map((post) => (
          <li key={'post'+post.postID} className="space-y-4 mt-2">
            <div className="flex items-start">
              <img
                src="https://placehold.co/40x40"
                alt="User Image"
                className="w-10 h-10 mr-4 rounded-full border-4 border-red-700"
              />
              <div className="pr-4">
                <p className="text-sm text-justify">{post.post}</p>
                <div className="flex text-xs text-gray-500 mt-1">
                  <i className="far fa-comment mr-2"></i>
                  <span>{post.comments.length}</span>
                </div>
              </div>
              <ReadMore 
                onClick={() => handleReadMoreClick(post.postID)} 
                className="text-xs text-gray-500">
              <span>Read More</span></ReadMore>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ReadMore = styled.button`
  color: #1da4ff;
  opacity: initial;
  font-weight: 600;

  &:hover {
    color: rgb(185 ,28 ,28 );
  }
  
  @media (min-width: 577px) {
    
  }
`;


export default Feed;
