import * as HtmlcoininfoAPI from '@/services/htmlcoininfo-api'

class Transaction {
  static get(id, options = {}) {
    if (Array.isArray(id)) {
      if (id.length === 0) {
        return []
      } else {
        return HtmlcoininfoAPI.get('/txs/' + id.join(','), options)
      }
    } else {
      return HtmlcoininfoAPI.get(`/tx/${id}`, options)
    }
  }

  static getBrief(id, options = {}) {
    if (Array.isArray(id)) {
      if (id.length === 0) {
        return []
      } else {
        return HtmlcoininfoAPI.get('/txs/' + id.join(','), {params: {brief: ''}, ...options})
      }
    } else {
      return HtmlcoininfoAPI.get(`/tx/${id}`, {params: {brief: ''}, ...options})
    }
  }

  static getRecentTransactions(options = {}) {
    return HtmlcoininfoAPI.get('/recent-txs', options)
  }
}

export default Transaction
