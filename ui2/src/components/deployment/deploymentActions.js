import { GET_SERVICES_REQUEST, GET_SERVICES_SUCCESS, GET_SERVICES_FAILURE } from '../../actions';
import {
  GET_SERVICES_STACK_REQUEST,
  GET_SERVICES_STACK_SUCCESS,
  GET_SERVICES_STACK_FAILURE,
  SELECT_SERVICE,
    GET_ENV_REQUEST,
    GET_ENV_SUCCESS,
    GET_ENV_FAILURE,
    GET_ENV_STACK_REQUEST,
    GET_ENV_STACK_SUCCESS,
    GET_ENV_STACK_FAILURE
} from './constants';
import * as API from '../../api/api';
import { servicesMock, stackServicesMock, envMock, stackEnvironmentsMock } from './tempMock';

export const getServices = () => {
  return async dispatch => {
    dispatch({
      type: GET_SERVICES_REQUEST,
    });
    try {
      const data = await API.getServices();
      dispatch({
        type: GET_SERVICES_SUCCESS,
        // payload: data,
        payload: servicesMock,
      });
    } catch (error) {
      dispatch({
        type: GET_SERVICES_FAILURE,
        error,
      });
    }
  };
};

export const getServicesStack = () => {
  return async dispatch => {
    dispatch({
      type: GET_SERVICES_STACK_REQUEST,
    });
    try {
      const data = await API.getServicesStack();
      dispatch({
        type: GET_SERVICES_STACK_SUCCESS,
        // payload: data,
        payload: stackServicesMock,
      });
    } catch (error) {
      dispatch({
        type: GET_SERVICES_STACK_FAILURE,
        error,
      });
    }
  };
};

export const getEnvironment = () => {
  return async dispatch => {
    dispatch({
      type: GET_ENV_REQUEST,
    });
    try {
      const data = await API.getEnvironment();
      dispatch({
        type: GET_ENV_SUCCESS,
        // payload: data,
        payload: envMock,
      });
    } catch (error) {
      dispatch({
        type: GET_ENV_FAILURE,
        error,
      });
    }
  };
};

export const getEnvironmentsStack = () => {
  return async dispatch => {
    dispatch({
      type: GET_ENV_STACK_REQUEST,
    });
    try {
      const data = await API.getEnvironmentsStack();
      dispatch({
        type: GET_ENV_STACK_SUCCESS,
        // payload: data,
        payload: stackEnvironmentsMock,
      });
    } catch (error) {
      dispatch({
        type: GET_ENV_STACK_FAILURE,
        error,
      });
    }
  };
};

export const selectServices = (servicesId) => {
  return dispatch => {
    dispatch({
      type: SELECT_SERVICE,
      payload: servicesId,
    });
  };
};