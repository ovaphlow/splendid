const express = require('express')
const log4js = require('log4js')

const config = require('../config')
const sequelize = require('../util/sequelize')

const logger = log4js.getLogger()
logger.level = config.app.logLevel

const router = express.Router()

router.route('/').post((req, res) => {
  logger.info(req.body)
  let sql = `
    insert into
      customer
    set
      uuid = uuid(),
      user_uuid = :user_uuid,
      name = :name,
      mobile = :mobile,
      province = :province,
      city = :city,
      district = :district,
      address = :address,
      postage = :postage
  `
  sequelize.query(sql, {
    replacements: req.body,
    type: sequelize.QueryTypes.INSERT
  }).then(result => {
    if (result[1] === 1) res.json({ content: '', message: '' })
    else res.json({ content: '', message: '保存数据失败。' })
  }).catch(err => {
    logger.error(err)
    res.json({ content: '', message: '服务器错误。', status: 500 })
  })
})

module.exports = router