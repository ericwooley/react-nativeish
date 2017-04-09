import {setLinkServiceSingleton, LinkService} from './linkService'

describe('LinkService', () => {
  it('should throw an error when there is no linkBehavior', () => {
    expect(() => new LinkService()).toThrow()
  })
  it('should throw an error when you try to set a singleton that is of the wrong class', () => {
    expect(() => setLinkServiceSingleton(new (class TestClass {})())).toThrow()
  })
  it('should throw an error when you try to set a singleton that is of the undefined', () => {
    expect(() => setLinkServiceSingleton()).toThrow()
  })
  it('should initialize', () => {
    expect(new LinkService({openLinkBehavior: () => null})).toBeDefined()
  })
  it('should call the linkService behavior', () => {
    const mock = jest.fn()
    const linkService = new LinkService({openLinkBehavior: mock})
    linkService.openLink('http://www.google.com')
    expect(mock.mock.calls.length).toBe(1)
    expect(mock.mock.calls[0][0]).toBe('http://www.google.com')
  })
  it('should return the singleton when it is successfully set', () => {
    const newSingleton = new LinkService({openLinkBehavior: () => null})
    expect(setLinkServiceSingleton(newSingleton)).toBe(newSingleton)
  })
})
