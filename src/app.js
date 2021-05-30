import React from "react";
import './app.css';
import {quotes} from "./quotesDB";

export class App extends React.Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h2>
                        Hello! Welcome to Motivay-Gen. where we generate motivational
                        quotes to push you in a positive direction!
                    </h2>

                    <div style={{
                        "display": "flex",
                        "flexDirection": "row"
                    }}>
                        <button
                            style={{
                                "height": "25px",
                                "marginLeft": "8px",
                                "marginTop": "68px",
                                "width": "100px"
                            }}
                            onClick={() => onGenerateQuote()}
                        >
                            Motivate me!
                        </button>
                    </div>
                    <p id={'quote'}>{}</p>
                </header>

            </div>
        );
    }
}

function randomNumber(min, max){
    const r = Math.random()*(max-min) + min
    return Math.floor(r)
}

const onGenerateQuote = () => {
    let quote = document.getElementById('quote');
    const generate = randomNumber(0, quotes.length);
    quote.innerText = quotes[generate];
}
