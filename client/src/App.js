import { useEffect, useState } from 'react';
import './App.css';
import UserPage from './UserPage';
import WorldPage from './WorldPage';
import FriendPage from './FriendPage';

function App() {
  const [currUser, setCurrUser] = useState({id: 1, username: 'hearLouis', first_name: 'Louis', last_name: 'Garcia', email: 'louis.garcia@aol.com'})
  const [users, setUsers] = useState(null)
  const [posts, setPosts] = useState(null)
  const [comments, setComments] = useState(null)

  useEffect(()=> {
    fetch("/users")
    .then((r) => {
      if (r.ok) {
        r.json().then((users) => {
          setUsers(users)
        });
      }
    });
  }, []);
  useEffect(()=> {
    fetch("/posts")
    .then((r) => {
      if (r.ok) {
        r.json().then((posts) => {
          setPosts(posts)
        });
      }
    });
  }, []);
  useEffect(()=> {
    fetch("/comments")
    .then((r) => {
      if (r.ok) {
        r.json().then((comments) => {
          setComments(comments)
        });
      }
    });
  }, []);

  return (
    <div className="App">
      {/* <UserPage currUser={currUser}/> */}
      <WorldPage currUser={currUser} posts={posts} comments={comments}/>
      {/* <FriendPage users={users} /> */}
    </div>
  );
}

export default App;
