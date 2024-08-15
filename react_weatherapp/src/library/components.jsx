// Converting Date

export const convertDate = (dateStringData) => {
    // Parse the input date string
    const [datePart, timePart] = dateStringData.split(' ');
    const [year, month, day] = datePart.split('-').map(Number);
    const [hours, minutes, seconds] = timePart.split(':').map(Number);

    // Create a Date object
    const date = new Date(year, month - 1, day, hours, minutes, seconds);

    date.setDate(date.getDate());

    // Define month names
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // Format the date into "Month Day Year HH:MM:SS"
    const formattedDate = `${monthNames[date.getMonth()]} ${date.getDate()} ${date.getFullYear()} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;

    return formattedDate;
};

export const Sentence = (mySentence) => { 
const words = mySentence.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}

return words.join(" ");
}