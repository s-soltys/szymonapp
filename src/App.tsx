import React, { useEffect, useState, useCallback } from "react";
import logo from "./logo.svg";
import "./App.css";
import { db } from "./lib/firebase-app";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Chat />
            </header>
        </div>
    );
}

function Chat() {
    const [newItem, setNewItem] = useState("");
    const [posts, setPosts] = useState([] as any[]);

    function loadItems() {
        db.collection("posts")
            .get()
            .then((snapshot) => {
                const dataToSet = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    name: doc.get("name"),
                    content: doc.get("content")
                }));
                setPosts(dataToSet);
            });
    }

    const addCallback = useCallback(() => {
        db.collection("posts")
            .add({
                name: newItem,
                content: new Date().toISOString(),
            })
            .then((docRef) => {
                setNewItem("");
                loadItems();
            });
    }, [newItem]);

    useEffect(loadItems, []);

    return (
        <div>
            <div>
                <input
                    type="text"
                    value={newItem}
                    onChange={(event) => {
                        const value = event.target.value;
                        setNewItem(value);
                    }}
                />
                <button type="button" onClick={addCallback}>ADD</button>
            </div>
            {(posts || []).map((post) => {
                return (
                    <div>
                        <span>{post.name}</span> / 
                        <small>{post.id}</small> / 
                        <small>{post.content}</small>
                    </div>
                );
            })}
        </div>
    );
}

export default App;
