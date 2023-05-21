import * as React from 'react';
import {useLocation} from 'react-router-dom';
import {UserData} from '../../types';
import Card from '../../components/Card';
import {Container} from '../../components/GlobalComponents';
import Header from '../../components/Header';

const renderUser = (user: UserData) => {
    const columns = [
        {
            prefix: 'Name: ',
            value: `${user.firstName} ${user.lastName}`,
        },
        {
            prefix: 'Display Name: ',
            value: user.displayName,
        },
        {
            prefix: 'Location: ',
            value: user.location,
        },
    ];
    return <Card teamData={columns} hasNavigation={false} navigationProps={user} />;
};

const UserOverview = () => {
    const location = useLocation();
    return (
        <Container>
            <Header title={`User ${location.state.firstName} ${location.state.lastName}`} />
            {renderUser(location.state)}
        </Container>
    );
};

export default UserOverview;
