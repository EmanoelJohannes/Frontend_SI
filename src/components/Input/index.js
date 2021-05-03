import React, {forwardRef, useState} from 'react';

import { Container, TInput } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

function Input({style, icon, color, fontColor, placeholderTextColor, secureTextEntry, ...rest}, ref) {

  const [isPassword, setIsPassword] = useState(true);

  if (!color){
    color = "rgba(255,255,255, 0.6)";
  }
  if (!placeholderTextColor){
    placeholderTextColor = "rgba(255, 255, 255, 0.8)"
  } 
  if (!fontColor){
    fontColor = "#444"
  }

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
          <TInput secureTextEntry={isPassword} fontColor={fontColor} placeholderTextColor={placeholderTextColor} {...rest} ref={ref} />
        : 
          <TInput fontColor={fontColor} placeholderTextColor={placeholderTextColor} {...rest} ref={ref} />
        }
        {secureTextEntry && <Icon name="remove-red-eye" size={20} color={color} onPress={handleButton} />}        
    </Container>
  );
}


export default forwardRef(Input);
