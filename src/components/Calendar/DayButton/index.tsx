import { formatDateToYYYYMMDD, isDateInRange } from "@/helpingFunctions";
import { ligthTheme } from "@/theme";
import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, useColorScheme } from "react-native";
import { styles } from "./style";

interface DayButtonProps {
    day: number,
    date: string,
    minDate: string,
    maxDate: string,
    selectedDate: Date,
    onPress: (date: string) => void,
}

type DateButtonType = 'disabled' | 'selected' | "available"

function DayButton({ onPress, date, maxDate, minDate, day, selectedDate }: DayButtonProps) {
    const theme = useColorScheme() === "dark" ? ligthTheme : ligthTheme

    const [state, setState] = useState<DateButtonType>(isDateInRange(date, minDate, maxDate) ? "available" : "disabled")

    useEffect(() => {
        if (date !== formatDateToYYYYMMDD(selectedDate) && state === "selected") {
            setState("available")
        }
        else if (date === formatDateToYYYYMMDD(selectedDate)) {
            setState("selected")
        }
    }, [])

    return (
        <TouchableOpacity
            onPress={() => { state !== 'disabled' && onPress(date) }}
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
            }}>{day}</Text>
        </TouchableOpacity>
    );
}

export default React.memo(DayButton);