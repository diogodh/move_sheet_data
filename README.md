# Move Sheet Data

This Google Apps Script (.gs) written in JavaScript allows you to move (or copy) data from one sheet to another.

## Usage Instructions:

1. Open [https://script.google.com/](https://script.google.com/) using a Google Account with editing permissions for the spreadsheet where you want to move data.

2. In the `move_data.gs` file, fill in the name of the source sheet and the spreadsheet ID (found in the spreadsheet URL [Learn more](https://developers.google.com/sheets/api/guides/concepts#spreadsheet)).

3. Review the comments inside the code to understand the data transfer process. In general, "the code below follows a specific syntax. Each line corresponds to a column of the destination sheet, starting from left to right. The content of each line represents the data to be moved from the source sheet."

4. To create a time trigger, follow these steps:
   - In the code, under the function 'createTimeDrivenTrigger2', set the desired run time using '.atHour()' for hours and '.nearMinute()' for minutes.
   - Save the code.
   - On the top bar, between "Debug" and "Execution Log," select the function "createTimeDrivenTrigger2."
   - Click on "Run."
