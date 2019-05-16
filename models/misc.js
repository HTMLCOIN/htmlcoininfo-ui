import * as HtmlcoininfoAPI from '@/services/htmlcoininfo-api'

class Misc {
  static info(options = {}) {
    return HtmlcoininfoAPI.get('/info', options)
  }

  static dailyTransactions(options = {}) {
    return HtmlcoininfoAPI.get('/stats/daily-transactions', options)
  }

  static blockInterval(options = {}) {
    return HtmlcoininfoAPI.get('/stats/block-interval', options)
  }

  static coinstake(options = {}) {
    return HtmlcoininfoAPI.get('/stats/coinstake', options)
  }

  static addressGrowth(options = {}) {
    return HtmlcoininfoAPI.get('/stats/address-growth', options)
  }

  static richList({from, to}, options = {}) {
    return HtmlcoininfoAPI.get(`/misc/rich-list`, {params: {page: from / (to - from), pageSize: to - from}, ...options})
  }

  static biggestMiners({from, to}, options = {}) {
    return HtmlcoininfoAPI.get(`/misc/biggest-miners`, {params: {page: from / (to - from), pageSize: to - from}, ...options})
  }
}

export default Misc
