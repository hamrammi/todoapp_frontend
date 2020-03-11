const noop = () => {}

export class Subscription {
  static subscriptions: any = {}

  static storeSubscription (sub: Subscription) {
    Subscription.subscriptions[sub.subscriberId] = sub
  }

  static deleteSubscription (subscriberId: string) {
    try {
      const sub = Subscription.subscriptions[subscriberId]
      sub.setOnStateChange = noop
      delete Subscription.subscriptions[subscriberId]
    } catch (e) {
    }
  }

  static doUpdate () {
    const allSubs = Subscription.subscriptions
    Object.keys(allSubs).forEach((subscriberId: string) => {
      const sub: Subscription = Subscription.subscriptions[subscriberId]
      sub.onStateChange()
    })
  }

  readonly subscriberId: string
  onStateChange: Function

  constructor(subscriberId: string) {
    this.subscriberId = subscriberId
    this.onStateChange = noop
  }

  setOnStateChange (fn: Function) {
    this.onStateChange = fn
  }
}

export function subscribeOnStateChange (subscriberId: string, fn: Function) {
  console.log('Subscribing', subscriberId);
  const sub = new Subscription(subscriberId)
  sub.setOnStateChange(fn)
  Subscription.storeSubscription(sub)
}

export function unsubscribeOnStateChange (subscriberId: string) {
  console.log('Unsubscribing', subscriberId);
  Subscription.deleteSubscription(subscriberId)
}
