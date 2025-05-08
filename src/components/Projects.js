const Projects = () => {
    const projects = [
      { title: "WordPress Site", desc: "Customized a blog theme", link: "#" },
      { title: "To-Do App", desc: "Built with React", link: "#" },
    ];
  
    return (
      <section id="projects">
        <h2>My Projects</h2>
        {projects.map((project, index) => (
          <div key={index}>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <a href={project.link}>View Project</a>
          </div>
        ))}
      </section>
    );
  };
  export default Projects;