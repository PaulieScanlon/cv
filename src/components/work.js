import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

// import { Dump } from '../util/helpers'
import WorkItem from './workItem'

import { ItemWrapper as IW } from './shared'

const WorkWrapper = styled(IW)`
  grid-area: wo;
`

const Work = ({ data }) => {
  const { work } = data.cvDataCv
  // return <Dump props={work} />
  return (
    <WorkWrapper>
      {work.map((item, index) => {
        return <WorkItem key={index} workItemData={item} />
      })}
    </WorkWrapper>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query Work {
        cvDataCv {
          work {
            company
            position
            website
            startDate
            endDate
            summary
            highlights
          }
        }
      }
    `}
    render={data => <Work data={data} {...props} />}
  />
)