import React from "react";
import * as Styled from "./style";

class Button extends React.Component {

  render() {
    return (
      <Styled.Button
        {...this.props}
        onClick={this.props.onClick}
        disabled={this.props.disabled}
        customStyles={this.props.customStyles}
        attr={this.props.attr}
      >
        {this.props.icon && this.props.icon}
        {this.props.children}
        {this.props.rightIcon && this.props.rightIcon}
      </Styled.Button>
    );
  }
}

export default Button;