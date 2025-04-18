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



  return (
    <div id="work" className='app-showcase'>
      <div className='w-full'>
        <div className="showcaselayout">
            {/* left  */}
            <div className='first-project-wrapper' ref={project1Ref}>
                <div className="image-wrapper">
                    <img src="/images/project1.png" alt="Ryde" />
                </div>
                <div className='text-content'>
                    <h2>On- Demand Made Simple with a powerful, User-friendly App called RYde</h2>
                    <p>
                       An app built wirth React Native that allows users to book rides, request rides, and track their rides. This app is a powerful tool for those who want to make life easier and more enjoyable. 
                    </p>
                </div>
            </div>
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
