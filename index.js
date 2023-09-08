const currentDate = new Date();
const formattedUTCDate = currentDate.toISOString().slice(0, -5) + 'Z';

console.log(formattedUTCDate)


