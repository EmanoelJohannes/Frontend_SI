import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import {TouchableOpacity} from 'react-native';

export const Container = styled.View`
    flex: 1;
`;

export const OptionsList = styled.View`
    background: #fff;
    padding: 20px 0;
    margin: 10px;
    border-radius: 5px;
`;

export const ItemContainer = styled.View`
    margin: 0 25px;
    border-bottom-color: #999;
    border-bottom-width: 0.8px;
`;

export const Item = styled(TouchableOpacity)`
    flex-direction: row;
    padding: 10px 10px;
`;

export const ContentIcon = styled.View`
    margin-right: 15px;
`;

export const Label = styled.Text`
    color: #444;
`;
