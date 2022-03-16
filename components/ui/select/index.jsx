import { useEffect, useState } from "react";

export default function FormSelect({ options, value, onChange }) {
    const [ isOpen, setIsOpen ] = useState(false);
    const [ seleted, setSelected ] = useState(value);

    useEffect(() => { setSelected(value); }, [ value ]);
    
    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);
    
    const select = (option) => {
        onChange(option);
        setSelected(option);
        close();
    }

    useEffect(() => {
        const preventCallback = (e) => e.preventDefault();
        const closeCallback = (e) => {
            if (e.defaultPrevented) return;
            close()
        };
        
        const selectEls = window.document.querySelectorAll('[data-form-select]');
        for (const selectEl of selectEls) selectEl.addEventListener('click', preventCallback);

        window.document.addEventListener('click', closeCallback);

        return () => {
            for (const selectEl of selectEls) selectEl.removeEventListener('click', preventCallback);
            window.document.removeEventListener('click', closeCallback);
        }
    }, []);

    return (
        <div className="select" data-form-select>
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