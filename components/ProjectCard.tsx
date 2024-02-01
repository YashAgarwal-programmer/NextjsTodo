"use client"
import React, { useState } from 'react'
import {motion} from 'framer-motion'
interface Props{
    image:string;
    title:string;
    text:string;
}
const ProjectCard = ({image,title,text}:Props) => {
    const [isFlipped,setIsFlipped]=useState(false);
    const [isAnimating,setIsAnimating]=useState(false);

    function handleflip(){
        if(!isAnimating){
            setIsFlipped(!isFlipped)
        }
    }
  return (
    <div>ProjectCard</div>
  )
}

export default ProjectCard