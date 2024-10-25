import React, { useState } from "react";
import Detail from "./Components/Detail";
import Question from "./Components/Question";
import Review from "./Components/Review";

const ContentsContainer = ({ listName }) => {
    if (listName === "detail") {
        return <Detail />;
    } else if (listName === "qa") {
        return <Question />;
    } else if (listName === "review") {
        return <Review />;
    }

    return listName === "detail" ? <Detail /> : listName === "qa" ? <Question /> : listName === "review" ? <Review /> : null;


};

function NavBar() {
    const [listName, setListName] = useState("detail");
    const checkId = (e) => {
        setListName(e.target.id);
    };

    return (
        <>
            <nav>
                <ul>
                    <li
                        id="detail"
                        style={
                            listName === "detail" ? { color: "red" } : { color: "black" }
                        }
                        onClick={checkId}
                    >
                        상세정보
                    </li>
                    <li
                        id="qa"
                        onClick={checkId}
                        style={listName === "qa" ? { color: "red" } : { color: "black" }}
                    >
                        Q&A
                    </li>
                    <li
                        id="review"
                        onClick={checkId}
                        style={
                            listName === "review" ? { color: "red" } : { color: "black" }
                        }
                    >
                        Review
                    </li>
                </ul>
            </nav>
            <ContentsContainer listName={listName} />
        </>
    );
}

export default NavBar;