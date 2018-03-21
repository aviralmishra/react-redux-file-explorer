import React from 'react';
import PropTypes from 'prop-types';

class ContentPanel extends React.Component {
  render() {
    return (
      <div dangerouslySetInnerHTML={this.createMarkup(this.props.file.data)}></div>
    );
  }

  createMarkup(content) {
    return {__html: content};
  }
}

ContentPanel.propTypes = {
  file: PropTypes.object
};

export default ContentPanel;
