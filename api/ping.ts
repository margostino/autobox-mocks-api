import { VercelRequest, VercelResponse } from '@vercel/node'

export default function ping(request: VercelRequest, response: VercelResponse) {
  response.status(200).send('pong')
}
