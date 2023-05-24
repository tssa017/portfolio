import '../../index.scss';

function List({ className, children }) {
    return <ul className={className}>{children}</ul>;
}

export default List;
