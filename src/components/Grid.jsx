import { Fragment } from 'react'
import {levels} from '../assets/assets'
import Tale from './Tale'
import styles from './Grid.module.css'
function Grid () {

    //this should be the parameter in the navigation instead of 0 
    const currentLevel = levels[0]
    return(
        <div className={styles.grid}>
            {/*------- here you should loop the level grid --------*/}
            {
                currentLevel.grid.map((row, rowIndex) => (
                    <Fragment key={rowIndex}>
                        {row.map((cell, cellIndex) => {
                            if (cell === 1) {
                                return (
                                    <Tale bg="full" key={`${rowIndex}-${cellIndex}`} />
                                )
                            }
                            else {
                                return (
                                    <Tale bg="empty" />
                                )
                            }

                            return null
                        })}
                        <br />
                    </Fragment>
                ))
            }
        </div>
    )
}
export default Grid