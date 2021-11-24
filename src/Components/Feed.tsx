import { gql, useQuery } from "@apollo/client"
import { LaunchesPast } from "../Interfaces/LaunchesPast"
import Post from "./Post"

const TEST_QUERY = gql`
{
  launchesPast {
    mission_name
    details
    id
    launch_date_local
    links {
      wikipedia
      mission_patch
      flickr_images
    }
    rocket {
      rocket_name
    }
  }
}
`

const Feed = () => {
  const { loading, error, data } =
    useQuery<LaunchesPast>(TEST_QUERY)

  if (loading) return (<p>Loading...</p>)

  if (error) return (<p>Error</p>)

  return (
    <ul>
        {data && data.launchesPast.map(value => (
          <Post key={value.id} {...value}/>
        ))}
    </ul>
  )
}



export default Feed;