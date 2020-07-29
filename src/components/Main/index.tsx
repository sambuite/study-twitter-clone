import React from 'react';

import ProfileMain from '../ProfileMain';

import * as S from './styles';

const Main: React.FC = () => {
  return (
    <S.Container>
      <S.Header>
        <button>
          <S.BackIcon />
        </button>

        <S.ProfileInfo>
          <strong>Murilo Sambuite</strong>
          <span>316 Tweets</span>
        </S.ProfileInfo>
      </S.Header>

      <ProfileMain />

      <S.BottomMenu>
        <S.HomeIcon />
        <S.SearchIcon />
        <S.BellIcon />
        <S.EmailIcon />
      </S.BottomMenu>
    </S.Container>
  );
};

export default Main;
