import './Portfolio.css'

const Portfolio = () => {
    return (
        <section className="portfolio">
            <h2>My Projects</h2>
            <div className="portfolio-categories">
                <ul role="list">
                    <li>
                        <a href="">JavaScript</a>
                    </li>
                    <li>
                        <a href="#">REACT</a>
                    </li>
                    <li>
                        <a href="#">NodeJS</a>
                    </li>
                    <li>
                        <a href="#">PHP</a>
                    </li>
                    <li>
                        <a href="#">HTML/CSS</a>
                    </li>
                    <li>
                        <a href="#">WordPress</a>
                    </li>
                </ul>
            </div>
            <div className="portfolio-gallery">
                <ul role="list">
                    <li>
                        <a
                            href="https://pet-sinst-mern-project.onrender.com/"
                            target="_blank"
                            content="noindex, follow"
                        >
                            <img src="./img/PetsInst.png" alt=""/>
                        </a>
                        <a href="https://gitlab.com/baleva1990/PetsInst" target="_blank" className="github-repo">GitLab
                            Repo Pet'sInst</a>
                    </li>
                    <li>
                        <a
                            href="https://cocktails.baleva-galina.eu/"
                            target="_blank"
                            content="noindex, follow"
                        >
                            <img src="./img/Mojito.png" alt=""/>
                        </a>
                        <a href="https://github.com/GalinaBaleva/mojito-gsap" target="_blank" className="github-repo">GitLab
                            Repo Mojito GSAP</a>
                    </li>
                    <li>
                        <a
                            href="https://newsletter-register.onrender.com"
                            target="_blank"
                            content="noindex, follow"
                        >
                            <img src="./img/233132.png" alt="mailer"/>
                        </a>
                        <a
                            href="https://github.com/GalinaBaleva/newsletter-register"
                            target="_blank"
                            className="github-repo"
                        >
                            GitHub Repo
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://fahrenheit-rechner.onrender.com/"
                            target="_blank"
                            content="noindex, follow"
                        >
                            <img src="img/150404.png" alt="mailer"/>
                        </a>
                        <a
                            href="https://github.com/GalinaBaleva/fahrenheit-rechner"
                            target="_blank"
                            className="github-repo"
                        >
                            GitHub Repo
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://car-upload.onrender.com/"
                            target="_blank"
                            content="noindex, follow"
                        >
                            <img src="img/230214.png" alt="mailer"/>
                        </a>
                        <a
                            href="https://github.com/GalinaBaleva/car-upload"
                            target="_blank"
                            className="github-repo"
                        >
                            GitHub Repo
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://file-uploader-429r.onrender.com/"
                            target="_blank"
                            content="noindex, follow"
                        >
                            <img src="img/drag_and_drop_uploader.png" alt="mailer"/>
                        </a>
                        <a
                            href="https://github.com/GalinaBaleva/file-uploader"
                            target="_blank"
                            className="github-repo"
                        >
                            GitHub Repo
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://tik-tac-toe.baleva-galina.eu/"
                            target="_blank"
                            content="noindex, follow"
                        >
                            <img src="./img/164426.png" alt="tik-tac-toe-game"/>
                        </a>
                        <a
                            href="https://github.com/GalinaBaleva/React-SoftUni/tree/main/tik-tac-toe"
                            target="_blank"
                            className="github-repo"
                        >
                            GitHub Repo
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://nlv-test.baleva-galina.eu/"
                            target="_blank"
                            content="noindex, follow"
                        >
                            <img src="./img/222842.png" alt=""/>
                        </a>
                        {/* <a href="" class="github-repo">GitHub Repo</a> */}
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Portfolio;