import { useState } from "react";

export default function FormSelect({ options, value, onChange }) {
    const [ isOpen, setIsOpen ] = useState(false);
    const [ seleted, setSelected ] = useState(value);

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);
    
    const select = (option) => {
        onChange(option);
        setSelected(option);
        close();
    }

    return (
        <div className="select">
            <button 
                className="select__toggle"
                onClick={() => isOpen ? close() : open()}
            >
                {seleted.label}
            </button>
            <div className={`select__options ${ isOpen ? '--open' : '' }`}>
                {options.map((o, index) =>
                    seleted.value == o.value ?
                    <button 
                        key={index} 
                        className="select__option --active"
                        disabled
                    >
                        {o.label}
                    </button>
                    :
                    <button 
                        key={index} 
                        className="select__option"
                        onClick={() => select(o)}
                    >
                        {o.label}
                    </button>
                )}
            </div>
        </div>
    );
}