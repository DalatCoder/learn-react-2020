import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
  renderSubmit(value) {
    return value === 'english' ? 'Submit' : 'Xác nhận';
  }

  render() {
    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>{this.renderSubmit}</LanguageContext.Consumer>
      </button>
    );
  }
}

export default Button;
