import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {TeamInfo, TeamsBasicInfo} from 'types';
import Card from '..';

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate,
}));

let teamData: TeamInfo[] = [{prefix: 'columnKey', value: 'columnValue'}];

beforeAll(() => {
    teamData = [{prefix: 'columnKey', value: 'columnValue'}];
});

describe('Card', () => {
    it('should render card with single column', () => {
        render(<Card teamData={teamData} />);

        expect(screen.getByText('columnKey')).toBeInTheDocument();
        expect(screen.getByText('columnValue')).toBeInTheDocument();
    });

    it('should render card with multiple columns', () => {
        teamData.push(
            {prefix: 'columnKey2', value: 'columnValue2'},
            {prefix: 'columnKey3', value: 'columnValue3'},
            {prefix: 'columnKey4', value: ''}
        );

        render(<Card teamData={teamData} />);

        expect(screen.getByText('columnKey')).toBeInTheDocument();
        expect(screen.getByText('columnValue')).toBeInTheDocument();
        expect(screen.getByText('columnKey2')).toBeInTheDocument();
        expect(screen.getByText('columnValue2')).toBeInTheDocument();
        expect(screen.getByText('columnKey3')).toBeInTheDocument();
        expect(screen.getByText('columnValue3')).toBeInTheDocument();
        expect(screen.getByText('columnKey4')).toBeInTheDocument();
    });

    it('should navigate when card is clicked and navigation is enabled', () => {
        const navProps = {
            id: '1',
            name: 'Team 1',
        } as TeamsBasicInfo;
        render(<Card teamData={teamData} url="path" navigationProps={navProps} />);

        fireEvent.click(screen.getByText('columnKey'));

        expect(mockUseNavigate).toHaveBeenCalledWith('path', {state: navProps});
    });

    it('should not navigate when card is clicked and navigation is disabled', () => {
        render(<Card teamData={teamData} hasNavigation={false} />);

        fireEvent.click(screen.getByText('columnKey'));

        expect(mockUseNavigate).not.toHaveBeenCalled();
    });
});
