const express = require('express')
const log4js = require('log4js')

const config = require('../config')
const sequelize = require('../util/sequelize')

const logger = log4js.getLogger()
logger.level = config.app.logLevel

const router = express.Router()

router.route('/').post((req, res) => {
  let sql = `
    insert into
      customer
    set

  `
  sequelize.query(sql, {
    replacements: { account: req.body.account },
    type: sequelize.QueryTypes.INSERT
  }).then(result => {
    logger.info(result)
  }).catch(err => {
    logger.error(err)
    res.json({ content: '', message: '服务器错误。', status: 500 })
  })
})

module.exports = router