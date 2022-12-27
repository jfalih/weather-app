const getTimeFromDate = (date: string) => {
    const newDate = new Date(date);
    return newDate.toLocaleTimeString('id',  { hour: '2-digit', minute: "2-digit" })
};

export default getTimeFromDate;