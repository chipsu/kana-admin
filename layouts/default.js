import Flex from 'kana-ui/dist/core/Flex'
import Button from 'kana-ui/dist/core/Button'
import Dropdown from 'kana-ui/dist/core/Dropdown'
import {
  Bars,
  Home,
  LayerGroup,
  Wifi,
  User,
  Users,
  Trash,
} from 'styled-icons/fa-solid'

export default ({ children, ...rest }) => {
  const iconSize = 16
  const UserDropdownContent = (
    <Flex>
      <Button>
        <Trash size={iconSize} />
        Delete
      </Button>
      <Button>-profile</Button>
      <Button>-subscription</Button>
      <Button>
        <Users size={iconSize} /># teams
      </Button>
      <Button>-team1</Button>
      <Button>-team2</Button>
      <Button>-personal</Button>
      <Button>-manage teams</Button>
      <Button># logout</Button>
    </Flex>
  )
  return (
    <>
      <Flex wrap>
        <Button to="/">
          <Bars size={iconSize} />
        </Button>
        <Button to="/">
          <Home size={iconSize} />
        </Button>
        <Button to="/domains">
          <LayerGroup size={iconSize} />
          example.com
        </Button>
        <div style={{ flex: 1 }}>
          <input
            style={{ width: '100%' }}
            placeholder="Search or type a /command here, try /new node"
          />
        </div>
        <Button>
          <Wifi size={iconSize} />
        </Button>
        <Dropdown content={UserDropdownContent}>
          <Button>
            <User size={iconSize} />
          </Button>
        </Dropdown>
      </Flex>
      <Flex>{children}</Flex>
    </>
  )
}
