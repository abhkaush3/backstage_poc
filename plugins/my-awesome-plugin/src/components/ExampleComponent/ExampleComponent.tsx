/*
 * Copyright 2023 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import {
  InfoCard,
  Header,
  Page,
  Content,
  ContentHeader,
  HeaderLabel,
  SupportButton,
} from '@backstage/core-components';
import { ExampleFetchComponent } from '../ExampleFetchComponent';

/* Updated Code */

import {
  Collapse,
  MenuList,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Badge,
} from '@material-ui/core';
import MoneyIcon from '@material-ui/icons/MonetizationOn';

export const ExampleComponent = () => (
  <Page themeId="tool">
    <Header
      title="Dummy Workflow Plugin!"
      subtitle="It Might have four components"
    >
      <HeaderLabel label="Owner" value="Team X" />
      <HeaderLabel label="Lifecycle" value="Alpha" />
    </Header>
    <Content>
      <ContentHeader title="">
        <SupportButton>A description of your plugin goes here.</SupportButton>
      </ContentHeader>
      <Grid container spacing={3} direction="column">
        <Grid item>
          <InfoCard title="Information card">
            <Typography variant="body1">
              All content should be wrapped in a card like this.
            </Typography>
          </InfoCard>
        </Grid>
        <Grid item>{/* <ExampleFetchComponent /> */}</Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={3}>
          <InfoCard>
            <Typography variant="body1">
              This is where different DataPipeline information points will go.
            </Typography>
            <MenuList>
              <MenuItem>
                <ListItemIcon>
                  <MoneyIcon />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography>This should be a Name</Typography>}
                />
              </MenuItem>
            </MenuList>
          </InfoCard>
        </Grid>
      </Grid>
    </Content>
  </Page>
);
