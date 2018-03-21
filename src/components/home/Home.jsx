import React, {Component} from 'react';

import {connect} from 'react-redux';

import ContentPanel from './../files/ContentPanel.jsx';
import ActionPanel from './../files/ActionPanel.jsx';

import {fetchFile} from '../../actions/FileActions';

class Home extends Component {
  componentDidMount() {
    this.props.fetchFile();
  }

  render() {
    return (
      <React.Fragment>
        <main className="app-content">
          <section className="file">
            <div className="navigation-bar">
              Nav links space
            </div>
            <div className="content-panels">
              <div className="text-panel">
                <ContentPanel file={this.props.file}/>
              </div>
              <div className="action-panel">
                <ActionPanel/>
              </div>
            </div>
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export function mapStateToProps({file}) {
  return {file};
}

export default connect(mapStateToProps, {fetchFile})(Home);
