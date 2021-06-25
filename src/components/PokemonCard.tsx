import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styled from 'styled-components';
import { MyPokemonContext } from '../contexts/MyPokemonContext';
import { PokemonListItem } from '../contexts/PokemonContext';
import { MyPokemonListItem } from '../contexts/MyPokemonContext';

const StyledPokemonCard = styled.div`
  display: block;
  border-radius: 20px;
  background: white;
  box-shadow: 0px 0px 10px 0px #e0e0e0;
  margin: 10px;
  margin-top: 20px;
  overflow: hidden;
  max-width: 150px;
  transition: 0.3s;
  cursor: pointer;
  user-select: none;
  border: 1px solid #d4d4d4;
  padding-bottom: 35px;

  @media only screen and (min-width: 800px) {
    margin: 20px;
    max-width: 192px;    
  }

  &:active {
    opacity: 0.3;
    transition: 0.03s;
  }

  .picture {
    height: 80px;
    padding: 10px;
    max-height: 300px;
    width: 145px;
    margin-bottom: 20px;

    span {
      
      width: 100%;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }

  .details {
    display: block;
    padding: 10px;

    .name {
      font-size: 15pt;
      font-weight: 500;
      margin-bottom: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      word-wrap: break-word;
      white-space: nowrap;
      text-transform: capitalize;
      text-align: center;
      margin-top: 10px;
    }

    .owned {
      color: #fff;
      text-align: center;
      background-color: #3faf48;
      width: 95px;
      margin: auto;
      border-radius: 20px;
      padding: 3px;
    }

    .nickname {
      text-align: left;

      .label {
        color: #606060;
        margin-top: 10px;
        font-size: 9pt;
      }

      .nickname-value {
        font-size: 8pt;
        font-weight: bold;
        color: #0098e1;
      }
    }
  }
`;

export interface Props extends RouteComponentProps {
  data: PokemonListItem | MyPokemonListItem;
}

const PokemonCard = (props: Props) => {
  const { data, history, location } = props;
  const { isOwned, myPokemons } = React.useContext(MyPokemonContext);

  let ownedPokemon: MyPokemonListItem | null = null;

  if (isOwned) {
    ownedPokemon = isOwned(data.name);
  }

  return (
    
    <StyledPokemonCard
      data-testid="pokemon-card"
      onClick={() => {
        history.push({
          pathname: `${location.pathname}/${data.name}`,
          state: {
            prevPath: location.pathname,
          },
        });
      }}
    >
      <div className="picture">
        <LazyLoadImage
          alt="profile picture"
          placeholderSrc="/images/placeholder.png"
          src={data.image_url}
          effect="blur"
        />
      </div>

      <div className="details">
        <div data-testid="pokemon-card-name" className="name">
          {data.name}
        </div>
        <div data-testid="pokemon-card-owned" className="owned">
          Owned : {myPokemons.filter(pokemon => pokemon.name.toLowerCase() == data.name.toLowerCase()).length}
        </div>
        {/* {ownedPokemon && (
          <div data-testid="pokemon-card-owned" className="owned">
            Owned
          </div>
        )} */}
        {/* {ownedPokemon && (
          <div className="nickname">
            <div className="label">Nickname</div>

            <div data-testid="pokemon-card-nickname" className="nickname-value">
              {ownedPokemon.nickname === ''
                ? "Haven't named"
                : ownedPokemon.nickname}
            </div>
          </div>
        )} */}
      </div>
    </StyledPokemonCard>
  );
};

export default withRouter(PokemonCard);
