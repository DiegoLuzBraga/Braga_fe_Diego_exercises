import {useEffect, useMemo, useState} from 'react';
import {useLocation, useParams} from 'react-router-dom';
import {ListItem, TeamInfo, UserData} from 'types';
import {formatUsersToList} from '../../utils/formatters';
import {useSearch} from '../../hooks/useSearch';
import {getTeamOverview, getUserData} from '../../api';

interface PageState {
    teamLead?: UserData;
    teamMembers?: UserData[];
}

export const useTeamOverviewViewModel = () => {
    const location = useLocation();
    const {teamId} = useParams();
    const {searchQuery, setSearchQuery} = useSearch();
    const [pageData, setPageData] = useState<PageState>({});
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const getTeamUsers = async () => {
            const {teamLeadId, teamMemberIds = []} = await getTeamOverview(teamId);
            const teamLead = await getUserData(teamLeadId);

            const allPromises = teamMemberIds.map(teamMemberId => getUserData(teamMemberId));
            const response = await Promise.all(allPromises);

            setPageData({
                teamLead,
                teamMembers: [...response],
            });
            setIsLoading(false);
        };
        getTeamUsers();
    }, [teamId]);

    const formatedTeams: ListItem[] = useMemo(() => {
        const teamDataArray = (value: UserData): TeamInfo[] => {
            return [
                {
                    prefix: 'Name: ',
                    value: `${value.firstName} ${value.lastName}`,
                },
                {
                    prefix: 'Display Name: ',
                    value: value.displayName,
                },
                {
                    prefix: 'Location: ',
                    value: value.location,
                },
            ];
        };
        return formatUsersToList(pageData?.teamMembers || [], teamDataArray).filter(member =>
            member.teamData[0].value.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
        );
    }, [pageData.teamMembers, searchQuery]);

    return {
        location,
        isLoading,
        pageData,
        formatedTeams,
        searchQuery,
        setSearchQuery,
    };
};
