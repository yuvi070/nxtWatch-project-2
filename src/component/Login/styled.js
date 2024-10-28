import styled from 'styled-components'

export const Home = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const Body = styled.div`
  width: 33%;
  text-align: center;
  background-color: seagreen;
  border-radius: 8px;
  margin: auto;
  padding: 25px;
`
export const LoginLogoImage = styled.img`
  width: 200px;
  text-align: center;
`
export const LabelText = styled.label`
  color: #94a3b8;
`
export const Input = styled.input`
  width: 100%;
  border: 1px solid #94a3b8;
  height: 35px;
  border-radius: 4px;
  font-size: 15px;
  outline: none;
  padding-left: 10px;
`
export const InputBox = styled.div`
  text-align: left;
  margin-top: 15px;
  line-height: 32px;
`

export const CheckboxInput = styled.input`
  display: flex;
  height: 20px;
  width: 20px;
  border-radius: 4px;
`

export const CheckboxInputBox = styled(InputBox)`
  display: flex;
  align-items: center;
`
export const LoginButton = styled.button`
  width: 100%;
  background-color: #3b82f6;
  border-radius: 7px;
  border: 0px;
  outline: none;
  color: white;
  margin-top: 15px;
  height: 34px;
  cursor: pointer;
  font-weight: bold;
`
export const ErrorMsg = styled.p`
  color: red;
`
