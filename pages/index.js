import Button from 'kana-ui/dist/core/Button'
import { Link } from '../routes'

export default props => {
  return (
    <>
      <h1>Hello World</h1>
      <div>
        This is my <Button>final CMS</Button>
      </div>
      <ul>
        <li>
          <Link route="/domain">Domains</Link>
        </li>
        <li>
          <Link route="/domain/000b00b5">Domain id</Link>
        </li>
      </ul>
    </>
  )
}
