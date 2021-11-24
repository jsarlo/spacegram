import { gql, useQuery } from "@apollo/client"
import TwinSpin from "react-cssfx-loading/lib/TwinSpin";
import styled from "styled-components";
import { LaunchesPast } from "../Interfaces/LaunchesPast"
import Post from "./Post/Post"

const TEST_QUERY = gql`
{
  launchesPast(limit: 10, order: "{DESC: launch_date_local}") {
    mission_name
    details
    id
    launch_date_local
    links {
      article_link
      flickr_images
      video_link
    }
    rocket {
      rocket_name
    }
    launch_site {
      site_name
      site_name_long
    }
  }
}
`
const StyledLoading = styled.div`
padding-top: 300px;
display: flex;
  align-items: center;
  justify-content: center;

`
const StyledFeed = styled.div`
display: flex;
flex-direction: column;
margin-top: 80px;
`

const Feed = () => {
  const { loading, error, data } =
    useQuery<LaunchesPast>(TEST_QUERY)

  if (loading) return (
  <StyledLoading>
     <TwinSpin color="#FF0000" width="100px" height="100px" duration="3s" />
  </StyledLoading>
 )

  // TODO: Error handling w/ component
  if (error) return (<p>Error</p>)
  return (
    <StyledFeed>
      {data && data.launchesPast.map(value => (
        <Post key={value.id} {...value} />
      ))}
    </StyledFeed>
  )
}



export default Feed;