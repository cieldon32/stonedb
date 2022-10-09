import React, {useEffect, useState} from 'react';
import Layout from '@theme/Layout'
import BrowserOnly from '@docusaurus/BrowserOnly';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Download from "@site/src/components/download";
import Feature from '@site/src/components/feature';
import RoadMap from '@site/src/components/roadMap';
import ShowCase from '@site/src/components/showCase';
import Concat from '@site/src/components/contact';
import Customers from '@site/src/components/customers';
import Panel from '../styles/panel';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout title={`${siteConfig.title} - A Real-time HTAP Database`}>
      <BrowserOnly>
        {
          () => (
            <>
              <Panel>
                <Download />
              </Panel>
              <Panel color='#232326'>
                <Feature />
              </Panel>
              <Panel>
                <RoadMap />
              </Panel>
              <Panel color='#232326'>
                <ShowCase />
              </Panel>
              <Panel size="small">
                <Customers />
              </Panel>
              <Panel >
                <Concat />
              </Panel>
            </>
          )
        }
      </BrowserOnly>
    </Layout>
  );
}
