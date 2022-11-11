import { useEffect, useState } from 'react';
import './App.css';
import WorldPage from './WorldPage';

function App() {
  const [users, setUsers] = useState(null)
  const [posts, setPosts] = useState(null)
  const [comments, setComments] = useState(null)

  useEffect(()=> {
    fetch("/users")
    .then((r) => {
      if (r.ok) {
        r.json().then((users) => {
          setUsers(users)
          console.log('Got Users:', users)
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
          console.log('Got Posts:', posts)
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
          console.log('Got Comments:', comments)
        });
      }
    });
  }, []);

  return (
    <div className="App">
      <WorldPage />
    </div>
  );
}

export default App;
