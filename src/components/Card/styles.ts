import styled from 'styled-components';

export const Container = styled.div<{hasNavigation: boolean}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background: #fafafa;
    padding: 20px;
    width: 250px;
    min-height: 100px;
    cursor: ${props => (props.hasNavigation ? 'pointer' : 'default')};
    border-radius: 8px;
`;
