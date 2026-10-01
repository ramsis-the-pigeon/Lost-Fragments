import {react} from 'react'
import {levels} from '../assets/assets'

function Grid () {

    //this should be the parameter in the navigation instead of 0 
    const currentLevel = levels[0]
    return(
        <div>
            {/*------- here you should loop the level grid --------*/}
            {
                currentLevel.grid.map((item, index) => (
                    console.log(item)
                    
                ))
            }
        </div>
    )
}
export default Grid