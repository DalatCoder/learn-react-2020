import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamEdit extends React.Component {
  componentDidMount() {
    const streamId = this.props.match.params.id;
    this.props.fetchStream(streamId);
  }

  render() {
    console.log(this.props.stream);
    return <div>StreamEdit</div>;
  }
}
const mapStateToProps = (state, props) => {
  const streamId = props.match.params.id;
  return {
    stream: state.streams[streamId]
  };
};

export default connect(mapStateToProps, { fetchStream })(StreamEdit);
