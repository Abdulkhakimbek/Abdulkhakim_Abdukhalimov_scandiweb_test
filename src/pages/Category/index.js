import React from "react";
import * as Styled from "./style";
import Card from "../../components/Card";

import { CATEGORIES } from '../../hooks/queries/useCategoriesQuery';
import { Query } from '@apollo/client/react/components';

class Category extends React.Component {

  render() {
    return (
      <Styled.Category>
        <Styled.CategoryContent>
          <Styled.CategoryName>Category Name</Styled.CategoryName>

          <Query query={CATEGORIES}>
            {({ loading, error, data }) => {
              if (error) return <h1>Error...</h1>;
              if (loading || !data) return <h1>Loading...</h1>;

              return (
                <Styled.Cards>
                  {data.category.products.map(item => (
                    <Card
                      ImgSrc={item.gallery[0]}
                      ProductName={item.name}
                      ProductPrice={item.prices[0].amount}
                    />
                  ))}
                </Styled.Cards>);
            }}
          </Query>

        </Styled.CategoryContent>
      </Styled.Category>
    );
  }
}

export default Category;