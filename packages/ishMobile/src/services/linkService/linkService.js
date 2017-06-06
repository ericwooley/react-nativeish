export class LinkService {
  constructor ({openLinkBehavior}) {
    if (!openLinkBehavior) {
      throw new Error('openLinkBehavior is required')
    }
    this._openLinkBehavior = openLinkBehavior

    // self bindings
    this.openLink = this.openLink.bind(this)
  }
  openLink (url) {
    this._openLinkBehavior(url)
  }
}

export let linkService = null

export function setLinkServiceSingleton (linkServiceSingleton) {
  if (!(linkServiceSingleton instanceof LinkService)) {
    throw new Error('linkServiceSingleton must be an instance of LinkService')
  }
  linkService = linkServiceSingleton
  return linkServiceSingleton
}
