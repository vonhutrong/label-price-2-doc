function generateDocument(sheetName, templateDocId, outputDocId) {
  console.info('Generating document');

  var template = DocumentApp.openById(templateDocId).getBody().getChild(0);
  var outputDoc = DocumentApp.openById(outputDocId);
  var body = outputDoc.getBody();
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  var data = sheet.getDataRange().getValues();

  var formatter = new Intl.NumberFormat('vi-VI', { style: 'currency', currency: 'VND' });

  body.clear();

  for (var i = 0; i < data.length; i++) {
      // Skip the first row (assumed to be header row)
      if (skipFirstRow && i === 0) {
        continue;
      }

      var rowData = data[i];
      var label = rowData[columnIndex1];
      var price = rowData[columnIndex2];

      var priceFormatted = formatter.format(price).replace('₫', 'đ');
      var record = {label: label, price: priceFormatted};

      var filledFragment = fillTemplate(template, record);
      appendToBody(body, filledFragment);
      if (i < data.length - 1) {
        body.appendPageBreak();
      }
  }

  outputDoc.saveAndClose();
}

function fillTemplate(template, record) {
  var tempTemplate = template.copy();
  tempTemplate.replaceText(pattern1, record.label);
  tempTemplate.replaceText(pattern2, record.price);
  return tempTemplate;
}

function appendToBody(body, filledFragment) {
  body.appendParagraph(filledFragment);
}
