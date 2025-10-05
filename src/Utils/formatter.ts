export class Formatter {
    static formateDate(value: Date): String {
        const date = new Date(value);
        return Intl.DateTimeFormat("es-ES", {
            year: "numeric",
            month: "long",
            day: "2-digit"
        }).format(date)
    }
}