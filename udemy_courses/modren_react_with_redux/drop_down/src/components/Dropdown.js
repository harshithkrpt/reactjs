import { useState, useEffect, useRef } from "react"

const Dropdown = ({ onSelectedChange, options, selected ,label}) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef();

    const printMe = options.filter((option) => option.label !== selected.label).map(option => {
        return (
            <div key={option.value} className="item"
                onClick={() => onSelectedChange(option)}
            >
                {option.label}
            </div>
        )
    })

    useEffect(() => {

        const onBodyClick = (e) => {
            if (ref.current.contains(e.target)) return;
                setIsOpen(false)

        }

        document.body.addEventListener('click',onBodyClick );

        return () => {
            document.body.removeEventListener('click',onBodyClick)
        }
    }, []);


    return (<div ref={ref} className="ui form">
        <div className="field">
            <label className="label">{label}</label>
            <div onClick={() => setIsOpen(!isOpen)} className={`ui selection dropdown ${isOpen && `visible active`}`}>
                <i className="dropdown icon"></i>
                <div className="text">{selected.label}</div>
                <div className={`menu ${isOpen && `visible`} transition`}>{printMe}</div>
            </div>
        </div>
    </div>)
}

export default Dropdown; 