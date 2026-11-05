import { useState } from 'react';
import "../style/minigame1.css"

function MiniGame (){
    const [answer, setAnswer] = useState("");
    const response = [
                        'It is certain',
                        'Without a doubt',
                        'Most likely',
                        'YES!',
                        'Too tired try again',
                        'Ask again later',
                        'Seyma says NO',
                        'No',
                        'Very doubtful',
                        'In shaa Allah'
                        ];

    function magicTime(){
        const num = Math.floor(Math.random() * (10 - 1 + 1));
        setAnswer(response[num]);
    }

        return (
            <div className="d-flex flex-column align-items-center text-center">
                <div className="mb-3" style={{ fontSize: "1.75rem" }}>
                    ask your question to my magic 8 ball
                </div>
                <div>
                    <img
                        src={require('../img/ball.png')}
                        onClick={() => magicTime()}
                        alt="magic 8 ball"
                        style={{ width: "65%", maxWidth: "380px", cursor: "pointer" }}
                    />
                </div>
                <div className="mt-3" style={{ fontSize: "1.5rem" }}>
                    {answer}
                </div>
            </div>
        );
    }

export default MiniGame;