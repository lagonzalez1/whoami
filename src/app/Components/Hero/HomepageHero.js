"use client"
import react, {useState, useEffect} from "react"
import "../../Css/Homepage.css"
import { motion } from "framer-motion";
import { ProjectCards } from "../Cards/ProjectCards";
import {projects} from "../../Data/data.js"
import TransparentCard from "../Cards/TransparentCard";
import { cardData } from "./data";




export default function HomepageHero(){
    const handleButtonClick = async () => { }
    const [openEdit, setOpenEdit] = useState(false);
    const [editValues, setEditValues] = useState({title1: '', body1: '', subtitle1: '', index: null});

    useEffect(() => {
    }, [])
  
    const openEditDialog = (values) => {
      setEditValues(values);
      setOpenEdit(true);
    }
    
    const closeEditDialog = () => {
      setEditValues(null);
      setOpenEdit(false);
    }



    return(
        <>
        <div className="content-container">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
                style={{ flex: 1, minWidth: { md: '300px' } }}
              >
                <div>
                  <h1>Hi there! My name is Luis</h1>
                  <p>A fullstack developer with a preference in backend development and cloud computing. </p>

                  <button className="btn" onClick={async() => handleButtonClick()}>Projects and more</button>
                </div>
              </motion.div>

              
            
              <div className="content-container">
                  <br/>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                  {cardData.map((card, index) => (
                      <TransparentCard
                        key={index}
                        icon={card.icon}
                        title={card.title}
                        text={card.text}
                      />
                  ))}
                  </div>
              </div>
              <div className="content-container">
                <h1>Experience</h1>
                <ProjectCards 
                    onEditClick={openEditDialog} 
                    onCloseEdit={closeEditDialog} 
                    projects={projects} 
                    title="Below are several architectural diagrams, each accompanied by a concise overview of the development process." />  
            </div> 
        </div>
        </>
    )
}