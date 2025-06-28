"use client"
import react, {useState, useEffect} from "react"
import "../../Css/Homepage.css"
import { motion } from "framer-motion";
import { ProjectCards } from "../Cards/ProjectCards";
import { PROD1 } from "@/app/Static/static";
import axios from "axios";
import Loader from "../Loader/Loader";
import CommitDialog from "../Dialog/CommitDialog";
import { GiDatabase } from "react-icons/gi";
import { TbCloudComputing } from "react-icons/tb";
import { FaCodeBranch } from "react-icons/fa";
import {projects} from "../../Data/data.js"


//const API = "https://ihl5xv97x3.execute-api.us-west-1.amazonaws.com/upload_project"

const cardData = [
    { title: 'Software', 
      icon: <FaCodeBranch fontSize={30} />, 
      text: 'Experiance with building compact and scalable software systems using various tech stack.'},
    { title: 'Cloud', 
      icon: <TbCloudComputing fontSize={30}  /> , 
      text:'Scalable system design has naturally led to strong experience with AWS cloud services.'},
    { title: 'Database', 
      icon: <GiDatabase fontSize={30} /> , 
      text: 'Experienced with both SQL (PostgreSQL) and NoSQL databases.'},
  ];

  const TransparentCard = ({ icon, title, text }) => {
    return (
      <div
      role={'button'}
      className="group
        bg-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-6
        flex flex-col items-center text-center cursor-pointer
        transition transform
        hover:-translate-y-1 hover:scale-105 hover:bg-white/10 hover:shadow-xl
        focus:outline-none focus:ring-4 focus:ring-indigo-500/40"
    >
      <span className="h-8 w-8 text-indigo-400 group-hover:text-white transition-colors">
          {icon}
        </span>
      <h3 className="text-xl font-semibold text-white mb-2 transition-colors group-hover:text-indigo-100">
        {title}
      </h3>
      <p className="text-sm text-gray-100 max-w-xs">
        {text}
      </p>
    </div>
    );
  };

export default function HomepageHero(){
    const handleButtonClick = async () => { }
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
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
                  <h1>Hi my name is luis</h1>
                  <p>A passionate fullstack developer with a preference in backend development and cloud computing. </p>

                  <button className="btn" onClick={async() => handleButtonClick()}>Projects and more</button>
                </div>
              </motion.div>

              <br />  
              <br />  
              <br />  
              <br />
            
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
              <div className="content-container justify-items-center">
                <h1>Experience</h1>
                {
                  loading ? 
                  <Loader />
                  :
                  <ProjectCards 
                    onEditClick={openEditDialog} 
                    onCloseEdit={closeEditDialog} 
                    projects={projects} 
                    title="Below are some of the architectual diagrams followed by a quick synopsis on development process." />                 
                }
                <CommitDialog 
                  open={openEdit} 
                  onClose={closeEditDialog} 
                  title1={editValues ? editValues.title1 : null}
                  body1={editValues ? editValues.body1 : null}
                  subtitle1={editValues ? editValues.subtitle1 : null}
                  index={editValues ? editValues.index : null}  />
            </div> 
          </div>
        </>
    )
}