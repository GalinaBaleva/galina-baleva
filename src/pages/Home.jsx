import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <>
            <section className="hero">
                <div className="hero-wrapper">
                    <h1>
                        <strong>Full Stack Developer / SEO Specialist</strong> Galina Baleva
                    </h1>
                </div>
                <div className="img-wripper"></div>
            </section>
            <div className="sections-wrapper">
                <section className="skills">
                    <h2>Skills</h2>
                    <div className="skills-wrapper">
                        <ul role="list">
                            <li>
                                <i className="fa-brands fa-node-js" />
                            </li>
                            <li>
                                <i className="fa-brands fa-react" />
                            </li>
                            <li>
                                <i className="fa-brands fa-html5" />
                            </li>
                            <li>
                                <i className="fa-brands fa-css3-alt" />
                            </li>
                            <li>
                                <i className="fa-brands fa-node" />
                            </li>
                            <li>
                                <i className="fa-brands fa-php" />
                            </li>
                            <li>
                                <i className="fa-brands fa-wordpress-simple" />
                            </li>
                            <li>
                                <i className="fa-brands fa-git-alt" />
                            </li>
                            <li className="seo">
                                <i className="fa-solid fa-magnifying-glass" />
                                <strong>SEO</strong>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="about">
                    <h2>About me</h2>
                    <div className="about-wrapper">
                        <div className="education">
                            <h3>Education</h3>
                            <div className="education-time">
                                <div className="date">2025</div>
                                <h4 className="uni">WIFI Vienna</h4>
                                <p className="description">Full Stack JavaScript Developer (MERN)</p>
                            </div>
                            <div className="education-time">
                                <div className="date">2024</div>
                                <h4 className="uni">Self Education - Codecademy</h4>
                                <p className="description">PHP Developer</p>
                            </div>
                            <div className="education-time">
                                <div className="date">2021 - 2023</div>
                                <h4 className="uni">SoftUni</h4>
                                <p className="description">FronEnd Developer</p>
                            </div>
                            <div className="education-time">
                                <div className="date">2010 - 2014</div>
                                <h4 className="uni">The Academy of Music, Dance and Fine Arts"</h4>
                                <p className="description">Bachelors</p>
                            </div>
                        </div>
                        <div className="experiences">
                            <h3>Experiences</h3>
                            <div className="experiences-time">
                                <div className="date">2017-2025</div>
                                <h4 className="employer">General Laser Toshev and Toshev</h4>
                                <p className="description" />
                            </div>
                            <div className="experiences-time">
                                <div className="date">2016 - 2017</div>
                                <h4 className="employer">Head of SEO at EnterMd</h4>
                                <p className="description">Leading an Online Marketing team</p>
                            </div>
                            <div className="experiences-time">
                                <div className="date">2015 - 2016</div>
                                <h4 className="employer">Creativity Design Studio</h4>
                                <p className="description">SEO Marketing Manager</p>
                            </div>
                            <div className="experiences-time">
                                <div className="date">2014 - 2015</div>
                                <h4 className="employer">Netpeak</h4>
                                <p className="description">Junior SEO, Copywriter, Linkbuilder</p>
                            </div>
                        </div>
                        <div className="interests">
                            <h3>Interests</h3>
                            <div className="interests-kind">
                                <h4 className="">Ashtanga yoga</h4>
                                <p className="description">
                                    I love starting my day with yoga exercises.
                                </p>
                            </div>
                            <div className="interests-kind">
                                <h4 className="">Singing</h4>
                                <p className="description">A professional skill became a hobby.</p>
                            </div>
                            <div className="interests-kind">
                                <h4 className="">Cycling</h4>
                                <p className="description">It just makes me feel good.</p>
                            </div>
                        </div>
                    </div>
                    <p className="description-about">
                        I am curious and love to learn. I worked as an SEO specialist for over
                        three years. I enjoyed optimizing websites and improving online
                        visibility. Over time, I became interested in the code behind the
                        websites. Now, I am learning to write clean, SEO-friendly code. My goal
                        is to combine coding skills with SEO expertise.
                    </p>
                </section>
                <section className="portfolio home-portfolio">
                    <h2>My Projects</h2>
                    <div className="portfolio-categories home-portfolio-categories"></div>
                    <ul role='list'>
                        <li>
                            <a
                                href="https://pet-sinst-mern-project.onrender.com/"
                                target="_blank"
                                content="noindex, follow"
                            >
                                <img src="./img/PetsInst.png" alt="" />
                            </a>
                            <a href="https://gitlab.com/baleva1990/PetsInst" target="_blank" class="github-repo">GitLab Repo Pet'sInst</a>
                        </li>
                    </ul>
                     <Link to="/portfolio" className="link-to-projects">ALL PROJECTS</Link>
                </section>
            </div>
        </>
    )
}

export default Home;