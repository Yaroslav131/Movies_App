import { NATIFICATIONS_DELAY } from '@/constants';
import { formatDateToYYYYMMDD, getId } from '@/helpingFunctions';
import notifee, { TimestampTrigger, TriggerType } from '@notifee/react-native';

export async function onDisplayNotification(date: Date, filmName: string, time: string) {

    const trigger: TimestampTrigger = {
        type: TriggerType.TIMESTAMP,
        timestamp: date.getTime() - NATIFICATIONS_DELAY * 60 * 60 * 1000,
    };

    await notifee.requestPermission()

    const channelId = await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
    });

    await notifee.createTriggerNotification(
        {
            id: getId(),
            title: 'You have film tomorrow',
            body: `${filmName} in ${formatDateToYYYYMMDD(date)} at ${time}`,
            android: {
                channelId
            },
        },
        trigger,
    );
}