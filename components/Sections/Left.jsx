export default function Left({ image, title, children, repoLink, ghLink}) {
  return (
    <div className="experience-container">
      <div>
        <img src={image} alt={title} />
      </div>
      <div>
        <h3 className="experienceTitle">{title}</h3>
        <p className="experienceDescription">{children}</p>
        {repoLink && (
          <a className="experienceButton" href={repoLink}>
            Repo()
          </a>
        )}
        {ghLink && (
          <a className="experienceButton" href={ghLink}>
            Site()
          </a>
        )}
      </div>
    </div>
  );
}
