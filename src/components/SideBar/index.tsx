import React from 'react';

import StickyBox from 'react-sticky-box';

import * as S from './styles';
import List from '../List';
import FollowSugestion from '../FollowSugestion';
import News from '../News';

const SideBar: React.FC = () => {
  return (
    <S.Container>
      <S.SearchWrapper>
        <S.SearchInput placeholder="Buscar no twitter" />
        <S.SearchIcon />
      </S.SearchWrapper>
      <StickyBox>
        <S.Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSugestion name="Bill Gates" nickname="@billgates" />,
              <FollowSugestion name="Elon Musk" nickname="@elonmusk" />,
              <FollowSugestion
                name="Mark Zuckenberg"
                nickname="@markzuckenberg"
              />,
            ]}
          />

          <List
            title="Assuntos do momento"
            elements={[<News />, <News />, <News />, <News />]}
          />

          <List
            title="Assuntos do momento"
            elements={[<News />, <News />, <News />, <News />]}
          />

          <List
            title="Assuntos do momento"
            elements={[<News />, <News />, <News />, <News />]}
          />
        </S.Body>
      </StickyBox>
    </S.Container>
  );
};

export default SideBar;
