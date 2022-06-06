import styles from './Jumbotron.module.scss';

const Jumbotron = props => {
    return (
        <div className={styles.jumbotron}>
            <h2>{props.tagline}</h2>
        </div>
    );
}

export default Jumbotron;