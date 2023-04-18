export default function displayDate(data) {
    const date = new Date(parseInt(data));
    const dataNow = new Date();
    const yearDif = dataNow.getFullYear() - date.getFullYear();
    if (yearDif === 0) {
        const dayDif = dataNow.getDay() - date.getDay();
        if (dayDif === 0) {
            const hourDif = dataNow.getHours() - date.getHours();
            if (hourDif === 0) {
                const minutesDif = dataNow.getMinutes() - date.getMinutes();
                if (minutesDif >= 0 && minutesDif < 5) return "1 минуту назад";
                if (minutesDif >= 5 && minutesDif < 10) return "5 минут назад";
                if (minutesDif >= 10 && minutesDif < 30) {
                    return "10 минут назад";
                }
                return "30 минут назад";
            }
            return `${date.getHours()}:${date.getMinutes()}`;
        }
        return `${date.getDay()} ${date.toLocaleString("default", {
            month: "long"
        })}`;
    }
    return (
        date.getFullYear() + "." + (date.getMonth() + 1) + "_" + date.getDate()
    );
}
