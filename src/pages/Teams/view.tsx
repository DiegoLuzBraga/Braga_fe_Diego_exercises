import React from 'react';
import Header from '../../components/Header';
import List from '../../components/List';
import {Container} from '../../components/GlobalComponents';
import {SearchBar} from '../../components/Searchbar';
import {useTeamsViewModel} from './viewModel';

const Teams = () => {
    const {teams, formatedTeams, isLoading, searchQuery, setSearchQuery} = useTeamsViewModel();

    return (
        <Container>
            <Header title="Teams" showBackButton={false} />
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            {teams.length ? (
                <List items={formatedTeams} isLoading={isLoading} />
            ) : (
                <React.Fragment>
                    <p>Looks like we didn&apos;t find any team</p>
                    <p>Try to refresh the page!</p>
                </React.Fragment>
            )}
        </Container>
    );
};

export default Teams;
