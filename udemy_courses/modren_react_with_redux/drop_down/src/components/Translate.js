import { useState } from "react";
import Dropdown from "./Dropdown"

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    }
]

const Translate = (props) => {
    const [language, setLanguage] = useState(options[0]);
    const [text,setText] = useState();


    return (
        <div>
            <div className="ui form" style={{marginTop:'20px',marginBottom:'10px'}}>
                <div className="field">
                    <label className="label">Enter Text</label>
                <input value={text} onChange={e => setText(e.target.value)}  />

                </div>
            </div>
            <Dropdown options={options} selected={language} onSelectedChange={setLanguage} label="Select a Language"/>
        </div>
    )
}

export default Translate;