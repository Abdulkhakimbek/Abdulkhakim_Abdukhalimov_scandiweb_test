import React from "react";
import * as Styled from "./style";

class Button extends React.Component {

  render() {
    return (
      <Styled.Button>
        {this.props.Children}
      </Styled.Button>
    );
  }
}

export default Button;