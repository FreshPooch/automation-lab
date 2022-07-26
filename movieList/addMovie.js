const {By} = require('selenium-webdriver')


const deleteMovie = async (driver) => {
  
  await driver.findElement(By.xpath('//input')).sendKeys('Pirates of the Caribbean')

  await driver.findElement(By.xpath('//button')).click()
  await driver.findElement(By.xpath('(//button)[2]')).click()
  const movieList = await driver.findElement(By.xpath('//ul'))
  
 

  expect(movieList.hasChildren).toBeFalsy()
}

const crossOffMovie = async (driver, movieTitle) => {
  await driver.findElement(By.xpath('//input')).clear()
  await driver.findElement(By.xpath('//input')).sendKeys(`${movieTitle}`)

  await driver.findElement(By.xpath('//button')).click()
  await driver.findElement(By.xpath('//span')).click()
  

  const checked = await driver.findElement(By.xpath('(//span[contains(@class, "checked")])'))
  const displayed = checked.isDisplayed()
expect(displayed).toBeTruthy()
}

const displayedMessage = async (driver, movieTitle) => {
  await driver.findElement(By.xpath('//input')).sendKeys(`${movieTitle}`)

  await driver.findElement(By.xpath('//button')).click()
  await driver.findElement(By.xpath('(//button)[2]')).click()
  const message = await driver.findElement(By.xpath('//aside')).getText()
  console.log(message)
  expect(message).toContain(`${movieTitle}`); 
}

 

module.exports = {
  
  deleteMovie, 
  crossOffMovie,
  displayedMessage
}