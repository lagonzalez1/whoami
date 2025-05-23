"use client"

import react, {useEffect, useState} from "react";
import ContactDialog from "../Dialog/ContactDialog";
import CommitDialog from "../Dialog/CommitDialog";

react
// components/Toolbar.js
export default function HomepageToolbar() {

    const [open, setOpen] = useState(false);
    const [openCommit, setOpenCommit] = useState(false);

    const onOpen = () => { setOpen(true);}
    const onClose = () => { setOpen(false); }

    const onCloseCommit = () => { setOpenCommit(false);}
    const onOpenCommit = () => { setOpenCommit(true);}

    return (
      <header style={styles.header}>
        <div style={styles.left}></div>
        <div style={styles.right}>
          <button style={styles.button} onClick={() => setOpen(true)}>Contact</button>
          <button style={styles.button} onClick={() => setOpenCommit(true)}>Commit</button>
        </div>
        <ContactDialog open={open} onClose={onClose} onOpen={onOpen} />
        <CommitDialog open={openCommit} onClose={onCloseCommit} onOpen={onOpenCommit} />
      </header>
    );
  }
  
  const styles = {
    header: {
      position: 'fixed',
      top: 0,
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backdropFilter: 'blur(10px)',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      color: 'white',
      zIndex: 1000,
    },
    left: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
    },
    right: {
      display: 'flex',
      gap: '1rem',
    },
    button: {
      background: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      color: 'white',
      padding: '0.5rem 1rem',
      borderRadius: '9999px',
      cursor: 'pointer',
      transition: 'background 0.2s ease',
    },
  };
  