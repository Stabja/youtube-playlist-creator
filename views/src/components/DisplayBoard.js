// eslint-disable-jsx-a11y/anchor-is-valid
import React from 'react';

export const DisplayBoard = ({ numberOfUsers, getAllUsers }) => {
  return (
    <div className="display-board">
      <h4>Users Created</h4>
      <div className="number">{numberOfUsers}</div>
      <div className="btn">
        <button
          type="button"
          onClick={(e) => getAllUsers()}
          className="btn btn-warning"
        >
          Get all Users
        </button>
      </div>
    </div>
  );
};
