import React from 'react';
import {
  Document,
  Page,
  View,
  StyleSheet
} from '@react-pdf/renderer';
import { Header } from './header';
import { Sidebar } from './sidebar';
import { MainContent } from './main-content';
import {
  title,
  author,
  creator,
  keywords,
} from './data/resume';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column', // Stack Header vertically above the body
  },
  body: {
    flexDirection: 'row', // Align Sidebar and Main Content side-by-side
    flexGrow: 1,          // Fill the remaining vertical space
  },
});

// Create Document Component
export const Resume = () => (
  <Document
    title={title}
    author={author}
    subject="A list of qualifications for a software development role."
    keywords={keywords}
    creator={creator}
    language="en-us"
    pageMode="fullScreen"
    pageLayout="singlePage"
  >
    <Page size="A4" style={styles.page}>
      <Header />
      <View style={styles.body}>
        <Sidebar />
        <MainContent />
      </View>
    </Page>
  </Document>
);
