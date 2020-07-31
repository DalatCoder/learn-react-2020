import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';

class App extends React.Component {
  static contextType = LanguageContext;

  state = { language: 'english' };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    const text =
      this.state.language === 'english'
        ? 'Select a language'
        : 'Chọn ngôn ngữ hiển thị';

    return (
      <div className="ui container">
        <div>
          <span className="header">{text}: </span>
          <i
            className="flag us"
            onClick={() => this.onLanguageChange('english')}
            style={{ cursor: 'pointer' }}
          />
          <i
            className="flag vn"
            onClick={() => this.onLanguageChange('vietnamese')}
            style={{ cursor: 'pointer' }}
          />
        </div>

        <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
