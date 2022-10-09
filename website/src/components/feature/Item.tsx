import React from 'react';
import {More} from './more';
import {IItem} from './interface';
import { ItemWrap, ItemIcon, P, ItemContext } from "./styles";

export const Item: React.FC<IItem> = ({title, desc, icon, list, values}) => {
  return (
    <ItemWrap>
      <ItemContext>
        <ItemIcon name={icon} />
        <P>
          <b>{title}</b>
          <span>{desc}</span>
        </P>
      </ItemContext>
     
      <More>
        {list?.length ? (
          <More.List dataSource={list} />
        ) : null}
        {
          values?.list?.length ? (
            <More.Value {...values} />
          ) : null
        }
      </More>
    </ItemWrap>
  )
}