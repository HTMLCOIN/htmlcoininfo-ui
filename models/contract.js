import * as HtmlcoininfoAPI from '@/services/htmlcoininfo-api'

class Contract {
  static get(id, options = {}) {
    return HtmlcoininfoAPI.get(`/contract/${id}`, options)
  }

  static getUtxo(id, options = {}) {
    return HtmlcoininfoAPI.get(`/contract/${id}/utxo`, options)
  }

  static getTransactions(id, {page, pageSize}, options = {}) {
    return HtmlcoininfoAPI.get(`/contract/${id}/txs`, {params: {page, pageSize}, ...options})
  }

  static listTokens({page, pageSize}, options = {}) {
    return HtmlcoininfoAPI.get(`/contract/hrc20-tokens`, {params: {page, pageSize}, ...options})
  }

  static richList(id, {page, pageSize}, options = {}) {
    return HtmlcoininfoAPI.get(`/contract/${id}/rich-list`, {params: {page, pageSize}, ...options})
  }
}

export default Contract
