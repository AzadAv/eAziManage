import { Box } from '@mui/material';

import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import jsPDF from 'jspdf';
import React from 'react'
import ReactPDF from '@react-pdf/renderer';



// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);
function OrderLabel() {

  function save(){

    ReactPDF.render(<MyDocument />, `./example.pdf`);
  }
  
  return (
    <Box className='orderPdf'>
        
      <MyDocument />
       <button onClick={save}>Save</button>
    </Box>
  )
}

export default OrderLabel