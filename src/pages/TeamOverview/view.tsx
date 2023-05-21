import React from 'react';
import {UserData} from '../../types';
import Card from '../../components/Card';
import {Container} from '../../components/GlobalComponents';
import Header from '../../components/Header';
import List from '../../components/List';
import {Spinner} from '../../components/Spinner';
import {SearchBar} from '../../components/Searchbar';
import {useTeamOverviewViewModel} from './viewModel';

const renderTeamLead = (teamLead: UserData) => {
    const columns = [
        {
            prefix: 'Team Lead',
            value: '',
        },
        {
            prefix: 'Name',
            value: `${teamLead.firstName} ${teamLead.lastName}`,
        },
        {
            prefix: 'Display Name',
            value: teamLead.displayName,
        },
        {
            prefix: 'Location',
            value: teamLead.location,
        },
    ];
    return <Card teamData={columns} url={`/user/${teamLead.id}`} navigationProps={teamLead} />;
};

const TeamOverview = () => {
    const {formatedTeams, isLoading, location, pageData, searchQuery, setSearchQuery} =
        useTeamOverviewViewModel();

    return (
        <Container>
            <Header title={`Team ${location.state.name}`} />
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            {isLoading ? (
                <Spinner />
            ) : (
                <React.Fragment>
                    {renderTeamLead(pageData.teamLead)}
                    <List items={formatedTeams} isLoading={false} />
                </React.Fragment>
            )}
        </Container>
    );
};

export default TeamOverview;
