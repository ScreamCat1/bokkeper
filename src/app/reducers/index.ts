import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  buyVehicle
  }); 

  function buyVehicle(state, action) {
    switch(action.type) {
      case "BUY_VEHICLE":
        const { model, id } = action.data;
        return `${model} and ${id}`
      default:
        return false
    }
  }