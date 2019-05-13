import { Title } from '@patternfly/react-core';
import * as H from '@syndesis/history';
import { CardGrid, Grid, ListView } from 'patternfly-react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { ButtonLink, PageSection } from '../Layout';
import { SimplePageHeader } from '../Shared';
import './Dashboard.css';

export interface IIntegrationsPageProps {
  linkToIntegrations: H.LocationDescriptor;
  linkToIntegrationCreation: H.LocationDescriptor;
  linkToConnections: H.LocationDescriptor;
  linkToConnectionCreation: H.LocationDescriptor;
  integrationsOverview: JSX.Element;
  connectionsOverview: JSX.Element;
  messagesOverview: JSX.Element;
  uptimeOverview: JSX.Element;
  topIntegrations: JSX.Element;
  integrationBoard: JSX.Element;
  integrationUpdates: JSX.Element;
  connections: JSX.Element;
  i18nConnections: string;
  i18nLinkCreateConnection: string;
  i18nLinkCreateIntegration: string;
  i18nLinkToConnections: string;
  i18nLinkToIntegrations: string;
  i18nTitle: string;
}

export class Dashboard extends React.PureComponent<IIntegrationsPageProps> {
  public render() {
    return (
      <>
        <SimplePageHeader i18nTitle={this.props.i18nTitle} titleSize={'xl'} />
        <PageSection>
          <Grid fluid={true}>
            <Grid.Row className={'show-grid dashboard__integrations__actions'}>
              <Grid.Col xs={6} xsOffset={6}>
                <ButtonLink
                  href={this.props.linkToIntegrationCreation}
                  as={'primary'}
                  className={'pull-right'}
                >
                  {this.props.i18nLinkCreateIntegration}
                </ButtonLink>
                <Link
                  to={this.props.linkToIntegrations}
                  className={'pull-right view'}
                >
                  {this.props.i18nLinkToIntegrations}
                </Link>
              </Grid.Col>
            </Grid.Row>

            <Grid.Row className={'dashboard__metrics'}>
              <CardGrid fluid={true} matchHeight={true}>
                <CardGrid.Row>
                  <CardGrid.Col sm={6} md={3}>
                    {this.props.integrationsOverview}
                  </CardGrid.Col>
                  <CardGrid.Col sm={6} md={3}>
                    {this.props.connectionsOverview}
                  </CardGrid.Col>
                  <CardGrid.Col sm={6} md={3}>
                    {this.props.messagesOverview}
                  </CardGrid.Col>
                  <CardGrid.Col sm={6} md={3}>
                    {this.props.uptimeOverview}
                  </CardGrid.Col>
                </CardGrid.Row>
              </CardGrid>
            </Grid.Row>

            <Grid.Row className={'dashboard__integrations'}>
              <Grid.Col sm={12} md={7}>
                {this.props.topIntegrations}
              </Grid.Col>
              <Grid.Col sm={12} md={5}>
                {this.props.integrationBoard}
              </Grid.Col>
              <Grid.Col sm={12} md={5}>
                <ListView>{this.props.integrationUpdates}</ListView>
              </Grid.Col>
            </Grid.Row>

            <Grid.Row className={'dashboard__connections__actions'}>
              <Title size={'lg'} className={'pull-left'}>
                {this.props.i18nConnections}
              </Title>
              <ButtonLink
                href={this.props.linkToConnectionCreation}
                as={'primary'}
                className={'pull-right'}
              >
                {this.props.i18nLinkCreateConnection}
              </ButtonLink>
              <Link
                to={this.props.linkToConnections}
                className={'pull-right view'}
              >
                {this.props.i18nLinkToConnections}
              </Link>
            </Grid.Row>

            <Grid.Row>
              <CardGrid fluid={true} matchHeight={true}>
                <CardGrid.Row>{this.props.connections}</CardGrid.Row>
              </CardGrid>
            </Grid.Row>
          </Grid>
        </PageSection>
      </>
    );
  }
}
