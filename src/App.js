import './App.css';
import {useRoutes} from "react-router-dom";
import {IndexRouter} from "./routes/IndexRouter";

function App() {
    const element = useRoutes(IndexRouter);
    return (
        <div className="App">
            <div>{element}</div>
        </div>
    );
}

export default App;
