function moveData() {
  var spreadsheetId = ""; // the Id of your spreadsheet
  var sourceSheetName = ""; // name of the source sheet
  var spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  var sourceSheet = spreadsheet.getSheetByName(sourceSheetName);

  var destinationSheetName = ""; // name of the destination sheet
  var destinationSheet = spreadsheet.getSheetByName(destinationSheetName);

  var sourceRange = "B:V"; // the range of the source sheet
  var lastRow = sourceSheet.getLastRow();
  
  // Adjust the range to start from the second row (skipping the header)
  var startRow = 2;
  var numRows = lastRow - 1;

  // Check if there are rows in the specified range
  if (numRows > 0) {
    var dataRange = sourceSheet.getRange(startRow, 2, numRows, 22);
    // Now you can continue processing the dataRange as needed
    var values = dataRange.getValues();

    // Map the specified columns as per the specified requirements
    values.forEach(function(row) {
      // Check if column A in Source Sheet is not empty
      if (row[0] !== '' && row[0] !== null) {
        destinationSheet.appendRow([

        // The code below follows a specific syntax. Each line corresponds to a column of the destination sheet, starting from left to right. The content of each line represents the data to be moved from the source sheet.

        '',          // This is our first line, and the content is '' which means the first column (normally A) of the destination sheet will remain unchanged.  
        '9999999',   // This is our second line, and it indicates that the second column (B) of the destination sheet will be filled with the value '9999999.' 
        row[0],      // This is our third line, and it specifies that the third column (C) of the destination sheet will be filled with the content of the first column (A) of the source sheet (indexed as "row[0]"). Remember that the index starts from 0, meaning row[0] is the first column (A) and so on.
        row[2],      // This is our fourth line, and it states that the fourth column (D) of the destination sheet will be filled with the content of the third column (C) of the source sheet (indexed as "row[2]").
      ]);            // You can continue this pattern for additional columns as needed.
    }
  });
  
    // Clear original data from the source sheet
    sourceSheet.getRange(2, 1, lastRow - 1, sourceSheet.getLastColumn()).clearContent();

  } else {
    // Handle the case where there are no rows in the specified range
    console.log("No rows to process");
  }
}


// Create a time-driven trigger to run the function at 23:30 every day
function createTimeDrivenTrigger2() {
  // Delete existing triggers to avoid duplicates
  var existingTriggers = ScriptApp.getProjectTriggers();
  for (var i = 0; i < existingTriggers.length; i++) {
    ScriptApp.deleteTrigger(existingTriggers[i]);
  }

  // Create a new time-driven trigger
  ScriptApp.newTrigger('moveData')
      .timeBased()
      .atHour() // put your hour, for example if you want it to run at 23:00, put .atHour(23)
      .nearMinute() // put the minutes, for example if you want it to run at 23:30, put .nearMinute(30). If you don't want to specify minutes, for example if you want it to run at 23:00, just delete the line
      .everyDays(1)
      .create();
}  
