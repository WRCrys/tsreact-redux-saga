/* eslint-disable import/extensions */
// eslint-disable-next-line no-use-before-define
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '../../store';
import { Repository } from '../../store/ducks/repositories/types';
import * as RepositoryActions from '../../store/ducks/repositories/actions';

interface StateProps {
  repositories: Repository[];
}

interface DispatchProps {
  loadRequest(): void;
}

// interface OwnProps {

// }

type Props = StateProps & DispatchProps; // & OwnProps;

class RepositoryList extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
  }

  render() {
    const { repositories } = this.props;
    return <ul>{repositories.map((r) => <li key={r.id}>{r.name}</li>)}</ul>;
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(RepositoryActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);
