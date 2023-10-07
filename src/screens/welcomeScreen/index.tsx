import {
  FlatList,
  Image,
  ImageProps,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { IMAGES } from '@assets/images';
import React, { useState } from 'react';
import styles from './styles';
import SingUpButton from '@/components/singUpButton';
import ModalContainer from '@/components/ModalContainer';
import SingModal from '@/components/SingModal';
import { signInWithGoogle, onFacebookButtonPress } from '@/api/firebase/authFirebase';
import { SPONSERS_DATA, languageDictionary } from '@/constants';
import { useAppSelector } from '@/hooks';

interface SingUpButtonData {
    onClick: () => void

    image: ImageProps;
    colors: {
        backgroundColor: string;
        color: string;
    };
    buttonText: string;
}

function WelcomeScreen() {
  const theme = useAppSelector((state) => state.theme.value);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(<></>);

  const currentLanguage = useAppSelector((state) => state.language).value;

  const translations = languageDictionary[currentLanguage];

  function handleToggleModel() {
    setIsModalOpen(!isModalOpen);
  }

  function handleCreateAccount() {
    handleToggleModel();
    handleSetModalContent(<SingModal
      title={translations.SIGNUP_CREATE_ACCOUNT_TEXT}
      type="SingUp"
      onPress={handleCloseModel}
    />);
  }

  function handleLogin() {
    handleToggleModel();
    handleSetModalContent(<SingModal
      title={translations.SIGNIN_TEXT}
      type="SingIn"
      onPress={handleCloseModel}
    />);
  }

  function handleCloseModel() {
    setIsModalOpen(false);
  }

  function handleSetModalContent(content: React.JSX.Element) {
    setModalContent(content);
  }

  const singUpData: SingUpButtonData[] = [
    {
      onClick: handleCreateAccount,

      image: IMAGES.addAccButton,
      colors: theme.singUpButton.addAcc,
      buttonText: translations.SIGNUP_CREATE_ACCOUNT_TEXT,
    },
    {
      onClick: () => { signInWithGoogle(); },

      image: IMAGES.addGoogleButton,
      colors: theme.singUpButton.googleAcc,
      buttonText: translations.SIGNUP_CONTINUE_WITH_GOOGLE_TEXT,
    },
    {
      onClick: () => {
        onFacebookButtonPress();
      },

      image: IMAGES.addFacebookButton,
      colors: theme.singUpButton.facebookAcc,
      buttonText: translations.SIGNUP_CONTINUE_WITH_FACEBOOK_TEXT,
    },
    {
      onClick: () => { },

      image: IMAGES.addGithubButton,
      colors: theme.singUpButton.gitHubAcc,
      buttonText: translations.SIGNUP_SIGNUP_WITH_GITHUB_TEXT,
    },
  ];

  const sponsoresImages = SPONSERS_DATA.map((image, index) => <Image key={index} source={image} />);

  const renderSingUpItem = ({ item }: { item: SingUpButtonData }) => (
    <SingUpButton
      onClick={item.onClick}
      image={item.image}
      colors={item.colors}
      buttonText={item.buttonText}
    />
  );

  const keyExtractor = (item: SingUpButtonData, index: number) => index.toString();

  return (
    <View style={[styles.container,
      { backgroundColor: theme.welcomScreen.backgroundColor }]}
    >
      <View style={styles.mainContant}>
        <Image style={styles.logoImage} source={IMAGES.welcomLogo} />
        <Text style={[styles.welcomText,
          { color: theme.welcomScreen.color }]}
        >
          {translations.WELCOME_TEXT}
        </Text>
        <View style={styles.singContainer}>
          <FlatList
            style={styles.singUpFlatList}
            data={singUpData}
            renderItem={renderSingUpItem}
            keyExtractor={keyExtractor}
          />
          <Text style={[styles.alreadyAccText, { color: theme.welcomScreen.color }]}>
            {translations.ALREADY_HAS_ACCOUNT_TEXT}
            <TouchableWithoutFeedback onPress={handleLogin}>
              <Text style={styles.loginText}>{translations.LOGIN_TEXT}</Text>
            </TouchableWithoutFeedback>
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.sponsoresContainer}>
          {sponsoresImages}
        </View>

        <Text style={[styles.versionText,
          { color: theme.welcomScreen.color }]}
        >
          {translations.VERSION_TEXT}
        </Text>
      </View>

      <ModalContainer
        isModalVisible={isModalOpen}
        toggleModal={handleToggleModel}
      >
        {modalContent}
      </ModalContainer>
    </View>
  );
}

export default WelcomeScreen;
