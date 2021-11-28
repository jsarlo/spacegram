import styled from "styled-components";
import GetLaunches from "./Queries/GetLaunches";

const StyledFeed = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
`

const Feed = () => {
  return (
    <StyledFeed>
      <GetLaunches/>
    </StyledFeed>
  )
}



export default Feed;