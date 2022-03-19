export default function AppModal({ children, onClose }) {
    return (
        <div className="modal-wrapper" onClick={onClose}>
            <div className="modal" onClick={e => e.stopPropagation()}>
                <>
                    <button 
                        className="modal__close-button" 
                        onClick={onClose}
                        />
                    {children}
                </>
            </div>
        </div>
    );
}