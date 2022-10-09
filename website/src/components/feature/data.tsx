import React from 'react';
import Translate from "@docusaurus/Translate";

export const data = [
  {
    icon: 'Features_sqlFilled',
    title: (
      <Translate id="home.compatible.title">
        100%兼容MySQL 5.7
      </Translate>
    ),
    desc: (
      <Translate id="home.compatible.desc">
        基于MySQL5.7版本开发，完全兼容所有MySQL语法与接口，支持从MySQL直接更新升级
      </Translate>
    ),
    list: [
      (<Translate id="home.compatible.list0">HTAP for MySQL</Translate>),
      (<Translate id="home.compatible.list1">HTAP for MySQL</Translate>),
    ],
    values: [
      {
        icon: 'Features_sqlFilled',
        title: (
          <Translate id="home.compatible.title">
            100%兼容MySQL 5.7
          </Translate>
        ),
      },
      {
        icon: 'Features_sqlFilled',
        title: (
          <Translate id="home.compatible.title">
            100%兼容MySQL 5.7
          </Translate>
        ),
      },
      {
        icon: 'Features_sqlFilled',
        title: (
          <Translate id="home.compatible.title">
            100%兼容MySQL 5.7
          </Translate>
        ),
      }
    ]
  },
  {
    icon: 'Features_htapFilled',
    title: (<Translate id="home.hybrid.title">混合事务和分析处理</Translate>),
    desc: (<Translate id="home.hybrid.desc">
    在MySQL事务处理（TP）功能的基础上，增加分析处理（AP）功能
  </Translate>)
  },
  {
    icon: 'Features_openFilled',
    title: (<Translate id="home.realTime.title">实时分析，低时延</Translate>),
    desc: (
      <Translate id="home.realTime.desc">
        无需数据提取，直接实时分析，分析操作几乎无延时
      </Translate>
    )
  },
  {
    icon: 'Features_searchFilled',
    title: (<Translate id="home.query.title">10倍查询速度</Translate>),
    desc: (<Translate id="home.query.desc">
    复杂query查询速度可提升10倍
  </Translate>)
  },
  {
    icon: 'Features_inputFilled',
    title: (<Translate id="home.initial.title">10倍初始导入速度</Translate>),
    desc: (<Translate id="home.initial.desc">
    数据库初始导入速度可提升10倍
  </Translate>)
  },
  {
    icon: 'Features_storageFilled',
    title: (<Translate id="home.storage.title">1/10 存储占用</Translate>),
    desc: (<Translate id="home.storage.desc">
    高效压缩算法，节省大量存储空间
  </Translate>)
  }
]