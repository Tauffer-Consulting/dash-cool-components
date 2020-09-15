import { DateTime } from 'luxon';

export const getFormattedDate = date => DateTime.fromISO(date);

export const formatISODate = ISODate => {
    if(typeof ISODate === 'string'){    
        const dateElements = String(ISODate).split('-');
        const reversedElements = dateElements.reverse();
        const formattedDate = reversedElements.join('/');

        return formattedDate;
    }

    return '';
}

export const getInitialDateInput = initialDatetime => {
    const datetime = getFormattedDate(initialDatetime);

    if(datetime.isValid) {
        return datetime.toJSDate();
    }

    return null;
}

export const getInitialTimezoneInput = initialDatetime => {
    const datetime = getFormattedDate(initialDatetime);

    if(datetime.isValid) {
        return datetime.zoneName;
    }

    return '';
}