Simple Google Apps Scripts to generate Google Docs file from a Google Sheet.

Script get records from a Google Sheet and fills them to a template then append to output document, each record for each page.

Default behavior:
- First row in the spreadsheet is skipped
- 2nd and 3rd colum are considered as input data corresponding for pattern1 and pattern2
- Template is a Google Doc, only first paragraph
- Output document is another Google Doc, it is clear before appending new data