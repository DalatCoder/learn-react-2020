import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
  componentDidMount() {
    this.streamId = this.props.match.params.id;
    this.props.fetchStream(this.streamId);
  }

  onFormSubmit = formValues => {
    this.props.editStream(this.streamId, formValues);
  };

  render() {
    const { stream } = this.props;

    if (!stream) {
      return <div>Loading...</div>;
    }
    // InitialValues is the special props for redux form to render initial
    // value on inputs InitialValues ==> ReduxForm ==> StreamForm
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={_.pick(stream, 'title', 'description')}
          onSubmit={this.onFormSubmit}
        />
      </div>
    );
  }
}
const mapStateToProps = (state, props) => {
  const streamId = props.match.params.id;
  return {
    stream: state.streams[streamId]
  };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
