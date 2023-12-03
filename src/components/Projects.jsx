import { useState } from "react"

export default function Projects({ projects }) {    
    const [hoverStatus, setHover] = useState(Array(projects.length).fill('false'))
    
    const handleHover = (index)=>{
        const newHoverStatus = [...hoverStatus]
        newHoverStatus[index] = !newHoverStatus[index]
        setHover(newHoverStatus)
    }

    return (
        <>
            {projects.map((project, index) => {
                const { name, imgPath, github, url } = project;
                const style = {
                    backgroundImage: `url(${imgPath})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '31vw',
                };

                const show = {
                    display: 'block',
                }

                const hide = {
                    display: 'none'
                }

                return (
                    <section
                        className="project m-3"
                        key={name}
                        style={style}
                        onMouseEnter={()=>{handleHover(index)}}
                        onMouseLeave={()=>{handleHover(index)}}
                    >
                        <p className="project-title">
                            <a href={url} className="custom-link-portfolio" target="_blank" rel="noopener noreferrer" style={hoverStatus[index]? hide: show}>{name} {' '}</a>
                            
                            <a href={github} className="custom-link-portfolio" target="_blank" rel="noopener noreferrer" style={hoverStatus[index]? hide: show}>Github </a>
                            
                        </p>
                    </section>
                );
            })}
        </>
    );
}