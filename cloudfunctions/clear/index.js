const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database()
exports.main = async (event, context) => {
  try {
    return await db.collection('records').where({
      _openid: "oDnA_5aCk6e3aQ6v1LKgJVsXp5n0"
    }).remove()
  } catch(e) {
    console.error(e)
  }
}