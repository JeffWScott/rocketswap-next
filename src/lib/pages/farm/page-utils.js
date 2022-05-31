export function format_date(timestamp){
    const date = new Date(timestamp)
    const date_string =  date.toLocaleDateString(undefined, {dateStyle: "medium"})

    if (date >= new Date()) return date.toLocaleDateString(undefined, {dateStyle: "medium"})
    else return `${date_string} (closed)`

}