import styles from './Experience.module.scss'

const Experience = props => {
    return (        
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <h2>{props.job_title}</h2>
                    <p>{props.company} / {props.job_location} / {props.job_length}</p>
                </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <ul className={styles.experience_list}>
                        <li>Design and implement data migration strategy and code for client adoption of a new product. Lead several junior developers on implementation across several services and two teams.</li>
                        <li>Orchestrate Postgres 10.x database migration to Postgres 13.x on Aurora RDS. Validated application performance and stability, executed dry runs, created a run book, and successfully deployed.</li>
                        <li>Deploy a new environment for testing monthly data updates in conjunction with our Research Data team, creating a flow that supported them in their validations prior to release of data updates to production. </li>
                        <li>Decouple core product’s build process from calls to production services, substituting for mocks and contract driven testing, creating a GitHub Actions workflow, and extending a test framework (pyTest). </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Experience; 