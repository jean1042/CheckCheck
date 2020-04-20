var express = require('express');
var router = express.Router();

var moment=require('moment');

const utils = require('../../utils/utils.js');
const statusCode = require('../../utils/statusCode');
const responseMessage = require('../../utils/responseMessage');
const db = require('../../module/pool');
//var mySQL = require('mysql');

//이 페이지의 현재 주소: localhost:3000/store/lookupStoreList
 /**1. 가맹점 정보 전체 조회
    METHOD : GET
    url : 
    authorization : token
    입력 : X
    출력 : storeName
     */
router.get('/', async (req, res) => { 
   var storeList;
  
  //db Query 날리기
  const storeSelectQuery='SELECT * FROM store';
  
  const storeSelectResult=await db.queryParam_Parse(storeSelectQuery);

  console.log('여기까지2');
  //result를 받고 success/ fail 여부 안드로이드한테 res로 응답
  if(!storeSelectResult){ //실패했을 경우
      res.status(200).send(utils.successFalse(statusCode.INTERNAL_SERVER_ERROR, responseMessage.STORELIST_ALL_FAIL));
  }else{ //잘 된 경우
    storeList=storeSelectResult;
    res.status(200).send(utils.successTrue(statusCode.OK, responseMessage.STORELIST_ALL_SUCCESS, storeList));
  }
});

/**2. 가맹점 정보 상세 조회
    METHOD : GET
    url : 
    authorization : token
    입력 : X
    출력 : storeName, storeLongtitude, storeLatitude, storeGu, storeCategory, store, PhoneNum
     */
    /*router.get('/:storeIdx', async (req, res) => {
      var storeName, storeLongtitude, storeLatitude, storeGu, storeCategory, phoneNum;
  
      //db Query 날리기
      const storeSelectQuery='SELECT storeName, storeLongtitude, storeLatitude, storeGu, storeCategory, store, phoneNum FROM store';
      const storeSelectResult=await db.queryParam_Arr(storeSelectQuery);
  
      //result를 받고 success/ fail 여부 안드로이드한테 res로 응답
    if(!storeSelectResult){ //실패했을 경우
      res.status(200).send(utils.successFalse(statusCode.INTERNAL_SERVER_ERROR, responseMessage.STORE_DETAIL_FAIL));
    }else{ //잘 된 경우
      storeList=storeSelectResult;
      res.status(200).send(utils.successTrue(statusCode.OK, responseMessage.STORE_DETAIL_SUCCEESS)); // data 값에 변수를 다 넣어줘야 하는가?
  }
  });*/
 


module.exports = router;