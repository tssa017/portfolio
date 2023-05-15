import '../../index.scss';

function Paragraph({ className, children }) {
    return <p className={className}>{children}</p>;
}

export default Paragraph;
