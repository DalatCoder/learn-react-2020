import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
  static contextType = LanguageContext;

  render() {
    const text = this.context === 'english' ? 'Name' : 'Tên';
    return (
      <div className="ui field">
        <label htmlFor="name">{text}</label>
        <input type="text" id="name" />
      </div>
    );
  }
}

export default Field;
