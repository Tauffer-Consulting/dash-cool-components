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

export const formatFromDMYtoMDY = dateString => {
    const [day, month, ...rest] = dateString.split('/');
    const formatted = `${month}/${day}/${rest && rest.join('/')}`;

    return formatted;
}

export const getInitialDateInput = initialDatetime => {
    const datetime = getFormattedDate(initialDatetime);

    if(datetime.isValid) {
        const formattedDate = formatISODate(datetime.toISODate());
        
        return formattedDate;
    }

    return '';
}

export const getInitialTimezoneInput = initialDatetime => {
    const datetime = getFormattedDate(initialDatetime);

    if(datetime.isValid) {
        return datetime.zoneName;
    }

    return '';
}