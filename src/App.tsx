import React, { useEffect, useState, useCallback } from "react";
import logo from "./logo.svg";
import "./App.css";
import { db } from "./lib/firebase-app";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                    <Chat />
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

function Chat() {
    const [posts, setPosts] = useState([]);

    const addCallback = useCallback(() => {
      db.collection("posts").add({
        name: 'Ajtem',
        content: `Data ${new Date().toISOString()} stworzono`
      })
      .then(docRef => console.log("Document written with ID: ", docRef.id))
    }, []);

    useEffect(() => {
        db.collection("posts")
            .get()
            .then((snapshot) => {
              snapshot.
            });
    }, []);

    return (
        <div>
            <h1 onClick={addCallback}>ADD NEW</h1>
            {(posts || []).map((post) => {
                return (
                    <div>
                        <span>{post.name}</span>
                        <span>{post.content}</span>
                    </div>
                );
            })}
        </div>
    );
}

export default App;
