import "./sideBar.module.css";
import {categoryActions} from "../../../store";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

const SideBar = () => {
    const dispatch = useDispatch();
    const [categoriesData, setCategoriesData] = useState([]);

    useEffect(
        () => {
            const fetchData = async () => {
                const fetchCategories = await fetch("http://wp-react-blog.test/wp-json/wp/v2/categories", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                const fetchCategoriesJson = await fetchCategories.json();
                setCategoriesData(fetchCategoriesJson);
            }
            fetchData();
        }, [setCategoriesData]
    );

    const categoryChangeHandler = (e) => {
        let categoryId = e.target.id;
        dispatch(categoryActions.setCategory({category: categoryId}));
    }

    return (
        <aside>
            <ul>
                {categoriesData.map((category) => {
                    return (
                        <li key={category.id}>
                            <a href="javascript:" onClick={categoryChangeHandler} id={category.id}>
                                {category.name}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </aside>
    );
}

export default SideBar;