import { StyleSheet } from '../../dist/react-pdf.es.js';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    '@media max-width: 400': {
      flexDirection: 'column',
    },
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  text: {
    "font-size": "18px"
  }

});
