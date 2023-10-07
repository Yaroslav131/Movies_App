import {
  Image,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import { IMAGES } from '@assets/images';
import { Switch } from 'react-native-gesture-handler';
import { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { useDispatch } from 'react-redux';
import toggleNotificationPermissions from '@/notifications';
import { useAppDispatch, useAppSelector } from '@/hooks';
import {
  OFF, ON, languageDictionary, languages,
} from '@/constants';
import styles from './styles';
import { changeLanguage } from '@/slices/languageSlice';
import { LanguagesType } from '@/types';

interface SettingModalProps {
    onPress: () => void,
}

function SettingModal({ onPress }: SettingModalProps) {
  const theme = useAppSelector((state) => state.theme.value);
  const currentLanguage = useAppSelector((state) => state.language).value;
  const dispatch = useAppDispatch();
  const translations = languageDictionary[currentLanguage];

  const [isEnabled, setIsEnabled] = useState(false);

  function onChangeLanguage(value: string) {
    dispatch(changeLanguage(value as LanguagesType));
  }

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    toggleNotificationPermissions(!isEnabled);
  };

  return (
    <View style={[styles.container,
      { backgroundColor: theme.modals.backgroundColor }]}
    >
      <View style={styles.header}>
        <View style={styles.textContainer}>
          <Text style={[styles.headerText,
            { color: theme.singModal.color }]}
          >
            {translations.EDIT_PROFILE}
          </Text>
        </View>
        <TouchableOpacity onPress={onPress} style={styles.cancelContainer}>
          <Image source={IMAGES.cancel} />
        </TouchableOpacity>
      </View>

      <Dropdown
        style={[styles.dropdown,
          { borderColor: theme.filterModal.borderColor }]}
        placeholderStyle={[styles.placeholderStyle, { color: theme.filterModal.color }]}
        selectedTextStyle={[styles.selectedTextStyle, { color: theme.filterModal.color }]}
        data={languages}
        maxHeight={200}
        labelField="label"
        valueField="value"
        placeholder={translations.SELECT_LANGUAGE}
        value={currentLanguage}
        onChange={(item) => {
          onChangeLanguage(item.value);
        }}
      />

      <Text style={[styles.sectionText,
        { color: theme.singModal.color }]}
      >
        {translations.NOTIFICATIONS}
      </Text>
      <View style={styles.switchContainer}>
        <Text style={[styles.switchText,
          { color: theme.singModal.color }]}
        >
          {OFF}
        </Text>
        <Switch

          trackColor={{
            false: theme.settingModal.trackColorFalse,
            true: theme.settingModal.trackColorTrue,
          }}
          thumbColor={isEnabled
            ? theme.settingModal.thumbColorIsEnabledTrue
            : theme.settingModal.thumbColorIsEnabledFalse}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text style={[styles.switchText,
          { color: theme.singModal.color }]}
        >
          {ON}
        </Text>
      </View>
    </View>
  );
}

export default SettingModal;
