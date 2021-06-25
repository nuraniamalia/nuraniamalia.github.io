import React from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import { MyPokemonContext } from '../contexts/MyPokemonContext';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import Pets from '@material-ui/icons/Pets';
import { fade, makeStyles } from '@material-ui/core/styles';
import { MainRouterContext } from '../contexts/MainRouterContext';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  && {
    text-decoration: none;
    color: #3faf48;
  }
`;
const StyledAppBar = styled(AppBar)`
  && {
    padding: 5px;
    background: #fff;
    color: #3faf48;
    font-weight: 600;
    font-size: 16pt;
    /* border-bottom: 1px solid #dadada; */
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.06),
      0px 4px 5px 0px rgba(0, 0, 0, 0), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
`;

const StyledToolbar = styled(Toolbar)`
  && {
    justify-content: space-between;
    min-height: 55px;
    min-width: 200px;

    .info {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      &:visited {
        text-decoration: none;
        color: inherit;
      }

      .title {
        margin-left: 20px;
        font-weight: bold;
        display: flex;
        width: 100px;
      }
    }
    .logo {
      display: none;
      @media only screen and (min-width: 800px) {
        display: block;
      }
    }
    
  }
`;

const StyledTypography = styled(Typography)`
  &&{
    font-size: 13pt;
    margin-left: 10px;
  }
`;

type Props = {
  component?: React.ReactNode;
};

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const CustomAppBar = (props: Props) => {
  const { selectedRoute } = React.useContext(MainRouterContext);
  const { component } = props;
  const { myPokemons } = React.useContext(MyPokemonContext);
  const classes = useStyles();
  
  return (
    <StyledAppBar position="fixed">
      
      <StyledToolbar>
        <StyledLink className="info" to="/">
          <div className="logo">
            <span>tokopokemon</span>
          </div>
          {/* <div className="tot">My Pokemon: {myPokemons.length}</div> */}
          <span data-testid="appbar-title" className="title">
            {selectedRoute && selectedRoute.label}
          </span>
        </StyledLink>

        {component}
        {/* <div>
          <IconButton aria-label="show 17 new notifications" color="inherit">
            Explore
          </IconButton>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="secondary">
              
              My Pokemon
            </Badge>
          </IconButton>
        </div> */}

{/* <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div> */}

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <StyledLink className="info" to="/mypokemons">
              {/* <IconButton aria-label="show 4 new mails" color="inherit"> */}
                <Badge badgeContent={myPokemons.length} color="secondary">
                  <Pets />
                  <StyledTypography className={classes.title}  noWrap>
                    My Pokemon
                  </StyledTypography>
                </Badge>
              {/* </IconButton> */}
            </StyledLink>
          </div>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default CustomAppBar;
