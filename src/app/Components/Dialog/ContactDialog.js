"use client"
// components/ContactDialog.js

export default function ContactDialog(props) {

  return (
    <>
      {props.open && (
        <div style={styles.backdrop} onClick={() => props.onOpen(false)}>
          <div style={styles.dialog} onClick={(e) => e.stopPropagation()}>
            <h2 style={styles.title}>Contact Info</h2>
            <ul style={styles.list}>
              <li>
                <strong>LinkedIn:</strong>{' '}
                <a href="" target="_blank" rel="noreferrer">
                  linkedin.com/in/your-profile
                </a>
              </li>
              <li>
                <strong>GitHub:</strong>{' '}
                <a href="https://github.com/your-username" target="_blank" rel="noreferrer">
                  github.com/your-username
                </a>
              </li>
              <li>
                <strong>Email:</strong> lagonzalez6@myyahoo.com
              </li>
            </ul>
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
    maxWidth: '400px',
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
