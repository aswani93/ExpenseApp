function formatDate(date:string) : string{
    return new Date(date).toLocaleTimeString('en-GB', { hour: "2-digit", minute: "2-digit", hour12: false }) +' - ' + new Date(date).toLocaleDateString("en-GB");
}
function formatAmount(amount:number | string) : string{
    return '£'+amount;
}
export {formatDate, formatAmount}
