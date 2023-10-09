import {
  Image, Linking, StatusBar, Text, TouchableOpacity, View,
} from 'react-native';
import { IMAGES } from '@assets/images';
import { useEffect, useState } from 'react';
import Snackbar from 'react-native-snackbar';
import styles from './styles';
import { getCurrentUser, handleSignOut } from '@/api/firebase/authFirebase';
import { UserType } from '@/types';
import { handleCutText } from '@/helpingFunctions';

import ModalContainer from '@/components/ModalContainer';
import ChangeModal from '@/components/ChangeModal';
import { PRIVATE_POLICY_URI, languageDictionary } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { setDarkTheme, setLightTheme } from '@/slices/themeSlice';
import SettingModal from '@/components/SettingModal';

interface settingButton {
  onPress: () => void,
  title: string
}

function ProfileScreen() {
  const theme = useAppSelector((state) => state.theme.value);
  const dispatch = useAppDispatch();
  const currentLanguage = useAppSelector((state) => state.language).value;
  const translations = languageDictionary[currentLanguage];

  const [user, setUser] = useState<UserType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContant] = useState(<></>);

  function tonggleModalVisible() {
    setIsModalOpen(!isModalOpen);
  }

  function handleEditPersonalDate() {
    setModalContant(<ChangeModal onPress={tonggleModalVisible} />);
    tonggleModalVisible();
  }

  function handleSettingApp() {
    setModalContant(<SettingModal onPress={tonggleModalVisible} />);
    tonggleModalVisible();
  }

  useEffect(() => {
    async function loadDate() {
      const user = await getCurrentUser();
      setUser(user);
    }

    loadDate();
  }, []);

  function SettingButton({ title, onPress }: settingButton) {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.menuButton,
        { backgroundColor: theme.profileScreen.menuBackgroundColor }]}
      >
        <Text style={[styles.menuButtonText,
        { color: theme.ticketScreen.color }]}
        >
          {title}
        </Text>
      </TouchableOpacity>
    );
  }

  const openWebsite = async (url: string) => {
    try {
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        await Linking.openURL(url);
      }
    } catch (error: any) {
      Snackbar.show({
        text: error,
        duration: Snackbar.LENGTH_LONG,
      });
    }
  };

  return (
    <>
      <StatusBar backgroundColor={theme.ticketScreen.backgroundColor} />
      <View style={[styles.container,
      { backgroundColor: theme.profileScreen.backgroundColor }]}
      >
        <View style={styles.topContainer}>
          <Image source={IMAGES.userAvatar} />
          <View style={styles.userInfoContainer}>
            <Text style={[styles.nameText,
            { color: theme.profileScreen.color }]}
            >
              {user?.firstName}
              {' '}
              {user?.lastName}
            </Text>
            <Text style={[styles.idText,
            { color: theme.profileScreen.color }]}>
              USER ID: {handleCutText(user?.userId!, 10)}
            </Text>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.settingButtons}>
            <SettingButton onPress={() => { handleEditPersonalDate(); }} title={translations.EDIT_PROFILE_INFO} />
            <SettingButton onPress={() => { handleSettingApp(); }} title={translations.SETTINGS} />
            <SettingButton onPress={() => { openWebsite(PRIVATE_POLICY_URI); }} title={translations.PRIVATE_POLICY} />
            <SettingButton onPress={handleSignOut} title={translations.LOG_OUT} />
          </View>

          <View style={styles.themeButtonsContainer}>
            <TouchableOpacity
              onPress={() => { dispatch(setLightTheme()); }}
              style={[styles.themeButton,
              styles.themeButtonLeft,
              { backgroundColor: theme.profileScreen.whiteButton }]}
            >
              <Text style={[styles.themeButtonText,
              { color: theme.profileScreen.whiteButtonText }]}
              >
                {translations.WHITE}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => { dispatch(setDarkTheme()); }}
              style={[styles.themeButton,
              styles.themeButtonRight,
              { backgroundColor: theme.profileScreen.blackButton }]}
            >
              <Text style={[styles.themeButtonText,
              { color: theme.profileScreen.blackButtonText }]}
              >
                {translations.BLACK}
              </Text>
            </TouchableOpacity>

          </View>

          <Image style={styles.logoImage} source={IMAGES.dateLogo} />
        </View>
      </View>
      <ModalContainer
        isModalVisible={isModalOpen}
        toggleModal={tonggleModalVisible}
      >
        {modalContent}
      </ModalContainer>
    </>
  );
}

export default ProfileScreen;
