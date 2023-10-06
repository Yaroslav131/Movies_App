import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../store/store';
import ImageColors, { ImageColorsResult, getColors } from 'react-native-image-colors'
import { useEffect, useState } from "react";


export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useImageColors = (url: string, fallback: string) => {
    const [colors, setColors] = useState<ImageColorsResult>()

    useEffect(() => {
        ImageColors.getColors(url, {
            fallback: fallback,
            cache: true,
            key: url,
        }).then(setColors)
    }, [])

    return colors
}