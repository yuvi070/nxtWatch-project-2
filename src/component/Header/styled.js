import styled from 'styled-components'

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: auto;
  align-items: center;
`

export const HeaderLogo = styled.img`
  width: 150px;
`
export const AccountImage = styled.img`
  width: 45px;
`

export const HeaderHome = styled.div`
  padding-top: 20px;
  margin-bottom: 20px;
`

export const AccountSection = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
  justify-content: space-around;
`
export const PopupDiv = styled.div`
  padding: 15px;
  border-radius: 9px;
  width: 100%;
  height: 100px;
  background-color: yellowgreen;
`
export const PopupButtonDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`
export const PopupButton = styled.button`
  background-color:{props ()= > 
    props.outline?'transparent': 'blue';
  }
  cursor:pointer;

`
