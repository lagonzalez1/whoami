"use client"
// components/ContactDialog.js

export default function ImageDialog(props) {

  return (
    <>
      {props.open && (
        <div style={styles.backdrop} onClick={() => props.onOpen(false)}>
          <div style={styles.dialog} onClick={(e) => e.stopPropagation()}>
          <div className="w-full h-64 md:h-96 lg:h-[35rem] relative overflow-hidden">
            <img
              src={props.img_path || "/api/placeholder/800/600"}
              loading="lazy"
              alt={props.img_path}
              className="w-full h-full object-fit transition-transform duration-500 group-hover:scale-105"
            />
            {/* Gradient overlay that fades up from bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
          </div>
            <button onClick={() => props.onClose()} style={styles.closeButton}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

const styles = {
  openButton: {
    background: 'transparent',
    color: 'white',
    border: '1px solid white',
    padding: '0.5rem 1rem',
    borderRadius: '999px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  backdrop: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: 'rgba(0,0,0,0.6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  dialog: {
    background: 'rgba(20, 20, 20, 0.9)', // darker dialog
    padding: '2rem',
    borderRadius: '12px',
    width: '90%',
    maxWidth: '1000px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
    textAlign: 'left',
    color: '#f1f1f1',
  },
  
  list: {
    listStyle: 'none',
    padding: 0,
    lineHeight: '1.6',
    marginBottom: '1.5rem',
    color: '#ddd', // lighter text for dark bg
  },
  title: {
    marginTop: 0,
    marginBottom: '1rem',
    fontSize: '1.5rem',
  },
  closeButton: {
    background: '#555',
    color: '#fff',
    border: 'none',
    padding: '0.5rem 1.25rem',
    borderRadius: '8px',
    cursor: 'pointer',
  }
};
