import React from 'react';
import {
  Link,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer';
import {
  hpeBorderDefault,
  hpeColorBackgroundInfo,
  universalStyles
} from './config';
import {
  skills,
  education,
  contact,
  characteristics,
  links,
  programmingLanguages,
  location,
} from './data/sidebar';

const styles = StyleSheet.create({
  sidebar: {
    width: 150,
    backgroundColor: hpeColorBackgroundInfo,
    borderRight: hpeBorderDefault,
    paddingLeft: 10,
    paddingVertical: 10,
    gap: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bulletPoint: {
    paddingRight: 3,
    fontSize: 12,
  },
  subBulletPoint: {
    paddingRight: 3,
    paddingLeft: 8,
    fontSize: 12,
  },
});

export const Sidebar = () => {
  return (
    <View style={styles.sidebar}>
      {/* Links */ }
      <View>
        <Text style={universalStyles.h4}>Links</Text>
        {links.map((item, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.bulletPoint}>•</Text>
            <Link style={universalStyles.text} src={item.link}>{item.title}</Link>
          </View>
        ))}
      </View>
      {/* Skills */ }
      <View>
        <Text style={universalStyles.h4}>Skills</Text>
        <View>
          {skills.map((item, index) => (
            <View key={`skills-parent-${index}`}>
              <View key={index} style={styles.listItem}>
                <Text style={styles.bulletPoint}>{'\u2022'}</Text>
                <Text style={universalStyles.text}>{item.category}</Text>
              </View>
              {item.skills.map((item, index) => (
                <View key={index} style={styles.listItem}>
                  <Text style={styles.subBulletPoint}>{'\u2022'}</Text>
                  <Text style={universalStyles.text}>{item}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      </View>
      {/* Languages */ }
      <View>
        <Text style={universalStyles.h4}>Languages</Text>
        {programmingLanguages.map((item, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={universalStyles.text}>{item}</Text>
          </View>
        ))}
      </View>
      {/* Education */ }
      <View>
        <Text style={universalStyles.h4}>Education</Text>
        {education.map((item, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={universalStyles.text}>{item}</Text>
          </View>
        ))}
      </View>
      {/* Characteristics */ }
      <View>
        <Text style={universalStyles.h4}>Characteristics</Text>
        {characteristics.map((item, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={universalStyles.text}>{item}</Text>
          </View>
        ))}
      </View>
      {/* Location */ }
      <View>
        <Text style={universalStyles.h4}>Location</Text>
        <View key={0} style={styles.listItem}>
          <Text style={styles.bulletPoint}>•</Text>
          <Text style={universalStyles.text}>{location}</Text>
        </View>
      </View>
      {/* Contact */ }
      <View>
        <Text style={universalStyles.h4}>Contact</Text>
        {contact.map((item, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={universalStyles.text}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}