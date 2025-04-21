import React, { useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);



    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

        projects.forEach((card,index) => {
            gsap.fromTo(
                card, 
                { y: 50, opacity: 0 }, 
                { 
                    y: 0, 
                    opacity: 1, 
                    duration: 1, 
                    delay: (index+1) * 0.3,
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom",
                    } 
                });  
        });
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        )
      },[]);



  return (
    <div id="work" className='app-showcase' ref={sectionRef}>
      <div className='w-full'>
        <div className="showcaselayout">
            {/* left  */}
            <a href='https://sinangiftcorner.web.app/' className='first-project-wrapper group duration-500 ' ref={project1Ref}>
                <div className="image-wrapper overflow-hidden">
                    <img src="/images/project1.1.png" alt="Ryde" className='group-hover:scale-110 duration-500'/>
                </div>
                <div className='text-content'>
                    {/* <h2>Cashooz - Earn Meny in Click</h2> */}
                    <h2>Sinan Gift Corner</h2>
                    <p>
                       An app built wirth React Typescript Express MongoDB that allows users to order online, request payment, and track their order. This app is a powerful tool for those who want to make life easier and more enjoyable. 
                    </p>
                    {/* <p>
                       An app built wirth React Typescript Express MongoDB that allows users to complete task, request payment, and track their work. This app is a powerful tool for those who want to make life easier and more enjoyable. 
                    </p> */}
                </div>
            </a>
            {/* right  */}
            <div className='project-list-wrapper overflow-hidden'>
                <div className="project" ref={project2Ref}>
                    <div className='image-wrapper bg-[#ffefdb]'>
                        <img src="/images/project2.png" alt="Library" />
                    </div>
                    <h2>Libray Managment</h2>
                </div>
                <div className="project" ref={project3Ref}>
                    <div className='image-wrapper bg-[#ffe7eb]'>
                        <img src="/images/project3.png" alt="YC Direactory" />
                    </div>
                    <h2>YC Direactory - A startup project</h2>
                </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default ShowcaseSection
