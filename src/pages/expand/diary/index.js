import React, { memo } from 'react'

import { UngroupOutlined } from "@ant-design/icons"
import { PageWrapper, PageHeader, PageContent, ArticleWrap } from "./style";

export default memo(() => {
  return (
    <PageWrapper>
      <PageHeader>
        {/* <div className=""></div> */}
        <img className="logo" src="https://z4a.net/images/2022/11/03/LogoMakr-1U8snf.png" alt="" />
        <UngroupOutlined style={{ color: '#008cff' }} />
      </PageHeader>
      <PageContent>
        <ArticleWrap>
          <h1>记事</h1>
          <p className='info-row'>由 <span className='info-tip'>ibireme</span> | 2017-09-01 | <span className='info-tip'>日常</span></p>
          <p className='paragraph'>一年半前刚搬到这儿的时候，同伴们兴致勃勃地讨论着各种出游计划，大家建了个群，名字就叫“霓虹国出游计划委员会”。然而在接下来的日子里，有的人离职了，有的人刚入职，有的人生病了，渐渐地，这件事仿佛被忘记了，“出游计划委员会”也变成了日常聊天的地方。两个月前，有谁忽然提起了这件事，我才意识到时间已经过去那么久了。大家规划了下时间，又找人咨询了签证事宜，多番努力下，出游计划终于进行了下去。</p>
        </ArticleWrap>
      </PageContent>
    </PageWrapper>
  )
})
