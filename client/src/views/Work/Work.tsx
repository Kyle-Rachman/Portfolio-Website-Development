import React, { useState } from 'react'
import ToggleOnScroll from '../../components/ToggleOnScroll'
import PageHeader from '../../components/PageHeader/PageHeader'
import Footer from '../../components/Footer'
import styles from './Work.module.css'
import { useNavigate } from 'react-router-dom'
import ProjectInfos from '../../assets/projectinfo.json'
import SEO from '../../components/SEO'
import phoenixv5 from '../../assets/phoenixv5.png'

const Work = () => {
    const [hovered, setHovered] = useState(false)
    const [hoveredProj, setHoveredProj] = useState('')
    const navigate = useNavigate()

    const miniCardStyle: string = `peer border-2 border-black rounded-lg object-cover h-[200px] min-w-[280px] w-[300px] transition-all ${hovered ? 'grayscale' : 'grayscale-0'} hover:grayscale-0 hover:brightness-[1.4] hover:cursor-pointer`

    return (
        <>
            <SEO
                title='Kyle Rachman | Work'
                url='https://kylerachman.dev/work'
                image={phoenixv5}
                imageAlt="Phoenix logo, KR"
                description="Some selected projects showcasing what I can do in web development and mathematics."
            ></SEO>
            <div id={styles.container}>
                <PageHeader
                    heroImage='../src/assets/phoenixv5.png'
                    heroImageAlt='Phoenix Logo, KR'
                    altImage='../src/assets/phoenixv5.png'
                    heroAltImageAlt='Phoenix Logo, KR'
                    mobileHeroImage='../src/assets/phoenixsmall.png'
                    mobileHeroImageAlt='Phoenix Logo, KR'
                    heroTitle={<p className='max-w-[100%] font-bold'>What I've been up to.</p>}
                    heroPage='Work'
                    heroDescription="Here's a selection of projects I've worked on and roles I've filled."
                ></PageHeader>
                <div className={`px-8 sm:px-20 py-24 transition-all duration-100 bg-cover bg-center ${styles.projects} ${hovered ? '' : 'bg-white'}`} style={{backgroundImage: `url(${hoveredProj})`, backgroundBlendMode: 'overlay', transitionDuration: '300ms'}}>
                    <p className={`font-bold ${hovered ? 'text-white drop-shadow-black' : 'text-black'} text-3xl mb-20`}>My projects.</p>
                    <div className={`text-white flex flex-wrap justify-center gap-10`}>
                        {
                            Object.values(ProjectInfos).map((value, idx) => (
                                <ToggleOnScroll key={idx} firstTimeSlide direction='from-bottom'>
                                    <div className='hover:drop-shadow-accent-blue'>
                                        <img src={value.mainImage[0]} alt={value.mainImage[1]} className={miniCardStyle} onClick={() => navigate('/work/' + value.linkname)} onMouseOver={() => {
                                            setHoveredProj(`${value.mainImage[0].slice(3)}`)
                                            setHovered(true)}} onMouseLeave={() => {
                                                setHoveredProj('')
                                                setHovered(false)}}/>
                                        <p className={`${styles.desktopLabels} transition-all duration-200 opacity-0 select-none peer-hover:opacity-100 relative top-[-250px] text-center w-[100%] text-3xl bg-slate-800 bg-opacity-95 pb-1 rounded-md`}>{value.name}</p>
                                        <p className={`${styles.desktopLabels} transition-all duration-200 opacity-0 select-none peer-hover:opacity-100 relative top-[-38px] text-center mx-auto w-[50%] font-extralight bg-slate-800 pb-1 rounded-md`}>Click to learn more</p>
                                        <p className={`${styles.mobileLabels} relative top-[-250px] text-center w-[100%] text-3xl text-black font-bold`}>{value.name}</p>
                                        <p className={`${styles.mobileLabels} relative top-[-33px] text-center mx-auto w-[50%] font-extralight text-black`}>Click to learn more</p>
                                    </div>
                                </ToggleOnScroll>
                            ))
                        }
                    </div>
                </div>
                <div className='flex flex-col py-[48px]'>
                    <Footer></Footer>
                </div>
            </div>
        </>
    )
}

export default Work