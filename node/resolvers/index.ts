import { Context } from 'vm';
import axios from 'axios'

export const queries = {
  getSalesChannelList: async (_: unknown, __: unknown, ctx: Context) => {
    const authToken = ctx.clients.ctx.authToken
    const account = ctx.clients.ctx.account
    const url = `http://${account}.myvtex.com/api/catalog_system/pvt/saleschannel/list`
    try{
      const res = await axios({
        method: 'get',
        url: url,
        headers: {
          Accept: 'application/json',
          'Proxy-Authorization': authToken,
          Authorization: authToken,
          VtexIdclientAutCookie: authToken,
        },
      })
      return res.data
    }
    catch(e){
      return e
    }
  },
}
