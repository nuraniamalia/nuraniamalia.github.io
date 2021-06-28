# tokopokemon
# [DEMO](https://nuraniamalia.github.io/tokopokemon/index.html)
## Project Structure

- ``src/components`` contains all shared components
- ``src/contexts`` contains all contexts, could be represented as ViewModel
- ``src/screens`` contains all the screens inside this app, structured by route logic

## Libraries
- For the UI, I'm using `material-ui`
- Styling using `styled-components`
- State management using `React Context API`

## Architecture
I'm using (Model-View-ViewModel) as an app architecture. 
- The `Model` can be found at `https://pokeapi.co/api/v2/`.
- The `View` can be found at `screens`
- The `ViewModel` can be represented as the context itself. So all the requests can only be triggered from ViewModel. There's no way to direct interaction between Model and View
