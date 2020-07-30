import React from 'react';

import * as S from './styles';

const Tweet: React.FC = () => {
  return (
    <S.Container>
      <S.Retweeted>
        <S.RetweetUpIcon />
        Você retweetou
      </S.Retweeted>

      <S.Body>
        <S.Avatar />

        <S.Content>
          <S.Header>
            <strong>World</strong>
            <span>@world</span>
            <S.Dot />
            <time>27 de jun</time>
          </S.Header>

          <S.Description>Lorem ipsum dolor 🎈</S.Description>

          <S.ImageContent />

          <S.Icons>
            <S.Status>
              <S.CommentIcon />
              18
            </S.Status>
            <S.Status>
              <S.RetweetIcon />
              18
            </S.Status>
            <S.Status>
              <S.LikeIcon />
              999
            </S.Status>
          </S.Icons>
        </S.Content>
      </S.Body>
    </S.Container>
  );
};

export default Tweet;
