import './App.css';
import 'antd/dist/antd.css';
import {useRoutes} from "react-router-dom";
import IndexRouter from "./routes/IndexRouter";

function App() {
    // const element = useRoutes(IndexRouter);
    return (
        <div className="App">
            {/*<div>{element}</div>*/}
            <IndexRouter/>
        </div>
    );
}

export default App;
