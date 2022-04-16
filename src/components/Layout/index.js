import React from "react";
import * as Styled from "./style";
import Header from "./Header";
import Currency from "../Currency";

class Layout extends React.Component {
  render() {
    return (
      <Styled.Layout>
        <Header />
        <Styled.Content>{this.props.Children && this.props.Children}</Styled.Content>
      </Styled.Layout>
    );
  }
}

export default Layout;