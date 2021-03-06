// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: "mini-otrrj"
})

const db = cloud.database()
const _ = db.command
// 云函数入口函数
exports.main = async(event, context) => {
  let a = event.id;
  try {
    return await db.collection('maps').doc(a).update({
      // data 传入需要局部更新的数据
      data: {
        isNow: true
      }
    })
  } catch (e) {
    console.error(e)
  }
}