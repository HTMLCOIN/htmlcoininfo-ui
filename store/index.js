import htmlcoininfoAPI from '@/services/htmlcoininfo-api'
import {getLocale} from '@/plugins/i18n'

export const actions = {
  async nuxtServerInit({commit}, {req}) {
    let {data} = await htmlcoininfoAPI.get('/info', {headers: {'X-Forwarded-For': req.ip}})
    commit('blockchain/height', data.height)
    commit('locale/language', getLocale(req))
  }
}
