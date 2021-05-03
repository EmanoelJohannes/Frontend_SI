import React, {forwardRef, useState} from 'react';

import { Container, TInput } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Input({style, icon, color, secureTextEntry, ...rest}, ref) {

  const [isPassword, setIsPassword] = useState(true);

  function handleButton (){  
    if (isPassword == true && secureTextEntry)  
      setIsPassword(false);
    else if (isPassword == false && secureTextEntry)
      setIsPassword(true);
  }

  return (
    <Container style={style}>
        {icon && <Icon name={icon} size={20} color={color} />}
        {secureTextEntry == true ? 
          <TInput secureTextEntry={isPassword} {...rest} ref={ref} />
        : 
          <TInput {...rest} ref={ref} />
        }
        {secureTextEntry && <Icon name="eye-outline" size={20} color={color} onPress={handleButton} />}      
    </Container>
  );
}


export default forwardRef(Input);
