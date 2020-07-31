import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
  // Hooks up LanguageContext to Button component
  static contextType = LanguageContext;

  render() {
    const text = this.context === 'english' ? 'Submit' : 'Xác nhận';
    return <button className="ui button primary">{text}</button>;
  }
}

// Button.contextType = LanguageContext;

export default Button;
