import {TeamInfo, TeamsBasicInfo, UserData} from '../../types';
import {formatTeamsToList, formatUsersToList} from '../formatters';

const teamMembersUser = [
    {
        id: '1',
        firstName: 'userData',
        lastName: 'userData',
        displayName: 'userData',
        location: '',
        avatar: '',
    },
];
const teamMembers = [
    {
        id: '1',
        name: 'userData',
    },
];

const teamDataArrayUsers = (value: UserData): TeamInfo[] => {
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

const teamDataArray = (value: TeamsBasicInfo): TeamInfo[] => {
    return [
        {
            prefix: 'Name: ',
            value: value.name,
        },
    ];
};

describe('testing both formatters', () => {
    it('should return empty array', () => {
        const responseTeams = formatTeamsToList([], () => []);
        const responseUsers = formatUsersToList([], () => []);

        expect(responseTeams).toHaveLength(0);
        expect(responseUsers).toHaveLength(0);
    });

    it('should format correctly based on the fields passed', () => {
        const responseTeams = formatTeamsToList(teamMembers, teamDataArray);
        const responseUsers = formatUsersToList(teamMembersUser, teamDataArrayUsers);

        expect(responseTeams).toStrictEqual([
            {
                id: '1',
                url: '/team/1',
                teamData: [{prefix: 'Name: ', value: 'userData'}],
                navigationProps: {id: '1', name: 'userData'},
            },
        ]);

        expect(responseUsers).toStrictEqual([
            {
                id: '1',
                url: '/user/1',
                teamData: [
                    {prefix: 'Name: ', value: 'userData userData'},
                    {prefix: 'Display Name: ', value: 'userData'},
                    {prefix: 'Location: ', value: ''},
                ],
                navigationProps: {
                    id: '1',
                    firstName: 'userData',
                    lastName: 'userData',
                    displayName: 'userData',
                    location: '',
                    avatar: '',
                },
            },
        ]);
    });
});
