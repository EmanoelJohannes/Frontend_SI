import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const ItemMenu = styled(RectButton)`
    padding: 10px;
    background:  ${props => props.active ? '#142b' : '#692b'};
    margin: 3px;
    border-radius: 5px;
`;

export const ItemText = styled.Text`
    color: white;
`;


export const Container = styled.View`
    flex: 1;
    padding: 0 30px;
`;


export const ActionList = styled.FlatList.attrs({
    showVerticalScrollIndicator: true,
})`
    margin-top: 20px;
`;

export const ActionContainer = styled(RectButton)`
    justify-content: space-between;
    flex-direction: row;    
    background: #fff;
    
`;

export const ContainerList = styled.View`
    border-radius: 8px;
    min-height: 50px;
    max-height: 160px;
    padding: 5px;
    background: #fff;
    margin-bottom: 5px;
    border: 1px solid #2c692b;
    margin-top: 20px;

`;

export const Active = styled.Text`
    font-size: 12px;
    margin-top: 5px;
    color: #eee;
    text-align: center;

`;

export const RightSide = styled.View`
    padding: 5px;
    width: 100%;
    flex-direction: column;
    align-self: center;
`;

export const Wrapper = styled.View`
    flex-direction: column;
    margin-bottom: 5px;
`;

export const Label = styled.Text`
    color: #2c692b;
    font-size: 14px;
    font-weight: bold;
    
`;

export const LabelWrapper = styled.View`
    margin: 5px 0; 
    
`;

export const ContainerText = styled.View`
    color: #fff;
    font-size: 12px;
    color: #2c692b;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const TextWrapper = styled.Text`
    font-size: 12px;
    text-align: center;
`;

export const StatusWrapper = styled.View`
    padding: 2px;
    border-radius: 10px;
    width: 100px;
    

    background-color: ${props => props.color ? `${props.color}` : '#000'};
`;



