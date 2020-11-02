/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable import/extensions */
import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import { loadSuccess, loadFailure } from './actions';

export function* load() {
  try {
    const response = yield call(api.get, 'users/wrcrys/repos');
    yield put(loadSuccess(response.data));
  } catch (error) {
    yield put(loadFailure());
  }
}
