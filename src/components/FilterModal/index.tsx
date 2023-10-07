import React from 'react';
import {
  Image, Text, TouchableOpacity, View,
} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { IMAGES } from '@assets/images';
import Range from './Range';
import { DropButtonItem } from '@/types';
import {
  MAX_FILTER_RANING, MAX_FILTER_YEAR, MIN_FILTER_RANING, MIN_FILTER_YEAR, languageDictionary,
} from '@/constants';
import { useAppSelector } from '@/hooks';
import { styles } from './styles';

interface FilterModalProps {
  onChangeYearsRage: (range: [number, number]) => void
  onChangeRankinkRage: (range: [number, number]) => void
  yearsRage: [number, number]
  rankingRage: [number, number]
  onClose: () => void,
  onChangeDirector: (director: string) => void
  onChangeGenre: (genre: string) => void
  directors: DropButtonItem[],
  genres: DropButtonItem[]
  handleResetFilter: () => void
  selectedGenre: string
  selectedDirector: string
}

function FilterModal(props: FilterModalProps) {
  const theme = useAppSelector((state) => state.theme.value);
  const currentLanguage = useAppSelector((state) => state.language).value;

  const translations = languageDictionary[currentLanguage];

  return (
    <View style={[styles.container,
    { backgroundColor: theme.filterModal.backgroundColor }]}
    >
      <View style={styles.header}>
        <Text style={[styles.headerTitle,
        { color: theme.filterModal.color }]}
        >
          {translations.FILTERS}
        </Text>
        <TouchableOpacity onPress={props.onClose} style={styles.headerImage}>
          <Image source={IMAGES.cancel} />
        </TouchableOpacity>
      </View>

      <View style={styles.itemContainer}>
        <Text style={[styles.titleText,
        { color: theme.filterModal.color }]}
        >
          {translations.YEAR}
        </Text>
        <Range
          rage={props.yearsRage}
          minValue={MIN_FILTER_YEAR}
          maxValue={MAX_FILTER_YEAR}
          rangeStep={1}
          title={translations.YEAR}
          onChange={props.onChangeYearsRage}
        />
      </View>

      <View style={styles.itemContainer}>
        <Text style={[styles.titleText,
        { color: theme.filterModal.color }]}
        >
          {translations.RAITING}
        </Text>
        <Range
          rage={props.rankingRage}
          minValue={MIN_FILTER_RANING}
          maxValue={MAX_FILTER_RANING}
          rangeStep={0.5}
          title={translations.RAITING}
          onChange={props.onChangeRankinkRage}
        />
      </View>

      <View style={styles.itemContainer}>
        <Text style={[styles.titleText,
        { color: theme.filterModal.color }]}
        >
          {translations.DIRECTORS}
        </Text>
        <Dropdown
          style={[styles.dropdown,
          { borderColor: theme.filterModal.borderColor }]}
          placeholderStyle={[styles.placeholderStyle, { color: theme.filterModal.color }]}
          selectedTextStyle={[styles.selectedTextStyle, { color: theme.filterModal.color }]}
          data={props.directors}
          maxHeight={200}
          labelField="label"
          valueField="value"
          placeholder={translations.SELECT_DIRECTORS}
          value={props.selectedDirector}
          onChange={(item) => {
            props.onChangeDirector(item.value);
          }}
        />
      </View>

      <View style={styles.itemContainer}>
        <Text style={[styles.titleText,
        { color: theme.filterModal.color }]}
        >
          {translations.GENRES}
        </Text>
        <Dropdown
          style={[styles.dropdown,
          { borderColor: theme.filterModal.borderColor }]}
          placeholderStyle={[styles.placeholderStyle, { color: theme.filterModal.color }]}
          selectedTextStyle={[styles.selectedTextStyle, { color: theme.filterModal.color }]}
          inputSearchStyle={styles.inputSearchStyle}
          data={props.genres}
          maxHeight={200}
          labelField="label"
          valueField="value"
          placeholder={translations.SELECT_GENRES}
          value={props.selectedGenre}
          onChange={(item) => {
            props.onChangeGenre(item.value);
          }}
        />
      </View>
      <TouchableOpacity
        onPress={props.handleResetFilter}
        style={[styles.resetButton,
        { backgroundColor: theme.filterModal.resetButtonColor }]}
      >
        <Text style={[styles.resetButtonText,
        { color: theme.filterModal.color }]}
        >
          {translations.RESET}
        </Text>
      </TouchableOpacity>
      <Image style={styles.logoImage} source={IMAGES.dateLogo} />
    </View>
  );
}

export default FilterModal;
