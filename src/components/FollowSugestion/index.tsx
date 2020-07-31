import React from 'react';

import * as S from './styles';

interface Props {
  name: string;
  nickname: string;
}

const FollowSugestion: React.FC<Props> = ({ name, nickname }) => {
  return (
    <S.Container>
      <div>
        <S.Avatar />

        <S.Info>
          <strong>{name}</strong>
          <span>{nickname}</span>
        </S.Info>
      </div>
      <S.FollowButton outlined>Seguir</S.FollowButton>
    </S.Container>
  );
};

export default FollowSugestion;
