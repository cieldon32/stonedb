import styled, { StyledComponent } from 'styled-components';
import Icon, {IIcon} from "@site/src/icon";
import {Context} from '../../styles';

export const StepWrap = styled.div`
  width: 100%;
  position: relative;
  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background: #FC5A03;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 0;
  }
`;

const StepItemActive = `
  background: #FC5A03;
  box-shadow: 0px 5px 20px 0px rgba(252,90,3,0.4);
  dt, dd {
    color: #fff;
  }
`

const StepItemDisable = `
  background: #F2F3F7;
  dt, dd {
    color: #989CA8;
  }
`

const StepItemDefault = `
  background: #F2F3F7;
  dt{
    color: #373C43;
  }
  dd{
    p {
      color: #646A7D;
    }
    span{
      color: #FC5A03;
    }
  }
`

export const StepItemWrap: StyledComponent<"dl", any, {active?: boolean;disable?: boolean;}> = styled.dl`
  width: 300px;
  height: 320px;
  margin: 0 20px 0 0;
  border-radius: 10px;
  position: relative;
  overflow: visible;
  display: inline-flex;
  padding: 40px 20px 20px 20px;
  flex-direction: column;
  z-index: 1;
  &::before{
    content: ' ';
    display: block;
    width: 100%;
    height: 2px;
    background: #FC5A03;
    position: absolute;
    bottom: -48px;
    left: 0;
    z-index: 2;
  }
  &::after{
    content: ' ';
    display: block;
    width: 16px;
    height: 16px;
    background: #FC5A03;
    position: absolute;
    bottom: -55px;
    left: 50%;
    margin-left: -8px;
    z-index: 3;
    transform: rotate(134deg);
  }
  ${({disable}: any) => disable ? `
    &::before,
    &::after{
      background: #E5E8F0;
    }
  ` : null}
  dt{
    font-size: 22px;
    font-weight: 500;
    line-height: 30px;
    margin-bottom: 20px;
  }
  dd{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
      font-size: 18px;
      font-weight: 400;
      line-height: 30px;
    }
    span{
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
    }
  }
  ${({active, disable}: any) => active ? StepItemActive : disable ? StepItemDisable : StepItemDefault}  
`

export const StepContext = styled(Context)`
  height: 368px;
  overflow: visible;
  .wrap{
    width: 200%;
    z-index: 1;
    ${({scroll}: any) => `
      transform: translateX(-${scroll}px);
    `}
  }
`

export const ButtonWrap = styled.button`
  width: 50px;
  height: 50px;
  line-height: 50px;
  border-radius: 50px;
  background: #FFFFFF;
  color: #FC5A03;
  box-shadow: 0px 5px 20px 0px #E5E8F0;
  position: absolute;
  top: 50%;
  z-index: 2;
  ${({type}: any) => type === 'left' ? `
    left: 50px;
    transform: rotate(90deg);
  ` : `
    right: 50px;
    transform: rotate(270deg);
  `}
`


export const ButtonIcon = styled(Icon)`
  font-size: 14px;
  fill: #FC5A03;
  width: 14px;
  height: 14px;
  line-height: 14px;
  text-align: center;
  cursor: pointer;
`