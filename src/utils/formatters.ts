import {ListItem, TeamInfo, TeamsBasicInfo, UserData} from 'types';

export const formatTeamsToList = (
    teams: TeamsBasicInfo[],
    teamDataArray: (value: TeamsBasicInfo) => TeamInfo[]
): ListItem[] => {
    return teams.map(team => {
        return {
            id: team.id,
            url: `/team/${team.id}`,
            teamData: teamDataArray(team),
            navigationProps: team,
        };
    });
};

export const formatUsersToList = (
    teams: UserData[],
    teamDataArray: (value: UserData) => TeamInfo[]
): ListItem[] => {
    return teams.map((team: UserData) => {
        return {
            id: team.id,
            url: `/user/${team.id}`,
            teamData: teamDataArray(team),
            navigationProps: team,
        };
    });
};
