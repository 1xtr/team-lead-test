import * as React from "react";
import Page, {Grid, GridColumn} from '@atlaskit/page'
import Toggle from '@atlaskit/toggle'

export default function AppSettings() {
  return (
    <Page>
      <Grid>
        <GridColumn>
          <>
            <label htmlFor="toggle-large">Allow pull requests</label>
            <Toggle id="toggle-large" size="large" defaultChecked />
          </>
          
        </GridColumn>
      </Grid>
    </Page>
  )
}
