import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';
import Moment from 'react-moment';
import styled from "styled-components";
import { LaunchPast } from "../../Interfaces/LaunchesPast";
import PostHeader from './PostHeader';

const StyledArticle = styled.article`
      margin-top: 30px;
      border-radius: 3px;
      border: 1px solid #e6e6e6;
      background-color: #fff;
      margin-bottom: 60px;
      margin-left : 20%;
      margin-right: 20%;
      .Post-image-background {
        background-color: #efefef;
      }
      .post-caption {
        padding: 16px 16px;
      }
      .date-information {
          padding:0 16px;
      }
      
      time.tooltip {
        visibility: hidden;  
        background-color: black;
        color: #fff;
        text-align: center;
        padding: 5px 5px;
        position: absolute;
        z-index: 1;
      }
      
      .tooltip-on-hover:hover + .tooltip {    /* Uses the adjacent sibling selector */
        visibility: visible;  /* Or display: block */
      }
      
    .image-gallery-slide img {
        width: 614px;
        height: 614px;
        max-height: 80vh;
        object-fit: cover;
        overflow: hidden;
        object-position: center center;
    }
    .image-gallery button .image-gallery-svg {
        height: 40px;
    }
    .date-information {
        padding: 15px 15px;
    }
      `


const Post = (props: LaunchPast) => {
    const images: ReactImageGalleryItem[] = props.links.flickr_images.map(value => {
        return {
            original: value
        }
    });

    return (
        <StyledArticle>
            <PostHeader {...props}/>
            <div className="post-image">
                {images.length > 0 && <ImageGallery items={images} showBullets={true} showPlayButton={false} showFullscreenButton={false}></ImageGallery>}
            </div>
            <div className="post-caption">
                <strong>{props.details}</strong>
            </div>
            <div className="date-information">
                <Moment fromNow className="tooltip-on-hover">{props.launch_date_local}</Moment>
                <Moment className="tooltip" format="MMM  D, YYYY">{props.launch_date_local}</Moment>
            </div>
        </StyledArticle>
    )
}
export default Post;