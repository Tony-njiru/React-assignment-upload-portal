import {useState} from "react";
import Nav from "./Nav";
import App from "./App.js";
function Dashboard() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState('');
    return (
        <>
            <Nav />
            <div className="dashboard">
                <form method="post" className="uploadform">
                    <h2 className="title">Upload Form</h2>
                    <label>File Title:</label>
                    <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
                    <label>Description:</label>
                    <textarea required value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    <label>Upload</label>
                    <input type="file" required value={file} onChange={(e) => setFile(e.target.value)} />
                    <button className="uploadfile">Upload File</button>
                </form>
            </div>
        </>
    );
}

export default Dashboard