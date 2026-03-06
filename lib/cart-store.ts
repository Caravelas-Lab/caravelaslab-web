import { useSyncExternalStore, useCallback } from "react"
import type { Product } from "./products"

interface CartItem {
  product: Product
  quantity: number
}

let cartItems: CartItem[] = []
let listeners: Array<() => void> = []

function emitChange() {
  for (const listener of listeners) {
    listener()
  }
}

function subscribe(listener: () => void) {
  listeners = [...listeners, listener]
  return () => {
    listeners = listeners.filter((l) => l !== listener)
  }
}

function getSnapshot() {
  return cartItems
}

export function useCart() {
  const items = useSyncExternalStore(subscribe, getSnapshot, getSnapshot)

  const addItem = useCallback((product: Product) => {
    const existing = cartItems.find((item) => item.product.id === product.id)
    if (existing) {
      cartItems = cartItems.map((item) =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    } else {
      cartItems = [...cartItems, { product, quantity: 1 }]
    }
    emitChange()
  }, [])

  const removeItem = useCallback((productId: string) => {
    cartItems = cartItems.filter((item) => item.product.id !== productId)
    emitChange()
  }, [])

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      cartItems = cartItems.filter((item) => item.product.id !== productId)
    } else {
      cartItems = cartItems.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    }
    emitChange()
  }, [])

  const clearCart = useCallback(() => {
    cartItems = []
    emitChange()
  }, [])

  const isInCart = useCallback(
    (productId: string) => {
      return items.some((item) => item.product.id === productId)
    },
    [items]
  )

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  const getWhatsAppMessage = useCallback(() => {
    if (items.length === 0) return ""
    let message = "Ola! Gostaria de fazer um pedido dos seguintes produtos:\n\n"
    items.forEach((item, index) => {
      message += `${index + 1}. ${item.product.name} (Qtd: ${item.quantity})\n`
      message += `   Material: ${item.product.material}\n`
      message += `   Dimensoes: ${item.product.dimensions}\n\n`
    })
    message += "Poderia me informar o valor e prazo de entrega?"
    return encodeURIComponent(message)
  }, [items])

  return {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    isInCart,
    totalItems,
    getWhatsAppMessage,
  }
}
