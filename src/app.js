// Composant Timeline
function TimelineItem({ title, date, description, index }) {
    return (
        <div className="timeline-item" data-aos="fade-right" data-aos-delay={index * 100}>
            <h3>{title}</h3>
            <span className="date"><i className="far fa-calendar-alt"></i> {date}</span>
            <p>{description}</p>
        </div>
    );
}

// Composant principal App
function App() {
    const projects = [
        { title: "Site E-commerce Premium", description: "Plateforme e-commerce complète avec panier d'achat, paiement et dashboard admin", technologies: "React, Node.js, MongoDB", link: "#" },
        { title: "Application Météo Pro", description: "Application météo en temps réel avec prévisions 7 jours et cartes interactives", technologies: "React, API OpenWeather, Chart.js", link: "#" },
        { title: "Portfolio 3D", description: "Site portfolio avec animations 3D et expérience immersive", technologies: "Three.js, React, Framer Motion", link: "#" }
    ];

    const skills = [
        { name: "HTML5/CSS3", level: 90, delay: 100 },
        { name: "JavaScript (ES6+)", level: 85, delay: 200 },
        { name: "React.js", level: 80, delay: 300 },
        { name: "Python", level: 70, delay: 400 },
        { name: "Node.js", level: 75, delay: 500 },
        { name: "UI/UX Design", level: 75, delay: 600 }
    ];

    const formations = [
        { title: "Licence en Sciences informatiques", date: "2024 - 2026", description: "Faculté des Sciences Semlalia - Marrakech | en cours" },
        { title: "Baccalauréat Sciences Physiques", date: "2023", description: "Lycée Abdelkrime Elkhattabi - Elkalaa des Sraghna | Mention Assez bien" }
    ];

    React.useEffect(() => {
        if (window.AOS) {
            window.AOS.init({ duration: 1000, once: true, offset: 100 });
        }
        setTimeout(() => {
            const loading = document.querySelector('.loading');
            if (loading) loading.classList.add('hide');
        }, 1000);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const msgDiv = document.getElementById('formMessage');
        
        if (!name || !email || !message) {
            msgDiv.innerHTML = '⚠️ Tous les champs sont obligatoires.';
            msgDiv.style.color = 'red';
            msgDiv.style.animation = 'shake 0.5s ease';
            setTimeout(() => msgDiv.style.animation = '', 500);
        } else if (!email.includes('@')) {
            msgDiv.innerHTML = '⚠️ Email invalide.';
            msgDiv.style.color = 'red';
        } else {
            msgDiv.innerHTML = '✅ Message envoyé avec succès! Je vous répondrai rapidement.';
            msgDiv.style.color = 'green';
            document.getElementById('contactForm').reset();
            setTimeout(() => msgDiv.innerHTML = '', 3000);
        }
    };

    return (
        <div className="cv-container">
            <header>
                <img src="assets/images/profil.jpg" className="profile-img" alt="Profile" 
                     onError={(e) => e.target.src = 'https://via.placeholder.com/160x160/667eea/white?text=AM'} />
                <h1 data-aos="fade-down">Ahmed Manssouri</h1>
                <p className="title" data-aos="fade-up">Étudiant en Sciences Informatiques - L2</p>
                <div className="contact-info" data-aos="zoom-in">
                    <a href="mailto:a.manssouri3735@uca.ac.ma?body=Bonjour%20Ahmed,%0D%0A%0D%0AJe%20vous%20contacte%20depuis%20votre%20CV."><i className="fas fa-envelope"></i> a.manssouri3735@uca.ac.ma</a>
                    <a href="https://github.com/amanssouri3735-cpu"><i className="fab fa-github"></i> amanssouri3735-cpu</a>
                    <a href="https://www.linkedin.com/in/ahmed-manssouri-68b861407"><i className="fab fa-linkedin"></i> AHMED MANSSOURI</a>
                </div>
            </header>

            <section className="about">
                <h2><i className="fas fa-user-astronaut"></i> À propos</h2>
                <p data-aos="fade-up">
                    Animé par une véritable passion pour l'ingénierie web et les technologies émergentes,
                    je poursuis actuellement une Licence 2 en Sciences Informatiques. 
                    Mon ambition est de concevoir des applications à la fois innovantes, 
                    robustes et centrées sur l’expérience utilisateur. 
                    Naturellement curieux et animé par une soif d’apprentissage autodidacte,
                    je me forme en continu aux solutions technologiques les plus récentes afin de rester constamment à l’avant-garde de ce domaine en perpétuelle évolution.
                </p>
            </section>

            <section className="skills">
                <h2><i className="fas fa-chart-line"></i> Compétences techniques</h2>
                {skills.map((skill, i) => (
                    <SkillBar key={i} name={skill.name} level={skill.level} delay={skill.delay} />
                ))}
            </section>

            <section className="education">
                <h2><i className="fas fa-graduation-cap"></i> Formation & Parcours</h2>
                {formations.map((f, i) => (
                    <TimelineItem key={i} title={f.title} date={f.date} description={f.description} index={i} />
                ))}
            </section>

            <section className="projects">
                <h2><i className="fas fa-rocket"></i> Projets réalisés</h2>
                <div className="projects-grid">
                    {projects.map((project, i) => (
                        <ProjectCard key={i} {...project} index={i} />
                    ))}
                </div>
            </section>

            <section className="contact">
                <h2><i className="fas fa-paper-plane"></i> Me contacter</h2>
                <form id="contactForm" onSubmit={handleSubmit} data-aos="flip-left">
                    <div className="form-group">
                        <input type="text" id="name" placeholder="Votre nom complet" />
                    </div>
                    <div className="form-group">
                        <input type="email" id="email" placeholder="Votre adresse email" />
                    </div>
                    <div className="form-group">
                        <textarea rows="5" id="message" placeholder="Votre message..."></textarea>
                    </div>
                    <button type="submit">
                        <i className="fas fa-paper-plane"></i> Envoyer le message
                    </button>
                    <p id="formMessage"></p>
                </form>
            </section>

            <footer>
                <p>&copy; 2026 Ahmed Manssouri - Tous droits réservés | <i className="fas fa-heart" style={{color: '#667eea'}}></i> Passionné de code</p>
            </footer>
        </div>
    );
}

// Rendu
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);