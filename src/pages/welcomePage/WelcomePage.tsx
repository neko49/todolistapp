import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, Linking, TouchableOpacity, Picker } from 'react-native';
import { styles } from './WelcomePage.style';

const WelcomePage = () => {
  const [news, setNews] = useState([]);
  const [country, setCountry] = useState('fr');

  useEffect(() => {
    // Fonction pour récupérer les dernières nouvelles de l'API Google News
    const fetchNews = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=f1da28c18dd547b78ab8e8b1644b2418`);
        const data = await response.json();

        setNews(data.articles);
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des nouvelles:', error);
      }
    };

    fetchNews();
  }, [country]);

  const handleNewsPress = (url) => {
    Linking.openURL(url);
  };


  const handleCountryChange = (country) => {
    setCountry(country);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dernières nouvelles</Text>

      <View style={styles.countryPickerContainer}>
        <Text style={styles.countryPickerLabel}>Pays:</Text>
        <Picker
          selectedValue={country}
          style={styles.countryPicker}
          onValueChange={handleCountryChange}
        >
          <Picker.Item label="France" value="fr" />
          <Picker.Item label="United States" value="us" />
          <Picker.Item label="United Kingdom" value="gb" />
          {/* Ajoutez d'autres pays selon vos besoins */}
        </Picker>
      </View>

      <ScrollView /*horizontal*/>
        {news.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.newsItem}
            onPress={() => handleNewsPress(item.url)}
          >
            <Image style={styles.newsImage} source={{ uri: item.urlToImage }} />
            <Text style={styles.newsTitle}>{item.title}</Text>
            <Text style={styles.newsDescription}>{item.description}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default WelcomePage;
