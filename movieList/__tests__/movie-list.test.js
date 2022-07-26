const { Builder, Capabilities } = require("selenium-webdriver")

const {deleteMovie, crossOffMovie, displayedMessage} = require('../addMovie')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
  await driver.get('http://127.0.0.1:5501/movieList/index.html')
})

afterAll(async () => {
  await driver.quit()
})

test('delete a movie', async () => {
  await deleteMovie(driver)

  await driver.sleep(3000)
})

test('cross off a movie', async () => {
  await crossOffMovie(driver, `Happy Gilmore`)

  await driver.sleep(3000)
})

test('displays correct message', async () => {
  await displayedMessage(driver, 'Pirates of the Caribbean')
})