import { DateTime } from 'luxon';
import { luxonZoneNames } from '../data/utcOptions';

window.DateTime = DateTime;

export const getFormattedDate = date => DateTime.fromISO(date, { setZone: true });

export const getDateWithoutTimezone = dateString => {
    const re = /^(\d{4}\-\d\d\-\d\d([tT][\d:\.]*)?)/;

    if (dateString && typeof dateString === "string") {
        const regexArray = dateString.match(re)

        if (regexArray) return regexArray[0];
        return null;
    }

    return null;
}

export const getFormattedDateInput = initialDatetime => {
    const dateWithoutZone = getDateWithoutTimezone(initialDatetime);
    const datetime = getFormattedDate(dateWithoutZone);

    if (datetime.isValid) {
        return datetime.toJSDate();
    }

    return null;
}

export const getFormattedTimezoneInput = initialDatetime => {
    const datetime = getFormattedDate(initialDatetime);

    if (luxonZoneNames[datetime.zoneName]) {
        return luxonZoneNames[datetime.zoneName];
    }

    return '';
}

export const getLuxonZone = option => {
    const luxonKeysArray = Object.keys(luxonZoneNames);
    const zoneName = luxonKeysArray.find(key => luxonZoneNames[key] === option);

    return zoneName;
}

export const appendTimezone = (date, zoneName) => {
    if (zoneName) {
        const luxonZoneName = getLuxonZone(zoneName);
        const newDate = date.setZone(luxonZoneName, { keepLocalTime: true });
        return newDate;
    }

    return date;
}