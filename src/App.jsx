import { useState } from "react";
import "./App.scss";
import axios from "axios";

function App() {
    const [data, setData] = useState();
    const [number, setNumber] = useState("");

    async function getData() {
        const response = await axios.get("/readFile");
        setData(response.data.num);
    }
    async function setNewData() {
        axios({
            method: "post",
            url: "/writeFile",
            data: { num: number },
        });
    }

    console.log(data);

    return (
        <div className="App">
            <h2>{data}</h2>
            <div>
                <input
                    type="text"
                    name=""
                    id=""
                    onChange={(e) => setNumber(e.target.value)}
                    value={number}
                />
                <button className="btn" onClick={getData}>
                    GetData
                </button>
                <button className="btn" onClick={setNewData}>
                    SetNewData
                </button>
            </div>
        </div>
    );
}

export default App;
