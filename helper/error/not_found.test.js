const { expect } = require('chai')
const NotFoundError = require('./not_found')

describe('bin/helper/error/not_found.js', () => {
  describe('class NotFoundError', () => {
    it('should return instance of NotFoundError', () => {
      const result = new NotFoundError('message')
      expect(result).to.be.an.instanceof(NotFoundError)
    })
  })
})