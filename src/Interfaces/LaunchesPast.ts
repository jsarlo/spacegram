export interface LaunchesPast {
    launchesPast: LaunchPast[];
}

export interface LaunchPast {
    mission_name: string;
    id: string;
    details: string;
    launch_date_local: string;
    links: {
        wikipedia: string;
        mission_patch: string;
        flickr_images: string[];
    }
    rocket: {
        rocket_name: string;
    }
} 