export const setPage = (page) => ({ type: 'SET_PAGE', page })

export const changeSelected = (id, value) => ({
  type: 'CHANGE_SELECTION', value, id
})

export const resetSelection = (id) => ({ type: 'RESET_SELECTION', id })

export const submitOrder = () => ({ type: 'SUBMIT_ORDER' })

export const submitResupply = () => ({ type: 'SUBMIT_RESUPPLY' })

export const toggleAddItemDialog = () => ({ type: 'TOGGLE_ADD_ITEM_DIALOG' })

export const addItem = (name, unitCost, unitPrice, qty) => ({ type: 'ADD_ITEM', name, unitCost, unitPrice, qty })
