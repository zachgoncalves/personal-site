import styles from './TechnicalSkills.module.scss'

const TechnicalSkills = props => {
    return (
        <section className={styles.technical_skill_section}>
            <h3>I have experience in...</h3>
            <ul className={styles.technical_skills_list}>
                <li><span>Microservices Development using</span>
                    <ul>
                        <li>Java</li>
                        <li>Spring Boot</li>
                        <li>OpenAPI</li>
                        <li>PostgreSQL</li>
                    </ul>
                </li>
                <li><span>Building and deploying code with</span>
                    <ul>
                        <li>Gradle</li>
                        <li>Maven</li>
                        <li>Jenkins</li>
                        <li>Github Actions</li>
                    </ul>
                </li>
                <li><span>Managing infrastructure with</span>
                    <ul>
                        <li>Terraform</li>
                        <li>Terragrunt</li>
                    </ul>
                </li>
                <li><span>Deploying on</span>
                    <ul>
                        <li>AWS</li>
                    </ul>
                </li>
                <li><span>I also have worked with</span>
                    <ul>
                        <li>C# / ASP.NET</li>
                        <li>JavaScript / React and Vue</li>
                    </ul>
                </li>
            </ul>
        </section>
    );
};

export default TechnicalSkills;