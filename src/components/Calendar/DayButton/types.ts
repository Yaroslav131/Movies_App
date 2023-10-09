export interface DayButtonProps {
    day: number,
    date: string,
    minDate: string,
    maxDate: string,
    selectedDate: Date,
    onPress: (date: string) => void,
}

export type DateButtonType = 'disabled' | 'selected' | 'available'
