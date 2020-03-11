import {useEffect, useState} from "react";
import {subscribeOnStateChange, unsubscribeOnStateChange} from "./subscription";
import Store from "../store/store";

export function useStore (selector: Function) {
  const [value, setValue] = useState(selector(Store))

  useEffect(() => {
    function update () {
      console.log('Updating store');
      setValue(selector(Store))
    }

    const subscriberId = 'Client' + Math.random()
    subscribeOnStateChange(subscriberId, update)
    return () => unsubscribeOnStateChange(subscriberId)
  }, [selector])

  return value
}
