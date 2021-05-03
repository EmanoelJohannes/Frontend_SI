import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import {TouchableOpacity} from 'react-native';

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const HourList = styled.FlatList.attrs({
    numColumns: 2,
    showVerticalScrollIndicator: false,
})`
    padding: 0 20px;
    margin-top: 20px;

`;


export const Title = styled.Text`
    flex: 1;
    color: #fff;

`;

export const Hour = styled(TouchableOpacity)`
    background: #004f02;
    border-radius: 4px;
    padding: 20px;
    flex: 1;
    opacity: ${props => props.enable ? 1 : 0.4};

    align-items: center;
    margin: 0 10px 20px
`;
