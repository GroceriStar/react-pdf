/* eslint react/prop-types: 0, react/jsx-sort-props: 0 */

import React from 'react';
import GroceryList from './GroceryList';
import ReactPDF, { Page, Document } from '../../dist/react-pdf.es.js';


const doc = ( styles, name ) => (
  <Document>
    <Page size="A4" style={styles.page} wrap>
      <View style={styles.section}>
        <Text style={styles.text}>
          {name}
        </Text>
        <RenderLists groceryName2={name}/>
      </View>
    </Page>
  </Document>
);

ReactPDF.render(doc, `${__dirname}/output.pdf`);
