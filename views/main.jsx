import * as React from 'react'
import {useEffect, useState} from 'react'
import DynamicTable from '@atlaskit/dynamic-table'
import Page, {Grid, GridColumn} from '@atlaskit/page'
import Tabs, {Tab, TabList, TabPanel} from '@atlaskit/tabs'
import AppLoader from '../components/AppLoader'
import PageHeader from '../components/PageHeader'

const head = {
  cells: [
    {
      key: 'id',
      content: 'ID',
    },
    {
      key: 'key',
      content: 'Key',
    },
    {
      key: 'name',
      content: 'Name',
    },
    {
      key: 'uuid',
      content: 'UUID',
    },
  ],
}

export default function mainApp() {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    AP.request('/rest/api/3/project/search')
      .then(({xhr: {responseText}}) => {
        const data = JSON.parse(responseText).values
        // console.log('projects', projects)
        // console.log('data', data)
        setProjects(data)
      })
      .catch(error => console.error(error))
    
  }, [])
  
  if (!projects) {
    return <AppLoader size="large"/>
  }
  
  const rows = projects.map((project, index) => ({
    key: 'row' + index,
    cells: [
      {key: project.id, content: project.id},
      {key: project.key, content: project.key},
      {key: project.name, content: project.name},
      {key: project.uuid, content: project.uuid},
    ],
  }))
  
  return (
    <Page>
      <Grid>
        <GridColumn medium={12}>
          <PageHeader/>
        </GridColumn>
        <GridColumn>
          <h1>Teamlead Task</h1>
          <hr/>
          User Projects data
          <Tabs id={'default'}>
            <TabList>
              {projects.map(p => (<Tab key={p.id}>{p.name}</Tab>))}
            </TabList>
            <TabPanel>
              <DynamicTable
                head={head}
                rows={rows}
                emptyView={<h2>You do not have any projects</h2>}
              />
            </TabPanel>
            <TabPanel>
              project 2
            </TabPanel>
          </Tabs>
        
        </GridColumn>
      </Grid>
    </Page>
  )
  
  
}
