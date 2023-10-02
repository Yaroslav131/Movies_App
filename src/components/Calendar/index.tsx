import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View, useColorScheme } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { styles } from './styles';
import { ligthTheme } from '@/theme';
import { IMAGES } from '@assets/images';
import DayButton from './DayButton';
import { CHOOSE_DAY } from '@/constants';

interface MyCalendarProps {
    onSelect: (date: string) => void
    selectedDate: Date,
    onClose:()=>void
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
            <View style={styles.header}>
                <Text style={[styles.headerTitle,
                { color: theme.calendar.color }]}>
                    {CHOOSE_DAY}
                </Text>
                <TouchableOpacity onPress={props.onClose} style={styles.headerImage}>
                    <Image  source={IMAGES.cancel} />
                </TouchableOpacity>
            </View>
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
            <Image style={styles.logoImage} source={IMAGES.dateLogo} />
        </View >
    );
};

export default MyCalendar;