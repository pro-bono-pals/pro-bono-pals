
module.exports = {
    format_date: (date) => {
        // Format date as MM/DD/YYYY
        // return date.toLocaleDateString();
        return Intl.DateTimeFormat('en-US').format(date);
    },
    serviceNumbers: (serviceId) => {
        // var id = tasks.serviceId
        if(serviceId === 3){
            return "Culinary"
        }else if(serviceId === 2){
            return "Law"
        }else if(serviceId === 1){
            return "Coding"
        }else if(serviceId === 4){
            return "Trade"
        }else{
            return "undefined"
        }
    }
};