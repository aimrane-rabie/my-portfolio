import React from 'react'
import {projects,sections} from "../data/portfolioData"
export default function Projects(){
    
    return (
        <>
            <section id='projects' className='p-4 md:px-10 mt-6'>
                <div className='wrap flex flex-col  '>
                    <div className="reveal flex flex-col gap-3">
                        <div className='text-primary font-semibold font-heading tracking-wider'>{sections.projects.eyebrow}</div>
                        <h2 className='font-bold text-3xl tracking-wide text-ink'>{sections.projects.title}</h2>
                        <p className='tracking-wide text-muted'>{sections.projects.subtitle}</p>
                    </div>
                    <div>
                    {
                    
                        projects.map((project,index)=>(
                            <article key={index} className={`${project.id} group mt-18 grid items-center gap-10
                                    min-[960px]:mt-24 min-[960px]:gap-14
                                    min-[960px]:grid-cols-[7fr_5fr]
                                    min-[960px]:even:grid-cols-[5fr_7fr] `}>

                                <div className="proj-media rounded-xl  hover:-translate-y-1 transition-transform duration-300 ease-in-out cursor-pointer min-w-0 min-[960px]:group-even:order-2  ">
                                    <img src={project.image} alt={project.imageAlt} className='w-full h-auto object-cover rounded-lg shadow-xl shadow-muted
                                    transition-all duration-700 ease-out hover:scale-[1.03] hover:-translate-y-2' />
                                </div>
                                <div className="details flex flex-col gap-3 min-w-0">
                                    <div className="flex gap-4 min-[960px]:gap-2 text-[0.7em] font-heading uppercase justify-items text-muted">
                                        project {project.number} . {project.year}  

                                        <span className='bg-primary-soft text-primary rounded-lg px-1  font-light font-body '>
                                             { project.status}
                                        </span>
                                    </div>
                                    <h3 className='project-title font-semibold text-xl text-ink'>{project.title}</h3>
                                    <p className='summary tracking-wider text-muted'>{project.summary}</p>
                                    <p className='role text-ink'>
                                        <span className='font-medium '>My role: </span>
                                        {project.role}
                                    </p>
                                    <div className="tags flex gap-3 flex-wrap mt-2">
                                        {project.stack.map((stack,index)=>(
                                            <span className='text-muted px-2 rounded-xl bg-surface-2'>{stack}</span>
                                        ))}
                                    </div>
                                    <ul className="feats ml-6 flex flex-col gap-2">
                                            {project.features.map((feature,index)=>(
                                                <li className="relative text-muted after:content-[''] after:absolute after:top-[0.56em] after:-left-5 after:w-2.5 after:h-2.5 after:bg-blue-500 after:rounded-full">{feature}</li>
                                            ))}
                                    </ul>
                                    <p className="pending text-muted">Results and the case study will appear here once the project is live</p>
                                    <div className="pbtn mt-2 flex gap-3 flex-wrap">
                                        <a className='btn bg-surface p-2 rounded-xl cursor-not-allowed text-muted' href={project.links.demo} >
                                                Live Demo . soon
                                        </a>
                                        <a className='btn bg-surface p-2 rounded-xl cursor-not-allowed text-muted' href={project.links.github} >
                                                GitHub . soon
                                        </a>
                                    </div>
                                </div>
                            </article>
                        ))
                    }
                    </div>

                    
                </div>

            </section>
        </>
  )
}
