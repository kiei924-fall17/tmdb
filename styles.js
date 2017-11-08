import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  movieNameInput: {
    flex: 1,
    backgroundColor: '#222',
    color: '#fff',
    width: '100%', 
    height: '100%', 
    borderWidth: 0,
    fontSize: 26,
    fontWeight: '300',
    textAlign: 'left',
    paddingLeft: 20
  },
  movie: {
    flex: 7,
    justifyContent: 'space-between',
    backgroundColor: '#000',
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
  },
  backdrop: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    opacity: 0.3
  },
  posterContainer: {
    flex: 4
  },
  poster: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: 'cover'
  },
  titleAndVotes: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'transparent'
  },
  title: {
    color: '#fff',
    flex: 4,
    fontSize: 30,
    fontWeight: '300'
  },
  votes: {
    color: '#fff',
    flex: 1,
    fontSize: 20,
    backgroundColor: '#F300CE',
    padding: 4,
    textAlign: 'center'
  },
  overview: {
    flex: 3,
    color: '#fff',
    width: 360,
    fontSize: 17,
    fontWeight: '300',
    lineHeight: 23,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'transparent'
  }
});

export default styles;