// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database();

// 云函数入口函数
exports.main = (event, context) => {
  try{
    // await db.collection("user").where({
    //   name: 'jerry'
    // }).remove();

    // db.collection("user").add({
    //   data: {
    //    name:1
    //   },
    //   success: res=>{
    //     debugger
    //   }
    // });

  }catch(err){
    console.log('err', err);
  }
}