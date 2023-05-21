import * as React from 'react';
import {ListItem} from 'types';
import Card from '../Card';
import {Spinner} from '../Spinner';
import * as S from './styles';

interface Props {
    items?: ListItem[];
    hasNavigation?: boolean;
    isLoading: boolean;
}

const List = ({items, hasNavigation = true, isLoading}: Props) => {
    return (
        <S.Container>
            {isLoading ? (
                <Spinner />
            ) : (
                items.map((item, index) => {
                    return (
                        <Card key={`${item.id}-${index}`} hasNavigation={hasNavigation} {...item} />
                    );
                })
            )}
        </S.Container>
    );
};

export default List;
