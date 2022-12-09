import methods from 'micro-method-router'
import { NextApiRequest, NextApiResponse } from 'next';

module.exports = methods({
  async get(req:NextApiRequest, res:NextApiResponse) {
    return res.status(200).json(`It's a GET Me!`)
  },async patch(req:NextApiRequest, res:NextApiResponse) {
    return res.status(200).json(`It's a PATCH Me!`)
  }
})