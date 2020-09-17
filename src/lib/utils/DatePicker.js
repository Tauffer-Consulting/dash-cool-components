import { DateTime } from 'luxon';
import { luxonZoneNames } from '../data/utcOptions';

export const getFormattedDate = date => DateTime.fromISO(date, { setZone: true });

export const getFormattedDateInput = initialDatetime => {
    const datetime = getFormattedDate(initialDatetime);

    if(datetime.isValid) {
        return datetime.toJSDate();
    }

    return null;
}

export const getFormattedTimezoneInput = initialDatetime => {
    const datetime = getFormattedDate(initialDatetime);

    if(luxonZoneNames[datetime.zoneName]) {
        return luxonZoneNames[datetime.zoneName];
    }

    return '';
}