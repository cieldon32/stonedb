import React, { useState, useEffect } from "react";
import {unified} from 'unified';
import remarkParse from 'remark-parse';
import {flatten} from 'ramda';
import {pickWhen} from '@site/src/utils';
import {Step} from './step';
import {data} from './data';
import { Title, Context, Panel } from "../styles";

const RoadMap: React.FC<any> = ({type, children}) => {
  const [title, setTitle] = useState(null);
  const [list, setList] = useState<any[]>(null);

  function reduceParagraph(list: any[]) {
    if(!list.length) {
      return [];
    }
    return pickWhen('paragraph', (acc, cur) => {
      const {value} = cur.children?.[0];
      acc.push(value);
      return acc;
    }, list);
  }

  function reduceList(arr: any[]) {
    return arr.map((item) => {
      const title = item.children[0] && item.children[0].type === 'paragraph' ? item.children[0].children[0]?.value : '';
      const nodeList = item.children[1]?.children;
      const res =  nodeList?.map((data) => {
        const [title, desc, time] = reduceParagraph(data.children);
        return {
          title, desc, time
        }
      });
      return {
        title,
        list: res
      }
    });
  }

  function reduceNode(node: any){
    return node.children.map((data: any) => reduceList(data.children));
  }

  function init() {
    const node: any = unified().use(remarkParse).parse(children);
    const data = flatten(reduceNode(node))[0];
    setTitle(data?.title);
    setList(data?.list);
  }

  useEffect(() => {
    init();
  }, []);
  return (
    <Panel>
      <Context>
        <Title>{title}</Title>
      </Context>
      {
        list?.length ? (
          <Step dataSource={list} value={type} />
        ) : null
      }
      
    </Panel>
  );
};
export default RoadMap;
