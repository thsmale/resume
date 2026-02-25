import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from '@react-pdf/renderer';

import {
  universalStyles,
  backgroundBack,
  hpeBorderDefault,
} from './config';
import {
  openSourceProjects,
  workExperience,
  honorsAndAwards,
  volunteering,
} from './data/main-content';

const styles = StyleSheet.create({
  companyDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    ...universalStyles.h4
  },
  dateText: {
    fontStyle: 'italic',
    ...universalStyles.text
  },
  mainContent: {
    paddingTop: 7,
    paddingHorizontal: 10,
    gap: 16,
    width: '100%',
    backgroundColor: backgroundBack,
  },
  mainContentSubSection: {
    gap: 8
  },
  table: { 
    width: "100%", 
    borderStyle: "solid", 
  }, 
  tableRow: { 
    margin: "auto", 
    flexDirection: "row",
  }, 
  tableRowHeader: { 
    margin: "auto", 
    flexDirection: "row",
    borderBottom: hpeBorderDefault,
  }, 
  tableColLanguage: { 
    width: "15%", 
  }, 
  tableColDescription: { 
    width: "85%", 
  }, 
  tableCellLanguage: { 
    paddingVertical: 4,
    ...universalStyles.text,
    textAlign: 'left',
    paddingLeft: 4,
  },
  tableCellDescription: { 
    ...universalStyles.text,
    paddingVertical: 4,
    fontSize: 10, 
  },
})



export const MainContent = () => {
  return (
    <View style={styles.mainContent}>
      {/* Work Experience */}
      <View>
        <Text style={universalStyles.h3}>Work Experience</Text>
        <View style={styles.mainContentSubSection}>
          {workExperience.map((item, index) => (
            <View key={`work-experience${index}`}>
              <Text style={universalStyles.h4}>{item.title}</Text>
              <View style={styles.companyDate}>
                <Text style={universalStyles.h4}>{item.organization}</Text>
                <Text style={styles.dateText}>{item.date}</Text>
              </View>
              {item.information.map((item, index) => (
                <View key={index} style={universalStyles.listItem}>
                  <Text style={universalStyles.bulletPoint}>•</Text>
                  <Text style={universalStyles.text}>{item}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      </View>
      {/* Honors and Awards */}
      <View>
        <Text style={universalStyles.h3}>Honors and Awards</Text>
        <View style={styles.mainContentSubSection}>
          {honorsAndAwards.map((item, index) => (
            <View key={`work-experience${index}`}>
              <Text style={universalStyles.h4}>{item.title}</Text>
              <View style={styles.companyDate}>
                <Text style={universalStyles.h4}>{item.organization}</Text>
                <Text style={styles.dateText}>{item.date}</Text>
              </View>
              {item.information.map((item, index) => (
                <View key={index} style={universalStyles.listItem}>
                  <Text style={universalStyles.bulletPoint}>•</Text>
                  <Text style={universalStyles.text}>{item}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      </View>
      {/* Volunteering */}
      <View>
        <Text style={universalStyles.h3}>Volunteering</Text>
        <View style={styles.mainContentSubSection}>
          {volunteering.map((item, index) => (
            <View key={`work-experience${index}`}>
              <Text style={universalStyles.h4}>{item.title}</Text>
              <View style={styles.companyDate}>
                <Text style={universalStyles.h4}>{item.organization}</Text>
                <Text style={styles.dateText}>{item.date}</Text>
              </View>
              {item.information.map((item, index) => (
                <View key={index} style={universalStyles.listItem}>
                  <Text style={universalStyles.bulletPoint}>•</Text>
                  <Text style={universalStyles.text}>{item}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      </View>
      {/* Open Source Projects*/}
      <View>
        <Text style={universalStyles.h3}>Open Source Projects</Text>
        <View style={styles.mainContentSubSection}>
          <View style={styles.table}> 
            <View style={styles.tableRowHeader}> 
              <View style={styles.tableColLanguage}> 
                <Text style={styles.tableCellLanguage}>Language</Text> 
              </View> 
              <View style={styles.tableColDescription}> 
                <Text style={styles.tableCellDescription}>Description</Text> 
              </View> 
            </View>
            {openSourceProjects.map((item, index) => (
              <View style={styles.tableRow} key={index}> 
                <View style={styles.tableColLanguage}> 
                  <Text style={styles.tableCellLanguage}>{item.language}</Text> 
                </View> 
                <View style={styles.tableColDescription}> 
                  {/*Will be limited to 71 characters per line*/}
                  <Text style={styles.tableCellDescription}>{item.description}</Text> 
                </View> 
              </View> 
            ))}
          </View>
        </View>
      </View>
    </View>
  )
}