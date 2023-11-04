function Button({ children, className, onClick, onSubmit, type, id }) {
    return (
        <button
            className={className}
            onClick={onClick}
            onSubmit={onSubmit}
            type={type}
            id={id}
        >
            {children}
        </button>
    );
}

export default Button;
