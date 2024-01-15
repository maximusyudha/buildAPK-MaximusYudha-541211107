import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, ImageBackground, Button } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import backgroundImg from '../../assets/backgroundhp.jpg';
import { TouchableOpacity } from 'react-native';
import { Linking } from 'react-native';
import LikeDislikeButton from '../customlike/customLike';

const IMG_URI = require('../../assets/yudha.jpeg');

const projects = [
  {
    title: "PLN",
    description: "Ini merupakan hasil dari codingan saya, dalam pembuatan website BUMN",
    imageUrl: require('../../assets/project1.png'),
  },
  {
    title: "Project 2",
    description: "Interface dari website Suretybond.co.id",
    imageUrl: require('../../assets/project2.png'),
  },

];

const openLinkedInProfile = () => {
  const linkedinUrl = 'https://www.linkedin.com/in/maximus-yudha-75b423220/';
  Linking.openURL(linkedinUrl);
};

const openGitHubProfile = () => {
  const githubProfileUrl = 'https://github.com/maximusyudha?tab=repositories';
  Linking.openURL(githubProfileUrl);
};

const ProjectItem = ({ item }) => (
  <View style={styles.projectItem}>
    <Image source={item.imageUrl} style={styles.projectImage} />
    <Text style={styles.projectTitle}>{item.title}</Text>
    <Text style={styles.projectDescription}>{item.description}</Text>
  </View>
);

export default function HomeScreen() {
  return (
    <ScrollView>
    <ImageBackground source={backgroundImg}> 
    <View style={styles.screen}>
      <Image style={styles.image} source={IMG_URI} />
      <Text style={styles.text1}>MAXIMUS YUDHA PRASETYO</Text>
      <Text style={styles.text2}>Frontend Developer</Text>
      <Text style={styles.text3}>Web Developer | Mobile App Developer</Text>
      <Text style={styles.portfolio}>
        Saya adalah seorang pengembang frontend dengan pengalaman dalam pembuatan aplikasi web dan seluler. Portofolio saya mencakup berbagai proyek yang telah saya kerjakan, seperti situs web e-commerce, aplikasi seluler berbasis iOS dan Android, serta pengembangan antarmuka pengguna yang responsif dan menarik. Saya memiliki keahlian dalam menggunakan berbagai teknologi dan alat, termasuk React, React Native. Selain itu, saya selalu bersemangat untuk belajar dan mengembangkan keterampilan saya dalam dunia pengembangan perangkat lunak.
      </Text>

      <Text style={styles.text1}>SKILLS</Text>


      <SkillBar skillName="React Native" percentage={80} />
      <SkillBar skillName="React.js" percentage={90} />
      <SkillBar skillName="Next.js" percentage={90} />
      <SkillBar skillName="Typescript" percentage={95} />
      <SkillBar skillName="CSS" percentage={85} />
      <SkillBar skillName="JS" percentage={90} />

      <Text style={styles.textTit}>MY RECENT PROJECT</Text>

      <Carousel
        data={projects}
        renderItem={({ item }) => <ProjectItem item={item} />}
        sliderWidth={350} 
        itemWidth={350}   
      />

      <LikeDislikeButton />

      <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={openLinkedInProfile} style={styles.linkedinButton}>
          <Text>LinkedIn</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={openGitHubProfile} style={styles.githubButton}>
          <Text>GitHub</Text>
      </TouchableOpacity>
      </View>
    </View>
    </ImageBackground>
    </ScrollView>
  );
}

const SkillBar = ({ skillName, percentage }) => {
  return (
    <View style={styles.skillBar}>
      <Text style={styles.skillText}>{skillName}</Text>
      <View style={styles.progressBar}>
        <View style={styles.progressFill(percentage)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text1: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 10,
    color: 'white'
  },
  textTit: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 20,
    color: 'white'
  },
  text2: {
    textAlign: 'center',
    fontSize: 16,
    paddingTop: 10,
    color: 'white'
  },
  text3: {
    textAlign: 'center',
    fontSize: 14,
    paddingTop: 5,
    color: 'gray',
  },
  portfolio: {
    textAlign: 'left',
    fontSize: 12,
    paddingTop: 20,
    paddingHorizontal: 20,
    color: 'white'
  },
  screen: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  skillBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    marginRight: 20,
  },
  skillText: {
    flex: 1,
    paddingLeft: 20,
    color: 'white'
  },
  progressBar: {
    flex: 3,
    height: 20,
    backgroundColor: 'lightgray',
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressFill: (percentage) => ({
    width: `${percentage}%`,
    height: '100%',
    backgroundColor: 'purple',
  }),
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  projectItem: {
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  projectImage: {
    width: 350,
    height: 370,
    borderRadius: 0,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'white'
  },
  projectDescription: {
    fontSize: 14,
    textAlign: 'center',
    color: 'gray',
  },
  linkedinButton: {
    backgroundColor: '#0077B5', 
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
    color: 'white', 
    fontSize: 16,
    fontWeight: 'bold',
  },
  githubButton: {
    backgroundColor: '#333',
    padding: 10, 
    borderRadius: 5, 
    marginTop: 20,
    color: '#fff', 
    textAlign: 'center', 
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: 10,
    gap: 8, 
  },
});
