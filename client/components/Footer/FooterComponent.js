import React from 'react';
import { Footer as MDLFooter, FooterSection } from 'react-mdl';
import './Footer.scss';

export default class Footer extends React.Component {
  static propTypes = {
    viewer: React.PropTypes.object.isRequired,
  };

  render() {
    return (
      <MDLFooter size='mini'>
        <FooterSection type='middle'>
          <span>Handcrafted with ♥ by <a href={this.props.viewer.website}> @{this.props.viewer.username}</a></span>
        </FooterSection>
      </MDLFooter>
    );
  }
}
