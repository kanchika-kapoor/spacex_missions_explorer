import * as React from 'react'
import { useLaunchProfileQuery } from '../../generated/graphql'
import LaunchProfile from './LaunchProfile'


interface OwnProps {
    id: string
}

const LaunchProfileContainer: React.FC<OwnProps> = ({id})=>{
    const {data, error, loading, refetch} = useLaunchProfileQuery({variables: {id: id}});

    React.useEffect(()=>{
      refetch({id: String(id)})
    }, [refetch, id])

    if(loading){
        return <div>Loading ...</div>
    }

    if(error){
        return <div>Error</div>
    }

    if(!data){
        return <div>Select a flight from Panel</div>
    }

    return <LaunchProfile data={data}/>
}

export default LaunchProfileContainer