export const state = () => ({
  height: 0
})

export const mutations = {
  height(state, height) {
    state.height = height
  },
  block(state, block) {
    block.txLength = block.tx.length
  }
}
