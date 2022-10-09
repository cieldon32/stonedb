import React from 'react';
import {IMore, SMore} from './interface';
import { Button, ButtonIcon, ListWrap, MostWrap, ValueWrap, ValueIcon } from "./styles";


export class More extends React.Component {

  static state: any;

  constructor(props: any) {
    super(props);
    this.state = {
      open: false
    }
  }

  static List({dataSource}: any) {
    return (
      <ListWrap >
        {
          dataSource?.map((data: JSX.Element, index: number) => (
            <li key={index}>{data}</li>
          ))
        }
      </ListWrap>
    )
  }

  static Value({title, list}: any) {
    return (
      <dl>
        <dt>{title}</dt>
        <dd>
          {
            list?.map(({icon, title}: any, index: number) => (
              <ValueWrap key={index}>
                <ValueIcon name={icon} />
                <p>{title}</p>
              </ValueWrap>
            ))
          }
        </dd>
      </dl>
    )
  }

  onToggle = () => {
    this.setState(({open}: any) => ({
      open: !open
    }))
  }

  override render() {
    return (
      <MostWrap open={this.state.open}>
        {this.props.children}
        <Button onClick={this.onToggle}>
          {this.state.open ? '收起' : '展开'}
          <ButtonIcon open={this.state.open} name="BottomOutlined" />
        </Button>
      </MostWrap>
    )
  }
}