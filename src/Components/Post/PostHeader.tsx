import styled from "styled-components";
import { LaunchPast } from "../../Interfaces/LaunchesPast";

const StyledHeader = styled.header`
    height: 62px;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .left {
        margin-left: 12px;
        margin-top: 12px;
        margin-bottom: 12px;
        font-family: 'PT Sans', sans-serif;
    }
    .post-launch-site {
        justify-content: flex-end;
        margin-right: 12px;
    }
    .post-rocket-name {
        font-weight: bold;  
    }
    @media only screen and (max-width: 600px) {
        height: 75px;
        .post-launch-site {
            margin-right: 0;
        }

    }
`

const PostHeader = (props: LaunchPast) => {
    return (
        <StyledHeader>
            <div className="left">
                <div className="post-rocket-name"><a href={props.links.article_link} target="_blank" rel="noopener noreferrer">{props.rocket.rocket_name}</a></div>
                <div className="post-mission-name"><a href={props.links.video_link} target="_blank" rel="noopener noreferrer">{props.mission_name}</a></div>
            </div>
            <div className="post-launch-site">{props.launch_site.site_name_long}</div>
        </StyledHeader>
    )
}

export default PostHeader;