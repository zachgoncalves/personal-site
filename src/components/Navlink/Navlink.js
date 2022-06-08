
const Navlink = props => {
    return (
        <li className="navItem">
            <a className="nav-link" href={props.href} aria-label={props.label}>
                { props.children }
            </a> 
        </li>
    );
};

export default Navlink;