import React from 'react';
import './Button.css';

interface ButtonProps {
  label?: string;
  wide?: boolean;
  icon?: string;
  filled?: boolean;
  centered?: boolean;
  onClick?: () => void;
  onKeyPress?: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className={
        `button` +
        `${props.wide ? ' button_wide' : ''}` +
        `${props.filled ? ' button_filled' : ''}` +
        `${props.centered ? ' button_center-align' : ''}`
      }
      onClick={props.onClick}
      onKeyPress={props.onKeyPress}
    >
      {props.icon ? <img className={'button__icon'} src={props.icon} alt=""/> : ''}
      {props.label}
    </button>
  );
};

export default Button;
