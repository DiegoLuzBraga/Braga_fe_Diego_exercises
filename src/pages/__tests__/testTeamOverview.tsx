import * as React from 'react';
import {render, screen} from '@testing-library/react';
import TeamOverview from '../TeamOverview/view';

const teamMembers = [
    {
        id: '1',
        firstName: 'userData',
        lastName: 'userData',
        displayName: 'userData',
        location: '',
        avatar: '',
    },
    {
        id: '2',
        firstName: 'userData',
        lastName: 'userData',
        displayName: 'userData',
        location: '',
        avatar: '',
    },
    {
        id: '3',
        firstName: 'userData',
        lastName: 'userData',
        displayName: 'userData',
        location: '',
        avatar: '',
    },
    {
        id: '4',
        firstName: 'userData',
        lastName: 'userData',
        displayName: 'userData',
        location: '',
        avatar: '',
    },
];

jest.mock('react-router-dom', () => ({
    useNavigate: () => ({}),
    useParams: () => ({
        teamId: '1',
    }),
}));

jest.mock('../TeamOverview/viewModel', () => ({
    useTeamOverviewViewModel: () => ({
        isLoading: false,
        location: {state: {teamName: 'Some Team'}},
        formatedTeams: [
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
            {
                id: '2',
                url: '/user/2',
                teamData: [
                    {prefix: 'Name: ', value: 'userData userData'},
                    {prefix: 'Display Name: ', value: 'userData'},
                    {prefix: 'Location: ', value: ''},
                ],
                navigationProps: {
                    id: '2',
                    firstName: 'userData',
                    lastName: 'userData',
                    displayName: 'userData',
                    location: '',
                    avatar: '',
                },
            },
            {
                id: '3',
                url: '/user/3',
                teamData: [
                    {prefix: 'Name: ', value: 'userData userData'},
                    {prefix: 'Display Name: ', value: 'userData'},
                    {prefix: 'Location: ', value: ''},
                ],
                navigationProps: {
                    id: '3',
                    firstName: 'userData',
                    lastName: 'userData',
                    displayName: 'userData',
                    location: '',
                    avatar: '',
                },
            },
            {
                id: '4',
                url: '/user/4',
                teamData: [
                    {prefix: 'Name: ', value: 'userData userData'},
                    {prefix: 'Display Name: ', value: 'userData'},
                    {prefix: 'Location: ', value: ''},
                ],
                navigationProps: {
                    id: '4',
                    firstName: 'userData',
                    lastName: 'userData',
                    displayName: 'userData',
                    location: '',
                    avatar: '',
                },
            },
        ],
        pageData: {
            teamLead: {
                id: '2',
                firstName: 'teamLeadData',
                lastName: 'teamLeadData',
                displayName: 'teamLeadData',
                location: '',
                avatar: '',
            },
            teamMembers,
        },
    }),
}));

describe('TeamOverview', () => {
    beforeAll(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.clearAllTimers();
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    it('should render team overview users', async () => {
        render(<TeamOverview />);

        expect(screen.queryAllByText('userData')).toHaveLength(4);
    });
});
