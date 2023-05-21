export interface TeamsBasicInfo {
    id: string;
    name: string;
}

export interface TeamOverview {
    id: string;
    teamLeadId: string;
    teamMemberIds: string[];
}

export interface UserData {
    id: string;
    firstName: string;
    lastName: string;
    displayName: string;
    location: string;
    avatar: string;
}

export interface TeamInfo {
    prefix: string;
    value: string;
}

export interface ListItem {
    id: string;
    url?: string;
    teamData: Array<TeamInfo>;
    navigationProps?: UserData | TeamsBasicInfo;
}
