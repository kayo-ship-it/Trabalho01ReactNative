import React from 'react';
import { SafeAreaView , View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import tesoura from './assets/tesoura.jpeg'
import home from './assets/home.png'
import search from './assets/search.jpg'
import add from './assets/add.jpg'
import chat from './assets/chat.png'
import profile from './assets/profile.png'


const App = () => {
  return (
    <SafeAreaView style={styles.container2}>
    
      <View style={styles.header2}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>K</Text>
        </View>

        <View style={styles.tabs}>
          <Text style={styles.tabText}>Pins</Text>
          <Text style={styles.tabText}>Pastas</Text>
          <View style={styles.activeTabWrapper}>
            <Text style={styles.activeTabText}>Colagens</Text>
            <View style={styles.activeTabUnderline} />
          </View>
        </View>
      </View>


      <View style={styles.content}>
        <Image
          source={tesoura}
          style={styles.mainImage}
        />

        <Text style={styles.title2}>Crie sua primeira colagem</Text>

        <Text style={styles.description}>
          Corte e cole as melhores partes dos seus Pins favoritos para criar algo
          totalmente novo.
        </Text>

        <TouchableOpacity activeOpacity={0.8} style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Criar colagem</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.footer}>
        <TouchableOpacity activeOpacity={0.7}>
          <Image
            source={home}
            style={styles.footerIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7}>
          <Image
            source={search}
            style={styles.footerIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7}>
          <Image
            source={add}
            style={styles.footerIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7}>
          <Image
            source={chat}
            style={styles.footerIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7}>
          <Image
            source={profile}
            style={styles.footerIcon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;
