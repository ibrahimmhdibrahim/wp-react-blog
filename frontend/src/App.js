import './App.css';
import Layout from "./components/layouts/layout";
import Posts from "./components/posts/Posts";
import SideBar from "./components/layouts/sideBar/sideBar";
import {useState} from "react";

function App() {

    const [category, setCategory] = useState();

    return (
        <Layout>
            <SideBar category={category} onChangeCategory={setCategory} />
            <Posts category={category} />
        </Layout>
    );
}

export default App;
