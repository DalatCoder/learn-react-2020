import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  onFormSubmit = formValues => {
    console.log(formValues);
  };

  renderInput({ input, label }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} autoComplete="off" />
      </div>
    );
  }

  render() {
    return (
      <form
        className="ui form"
        onSubmit={this.props.handleSubmit(this.onFormSubmit)}
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button type="submit" className="ui button primary">
          Submit
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'streamCreate'
})(StreamCreate);
