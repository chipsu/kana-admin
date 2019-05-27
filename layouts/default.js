import Flex from 'kana-ui/dist/core/Flex'

export default ({ children, ...rest }) => {
  return (
    <>
      <Flex wrap>xxx</Flex>
      <Flex>{children}</Flex>
    </>
  )
}
