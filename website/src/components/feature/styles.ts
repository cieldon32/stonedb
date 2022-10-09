
import styled, { StyledComponent } from 'styled-components';
import Icon, {IIcon} from "@site/src/icon";

export const List = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  color: #fff;
  @media (max-width: 996px){
  }
`
export const Button = styled.button`
  padding: 0 10px;
  height: 24px;
  line-height: 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  border: none;
  overflow: hidden;
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
`

interface IButtonIcon {
  open?: boolean;
}

export const ButtonIcon: StyledComponent<typeof Icon, {}, IIcon & IButtonIcon> = styled(Icon)`
  font-size: 8px;
  fill: #ffffff;
  width: 14px;
  height: 14px;
  line-height: 14px;
  border-radius: 14px;
  text-align: center;
  margin-left: 5px;
  cursor: pointer;
  ${({open}: IButtonIcon) => open ? `transform: rotate(180deg)` : null}
`

export const ItemIcon = styled(Icon)`
  font-size: 90px;
  width: 90px;
  height: 90px;
  line-height: 90px;
`

export const P = styled.p`
  padding-left: 25px;
  display: flex;
  flex-direction: column;
  text-align: left;
`
export const ListWrap = styled.ul`
  text-align: left;
  list-style: none;
  padding-left: 155px;
  overflow: hidden;
  li:before{
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #646A7D;
    margin-right: 10px;
    border-radius: 10px;
  }
`
export const ValueWrap = styled.div`
  background: #232326;
  border-radius: 10px;
  padding: 10px;
  margin: 0 10px;
`

export const ValueIcon = styled(Icon)`
  font-size: 34px;
  width: 34px;
  height: 34px;
  line-height: 34px;
`

export const MostWrap: StyledComponent<"div", any, {open: boolean}, never> = styled.div`
  overflow: hidden;
  border-radius: 10px;
  ${({open}: any) => open ? `
    height: auto;
    ${ListWrap},
    dl{
      margin: 0;
      p{
        margin: 0;
      }
    }
  ` : `
    height: 0;
  `}
  dl{
    text-align: left;
    padding: 20px;
    dt{
      font-size: 16px;
      font-weight: 500;
      line-height: 22px;
      padding: 10px 0;
    }
    dd{
      display: flex;
      flex-direction: row;
      text-align: center;
      margin: 0 -10px;
    }
  }
`;

export const ItemContext = styled.div`
  
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  text-align: center;
`;

export const ItemWrap = styled.div`
  position: relative;
  color: #fff;
  height: 145px;
  cursor: pointer;
  border-radius: 10px;
  padding: 40px 35px;
  ${ListWrap},
  dl{
    background: #232326;
  }
  &:hover{
    background: #333336;
    ${Button} {
      background: #FFFFFF;
      color: #373C43;
    }
    ${ButtonIcon} {
      background: #E5E8F0;
      fill: #373C43;
    }
    ${ListWrap},
    dl{
      background: #333336;
    }
  }
  @media (max-width: 996px){
    width: 100%;
    padding: 14px;
  }
`