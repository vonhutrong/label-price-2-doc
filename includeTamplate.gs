var spreadsheetId = 'spreadsheetId';
var templateDocId = 'templateDocId';
var outputDocId = 'outputDocId';
var sheetName = 'Sheet1';
var pattern1 = '<<LABEL>>';
var pattern2 = '<<PRICE>>';
var skipFirstRow = true;
var columnIndex1 = 1;
var columnIndex2 = 2;

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Custom Menu')
    .addItem('Print to Docs', 'generateDocumentAndShowAlert')
    .addToUi();
}

function onEdit(e) {
  generateDocument(sheetName, templateDocId, outputDocId);
}

function generateDocumentAndShowAlert() {
  generateDocument(sheetName, templateDocId, outputDocId);
  SpreadsheetApp.getUi().alert("Document has been generated.");
}
