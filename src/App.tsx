import './App.css';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './config/firebase';
import { Auth } from './components/auth';

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <h1>Yo</h1>,
  //   },
  //   {
  //     path: "/login",
  //     element: <h1>Login Page</h1>,
  //   },
  // ]);
  // Loading Component when App Mounts till firebase returns it's
  // onAuthStateChanged promise

  useEffect(() => {
    async function getTodoList() {
      const todoListRef = collection(db, 'todos');
      // Get the data
      const res = await getDocs(todoListRef);
      const todoList = res.docs.map((doc) => doc.data());
      console.log(todoList);
      // Display the data
    }

    // getTodoList()
  }, []);

  return (
    <div className="App">
      <h1>Yo Wha't up</h1>
      <Auth />
    </div>
  );
}

export default App;
