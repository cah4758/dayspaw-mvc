

// public static void main( String [] args )throws Exception {

// String dogs[''] = {
//     "Fluffiles":
//     "Clifford",
//     "Fido":
//     "Moto",
//     "Patches":
//     "spot",
// } 
//     }

//     CREATE TABLE table_name(
//         column1 datatype,
//         column2 datatype,
//         column3 datatype,

//         PRIMARY KeyboardEvent( one or more columns)
//     )

//     SQL

//     // optional 
//     create table "tablename"
//     ("column1" "data type",
//     "column2" "data type",
//     "column3" "data type" );

//     // create table query insert into query (Dog name, time of appointment,) automate in javascript timer to send an email via mailjs.
//     VALUES

//     ('Fluffiles', 800),
//     ('Clifford', 845),
//     ('Fido', 945),
//     ('Moto', 1030),
//     ('Patches', 1115),
//     ('spot', 1200);
 

    

//     function updateClock ()
        
//     var currentTime = new Date ();

//     var currentDay = currentTime.getDay ();

//     // current days

//     currentDay = (currentDay == 0 ) ? "Sun" : currentDay;
//     currentDay = (currentDay == 1 ) ? "Mon" : currentDay;
//     currentDay = (currentDay == 2 ) ? "Tue" : currentDay;
//     currentDay = (currentDay == 3 ) ? "Wed" : currentDay;
//     currentDay = (currentDay == 4 ) ? "Thu" : currentDay;
//     currentDay = (currentDay == 5 ) ? "Fri" : currentDay;
//     currentDay = (currentDay == 6 ) ? "Sat" : currentDay;

//     var currentMonth = currentTime.getMonth( );

//     currentmonth = ( currentmonth == 0 ) ? "January" : currentMonth;
//     currentmonth = ( currentmonth == 1 ) ? "February" : currentMonth;
//     currentmonth = ( currentmonth == 2 ) ? "March" : currentMonth;
//     currentmonth = ( currentmonth == 3 ) ? "April" : currentMonth;
//     currentmonth = ( currentmonth == 4 ) ? "May" : currentMonth;
//     currentmonth = ( currentmonth == 5 ) ? "June" : currentMonth;
//     currentmonth = ( currentmonth == 6 ) ? "July" : currentMonth;
//     currentmonth = ( currentmonth == 7 ) ? "August" : currentMonth;
//     currentmonth = ( currentmonth == 8 ) ? "September" : currentMonth;
//     currentmonth = ( currentmonth == 9 ) ? "October" : currentMonth;
//     currentmonth = ( currentmonth == 10 ) ? "November" : currentMonth;
//     currentmonth = ( currentmonth == 11 ) ? "December" : currentMonth;

//     var currentDate = currentTime.getDate( );

//     currentDate = ( currentDate == 1 || currentDate == 21 || currentDate == 31 ) ? currentDate + "st" : currentDate;
//     currentDate = ( currentDate == 2 || currentDate == 22 ) ? currentDate + "nd" : currentDate;
//     currentDate = ( currentDate == 3 ) || currentDate == 23 ? currentDate + "rd" : currentDate;
//     //                                                                                      ^^; have no idea why it's providing me an error
//     currentDate = ( currentDate > 3 || currentDate < 21 || currentDate > 23 || currentDate < 31 ) ? currentDate + "th" : currentDate;  

//     var currentHours = currentTime.getHours ( );
//     var currentMinutes = currentTime.getMinutes ();

//     currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;

//     // Choose time of day AM or PM
//     var timeofDay = ( currentHours < 12 ) ? "AM" : "PM";

//     currentHours = (currentHours == 0 ) ? 12 : currentHours;

//     var currentTimeString = "Today is : " + currentDay + "" + currentMonth + "" + currentDate + "" + currentHour + ":" + currentMinutes + " " + timeofDay;

//     document.getElementById("clock").firstChild.nodeValue = currentTimeString;
    
