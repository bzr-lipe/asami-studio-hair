import React from 'react';
import * as S from './styles';

export default function SignUpPage() {
  const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
  }
  
  const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
  }

  return (
    <S.SignUpPage>
      <S.Wallpaper />
      <S.Content>
        <S.LoginForm id="signUpForm"> 
          <S.Input type='text' placeholder='nome completo' name='nome'/>
          <S.InputLine>
            <S.Input type='date' name='data' required/>
            <select placeholder='sexo' required>
              <option value='' disabled selected>sexo</option>
              <option value='masculino'>masculino</option>
              <option value='feminino'>feminino</option>
            </select>
          </S.InputLine>
          <S.Input type="number_format" name="cpf" placeholder='cpf' pattern="(\d{3}\.?\d{3}\.?\d{3}-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2})" maxlength="11" required/>
          <S.Input type='tel' placeholder='Celular' maxlength='15' onKeyDown={handlePhone} name='celular' required/>
          <S.Input type='email' placeholder='email' name='email' required/>
          <S.Input type='password' placeholder='senha' name='senha' required/>
        </S.LoginForm>
      </S.Content>
    </S.SignUpPage>
  )
}
