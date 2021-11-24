export interface LaunchesPast {
    launchesPast: LaunchPast[];
}

export interface LaunchesLatest {
    launchLatest: LaunchPast;
}

export interface LaunchPast {
    mission_name: string;
    id: string;
    details: string;
    launch_date_local: string;
    links: {
        article_link: string;
        flickr_images: string[];
        video_link: string;
    }
    rocket: {
        rocket_name: string;
    }
    launch_site: {
        site_name: string;
        site_name_long: string;
    }
} 