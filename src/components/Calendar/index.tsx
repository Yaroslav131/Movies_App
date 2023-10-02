import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View, useColorScheme } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { styles } from './styles';
import { ligthTheme } from '@/theme';
import { IMAGES } from '@assets/images';
import DayButton from './DayButton';

interface MyCalendarProps {
    onSelect: (date: string) => void
    selectedDate: Date
}

const MyCalendar = (props: MyCalendarProps) => {
    const theme = useColorScheme() === "dark" ? ligthTheme : ligthTheme

    const currentDate = new Date();
    const minDate = new Date().toISOString()
    const futureDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 2, currentDate.getDate());
    const maxDate = futureDate.toISOString();

    function handleSetSelectedDate(date: string) {
        props.onSelect(date)
    }

    return (
        <View style={[styles.container,
        { backgroundColor: theme.calendar.backgroundColor }]}>
            <Calendar
                style={styles.calendar}
                theme={{
                    backgroundColor: theme.calendar.backgroundColor,
                    calendarBackground: theme.calendar.backgroundColor,
                    selectedDayBackgroundColor: theme.calendar.selectedDayBackgroundColor,
                    selectedDayTextColor: theme.calendar.dayTextColor,
                    todayTextColor: theme.calendar.dayTextColor,
                    dayTextColor: theme.calendar.dayTextColor,
                    textDisabledColor: theme.calendar.textDisabledColor,

                }}
                dayComponent={({ date }) => {
                    return (
                        (date && <DayButton date={date.dateString}
                            maxDate={maxDate}
                            minDate={minDate}
                            day={date.day}
                            selectedDate={props.selectedDate}
                            onPress={handleSetSelectedDate} />)
                    );
                }}

                renderArrow={(direction) => (
                    <Image source={direction === 'left' ? IMAGES.arrowLeftIcon : IMAGES.arrowRightIcon} />
                )}
                renderHeader={(date) => {
                    const monthName = date.toString('MMMM');
                    return (
                        <View>
                            <Text style={[styles.monthText,
                            { color: theme.calendar.monthTextColor }]}>{monthName}</Text>
                        </View>
                    );
                }}
                hideExtraDays={true}
                hideDayNames={true}
                minDate={minDate}
                maxDate={maxDate}
            />
        </View >
    );
};

export default MyCalendar;