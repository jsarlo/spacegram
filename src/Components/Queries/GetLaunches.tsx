import { gql, NetworkStatus, useQuery } from '@apollo/client';
import { LaunchesPast } from '../../Interfaces/LaunchesPast';
import Loading from '../Loading';
import Post from '../Post/Post';
import { InView } from 'react-intersection-observer';
import { useState } from 'react';

const GET_LAUNCHES = gql`
query ListLaunches($offset: Int!, $limit: Int!) {
  launchesPast: launchesPast(
    offset: $offset # start at the first result
    limit: $limit # limit to 10 launches
    sort: "launch_date_utc" # sort by launch date...
    order: "desc" # ...in descending order
  ) {
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
const GetLaunches = () => {
  const [fullyLoaded, setFullyLoaded] = useState(false);
  const { data, networkStatus, error, variables, fetchMore } = useQuery<LaunchesPast>(GET_LAUNCHES, {
    variables: {
      offset: 0,
      limit: 10
    }
  });

  if (networkStatus === NetworkStatus.loading && !data?.launchesPast) return (
    <Loading />
  )
  if (error) {
    return (<div></div>)
  }
  return (
    <div>
      {data && data.launchesPast.map(value => (
        <Post key={value.id} {...value} />
      ))}
      {
        networkStatus !== NetworkStatus.fetchMore &&
        data?.launchesPast && 
        data.launchesPast?.length % variables?.limit === 0 &&
        !fullyLoaded && (
          <InView
            onChange={async (inView) => {
              if (inView) {
                const result = await fetchMore({
                  variables: {
                    offset: data.launchesPast.length
                  }
                });
                setFullyLoaded(!result.data.launchesPast.length);
              }
            }}
          />
        )
      }

    </div>
  );
}

export default GetLaunches;
