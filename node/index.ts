import {
  RecorderState,
  Service,
  ClientsConfig,
  ParamsContext
} from '@vtex/api'

import { queries } from './resolvers'

import { IOClients } from '@vtex/api'

const clients: ClientsConfig<IOClients> = {
  implementation: IOClients,
  options: {
    default: {
      retries: 2,
      timeout: 3 * 1000,
    },
  }
}

export default new Service<IOClients, RecorderState, ParamsContext>({
  clients: clients,
  graphql: {
    resolvers: {
      Query: {
        ...queries,
      },
    },
  },
})
