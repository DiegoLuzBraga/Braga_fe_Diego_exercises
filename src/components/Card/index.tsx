import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import {TeamInfo, TeamsBasicInfo, UserData} from 'types';
import {Container} from './styles';

interface Props {
    id?: string;
    url?: string;
    teamData: TeamInfo[];
    hasNavigation?: boolean;
    navigationProps?: UserData | TeamsBasicInfo;
}

const Card = ({
    id,
    teamData,
    url,
    hasNavigation = true,
    navigationProps = null,
}: Props): JSX.Element => {
    const navigate = useNavigate();

    return (
        <Container
            data-testid={`cardContainer-${id}`}
            hasNavigation={hasNavigation}
            onClick={(e: Event) => {
                e.preventDefault();
                if (hasNavigation) {
                    navigate(url, {
                        state: navigationProps,
                    });
                }
            }}
        >
            {teamData.map(({prefix, value}, index) => (
                <p key={`${prefix}-${index}`}>
                    <strong>{prefix}</strong>&nbsp;{value}
                </p>
            ))}
        </Container>
    );
};

export default Card;
