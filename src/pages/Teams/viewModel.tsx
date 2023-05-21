import {useState, useEffect, useMemo} from 'react';
import {ListItem, TeamInfo, TeamsBasicInfo} from 'types';
import {formatTeamsToList} from 'utils/formatters';
import {useNotification} from '../../hooks/useNotification';
import {useSearch} from '../../hooks/useSearch';
import {getTeams as fetchTeams} from '../../api';

export const useTeamsViewModel = () => {
    const {setNotification} = useNotification();
    const {searchQuery, setSearchQuery} = useSearch();
    const [teams, setTeams] = useState<TeamsBasicInfo[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const getTeams = async () => {
        try {
            const response = await fetchTeams();
            setTeams(response);
        } catch (error) {
            setNotification({
                message: 'Ops! We had an internal problem',
                open: true,
                severity: 'error',
            });
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getTeams();
    }, []);

    const formatedTeams: ListItem[] = useMemo(() => {
        const teamDataArray = (value: TeamsBasicInfo): TeamInfo[] => {
            return [
                {
                    prefix: 'Name: ',
                    value: value.name,
                },
            ];
        };
        return formatTeamsToList(teams, teamDataArray).filter(member =>
            member.teamData[0].value.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
        );
    }, [teams, searchQuery]);

    return {teams, formatedTeams, isLoading, searchQuery, setSearchQuery};
};
