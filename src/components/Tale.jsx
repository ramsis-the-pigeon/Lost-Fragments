import react from 'react'
import styles from './Tale.module.css'

function Tale({bg}) {
  
    
    
  return (
    <div className={`${styles.tale} ${styles[bg]}`}>
        
    </div>
  )
}

export default Tale