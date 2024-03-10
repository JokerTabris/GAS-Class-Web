const TARGET_SPREADSHEET_ID = 'xxx';
const TARGET_SHEET_NAME = '初期設定';
const TARGET_SHEET_NAME2 = '記録';
const TARGET_SPREADSHEET = SpreadsheetApp.openById(TARGET_SPREADSHEET_ID);
const TARGET_SHEET = TARGET_SPREADSHEET.getSheetByName(TARGET_SHEET_NAME);
const TARGET_SHEET2 = TARGET_SPREADSHEET.getSheetByName(TARGET_SHEET_NAME2);
let user = Session.getActiveUser();
let email = user.getEmail();
// 該当の行を取得
let row = findRow(TARGET_SHEET, email, 1);
function findRow(TARGET_SHEET,val,col){
  // 受け取ったシートのデータを二次元配列に取得
  var dat = TARGET_SHEET.getDataRange().getValues();
  for(var i=1;i<dat.length;i++){
    if(dat[i][col-1] === val){
      return i+1;
    }
  }
return 0;
}
// -----------------------------------------------------
// アプリを開いた時に実行する関数（index.htmlを表示する） *gs関数1
// -----------------------------------------------------
const frameEng = TARGET_SHEET.getRange(row, 15).getValue().split(/\r\n|\n/);
const frameJap = TARGET_SHEET.getRange(row, 16).getValue().split(/\r\n|\n/);
const number = TARGET_SHEET.getRange(row, 18).getValue();
const num = [];
for (let i = number - number + 1; i < number + 1; i++) {
  num.push(i);
}
const voc = TARGET_SHEET.getRange(row, 19).getValue().split(/\r\n|\n/);
const vocR = TARGET_SHEET.getRange(row, 19).getValue();
const prc = TARGET_SHEET.getRange(row, 20).getValue().split(/\r\n|\n/);
const prc2 = TARGET_SHEET.getRange(row, 22).getValue().split(/\r\n|\n/);
const lCE = TARGET_SHEET.getRange(row, 26).getValue().split(/\r\n|\n/);
const lCJ = TARGET_SHEET.getRange(row, 27).getValue().split("/");
const lCA = TARGET_SHEET.getRange(row, 28).getValue()
const lCQ = TARGET_SHEET.getRange(row, 29).getValue().split("/");
const qQ = TARGET_SHEET.getRange(row, 30).getValue().split(/\r\n|\n/);
const qA = TARGET_SHEET.getRange(row, 31).getValue().split("/");
const gPH = TARGET_SHEET.getRange(row, 32).getValue().split(/\r\n|\n/);
const gP = TARGET_SHEET.getRange(row, 32).getValue().split("/");
const r = TARGET_SHEET.getRange(row, 33).getValue().split("/");
const reflection = TARGET_SHEET.getRange(row, 33).getValue().split(/\r\n|\n/);
const doc = TARGET_SHEET.getRange(row, 35).getValue().split(/\r\n|\n/);
const text = TARGET_SHEET.getRange(row, 17).getValue().split("墸");
const vocMean = [];
for (index = 0; index < 15; index++) {
  preVocMean = text[3 + index * 2];
  vocMean.push(preVocMean);
};
const lCT = [];
for (index2 = 0; index2 < 20; index2++) {
  preLCT = text[63 + index2 * 2];
  lCT.push(preLCT);
};
const rText= [];
for (index3 = 0; index3 < 7; index3++) {
  preRText = text[133 + index3 * 2];
  rText.push(preRText);
};
// -----------------------------------------------------
function doGet(e) {
  let page = e.parameter.page;
  if (!page) {
    page = 'index';
  }
  let html = HtmlService.createTemplateFromFile(page);
  html.user_name = TARGET_SHEET.getRange(row, 4).getValue();
  html.user_class = TARGET_SHEET.getRange(row, 7).getValue();
  html.user_name = TARGET_SHEET.getRange(row, 4).getValue();
  html.user_class = TARGET_SHEET.getRange(row, 7).getValue();
  html.lesson = TARGET_SHEET.getRange(row, 9).getValue();
  html.goal = TARGET_SHEET.getRange(row, 11).getValue();  
  html.goal1 = TARGET_SHEET.getRange(row, 12).getValue();
  html.goal2 = TARGET_SHEET.getRange(row, 13).getValue();
  html.frame = TARGET_SHEET.getRange(row, 14).getValue();
  html.frameEng1 = frameEng[0];
  html.frameEng2 = frameEng[1];
  html.frameEng3 = frameEng[2];
  html.frameEng4 = frameEng[3];
  html.frameEng5 = frameEng[4];
  html.frameEng6 = frameEng[5];
  html.frameEng7 = frameEng[6];
  html.frameEng8 = frameEng[7];
  html.frameEng9 = frameEng[8];
  html.frameEng10 = frameEng[9];
  html.frameEng11 = frameEng[10];
  html.frameEng12 = frameEng[11];
  html.frameEng13 = frameEng[12];
  html.frameEng14 = frameEng[13];
  html.frameEng15 = frameEng[14];
  html.frameJap1 = frameJap[0];
  html.frameJap2 = frameJap[1];
  html.frameJap3 = frameJap[2];
  html.frameJap4 = frameJap[3];
  html.frameJap5 = frameJap[4];
  html.frameJap6 = frameJap[5];
  html.frameJap7 = frameJap[6];
  html.frameJap8 = frameJap[7];
  html.frameJap9 = frameJap[8];
  html.frameJap10 = frameJap[9];
  html.frameJap11 = frameJap[10];
  html.frameJap12 = frameJap[11];
  html.frameJap13 = frameJap[12];
  html.frameJap14 = frameJap[13];
  html.frameJap15 = frameJap[14];
  html.frameMemo = text[1];
  html.num1 = num[0];
  html.num2 = num[1];
  html.num3 = num[2];
  html.num4 = num[3];
  html.num5 = num[4];
  html.num6 = num[5];
  html.num7 = num[6];
  html.num8 = num[7];
  html.num9 = num[8];
  html.num10 = num[9];
  html.num11 = num[10];
  html.num12 = num[11];
  html.num13 = num[12];
  html.num14 = num[13];
  html.num15 = num[14];
  html.voc1 = voc[0];
  html.voc2 = voc[1];
  html.voc3 = voc[2];
  html.voc4 = voc[3];
  html.voc5 = voc[4];
  html.voc6 = voc[5];
  html.voc7 = voc[6];
  html.voc8 = voc[7];
  html.voc9 = voc[8];
  html.voc10 = voc[9];
  html.voc11 = voc[10];
  html.voc12 = voc[11];
  html.voc13 = voc[12];
  html.voc14 = voc[13];
  html.voc15 = voc[14];
  html.prc1 = prc[0];
  html.prc2 = prc[1];
  html.prc3 = prc[2];
  html.prc4 = prc[3];
  html.prc5 = prc[4];
  html.prc6 = prc[5];
  html.prc7 = prc[6];
  html.prc8 = prc[7];
  html.prc9 = prc[8];
  html.prc10 = prc[9];
  html.prc11 = prc[10];
  html.prc12 = prc[11];
  html.prc13 = prc[12];
  html.prc14 = prc[13];
  html.prc15 = prc[14];
  html.vocMean = vocMean;
  html.vocMemo1 = text[33];
  html.vocMemo2 = text[35];
  html.vocMemo3 = text[37];
  html.vocMemo4 = text[39];
  html.vocMemo5 = text[41];
  html.vocMemo6 = text[43];
  html.vocMemo7 = text[45];
  html.vocMemo8 = text[47];
  html.vocMemo9 = text[49];
  html.vocMemo10 = text[51];
  html.vocMemo11 = text[53];
  html.vocMemo12 = text[55];
  html.vocMemo13 = text[57];
  html.vocMemo14 = text[59];
  html.vocMemo15 = text[61];
  html.vocA = TARGET_SHEET.getRange(row, 20).getValue();
  html.vocQ = TARGET_SHEET.getRange(row, 21).getValue();
  html.vocA2 = TARGET_SHEET.getRange(row, 22).getValue();
  html.vocQ2 = TARGET_SHEET.getRange(row, 23).getValue();
  html.page = TARGET_SHEET.getRange(row, 24).getValue();
  html.grammar = TARGET_SHEET.getRange(row, 25).getValue();
  html.lCE1 = lCE[0];
  html.lCJ1a = lCJ[0];
  html.lCJ1b = lCJ[1];
  html.lCE2 = lCE[1];
  html.lCJ2a = lCJ[2];
  html.lCJ2b = lCJ[3];
  html.lCE3 = lCE[2];
  html.lCJ3a = lCJ[4];
  html.lCJ3b = lCJ[5];
  html.lCE4 = lCE[3];
  html.lCJ4a = lCJ[6];
  html.lCJ4b = lCJ[7];
  html.lCE5 = lCE[4];
  html.lCJ5a = lCJ[8];
  html.lCJ5b = lCJ[9];
  html.lCE6 = lCE[5];
  html.lCJ6a = lCJ[10];
  html.lCJ6b = lCJ[11];
  html.lCE7 = lCE[6];
  html.lCJ7a = lCJ[12];
  html.lCJ7b = lCJ[13];
  html.lCE8 = lCE[7];
  html.lCJ8a = lCJ[14];
  html.lCJ8b = lCJ[15];
  html.lCE9 = lCE[8];
  html.lCJ9a = lCJ[16];
  html.lCJ9b = lCJ[17];
  html.lCE10 = lCE[9];
  html.lCJ10a = lCJ[18];
  html.lCJ10b = lCJ[19];
  html.lCE11 = lCE[10];
  html.lCJ11a = lCJ[20];
  html.lCJ11b = lCJ[21];
  html.lCE12 = lCE[11];
  html.lCJ12a = lCJ[22];
  html.lCJ12b = lCJ[23];
  html.lCE13 = lCE[12];
  html.lCJ13a = lCJ[24];
  html.lCJ13b = lCJ[25];
  html.lCE14 = lCE[13];
  html.lCJ14a = lCJ[26];
  html.lCJ14b = lCJ[27];
  html.lCE15 = lCE[14];
  html.lCJ15a = lCJ[28];
  html.lCJ15b = lCJ[29];
  html.lCE16 = lCE[15];
  html.lCJ16a = lCJ[30];
  html.lCJ16b = lCJ[31];
  html.lCE17 = lCE[16];
  html.lCJ17a = lCJ[32];
  html.lCJ17b = lCJ[33];
  html.lCE18 = lCE[17];
  html.lCJ18a = lCJ[34];
  html.lCJ18b = lCJ[35];
  html.lCE19 = lCE[18];
  html.lCJ19a = lCJ[36];
  html.lCJ19b = lCJ[37];
  html.lCE20 = lCE[19];
  html.lCJ20a = lCJ[38];
  html.lCJ20b = lCJ[39];
  html.lCT = lCT;
  html.lCMemo = text[103];
  html.qQ1 = qQ[0];
  html.qA1a = qA[0];
  html.qA1b = qA[1];
  html.qQ2 = qQ[1];
  html.qA2a = qA[2];
  html.qA2b = qA[3];
  html.qQ3 = qQ[2];
  html.qA3a = qA[4];
  html.qA3b = qA[5];
  html.qQ4 = qQ[3];
  html.qA4a = qA[6];
  html.qA4b = qA[7];
  html.qQ5 = qQ[4];
  html.qA5a = qA[8];
  html.qA5b = qA[9];
  html.qQ6 = qQ[5];
  html.qA6a = qA[10];
  html.qA6b = qA[11];
  html.qAText1 = text[105];
  html.qAText2 = text[107];
  html.qAText3 = text[109];
  html.qAText4 = text[111];
  html.qAText5 = text[113];
  html.qAText6 = text[115];
  html.qMemo = text[117];
  html.gPH1 = gP[0];
  html.gPE1a = gP[1];
  html.gPE1b = gP[2];
  html.gPJ1a = gP[3];
  html.gPJ1b = gP[4];
  html.gPH2 = gP[5];
  html.gPE2a = gP[6];
  html.gPE2b = gP[7];
  html.gPJ2a = gP[8];
  html.gPJ2b = gP[9];
  html.gPH3 = gP[10];
  html.gPE3a = gP[11];
  html.gPE3b = gP[12];
  html.gPJ3a = gP[13];
  html.gPJ3b = gP[14];
  html.gPText1 = text[119];
  html.gPText2 = text[121];
  html.gPText3 = text[123];
  html.gPText4 = text[125];
  html.gPText5 = text[127];
  html.gPText6 = text[129];
  html.gPMemo = text[131];
  html.daily = TARGET_SHEET.getRange(row, 34).getValue();
  html.r1a = r[0];
  html.r1b = r[1];
  html.r2a = r[2];
  html.r2b = r[3];
  html.r3 = reflection[2];
  html.r4 = reflection[3];
  html.r5 = reflection[4];
  html.rText = rText;
  html.docTitle1 = doc[0];
  html.docURL1 = doc[1];
  html.docTitle2 = doc[2];
  html.docURL2 = doc[3];
  html.date1 = text[147];
  html.score1 = text[149];
  html.date2 = text[151];
  html.score2 = text[153];
  html.date3 = text[155];
  html.score3 = text[157];
  html.date4 = text[159];
  html.score4 = text[161];
  html.date5 = text[163];
  html.score5 = text[165];
  html.lCTLength = text[167];
  html.date11 = text[169];
  html.score11 = text[171];
  html.date22 = text[173];
  html.score22 = text[175];
  html.date33 = text[177];
  html.score33 = text[179];
  html.date44 = text[181];
  html.score44 = text[183];
  const htmlEvl = html.evaluate();
  htmlEvl.setTitle("生徒用授業サイト");
  return htmlEvl; 
}
// -----------------------------------------------------

// -----------------------------------------------------
// スプレッドシートアプリからシートを取得する関数 *gs関数2
// -----------------------------------------------------
// 第一引数:スプレッドシートID、第二引数:シート名
function getSheet(ssId, ssName){
  // スプレッドシートを取得
  const ss = SpreadsheetApp.openById(ssId);
  // 指定されたシート名からシートを取得してリターン
  const sheet = ss.getSheetByName(ssName);
  return sheet;
}

function getSheet2(ssId2, ssName2){
  // スプレッドシートを取得
  const ss2 = SpreadsheetApp.openById(ssId2);
  // 指定されたシート名からシートを取得してリターン
  const sheet2 = ss2.getSheetByName(ssName2);
  return sheet2;
}

function addData2(record) {
  const sheet2 = getSheet2('xxx', '記録');
  const column = TARGET_SHEET.getRange(row, 10).getValue();
  sheet2.getRange(row, column).setValue(record);
}
