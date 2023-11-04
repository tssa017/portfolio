function Button({ children, className, onClick, type, id }) {
    return (
        <button className={className} onClick={onClick} type={type} id={id}>
            {children}
        </button>
    );
}

export default Button;
