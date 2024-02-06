
const months = {
    en : {
        month_names: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        month_names_short: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    } 
}

export function formatTime(time: number) {
  return time < 10 ? `0${time}` : `${time}`;
}

export const getStringMonthYearDate = (date:Date)=> {
  var dateString = "";
  if(date !== null && date !== undefined){
      var dt = new Date(date);
      dateString = dt.getMonth().toString() +'/'+ dt.getFullYear().toString();
  }
  return dateString;
}

export const getStringMonthDayDate = (date:Date)=> {
    var dateString = "";
    if(date !== null && date !== undefined){
        var dt = new Date(date);
        var month:string = months.en.month_names_short[dt.getMonth()];
        dateString = `${dt.getDate().toString()} ${month.toString()}`;
    }
    return dateString;
  }

export const onValidateDatesForms = (type:string, index:number|null, value:Date|null, dateToCompare:Date|null, execute:any, executeState:any, executeException:any)=> {
  switch (type) {
      case "fromDate":
          //Validate if there's value in fromDate 
          if(value){
              //Validate if there's value in toDate for futher actions
              if(dateToCompare){
                  //Validate if fromDate is smaller than toDate
                  if(value > dateToCompare){
                      executeState(false);
                      //If fromDate its bigger than toDate we set fromDate with current value of toDate
                      execute(index, dateToCompare, "fromDate" );
                  } else {
                      executeState(true);
                      //If fromDate is smaller than toDate we set fromDate with date entered
                      execute(index, value, "fromDate" );
                  }
              } else {
                  //If toDate is null we let set fromDate with date entered.
                  execute(index, value, "fromDate" );
              }
          } else {
              //If fromDate is change to null we raise an exception 
              execute(index, value, "fromDate" );
          }
          break;
      case "toDate":
          if(value){
              //Validate if there's value in fromDate for futher actions
              if(dateToCompare){
                  //Validate if tpDate is smaller than fromDate
                  if(value < dateToCompare){
                      executeState(false);
                      //If toDate its smaller than fromDate we set toDate with current value of fromDate
                      execute(index, dateToCompare, "toDate" );
                  } else {
                      executeState(true);
                      //If toDate is bigger than fromDate we set toDate with date entered
                      execute(index, value, "toDate" );
                  }
              } else {
                  //If fromDate is null we let set toDate with date entered.
                  execute(index, value, "toDate" );
              }
          } else {
              //If toDate is change to null we set toDate in null since is not required. 
              execute(index, value, "toDate" );
          }
      break;
  }
}