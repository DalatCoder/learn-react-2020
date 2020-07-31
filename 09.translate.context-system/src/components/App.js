import React from 'react';
import UserCreate from './UserCreate';

class App extends React.Component {
  state = { language: 'english' };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
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
        <UserCreate />
      </div>
    );
  }
}

export default App;
