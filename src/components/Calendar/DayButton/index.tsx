import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { formatDateToYYYYMMDD, isDateInRange } from '@/helpingFunctions';
import { useAppSelector } from '@/hooks';
import { styles } from './style';
import { DateButtonType, DayButtonProps } from './types';

function DayButton({
  onPress, date, maxDate, minDate, day, selectedDate,
}: DayButtonProps) {
  const theme = useAppSelector((state) => state.theme.value);
  const [state, setState] = useState<DateButtonType>(isDateInRange(date, minDate, maxDate) ? 'available' : 'disabled');

  useEffect(() => {
    if (date !== formatDateToYYYYMMDD(selectedDate) && state === 'selected') {
      setState('available');
    } else if (date === formatDateToYYYYMMDD(selectedDate)) {
      setState('selected');
    }
  }, []);

  return (
    <TouchableOpacity
      onPress={() => { state !== 'disabled' && onPress(date); }}
      style={[
        styles.dateContainer,
        {
          backgroundColor: state === 'disabled'
            ? theme.calendar.disableBackground
            : state === 'selected'
              ? theme.calendar.selectedBackground
              : theme.calendar.dateBackground,
        },
      ]}
    >
      <Text style={{
        color: state === 'disabled'
          ? theme.calendar.textDisabledColor
          : theme.calendar.dayTextColor,
      }}
      >
        {day}
      </Text>
    </TouchableOpacity>
  );
}

export default React.memo(DayButton);
