import React from 'react'
import {about,sections} from "../data/portfolioData";

export default function About() {
  return (
    <section id='about' className='about p-6'>
        <div className="about-wrap flex flex-col items-center  gap-5 md:flex-row  ">
            
            <div className="photo max-w-[400px] max-h-[500px] rounded-lg ">
                <img src="me.png" className='' alt="" />
            </div>
            <div className="reveal flex flex-col gap-3">
                    <div className='text-primary font-semibold font-heading tracking-wider'>{sections.about.eyebrow}</div>
                    <h2 className='font-bold text-3xl tracking-wide text-ink'>{sections.about.title}</h2>
                    <p className='tracking-wide text-muted'>{about.paragraphs[0]}</p>
                    <p className='tracking-wide text-muted'>{about.paragraphs[1]}</p>
                    <ul className='grid sm:grid-cols-2 gap-4 mt-4 lg:mt-6 '>
                        {about.facts.map((fact,index)=>(
                            <li key={index} className='flex flex-col gap-4 p-4 rounded-lg bg-surface font-semibold text-ink'>
                                <span className="text-muted font-light">{fact.label}</span>
                                {fact.value}
                            </li>
                        ))}
                    </ul>
            </div>
        </div>
    </section>
  )
}
