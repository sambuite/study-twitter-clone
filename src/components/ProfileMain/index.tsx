import React from 'react';

import Feed from '../Feed';

import * as S from './styles';

const ProfileMain: React.FC = () => {
  return (
    <S.Container>
      <S.Banner>
        <S.Avatar />
      </S.Banner>

      <S.ProfileData>
        <S.EditButton outlined> Editar Perfil</S.EditButton>

        <h1>Murilo Sambuite</h1>
        <h2>@murilosambuite</h2>

        <p>
          Developer at <a href="#">@World</a>
        </p>

        <ul>
          <li>
            <S.LocationIcon />
            Sergipe, Brasil
          </li>
          <li>
            <S.CakeIcon />
            Nascido(a) em 16 de julho de 2000
          </li>
        </ul>

        <S.Followage>
          <span>
            seguindo <strong>103</strong>
          </span>
          <span>
            <strong>163 </strong> seguidores
          </span>
        </S.Followage>
      </S.ProfileData>
      <Feed />
    </S.Container>
  );
};

export default ProfileMain;
