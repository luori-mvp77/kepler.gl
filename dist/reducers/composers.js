'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _compostedUpdaters;

var _actionTypes = require('../constants/action-types');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

var _mapStateUpdaters = require('./map-state-updaters');

var _uiStateUpdaters = require('./ui-state-updaters');

var _visStateUpdaters = require('./vis-state-updaters');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// compose action to apply result multiple reducers, with the output of one

/**
 * Apply map bounds to mapState from received vis data
 * @param state
 * @param action
 * @returns {{visState, mapState: {latitude, longitude, zoom}}}
 */
var updateVisDataComposed = function updateVisDataComposed(state, action) {
  var _updateVisDataUpdater = (0, _visStateUpdaters.updateVisDataUpdater)(state.visState, action),
      visState = _updateVisDataUpdater.visState,
      bounds = _updateVisDataUpdater.bounds;

  return (0, _extends3.default)({}, state, {
    visState: visState,
    mapState: bounds ? (0, _mapStateUpdaters.fitBoundsUpdater)(state.mapState, {
      payload: bounds
    }) : state.mapState,
    uiState: (0, _uiStateUpdaters.toggleModalUpdater)(state.uiState, { payload: null })
  });
};

/**
 * Combine data and configuration update in a single action
 * @param state
 * @param action
 * @returns {{}}
 */
var updateVisDataAndConfigComposed = function updateVisDataAndConfigComposed(state, action) {
  var newCustomVisState = (0, _visStateUpdaters.receiveMapConfigUpdater)(state, { payload: (0, _extends3.default)({}, action.appConfig) });

  var newState = (0, _extends3.default)({}, state, {
    visState: newCustomVisState
  });

  return (0, _extends3.default)({}, newState, updateVisDataComposed(newState, { datasets: action.datasets }));
};

var compostedUpdaters = (_compostedUpdaters = {}, _compostedUpdaters[_actionTypes2.default.UPDATE_VIS_DATA] = updateVisDataComposed, _compostedUpdaters[_actionTypes2.default.UPDATE_VIS_DATA_CONFIG] = updateVisDataAndConfigComposed, _compostedUpdaters);

exports.default = compostedUpdaters;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9jb21wb3NlcnMuanMiXSwibmFtZXMiOlsidXBkYXRlVmlzRGF0YUNvbXBvc2VkIiwic3RhdGUiLCJhY3Rpb24iLCJ2aXNTdGF0ZSIsImJvdW5kcyIsIm1hcFN0YXRlIiwicGF5bG9hZCIsInVpU3RhdGUiLCJ1cGRhdGVWaXNEYXRhQW5kQ29uZmlnQ29tcG9zZWQiLCJuZXdDdXN0b21WaXNTdGF0ZSIsImFwcENvbmZpZyIsIm5ld1N0YXRlIiwiZGF0YXNldHMiLCJjb21wb3N0ZWRVcGRhdGVycyIsIlVQREFURV9WSVNfREFUQSIsIlVQREFURV9WSVNfREFUQV9DT05GSUciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQTs7QUFFQTs7Ozs7O0FBTUEsSUFBTUEsd0JBQXdCLFNBQXhCQSxxQkFBd0IsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQUEsOEJBQ3BCLDRDQUFxQkQsTUFBTUUsUUFBM0IsRUFBcUNELE1BQXJDLENBRG9CO0FBQUEsTUFDeENDLFFBRHdDLHlCQUN4Q0EsUUFEd0M7QUFBQSxNQUM5QkMsTUFEOEIseUJBQzlCQSxNQUQ4Qjs7QUFFL0Msb0NBQ0tILEtBREw7QUFFRUUsc0JBRkY7QUFHRUUsY0FBVUQsU0FDTix3Q0FBaUJILE1BQU1JLFFBQXZCLEVBQWlDO0FBQy9CQyxlQUFTRjtBQURzQixLQUFqQyxDQURNLEdBSU5ILE1BQU1JLFFBUFo7QUFRRUUsYUFBUyx5Q0FBbUJOLE1BQU1NLE9BQXpCLEVBQWtDLEVBQUNELFNBQVMsSUFBVixFQUFsQztBQVJYO0FBVUQsQ0FaRDs7QUFjQTs7Ozs7O0FBTUEsSUFBTUUsaUNBQWlDLFNBQWpDQSw4QkFBaUMsQ0FBQ1AsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ3hELE1BQU1PLG9CQUFvQiwrQ0FBd0JSLEtBQXhCLEVBQStCLEVBQUNLLG9DQUFhSixPQUFPUSxTQUFwQixDQUFELEVBQS9CLENBQTFCOztBQUVBLE1BQU1DLHNDQUNEVixLQURDO0FBRUpFLGNBQVVNO0FBRk4sSUFBTjs7QUFLQSxvQ0FDS0UsUUFETCxFQUVLWCxzQkFBc0JXLFFBQXRCLEVBQWdDLEVBQUNDLFVBQVVWLE9BQU9VLFFBQWxCLEVBQWhDLENBRkw7QUFJRCxDQVpEOztBQWNBLElBQU1DLGlFQUNILHNCQUFZQyxlQURULElBQzJCZCxxQkFEM0IscUJBRUgsc0JBQVllLHNCQUZULElBRWtDUCw4QkFGbEMscUJBQU47O2tCQUtlSyxpQiIsImZpbGUiOiJjb21wb3NlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uVHlwZXMgZnJvbSAnY29uc3RhbnRzL2FjdGlvbi10eXBlcyc7XG5pbXBvcnQge2ZpdEJvdW5kc1VwZGF0ZXJ9IGZyb20gJy4vbWFwLXN0YXRlLXVwZGF0ZXJzJztcbmltcG9ydCB7dG9nZ2xlTW9kYWxVcGRhdGVyfSBmcm9tICcuL3VpLXN0YXRlLXVwZGF0ZXJzJztcbmltcG9ydCB7cmVjZWl2ZU1hcENvbmZpZ1VwZGF0ZXIsIHJlc2V0TWFwQ29uZmlnVXBkYXRlciwgdXBkYXRlVmlzRGF0YVVwZGF0ZXJ9IGZyb20gJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJztcblxuLy8gY29tcG9zZSBhY3Rpb24gdG8gYXBwbHkgcmVzdWx0IG11bHRpcGxlIHJlZHVjZXJzLCB3aXRoIHRoZSBvdXRwdXQgb2Ygb25lXG5cbi8qKlxuICogQXBwbHkgbWFwIGJvdW5kcyB0byBtYXBTdGF0ZSBmcm9tIHJlY2VpdmVkIHZpcyBkYXRhXG4gKiBAcGFyYW0gc3RhdGVcbiAqIEBwYXJhbSBhY3Rpb25cbiAqIEByZXR1cm5zIHt7dmlzU3RhdGUsIG1hcFN0YXRlOiB7bGF0aXR1ZGUsIGxvbmdpdHVkZSwgem9vbX19fVxuICovXG5jb25zdCB1cGRhdGVWaXNEYXRhQ29tcG9zZWQgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBjb25zdCB7dmlzU3RhdGUsIGJvdW5kc30gPSB1cGRhdGVWaXNEYXRhVXBkYXRlcihzdGF0ZS52aXNTdGF0ZSwgYWN0aW9uKTtcbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICB2aXNTdGF0ZSxcbiAgICBtYXBTdGF0ZTogYm91bmRzXG4gICAgICA/IGZpdEJvdW5kc1VwZGF0ZXIoc3RhdGUubWFwU3RhdGUsIHtcbiAgICAgICAgICBwYXlsb2FkOiBib3VuZHNcbiAgICAgICAgfSlcbiAgICAgIDogc3RhdGUubWFwU3RhdGUsXG4gICAgdWlTdGF0ZTogdG9nZ2xlTW9kYWxVcGRhdGVyKHN0YXRlLnVpU3RhdGUsIHtwYXlsb2FkOiBudWxsfSlcbiAgfTtcbn07XG5cbi8qKlxuICogQ29tYmluZSBkYXRhIGFuZCBjb25maWd1cmF0aW9uIHVwZGF0ZSBpbiBhIHNpbmdsZSBhY3Rpb25cbiAqIEBwYXJhbSBzdGF0ZVxuICogQHBhcmFtIGFjdGlvblxuICogQHJldHVybnMge3t9fVxuICovXG5jb25zdCB1cGRhdGVWaXNEYXRhQW5kQ29uZmlnQ29tcG9zZWQgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBjb25zdCBuZXdDdXN0b21WaXNTdGF0ZSA9IHJlY2VpdmVNYXBDb25maWdVcGRhdGVyKHN0YXRlLCB7cGF5bG9hZDogey4uLmFjdGlvbi5hcHBDb25maWd9fSk7XG5cbiAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgLi4uc3RhdGUsXG4gICAgdmlzU3RhdGU6IG5ld0N1c3RvbVZpc1N0YXRlXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5uZXdTdGF0ZSxcbiAgICAuLi51cGRhdGVWaXNEYXRhQ29tcG9zZWQobmV3U3RhdGUsIHtkYXRhc2V0czogYWN0aW9uLmRhdGFzZXRzfSlcbiAgfTtcbn07XG5cbmNvbnN0IGNvbXBvc3RlZFVwZGF0ZXJzID0ge1xuICBbQWN0aW9uVHlwZXMuVVBEQVRFX1ZJU19EQVRBXTogdXBkYXRlVmlzRGF0YUNvbXBvc2VkLFxuICBbQWN0aW9uVHlwZXMuVVBEQVRFX1ZJU19EQVRBX0NPTkZJR106IHVwZGF0ZVZpc0RhdGFBbmRDb25maWdDb21wb3NlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zdGVkVXBkYXRlcnM7XG4iXX0=