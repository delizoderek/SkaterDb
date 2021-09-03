import React from 'react'
import {useParams} from 'react-router-dom'
import Display, {VideoCard} from '../components/profileCard'

const SkaterProfile = () => {
    let {skaterId} = useParams()


    return (
        <div>
            {/* <VideoCard 
                skaterId={id}
            /> */}
             {skaterId}
        </div>
    )
}

export default SkaterProfile
